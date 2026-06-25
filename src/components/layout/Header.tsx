import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

const navItems = [
  { href: "#home", label: "Trang chủ" },
  { href: "#product", label: "Sản phẩm" },
  { href: "#capability", label: "Năng lực cốt lõi" },
  { href: "#contact", label: "Liên hệ" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#home"
          className="text-base font-extrabold tracking-wide text-brand-maroon"
          aria-label="TDSTAMP - Trang chủ"
        >
          TDSTAMP
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Chính">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-navy/80 hover:text-brand-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="#contact" className="hidden sm:inline-flex">
            NHẬN BÁO GIÁ SỈ
          </Button>
          <Button href="#contact" className="sm:hidden">
            BÁO GIÁ
          </Button>
        </div>
      </Container>
    </header>
  );
}

