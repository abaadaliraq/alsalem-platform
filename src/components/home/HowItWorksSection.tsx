"use client";

import { motion } from "framer-motion";
import { FileCheck2, HandHeart, ReceiptText } from "lucide-react";

const steps = [
  {
    icon: FileCheck2,
    number: "01",
    title: "توثيق الحالة",
    text: "يتم مراجعة الحالة والمعلومات الأساسية قبل نشرها على المنصة.",
  },
  {
    icon: HandHeart,
    number: "02",
    title: "فتح باب التبرع",
    text: "تظهر الحالة مع المبلغ المطلوب ونسبة التقدم بشكل واضح.",
  },
  {
    icon: ReceiptText,
    number: "03",
    title: "تحديثات وشفافية",
    text: "بعد وصول الدعم يتم نشر التحديثات لإظهار أثر التبرع.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      dir="rtl"
      className="bg-[#F8FAF7] px-5 py-20 text-[#0B1F16] md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-right"
        >
          <span className="text-xs font-black tracking-[2px] text-[#1F7A4D]">
            آلية العمل
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            كيف تصل المساعدة؟
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-8 text-black/55 md:text-lg">
            ثلاث خطوات واضحة تجعل المتبرع يعرف أين تذهب مساهمته، وكيف تتحول إلى
            أثر حقيقي.
          </p>
        </motion.div>

        <div className="
  -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2
  scrollbar-hide
  md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0
">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className="
  relative min-w-[82%] snap-center overflow-hidden
  rounded-[28px] border border-black/5 bg-white
  p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)]
  md:min-w-0 md:rounded-[32px] md:p-8
"
              >
                <span className="
  absolute left-5 top-4 text-5xl font-black
  text-[#1F7A4D]/10 md:left-6 md:top-5 md:text-6xl
">
                  {step.number}
                </span>

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1F7A4D]/10 text-[#1F7A4D]">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-black md:text-2xl">
                    {step.title}</h3>

                <p className="mt-3 text-[13px] leading-7 text-black/55 md:mt-4 md:text-sm md:leading-8">
                  {step.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}