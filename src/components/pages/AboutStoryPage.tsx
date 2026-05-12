import Link from "next/link";
import {
  ArrowLeft,
  HandHeart,
  ShieldCheck,
  UsersRound,
  HeartHandshake,
} from "lucide-react";
import type { Locale } from "../../lib/locales/config";

type Props = {
  locale: Locale;
};
type PageProps = {
  params: {
    locale: Locale;
  };
};

const aboutText = {
  ar: {
    nav: {
      home: "الرئيسية",
      cases: "الحالات",
      categories: "الأقسام",
      donate: "آلية التبرع",
      contact: "تواصل معنا",
      about: "عن المنظمة",
      lang: "العربية",
    },
    badge: "AL SALEEM CHARITY",
    heroTitle: "منظمة السالم الخيرية",

    donateNow: "تبرع الآن",
    viewCases: "مشاهدة الحالات",

    introLabel: "نبذة عن المنظمة",
    introTitle: "منظمة السالم الخيرية",
    introDesc:
      "منظمة إنسانية غير ربحية أسسها الفنان محمد السالم تخليداً لروح والده الراحل، لتكون مساحة حقيقية للعطاء الإنساني المنظم، وربط الخير بالناس الذين يحتاجونه بكرامة واحترام.",
    introSecond:
      "منظمة السالم الخيرية منصة إنسانية تهدف إلى تسهيل العمل الخيري وربط المتبرعين بالحالات المحتاجة بوضوح وشفافية.",

    valuesTitle: "نؤمن في منظمة السالم الخيرية بـ",
    values: [
      {
        title: "العطاء بكرامة",
        desc: "نحرص أن تصل المساعدة بطريقة تحفظ كرامة الإنسان.",
        icon: HandHeart,
      },
      {
        title: "وضوح وثقة",
        desc: "نعرض الحالات بصورة واضحة ومنظمة قدر الإمكان.",
        icon: ShieldCheck,
      },
      {
        title: "ربط الخير بالناس",
        desc: "نقرب المسافة بين المتبرعين والحالات المحتاجة.",
        icon: UsersRound,
      },
      {
        title: "أثر حقيقي",
        desc: "هدفنا أن يتحول التبرع إلى نتيجة إنسانية ملموسة.",
        icon: HeartHandshake,
      },
    ],

    ctaTitle: "ساهم في إيصال المساعدة لمن يحتاجها فعلاً",
    ctaDesc: "كل تبرع صغير قد يكون بداية فرق كبير في حياة إنسان.",
  },

  en: {
    nav: {
      home: "Home",
      cases: "Cases",
      categories: "Categories",
      donate: "Donation Process",
      contact: "Contact Us",
      about: "About",
      lang: "English",
    },
    badge: "AL SALEEM CHARITY",
    heroTitle: "Al Saleem Charity Organization",
    heroDesc:
      "A non-profit humanitarian organization founded by artist Mohammed Al Saleem in memory of his late father, created as a real space for organized humanitarian giving and connecting kindness with people who need it with dignity and respect.",
    donateNow: "Donate Now",
    viewCases: "View Cases",

    introLabel: "About the organization",
    introTitle: "Al Saleem Charity Organization",
    introDesc:
      "A non-profit humanitarian organization founded by artist Mohammed Al Saleem in memory of his late father, created as a real space for organized humanitarian giving and connecting kindness with people who need it with dignity and respect.",
    introSecond:
      "Al Saleem Charity is a humanitarian platform that aims to facilitate charitable work and connect donors with people in need clearly and transparently.",

    valuesTitle: "At Al Saleem Charity, we believe in",
    values: [
      {
        title: "Giving with dignity",
        desc: "We make sure support reaches people in a way that protects human dignity.",
        icon: HandHeart,
      },
      {
        title: "Clarity and trust",
        desc: "We present cases as clearly and responsibly as possible.",
        icon: ShieldCheck,
      },
      {
        title: "Connecting kindness",
        desc: "We bring donors closer to people who need real support.",
        icon: UsersRound,
      },
      {
        title: "Real impact",
        desc: "Our goal is to turn donations into a tangible humanitarian result.",
        icon: HeartHandshake,
      },
    ],

    ctaTitle: "Help deliver support to those who truly need it",
    ctaDesc: "Every small donation can be the beginning of a big difference in someone’s life.",
  },

  ku: {
    nav: {
      home: "سەرەکی",
      cases: "حاڵەتەکان",
      categories: "بەشەکان",
      donate: "شێوازی بەخشین",
      contact: "پەیوەندی",
      about: "دەربارەی ڕێکخراو",
      lang: "کوردی",
    },
    badge: "AL SALEEM CHARITY",
    heroTitle: "ڕێکخراوی خێرخوازی سالم",
    heroDesc:
      "ڕێکخراوێکی مرۆیی قازانج نەویستە، دامەزراوە بۆ یارمەتیدانی ئەوانەی پێویستیان بە پاڵپشتی هەیە بە ڕێز و کەرامەت.",
    donateNow: "بەخشین",
    viewCases: "بینینی حاڵەتەکان",

    introLabel: "دەربارەی ڕێکخراو",
    introTitle: "ڕێکخراوی خێرخوازی سالم",
    introDesc:
      "ڕێکخراوێکی مرۆیی قازانج نەویستە، دامەزراوە بۆ یارمەتیدانی ئەوانەی پێویستیان بە پاڵپشتی هەیە بە ڕێز و کەرامەت.",
    introSecond:
      "پلاتفۆرمێکی مرۆییە بۆ ئاسانکردنی کاری خێرخوازی و پەیوەندیکردنی بەخشەران بە حاڵەتە پێویستەکان بە ڕوونی و شەفافیەت.",

    valuesTitle: "لە ڕێکخراوی سالم باوەڕمان بەمانە هەیە",
    values: [
      {
        title: "بەخشین بە کەرامەت",
        desc: "یارمەتی دەگەیەنین بە شێوەیەک کە کەرامەتی مرۆڤ بپارێزێت.",
        icon: HandHeart,
      },
      {
        title: "ڕوونی و متمانە",
        desc: "حاڵەتەکان بە ڕوونی و بە شێوەیەکی ڕێکخراو پیشان دەدەین.",
        icon: ShieldCheck,
      },
      {
        title: "پەیوەندی خێر بە خەڵک",
        desc: "نێوان بەخشەران و حاڵەتە پێویستەکان نزیک دەکەینەوە.",
        icon: UsersRound,
      },
      {
        title: "کاریگەری ڕاستەقینە",
        desc: "ئامانجمان ئەوەیە بەخشین ببێتە ئەنجامێکی مرۆیی ملموس.",
        icon: HeartHandshake,
      },
    ],

    ctaTitle: "یارمەتی بگەیەنە ئەوانەی بەڕاستی پێویستیان پێیە",
    ctaDesc: "هەر بەخشینێکی بچووک دەتوانێت دەستپێکی گۆڕانکارییەکی گەورە بێت.",
  },
};

