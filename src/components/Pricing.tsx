import { PLANS } from "../data";
import { Reveal, Lines } from "./Reveal";
import { cn } from "../utils/cn";
import { ArrowRight, Check } from "./Icons";

export function Pricing({ onBook }: { onBook: () => void }) {
  return (
    <section id="pricing" className="scroll-mt-[72px] py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="mx-auto max-w-[640px] text-center">
          <Reveal>
            <p className="flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-pine-700">
              <span className="h-px w-8 bg-amber-deep" aria-hidden />
              Plans &amp; pricing
              <span className="h-px w-8 bg-amber-deep" aria-hidden />
            </p>
          </Reveal>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.02em] text-pine-950">
            <Lines
              lines={[
                "Pick your",
                <span key="it" className="italic text-pine-700">
                  altitude.
                </span>,
              ]}
            />
          </h2>
          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-[480px] text-[15.5px] leading-relaxed text-mist">
              Three ways to travel with us. Every level is hand-crafted, ATOL-protected and carbon-balanced — the
              difference is how deep we go.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 120} className="h-full">
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-[24px] border p-8 transition-all duration-300 hover:-translate-y-1.5 sm:p-9",
                  p.featured
                    ? "border-pine-800 bg-pine-950 text-cream shadow-[0_40px_80px_-32px_rgba(11,36,31,0.75)] lg:scale-[1.035]"
                    : "border-ink/10 bg-white hover:border-pine-900/30 hover:shadow-[0_28px_56px_-28px_rgba(14,31,29,0.35)]",
                )}
              >
                {p.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-amber px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-pine-950 shadow-lg">
                    Most loved
                  </span>
                )}
                <h3 className={cn("font-display text-[27px] font-semibold tracking-tight", p.featured ? "text-cream" : "text-pine-950")}>
                  {p.name}
                </h3>
                <p className={cn("mt-1 text-[13.5px] font-medium", p.featured ? "text-cream/60" : "text-mist")}>{p.tagline}</p>

                <p className="mt-6 flex items-baseline gap-2">
                  <span className={cn("text-[11px] font-bold uppercase tracking-wider", p.featured ? "text-cream/55" : "text-mist")}>
                    {p.per}
                  </span>
                  <span className={cn("font-display text-[46px] font-semibold leading-none tracking-tight", p.featured ? "text-amber" : "text-pine-950")}>
                    {p.price}
                  </span>
                </p>

                <ul className={cn("mt-8 space-y-3.5 border-t pt-8", p.featured ? "border-cream/15" : "border-ink/10")}>
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[13.5px] leading-snug">
                      <span
                        className={cn(
                          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                          p.featured ? "bg-amber/20 text-amber" : "bg-pine-100 text-pine-800",
                        )}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      <span className={cn("font-semibold", p.featured ? "text-cream/85" : "text-ink/75")}>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-9">
                  <button
                    onClick={onBook}
                    className={cn(
                      "group flex w-full items-center justify-center gap-2.5 rounded-full py-4 text-[14.5px] font-bold transition-all duration-300 hover:-translate-y-0.5",
                      p.featured
                        ? "btn-shine bg-amber text-pine-950 hover:bg-[#f0b254]"
                        : "border border-pine-900/30 text-pine-900 hover:border-pine-950 hover:bg-pine-950 hover:text-cream",
                    )}
                  >
                    {p.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-12 text-center font-mono text-[10.5px] uppercase tracking-[0.22em] text-mist">
            All plans include ATOL protection · Carbon-balancing · 48-hour itinerary delivery · Prices in USD
          </p>
        </Reveal>
      </div>
    </section>
  );
}
