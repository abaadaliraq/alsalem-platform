import Link from "next/link";
import { notFound } from "next/navigation";
import {
  donationCategories,
  type Locale,
} from "../../../../../lib/data/categories";

type Props = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { locale, slug } = await params;
  const category = donationCategories.find((item) => item.slug === slug);

  if (!category) notFound();

  return (
    <main className="min-h-screen bg-[#F7F3EA] pt-28 text-[#071726]">
      <section className="relative overflow-hidden px-4 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Link
            href={`/${locale}`}
            className="mb-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black shadow-sm"
          >
            {locale === "en" ? "Back Home" : locale === "ku" ? "گەڕانەوە" : "العودة للرئيسية"}
          </Link>

          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 text-[11px] font-black tracking-[0.28em] text-[#5B2BD8]">
                DONATION CATEGORY
              </p>

              <h1 className="text-4xl font-black md:text-7xl">
                {category.title[locale]}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-9 text-black/60">
                {category.short[locale]}
              </p>
            </div>

            <img
              src={category.image}
              alt=""
              className="h-[360px] w-full rounded-[36px] object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {category.cases.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-[32px] bg-white shadow-sm"
            >
              <img
                src={item.image}
                alt=""
                className="h-[220px] w-full object-cover"
              />

              <div className="p-6">
                <p className="mb-2 text-sm font-black text-[#5B2BD8]">
                  {item.province[locale]}
                </p>

                <h2 className="text-2xl font-black leading-tight">
                  {item.title[locale]}
                </h2>

                <p className="mt-4 text-sm leading-7 text-black/60">
                  {item.story[locale]}
                </p>

                <div className="mt-5 rounded-2xl bg-[#F7F3EA] p-4">
                  <p className="text-sm font-black">
                    {locale === "en" ? "Need:" : locale === "ku" ? "پێویستی:" : "الاحتياج:"}
                  </p>
                  <p className="mt-1 text-sm text-black/60">
                    {item.need[locale]}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm font-black">
                  <span>{item.donationType[locale]}</span>
                  {item.amount && (
                    <span>{item.amount.toLocaleString()} IQD</span>
                  )}
                </div>

                <button className="mt-6 w-full rounded-full bg-[#071726] py-4 text-sm font-black text-white">
                  {locale === "en" ? "Donate Now" : locale === "ku" ? "بەخشین" : "تبرع الآن"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}