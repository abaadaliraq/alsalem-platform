import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  GraduationCap,
  HeartPulse,
  Shirt,
  Utensils,
  Home,
  Users,
  MapPin,
} from "lucide-react";
import { supabase } from "../../../../../lib/supabase/client";
import type { Locale } from "../../../../../lib/locales/config";

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

const categories = [
  {
    slug: "education",
    title: { ar: "التعليم", en: "Education", ku: "پەروەردە" },
    desc: {
      ar: "دعم الطلاب، الحقائب المدرسية، القرطاسية، والمنح التعليمية.",
      en: "Supporting students, school bags, supplies, and education aid.",
      ku: "پشتیوانی خوێندکاران و پێداویستی خوێندن.",
    },
    icon: GraduationCap,
  },
  {
    slug: "health",
    title: { ar: "الصحة", en: "Health", ku: "تەندروستی" },
    desc: {
      ar: "مساعدة الحالات المرضية، العلاج، الأدوية، والعمليات الطارئة.",
      en: "Medical cases, treatments, medicine, and urgent operations.",
      ku: "یارمەتی نەخۆشان و چارەسەری پزیشکی.",
    },
    icon: HeartPulse,
  },
  {
    slug: "clothes",
    title: { ar: "الكسوة", en: "Clothing", ku: "جلوبەرگ" },
    desc: {
      ar: "توفير الملابس والاحتياجات الأساسية للعوائل المتعففة.",
      en: "Providing clothing and basic needs for families.",
      ku: "دابینکردنی جلوبەرگ و پێداویستی بنەڕەتی.",
    },
    icon: Shirt,
  },
  {
    slug: "food",
    title: { ar: "الغذاء", en: "Food", ku: "خواردن" },
    desc: {
      ar: "سلات غذائية ومساعدات معيشية للعوائل المحتاجة.",
      en: "Food baskets and living support for families in need.",
      ku: "سەبەتەی خواردن و یارمەتی ژیان.",
    },
    icon: Utensils,
  },
  {
    slug: "housing",
    title: { ar: "السكن", en: "Housing", ku: "نیشتەجێبوون" },
    desc: {
      ar: "ترميم المنازل وتوفير احتياجات السكن الأساسية.",
      en: "Home repairs and housing support.",
      ku: "چاککردنەوەی ماڵ و پشتیوانی نیشتەجێبوون.",
    },
    icon: Home,
  },
  {
    slug: "orphans",
    title: { ar: "الأيتام", en: "Orphans", ku: "هەتیوان" },
    desc: {
      ar: "رعاية ودعم الأيتام تعليمياً ومعيشياً وإنسانياً.",
      en: "Supporting orphans with education and daily needs.",
      ku: "پشتیوانی هەتیوان لە خوێندن و ژیان.",
    },
    icon: Users,
  },
];

const text = {
  ar: {
    back: "العودة للأقسام",
    label: "قسم تبرع",
    related: "الحالات المرتبطة بهذا القسم",
    empty: "لا توجد حالات مرتبطة بهذا القسم حالياً.",
    donate: "تبرع الآن",
    details: "عرض التفاصيل",
    raised: "تم جمع",
    target: "الهدف",
  },
  en: {
    back: "Back to Categories",
    label: "Donation Category",
    related: "Related Cases",
    empty: "No cases are currently linked to this category.",
    donate: "Donate Now",
    details: "View Details",
    raised: "Raised",
    target: "Target",
  },
  ku: {
    back: "گەڕانەوە بۆ بەشەکان",
    label: "بەشی بەخشین",
    related: "حاڵەتە پەیوەندیدارەکان",
    empty: "ئێستا هیچ حاڵەتێک نییە.",
    donate: "بەخشین",
    details: "وردەکاری",
    raised: "کۆکراوەتەوە",
    target: "ئامانج",
  },
};

