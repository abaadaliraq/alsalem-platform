"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cases = [
  {
    id: 1,
    title: "طفل يحتاج عملية قلب عاجلة",
    location: "بغداد",
    raised: "4,200$",
    target: "10,000$",
    progress: 42,
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "عائلة نازحة تحتاج دعم معيشي",
    location: "الموصل",
    raised: "2,900$",
    target: "6,000$",
    progress: 58,
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "توفير علاج لمريضة سرطان",
    location: "البصرة",
    raised: "7,100$",
    target: "12,000$",
    progress: 74,
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function UrgentCasesSection() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-[#07110C] px-5 py-20 md:px-10 md:py-28"
    >
      {/* BG GLOW */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#1F7A4D]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-right"
        >
          <span className="text-xs font-black tracking-[2px] text-[#8FE3B0]">
            الحالات العاجلة
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl">
            حالات تحتاج دعماً فورياً
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-8 text-white/60 md:text-lg">
            تبرعاتك قد تكون السبب في إنقاذ حياة، توفير علاج، أو مساعدة عائلة
            تواجه ظروفاً صعبة.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              {/* IMAGE */}
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-5 right-5">
                  <span className="rounded-full bg-[#1F7A4D] px-4 py-2 text-xs font-bold text-white">
                    {item.location}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 text-right">
                <h3 className="text-xl font-black leading-9 text-white">
                  {item.title}
                </h3>

                {/* MONEY */}
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="font-bold text-white">
                    {item.raised}
                  </span>

                  <span className="text-white/45">
                    من أصل {item.target}
                  </span>
                </div>

                {/* PROGRESS */}
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[#1F7A4D]"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>

                <div className="mt-2 text-left text-xs font-bold text-[#8FE3B0]">
                  {item.progress}%
                </div>

                {/* BUTTON */}
               <a
  href="/categories/health#donation-form"
  className="mt-6 block w-full rounded-full bg-[#1F7A4D] py-4 text-center text-sm font-black text-white transition hover:bg-[#14532D]"
>
  تبرع للحالة
</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}