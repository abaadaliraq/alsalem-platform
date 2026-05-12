"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BarChart3, MapPinned, UsersRound } from "lucide-react";
import type { Locale } from "../../lib/locales/config";

type Props = {
  locale: Locale;
};

const content = {
  ar: {
    label: "الإحصائيات",
    title: "أرقام توضّح حجم الحاجة",
    desc: "مؤشرات تساعدنا على توجيه الدعم إلى العوائل والمناطق الأكثر احتياجاً.",
    items: [
      {
        value: 17.5,
        suffix: "%",
        title: "نسبة الفقر في العراق",
        desc: "مؤشر يوضح حجم الحاجة للدعم الإنساني المنظم.",
        icon: BarChart3,
      },
      {
        value: 3,
        suffix: "",
        title: "محافظات من الأعلى فقراً",
        desc: "المثنى، بابل، والبصرة ضمن المناطق الأكثر احتياجاً.",
        icon: MapPinned,
      },
      {
        value: 1250,
        suffix: "+",
        title: "عوائل متعففة مستهدفة",
        desc: "رقم قابل للتحديث حسب الحالات المسجلة لدى المنظمة.",
        icon: UsersRound,
      },
    ],
  },
  en: {
    label: "Statistics",
    title: "Numbers that show the scale of need",
    desc: "Indicators that help us direct support to the most vulnerable families and areas.",
    items: [
      {
        value: 17.5,
        suffix: "%",
        title: "Poverty rate in Iraq",
        desc: "An indicator showing the need for organized humanitarian support.",
        icon: BarChart3,
      },
      {
        value: 3,
        suffix: "",
        title: "High-need governorates",
        desc: "Muthanna, Babil, and Basra are among the areas of higher need.",
        icon: MapPinned,
      },
      {
        value: 1250,
        suffix: "+",
        title: "Targeted families",
        desc: "A flexible number based on registered cases.",
        icon: UsersRound,
      },
    ],
  },
  ku: {
    label: "ئامارەکان",
    title: "ژمارەکان قەبارەی پێویستی پیشان دەدەن",
    desc: "ئەم ئامارانە یارمەتیمان دەدەن پشتیوانی بگەیەنینە شوێنی دروست.",
    items: [
      {
        value: 17.5,
        suffix: "%",
        title: "ڕێژەی هەژاری لە عێراق",
        desc: "نیشانەیەک بۆ قەبارەی پێویستی.",
        icon: BarChart3,
      },
      {
        value: 3,
        suffix: "",
        title: "پارێزگاکانی زۆر پێویست",
        desc: "موسەنا، بابل، و بەسرە لە ناوچە پێویستەکانن.",
        icon: MapPinned,
      },
      {
        value: 1250,
        suffix: "+",
        title: "خێزانی ئامانجکراو",
        desc: "ژمارەیەکی ناوخۆییە و دەتوانرێت نوێ بکرێتەوە.",
        icon: UsersRound,
      },
    ],
  },
};

function CountUp({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 55, damping: 18 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsub = spring.on("change", (latest) => setDisplay(latest));
    return () => unsub();
  }, [spring]);

  return (
    <span ref={ref}>
      {display.toLocaleString(undefined, {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

export default function StatisticsSection({ locale }: Props) {
  const t = content[locale] ?? content.ar;
  const isRtl = locale === "ar" || locale === "ku";

  return (
    <section
      dir={isRtl ? "rtl" : "ltr"}
      className="relative overflow-hidden px-5 py-20 text-white sm:px-8 md:py-28 lg:px-10"
    >
      <img
        src="/about-bottom.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[#120528]/75" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#25106f]/85 via-[#120528]/72 to-[#071d35]/88" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(248,197,66,0.24),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(91,67,230,0.38),transparent_35%)]" />

      <motion.div
        className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-[#f8c542]/20 blur-3xl"
        animate={{ y: [0, 28, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#5b43e6]/35 blur-3xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[12px] font-normal tracking-[0.32em] text-[#f8c542]">
            {t.label}
          </p>

          <h2 className="mt-4 text-[30px] font-normal leading-[1.35] text-white md:text-[46px]">
            {t.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] font-normal leading-8 text-white/72">
            {t.desc}
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-3 gap-3 md:gap-5">
          {t.items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 34, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: index * 0.12 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden border border-white/14 bg-white/10 p-4 text-center shadow-[0_22px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f8c542]/70 to-transparent opacity-0 transition group-hover:opacity-100" />

                <motion.div
                  animate={{ rotate: [0, 4, -4, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  }}
                  className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-[#f8c542] ring-1 ring-white/15 md:h-14 md:w-14"
                >
                  <Icon size={22} strokeWidth={1.6} />
                </motion.div>

                <div className="text-[25px] font-normal tracking-[-0.03em] text-white md:text-[44px]">
                  <CountUp
                    value={item.value}
                    suffix={item.suffix}
                    decimals={item.value % 1 !== 0 ? 1 : 0}
                  />
                </div>

                <h3 className="mt-3 text-[12px] font-normal leading-6 text-white md:text-[19px]">
                  {item.title}
                </h3>

                <p className="mt-2 hidden text-[13px] font-normal leading-7 text-white/62 md:block">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}