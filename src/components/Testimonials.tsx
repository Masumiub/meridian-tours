import { useEffect, useState } from "react";
import { TESTIMONIALS } from "../data";
import { useReducedMotion } from "../hooks";
import { Reveal, Lines } from "./Reveal";
import { cn } from "../utils/cn";
import { QuoteMark, Stars } from "./Icons";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const count = TESTIMONIALS.length;

  useEffect(() => {
    if (paused || reduced) return;
    const t = window.setInterval(() => setIdx((i) => (i + 1) % count), 6500);
    return () => window.clearInterval(t);
  }, [paused, reduced, count]);

  return (
    <section
      id="reviews"
      className="scroll-mt-[72px] border-y border-ink/8 bg-sand/50 py-24 lg:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-label="Traveller reviews"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-pine-700">
                <span className="h-px w-10 bg-amber-deep" aria-hidden />
                Traveller stories
              </p>
            </Reveal>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.02em] text-pine-950">
              <Lines
                lines={[
                  "The reviews we",
                  <span key="it" className="italic text-pine-700">
                    didn't write.
                  </span>,
                ]}
              />
            </h2>
          </div>
          <Reveal delay={150} className="flex items-center gap-6">
            <div className="hidden text-right sm:block">
              <p className="font-display text-[28px] font-semibold leading-none text-pine-950">4.9/5</p>
              <p className="mt-1 text-[12px] font-semibold text-mist">21,400 verified reviews</p>
            </div>
            <div className="flex gap-2.5">
              <button
                onClick={() => setIdx((i) => (i - 1 + count) % count)}
                aria-label="Previous review"
                className="grid h-11 w-11 place-items-center rounded-full border border-ink/20 bg-cream/70 text-pine-900 transition-all duration-300 hover:-translate-x-0.5 hover:border-pine-950 hover:bg-pine-950 hover:text-cream"
              >
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 12H5M10.5 6l-6 6 6 6" />
                </svg>
              </button>
              <button
                onClick={() => setIdx((i) => (i + 1) % count)}
                aria-label="Next review"
                className="grid h-11 w-11 place-items-center rounded-full border border-ink/20 bg-cream/70 text-pine-900 transition-all duration-300 hover:translate-x-0.5 hover:border-pine-950 hover:bg-pine-950 hover:text-cream"
              >
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12h15M13.5 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div
            className="relative mt-12 overflow-hidden"
            role="group"
            aria-roledescription="carousel"
            aria-label="Traveller reviews"
          >
            <div
              className="flex transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${idx * 100}%)` }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={t.name}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Review ${i + 1} of ${count}`}
                  aria-hidden={i !== idx}
                  className="w-full shrink-0 px-0.5"
                >
                  <figure className="relative rounded-[24px] border border-ink/10 bg-white p-8 shadow-[0_24px_50px_-30px_rgba(14,31,29,0.3)] sm:p-12">
                    <QuoteMark aria-hidden className="absolute right-8 top-8 h-10 w-14 text-sand-deep sm:right-12 sm:top-10" />
                    <blockquote className="relative max-w-[820px] font-display text-[21px] font-medium leading-[1.35] tracking-[-0.01em] text-pine-950 sm:text-[27px]">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-pine-950 font-display text-[17px] font-semibold text-amber">
                        {t.name
                          .split(" ")
                          .slice(0, 2)
                          .map((w) => w[0])
                          .join("")}
                      </span>
                      <span>
                        <span className="block text-[15px] font-extrabold text-pine-950">{t.name}</span>
                        <span className="mt-0.5 block text-[12.5px] font-medium text-mist">{t.meta}</span>
                      </span>
                      <span className="ml-auto flex items-center gap-3">
                        <Stars rating={t.rating} />
                        <span className="rounded-full border border-pine-900/20 px-3.5 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-pine-800">
                          {t.tour}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 flex items-center justify-center gap-2.5" role="tablist" aria-label="Choose review">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              role="tab"
              aria-selected={i === idx}
              aria-label={`Review ${i + 1}`}
              onClick={() => setIdx(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-500",
                i === idx ? "w-8 bg-pine-950" : "w-2 bg-ink/20 hover:bg-ink/40",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
