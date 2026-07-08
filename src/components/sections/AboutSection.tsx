import { Container } from "@/components/layout/Container";

function AboutCard({
  title,
  description,
  tone,
}: {
  title: string;
  description: string;
  tone: "amber" | "blue" | "green";
}) {
  // Use slightly stronger pastels + tone border for visibility on light screens.
  const toneClasses =
    tone === "amber"
      ? "bg-[#FFF3E6] ring-[#FDBA74]/40"
      : tone === "blue"
        ? "bg-[#E0F2FE] ring-[#7DD3FC]/35"
        : "bg-[#ECFDF5] ring-[#86EFAC]/30";

  return (
    <div className={`rounded-2xl p-6 ring-1 ${toneClasses}`}>
      <h3 className="text-base font-bold text-brand-navy">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

export function AboutSection() {
  return (
    <section className="bg-muted py-14 sm:py-18">
      <Container>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <AboutCard
            tone="blue"
            title="🎯 Đặt khách hàng làm trọng tâm"
            description="Luôn lắng nghe để thấu hiểu nhu cầu thực tế của đại lý và người dùng cuối."
          />
          <AboutCard
            tone="amber"
            title="🏆 Dày dặn kinh nghiệm"
            description="Nền tảng chuyên môn sâu sắc hơn 3 thập kỷ trong ngành dấu."
          />
          <AboutCard
            tone="green"
            title="🚀 Liên tục cải tiến"
            description="Đổi mới công nghệ, nâng cấp phôi dấu và hệ khuôn liên tục – điển hình là siêu phẩm T1014 năm 2026."
          />
        </div>
      </Container>
    </section>
  );
}

