"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const images = {
  main: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
  side: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=1200&auto=format&fit=crop",
  bottom: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1200&auto=format&fit=crop",
};

const points = [
  "مراجعة الحالات والتأكد من احتياجها قبل النشر.",
  "عرض واضح للمبلغ المطلوب ونسبة التبرع.",
  "تحديثات مستمرة بعد وصول المساعدة للحالة.",
];

export default function AboutSupportSection() {
  return (
    <section dir="rtl" className="bg-[#F8FAF7] px-5 py-20 text-[#102018] md:px-10 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          <span className="text-xs font-black tracking-[2px] text-[#1F7A4D]">
            عن منصة السالم
          </span>

          <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight text-[#0B1F16] md:text-5xl">
            نحن هنا لدعم الحالات التي تحتاج فرصة حقيقية
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-black/60 md:text-lg">
            منصة السالم الإنسانية تجمع الحالات المحتاجة في مكان واحد، وتعرضها
            بطريقة واضحة تساعد المتبرع على فهم الحالة، معرفة الاحتياج، والمساهمة
            بثقة وشفافية.
          </p>

          <div className="mt-8 space-y-4">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#1F7A4D]" />
                <p className="text-sm font-semibold leading-7 text-black/70">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <button className="rounded-full bg-[#1F7A4D] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#14532D]">
              تبرع الآن
            </button>

            <button className="rounded-full border border-black/10 bg-white px-7 py-4 text-sm font-bold text-[#102018] transition hover:border-[#1F7A4D] hover:text-[#1F7A4D]">
              تعرف علينا
            </button>
          </div>
        </motion.div>

        {/* IMAGES */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="order-1 grid grid-cols-2 gap-4 md:order-2"
        >
          <div className="space-y-4">
            <div className="relative h-[220px] overflow-hidden rounded-[28px] md:h-[310px]">
              <Image src={images.main} alt="Child smiling" fill className="object-cover" />
            </div>

            <div className="relative h-[150px] overflow-hidden rounded-[28px] md:h-[210px]">
              <Image src={images.bottom} alt="Support case" fill className="object-cover" />
            </div>
          </div>

          <div className="pt-12 md:pt-20">
            <div className="relative h-[330px] overflow-hidden rounded-[28px] md:h-[460px]">
              <Image src={images.side} alt="Humanitarian support" fill className="object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}