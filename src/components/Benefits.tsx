import { BENEFITS, IMAGES } from "../data";
import { Reveal, Lines } from "./Reveal";
import { ArrowRight, Chat, Compass, MapPin, RouteIcon, Shield } from "./Icons";

const ICONS = { chat: Chat, route: RouteIcon, shield: Shield, compass: Compass, pin: MapPin };

export function Benefits({ onBook }: { onBook: () => void }) {
  return (
    <section id="way" className="scroll-mt-[72px] py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* sticky left */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-pine-700">
              <span className="h-px w-10 bg-amber-deep" aria-hidden />
              The Meridian way
            </p>
          </Reveal>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.02em] text-pine-950">
            <Lines
              lines={[
                "From first hello",
                <span key="it" className="italic text-pine-700">
                  to final horizon.
                </span>,
              ]}
            />
          </h2>
          <Reveal delay={180}>
            <p className="mt-6 max-w-[440px] text-[15.5px] leading-relaxed text-mist">
              Five moments make up every Meridian trip. Here's exactly what happens in each of them — no fine print, no
              "depending on availability", no mystery.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <figure className="relative mt-10 max-w-[440px] overflow-hidden rounded-[24px] border border-ink/10 shadow-[0_36px_70px_-30px_rgba(14,31,29,0.45)]">
              <img
                src={IMAGES.benefits}
                alt="A traveller pausing on a ridge, looking out over a vast mountain valley"
                loading="lazy"
                className="anim-kenburns h-full w-full object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-pine-950/45 via-transparent to-transparent" />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-cream/85 px-4 py-2 font-mono text-[9.5px] uppercase tracking-[0.22em] text-pine-950 backdrop-blur">
                Day 4 · Cumbria, on location
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={360}>
            <button
              onClick={onBook}
              className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-pine-900 px-7 py-4 text-[15px] font-bold text-cream shadow-[0_16px_36px_-14px_rgba(16,49,41,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-pine-800"
            >
              Start where we start
              <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>

        {/* scrolling right */}
        <div>
          {BENEFITS.map((b, i) => {
            const Icon = ICONS[b.icon];
            return (
              <Reveal key={b.no} delay={i * 70}>
                <article className={`group border-t border-ink/10 py-9 transition-colors duration-300 hover:bg-sand/40 sm:px-5 ${i === 0 ? "border-t-0 pt-0" : ""}`}>
                  <div className="flex items-start gap-5">
                    <span className="font-mono text-[13px] font-medium text-amber-deep">{b.no}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-display text-[24px] font-semibold tracking-tight text-pine-950 transition-transform duration-300 group-hover:translate-x-1 sm:text-[27px]">
                          {b.title}
                        </h3>
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-pine-900/15 text-pine-800 transition-all duration-300 group-hover:border-amber group-hover:bg-amber/15">
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>
                      <p className="mt-3 max-w-[480px] text-[14.5px] leading-relaxed text-mist">{b.body}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
          <Reveal delay={100}>
            <div className="mt-2 rounded-[20px] bg-pine-950 p-7 text-cream sm:px-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-amber">The average timeline</p>
              <p className="mt-3 font-display text-[26px] font-medium leading-snug">
                First hello to first flight: <span className="italic text-amber">11 days</span>, on average.
              </p>
              <p className="mt-2 text-[13px] text-cream/60">Peak season routes: book 6–10 months out for first pick of dates.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
