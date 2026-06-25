import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

function PartnerCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-7 ring-1 ring-black/5">
      <div className="text-2xl" aria-hidden="true">
        {icon}
      </div>
      <h3 className="mt-3 text-base font-bold text-brand-navy">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

export function PartnersSection() {
  return (
    <section className="bg-muted py-14 sm:py-18">
      <Container>
        <SectionHeading
          title="Giải pháp tối ưu cho từng nhóm đối tác"
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <PartnerCard
            icon="🏪"
            title="Đại lý & Cơ sở khắc dấu"
            description="Giao hàng tận nơi nhanh chóng, chính sách đổi trả dễ dàng, đặc quyền đào tạo chuyên sâu. Mức chiết khấu hấp dẫn hàng đầu cùng nhiều phần quà ý nghĩa."
          />
          <PartnerCard
            icon="📚"
            title="Nhà sách vừa & nhỏ"
            description="Nguồn cung cấp sỉ đáng tin cậy giúp tối ưu hóa lợi nhuận kinh doanh nhà sách. Nhu cầu sở hữu con dấu cá nhân ngày càng tăng cao."
          />
          <PartnerCard
            icon="🏢"
            title="Cơ quan / Văn phòng & Cá nhân"
            description="Tinh gọn hóa quy trình bàn giấy, nâng cao tính chuyên nghiệp. Không còn mệt mỏi vì ký tay hàng trăm văn bản mỗi ngày."
          />
        </div>
      </Container>
    </section>
  );
}

