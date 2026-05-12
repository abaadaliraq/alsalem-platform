"use client";

import { motion } from "framer-motion";
import {
  Search,
  MousePointerClick,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";
import type { Locale } from "../../lib/data/cases";

const content = {
  ar: {
    label: "HOW DONATION WORKS",
    title: "كيف يتم التبرع؟",
    text: "اختر الحالة التي تريد دعمها، ثم أرسل مساهمتك بطريقة واضحة حتى يتم التحقق منها وتوثيقها ضمن مسار منظم.",
    steps: [
      {
        title: "اختر الحالة",
        text: "من الحالات العاجلة أو من أقسام الدعم المختلفة.",
      },
      {
        title: "اضغط تبرع",
        text: "بعد قراءة التفاصيل، انتقل إلى نموذج المساهمة.",
      },
      {
        title: "املأ المعلومات",
        text: "اختر نوع التبرع: مالي، أثاث، مواد عينية، أو خدمة.",
      },
      {
        title: "التحقق والتوثيق",
        text: "يراجع الفريق التبرع ويتابع وصوله للجهة المستحقة.",
      },
    ],
  },
  en: {
    label: "HOW DONATION WORKS",
    title: "How donation works",
    text: "Choose the case you want to support, submit your contribution clearly, and the organization verifies and documents it.",
    steps: [
      { title: "Choose a case", text: "From urgent cases or support categories." },
      { title: "Click donate", text: "Read the details, then open the donation form." },
      { title: "Fill the form", text: "Choose money, furniture, goods, or a service." },
      { title: "Verify & document", text: "The team reviews and follows up until support arrives." },
    ],
  },
  ku: {
    label: "HOW DONATION WORKS",
    title: "چۆن بەخشین دەکرێت؟",
    text: "کەیس هەڵبژێرە، زانیارییەکان بنێرە، پاشان تیمی ڕێکخراوەکە پشتڕاستی دەکاتەوە.",
    steps: [
      { title: "کەیس هەڵبژێرە", text: "لە کەیسە پەلەکان یان بەشەکانی پشتگیری." },
      { title: "بەخشین داگرە", text: "دوای خوێندنەوەی وردەکارییەکان." },
      { title: "فۆڕم پڕبکەرەوە", text: "پارە، کەلوپەل، یان خزمەتگوزاری هەڵبژێرە." },
      { title: "پشتڕاستکردنەوە", text: "تیمەکە بەدواداچوون بۆ گەیشتنی پشتگیری دەکات." },
    ],
  },
};

const icons = [Search, MousePointerClick, ClipboardList, ShieldCheck];

export default function HowDonationWorksSection({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="relative overflow-hidden bg-transparent px-4 pb-14 pt-24 text-white md:px-10 md:pb-24 md:pt-32">
      <div className="absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-[#071726] to-transparent" />
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2200&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#061A2B]/82" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#061A2B] via-[#07395F]/80 to-[#0B5F86]/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-9 max-w-3xl md:mb-12">
          <p className="mb-3 text-[11px] font-black tracking-[0.28em] text-[#7DD3FC] md:text-sm">
            {t.label}
          </p>

          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            {t.title}
          </h2>

          <p className="mt-4 text-sm leading-7 text-white/70 md:text-lg md:leading-9">
            {t.text}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {t.steps.map((step, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-[24px] border border-white/10 bg-white/12 p-4 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white hover:text-[#061A2B] md:rounded-[30px] md:p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#0B5F86] md:h-12 md:w-12">
                    <Icon size={21} />
                  </div>

                  <span className="text-xl font-black text-[#7DD3FC]/60 md:text-3xl">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-black leading-tight md:text-2xl">
                  {step.title}
                </h3>

                <p className="mt-3 text-[12px] leading-6 text-white/65 group-hover:text-black/60 md:text-sm md:leading-7">
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