type P = { className?: string };

const base = (className?: string) => ({
  className,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
});

export const LogoMark = ({ className }: P) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none">
    <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.6" />
    <ellipse cx="16" cy="16" rx="6" ry="13" stroke="currentColor" strokeWidth="1.3" />
    <path d="M3.5 16h25" stroke="currentColor" strokeWidth="1.3" />
    <path d="M5.5 9.5c6.5 2.6 14.5 2.6 21 0M5.5 22.5c6.5-2.6 14.5-2.6 21 0" stroke="currentColor" strokeWidth="1" opacity="0.7" />
    <circle cx="16" cy="3" r="1.6" fill="var(--color-amber)" stroke="none" />
  </svg>
);

export const Compass = ({ className }: P) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5 13.4 13.4 8.5 15.5l2.1-4.9z" />
    <circle cx="12" cy="12" r="0.6" fill="currentColor" />
  </svg>
);

export const RouteIcon = ({ className }: P) => (
  <svg {...base(className)}>
    <circle cx="6" cy="18.5" r="2.2" />
    <circle cx="18" cy="5.5" r="2.2" />
    <path d="M8.2 18.5H15a3.5 3.5 0 0 0 0-7H9a3 3 0 0 1 0-6" strokeDasharray="0" />
    <path d="M12 3.5v1M14.5 4.8l-.7.9M15.8 7.3l-1 .1" opacity="0.6" />
  </svg>
);

export const Bell = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M4 17h16" />
    <path d="M5 17a7 7 0 0 1 14 0" />
    <path d="M12 10V8.5M10.8 8.5h2.4" />
    <path d="M2.8 20h18.4" opacity="0.5" />
  </svg>
);

export const Users = ({ className }: P) => (
  <svg {...base(className)}>
    <circle cx="9" cy="8.5" r="3.2" />
    <path d="M3.5 19.5c.6-3.4 2.8-5.2 5.5-5.2s4.9 1.8 5.5 5.2" />
    <path d="M15.5 5.8a3 3 0 1 1 1.2 5.8M17.5 14.5c2 .5 3.2 2.2 3.5 4.6" />
  </svg>
);

export const Calendar = ({ className }: P) => (
  <svg {...base(className)}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
    <path d="M9.5 14.5 12 17l4-4.5" />
  </svg>
);

export const Leaf = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M5 19C5 9.5 11 4.5 19.5 4.5 19.5 14 14 19 5 19Z" />
    <path d="M5 19c3.5-4.5 7.5-8 11-10.5" opacity="0.7" />
  </svg>
);

export const TagIcon = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M12.5 3.5H20.5v8L11 21a2 2 0 0 1-2.8 0l-4.7-4.7a2 2 0 0 1 0-2.8z" />
    <circle cx="16" cy="8" r="1.4" />
  </svg>
);

export const Shield = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M12 3 5 5.8v5.4c0 4.5 3 7.9 7 9.8 4-1.9 7-5.3 7-9.8V5.8z" />
    <path d="m9 11.8 2.2 2.2L15.4 9.6" />
  </svg>
);

export const Chat = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H12l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5z" />
    <path d="M8.5 9h7M8.5 12h4.5" />
  </svg>
);

export const MapPin = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M12 21s-6.5-5.3-6.5-10.2a6.5 6.5 0 0 1 13 0C18.5 15.7 12 21 12 21Z" />
    <circle cx="12" cy="10.5" r="2.3" />
  </svg>
);

export const Star = ({ className }: P) => (
  <svg viewBox="0 0 20 20" className={className} fill="currentColor" aria-hidden="true">
    <path d="M10 1.8l2.4 5 5.5.7-4 3.8 1 5.4L10 14l-4.9 2.7 1-5.4-4-3.8 5.5-.7z" />
  </svg>
);

