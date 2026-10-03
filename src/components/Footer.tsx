import { useState } from "react";
import { FOOTER_COLS } from "../data";
import { scrollToId } from "../hooks";
import { ArrowRight, Instagram, LogoMark, Pinterest, XBrand, Youtube } from "./Icons";

const DEST_TARGET = "#tours";
const COMPANY_TARGET = "#difference";
const SUPPORT_TARGET = "#faq";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="border-t border-cream/10 bg-pine-950 text-cream/70">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
            }}
            className="group inline-flex items-center gap-3"
            aria-label="Meridian Tours & Travel — back to top"
          >
            <LogoMark className="h-9 w-9 text-cream transition-transform duration-700 group-hover:rotate-180" />
            <span className="leading-none">
              <span className="block font-display text-[22px] font-semibold tracking-tight text-cream">Meridian</span>
              <span className="mt-0.5 block font-mono text-[8.5px] tracking-[0.32em] text-cream/50">TOURS &amp; TRAVEL</span>
            </span>
          </a>
          <p className="mt-6 max-w-[300px] text-[13.5px] leading-relaxed text-cream/55">
            Hand-crafted small-group tours across 140+ destinations since 2009. Designed by people who've been there —
            with a concierge on message the whole time.
          </p>
          <div className="mt-7 flex items-center gap-3">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: XBrand, label: "X" },
              { icon: Youtube, label: "YouTube" },
              { icon: Pinterest, label: "Pinterest" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#top"
                onClick={(e) => e.preventDefault()}
                aria-label={`Meridian on ${label}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber hover:text-amber"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        {FOOTER_COLS.map((col, ci) => (
          <nav key={col.title} className="lg:col-span-2" aria-label={col.title}>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-cream/45">{col.title}</h3>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href={ci === 0 ? DEST_TARGET : ci === 1 ? COMPANY_TARGET : SUPPORT_TARGET}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId((ci === 0 ? DEST_TARGET : ci === 1 ? COMPANY_TARGET : SUPPORT_TARGET).slice(1));
                    }}
                    className="text-[13.5px] font-semibold text-cream/70 transition-all duration-300 hover:pl-1.5 hover:text-amber"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="lg:col-span-2">
          <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-cream/45">The Departure Guide</h3>
          <p className="mt-5 text-[13px] leading-relaxed text-cream/55">
            12 routes a month, the months they work, prices before they move.
          </p>
          {done ? (
            <p className="mt-5 rounded-xl border border-amber/40 bg-amber/10 px-4 py-3 text-[12.5px] font-bold text-amber">
              Subscribed — first guide Friday.
            </p>
          ) : (
            <form
              className="mt-5 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.includes("@")) setDone(true);
              }}
              aria-label="Subscribe to the newsletter"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="min-w-0 flex-1 rounded-full border border-cream/15 bg-cream/10 px-4 py-2.5 text-[13px] font-semibold text-cream placeholder:text-cream/35 transition-colors focus:border-amber focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-amber text-pine-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f0b254]"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
          <div className="mt-7 space-y-1 font-mono text-[11px] leading-relaxed text-cream/45">
            <p>hello@meridian.travel</p>
            <p>+1 800 555 0194</p>
            <p>Portland · Lisbon · Tokyo</p>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-4 px-5 py-7 text-[12px] text-cream/45 sm:px-8 lg:flex-row">
          <p>© 2026 Meridian Tours &amp; Travel LLC. All rights reserved.</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em]">ATOL 11542 · IATA Accredited · Carbon Balanced</p>
          <p className="flex items-center gap-2">
            <span aria-hidden>✦</span> Crafted in Portland &amp; Lisbon
          </p>
        </div>
      </div>
    </footer>
  );
}
