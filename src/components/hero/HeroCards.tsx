import Link from "next/link";
import { ArrowLeft, Grid2X2, Info, MessageCircle } from "lucide-react";
import type { Locale } from "../../lib/data/cases";

type Props = {
  locale: Locale;
};

export default function HeroCards({ locale }: Props) {
  const isAr = locale === "ar";
  const isKu = locale === "ku";

  const cards = [
    {
      title: isAr ? "نبذة عنا" : isKu ? "دەربارەمان" : "About us",
      desc: isAr
        ? "تعرف على رسالة المنظمة."
        : isKu
        ? "دەربارەی ڕێکخراوەکە."
        : "Learn about our mission.",
      href: "#about",
      icon: Info,
      color: "from-[#5B2BD8] to-[#3D2AA8]",
    },
    {
      title: isAr ? "تواصل معنا" : isKu ? "پەیوەندی" : "Contact",
      desc: isAr
        ? "انتقل لمعلومات التواصل."
        : isKu
        ? "زانیاری پەیوەندی."
        : "Contact information.",
      href: "#footer",
      icon: MessageCircle,
      color: "from-[#F4C430] to-[#B78308]",
      darkText: true,
    },
    {
      title: isAr ? "الأقسام" : isKu ? "بەشەکان" : "Categories",
      desc: isAr
        ? "استعرض مجالات الدعم."
        : isKu
        ? "بەشەکانی پشتیوانی."
        : "Explore support areas.",
      href: "#categories",
      icon: Grid2X2,
      color: "from-[#2E8B57] to-[#0F5A3B]",
    },
  ];

  return (
    <section className="relative z-40 -mt-[72px] bg-transparent px-4 pb-14 md:-mt-[92px] md:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2 md:gap-5">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <Link
              key={card.title}
              href={card.href}
              className={`group relative h-[118px] overflow-hidden rounded-[24px] border border-white/20 bg-gradient-to-br ${card.color} p-3 shadow-2xl transition duration-300 hover:-translate-y-1 md:h-[170px] md:rounded-[30px] md:p-6 ${
                card.darkText ? "text-[#071726]" : "text-white"
              }`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_34%)]" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <ArrowLeft
                    className={`h-4 w-4 transition group-hover:-translate-x-1 md:h-5 md:w-5 ${
                      card.darkText ? "text-[#071726]/75" : "text-white/75"
                    }`}
                  />

                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/95 text-[#071726] md:h-11 md:w-11 md:rounded-2xl">
                    <Icon className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold leading-tight md:text-2xl">
                    {card.title}
                  </h3>

                  <p
                    className={`mt-1 line-clamp-2 text-[10px] leading-4 md:mt-2 md:text-sm md:leading-6 ${
                      card.darkText ? "text-[#071726]/70" : "text-white/75"
                    }`}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}