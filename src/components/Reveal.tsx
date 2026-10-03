import { type ReactNode } from "react";
import { useInView } from "../hooks";
import { cn } from "../utils/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

/** Fade-up on scroll, staggered via `delay` (ms). */
export function Reveal({ children, className, delay = 0, id }: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      id={id}
      className={cn("reveal", inView && "is-in", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

type LinesProps = {
  lines: ReactNode[];
  className?: string;
  baseDelay?: number;
  step?: number;
};

/** Line-mask reveal — each line slides up from behind a mask, staggered. */
export function Lines({ lines, className, baseDelay = 100, step = 120 }: LinesProps) {
  const [ref, inView] = useInView<HTMLSpanElement>();
  return (
    <span ref={ref} className={cn("block", inView && "is-in", className)}>
      {lines.map((line, i) => (
        <span key={i} className="mask-line">
          <span style={{ transitionDelay: `${baseDelay + i * step}ms` }}>{line}</span>
        </span>
      ))}
    </span>
  );
}
