import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data";
import { useScrolled, scrollToId } from "../hooks";
import { cn } from "../utils/cn";
import { ArrowRight, LogoMark, Phone, XBrand, Instagram, Youtube, Pinterest } from "./Icons";

export function Navbar({ onBook }: { onBook: () => void }) {
  const scrolled = useScrolled(28);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    scrollToId(href.replace("#", ""));
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-cream/85 backdrop-blur-xl border-b border-ink/10 shadow-[0_10px_40px_-18px_rgba(14,31,29,0.25)]"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
            }}
            className="group flex items-center gap-3"
            aria-label="Meridian Tours & Travel — back to top"
          >
            <LogoMark className="h-9 w-9 text-pine-900 transition-transform duration-700 group-hover:rotate-180" />
            <span className="leading-none">
              <span className="block font-display text-[22px] font-semibold tracking-tight text-pine-950">Meridian</span>
              <span className="mt-0.5 block font-mono text-[8.5px] tracking-[0.32em] text-mist">TOURS &amp; TRAVEL</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  go(l.href);
                }}
                className="nav-link text-[13.5px] font-semibold text-ink/70 transition-colors hover:text-pine-900"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="tel:+18005550194"
              className="hidden items-center gap-2 font-mono text-[12.5px] text-ink/70 transition-colors hover:text-pine-900 xl:flex"
            >
              <Phone className="h-4 w-4" />
              +1 800 555 0194
            </a>
            <button
              onClick={onBook}
              className="btn-shine group hidden items-center gap-2 rounded-full bg-pine-900 px-5 py-2.5 text-[13.5px] font-bold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-pine-800 sm:inline-flex"
            >
              Book a tour
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-cream/60 backdrop-blur transition-colors hover:border-amber lg:hidden"
            >
              <span className="relative block h-3.5 w-5">
                <span className="absolute left-0 top-0 h-[1.8px] w-full rounded bg-pine-950" />
                <span className="absolute bottom-0 left-0 h-[1.8px] w-full rounded bg-pine-950" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-pine-950 text-cream transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex h-[72px] items-center justify-between px-5 sm:px-8">
          <span className="flex items-center gap-3">
            <LogoMark className="h-8 w-8 text-cream" />
            <span className="font-display text-xl font-semibold">Meridian</span>
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-cream/25 transition-colors hover:border-amber hover:text-amber"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-1 px-8" aria-label="Mobile">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                go(l.href);
              }}
              className={cn(
                "font-display text-[40px] font-medium leading-[1.25] tracking-tight text-cream/90 transition-all duration-500 hover:pl-3 hover:text-amber",
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
              )}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div
          className={cn(
            "space-y-5 px-8 pb-10 transition-all delay-300 duration-500",
            open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          )}
        >
          <button
            onClick={() => {
              setOpen(false);
              onBook();
            }}
            className="btn-shine w-full rounded-full bg-amber py-4 text-[15px] font-extrabold text-pine-950 transition-transform hover:-translate-y-0.5"
          >
            Book a tour
          </button>
          <div className="flex items-center justify-between">
            <a href="tel:+18005550194" className="font-mono text-[13px] text-cream/70">
              +1 800 555 0194
            </a>
            <div className="flex items-center gap-4 text-cream/60">
              <Instagram className="h-5 w-5 transition-colors hover:text-amber" />
              <XBrand className="h-5 w-5 transition-colors hover:text-amber" />
              <Youtube className="h-5 w-5 transition-colors hover:text-amber" />
              <Pinterest className="h-5 w-5 transition-colors hover:text-amber" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
