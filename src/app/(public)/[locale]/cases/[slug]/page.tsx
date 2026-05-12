import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseBySlug, type Locale } from "../../../../../lib/data/cases";

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export default async function CaseDetailsPage({ params }: Props) {
  const { locale, slug } = await params;
  const item = getCaseBySlug(slug);

  if (!item) notFound();

  const percent = Math.min(Math.round((item.raised / item.target) * 100), 100);

  return (
    <main className="bg-[#F7F3EA] text-[#071726]">
      <section className="relative h-[420px] overflow-hidden md:h-[620px]">
        <img
          src={item.image}
          alt={item.title[locale]}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#071726]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F3EA] via-transparent to-black/25" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-12 text-white md:px-10">
          <Link
            href={`/${locale}/cases`}
            className="mb-6 w-fit rounded-full bg-white/10 px-5 py-3 text-sm font-black backdrop-blur"
          >
            {locale === "en" ? "Back to Cases" : locale === "ku" ? "گەڕانەوە" : "العودة للحالات"}
          </Link>

          <p className="mb-3 text-sm font-black text-[#FFD32A]">
            {item.location[locale]}
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-7xl">
            {item.title[locale]}
          </h1>
        </div>
      </section>

      <section className="px-5 py-12 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[32px] bg-white p-6 shadow-sm md:p-10">
            <h2 className="text-3xl font-black">
              {locale === "en" ? "Case Story" : locale === "ku" ? "چیرۆکی کەیس" : "قصة الحالة"}
            </h2>

            <p className="mt-6 text-base leading-9 text-black/65">
              {item.story[locale]}
            </p>

            <h3 className="mt-10 text-2xl font-black">
              {locale === "en" ? "Updates" : locale === "ku" ? "نوێکارییەکان" : "التحديثات"}
            </h3>

            <div className="mt-5 grid gap-3">
              {item.updates[locale].map((update, index) => (
                <div
                  key={update}
                  className="rounded-2xl bg-[#F7F3EA] p-4 text-sm font-bold text-black/65"
                >
                  {index + 1}. {update}
                </div>
              ))}
            </div>
          </article>

          <aside className="h-fit rounded-[32px] bg-[#071726] p-6 text-white shadow-xl md:p-8">
            <p className="text-5xl font-black text-[#FFD32A]">{percent}%</p>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-[#FFD32A]"
                style={{ width: `${percent}%` }}
              />
            </div>

            <div className="mt-6 grid gap-4 text-sm">
              <Info label="Raised" value={`${item.raised.toLocaleString()} IQD`} />
              <Info label="Target" value={`${item.target.toLocaleString()} IQD`} />
              <Info label="Donors" value={item.donors} />
              <Info label="Days Left" value={item.daysLeft} />
            </div>

            <Link
              href={`/${locale}/donate`}
              className="mt-8 block rounded-full bg-[#FFD32A] py-4 text-center text-sm font-black text-[#071726]"
            >
              {locale === "en" ? "Donate Now" : locale === "ku" ? "بەخشین بکە" : "تبرع الآن"}
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-3">
      <span className="text-white/50">{label}</span>
      <span className="font-black">{value}</span>
    </div>
  );
}