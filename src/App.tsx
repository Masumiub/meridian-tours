import { useState } from "react";
import { scrollToId, useScrolled } from "./hooks";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { SocialProof } from "./components/SocialProof";
import { Features } from "./components/Features";
import { Tours } from "./components/Tours";
import { Booking } from "./components/Booking";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

function BackToTop() {
  const show = useScrolled(900);
  return (
    <button
      onClick={() => scrollToId("top")}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full border border-cream/15 bg-pine-950 text-cream shadow-[0_18px_40px_-14px_rgba(11,36,31,0.7)] transition-all duration-500 hover:-translate-y-1 hover:border-amber hover:text-amber ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5M6 10.5 12 4.5l6 6" />
      </svg>
    </button>
  );
}

export default function App() {
  const [pre, setPre] = useState({ id: "", ts: 0 });

  const handleReserve = (tourId: string) => {
    if (tourId) setPre({ id: tourId, ts: Date.now() });
    scrollToId("book");
  };

  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-pine-950 focus:px-5 focus:py-3 focus:text-[13px] focus:font-bold focus:text-cream"
      >
        Skip to content
      </a>
      <div className="noise" aria-hidden />

      <Navbar onBook={() => scrollToId("book")} />

      <main id="main">
        <Hero onReserve={handleReserve} />
        <Ticker />
        <SocialProof />
        <Features />
        <Tours onReserve={handleReserve} />
        <Booking preselected={pre} />
        <Benefits onBook={() => scrollToId("book")} />
        <Testimonials />
        <Pricing onBook={() => scrollToId("book")} />
        <FAQ />
        <CTA />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
