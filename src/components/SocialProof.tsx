import { PRESS } from "../data";
import { Reveal } from "./Reveal";
import { Compass, Leaf, Shield } from "./Icons";

const pressStyles = [
  "font-display text-[22px] italic",
  "font-mono text-[13px] tracking-[0.28em]",
  "font-display text-[19px] font-semibold",
  "font-body text-[18px] font-extrabold tracking-tight",
  "font-display text-[21px] font-medium tracking-wide",
];

const trust = [
  {
    icon: Shield,
    title: "ATOL financial protection",
    body: "Your money is ring-fenced with the UK's leading travel guarantee, end to end.",
  },
  {
    icon: Compass,
    title: "IATA accredited operator",
    body: "17 years, 140+ destinations and zero unhandled trip failures to our name.",
  },
  {
    icon: Leaf,
    title: "Carbon-balanced since 2021",
    body: "Every departure offset through audited projects — receipts sent, not assumed.",
  },
];

export function SocialProof() {
  return (
    <section className="border-b border-ink/8" aria-label="Press and trust">
      <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 lg:py-16">
        <div className="flex flex-col items-center gap-7 lg:flex-row lg:justify-between">
          <Reveal className="font-mono text-[10.5px] uppercase tracking-[0.3em] text-mist">
            As featured in
          </Reveal>
          <Reveal delay={120} className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 lg:justify-end">
            {PRESS.map((p, i) => (
              <span
                key={p}
                className={`${pressStyles[i]} cursor-default text-ink/45 transition-all duration-300 hover:-translate-y-0.5 hover:text-pine-900`}
              >
                {p}
              </span>
            ))}
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 border-t border-ink/10 pt-10 sm:grid-cols-3">
          {trust.map((t, i) => (
            <Reveal key={t.title} delay={i * 110}>
              <div className="group flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-pine-900/15 bg-pine-100/50 text-pine-800 transition-all duration-300 group-hover:border-amber group-hover:bg-amber/15">
                  <t.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[15px] font-extrabold text-pine-950">{t.title}</h3>
                  <p className="mt-1.5 max-w-[280px] text-[13px] leading-relaxed text-mist">{t.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
