"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Area = { id: string; name: string; slug: string };

export function HeroSearch({ areas = [] }: { areas?: Area[] }) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [listingType, setListingType] = useState("");
  const [areaId, setAreaId] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [beds, setBeds] = useState("");

  function handleSearch() {
    const params = new URLSearchParams();
    if (search.trim()) params.set("search", search.trim());
    if (listingType) params.set("listingType", listingType);
    if (areaId) params.set("areaId", areaId);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (beds) params.set("beds", beds);
    params.set("page", "1");
    router.push(`/properties?${params.toString()}`);
  }

  const inputClass =
    "rounded border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/50 focus:border-white/40 focus:outline-none [&>option]:bg-neutral-900";

  return (
    <div className="rounded-xl border border-white/10 bg-black/50 p-4 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-5">
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <input
          type="text"
          placeholder="Location or search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`min-w-[140px] flex-1 ${inputClass}`}
          aria-label="Search location"
        />
        <select
          value={listingType}
          onChange={(e) => setListingType(e.target.value)}
          className={inputClass}
        >
          <option value="">Type</option>
          <option value="RENTAL">Rental</option>
          <option value="HOLIDAY_LET">Holiday Let</option>
        </select>
        <select
          value={areaId}
          onChange={(e) => setAreaId(e.target.value)}
          className={inputClass}
        >
          <option value="">Area</option>
          {areas.map((a) => (
            <option key={a.id} value={a.id}>
              {a.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Min. price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          min={0}
          className={`w-24 ${inputClass}`}
        />
        <select
          value={beds}
          onChange={(e) => setBeds(e.target.value)}
          className={inputClass}
        >
          <option value="">Beds</option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={String(n)}>
              {n}+
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={handleSearch}
          className="rounded border border-white bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-black hover:text-white hover:border-white"
        >
          Search
        </button>
      </div>
    </div>
  );
}
