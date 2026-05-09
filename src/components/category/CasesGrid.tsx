"use client";

import { motion } from "framer-motion";
import type { DonationCase } from "@/data/cases";
import { MapPin, UserRound, ArrowLeft } from "lucide-react";

type Props = {
  cases: DonationCase[];
};

export default function CasesGrid({ cases }: Props) {
  return (
    <section
      id="category-cases"
      className="bg-[#03150f] px-4 py-16 text-white md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <span className="rounded-full border border-emerald-300/20 bg-white/10 px-4 py-2 text-xs font-bold text-emerald-200">
            الحالات المتاحة
          </span>

          <h2 className="mt-5 text-3xl font-black md:text-5xl">
            اختر الحالة التي تريد دعمها
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-lg">
            كل حالة تحتوي على المحافظة، نوع الاحتياج، المبلغ المطلوب، ونسبة
            التبرع الحالية.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, index) => {
            const percent = Math.min(
              Math.round((item.collectedAmount / item.targetAmount) * 100),
              100
            );

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-white/[0.1]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-black text-emerald-200">
                    {item.needType}
                  </span>

                  {item.urgent && (
                    <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-black text-red-200">
                      عاجلة
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-black leading-tight">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.description}
                </p>

                <div className="mt-5 space-y-3 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-emerald-200" />
                    <span>
                      {item.governorate} — {item.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <UserRound className="h-4 w-4 text-emerald-200" />
                    <span>
                      {item.beneficiaryType}: {item.beneficiaryName}
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-2 flex items-center justify-between text-xs text-white/55">
                    <span>${item.collectedAmount.toLocaleString()} تم جمعه</span>
                    <span>من أصل ${item.targetAmount.toLocaleString()}</span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[#22a66b]"
                      style={{ width: `${percent}%` }}
                    />
                  </div>

                  <p className="mt-2 text-xs font-bold text-emerald-200">
                    {percent}%
                  </p>
                </div>

                <a
                  href="#donation-form"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#22a66b] px-5 py-3 text-sm font-black text-white transition hover:bg-[#178755]"
                >
                  تبرع لهذه الحالة
                  <ArrowLeft className="h-4 w-4" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}