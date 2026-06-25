import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://tdstamp.vn"),
  title: {
    default: "TDSTAMP – Sản xuất & Phân phối con dấu trên toàn quốc",
    template: "%s | TDSTAMP",
  },
  description:
    "TDSTAMP – Thương hiệu con dấu quốc dân với hơn 30 năm kinh nghiệm, phủ sóng 63 tỉnh thành. Liên hệ nhận báo giá sỉ và chính sách đại lý.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "TDSTAMP – Sản xuất & Phân phối con dấu trên toàn quốc",
    description:
      "Thương hiệu con dấu quốc dân – 30 năm khẳng định để vươn xa. Nhận báo giá sỉ trong 1 giờ.",
    url: "/",
    siteName: "TDSTAMP",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "TDSTAMP – Sản xuất & Phân phối con dấu trên toàn quốc",
    description:
      "Thương hiệu con dấu quốc dân – 30 năm khẳng định để vươn xa. Nhận báo giá sỉ trong 1 giờ.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
