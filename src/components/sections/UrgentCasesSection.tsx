import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Locale } from "../../lib/data/cases";

type Props = {
  locale: Locale;
};

export default function UrgentCasesSection({ locale }: Props) {
  const isAr = locale === "ar";
  const isKu = locale === "ku";

  return (
    <section id="urgent-cases" className="w-full bg-[#F5F1E8]">
      <Link
        href={`/${locale}/cases`}
        className="group relative block h-[360px] w-full overflow-hidden md:h-[430px]"
      >
        <img
          src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2200&auto=format&fit=crop"
          alt={isAr ? "الحالات الطارئة" : "Urgent cases"}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />

        {/* RED OVERLAY */}
        <div className="absolute inset-0 bg-[#7A1010]/72" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#3A0606]/30 via-[#7A1010]/45 to-[#2A0505]/65" />

        <div className="relative z-10 flex h-full items-center justify-center px-5 text-center text-white">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              {isAr
                ? "الحالات الطارئة"
                : isKu
                ? "بارودۆخە هەرە گرنگەکان"
                : "Urgent Cases"}
            </h2>

            <div className="mx-auto mt-5 h-[2px] w-16 bg-[#F4C430]" />

            <p className="mx-auto mt-6 max-w-2xl text-sm font-normal leading-7 text-white/82 md:text-base md:leading-8">
              {isAr
                ? "حالات إنسانية تحتاج إلى تدخل عاجل ودعم سريع لضمان وصول المساعدة في الوقت المناسب."
                : isKu
                ? "بارودۆخە مرۆییە گرنگەکان پێویستیان بە هاوکاری و وەڵامدانەوەی خێرایە."
                : "Critical humanitarian cases that require immediate support and fast response to deliver help on time."}
            </p>

            <div className="mx-auto mt-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/10 backdrop-blur transition group-hover:bg-white group-hover:text-[#3A0606]">
              <ArrowLeft className="h-5 w-5" />
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}