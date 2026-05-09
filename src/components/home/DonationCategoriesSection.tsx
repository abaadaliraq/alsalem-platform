"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  HeartPulse,
  Shirt,
  Sofa,
  HandCoins,
  Wheat,
  CalendarHeart,
  Baby,
  UsersRound,
  Home,
  Stethoscope,
  Droplets,
  ArrowLeft,
} from "lucide-react";

const categories = [
  {
    title: "التعليم",
    desc: "حقائب، قرطاسية، منح، ودعم طلابي.",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    href: "/categories/education",
  },
  {
    title: "الصحة",
    desc: "عمليات، علاج، أدوية، وحالات عاجلة.",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    href: "/categories/health",
  },
  {
    title: "الكسوة",
    desc: "كسوة شتاء، كسوة عيد، وملابس أطفال.",
    icon: Shirt,
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop",
    href: "/clothes",
  },
  {
    title: "الأثاث",
    desc: "تجهيز بيوت العوائل المحتاجة.",
    icon: Sofa,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
    href: "/categories/furniture",
  },
  {
    title: "تبرع مالي",
    desc: "دعم مباشر للحالات الأشد احتياجاً.",
    icon: HandCoins,
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1200&auto=format&fit=crop",
    href: "/categories/money",
  },
  {
    title: "الغذاء",
    desc: "سلال غذائية ودعم معيشي.",
    icon: Wheat,
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop",
    href: "/categories/food",
  },
  {
    title: "تبرع موسمي",
    desc: "رمضان، الشتاء، المدارس، وكسوة العيد.",
    icon: CalendarHeart,
    image:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop",
    href: "/categories/seasonal",
  },
  {
    title: "ترميم المنازل",
    desc: "إصلاح بيوت متهالكة وسكن آمن.",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    href: "/categories/housing",
  },
  {
    title: "الأجهزة الطبية",
    desc: "كراسي متحركة، أجهزة تنفس، وسماعات.",
    icon: Stethoscope,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    href: "/categories/medical-devices",
  },
  {
    title: "الماء",
    desc: "برادات، خزانات، ومشاريع ماء بسيطة.",
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1200&auto=format&fit=crop",
    href: "/categories/water",
  },
  {
    title: "دار الأيتام",
    desc: "قريباً",
    icon: Baby,
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
    href: "#",
    soon: true,
  },
  {
    title: "دار العجزة",
    desc: "قريباً",
    icon: UsersRound,
    image:
      "https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?q=80&w=1200&auto=format&fit=crop",
    href: "#",
    soon: true,
  },
];
export default function DonationCategoriesSection() {
  return (
    <section
      id="donation-categories"
      
      dir="rtl"
      className="relative overflow-hidden bg-[#ecf8f1] px-4 py-14 text-[#073d2a] md:px-10 md:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(16,185,129,0.24),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(34,197,94,0.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold text-emerald-700 shadow-sm md:text-sm">
              أقسام التبرع
            </span>

            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              اختر نوع التبرع
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#4d6b5d] md:text-lg">
              كل قسم ينقلك إلى الحالات المرتبطة به، حتى يصل الدعم للمكان الصحيح.
            </p>
          </div>

          <a
            href="#urgent-cases"
            className="hidden rounded-full bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-emerald-900/15 transition hover:bg-emerald-800 md:inline-flex"
          >
            مشاهدة كل الحالات
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.soon ? undefined : item.href}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                className={[
                  "group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-emerald-100 transition duration-300",
                  "h-[220px] md:h-[300px]",
                  item.soon
                    ? "cursor-not-allowed opacity-80"
                    : "hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-900/15",
                ].join(" ")}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#053b29]/95 via-[#053b29]/45 to-transparent" />

                <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/90 text-emerald-700 shadow-sm md:right-4 md:top-4 md:h-12 md:w-12">
                  <Icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>

                {item.soon && (
                  <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-black text-emerald-700 md:left-4 md:top-4">
                    قريباً
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 p-4 text-white md:p-5">
                  <h3 className="text-lg font-black md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-xs leading-6 text-white/80 md:text-sm">
                    {item.desc}
                  </p>

                  {!item.soon && (
                    <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-emerald-100 md:text-sm">
                      استعراض الحالات
                      <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
                    </div>
                  )}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}