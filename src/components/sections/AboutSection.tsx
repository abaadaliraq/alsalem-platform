"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import type { Locale } from "../../lib/data/cases";

export default function AboutSection({ locale }: { locale: Locale }) {
  return (
    <section className="relative overflow-hidden bg-[#EEF6E9] px-4 py-12 md:px-10 md:py-16">
      <div className="absolute inset-0 opacity-[0.035]">
        <img src="/about-main.jpg" alt="" className="h-full w-full object-cover" />
      </div>

      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#FFD32A]/35 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#7CB342]/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-center">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
         <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-[#6FA14F]">
  {locale === "en"
    ? "ABOUT US"
    : locale === "ku"
    ? "دەربارەی ئێمە"
    : "من نحن"}
</p>

<h2 className="max-w-xl text-[34px] font-extrabold leading-[1.15] tracking-[-0.04em] text-[#071726] md:text-[58px]">
  {locale === "en"
    ? "Welcome to Al Saleem Charity."
    : locale === "ku"
    ? "بەخێربێن بۆ ڕێکخراوی خێرخوازی السەلیم."
    : "مرحباً بكم في منظمة السالم الخيرية."}
</h2>

<p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#071726]/65 md:text-[17px] md:leading-9">
  {locale === "en"
    ? "We are building a transparent humanitarian platform that connects donors with verified urgent cases in a clear and professional way."
    : locale === "ku"
    ? "ئێمە پلاتفۆرمێکی مرۆیی دروست دەکەین بۆ بەستنی بەخشەران بە دۆخە پێویستە پشتڕاستکراوەکان."
    : "نعمل على بناء منصة خيرية واضحة تربط المتبرعين بالحالات الإنسانية الموثقة بطريقة تحفظ كرامة المستفيد وتمنح المتبرع الثقة بأن دعمه يصل بالشكل الصحيح."}
</p>

          <div className="mt-7 grid gap-3">
            <div className="flex items-center justify-between rounded-[22px] border border-black/5 bg-white/80 px-5 py-4 shadow-sm backdrop-blur">
              <div>
               <h3 className="text-[16px] font-extrabold text-[#071726]">
  {locale === "en"
    ? "Verified Cases"
    : locale === "ku"
    ? "دۆخە پشتڕاستکراوەکان"
    : "حالات موثقة"}
</h3>

<p className="mt-1 text-[13px] leading-6 text-[#071726]/50">
  {locale === "en"
    ? "Clear and updated information."
    : locale === "ku"
    ? "زانیاری ڕوون و نوێکراوە."
    : "معلومات واضحة وقابلة للتحديث."}
</p>
              </div>

              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F4C430] text-[#071726]">
                ♥
              </div>
            </div>

            <div className="flex items-center justify-between rounded-[22px] border border-black/5 bg-white/80 px-5 py-4 shadow-sm backdrop-blur">
              <div>
               <h3 className="text-[16px] font-extrabold text-[#071726]">
  {locale === "en"
    ? "Transparent Donation"
    : locale === "ku"
    ? "بەخشینی ڕوون"
    : "تبرع بشفافية"}
</h3>

<p className="mt-1 text-[13px] leading-6 text-[#071726]/50">
  {locale === "en"
    ? "Every donation is linked to clear follow-up."
    : locale === "ku"
    ? "هەر بەخشینێک بە چاودێری ڕوون بەستراوە."
    : "كل مساهمة مرتبطة بمتابعة واضحة."}
</p>
              </div>

              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#FFD32A] text-[#071726]">
                ✦
              </div>
            </div>
          </div>

          <div className="mt-7 flex items-center gap-3">
            <Link
              href="/ar/about"
              className="rounded-full bg-[#FFD32A] px-7 py-4 text-[15px] font-extrabold text-[#071726] transition hover:scale-[1.03]"
            >
            {locale === "en"
  ? "Discover More →"
  : locale === "ku"
  ? "زیاتر ببینە ←"
  : "اكتشف المزيد ←"}
            </Link>

            <p className="hidden text-[14px] font-semibold text-[#071726]/55 md:block">
            {locale === "en"
  ? "Every contribution can change a life."
  : locale === "ku"
  ? "هەر هاوکارییەک دەتوانێت ژیانێک بگۆڕێت."
  : "كل مساهمة قد تغيّر حياة إنسان."}
            </p>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <div className="relative overflow-hidden rounded-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <img
              src="/about-main.jpg"
              alt=""
              className="h-[280px] w-full object-cover md:h-[500px]"
            />

            <div className="absolute bottom-4 right-4 rounded-[20px] bg-white/90 px-5 py-4 backdrop-blur-xl">
              <p className="text-[10px] font-black tracking-[0.22em] text-[#6FA14F]">
                AL SALEEM CHARITY
              </p>
              <p className="mt-1 text-[13px] font-extrabold text-[#071726]">
               {locale === "en"
  ? "Connecting donations with real impact."
  : locale === "ku"
  ? "بەخشین بە کاریگەری ڕاستەقینە دەبەستین."
  : "نربط التبرع بالأثر الحقيقي."}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}