export default function AboutStoryPage({ locale }: Props) {
  const t = aboutText[locale] ?? aboutText.ar;
  const isRtl = locale === "ar" || locale === "ku";

  return (
    <main
      dir={isRtl ? "rtl" : "ltr"}
      className="min-h-screen bg-white text-[#10233f]"
    >
      {/* HERO */}
      <section className="relative min-h-[540px] overflow-hidden bg-[#071d35] md:min-h-[610px]">
        <img
       src="/about-main.jpg"
          alt="Al Saleem Charity"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#061b34]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061b34]/95 via-[#061b34]/70 to-[#061b34]/10 rtl:bg-gradient-to-l" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#061b34] to-transparent" />

       

        <div className="relative z-10 mx-auto flex max-w-7xl items-center px-5 pb-24 pt-20 sm:px-8 md:pt-28 lg:px-10">
          <div className="max-w-[560px]">
            <p className="mb-5 text-[11px] font-medium tracking-[0.28em] text-white/65">
              {t.badge}
            </p>

            <h1 className="max-w-xl text-[34px] font-normal leading-[1.35] tracking-[-0.02em] text-white sm:text-[42px] md:text-[50px]">
              {t.heroTitle}
            </h1>

            <p className="mt-6 max-w-[520px] text-[15px] font-normal leading-8 text-white/78 md:text-[16px]">
          
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href={`/${locale}/donate`}
                className="rounded-xl bg-[#f8c542] px-7 py-3 text-[14px] font-normal text-[#10233f] transition hover:bg-[#ffd35a]"
              >
                {t.donateNow}
              </Link>

              <Link
                href={`/${locale}/cases`}
                className="rounded-xl border border-white/30 bg-white/5 px-7 py-3 text-[14px] font-normal text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                {t.viewCases}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
     <section className="bg-white py-16 md:py-24">
        <div className="grid items-center md:grid-cols-2">
          <div className="relative h-[320px] overflow-hidden md:h-[540px]">
  <img
    src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1800&auto=format&fit=crop"
    alt="Charity"
    className="h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-[#071d35]/30 to-transparent" />
</div>

         <div className="mx-auto max-w-[560px] px-5 pt-10 text-center md:px-14 md:text-start">
            <p className="text-[14px] font-normal text-[#4385e8]">
              {t.introLabel}
            </p>

            <h2 className="mt-5 text-[30px] font-normal leading-[1.4] tracking-[-0.01em] text-[#10233f] sm:text-[36px] md:text-[40px]">
              {t.introTitle}
            </h2>

            <p className="mt-6 text-[15px] font-normal leading-8 text-[#526179]">
              {t.introDesc}
            </p>

            <div className="mx-auto my-8 h-px w-16 bg-[#4385e8]/50 md:mx-0" />

            <p className="text-[15px] font-normal leading-8 text-[#66758a]">
              {t.introSecond}
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white px-5 pb-20 sm:px-8 md:pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center justify-center gap-4">
            <span className="hidden h-px w-16 bg-[#d8e6f7] sm:block" />
            <h2 className="text-center text-[20px] font-normal text-[#4385e8] md:text-[22px]">
              {t.valuesTitle}
            </h2>
            <span className="hidden h-px w-16 bg-[#d8e6f7] sm:block" />
          </div>

         <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
            {t.values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[18px] border border-[#dbe7f5] bg-white px-4 py-5 text-center shadow-[0_12px_40px_rgba(8,31,61,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(8,31,61,0.08)]"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf3ff] text-[#2468c9]">
                    <Icon size={27} strokeWidth={1.6} />
                  </div>

                  <h3 className="text-[15px] md:text-[18px]">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-4 max-w-[210px] text-[12px] md:text-[14px] font-normal leading-7 text-[#6b7b91]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[24px] bg-[#eef5ff]">
          <div className="grid items-center gap-8 px-6 py-8 md:grid-cols-[180px_1fr_auto] md:px-9 md:py-10">
            <div className="overflow-hidden rounded-[18px]">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=900&auto=format&fit=crop"
                alt="Donate"
                className="h-[120px] w-full object-cover md:h-[120px]"
              />
            </div>

            <div className="text-center md:text-start">
              <h2 className="text-[24px] font-normal leading-[1.5] text-[#10233f] md:text-[28px]">
                {t.ctaTitle}
              </h2>
              <p className="mt-3 text-[15px] font-normal leading-7 text-[#66758a]">
                {t.ctaDesc}
              </p>
            </div>

            <div className="flex items-center justify-center gap-5">
              <Link
                href={`/${locale}/donate`}
                className="rounded-xl bg-[#f8c542] px-7 py-3 text-[14px] font-normal text-[#10233f] transition hover:bg-[#ffd35a]"
              >
                {t.donateNow}
              </Link>

              <ArrowLeft
                size={20}
                strokeWidth={1.5}
                className="text-[#10233f]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}