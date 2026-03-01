import Link from "next/link";

type PropertyCardProps = {
  id: string;
  title: string;
  address: string;
  city: string;
  listingType: string;
  pricePerMonth: string | number;
  imageUrl?: string | null;
  isFeatured?: boolean;
  beds?: number;
  baths?: number;
  areaSqFt?: number;
};

export function PropertyCard({
  id,
  title,
  address,
  city,
  listingType,
  pricePerMonth,
  imageUrl,
  isFeatured,
  beds,
  baths,
  areaSqFt,
}: PropertyCardProps) {
  const typeLabel = listingType === "HOLIDAY_LET" ? "Holiday Let" : "Rental";
  return (
    <Link
      href={`/properties/${id}`}
      className="group block overflow-hidden rounded-2xl border border-white/[0.08] bg-black shadow-xl shadow-black/50 transition-all duration-300 hover:border-white/15 hover:shadow-2xl hover:shadow-black/60"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
        {imageUrl ? (
          <>
            <img
              src={imageUrl}
              alt=""
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            {/* Dark overlay so property pics match the black theme */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent"
              aria-hidden
            />
          </>
        ) : (
          <div className="flex h-full items-center justify-center text-neutral-500 text-sm">No image</div>
        )}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {isFeatured && (
            <span className="rounded-md bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-black">
              Featured
            </span>
          )}
          <span className="rounded-md border border-white/20 bg-black/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
            {typeLabel}
          </span>
        </div>
      </div>
      <div className="border-t border-white/[0.06] p-5">
        <h3 className="text-lg font-semibold tracking-tight text-white group-hover:text-white">{title}</h3>
        <p className="mt-1 text-sm text-neutral-400">
          {address}, {city}
        </p>
        {(beds != null || baths != null || areaSqFt != null) && (
          <p className="mt-2 text-xs text-neutral-500">
            {beds != null && `${beds} bed`}
            {baths != null && ` · ${baths} bath`}
            {areaSqFt != null && ` · ${areaSqFt.toLocaleString()} sq ft`}
          </p>
        )}
        <p className="mt-4 text-lg font-semibold text-white">
          £{Number(pricePerMonth).toLocaleString()}
          <span className="text-sm font-normal text-neutral-400">/mo</span>
        </p>
      </div>
    </Link>
  );
}
