import { useState } from "react";
import { REGIONS, TOURS, type Tour } from "../data";
import { Reveal, Lines } from "./Reveal";
import { cn } from "../utils/cn";
import { ArrowRight, Check, ChevronDown, MapPin, Star, Users } from "./Icons";

function TourCard({
  t,
  i,
  featured,
  onReserve,
}: {
  t: Tour;
  i: number;
  featured: boolean;
  onReserve: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <article
      style={{ animationDelay: `${i * 80}ms` }}
      className={cn(
        "card-in group flex flex-col overflow-hidden rounded-[22px] border border-ink/10 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-pine-900/30 hover:shadow-[0_34px_64px_-30px_rgba(14,31,29,0.4)]",
        featured && "md:col-span-2",
      )}
    >
      <figure className={cn("relative overflow-hidden", featured ? "aspect-[16/9]" : "aspect-[4/3]")}>
        <img
          src={t.image}
          alt={t.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-pine-950 backdrop-blur">
          {t.days} days
        </span>
        <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-pine-950/65 px-3 py-1.5 text-[11.5px] font-bold text-cream backdrop-blur">
          <Star className="h-3 w-3 text-amber" />
          {t.rating.toFixed(1)}
          <span className="font-medium text-cream/60">({t.reviews})</span>
        </span>
        <span className="absolute bottom-4 left-4 flex gap-2">
          {t.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cream/40 bg-cream/15 px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider text-cream backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </span>
      </figure>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="font-display text-[22px] font-semibold tracking-tight text-pine-950 transition-colors group-hover:text-pine-700">
            {t.name}
          </h3>
          {featured && (
            <span className="rounded-full bg-amber/20 px-3 py-1 font-mono text-[9.5px] font-semibold uppercase tracking-[0.18em] text-amber-deep">
              Editor's choice
            </span>
          )}
        </div>
        <p className="mt-2 text-[13.5px] leading-relaxed text-mist">{t.blurb}</p>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[12px] font-bold text-ink/55">
          <span className="flex items-center gap-1.5">
            <Users className="h-4 w-4 text-pine-600" /> {t.group}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-pine-600" /> {t.region}
          </span>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-4 flex w-fit items-center gap-1.5 text-[12.5px] font-extrabold text-pine-800 transition-colors hover:text-pine-600"
        >
          Itinerary highlights
          <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")} />
        </button>
        <div className={cn("grid transition-all duration-500", open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
          <ul className="space-y-2 overflow-hidden">
            {t.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-[12.5px] leading-snug text-mist">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-pine-600" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-ink/10 pt-5" style={{ marginTop: "auto" }}>
          <div className="pt-0">
            <p className="flex items-baseline gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-mist">from</span>
              <span className="font-display text-[24px] font-semibold text-pine-950">${t.price.toLocaleString()}</span>
              <span className="text-[11.5px] font-medium text-mist">/ person</span>
            </p>
          </div>
          <button
            onClick={() => onReserve(t.id)}
            className="btn-shine group/btn inline-flex shrink-0 items-center gap-2 rounded-full bg-pine-900 px-5 py-3 text-[13px] font-bold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-pine-800"
          >
            Reserve
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
}

export function Tours({ onReserve }: { onReserve: (id: string) => void }) {
  const [region, setRegion] = useState<(typeof REGIONS)[number]>("All");
  const filtered = region === "All" ? TOURS : TOURS.filter((t) => t.region === region);

  return (
    <section id="tours" className="scroll-mt-[72px] border-y border-ink/8 bg-sand/50 py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-pine-700">
                <span className="h-px w-10 bg-amber-deep" aria-hidden />
                Signature tours · 2026 season
              </p>
            </Reveal>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.02em] text-pine-950">
              <Lines
                lines={[
                  "Routes our travellers",
                  <span key="it" className="italic text-pine-700">
                    keep re-booking.
                  </span>,
                ]}
              />
            </h2>
          </div>
          <Reveal delay={150}>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter tours by region">
              {REGIONS.map((r) => (
                <button
                  key={r}
                  onClick={() => setRegion(r)}
                  aria-pressed={region === r}
                  className={cn(
                    "rounded-full border px-4.5 py-2.5 text-[13px] font-bold transition-all duration-300",
                    region === r
                      ? "border-pine-950 bg-pine-950 text-cream shadow-[0_10px_24px_-10px_rgba(16,49,41,0.6)]"
                      : "border-ink/15 bg-cream/70 text-ink/60 hover:border-pine-900 hover:text-pine-900",
                  )}
                >
                  {r}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div key={region} className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t, i) => (
            <TourCard key={t.id} t={t} i={i} featured={region === "All" && i === 0} onReserve={onReserve} />
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-dashed border-pine-900/30 bg-cream/80 px-7 py-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-[19px] font-semibold text-pine-950">Can't find your route?</p>
              <p className="mt-1 text-[13.5px] text-mist">
                We design 3,000+ bespoke itineraries a year — for one person or forty.
              </p>
            </div>
            <button
              onClick={() => onReserve("")}
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-pine-900/25 px-6 py-3.5 text-[14px] font-bold text-pine-900 transition-all duration-300 hover:border-pine-900 hover:bg-pine-900 hover:text-cream"
            >
              Talk to a designer
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
