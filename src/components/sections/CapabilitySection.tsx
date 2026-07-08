import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

function CapabilityItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl bg-white px-6 py-4 ring-1 ring-black/5">
      <h3 className="text-base font-bold text-brand-navy">{title}</h3>
      <p className="mt-2 text-sm leading-5 text-slate-600">{description}</p>
    </div>
  );
}

export function CapabilitySection() {
  return (
    <section id="capability" className="bg-white py-14 sm:py-18">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="Năng lực sản xuất công nghệ cao – Tiêu chuẩn quốc tế"
            subtitle="Một con dấu chất lượng cao phải đáp ứng độ bền của thân dấu, độ rõ nét của mặt mộc và độ bền màu của mực."
            align="center"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl ring-1 ring-black/5">
              <Image
                src="/images/con-dau.jpg"
                alt="Hình ảnh minh hoạ về dịch vụ con dấu"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>

          <div className="grid gap-3 lg:col-span-7">
            <CapabilityItem
              title="Hơn 60 bộ máy móc nhập khẩu"
              description="Từ các thị trường khắt khe nhất: Nhật Bản, Hàn Quốc, Đài Loan, Trung Quốc."
            />
            <CapabilityItem
              title="Đội ngũ nhân sự tay nghề cao"
              description="Trực tiếp vận hành, giám sát nghiêm ngặt đầu ra sản phẩm."
            />
            <CapabilityItem
              title="Hơn 500 bộ khuôn mẫu đa dạng"
              description="Đáp ứng từ con dấu cá nhân nhỏ gọn đến các hộp dấu siêu lớn như T1014 (50x80mm)."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

