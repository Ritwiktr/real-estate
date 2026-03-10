"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CustomSelect } from "./ui/CustomSelect";

type Area = { id: string; name: string; slug: string };

export function HorizontalSearch({ areas = [] }: { areas?: Area[] }) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [listingType, setListingType] = useState("");
  const [areaId, setAreaId] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [beds, setBeds] = useState("");

  function handleSearch() {
    const params = new URLSearchParams();
    if (search.trim()) params.set("search", search.trim());
    if (listingType) params.set("listingType", listingType);
    if (areaId) params.set("areaId", areaId);
    if (minPrice) params.set("minPrice", minPrice);
    if (beds) params.set("beds", beds);
    params.set("page", "1");
    router.push(`/properties?${params.toString()}`);
  }

  const inputClass =
    "rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 backdrop-blur-sm transition-all duration-200";

  const typeOptions = [
    { value: "RENTAL", label: "Rental" },
    { value: "HOLIDAY_LET", label: "Holiday Let" },
  ];
  const areaOptions = areas.map((a) => ({ value: a.id, label: a.name }));
  const bedsOptions = [1, 2, 3, 4, 5].map((n) => ({
    value: String(n),
    label: `${n}+`,
  }));

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="rounded-2xl border border-white/20 bg-black/60 p-6 shadow-2xl backdrop-blur-xl">
        <div className="mb-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
            Search Properties
          </p>
          <p className="mt-2 text-sm text-white/80">
            Whether you're searching for property management services in East London,
            listing a holiday home near the Essex coast, or looking for a tenant-ready flat to
            let in Islington, start by exploring our current listings.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 items-end">
          <div className="lg:col-span-2">
            <input
              type="text"
              placeholder="Location or search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full ${inputClass}`}
              aria-label="Search location"
            />
          </div>
          <div>
            <CustomSelect
              value={listingType}
              onChange={setListingType}
              options={typeOptions}
              placeholder="Type"
              aria-label="Listing type"
              className="w-full"
            />
          </div>
          <div>
            <CustomSelect
              value={areaId}
              onChange={setAreaId}
              options={areaOptions}
              placeholder="Area"
              aria-label="Area"
              className="w-full"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Min. price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              min={0}
              className={`w-full ${inputClass}`}
            />
          </div>
          <div>
            <CustomSelect
              value={beds}
              onChange={setBeds}
              options={bedsOptions}
              placeholder="Beds"
              aria-label="Number of beds"
              className="w-full"
            />
          </div>
          <div>
            <button
              type="button"
              onClick={handleSearch}
              className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}