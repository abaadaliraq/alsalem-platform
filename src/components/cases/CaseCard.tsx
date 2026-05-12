"use client";

import Link from "next/link";
import type { CharityCase, Locale } from "../../lib/data/cases";

const cardColors = [
  "bg-[#E7F6FF]",
  "bg-[#FFF1C7]",
  "bg-[#EAF7D7]",
  "bg-[#F1E8FF]",
  "bg-[#FFE6DF]",
];

export default function CaseCard({
  item,
  locale,
  index = 0,
}: {
  item: CharityCase;
  locale: Locale;
  index?: number;
}) {
  const percent = Math.min(Math.round((item.raised / item.target) * 100), 100);
  const bg = cardColors[index % cardColors.length];

  return (
    <Link
      href={`/${locale}/cases/${item.slug}`}
      className={`group block overflow-hidden rounded-[28px] ${bg} shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
    >
      <div className="relative m-3 h-[135px] overflow-hidden rounded-[22px] md:h-[180px]">
        <img
          src={item.image}
          alt={item.title[locale]}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

        <div className="absolute end-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-black text-[#071726] backdrop-blur">
          {percent}%
        </div>
      </div>

      <div className="px-4 pb-4">
        <p className="mb-1 text-[11px] font-black text-[#5B2BD8]">
          {item.location[locale]}
        </p>

        <h3 className="line-clamp-2 text-[17px] font-black leading-6 text-[#071726] md:text-xl md:leading-7">
          {item.title[locale]}
        </h3>

        <p className="mt-2 line-clamp-2 text-[12px] leading-6 text-black/55 md:text-sm">
          {item.excerpt[locale]}
        </p>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/70">
          <div
            className="h-full rounded-full bg-[#5B2BD8]"
            style={{ width: `${percent}%` }}
          />
        </div>
<div className="mt-3 flex items-center justify-between text-[11px] font-bold text-black/55">
  <span>{item.raised.toLocaleString()} IQD</span>
  <span>{item.target.toLocaleString()} IQD</span>
</div>

<div className="mt-4">
  <button
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();

     window.location.href = `/${locale}/donate?case=${item.slug}`;
    }}
    className="inline-flex w-full items-center justify-center rounded-full bg-[#071726] px-5 py-3 text-sm font-black text-white transition hover:bg-[#5B2BD8]"
  >
    {locale === "en"
      ? "Donate now"
      : locale === "ku"
      ? "ئێستا بەخشین بکە"
      : "تبرع الآن"}
  </button>
</div>
      </div>
    </Link>
  );
}