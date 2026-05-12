"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Props = {
  locale: string;
};

export default function CookiesBanner({ locale }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("alsaleem-cookies");

    if (!saved) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("alsaleem-cookies", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("alsaleem-cookies", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  const isArabic = locale === "ar";
  const isKurdish = locale === "ku";

  return (
<div className="fixed inset-x-0 bottom-0 z-[9999]">      {/* glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.22),transparent_55%)]" />

      <div className="relative mx-auto flex w-full max-w-[1700px] flex-col gap-6 border-t border-white/10 bg-[#0B1020]/96 px-6 py-5 backdrop-blur-2xl md:flex-row md:items-center md:justify-between md:px-10">
        {/* TEXT */}
        <div className="max-w-xl">
          <h3 className="mb-2 text-lg font-bold text-white">
            {isArabic
              ? "ملفات تعريف الارتباط"
              : isKurdish
              ? "کوکیز"
              : "Cookies"}
          </h3>

          <p className="text-sm leading-7 text-white/70">
            {isArabic
              ? "نستخدم ملفات تعريف الارتباط لتحسين تجربتك داخل المنصة وتحليل الأداء وتذكر الإعدادات الخاصة بك."
              : isKurdish
              ? "ئێمە کوکیز بەکاردەهێنین بۆ باشترکردنی ئەزموونی بەکارهێنەر."
              : "We use cookies to improve your experience and analyze platform performance."}
          </p>

          <Link
            href={`/${locale}/cookies`}
            className="mt-3 inline-flex text-sm font-medium text-purple-300 transition hover:text-white"
          >
            {isArabic
              ? "قراءة سياسة الكوكيز"
              : isKurdish
              ? "خوێندنەوەی سیاسەتی کوکیز"
              : "Read Cookie Policy"}
          </Link>
        </div>

        {/* BUTTONS */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleReject}
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10"
          >
            {isArabic
              ? "رفض"
              : isKurdish
              ? "ڕەتکردنەوە"
              : "Reject"}
          </button>

          <button
            onClick={handleAccept}
            className="rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:scale-[1.02]"
          >
            {isArabic
              ? "قبول"
              : isKurdish
              ? "پەسەندکردن"
              : "Accept"}
          </button>
        </div>
      </div>
    </div>
  );
}