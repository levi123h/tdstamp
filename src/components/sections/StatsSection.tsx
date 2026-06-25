"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

function CountUp({
  to,
  suffix = "",
  durationMs = 700,
  start,
}: {
  to: number;
  suffix?: string;
  durationMs?: number;
  start: boolean;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (prefersReducedMotion) {
      setValue(to);
      return;
    }

    let raf = 0;
    const startAt = performance.now();
    const from = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - startAt) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      const next = Math.round(from + (to - from) * eased);
      setValue(next);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [durationMs, prefersReducedMotion, start, to]);

  return (
    <span className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

function Stat({
  label,
  to,
  suffix,
  start,
}: {
  label: string;
  to: number;
  suffix?: string;
  start: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-7 backdrop-blur-sm">
      <div className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        <CountUp to={to} suffix={suffix} start={start} />
      </div>
      <div className="mt-2 text-sm font-semibold text-white/70">{label}</div>
    </div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [start, setStart] = useState(false);

  const items = useMemo(
    () => [
      { to: 30, suffix: "+", label: "Năm kinh nghiệm" },
      { to: 63, suffix: "", label: "Tỉnh thành phủ sóng" },
      { to: 500, suffix: "+", label: "Bộ khuôn mẫu" },
    ],
    [],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries.some((e) => e.isIntersecting);
        if (hit) setStart(true);
      },
      { threshold: 0.35 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#0b1020] py-14 sm:py-18">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/6 via-white/3 to-transparent p-6 sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-brand-gold/90">
                THỐNG KÊ NỔI BẬT
              </p>
              <h3 className="mt-3 text-balance text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                30 năm khẳng định chất lượng, phủ sóng toàn quốc
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/70">
              Những con số tạo nên vị thế thương hiệu và năng lực đáp ứng thị
              trường.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {items.map((it) => (
              <Stat
                key={it.label}
                label={it.label}
                to={it.to}
                suffix={it.suffix}
                start={start}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

