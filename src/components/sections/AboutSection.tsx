import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Locale } from "../../lib/data/cases";

type Props = {
  locale: Locale;
};

export default function AboutSection({ locale }: Props) {
  const isAr = locale === "ar";
  const isKu = locale === "ku";

  return (
    <section id="about" className="w-full bg-[#F5F1E8]">
      <Link
        href={`/${locale}/about`}
        className="group relative block h-[360px] w-full overflow-hidden md:h-[430px]"
      >
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2200&auto=format&fit=crop"
          alt={isAr ? "نبذة عن المنصة" : "About the platform"}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-[#123C8C]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061A2B]/25 via-[#123C8C]/40 to-[#061A2B]/50" />

        <div className="relative z-10 flex h-full items-center justify-center px-5 text-center text-white">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              {isAr
                ? "نبذة عن المنصة"
                : isKu
                ? "دەربارەی پلاتفۆرمەکە"
                : "About the Platform"}
            </h2>

            <div className="mx-auto mt-5 h-[2px] w-16 bg-[#F4C430]" />

            <p className="mx-auto mt-6 max-w-2xl text-sm font-normal leading-7 text-white/82 md:text-base md:leading-8">
              {isAr
                ? "منظمة السالم الخيرية منصة إنسانية تهدف إلى تسهيل العمل الخيري وربط المتبرعين بالحالات المحتاجة بوضوح وشفافية."
                : isKu
                ? "ڕێکخراوی خێرخوازی سالم پلاتفۆرمێکی مرۆڤایەتییە بۆ گەیاندنی هاوکاری بە ڕوونی و متمانە."
                : "Al Saleem Charity is a humanitarian platform that connects donors with real cases through a clear and trusted giving experience."}
            </p>

            <div className="mx-auto mt-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/10 backdrop-blur transition group-hover:bg-white group-hover:text-[#071726]">
              <ArrowLeft className="h-5 w-5" />
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}