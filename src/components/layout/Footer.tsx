"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const platformLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "الحالات", href: "/" },
  { name: "المبادرات", href: "/" },
  { name: "من نحن", href: "/" },
  { name: "تواصل معنا", href: "/" },
];

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M14 8H16V4H13C10.8 4 9 5.8 9 8V10H6V14H9V21H13V14H16L17 10H13V8C13 7.4 13.4 7 14 7Z"
        fill="currentColor"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M18.7 3H21L14.5 10.4L22 21H16.1L11.5 14.7L6.1 21H3.8L10.7 13.1L3.5 3H9.5L13.7 8.9L18.7 3ZM17.7 19.1H19L8.8 4.8H7.4L17.7 19.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer dir="rtl" className="relative overflow-hidden bg-[#07110D] text-white">
      <div className="pointer-events-none absolute bottom-[-70px] left-0 text-[120px] font-black leading-none text-white/[0.035] md:text-[300px]">
        ALSALEM
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.2fr_0.7fr_0.8fr_1fr]">
          
          {/* BRAND */}
          <div className="text-right">
            <div className="flex items-center justify-end gap-3">
              <div className="relative h-20 w-20 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Al Salem Logo"
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>

              <div className="text-right">
                <h2 className="text-2xl font-black leading-none">منصة السالم</h2>
                <p className="mt-2 text-[10px] font-semibold tracking-[3px] text-white/40">
                  AL SALEM PLATFORM
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-sm text-sm leading-8 text-white/55">
              منصة إنسانية لدعم الحالات العلاجية والمعيشية عبر تجربة رقمية شفافة وسهلة الوصول.
            </p>

            <div className="mt-7 flex items-center justify-end gap-3">
              {[InstagramIcon, FacebookIcon, XIcon].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition hover:border-[#8FE3B0] hover:bg-[#1F7A4D] hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div className="text-right">
            <h3 className="text-sm font-black text-white">المنصة</h3>

            <div className="mt-5 space-y-4">
              {platformLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-white/50 transition hover:text-[#8FE3B0]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="text-right">
            <h3 className="text-sm font-black text-white">تواصل معنا</h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-start gap-2 text-sm text-white/50 md:justify-end">
                <span>info@alsalem.org</span>
                <Mail size={16} />
              </div>

              <div className="flex items-center justify-start gap-2 text-sm text-white/50 md:justify-end">
                <span>+964 770 000 0000</span>
                <Phone size={16} />
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="text-right">
            <h3 className="text-sm font-black text-white">تواصل مباشر</h3>

            <div className="mt-5 space-y-3">
              <input
                type="text"
                name="fullName"
                placeholder="الاسم الكامل"
                className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-right text-sm text-white outline-none placeholder:text-white/25"
              />

              <input
                type="email"
                name="email"
                placeholder="البريد الإلكتروني"
                className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-right text-sm text-white outline-none placeholder:text-white/25"
              />

              <textarea
                name="message"
                placeholder="رسالتك"
                className="h-28 w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] p-4 text-right text-sm text-white outline-none placeholder:text-white/25"
              />

              <button className="h-12 w-full rounded-xl bg-white text-sm font-black text-[#07110D] transition hover:bg-[#8FE3B0]">
                إرسال الرسالة
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center md:flex-row">
          <p className="text-xs text-white/35">
            © 2026 منصة السالم الإنسانية — جميع الحقوق محفوظة
          </p>

          <div className="flex items-center gap-5 text-xs text-white/35">
            <a href="#">سياسة الخصوصية</a>
            <a href="#">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}