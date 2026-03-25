/**
 * Outlined scrolling taglines (Centrick-style). Copy repeats seamlessly for the loop.
 */
const SEGMENTS = [
  "Lettings grounded in care, not just compliance",
  "Homes that feel settled from the first week",
  "London properties, quietly elevated",
];

/** Space Grotesk (geometric grotesk) + outline; padding avoids descender/stroke clipping */
const outlineClass =
  "inline-block whitespace-nowrap pb-[0.22em] pt-[0.12em] font-[family-name:var(--font-marquee)] text-[clamp(1.95rem,6.2vw,4.5rem)] font-bold leading-none tracking-[-0.04em] antialiased text-transparent [-webkit-text-stroke:1.75px_#CBA38C] sm:text-[clamp(2.15rem,6.9vw,5.1rem)] sm:[-webkit-text-stroke:2px_#CBA38C] md:text-[clamp(2.4rem,7.8vw,5.75rem)] md:[-webkit-text-stroke:2.25px_#CBA38C] lg:text-[clamp(2.65rem,8.5vw,6.25rem)] lg:[-webkit-text-stroke:2.5px_#CBA38C]";

export function NeighbourhoodMarquee() {
  return (
    <div className="box-border flex h-[15.5rem] w-full items-center overflow-x-hidden overflow-y-hidden bg-surface py-5 sm:h-[17.5rem] sm:py-6 md:h-[19.5rem] md:py-7 lg:h-[21rem] lg:py-8">
      <div className="flex min-h-0 w-full min-w-0 items-center overflow-x-hidden">
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
                  <span className={`${outlineClass} opacity-90`} aria-hidden>
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
