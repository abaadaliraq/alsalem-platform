"use client";

import { motion } from "framer-motion";


const goals = [
  {
    number: "01",
    title: "إيصال الدعم بذكاء",
    desc: "نوجّه التبرعات إلى الحالات والمناطق الأكثر احتياجاً داخل العراق، حتى لا يكون الدعم عشوائياً، بل مبنياً على الأولوية والاحتياج الحقيقي.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "حفظ كرامة المحتاج",
    desc: "نؤمن أن العمل الإنساني لا يكتمل إلا باحترام كرامة الإنسان، لذلك نسعى لعرض الحالات بطريقة راقية تحفظ الخصوصية وتبتعد عن الاستغلال العاطفي.",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "توثيق أثر كل تبرع",
    desc: "هدفنا أن يعرف المتبرع أين ذهب دعمه، وكيف ساهم في تغيير حياة شخص أو عائلة، من خلال متابعة واضحة وتوثيق منظم للحالات والمساهمات.",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "بناء مجتمع متكافل",
    desc: "نسعى إلى تحويل التبرع من فعل فردي مؤقت إلى ثقافة مجتمعية مستمرة، يشارك فيها الأفراد والعائلات والشباب لصناعة أثر إنساني أوسع.",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-[#f5fbf7] px-4 py-16 text-[#071f14] md:px-10 md:py-24"
    >
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#0f5132_1px,transparent_1px),linear-gradient(to_bottom,#0f5132_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="rounded-full border border-emerald-200 bg-white px-5 py-2 text-xs font-black text-emerald-700">
            أهداف المنصة
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            نعمل لتحويل التبرع إلى أثر واضح ومستدام
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-black/55 md:text-lg">
            منصة السالم الإنسانية ليست مجرد مكان للتبرع، بل تجربة رقمية تنظّم
            الدعم، تحفظ كرامة المحتاج، وتربط المتبرع بالأثر الحقيقي.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {goals.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
className="group overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0D3B2A] to-[#071F14] shadow-[0_20px_80px_rgba(0,0,0,0.18)] ring-1 ring-white/10"            >
              <div className="relative h-[210px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-5 right-5 left-5 flex items-end justify-between gap-4">
                  <h3 className="text-2xl font-black leading-tight text-white">
                    {item.title}
                  </h3>

                 
            
                </div>
              </div>

              <div className="flex min-h-[230px] flex-col justify-between p-6">
                <div>
                 <p className="text-6xl font-black tracking-tight text-white">
                    {item.number}
                  </p>

                  <p className="mt-5 text-sm leading-8 text-white/70">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 h-1 w-16 rounded-full bg-[#C8FF3D]" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}