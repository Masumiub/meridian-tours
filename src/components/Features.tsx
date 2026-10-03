import { FEATURES, type Feature } from "../data";
import { Reveal, Lines } from "./Reveal";
import { cn } from "../utils/cn";
import { Bell, Calendar, Leaf, RouteIcon, TagIcon, Users } from "./Icons";

const ICONS = { route: RouteIcon, bell: Bell, users: Users, calendar: Calendar, leaf: Leaf, tag: TagIcon };

function FeatureCard({ f, i, className }: { f: Feature; i: number; className?: string }) {
  const Icon = ICONS[f.icon];
  return (
    <Reveal delay={(i % 3) * 100} className={className}>
      <article
        className={cn(
          "group flex h-full flex-col rounded-[22px] border p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8",
          f.dark
            ? "relative overflow-hidden border-pine-800 bg-pine-950 text-cream shadow-[0_30px_60px_-30px_rgba(11,36,31,0.8)]"
            : f.big
              ? "border-ink/10 bg-sand/60 hover:border-pine-900/25 hover:shadow-[0_26px_52px_-26px_rgba(14,31,29,0.3)]"
              : "border-ink/10 bg-white hover:border-pine-900/25 hover:shadow-[0_26px_52px_-26px_rgba(14,31,29,0.25)]",
        )}
      >
        {f.dark && (
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-amber/15 blur-[70px] transition-opacity duration-500 group-hover:opacity-100"
          />
        )}
        <span
          className={cn(
            "grid h-12 w-12 place-items-center rounded-xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105",
            f.dark ? "bg-amber text-pine-950" : "bg-pine-900 text-cream",
          )}
        >
          <Icon className="h-5.5 w-5.5" />
        </span>
        <h3 className={cn("mt-5 font-display text-[22px] font-semibold tracking-tight", f.dark ? "text-cream" : "text-pine-950")}>
          {f.title}
        </h3>
        <p className={cn("mt-2.5 max-w-[420px] text-[13.5px] leading-relaxed", f.dark ? "text-cream/65" : "text-mist")}>
          {f.body}
        </p>

        {f.chat && (
          <div className="mt-6 space-y-2.5" aria-hidden>
            <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-cream/12 px-4 py-2.5 text-[12.5px] leading-relaxed text-cream/90">
              Hi Maya — your Kyoto request is booked. The Mar 14 departure now has <span className="text-amber">4 seats</span>.
            </div>
            <div className="w-fit max-w-[70%] rounded-2xl rounded-bl-sm border border-cream/15 bg-cream/6 px-4 py-2.5 text-[12.5px] text-cream/80">
              Perfect. Add a night in Hakone?
            </div>
            <div className="flex items-center gap-2 pt-1 text-[10.5px] font-mono uppercase tracking-[0.2em] text-cream/45">
              <span className="dot-pulse h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Aiko · your designer · online
            </div>
          </div>
        )}

        {f.stat &&
          (f.big ? (
            <div className="mt-auto pt-8">
              <p className="font-display text-[40px] font-semibold leading-none text-pine-950">
                {f.stat.split(" ")[0]}
                <span className="text-amber-deep"> {f.stat.split(" ").slice(1).join(" ")}</span>
              </p>
            </div>
          ) : (
            <p className="mt-auto pt-6 font-mono text-[10.5px] uppercase tracking-[0.22em] text-pine-700">{f.stat}</p>
          ))}
      </article>
    </Reveal>
  );
}

export function Features() {
  const [a, b, c, d, e, f] = FEATURES;
  return (
    <section id="difference" className="scroll-mt-[72px] py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-pine-700">
                <span className="h-px w-10 bg-amber-deep" aria-hidden />
                Why Meridian
              </p>
            </Reveal>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.02em] text-pine-950">
              <Lines
                lines={[
                  "Not another tour.",
                  <span key="it" className="italic text-pine-700">
                    A route, drawn by hand.
                  </span>,
                ]}
              />
            </h2>
          </div>
          <Reveal delay={150}>
            <p className="max-w-[460px] text-[15.5px] leading-relaxed text-mist lg:ml-auto">
              Six things separate a Meridian trip from a package holiday. None of them show up in a photo — all of them
              show up in how the trip <em className="font-display italic">felt</em> from the first message to the last
              sunset.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard f={a} i={0} className="lg:row-span-2" />
          <FeatureCard f={b} i={1} className="md:col-span-2" />
          <FeatureCard f={c} i={2} />
          <FeatureCard f={d} i={3} />
          <FeatureCard f={e} i={4} className="md:col-span-2" />
          <FeatureCard f={f} i={5} />
        </div>
      </div>
    </section>
  );
}