export default async function CategorySlugPage({ params }: Props) {
  const { locale, slug } = await params;

  const category = categories.find((item) => item.slug === slug);
  if (!category) notFound();

  const { data: cases } = await supabase
    .from("cases")
    .select("*")
    .eq("category_slug", slug)
    .eq("status", "active")
    .order("created_at", { ascending: false });

  const t = text[locale] ?? text.ar;
  const isRtl = locale === "ar" || locale === "ku";
  const Icon = category.icon;

  return (
    <main dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-white text-[#082217]">
      <section className="relative overflow-hidden bg-[#f7fbf8] px-5 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(25,135,84,0.16),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(25,135,84,0.08),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href={`/${locale}/categories`}
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#d8eadf] bg-white px-5 py-3 text-[13px] font-normal text-[#1c6b49] shadow-sm transition hover:bg-[#eaf7ef]"
          >
            <ArrowLeft size={15} strokeWidth={1.6} />
            {t.back}
          </Link>

          <div className="grid items-center gap-8 md:grid-cols-[1fr_300px]">
            <div>
              <p className="mb-4 text-[12px] font-normal tracking-[0.28em] text-[#1c8b5a]">
                {t.label}
              </p>

              <h1 className="text-[36px] font-normal leading-[1.35] tracking-[-0.02em] text-[#082217] md:text-[58px]">
                {category.title[locale]}
              </h1>

              <p className="mt-5 max-w-2xl text-[15px] font-normal leading-8 text-[#5d7068] md:text-[16px]">
                {category.desc[locale]}
              </p>
            </div>

            <div className="flex h-[180px] items-center justify-center border border-[#dcefe4] bg-white md:h-[220px]">
              <Icon size={66} strokeWidth={1.3} className="text-[#1c8b5a]" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-7 text-[24px] font-normal text-[#082217] md:text-[32px]">
            {t.related}
          </h2>

          {!cases || cases.length === 0 ? (
            <div className="border border-dashed border-[#cfe7d8] bg-[#f7fbf8] px-5 py-12 text-center">
              <p className="text-[15px] font-normal leading-7 text-[#5d7068]">
                {t.empty}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3">
              {cases.map((item) => {
                const title =
                  locale === "ar"
                    ? item.title_ar
                    : locale === "ku"
                    ? item.title_ku || item.title_ar
                    : item.title_en || item.title_ar;

                const desc =
                  locale === "ar"
                    ? item.short_desc_ar
                    : locale === "ku"
                    ? item.short_desc_ku || item.short_desc_ar
                    : item.short_desc_en || item.short_desc_ar;

                const location =
                  locale === "ar"
                    ? item.location_ar
                    : locale === "ku"
                    ? item.location_ku || item.location_ar
                    : item.location_en || item.location_ar;

                const percent = Math.min(
                  Math.round((Number(item.raised_amount) / Number(item.target_amount)) * 100),
                  100
                );

                return (
                  <article
                    key={item.id}
                    className="overflow-hidden border border-[#dcefe4] bg-white shadow-[0_18px_60px_rgba(8,34,23,0.05)]"
                  >
                    <Link href={`/${locale}/cases/${item.slug}`}>
                      <div className="relative h-[150px] overflow-hidden md:h-[230px]">
                        <img
                          src={item.image_url || "/images/cases/case-placeholder.jpg"}
                          alt={title}
                          className="h-full w-full object-cover transition duration-700 hover:scale-105"
                        />
                      </div>
                    </Link>

                    <div className="p-4 md:p-6">
                      <h3 className="text-[15px] font-normal leading-7 text-[#082217] md:text-[22px]">
                        {title}
                      </h3>

                      <p className="mt-2 line-clamp-2 text-[12px] font-normal leading-6 text-[#66756e] md:text-[14px]">
                        {desc}
                      </p>

                      <div className="mt-4 flex items-center gap-1 text-[11px] text-[#1c8b5a] md:text-[12px]">
                        <MapPin size={13} />
                        {location}
                      </div>

                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#e5f3ea]">
                        <div
                          className="h-full rounded-full bg-[#1c8b5a]"
                          style={{ width: `${percent}%` }}
                        />
                      </div>

                      <div className="mt-3 flex justify-between text-[10px] text-[#6d7c74] md:text-[12px]">
                        <span>
                          {t.raised}: {Number(item.raised_amount).toLocaleString()}
                        </span>
                        <span>
                          {t.target}: {Number(item.target_amount).toLocaleString()}
                        </span>
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-2">
                        <Link
                          href={`/${locale}/cases/${item.slug}`}
                          className="border border-[#cfe7d8] px-3 py-2 text-center text-[11px] font-normal text-[#1c6b49] md:text-[13px]"
                        >
                          {t.details}
                        </Link>

                        <Link
                          href={`/${locale}/donate?case=${item.slug}&title=${encodeURIComponent(title)}`}
                          className="bg-[#1c8b5a] px-3 py-2 text-center text-[11px] font-normal text-white md:text-[13px]"
                        >
                          {t.donate}
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}