import type React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2, HeartPulse, LayoutGrid } from "lucide-react";
import type { Locale } from "../../lib/locales/config";

const data: Record<
  Locale,
  {
    title: string;
    text: string;
    href: string;
    icon: React.ElementType;
    color: string;
  }[]
> = {
  ar: [
    {
      title: "نبذة عن المنظمة",
      text: "رسالتنا وأهدافنا.",
      href: "/about",
      icon: Building2,
      color: "bg-[#D8A72D]",
    },
    {
      title: "الحالات العاجلة",
      text: "دعم سريع وموثق.",
      href: "/cases",
      icon: HeartPulse,
      color: "bg-[#333333]",
    },
    {
      title: "تبرع حسب القسم",
      text: "تعليم، علاج، غذاء.",
      href: "/categories/education",
      icon: LayoutGrid,
      color: "bg-[#79B943]",
    },
  ],
  en: [
    {
      title: "About Us",
      text: "Mission and goals.",
      href: "/about",
      icon: Building2,
      color: "bg-[#D8A72D]",
    },
    {
      title: "Urgent Cases",
      text: "Fast verified support.",
      href: "/cases",
      icon: HeartPulse,
      color: "bg-[#333333]",
    },
    {
      title: "By Category",
      text: "Health, food, shelter.",
      href: "/categories/education",
      icon: LayoutGrid,
      color: "bg-[#79B943]",
    },
  ],
  ku: [
    {
      title: "دەربارە",
      text: "ئامانج و پەیام.",
      href: "/about",
      icon: Building2,
      color: "bg-[#D8A72D]",
    },
    {
      title: "کەیسە گرنگەکان",
      text: "پشتگیری خێرا.",
      href: "/cases",
      icon: HeartPulse,
      color: "bg-[#333333]",
    },
    {
      title: "بەپێی بەش",
      text: "تەندروستی و خواردن.",
      href: "/categories/education",
      icon: LayoutGrid,
      color: "bg-[#79B943]",
    },
  ],
};

export default function HeroCards({ locale }: { locale: Locale }) {
  const ArrowIcon = locale === "en" ? ArrowRight : ArrowLeft;

  return (
    <div className="w-full overflow-x-auto bg-black md:overflow-visible">
      <div className="grid min-w-[720px] grid-cols-3 md:min-w-0">
        {data[locale].map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={`/${locale}${item.href}`}
              className={`${item.color} group relative h-[150px] overflow-hidden p-5 text-white transition hover:brightness-110 md:h-[220px] md:p-7`}
            >
              <div className="absolute inset-0 bg-black/10" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <Icon size={26} />
                  <ArrowIcon size={18} className="transition group-hover:-translate-x-1" />
                </div>

                <div>
                  <h3 className="text-lg font-black md:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-white/90 md:text-sm md:leading-7">
                    {item.text}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}