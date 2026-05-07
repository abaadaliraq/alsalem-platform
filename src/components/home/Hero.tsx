"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 17.5, suffix: "%", label: "نسبة الفقر" },
  { value: 8.6, suffix: "%", label: "فقر متعدد" },
  { value: 200, suffix: "K+", label: "خارج المدرسة" },
];

function AnimatedNumber({
  value,
  suffix,
  start,
}: {
  value: number;
  suffix: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frame = 0;
    const totalFrames = 70;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(value * ease);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(value);
      }
    }, 18);

    return () => clearInterval(timer);
  }, [start, value]);

  const display =
    value >= 100 ? Math.round(count).toLocaleString("en-US") : count.toFixed(1);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.35 });

  return (
    <section
      dir="rtl"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-black md:min-h-screen"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-l from-[#06140E]/95 via-[#06140E]/70 to-black/25" />

      <div className="relative z-10 ml-auto flex w-full flex-col items-end px-5 pt-24 text-right md:mr-0 md:max-w-[48%] md:pr-[140px] md:pl-0 md:pt-32">
        <motion.span
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
className="mb-4 w-full text-right text-xs font-bold text-[#8FE3B0] md:mb-6 md:text-sm"        >
          منصة السالم الإنسانية
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-[360px] text-right text-[42px] font-black leading-[1.25] text-white md:max-w-4xl md:text-7xl md:leading-tight"
        >
          لأن بعض الناس
          <br />
          يحتاجون فرصة واحدة فقط
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1 }}
          className="mt-5 max-w-[340px] text-right text-sm leading-8 text-white/75 md:mt-8 md:max-w-2xl md:text-lg md:leading-9"
        >
          منصة إنسانية تهدف إلى دعم الحالات العلاجية والمعيشية عبر تجربة رقمية
          حديثة تجمع بين الشفافية، الثقة، وسهولة التبرع.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3 }}
          className="mt-7 flex w-full items-center justify-center gap-3 md:mt-10 md:w-auto md:justify-end md:gap-5"
        >
          <button className="rounded-full bg-[#1F7A4D] px-6 py-3 text-xs font-bold text-white transition hover:scale-105 hover:bg-[#14532D] md:px-8 md:py-4 md:text-sm">
            تبرع الآن
          </button>

          <button className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-bold text-white backdrop-blur-md transition hover:bg-white/20 md:px-8 md:py-4 md:text-sm">
            استكشف الحالات
          </button>
        </motion.div>

       <motion.div
  ref={statsRef}
  initial={{ opacity: 0, y: 35 }}
  animate={statsInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8 }}
  className="mx-auto mt-10 grid w-full max-w-[360px] grid-cols-3 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.07] p-3 text-center backdrop-blur-xl md:mt-24 md:max-w-[820px] md:rounded-[32px] md:p-8"
>
  {stats.map((item, index) => (
    <div
      key={item.label}
      className={`px-2 ${
        index !== stats.length - 1 ? "border-l border-white/10" : ""
      }`}
    >
      <h3 className="text-[23px] font-black leading-none text-white md:text-4xl">
        <AnimatedNumber
          value={item.value}
          suffix={item.suffix}
          start={statsInView}
        />
      </h3>

      <p className="mt-2 text-[9px] leading-4 text-white/55 md:text-sm md:leading-6">
        {item.label}
      </p>
    </div>
  ))}
</motion.div>
      </div>
    </section>
  );
}