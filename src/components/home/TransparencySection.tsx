"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  HeartHandshake,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: ReceiptText,
    title: "توثيق كل تبرع",
    desc: "كل عملية تبرع يتم تسجيلها ومراجعتها لضمان الشفافية وبناء الثقة بين المتبرع والحالة الإنسانية.",
  },
  {
    icon: HeartHandshake,
    title: "ربط التبرع بالأثر",
    desc: "لا نعرض أرقاماً فقط، بل نربط التبرعات بحالات حقيقية ومشاريع إنسانية داخل العراق.",
  },
  {
    icon: ShieldCheck,
    title: "حفظ كرامة المحتاج",
    desc: "نؤمن أن العمل الإنساني يجب أن يحفظ خصوصية الإنسان وكرامته بعيداً عن الاستغلال العاطفي.",
  },
];

const updates = [
  "تم توثيق تبرع جديد لدعم علاج حالة إنسانية.",
  "تم استلام إثبات تبرع ضمن حملة التعليم.",
  "تم إرسال شهادة تبرع باسم شخص عزيز.",
];

export default function TransparencySection() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-[#041B13] px-4 py-16 text-white md:px-10 md:py-20"
    >
      <div className="relative h-full w-full"></div>
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#00FF99]/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#C7FF32]/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
 {/* IMAGE SIDE */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
 className="relative flex h-full overflow-hidden rounded-[36px] border border-white/10 bg-[#08251B] p-4"
>
  <img
    src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=1400&auto=format&fit=crop"
    alt="charity"
   className="h-full min-h-[360px] w-full rounded-[28px] object-cover md:min-h-[500px]"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-[#041B13]/80 via-transparent to-transparent" />

  {/* LOGO */}
  <div className="absolute top-6 right-6">
    <img
      src="/logo-alsaleem.png"
      alt="logo"
      className="h-12 w-auto object-contain opacity-95 md:h-16"
    />
  </div>

  {/* MAIN CARD */}
  <div className="absolute bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-[24px] border border-white/10 bg-black/45 px-5 py-4 backdrop-blur-2xl">
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C7FF32] text-[#041B13]">
        <BadgeCheck className="h-6 w-6" />
      </div>

      <div>
        <p className="text-2xl font-black text-white">+12,400</p>

        <p className="text-xs leading-6 text-white/70">
          تبرع تم توثيقه داخل المنصة
        </p>
      </div>
    </div>
  </div>
</motion.div>

        {/* CONTENT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <span className="w-fit rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-black text-[#C7FF32]">
            الشفافية والأثر
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            تبرّع وأنت تعرف
            <br />
            أين يذهب دعمك
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-8 text-white/70 md:text-lg">
            نهدف إلى جعل العمل الإنساني أكثر وضوحاً وتنظيماً، من خلال توثيق
            التبرعات وربطها بالحالات الإنسانية مع متابعة مستمرة للأثر الحقيقي
            داخل المجتمع.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl md:rounded-[30px] md:p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C7FF32] text-[#041B13] md:h-14 md:w-14">
                    <Icon className="h-6 w-6 md:h-7 md:w-7" />
                  </div>

                  <h3 className="mt-4 text-base font-black leading-tight md:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-white/65 md:text-sm md:leading-8">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 rounded-[30px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl md:p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-2xl font-black">آخر التحديثات</h3>

              <span className="rounded-full bg-[#C7FF32] px-4 py-2 text-xs font-black text-[#041B13]">
                مباشر
              </span>
            </div>

            <div className="space-y-3">
              {updates.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm leading-7 text-white/70"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}