"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

type Area = { id: string; name: string; slug: string };

export function PropertyFilters({
  areas,
  searchParams,
}: {
  areas: Area[];
  searchParams: Record<string, string | undefined>;
}) {
  const router = useRouter();
  const [search, setSearch] = useState(searchParams.search ?? "");
  const [listingType, setListingType] = useState(searchParams.listingType ?? "");
  const [areaId, setAreaId] = useState(searchParams.areaId ?? "");
  const [minPrice, setMinPrice] = useState(searchParams.minPrice ?? "");
  const [maxPrice, setMaxPrice] = useState(searchParams.maxPrice ?? "");
  const [beds, setBeds] = useState(searchParams.beds ?? "");

  const apply = useCallback(() => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (listingType) params.set("listingType", listingType);
    if (areaId) params.set("areaId", areaId);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (beds) params.set("beds", beds);
    params.set("page", "1");
    router.push(`/properties?${params.toString()}`);
  }, [search, listingType, areaId, minPrice, maxPrice, beds, router]);

  return (
    <div className="flex flex-wrap items-end gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:gap-4 sm:p-5">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="min-w-[140px] rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
      />
      <select
        value={listingType}
        onChange={(e) => setListingType(e.target.value)}
        className="rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-700 focus:border-sky-500 focus:outline-none"
      >
        <option value="">All types</option>
        <option value="RENTAL">Rental</option>
        <option value="HOLIDAY_LET">Holiday let</option>
      </select>
      <select
        value={areaId}
        onChange={(e) => setAreaId(e.target.value)}
        className="rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-700 focus:border-sky-500 focus:outline-none"
      >
        <option value="">All areas</option>
        {areas.map((a) => (
          <option key={a.id} value={a.id}>{a.name}</option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Min price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="w-28 rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-sky-500 focus:outline-none"
      />
      <input
        type="number"
        placeholder="Max price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="w-28 rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-sky-500 focus:outline-none"
      />
      <input
        type="number"
        placeholder="Beds"
        value={beds}
        onChange={(e) => setBeds(e.target.value)}
        min={1}
        className="w-20 rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-sky-500 focus:outline-none"
      />
      <button
        type="button"
        onClick={apply}
        className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Search
      </button>
    </div>
  );
}
