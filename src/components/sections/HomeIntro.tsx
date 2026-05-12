import type { Locale } from "../../lib/data/cases";

type Props = {
  locale: Locale;
};

export default function HomeIntro({ locale }: Props) {
  const isAr = locale === "ar";
  const isKu = locale === "ku";

  return (
   <section className="bg-[#00120E] px-5 py-16 text-center text-white md:px-10 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto mb-6 h-[2px] w-20 bg-white/30" />

        <h2 className="text-2xl font-medium leading-relaxed text-white md:text-4xl">
          {isAr
            ? "نؤمن أن المساعدة الحقيقية تبدأ بخطوة بسيطة"
            : isKu
            ? "باوەڕمان وایە یارمەتی ڕاستەقینە بە هەنگاوێکی بچووک دەست پێدەکات"
            : "We believe real help begins with one simple step"}
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-sm font-normal leading-8 text-white/65 md:text-base">
          {isAr
            ? "منصة السالم الخيرية تربط المتبرعين بالحالات الإنسانية بطريقة واضحة، حديثة، وموثوقة لضمان وصول الدعم لمن يحتاجه فعلاً."
            : isKu
            ? "پلاتفۆرمی سالم یارمەتی دەدات بە گەیاندنی هاوکاری بە شێوەیەکی ڕوون و متمانەپێکراو."
            : "Al Saleem Charity connects donors with humanitarian cases through a modern and trusted experience."}
        </p>
      </div>
    </section>
  );
}