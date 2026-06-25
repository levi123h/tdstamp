import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

function Feature({ children }: { children: string }) {
  return (
    <li className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-sm leading-6 text-white/90">
      {children}
    </li>
  );
}

export function ProductSection() {
  return (
    <section
      id="product"
      className="bg-gradient-to-br from-brand-navy via-[#1b2440] to-[#2a0f1c] py-14 sm:py-18"
    >
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-balance text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              TDStamp – T1014
            </h2>
            <p className="mt-3 text-pretty text-base leading-7 text-white/80">
              Dòng phôi dấu thế hệ mới tối ưu cho đại lý và cơ sở khắc dấu: bền,
              êm, sắc nét, hỗ trợ tốt nhu cầu dấu hành chính và sao y.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
          <SectionHeading
            title="Vì sao T1014 được lựa chọn?"
            subtitle="Tập trung vào trải nghiệm sử dụng: thân dấu chắc chắn, cơ chế đóng êm và độ nét ổn định."
            align="left"
          />

          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Feature>
              Thiết kế hiện đại, bộ khung sườn chắc chắn chịu lực tốt, sử dụng
              lâu dài.
            </Feature>
            <Feature>
              Cơ chế đóng dấu cực êm, khay mực loang đều, chữ ép xuống sắc nét,
              không lem.
            </Feature>
            <Feature>
              Phù hợp tuyệt đối để làm dấu &quot;Bản sao văn bản&quot;, dấu sao y bản
              chính, dấu hành chính.
            </Feature>
            <Feature>
              Kích thước lớn (50x80mm) đáp ứng nhu cầu dấu bảng tên, dấu chức
              danh và nội dung dài.
            </Feature>
          </ul>
        </div>
      </Container>
    </section>
  );
}

