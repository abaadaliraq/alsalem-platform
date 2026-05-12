import Link from "next/link";
import {
  ArrowLeft,
  GraduationCap,
  HeartPulse,
  Shirt,
  Utensils,
  Home,
  Users,
} from "lucide-react";
import type { Locale } from "../../../../lib/locales/config";

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

type Props = {
  params: Promise<{ locale: Locale }>;
};

const text = {
  ar: {
    label: "أقسام التبرع",
    title: "اختر مجال التبرع المناسب",
    desc: "كل قسم يمثل باباً واضحاً للمساعدة. اختر المجال الذي تريد دعمه وشاهد الحالات المرتبطة به.",
    back: "العودة للرئيسية",
    view: "عرض القسم",
  },
  en: {
    label: "Donation Categories",
    title: "Choose a donation category",
    desc: "Choose the field you want to support and explore related cases.",
    back: "Back Home",
    view: "View Category",
  },
  ku: {
    label: "بەشەکانی بەخشین",
    title: "بەشی گونجاو هەڵبژێرە",
    desc: "ئەو بەشە هەڵبژێرە کە دەتەوێت پشتیوانی بکەیت.",
    back: "گەڕانەوە",
    view: "بینینی بەش",
  },
};

export default async function CategoriesPage({ params }: Props) {
  const { locale } = await params;
  const t = text[locale] ?? text.ar;
  const isRtl = locale === "ar" || locale === "ku";

  return (
    <main dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-white text-[#082217]">
      <section className="relative overflow-hidden bg-[#f7fbf8] px-5 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(25,135,84,0.16),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(25,135,84,0.08),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-4 text-[12px] font-normal tracking-[0.28em] text-[#1c8b5a]">
                {t.label}
              </p>

              <h1 className="text-[34px] font-normal leading-[1.35] tracking-[-0.02em] text-[#082217] md:text-[52px]">
                {t.title}
              </h1>

              <p className="mt-5 max-w-2xl text-[15px] font-normal leading-8 text-[#5d7068] md:text-[16px]">
                {t.desc}
              </p>
            </div>

            <Link
              href={`/${locale}`}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[#d8eadf] bg-white px-5 py-3 text-[13px] font-normal text-[#1c6b49] shadow-sm transition hover:bg-[#eaf7ef]"
            >
              <ArrowLeft size={15} strokeWidth={1.6} />
              {t.back}
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3">
            {categories.map((cat, index) => {
              const Icon = cat.icon;

              return (
                <Link
                  key={cat.slug}
                  href={`/${locale}/categories/${cat.slug}`}
                  className="group border border-[#dcefe4] bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-[#1c8b5a]/40 hover:bg-[#f7fbf8] md:p-7"
                >
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf7ef] text-[#1c8b5a] md:h-14 md:w-14">
                      <Icon size={22} strokeWidth={1.6} />
                    </div>

                    <span className="text-[12px] font-normal text-[#9ab2a5]">
                      0{index + 1}
                    </span>
                  </div>

                  <h2 className="text-[20px] font-normal text-[#082217] md:text-[26px]">
                    {cat.title[locale]}
                  </h2>

                  <p className="mt-3 min-h-[70px] text-[12px] font-normal leading-6 text-[#687b72] md:text-[14px] md:leading-7">
                    {cat.desc[locale]}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-[13px] font-normal text-[#1c8b5a]">
                    {t.view}
                    <ArrowLeft size={14} strokeWidth={1.6} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}