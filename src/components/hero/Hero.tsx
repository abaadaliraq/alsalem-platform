import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Locale } from "../../lib/data/cases";

type Props = {
  locale: Locale;
};

export default function Hero({ locale }: Props) {
  const isAr = locale === "ar";
  const isKu = locale === "ku";
  const isRtl = isAr || isKu;

  return (
    <section className="relative min-h-[520px] overflow-hidden text-white md:min-h-[680px]">
      <img
        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2200&auto=format&fit=crop"
        alt="Al Saleem Charity"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div
        className={`absolute inset-y-0 w-full md:w-[72%] ${
          isRtl
            ? "right-0 bg-gradient-to-l from-[#061A2B]/88 via-[#061A2B]/52 to-transparent"
            : "left-0 bg-gradient-to-r from-[#061A2B]/88 via-[#061A2B]/52 to-transparent"
        }`}
      />

      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 pt-20 md:min-h-[680px] md:px-10">
        <div className={`max-w-xl ${isRtl ? "text-right" : "text-left"}`}>
          <p className="mb-4 text-[9px] font-medium uppercase tracking-[0.28em] text-[#F4C430] md:text-[11px]">
            Al Saleem Charity Organization
          </p>

          <h1 className="max-w-lg text-[30px] font-medium leading-[1.28] tracking-[-0.02em] md:text-[48px] md:leading-[1.18]">
            {isAr
              ? "منصة إنسانية تربط التبرع بالأثر الحقيقي"
              : isKu
              ? "پلاتفۆرمێکی مرۆڤایەتی بۆ گەیاندنی هاوکاری"
              : "A charity platform built around real impact"}
          </h1>

          <p className="mt-4 max-w-md text-[13px] font-normal leading-7 text-white/70 md:text-[15px] md:leading-8">
            {isAr
              ? "نساعدك على دعم الحالات المحتاجة بوضوح وشفافية، من الحالات العاجلة إلى أقسام الدعم المختلفة."
              : isKu
              ? "یارمەتیت دەدەین بۆ پشتیوانی کەیسە پێویستەکان بە ڕوونی و متمانە."
              : "We connect donors with real humanitarian cases through a clear, trusted, and transparent giving experience."}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href={`/${locale}/donate`}
              className="inline-flex items-center gap-2 rounded-full bg-[#F4C430] px-5 py-2.5 text-[13px] font-medium text-[#071726] transition hover:bg-white"
            >
              {isAr ? "تبرع الآن" : isKu ? "ئێستا بەخشین بکە" : "Donate now"}
              <ArrowLeft className="h-3.5 w-3.5" />
            </Link>

            <Link
              href={`/${locale}/cases`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-[13px] font-medium text-white/90 backdrop-blur transition hover:bg-white hover:text-[#071726]"
            >
              {isAr ? "عرض الحالات" : isKu ? "کەیسەکان ببینە" : "View cases"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}