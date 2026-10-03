import { useEffect, useMemo, useState } from "react";
import { TOURS } from "../data";
import { Reveal, Lines } from "./Reveal";
import { cn } from "../utils/cn";
import { ArrowRight, Check, ChevronDown, Minus, Phone, Plus } from "./Icons";

const MONTHS = ["Mar 2026", "Apr 2026", "May 2026", "Jun 2026", "Jul 2026", "Aug 2026", "Sep 2026", "Oct 2026", "Nov 2026", "Dec 2026", "Jan 2027", "Feb 2027"];
const STYLES = [
  { id: "Balanced", mult: 1 },
  { id: "Luxury", mult: 1.28 },
  { id: "Adventure", mult: 0.96 },
  { id: "Culture", mult: 0.92 },
] as const;

type Style = (typeof STYLES)[number]["id"];

export function Booking({ preselected }: { preselected: { id: string; ts: number } }) {
  const [tour, setTour] = useState(preselected.id || "unsure");
  const [month, setMonth] = useState("Jun 2026");
  const [travellers, setTravellers] = useState(2);
  const [style, setStyle] = useState<Style>("Balanced");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [refCode, setRefCode] = useState("");

  useEffect(() => {
    if (preselected.id && preselected.ts > 0) {
      setTour(preselected.id);
      setDone(false);
    }
  }, [preselected]);

  const estimate = useMemo(() => {
    const base = tour === "unsure" ? 2480 : (TOURS.find((t) => t.id === tour)?.price ?? 2480);
    const mult = STYLES.find((s) => s.id === style)?.mult ?? 1;
    return Math.round((base * mult * travellers) / 10) * 10;
  }, [tour, style, travellers]);

  const tourName = tour === "unsure" ? "Not sure yet — help me choose" : (TOURS.find((t) => t.id === tour)?.name ?? "");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setRefCode(`MRD-${Math.floor(1000 + Math.random() * 9000)}`);
    setDone(true);
  };

  const selectCls =
    "w-full appearance-none rounded-xl border border-cream/20 bg-pine-900/70 px-4 py-3.5 pr-10 text-[14.5px] font-semibold text-cream transition-colors focus:border-amber focus:outline-none";
  const labelCls = "mb-2 block font-mono text-[10px] uppercase tracking-[0.24em] text-cream/60";

  return (
    <section id="book" className="relative overflow-hidden bg-pine-950 py-24 text-cream lg:py-32">
      {/* ambient */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(250,246,238,0.05)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-amber/10 blur-[120px] anim-drift" />
      <div aria-hidden className="pointer-events-none absolute -bottom-52 -left-40 h-[480px] w-[480px] rounded-full bg-pine-600/20 blur-[120px] anim-drift [animation-delay:-8s]" />

      <div className="relative mx-auto grid max-w-[1240px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        {/* left */}
        <div className="lg:col-span-5">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-amber">
              <span className="h-px w-10 bg-amber/60" aria-hidden />
              Book your tour
            </p>
          </Reveal>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.02em]">
            <Lines
              lines={[
                "Three questions.",
                <span key="it" className="italic text-amber">
                  One perfect route.
                </span>,
              ]}
            />
          </h2>
          <Reveal delay={200}>
            <p className="mt-6 max-w-[420px] text-[15px] leading-relaxed text-cream/65">
              No forms that span six pages, no call centres. Tell us where you want to be — a human designer sends back a
              day-by-day route you can actually react to.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <ol className="mt-10 space-y-6">
              {[
                ["Tell us where", "Pick a route — or say “not sure yet”. Add dates, party size, travel style."],
                ["We send the route", "A day-by-day itinerary within 24 hours, priced to the penny."],
                ["Lock it with $99", "A fully refundable deposit. The rest is due 30 days out — never a day earlier."],
              ].map(([t, b], i) => (
                <li key={t} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-amber/40 font-mono text-[12px] text-amber">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-[15px] font-bold text-cream">{t}</p>
                    <p className="mt-1 max-w-[340px] text-[13px] leading-relaxed text-cream/55">{b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={380}>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-cream/15 pt-7 text-[12.5px] font-semibold text-cream/60">
              {["$99 refundable deposit", "ATOL protected", "Reply within 4 hours"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className={labelCls}>Prefer to talk?</p>
              <a href="tel:+18005550194" className="group flex items-center gap-3 font-display text-[26px] font-semibold text-cream transition-colors hover:text-amber">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-cream/25 transition-colors group-hover:border-amber group-hover:bg-amber/10">
                  <Phone className="h-4.5 w-4.5" />
                </span>
                +1 800 555 0194
              </a>
              <p className="mt-2 pl-14 font-mono text-[10.5px] uppercase tracking-[0.2em] text-cream/45">
                Mon–Sat · 08:00–22:00
              </p>
            </div>
          </Reveal>
        </div>

        {/* right — form card */}
        <div className="lg:col-span-7">
          <Reveal delay={200}>
            {done ? (
              <div className="overflow-hidden rounded-[24px] bg-cream text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)]">
                <div className="flex items-start justify-between gap-4 p-7 sm:p-8">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-pine-700">Request received</p>
                    <h3 className="mt-2 font-display text-[30px] font-semibold leading-tight text-pine-950">
                      You're on the list,{" "}
                      <span className="italic text-pine-700">{name.split(" ")[0] || "traveller"}</span>.
                    </h3>
                  </div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-pine-100 text-pine-800">
                    <Check className="h-5 w-5" />
                  </span>
                </div>
                <div aria-hidden className="relative">
                  <div className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-pine-950" />
                  <div className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-pine-950" />
                  <div className="border-t-2 border-dashed border-ink/20" />
                </div>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-5 p-7 sm:grid-cols-3 sm:p-8">
                  {[
                    ["Reference", refCode, true],
                    ["Tour", tourName],
                    ["Departure", month],
                    ["Party", `${travellers} traveller${travellers > 1 ? "s" : ""}`],
                    ["Style", style],
                    ["Estimate", `≈ $${estimate.toLocaleString()}`],
                  ].map(([k, v, mono]) => (
                    <div key={k as string}>
                      <dt className="font-mono text-[9.5px] uppercase tracking-[0.24em] text-mist">{k}</dt>
                      <dd className={cn("mt-1.5 text-[14.5px] font-bold text-pine-950", mono && "font-mono text-[13.5px]")}>
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="flex flex-col gap-4 bg-pine-900 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[380px] text-[12.5px] leading-relaxed text-cream/70">
                    A travel designer will email your day-by-day route within 24 hours. Nothing is charged until you
                    confirm.
                  </p>
                  <button
                    onClick={() => setDone(false)}
                    className="shrink-0 rounded-full border border-cream/30 px-5 py-2.5 text-[13px] font-bold text-cream transition-colors hover:border-amber hover:text-amber"
                  >
                    Edit my request
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="rounded-[26px] border border-cream/15 bg-cream/[0.06] p-6 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-9"
                aria-label="Tour booking request"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="bk-tour" className={labelCls}>
                      Tour
                    </label>
                    <div className="relative">
                      <select id="bk-tour" value={tour} onChange={(e) => setTour(e.target.value)} className={selectCls}>
                        <option value="unsure">Not sure yet — help me choose</option>
                        {TOURS.map((t) => (
                          <option key={t.id} value={t.id}>
                            {t.name} · {t.days} days · from ${t.price.toLocaleString()}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cream/50" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bk-month" className={labelCls}>
                      Departure month
                    </label>
                    <div className="relative">
                      <select id="bk-month" value={month} onChange={(e) => setMonth(e.target.value)} className={selectCls}>
                        {MONTHS.map((m) => (
                          <option key={m}>{m}</option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cream/50" />
                    </div>
                  </div>

                  <div>
                    <span className={labelCls} id="bk-travellers-label">
                      Travellers
                    </span>
                    <div className="flex items-center justify-between rounded-xl border border-cream/20 bg-pine-900/70 px-3 py-2">
                      <button
                        type="button"
                        aria-label="Fewer travellers"
                        onClick={() => setTravellers((n) => Math.max(1, n - 1))}
                        disabled={travellers <= 1}
                        className="grid h-9 w-9 place-items-center rounded-lg border border-cream/20 text-cream transition-colors hover:border-amber hover:text-amber disabled:opacity-30"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="font-display text-[20px] font-semibold" aria-live="polite">
                        {travellers}
                        <span className="ml-1 font-body text-[11.5px] font-semibold text-cream/50">
                          {travellers === 1 ? "traveller" : "travellers"}
                        </span>
                      </span>
                      <button
                        type="button"
                        aria-label="More travellers"
                        onClick={() => setTravellers((n) => Math.min(12, n + 1))}
                        disabled={travellers >= 12}
                        className="grid h-9 w-9 place-items-center rounded-lg border border-cream/20 text-cream transition-colors hover:border-amber hover:text-amber disabled:opacity-30"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <span className={labelCls} id="bk-style-label">
                      Travel style
                    </span>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4" role="group" aria-labelledby="bk-style-label">
                      {STYLES.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setStyle(s.id)}
                          aria-pressed={style === s.id}
                          className={cn(
                            "rounded-xl border px-3 py-3 text-[13px] font-bold transition-all duration-300",
                            style === s.id
                              ? "border-amber bg-amber/15 text-amber"
                              : "border-cream/20 text-cream/60 hover:border-cream/50 hover:text-cream",
                          )}
                        >
                          {s.id}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bk-name" className={labelCls}>
                      Full name
                    </label>
                    <input
                      id="bk-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Maya Lindqvist"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-cream/20 bg-pine-900/70 px-4 py-3.5 text-[14.5px] font-semibold text-cream placeholder:text-cream/30 transition-colors focus:border-amber focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="bk-email" className={labelCls}>
                      Email
                    </label>
                    <input
                      id="bk-email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="maya@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-cream/20 bg-pine-900/70 px-4 py-3.5 text-[14.5px] font-semibold text-cream placeholder:text-cream/30 transition-colors focus:border-amber focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <div className="flex flex-col gap-3 rounded-xl border border-amber/30 bg-amber/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-mono text-[9.5px] uppercase tracking-[0.24em] text-cream/60">
                          Estimated for your party
                        </p>
                        <p className="mt-1 font-display text-[27px] font-semibold leading-none text-amber">
                          ≈ ${estimate.toLocaleString()}
                          <span key={estimate} className="ml-2 align-middle font-body text-[11px] font-semibold text-cream/50 [animation:flapIn_0.45s_ease]">
                            recalculated live
                          </span>
                        </p>
                      </div>
                      <p className="max-w-[210px] text-[11.5px] leading-snug text-cream/55 sm:text-right">
                        Confirmed with your itinerary. Taxes &amp; fees included — no surprises.
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-shine group inline-flex items-center justify-center gap-2.5 rounded-full bg-amber py-4.5 text-[15.5px] font-extrabold text-pine-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f0b254] sm:col-span-2"
                  >
                    Request my itinerary — it's free
                    <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-[11.5px] font-medium text-cream/50 sm:col-span-2">
                    No payment now · Free date changes until confirmed · A designer replies within 4 hours
                  </p>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
