"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CaseCard from "../cases/CaseCard";
import { cases, type Locale } from "../../lib/data/cases";

export default function UrgentCasesSection({ locale }: { locale: Locale }) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const previewCases = cases.slice(0, 5);

  function scrollSlider(direction: "left" | "right") {
    const slider = sliderRef.current;
    if (!slider) return;

    const amount = slider.clientWidth * 0.75;
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    let next = direction === "right" ? slider.scrollLeft + amount : slider.scrollLeft - amount;

    if (next >= maxScroll - 20) next = 0;
    if (next <= 0 && direction === "left") next = maxScroll;

    slider.scrollTo({
      left: next,
      behavior: "smooth",
    });
  }

  return (
   <section className="relative overflow-hidden bg-transparent px-4 pb-28 pt-14 text-white md:px-10 md:pb-36 md:pt-24">
      <img
        src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2200&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[#35108A]/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#14042B] via-[#5B2BD8]/45 to-[#FFD32A]/10" />

      <div className="relative z-10 flex h-full w-full flex-col py-10 md:py-14">
        <div className="mb-6 flex items-end justify-between gap-4 px-5 text-white md:px-14">
          <div>
            <p className="mb-2 text-[10px] font-black tracking-[0.28em] text-[#FFD32A] md:text-sm">
              URGENT CASES
            </p>

            <h2 className="text-3xl font-black leading-tight md:text-6xl">
              {locale === "en"
                ? "Urgent Cases"
                : locale === "ku"
                ? "کەیسە پەلەکان"
                : "الحالات العاجلة"}
            </h2>
          </div>

          <Link
            href={`/${locale}/cases`}
            className="shrink-0 rounded-full bg-white px-5 py-3 text-xs font-black text-[#35108A] shadow-xl transition hover:bg-[#FFD32A]"
          >
            {locale === "en" ? "View All" : locale === "ku" ? "هەموو" : "عرض الكل"}
          </Link>
        </div>

        <div className="relative flex-1">
          <button
            type="button"
            onClick={() => scrollSlider("left")}
            className="absolute left-3 top-1/2 z-30 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/20 text-white backdrop-blur-xl transition hover:bg-white hover:text-[#35108A] md:left-8"
            aria-label="Previous"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            type="button"
            onClick={() => scrollSlider("right")}
            className="absolute right-3 top-1/2 z-30 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/20 text-white backdrop-blur-xl transition hover:bg-white hover:text-[#35108A] md:right-8"
            aria-label="Next"
          >
            <ArrowRight size={20} />
          </button>

          <div
            ref={sliderRef}
            className="flex h-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-16 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-6 md:px-24"
          >
            {previewCases.map((item, index) => (
              <div
                key={item.slug}
                className="flex w-[72%] shrink-0 snap-center items-end sm:w-[44%] md:w-[30%] lg:w-[28%]"
              >
                <CaseCard item={item} locale={locale} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#071726]" />
    </section>
  );
}