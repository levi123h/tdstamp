export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "left" ? "text-left" : "text-center";
  return (
    <div className={`${alignClass}`}>
      <h2 className="text-balance text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-pretty text-base leading-7 text-slate-600">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

