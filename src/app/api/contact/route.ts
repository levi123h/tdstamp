import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  phone?: string;
  agency?: string;
  qty?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const agency = body.agency?.trim() || "Không có";
    const qty = body.qty?.trim() || "Không có";

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Họ tên và số điện thoại là bắt buộc." },
        { status: 400 },
      );
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("Missing GOOGLE_SHEETS_WEBHOOK_URL");
      return NextResponse.json(
        {
          error:
            "Form chưa được cấu hình Google Sheet. Vui lòng gọi hotline hoặc thử lại sau.",
        },
        { status: 503 },
      );
    }

    const payload = {
      name,
      phone,
      agency,
      qty,
      submittedAt: new Date().toISOString(),
      source: "tdstamp-website",
    };

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Google Sheets webhook error:", detail);
      return NextResponse.json(
        { error: "Không lưu được dữ liệu. Vui lòng thử lại." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Có lỗi xảy ra. Vui lòng thử lại." },
      { status: 500 },
    );
  }
}
