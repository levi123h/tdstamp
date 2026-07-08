import Image from "next/image";
import { Container } from "@/components/layout/Container";

function CheckItem({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/30"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 20 20"
          className="h-3.5 w-3.5 text-emerald-300"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.704 5.296a1 1 0 0 1 0 1.414l-7.5 7.5a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 1 1 1.414-1.414l2.793 2.793 6.793-6.793a1 1 0 0 1 1.414 0Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className="text-sm leading-6 text-white/80">{children}</span>
    </li>
  );
}

export function ProductLaunchSection() {
  return (
    <section className="bg-[#0b1020] py-14 sm:py-18">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
              <Image
                src="/images/t1014.png"
                alt="Phôi hộp dấu T1014"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
                // Avoid dev-time 500s if the file isn't present yet.
                unoptimized
                priority={false}
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-10 rounded-full bg-brand-gold/90" />
              <span className="sr-only">Giới thiệu sản phẩm</span>
            </div>

            <h2 className="mt-4 text-balance text-xl font-extrabold tracking-tight text-white sm:text-2xl">
              RA MẮT PHÔI HỘP DẤU MỚI T1014
            </h2>
            <p className="mt-1 text-sm font-semibold text-brand-gold/90">
              Kích thước 50x80mm – Thiết kế mới 2026
            </p>

            <ul className="mt-6 space-y-3">
              <CheckItem>
                Thiết kế hiện đại, bộ khung sườn chắc chắn chịu lực tốt, sử dụng
                lâu dài.
              </CheckItem>
              <CheckItem>
                Cơ chế đóng dấu cực êm, khay mực loang đều, chữ ép xuống sắc nét,
                không lem.
              </CheckItem>
              <CheckItem>
                Phù hợp tuyệt đối để làm dấu &quot;Bản sao văn bản&quot;, dấu sao y
                bản chính, dấu hành chính.
              </CheckItem>
              <CheckItem>
                Phù hợp cho đơn vị khắc dấu, đại lý và cửa hàng văn phòng phẩm.
              </CheckItem>
            </ul>

            <div className="mt-7">
              <p className="text-sm font-extrabold text-white">Ứng dụng đa dạng:</p>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Dấu sao y, sao lục hồ sơ · Dấu nghiệp vụ, hành chính · Các mẫu dấu
                nội dung nhiều dòng cần hiển thị rõ ràng.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

