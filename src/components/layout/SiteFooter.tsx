import { Container } from "@/components/layout/Container";

export function SiteFooter() {
  return (
    <footer className="bg-[#070b16] py-10">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:items-start">
          <div>
            <p className="text-sm font-semibold text-white">
              TDSTAMP – Sản xuất &amp; Phân phối con dấu trên toàn quốc
            </p>
            <div className="mt-3 space-y-2 text-sm leading-6 text-white/70">
              <p>📍 Văn phòng 1: Số 9 Mai Xuân Thưởng, Bình Tiên, TP. Hồ Chí Minh</p>
              <p>
                📍 Văn phòng 2: 63A Xô Viết Nghệ Tĩnh, P. Ninh Kiều, TP. Cần Thơ
              </p>
              <p>🏭 Xưởng sản xuất: 207 Nhật Tảo, P. Cái Răng, TP. Cần Thơ</p>
              <p>
                📞 Hotline: 0964 980 027 – 0932 922 557 – 0939 092 973 – 0931
                799 195
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:items-end">
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
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
            <p className="text-sm text-white/55">
              © 2026 TDStamp. Thương hiệu con dấu quốc dân – 30 năm khẳng định để
              vươn xa.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

