"use client";

import { motion } from "framer-motion";

type CategoryHeroProps = {
  category: {
    title: string;
    description: string;
    heroImage: string;
    accent: string;
  };
};

export default function CategoryHero({ category }: CategoryHeroProps) {
  return (
    <section className="relative min-h-[78svh] overflow-hidden bg-[#03150f] pt-28 md:min-h-[88vh]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-55"
        style={{ backgroundImage: `url('${category.heroImage}')` }}
      />

      <div className="absolute inset-0 bg-gradient-to-l from-[#03150f] via-[#03150f]/80 to-[#03150f]/35" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-5 py-20 text-right md:px-10 md:py-28">
        <motion.span
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-full border border-emerald-300/20 bg-white/10 px-4 py-2 text-sm font-black text-emerald-200 backdrop-blur"
        >
          {category.accent}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white md:text-7xl"
        >
          {category.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-xl md:leading-10"
        >
          {category.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <a
            href="#category-cases"
            className="rounded-full bg-[#22a66b] px-7 py-4 text-sm font-black text-white transition hover:bg-[#178755]"
          >
            استعراض الحالات
          </a>

          <a
            href="#suggest-case"
            className="rounded-full border border-white/15 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur transition hover:bg-white/20"
          >
            اقتراح حالة محتاجة
          </a>
        </motion.div>
      </div>
    </section>
  );
}