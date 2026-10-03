import { useEffect, useState } from "react";
import { FLAP_WORDS, IMAGES, STATS } from "../data";
import { scrollToId, useCountUp, useInView, useReducedMotion } from "../hooks";
import { Reveal, Lines } from "./Reveal";
import { ArrowRight, ArrowUpRight, Compass, Stars } from "./Icons";

function FlipWord() {
  const [idx, setIdx] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const t = window.setInterval(() => setIdx((i) => (i + 1) % FLAP_WORDS.length), 3200);
    return () => window.clearInterval(t);
  }, [reduced]);
  return (
    <span className="inline-block min-w-[86px] text-center">
      <span key={idx} className={reduced ? "inline-block font-semibold text-amber" : "flap-word font-semibold text-amber"}>
        {FLAP_WORDS[idx]}
      </span>
    </span>
  );
}

function Stat({ value, suffix, label, decimals }: { value: number; suffix: string; label: string; decimals: number }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const count = useCountUp(value, inView, decimals);
  return (
    <div ref={ref}>
      <span className="font-display text-[30px] font-semibold leading-none text-pine-950">
        {count}
        <span className="text-amber-deep">{suffix}</span>
      </span>
      <p className="mt-2 max-w-[150px] text-[12.5px] leading-snug text-mist">{label}</p>
    </div>
  );
}

