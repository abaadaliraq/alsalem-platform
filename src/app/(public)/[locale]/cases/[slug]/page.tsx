import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, MapPin, Users } from "lucide-react";
import { getCaseBySlug, type Locale } from "../../../../../lib/data/cases";

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

const labels = {
  ar: {
    back: "العودة للحالات",
    story: "قصة الحالة",
    updates: "التحديثات",
    raised: "تم جمع",
    target: "الهدف",
    donors: "المتبرعون",
    daysLeft: "الأيام المتبقية",
    donate: "تبرع الآن",
    progress: "نسبة الإنجاز",
    currency: "د.ع",
  },
  en: {
    back: "Back to Cases",
    story: "Case Story",
    updates: "Updates",
    raised: "Raised",
    target: "Target",
    donors: "Donors",
    daysLeft: "Days Left",
    donate: "Donate Now",
    progress: "Progress",
    currency: "IQD",
  },
  ku: {
    back: "گەڕانەوە بۆ حاڵەتەکان",
    story: "چیرۆکی حاڵەت",
    updates: "نوێکارییەکان",
    raised: "کۆکراوەتەوە",
    target: "ئامانج",
    donors: "بەخشەران",
    daysLeft: "ڕۆژی ماوە",
    donate: "بەخشین بکە",
    progress: "ڕێژەی پێشکەوتن",
    currency: "د.ع",
  },
};

export default async function CaseDetailsPage({ params }: Props) {
  const { locale, slug } = await params;
  const item = getCaseBySlug(slug);

  if (!item) notFound();

  const t = labels[locale] ?? labels.ar;
  const isRtl = locale === "ar" || locale === "ku";
  const percent = Math.min(Math.round((item.raised / item.target) * 100), 100);

  const donateHref = `/${locale}/donate?case=${item.slug}&title=${encodeURIComponent(
    item.title[locale]
  )}`;

  return (
    <main dir={isRtl ? "rtl" : "ltr"} className="bg-white text-[#251011]">
      {/* HERO */}
      <section className="relative min-h-[430px] overflow-hidden bg-[#8f1d24] md:min-h-[560px]">
        <img
          src={item.image}
          alt={item.title[locale]}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#4d080d]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/15 to-[#270509]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4d080d]/70 via-transparent to-[#4d080d]/35" />

        <div className="relative z-10 mx-auto flex min-h-[430px] max-w-7xl items-end px-5 pb-16 pt-28 md:min-h-[560px] md:px-10 md:pb-20">
          <div className="max-w-[760px]">
            <Link
              href={`/${locale}/cases`}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] font-normal text-white/85 backdrop-blur transition hover:bg-white/15"
            >
              <ArrowLeft size={15} strokeWidth={1.6} />
              {t.back}
            </Link>

            <p className="mb-4 inline-flex items-center gap-2 text-[12px] font-normal tracking-[0.22em] text-[#ffd6d6]">
              <MapPin size={15} strokeWidth={1.6} />
              {item.location[locale]}
            </p>

            <h1 className="max-w-4xl text-[34px] font-normal leading-[1.35] tracking-[-0.02em] text-white md:text-[54px]">
              {item.title[locale]}
            </h1>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-5 py-12 md:px-10 md:py-18">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_380px]">
          {/* STORY */}
          <article className="border-y border-[#f0d6d8] py-8 md:py-10">
            <h2 className="text-[26px] font-normal leading-[1.4] text-[#251011] md:text-[34px]">
              {t.story}
            </h2>

            <p className="mt-5 max-w-3xl text-[15px] font-normal leading-8 text-[#604346] md:text-[16px]">
              {item.story[locale]}
            </p>

            <h3 className="mt-10 text-[22px] font-normal text-[#251011] md:text-[28px]">
              {t.updates}
            </h3>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {item.updates[locale].map((update, index) => (
                <div
                  key={update}
                  className="border border-[#f0d6d8] bg-[#fff8f8] px-4 py-4 text-[14px] font-normal leading-7 text-[#604346]"
                >
                  <span className="text-[#d9303a]">{index + 1}.</span>{" "}
                  {update}
                </div>
              ))}
            </div>
          </article>

          {/* DONATION PANEL */}
          <aside className="h-fit bg-[#8f1d24] p-5 text-white md:p-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[13px] font-normal text-white/65">
                  {t.progress}
                </p>
                <p className="mt-1 text-[38px] font-normal leading-none text-white md:text-[46px]">
                  {percent}%
                </p>
              </div>

              <Clock size={28} strokeWidth={1.5} className="text-[#ffd6d6]" />
            </div>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/18">
              <div
                className="h-full rounded-full bg-white"
                style={{ width: `${percent}%` }}
              />
            </div>

            <div className="mt-7 grid gap-3 text-[13px]">
              <Info
                label={t.raised}
                value={`${item.raised.toLocaleString()} ${t.currency}`}
              />
              <Info
                label={t.target}
                value={`${item.target.toLocaleString()} ${t.currency}`}
              />
              <Info label={t.donors} value={item.donors} />
              <Info label={t.daysLeft} value={item.daysLeft} />
            </div>

            <Link
              href={donateHref}
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-[14px] font-normal text-[#8f1d24] transition hover:bg-[#fff1f2]"
            >
              {t.donate}
              <Users size={16} strokeWidth={1.6} />
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex items-center justify-between border-b border-white/15 pb-3">
      <span className="font-normal text-white/62">{label}</span>
      <span className="font-normal text-white">{value}</span>
    </div>
  );
}