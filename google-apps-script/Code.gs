/**
 * TDSTAMP – Google Sheets webhook for contact form
 *
 * Setup:
 * 1. Create a Google Sheet with headers in row 1:
 *    Thời gian | Họ tên | Số điện thoại | Cơ sở/Đại lý | Số lượng | Nguồn
 * 2. Extensions → Apps Script → paste this file
 * 3. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the Web App URL into GOOGLE_SHEETS_WEBHOOK_URL (Vercel + .env.local)
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.name || "",
      data.phone || "",
      data.agency || "",
      data.qty || "",
      data.source || "tdstamp-website",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(error) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
