import { useState } from "react";
import { FAQS } from "../data";
import { Reveal, Lines } from "./Reveal";
import { cn } from "../utils/cn";
import { ChevronDown, Mail, Phone } from "./Icons";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-[72px] border-t border-ink/8 bg-sand/50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-pine-700">
              <span className="h-px w-10 bg-amber-deep" aria-hidden />
              FAQ
            </p>
          </Reveal>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,4.6vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.02em] text-pine-950">
            <Lines
              lines={[
                "Questions,",
                <span key="it" className="italic text-pine-700">
                  answered honestly.
                </span>,
              ]}
            />
          </h2>
          <Reveal delay={160}>
            <p className="mt-6 max-w-[400px] text-[15px] leading-relaxed text-mist">
              The things people actually ask before booking — with the real policy, not the brochure version.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-9 rounded-2xl border border-ink/10 bg-white p-6 sm:p-7">
              <p className="font-display text-[19px] font-semibold text-pine-950">Still curious?</p>
              <p className="mt-1.5 text-[13px] text-mist">A designer, not a bot, answers within 4 hours.</p>
              <div className="mt-5 space-y-3">
                <a
                  href="tel:+18005550194"
                  className="group flex items-center gap-3 text-[14px] font-bold text-pine-900 transition-colors hover:text-pine-700"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-pine-900/15 transition-colors group-hover:border-amber group-hover:bg-amber/15">
                    <Phone className="h-4 w-4" />
                  </span>
                  +1 800 555 0194
                </a>
                <a
                  href="mailto:hello@meridian.travel"
                  className="group flex items-center gap-3 text-[14px] font-bold text-pine-900 transition-colors hover:text-pine-700"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-pine-900/15 transition-colors group-hover:border-amber group-hover:bg-amber/15">
                    <Mail className="h-4 w-4" />
                  </span>
                  hello@meridian.travel
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <div className="divide-y divide-ink/10 border-y border-ink/10">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={cn(
                          "font-display text-[18px] font-semibold tracking-tight transition-colors duration-300 sm:text-[20px]",
                          isOpen ? "text-pine-700" : "text-pine-950 group-hover:text-pine-700",
                        )}
                      >
                        <span className="mr-3 font-mono text-[11px] font-medium text-amber-deep">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {f.q}
                      </span>
                      <span
                        className={cn(
                          "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500",
                          isOpen
                            ? "rotate-180 border-amber bg-amber/15 text-pine-900"
                            : "border-ink/15 text-ink/50 group-hover:border-pine-900/40 group-hover:text-pine-900",
                        )}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </button>
                    <div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-button-${i}`}
                      className={cn(
                        "grid transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
                        isOpen ? "grid-rows-[1fr] pb-7 opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[640px] pl-0 text-[14.5px] leading-relaxed text-mist sm:pl-[42px]">{f.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
