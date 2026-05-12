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
    title: {
      ar: "التعليم",
      en: "Education",
      ku: "پەروەردە",
    },
    desc: {
      ar: "دعم الطلاب، الحقائب المدرسية، القرطاسية، والمنح التعليمية.",
      en: "Supporting students, school bags, supplies, and education aid.",
      ku: "پشتیوانی خوێندکاران و پێداویستی خوێندن.",
    },
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
  },

  {
    slug: "health",
    title: {
      ar: "الصحة",
      en: "Health",
      ku: "تەندروستی",
    },
    desc: {
      ar: "مساعدة الحالات المرضية، العلاج، الأدوية، والعمليات الطارئة.",
      en: "Medical cases, treatments, medicine, and urgent operations.",
      ku: "یارمەتی نەخۆشان و چارەسەری پزیشکی.",
    },
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
  },

  {
    slug: "clothes",
    title: {
      ar: "الكسوة",
      en: "Clothing",
      ku: "جلوبەرگ",
    },
    desc: {
      ar: "توفير الملابس والاحتياجات الأساسية للعوائل المتعففة.",
      en: "Providing clothing and basic needs for families.",
      ku: "دابینکردنی جلوبەرگ و پێداویستی بنەڕەتی.",
    },
    icon: Shirt,
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    slug: "food",
    title: {
      ar: "الغذاء",
      en: "Food",
      ku: "خواردن",
    },
    desc: {
      ar: "سلات غذائية ومساعدات معيشية للعوائل المحتاجة.",
      en: "Food baskets and living support for families in need.",
      ku: "سەبەتەی خواردن و یارمەتی ژیان.",
    },
    icon: Utensils,
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop",
  },

  {
    slug: "housing",
    title: {
      ar: "السكن",
      en: "Housing",
      ku: "نیشتەجێبوون",
    },
    desc: {
      ar: "ترميم المنازل وتوفير احتياجات السكن الأساسية.",
      en: "Home repairs and housing support.",
      ku: "چاککردنەوەی ماڵ و پشتیوانی نیشتەجێبوون.",
    },
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
  },

  {
    slug: "orphans",
    title: {
      ar: "الأيتام",
      en: "Orphans",
      ku: "هەتیوان",
    },
    desc: {
      ar: "رعاية ودعم الأيتام تعليمياً ومعيشياً وإنسانياً.",
      en: "Supporting orphans with education and daily needs.",
      ku: "پشتیوانی هەتیوان لە خوێندن و ژیان.",
    },
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
  },
];

type Props = {
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function CategoriesPage({
  params,
}: Props) {
  const { locale } = await params;

  const currentLocale = locale as Locale;
  const isAr = currentLocale === "ar";

  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#071726]">
      <section className="relative overflow-hidden px-5 pb-20 pt-32 md:px-10 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(123,190,64,0.15),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(91,43,216,0.12),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          {/* HEADER */}
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-[#5B2BD8]">
                Donation Categories
              </p>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] md:text-7xl">
                {isAr
                  ? "اختر مجال التبرع المناسب"
                  : "Choose a Donation Category"}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-black/55 md:text-lg">
                {isAr
                  ? "كل قسم يمثل باباً واضحاً للمساعدة. اختر المجال الذي تريد دعمه وشاهد الحالات المرتبطة به."
                  : "Choose the category you want to support and explore related cases."}
              </p>
            </div>

            <Link
              href={`/${currentLocale}`}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black shadow-sm transition hover:bg-[#071726] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />

              {isAr ? "العودة للرئيسية" : "Back Home"}
            </Link>
          </div>

          {/* GRID */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, index) => {
              const Icon = cat.icon;

              return (
                <Link
                  key={cat.slug}
                  href={`/${currentLocale}/categories/${cat.slug}`}
                  className="group overflow-hidden rounded-[32px] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  {/* IMAGE */}
                  <div className="relative h-[230px] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title[currentLocale]}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                    <div className="absolute end-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-[#071726] backdrop-blur">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="absolute bottom-5 start-5">
                      <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-black text-white backdrop-blur">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h2 className="text-3xl font-black">
                      {cat.title[currentLocale]}
                    </h2>

                    <p className="mt-3 min-h-[56px] text-sm leading-7 text-black/55">
                      {cat.desc[currentLocale]}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#071726] px-5 py-3 text-sm font-black text-white transition group-hover:bg-[#5B2BD8]">
                      {isAr ? "عرض القسم" : "View Category"}

                      <ArrowLeft className="h-4 w-4" />
                    </div>
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