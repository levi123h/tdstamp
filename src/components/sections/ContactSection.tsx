"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Container } from "@/components/layout/Container";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agency, setAgency] = useState("");
  const [qty, setQty] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const canSubmit = useMemo(() => {
    return name.trim().length > 0 && phone.trim().length > 0;
  }, [name, phone]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");

    if (!canSubmit) {
      setState("error");
      setErrorMessage("Vui lòng nhập họ tên và số điện thoại.");
      return;
    }

    setState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          agency: agency.trim(),
          qty: qty.trim(),
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setState("error");
        setErrorMessage(data.error ?? "Có lỗi xảy ra. Vui lòng thử lại.");
        return;
      }

      setState("success");
      setName("");
      setPhone("");
      setAgency("");
      setQty("");
    } catch {
      setState("error");
      setErrorMessage("Không thể kết nối máy chủ. Vui lòng thử lại.");
    }
  }

  return (
    <section id="contact" className="bg-[#0b1020] py-14 sm:py-18">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <h2 className="text-balance text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Liên Hệ Hợp Tác & Nhận Báo Giá Sỉ
            </h2>
            <p className="mt-3 text-pretty text-base leading-7 text-white/80">
              Đăng ký nhận báo giá sỉ con dấu T1014 nhanh chóng! Để lại thông tin
              ngay, đội ngũ TDStamp sẽ liên hệ hỗ trợ và gửi chính sách đại lý độc
              quyền sau ít phút
            </p>

            <form onSubmit={onSubmit} className="mt-7 space-y-4" noValidate>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-white/90">
                    Họ và tên <span className="text-brand-gold">*</span>
                  </span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-gold/60 focus:outline-none focus:ring-2 focus:ring-brand-gold/30"
                    placeholder="Nguyễn Văn A"
                    autoComplete="name"
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-white/90">
                    Số điện thoại <span className="text-brand-gold">*</span>
                  </span>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-gold/60 focus:outline-none focus:ring-2 focus:ring-brand-gold/30"
                    placeholder="09xx xxx xxx"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-medium text-white/90">
                  Tên cơ sở / Đại lý (nếu có)
                </span>
                <input
                  value={agency}
                  onChange={(e) => setAgency(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-gold/60 focus:outline-none focus:ring-2 focus:ring-brand-gold/30"
                  placeholder="Tên cơ sở / đại lý"
                  autoComplete="organization"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-white/90">
                  Số lượng dự kiến
                </span>
                <input
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-gold/60 focus:outline-none focus:ring-2 focus:ring-brand-gold/30"
                  placeholder="Ví dụ: 50 / 100 / 500..."
                  inputMode="numeric"
                />
              </label>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!canSubmit || state === "submitting"}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-brand-gold px-6 py-3 text-sm font-extrabold tracking-wide text-brand-navy hover:bg-brand-gold/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {state === "submitting" ? "ĐANG GỬI..." : "GỬI YÊU CẦU NGAY"}
                </button>
              </div>

              <div aria-live="polite" className="min-h-6 text-sm">
                {state === "success" ? (
                  <p className="text-emerald-300">
                    ✅ Gửi thành công! Chúng tôi sẽ liên hệ bạn trong vòng 1 giờ.
                  </p>
                ) : null}
                {state === "error" ? (
                  <p className="text-red-300">
                    ❌ {errorMessage || "Có lỗi xảy ra. Vui lòng thử lại."}
                  </p>
                ) : null}
              </div>
            </form>

            {/* Business info moved to footer */}
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 ring-1 ring-white/5">
              <Image
                src="https://images.pexels.com/photos/7654118/pexels-photo-7654118.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Khách hàng đang đóng dấu hồ sơ tại văn phòng"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