export function Hero({ onReserve }: { onReserve: (tourId: string) => void }) {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* ambient washes */}
      <div aria-hidden className="pointer-events-none absolute -left-44 -top-44 h-[560px] w-[560px] rounded-full bg-amber/20 blur-[130px] anim-drift" />
      <div aria-hidden className="pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-pine-600/20 blur-[120px] anim-drift [animation-delay:-9s]" />

      {/* departures board */}
      <div className="relative mt-[72px] border-b border-pine-950/20 bg-pine-950 text-cream/70">
        <div className="no-scrollbar mx-auto flex h-11 max-w-[1400px] items-center gap-5 overflow-x-auto whitespace-nowrap px-5 font-mono text-[10px] uppercase tracking-[0.22em] sm:px-8 sm:text-[10.5px]">
          <span className="flex items-center gap-2">
            <span className="dot-pulse h-1.5 w-1.5 rounded-full bg-amber" />
            Now boarding
          </span>
          <span aria-hidden className="hidden h-4 w-px bg-cream/20 sm:block" />
          <span className="flex items-center gap-3">
            Destination <FlipWord />
          </span>
          <span aria-hidden className="hidden h-4 w-px bg-cream/20 md:block" />
          <span className="hidden md:block">
            Mar 14 — 08:45
          </span>
          <span aria-hidden className="hidden h-4 w-px bg-cream/20 md:block" />
          <span className="hidden md:block">Gate 07</span>
          <span aria-hidden className="hidden h-4 w-px bg-cream/20 lg:block" />
          <span className="hidden text-amber lg:block">4 seats left</span>
          <span className="ml-auto hidden items-center gap-2 sm:flex">
            <span className="dot-pulse h-1.5 w-1.5 rounded-full bg-emerald-400" />
            All times local · On time
          </span>
        </div>
      </div>

      {/* meridian arcs */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-32 top-24 hidden h-[620px] w-[620px] text-pine-900 lg:block"
        viewBox="0 0 600 600"
        fill="none"
      >
        <circle cx="300" cy="300" r="280" stroke="currentColor" strokeOpacity="0.1" />
        <ellipse cx="300" cy="300" rx="120" ry="280" stroke="currentColor" strokeOpacity="0.08" />
        <ellipse cx="300" cy="300" rx="220" ry="280" stroke="currentColor" strokeOpacity="0.06" />
        <path
          d="M60 420 C 200 120, 420 120, 560 260"
          stroke="var(--color-amber)"
          strokeOpacity="0.45"
          strokeWidth="1.4"
          strokeDasharray="5 12"
          className="anim-dash"
        />
      </svg>

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-14 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-16">
        {/* left */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-pine-700">
              <span className="h-px w-10 bg-amber-deep" aria-hidden />
              Meridian Tours &amp; Travel · Est. 2009
            </p>
          </Reveal>
          <h1 className="mt-6 font-display text-[clamp(2.9rem,7.2vw,5.4rem)] font-medium leading-[0.98] tracking-[-0.025em] text-pine-950">
            <Lines
              lines={[
                "Go where the",
                <span key="it" className="italic text-pine-700">
                  map runs out.
                </span>,
              ]}
            />
          </h1>
          <Reveal delay={280}>
            <p className="mt-7 max-w-[540px] text-[16.5px] leading-relaxed text-mist sm:text-[17.5px]">
              Hand-crafted small-group tours across <strong className="font-bold text-pine-900">140+ destinations</strong> —
              designed by people who have actually been there, with a real concierge on message for the entire time you're
              gone.
            </p>
          </Reveal>
          <Reveal delay={380}>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-5">
              <a
                href="#tours"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("tours");
                }}
                className="btn-shine group inline-flex items-center gap-2.5 rounded-full bg-pine-900 px-7 py-4 text-[15px] font-bold text-cream shadow-[0_16px_36px_-14px_rgba(16,49,41,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-pine-800"
              >
                Browse signature tours
                <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <button
                onClick={() => onReserve("")}
                className="group inline-flex items-center gap-3.5"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full border border-ink/20 bg-cream/70 transition-all duration-300 group-hover:border-amber group-hover:bg-amber/15">
                  <ArrowUpRight className="h-4 w-4 text-pine-900 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="text-left leading-tight">
                  <span className="block text-[15px] font-bold text-pine-950">Talk to a designer</span>
                  <span className="mt-0.5 block text-[12.5px] font-medium text-mist">Human reply within 4 hours</span>
                </span>
              </button>
            </div>
          </Reveal>
          <Reveal delay={460}>
            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-mist">
              <Stars rating={5} />
              <span>
                <strong className="font-bold text-pine-950">4.9/5</strong> from 21,400 verified reviews
              </span>
              <span aria-hidden className="text-ink/20">
                |
              </span>
              <span>ATOL protected · IATA accredited</span>
            </div>
          </Reveal>
          <Reveal delay={540}>
            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-ink/10 pt-8 sm:grid-cols-4">
              {STATS.map((s) => (
                <Stat key={s.label} {...s} />
              ))}
            </dl>
          </Reveal>
        </div>

        {/* right — image stack */}
        <div className="relative pb-10 lg:col-span-5">
          <Reveal delay={220} className="relative">
            {/* rotating badge */}
            <div
              aria-hidden
              className="absolute -left-7 -top-9 z-20 hidden h-[118px] w-[118px] place-items-center sm:grid"
            >
              <div className="absolute inset-0 rounded-full border border-ink/10 bg-cream/85 shadow-[0_18px_40px_-18px_rgba(14,31,29,0.35)] backdrop-blur" />
              <svg viewBox="0 0 120 120" className="anim-spin-slow absolute inset-0 h-full w-full">
                <defs>
                  <path id="badge-circle" d="M60 14a46 46 0 1 1 0 92 46 46 0 1 1 0-92" fill="none" />
                </defs>
                <text className="font-mono" fontSize="9.2" letterSpacing="2.6" fill="rgba(14,31,29,0.62)">
                  <textPath href="#badge-circle">HAND-CRAFTED · SMALL GROUPS · EST. 2009 ·</textPath>
                </text>
              </svg>
              <span className="relative grid h-11 w-11 place-items-center rounded-full bg-pine-950 text-cream">
                <Compass className="h-5 w-5" />
              </span>
            </div>

            {/* main image */}
            <figure className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-ink/10 shadow-[0_44px_90px_-32px_rgba(14,31,29,0.5)]">
              <img
                src={IMAGES.heroMain}
                alt="Santorini's white and blue buildings terraced over the Aegean sea"
                className="anim-kenburns h-full w-full object-cover"
                loading="eager"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-pine-950/35 via-transparent to-transparent" />
              <figcaption className="absolute right-4 top-4 rounded-full bg-pine-950/60 px-3.5 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.22em] text-cream/90 backdrop-blur">
                36.4618° N, 25.3753° E
              </figcaption>
            </figure>

            {/* secondary floating image */}
            <figure className="anim-float absolute -right-3 top-12 z-10 w-28 overflow-hidden rounded-2xl border-4 border-cream shadow-[0_24px_44px_-18px_rgba(14,31,29,0.4)] sm:-right-7 sm:w-36 [animation-delay:-3s]">
              <img src={IMAGES.heroSecondary} alt="Cherry blossoms over a Kyoto temple" className="h-full w-full object-cover" loading="lazy" />
            </figure>

            {/* glass departure card */}
            <aside className="anim-float absolute -bottom-2 -left-4 z-10 w-[236px] rounded-2xl border border-white/70 bg-cream/80 p-5 shadow-[0_28px_56px_-22px_rgba(14,31,29,0.45)] backdrop-blur-xl sm:-left-10 sm:w-[258px]">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.26em] text-pine-700">Next departure</p>
              <p className="mt-2 font-display text-[19px] font-semibold leading-tight text-pine-950">Kyoto in Bloom</p>
              <p className="mt-1 text-[12px] font-medium text-mist">Mar 14 · 08:45 · 10 days</p>
              <div className="mt-4">
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className="text-terra">4 seats left</span>
                  <span className="text-mist">of 8</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-ink/10">
                  <div className="h-full w-[50%] rounded-full bg-amber" />
                </div>
              </div>
              <button
                onClick={() => onReserve("kyoto")}
                className="group mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-extrabold text-pine-800 transition-colors hover:text-pine-600"
              >
                Reserve these seats
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
