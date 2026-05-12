import Link from "next/link";
import { ArrowLeft, HeartPulse, Clock, MapPin } from "lucide-react";
import { cases, type Locale } from "../../../../lib/data/cases";

type Props = {
  params: Promise<{ locale: Locale }>;
};

const pageText = {
  ar: {
    badge: "AL SALEEM CHARITY",
    title: "الحالات العاجلة",
    text: "نعرض الحالات الإنسانية بعد التحقق منها وربطها بتحديثات واضحة، حتى يعرف المتبرع أين يذهب دعمه وكيف يتحول إلى أثر.",
    cases: "الحالات",
    completed: "مكتملة",
    total: "المجموع",
    donate: "تبرع الآن",
    details: "عرض التفاصيل",
    raised: "تم جمع",
    target: "الهدف",
    donors: "متبرع",
    days: "يوم متبقي",
  },
  en: {
    badge: "AL SALEEM CHARITY",
    title: "Urgent Cases",
    text: "Verified humanitarian cases with clear updates, helping donors understand where support goes and how it creates impact.",
    cases: "Cases",
    completed: "Completed",
    total: "Total",
    donate: "Donate Now",
    details: "View Details",
    raised: "Raised",
    target: "Target",
    donors: "Donors",
    days: "Days Left",
  },
  ku: {
    badge: "AL SALEEM CHARITY",
    title: "کەیسە پەلەکان",
    text: "کەیسە مرۆییە پشتڕاستکراوەکان بە نوێکاری ڕوون.",
    cases: "حاڵەتەکان",
    completed: "تەواوبوو",
    total: "کۆی گشتی",
    donate: "بەخشین",
    details: "وردەکاری",
    raised: "کۆکراوەتەوە",
    target: "ئامانج",
    donors: "بەخشەر",
    days: "ڕۆژ ماوە",
  },
};

export default async function CasesPage({ params }: Props) {
  const { locale } = await params;
  const t = pageText[locale] ?? pageText.ar;
  const isRtl = locale === "ar" || locale === "ku";

  const completed = cases.filter((item) => item.raised >= item.target).length;
  const totalRaised = cases.reduce((sum, item) => sum + item.raised, 0);

  return (
    <main dir={isRtl ? "rtl" : "ltr"} className="bg-white text-[#251011]">
      <section className="relative min-h-[500px] overflow-hidden bg-[#8f1d24] md:min-h-[620px]">
        <img
          src="/side.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#4d080d]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-[#220507]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4d080d]/80 via-transparent to-[#4d080d]/40" />

        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-end px-5 pb-20 pt-32 md:min-h-[620px] md:px-10 md:pb-24">
          <div className="max-w-[650px]">
            <p className="mb-4 text-[11px] font-normal tracking-[0.35em] text-[#ffd6d6]">
              {t.badge}
            </p>

            <h1 className="text-[38px] font-normal leading-[1.25] tracking-[-0.02em] text-white md:text-[58px]">
              {t.title}
            </h1>

            <p className="mt-5 max-w-[620px] text-[15px] font-normal leading-8 text-white/82 md:text-[17px]">
              {t.text}
            </p>
          </div>
        </div>
      </section>

      <section className="-mt-14 px-5 md:px-10">
        <div className="relative z-20 mx-auto grid max-w-7xl grid-cols-3 gap-3 md:gap-5">
          <Stat label={t.cases} value={cases.length} />
          <Stat label={t.completed} value={completed} />
          <Stat label={t.total} value={totalRaised.toLocaleString()} />
        </div>
      </section>

      <section className="px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => {
            const percent = Math.min(Math.round((item.raised / item.target) * 100), 100);
            const donateHref = `/${locale}/donate?case=${item.slug}&title=${encodeURIComponent(
              item.title[locale]
            )}`;

            return (
              <article
                key={item.slug}
                className="group overflow-hidden border border-[#f0d6d8] bg-white shadow-[0_18px_60px_rgba(80,8,12,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(80,8,12,0.1)]"
              >
                <Link href={`/${locale}/cases/${item.slug}`} className="block">
                  <div className="relative h-[230px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title[locale]}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3b0508]/60 to-transparent" />

                    <div className="absolute bottom-4 right-4 left-4 flex items-center justify-between gap-3 text-white">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-[12px] font-normal backdrop-blur">
                        <MapPin size={13} />
                        {item.location[locale]}
                      </span>

                      <span className="rounded-full bg-[#d9303a] px-3 py-1 text-[12px] font-normal">
                        {percent}%
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="p-5 md:p-6">
                  <h2 className="text-[20px] font-normal leading-8 text-[#251011] md:text-[22px]">
                    {item.title[locale]}
                  </h2>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#f4e3e4]">
                    <div
                      className="h-full rounded-full bg-[#d9303a]"
                      style={{ width: `${percent}%` }}
                    />
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3 text-[12px] text-[#6f4b4e]">
                    <Info label={t.raised} value={`${item.raised.toLocaleString()} IQD`} />
                    <Info label={t.target} value={`${item.target.toLocaleString()} IQD`} />
                    <Info label={t.donors} value={item.donors} />
                    <Info label={t.days} value={item.daysLeft} />
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <Link
                      href={`/${locale}/cases/${item.slug}`}
                      className="rounded-xl border border-[#e8c8ca] px-4 py-3 text-center text-[13px] font-normal text-[#8f1d24] transition hover:bg-[#fff3f4]"
                    >
                      {t.details}
                    </Link>

                    <Link
                      href={donateHref}
                      className="rounded-xl bg-[#d9303a] px-4 py-3 text-center text-[13px] font-normal text-white transition hover:bg-[#b91f28]"
                    >
                      {t.donate}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-white px-3 py-5 text-center shadow-[0_14px_50px_rgba(80,8,12,0.08)] ring-1 ring-[#f0d6d8] md:px-6 md:py-7">
      <p className="text-[22px] font-normal tracking-[-0.02em] text-[#d9303a] md:text-[34px]">
        {value}
      </p>
      <p className="mt-1 text-[12px] font-normal text-[#7a5c5f] md:text-[14px]">
        {label}
      </p>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <p className="text-[11px] font-normal text-[#9a777a]">{label}</p>
      <p className="mt-1 text-[13px] font-normal text-[#251011]">{value}</p>
    </div>
  );
}