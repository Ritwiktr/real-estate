/**
 * Outlined scrolling taglines (Centrick-style). Copy repeats seamlessly for the loop.
 */
const SEGMENTS = [
  "Homes that feel settled from the first week",
  "Lettings grounded in care, not just compliance",
  "London properties, quietly elevated",
];

const outlineClass =
  "whitespace-nowrap font-[family-name:var(--font-logo)] text-[clamp(1.65rem,5.2vw,3.75rem)] font-semibold leading-none tracking-[-0.02em] text-transparent [-webkit-text-stroke:1.5px_#CBA38C] sm:text-[clamp(1.85rem,5.8vw,4.25rem)] sm:[-webkit-text-stroke:1.75px_#CBA38C] md:text-[clamp(2rem,6.5vw,4.75rem)] md:[-webkit-text-stroke:2px_#CBA38C] lg:text-[clamp(2.15rem,7vw,5.25rem)]";

export function NeighbourhoodMarquee() {
  return (
    <div className="flex h-[12.5rem] w-full items-center overflow-hidden bg-surface sm:h-[14rem] md:h-[15.5rem] lg:h-[17rem]">
      <div className="flex min-h-0 w-full items-center overflow-hidden">
        <div className="flex w-max animate-city-marquee items-center will-change-transform">
          {[0, 1].map((set) => (
            <div
              key={set}
              className="flex shrink-0 items-center gap-x-6 px-4 md:gap-x-10 md:px-8"
            >
              {SEGMENTS.map((text) => (
                <span
                  key={`${set}-${text}`}
                  className="flex shrink-0 items-center gap-x-6 md:gap-x-10"
                >
                  <span className={outlineClass}>{text}</span>
                  <span
                    className={`${outlineClass} !font-bold opacity-90`}
                    aria-hidden
                  >
                    ·
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
