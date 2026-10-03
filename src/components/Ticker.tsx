import { TICKER_ITEMS } from "../data";
import { Diamond } from "./Icons";

export function Ticker() {
  return (
    <div className="marquee overflow-hidden border-y border-pine-950/10 bg-amber py-3.5" aria-label="Current offers">
      <div className="anim-marquee flex w-max">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
            {TICKER_ITEMS.map((item) => (
              <span
                key={`${dup}-${item}`}
                className="flex items-center whitespace-nowrap text-[12.5px] font-extrabold tracking-wide text-pine-950"
              >
                <span className="px-7">{item}</span>
                <Diamond className="h-1.5 w-1.5 text-pine-950/45" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
