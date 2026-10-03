import { useState } from "react";
import { IMAGES } from "../data";
import { Reveal, Lines } from "./Reveal";
import { ArrowRight, Check, Phone } from "./Icons";

export function CTA() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="relative overflow-hidden" aria-label="Closing call to action">
      <img
        src={IMAGES.ctaBg}
        alt=""
        aria-hidden
        loading="lazy"
        className="anim-kenburns absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-pine-950/82" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-pine-950 via-transparent to-pine-950" />

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:py-36">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="inline-flex items-center gap-3 rounded-full border border-cream/25 bg-cream/10 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.24em] text-cream/85 backdrop-blur">
              <span className="dot-pulse h-1.5 w-1.5 rounded-full bg-amber" />
              Final call · 2026 routes open now
            </p>
          </Reveal>
          <h2 className="mt-7 font-display text-[clamp(2.6rem,6.4vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.025em] text-cream">
            <Lines
              lines={[
                "The world",
                <span key="it" className="italic text-amber">
                  won't wait.
                </span>,
              ]}
            />
          </h2>
          <Reveal delay={220}>
            <p className="mt-6 max-w-[480px] text-[16px] leading-relaxed text-cream/70">
              Get the <strong className="font-bold text-cream">2026 Departure Guide</strong> — 12 hand-picked routes,
              the months they actually work, and today's prices before they move.
            </p>
          </Reveal>
          <Reveal delay={320}>
            {subscribed ? (
              <div className="mt-8 flex max-w-[520px] items-center gap-4 rounded-2xl border border-amber/40 bg-amber/15 px-6 py-5 backdrop-blur">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-amber text-pine-950">
                  <Check className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-[19px] font-semibold text-cream">You're in.</p>
                  <p className="text-[13px] text-cream/65">The first guide ships this Friday. Watch your inbox.</p>
                </div>
              </div>
            ) : (
              <form
                className="mt-8 flex max-w-[520px] flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.includes("@")) setSubscribed(true);
                }}
                aria-label="Subscribe to the Departure Guide"
              >
                <label htmlFor="cta-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="cta-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 rounded-full border border-cream/25 bg-cream/10 px-6 py-4 text-[14.5px] font-semibold text-cream placeholder:text-cream/40 backdrop-blur transition-colors focus:border-amber focus:outline-none"
                />
                <button
                  type="submit"
                  className="btn-shine group inline-flex items-center justify-center gap-2 rounded-full bg-amber px-7 py-4 text-[14.5px] font-extrabold text-pine-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f0b254]"
                >
                  Send the guide
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </Reveal>
          <Reveal delay={400}>
            <p className="mt-4 text-[12px] font-medium text-cream/50">
              One email a month · Unsubscribe in one click · 128,400 travellers read it
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={260}>
            <div className="rounded-[24px] border border-cream/20 bg-cream/[0.08] p-8 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-9">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-amber">Prefer a human?</p>
              <a
                href="tel:+18005550194"
                className="group mt-4 flex items-center gap-4 font-display text-[26px] font-semibold text-cream transition-colors hover:text-amber"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-cream/25 transition-colors group-hover:border-amber group-hover:bg-amber/10">
                  <Phone className="h-5 w-5" />
                </span>
                +1 800 555 0194
              </a>
              <p className="mt-2 pl-16 font-mono text-[10px] uppercase tracking-[0.2em] text-cream/50">
                Mon–Sat · 08:00–22:00
              </p>
              <button
                onClick={() => document.getElementById("book")?.scrollIntoView({
                  behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
                })}
                className="btn-shine mt-7 w-full rounded-full bg-cream py-4 text-[15px] font-extrabold text-pine-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Book a 15-minute call
              </button>
              <div className="mt-6 border-t border-cream/15 pt-5">
                <p className="text-[12.5px] leading-relaxed text-cream/60">
                  <span className="font-bold text-cream/85">Average first reply: 4 hours.</span> Talk to the designer
                  who will actually plan your trip — if it's not a fit, we'll tell you and point you somewhere better.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
