import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Locale } from "../../lib/locales/config";
import HeroCards from "./HeroCards";

const content: Record<
  Locale,
  {
    titleTop: string;
    titleAccent: string;
    titleBottom: string;
    text: string;
    cta: string;
  }
> = {
  ar: {
    titleTop: "ساعد",
    titleAccent: "الأطفال والعوائل",
    titleBottom: "المحتاجة",
    text: "منظمة السالم الخيرية تربط تبرعك بحالات إنسانية موثقة، بتحديثات واضحة وأثر يمكن تتبعه.",
    cta: "تبرع الآن",
  },
  en: {
    titleTop: "Help",
    titleAccent: "Families and Children",
    titleBottom: "in Need",
    text: "Al Saleem Charity connects your donation to verified humanitarian cases with clear updates and visible impact.",
    cta: "Donate Now",
  },
  ku: {
    titleTop: "یارمەتی بدە",
    titleAccent: "منداڵان و خێزانەکان",
    titleBottom: "لە پێویستیدا",
    text: "ڕێکخراوی سالم هاوکارییەکەت دەگەیەنێت بە کەیسە مرۆییە پشتڕاستکراوەکان.",
    cta: "بەشداری بکە",
  },
};

export default function Hero({ locale }: { locale: Locale }) {
  const t = content[locale];
  const ArrowIcon = locale === "en" ? ArrowRight : ArrowLeft;

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="relative h-[620px] w-full md:h-[720px]">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1800&auto=format&fit=crop"
          alt="Al Saleem Charity"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-l from-black/75 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5">
          <div className="max-w-3xl pt-16">
            <p className="mb-5 text-xs font-bold tracking-[0.28em] text-lime-300">
              AL SALEEM CHARITY ORGANIZATION
            </p>

            <h1 className="text-5xl font-black leading-[1.05] text-white md:text-7xl">
              {t.titleTop}{" "}
              <span className="text-[#F4C430]">{t.titleAccent}</span>
              <br />
              {t.titleBottom}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/80 md:text-lg">
              {t.text}
            </p>

            <Link
              href={`/${locale}/donate`}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:bg-[#F4C430] hover:text-black"
            >
              {t.cta}
              <ArrowIcon size={18} />
            </Link>
          </div>
        </div>
      </div>

      <HeroCards locale={locale} />
    </section>
  );
}