import { Container } from "@/components/layout/Container";

export function SiteFooter() {
  return (
    <footer className="bg-[#070b16] py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/60">
            © 2026 TDStamp. Thương hiệu con dấu quốc dân – 30 năm khẳng định để
            vươn xa.
          </p>
          <div className="flex items-center gap-5 text-sm">
            <a href="#home" className="text-white/70 hover:text-white">
              Trang chủ
            </a>
            <a href="#product" className="text-white/70 hover:text-white">
              Sản phẩm
            </a>
            <a href="#contact" className="text-white/70 hover:text-white">
              Liên hệ
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

