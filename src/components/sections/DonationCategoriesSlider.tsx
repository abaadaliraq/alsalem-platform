"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { donationCategories, type Locale } from "../../lib/data/categories";

export default function DonationCategoriesSlider({ locale }: { locale: Locale }) {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  function slide(dir: "left" | "right") {
    const slider = sliderRef.current;
    if (!slider) return;

    const amount = slider.clientWidth * 0.75;
    slider.scrollBy({
      left: dir === "right" ? amount : -amount,
      behavior: "smooth",
    });
  }

  return (
    <section className="relative overflow-hidden bg-transparent px-4 pb-14 pt-24 text-white md:px-10 md:pb-24 md:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-transparent via-[#061A2B]/45 to-transparent" />
      <div className="absolute inset-0 opacity-[0.16]">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2200&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-[#071726] via-[#0B2A3C]/90 to-[#112F24]/80" />

      <div className="relative z-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-[11px] font-black tracking-[0.28em] text-[#F4C430]">
              DONATION CATEGORIES
            </p>

            <h2 className="text-3xl font-black md:text-6xl">
              {locale === "en"
                ? "Donation Fields"
                : locale === "ku"
                ? "بوارەکانی بەخشین"
                : "مجالات التبرع"}
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => slide("left")}
              className="grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur hover:bg-white hover:text-[#071726]"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={() => slide("right")}
              className="grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur hover:bg-white hover:text-[#071726]"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {donationCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${locale}/categories/${cat.slug}`}
              className="group relative h-[360px] w-[78%] shrink-0 overflow-hidden rounded-[34px] md:w-[32%]"
              style={{ backgroundColor: cat.color }}
            >
              <img
                src={cat.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="absolute bottom-0 p-6">
                <h3 className="text-3xl font-black leading-tight text-white">
                  {cat.title[locale]}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/75">
                  {cat.short[locale]}
                </p>

                <div className="mt-5 inline-flex rounded-full bg-[#F4C430] px-5 py-3 text-sm font-black text-[#071726]">
                  {locale === "en"
                    ? "Explore Cases"
                    : locale === "ku"
                    ? "کەیسەکان ببینە"
                    : "استعرض الحالات"}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}