export const Stars = ({ rating = 5, className = "" }: { rating?: number; className?: string }) => (
  <span className={`inline-flex items-center gap-0.5 ${className}`} role="img" aria-label={`${rating} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <Star key={i} className={`h-3.5 w-3.5 ${i <= Math.round(rating) ? "text-amber" : "text-ink/15"}`} />
    ))}
  </span>
);

export const ArrowRight = ({ className }: P) => (
  <svg {...base(className)} strokeWidth={1.8}>
    <path d="M4 12h15M13.5 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = ({ className }: P) => (
  <svg {...base(className)} strokeWidth={1.8}>
    <path d="M6.5 17.5 17.5 6.5M8 6.5h9.5V16" />
  </svg>
);

export const ChevronDown = ({ className }: P) => (
  <svg {...base(className)} strokeWidth={1.8}>
    <path d="m5.5 9 6.5 6 6.5-6" />
  </svg>
);

export const Plus = ({ className }: P) => (
  <svg {...base(className)} strokeWidth={1.8}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Minus = ({ className }: P) => (
  <svg {...base(className)} strokeWidth={1.8}>
    <path d="M5 12h14" />
  </svg>
);

export const Check = ({ className }: P) => (
  <svg {...base(className)} strokeWidth={2}>
    <path d="m4.5 12.5 5 5L19.5 7" />
  </svg>
);

export const Phone = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M5.5 3.5h4l1.5 4.5-2.2 1.7a12.5 12.5 0 0 0 5.5 5.5l1.7-2.2 4.5 1.5v4a1.8 1.8 0 0 1-2 1.8C10.4 19.5 4.5 13.6 3.7 5.5a1.8 1.8 0 0 1 1.8-2Z" />
  </svg>
);

export const Mail = ({ className }: P) => (
  <svg {...base(className)}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
    <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
  </svg>
);

export const Clock = ({ className }: P) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const QuoteMark = ({ className }: P) => (
  <svg viewBox="0 0 32 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M13.5 2.5C8 4.5 4.5 8.8 4.5 15v6.5h9V12h-5c.3-3.6 2-6 5.5-7.8zM30 2.5c-5.5 2-9 6.3-9 12.5v6.5h9V12h-5c.3-3.6 2-6 5.5-7.8z" />
  </svg>
);

export const Diamond = ({ className }: P) => (
  <svg viewBox="0 0 8 8" className={className} fill="currentColor" aria-hidden="true">
    <path d="M4 0 8 4 4 8 0 4z" />
  </svg>
);

export const Instagram = ({ className }: P) => (
  <svg {...base(className)}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

export const XBrand = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.6 3h3.1l-6.8 7.8L22 21h-6.3l-4.9-6.4L5.2 21H2.1l7.3-8.3L2 3h6.4l4.4 5.9L17.6 3Zm-1.1 16.1h1.7L7.6 4.8H5.8l10.7 14.3Z" />
  </svg>
);

export const Youtube = ({ className }: P) => (
  <svg {...base(className)}>
    <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
    <path d="m10.2 9.2 4.6 2.8-4.6 2.8z" fill="currentColor" stroke="none" />
  </svg>
);

export const Pinterest = ({ className }: P) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5c-2.4 0-3.8 1.5-3.8 3.3 0 .9.4 1.9 1.3 2.2.2.1.3 0 .3-.1l.3-1c0-.1 0-.2-.1-.3-.3-.4-.5-.9-.5-1.5 0-1.5 1.1-2.6 2.8-2.6 1.5 0 2.4.8 2.4 2.1 0 1.6-.7 2.9-1.8 2.9-.6 0-1-.5-.9-1.1.2-.7.5-1.4.5-1.9 0-.4-.2-.8-.7-.8-.6 0-1 .6-1 1.4 0 .5.2.8.2.8l-.7 2.9c-.1.6 0 1.4 0 1.9 0 .3 0 .5.2.9 0-.2.1-.5.2-.8l.8-3" />
  </svg>
);
