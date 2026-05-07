"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, ReceiptText, TrendingUp, ArrowLeft } from "lucide-react";
import { useState } from "react";

const metrics = [
  {
    value: 92,
    suffix: "%",
    title: "92%",
    label: "من التبرعات تصل مباشرة للحالات الإنسانية",
    icon: ShieldCheck,
  },
  {
    value: 48,
    suffix: "",
    title: "48 حالة",
    label: "اكتمل دعمها بالكامل عبر مساهمات المتبرعين",
    icon: ReceiptText,
  },
  {
    value: 7,
    suffix: "",
    title: "7 تحديثات",
    label: "موثقة ومنشورة خلال هذا الشهر",
    icon: TrendingUp,
  },
];

const updates = [
  "تبرعك ساهم في تسديد جزء من علاج حالة طبية في بغداد.",
  "تم إيصال دعم غذائي لعائلة متعففة بفضل مساهمات المتبرعين.",
  "اكتملت حالة تعليمية وتم إغلاقها بعد وصول المبلغ المطلوب.",
];
function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        let frame = 0;
        const totalFrames = 70;

        const timer = setInterval(() => {
          frame++;
          const progress = frame / totalFrames;
          const eased = 1 - Math.pow(1 - progress, 3);

          setCount(Math.floor(value * eased));

          if (frame >= totalFrames) {
            clearInterval(timer);
            setCount(value);
          }
        }, 18);
      }}
    >
      {count}
      {suffix}
    </motion.span>
  );
}

export default function TransparencySection() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-[#06140E] px-5 py-20 text-white md:px-10 md:py-28"
    >
      <div className="absolute left-[-120px] top-[-120px] h-[520px] w-[520px] rounded-full bg-[#1F7A4D]/20 blur-[150px]" />
      <div className="absolute bottom-[-160px] right-[-140px] h-[520px] w-[520px] rounded-full bg-[#8FE3B0]/10 blur-[160px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative order-2 md:order-1"
        >
          <div className="relative h-[420px] overflow-hidden rounded-[36px] border border-white/10 bg-white/5 md:h-[620px]">
            <Image
src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=1400&auto=format&fit=crop"
              alt="Donation impact"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#06140E] via-[#06140E]/25 to-transparent" />

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="absolute bottom-6 right-6 left-6 rounded-[28px] border border-white/10 bg-black/35 p-5 backdrop-blur-xl"
            >
              <p className="text-lg font-black leading-8">
                مساهمتك ليست رقماً فقط.
              </p>
              <p className="mt-2 text-sm leading-7 text-white/65">
                هي علاج، وجبة، فرصة دراسة، أو بداية جديدة لشخص يحتاج من يقف معه.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="order-1 text-right md:order-2"
        >
          <span className="text-xs font-black tracking-[2px] text-[#8FE3B0]">
            ثقتك أولاً
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            تبرّع وأنت تعرف
            <br />
            أثر مساهمتك بوضوح
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-8 text-white/65 md:text-lg">
            قبل أن تتبرع، سترى تفاصيل الحالة والمبلغ المطلوب ونسبة التقدم. وبعد
            التبرع، تظهر التحديثات حتى تعرف كيف تحولت مساهمتك إلى أثر حقيقي.
          </p>

          {/* METRICS */}
          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {metrics.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.12 }}
                  className="rounded-[28px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.09]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F7A4D]/20 text-[#8FE3B0]">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-3xl font-black md:text-4xl">
  <AnimatedCounter
    value={item.value}
    suffix={item.suffix}
  />
</h3>

                <div className="mt-3">
  <p className="text-sm font-bold text-white">
    {item.title}
  </p>

  <p className="mt-1 text-xs leading-6 text-white/60">
    {item.label}
  </p>
</div>
                </motion.div>
              );
            })}
          </div>

          {/* UPDATES */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 rounded-[30px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-black">آخر أثر للتبرعات</h3>

              <button className="flex items-center gap-2 text-xs font-bold text-[#8FE3B0]">
                عرض الكل
                <ArrowLeft size={15} />
              </button>
            </div>

            <div className="mt-5 space-y-3">
              {updates.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-white/70"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <button className="mt-8 rounded-full bg-[#1F7A4D] px-8 py-4 text-sm font-black text-white transition hover:scale-105 hover:bg-[#14532D]">
            ساهم الآن
          </button>
        </motion.div>
      </div>
    </section>
  );
}