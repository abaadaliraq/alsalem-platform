import CaseCard from "../../../../components/cases/CaseCard";
import { cases, type Locale } from "../../../../lib/data/cases";

type Props = {
  params: Promise<{ locale: Locale }>;
};

const pageText = {
  ar: {
    title: "الحالات العاجلة",
    text: "نعرض الحالات الإنسانية بعد التحقق منها وربطها بتحديثات واضحة، حتى يعرف المتبرع أين يذهب دعمه وكيف يتحول إلى أثر.",
  },
  en: {
    title: "Urgent Cases",
    text: "Verified humanitarian cases with clear updates, helping donors understand where support goes and how it creates impact.",
  },
  ku: {
    title: "کەیسە پەلەکان",
    text: "کەیسە مرۆییە پشتڕاستکراوەکان بە نوێکاری ڕوون.",
  },
};

export default async function CasesPage({ params }: Props) {
  const { locale } = await params;
  const t = pageText[locale];

  const completed = cases.filter((item) => item.raised >= item.target).length;
  const totalRaised = cases.reduce((sum, item) => sum + item.raised, 0);

  return (
    <main className="bg-[#F7F3EA] text-[#071726]">
      <section className="relative h-[420px] overflow-hidden md:h-[560px]">
        <img
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1800&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#071726]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F3EA] via-transparent to-black/20" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-12 text-white md:px-10">
          <p className="mb-4 text-xs font-black tracking-[0.32em] text-[#FFD32A]">
            AL SALEEM CHARITY
          </p>

          <h1 className="text-4xl font-black md:text-7xl">{t.title}</h1>

          <p className="mt-5 max-w-2xl text-sm leading-8 text-white/80 md:text-lg">
            {t.text}
          </p>
        </div>
      </section>

      <section className="px-5 py-10 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-3 md:gap-5">
          <Stat label={locale === "en" ? "Cases" : "الحالات"} value={cases.length} />
          <Stat label={locale === "en" ? "Completed" : "مكتملة"} value={completed} />
          <Stat label={locale === "en" ? "Raised" : "المجموع"} value={`${totalRaised.toLocaleString()}`} />
        </div>
      </section>

      <section className="px-5 pb-20 md:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <CaseCard key={item.slug} item={item} locale={locale} />
          ))}
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-[24px] bg-white p-4 text-center shadow-sm md:p-6">
      <p className="text-2xl font-black text-[#5B2BD8] md:text-4xl">{value}</p>
      <p className="mt-2 text-xs font-bold text-black/50 md:text-sm">{label}</p>
    </div>
  );
}