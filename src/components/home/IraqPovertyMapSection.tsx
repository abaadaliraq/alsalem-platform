"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeartHandshake, MapPin } from "lucide-react";

const provinces = [
  {
    name: "كربلاء",
    x: "44%",
    y: "53%",
  },
  {
    name: "الديوانية",
    x: "53%",
    y: "61%",
  },
  {
    name: "المثنى",
    x: "58%",
    y: "76%",
  },
  {
    name: "البصرة",
    x: "76%",
    y: "77%",
  },
];

export default function IraqPovertyMapSection() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-[#06110d] px-4 py-16 text-white md:px-10 md:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(143,227,176,0.10),transparent_35%)]" />

      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-[620px]"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="relative aspect-[1/1.12] w-full">
              <Image
                src="/map.jpg"
                alt="خريطة العراق"
                fill
                priority
                className="object-contain opacity-90 brightness-[0.75] contrast-125 saturate-0"
              />

              <div className="absolute inset-0 bg-emerald-950/20 mix-blend-multiply" />

              {provinces.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.12, duration: 0.45 }}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: item.x, top: item.y }}
                >
                  <span className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/30 animate-ping" />
                  <span className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 animate-pulse" />

                  <div className="relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-emerald-600 shadow-xl shadow-emerald-950/50">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>

                  <div className="absolute right-8 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/70 px-3 py-1 text-xs font-black text-white backdrop-blur-xl">
                    {item.name}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-black/25 p-4 text-center text-xs leading-6 text-white/55 backdrop-blur-xl">
              المؤشرات توضّح المحافظات ذات الأولوية ضمن خطة الدعم الإنساني.
            </div>
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="text-right"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold text-emerald-200 backdrop-blur-xl">
            <HeartHandshake size={16} />
            خريطة الاحتياج داخل العراق
          </span>

          <h2 className="max-w-xl text-3xl font-black leading-tight md:text-5xl">
            نوجّه الدعم إلى المحافظات الأكثر احتياجاً
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-8 text-white/60 md:text-lg">
            لا يكفي أن تصل التبرعات فقط؛ الأهم أن تصل إلى المناطق التي تحتاجها
            فعلاً. لذلك نعمل على إبراز المحافظات ذات الأولوية وربطها بالحالات
            الإنسانية داخل المنصة.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:max-w-lg">
            {provinces.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl"
              >
                <p className="text-lg font-black text-white">{item.name}</p>
                <p className="mt-1 text-xs font-bold text-emerald-200">
                  احتياج مرتفع
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}