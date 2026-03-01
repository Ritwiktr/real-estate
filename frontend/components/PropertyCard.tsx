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
  const typeLabel = listingType === "HOLIDAY_LET" ? "Holiday Let" : "For Rent";
  return (
    <Link
      href={`/properties/${id}`}
      className="group relative overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt=""
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-slate-400">No image</div>
        )}
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {isFeatured && (
            <span className="rounded bg-sky-500 px-2.5 py-1 text-xs font-semibold text-white">
              Featured
            </span>
          )}
          <span className="rounded bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white">
            {typeLabel}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-slate-900 group-hover:text-sky-600 transition">{title}</h3>
        <p className="mt-1 text-sm text-slate-500">
          {address}, {city}
        </p>
        {(beds != null || baths != null || areaSqFt != null) && (
          <p className="mt-2 text-xs text-slate-500">
            {beds != null && `${beds} bed`}
            {baths != null && ` · ${baths} bath`}
            {areaSqFt != null && ` · ${areaSqFt.toLocaleString()} sq ft`}
          </p>
        )}
        <p className="mt-3 text-lg font-bold text-slate-900">
          £{Number(pricePerMonth).toLocaleString()}
          <span className="text-sm font-normal text-slate-500">/mo</span>
        </p>
      </div>
    </Link>
  );
}
