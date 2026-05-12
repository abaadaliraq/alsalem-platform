"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { Locale } from "../../lib/locales/config";
import LanguageSwitcher from "./LanguageSwitcher";

const nav = {
  ar: [
    { label: "عن المنظمة", href: "/about" },
    { label: "الحالات", href: "/cases" },
    { label: "تبرع الآن", href: "/donate" },
    { label: "تواصل معنا", href: "/contact" },
  ],
  en: [
    { label: "About", href: "/about" },
    { label: "Cases", href: "/cases" },
    { label: "Donate", href: "/donate" },
    { label: "Contact", href: "/contact" },
  ],
  ku: [
    { label: "دەربارە", href: "/about" },
    { label: "کەیسەکان", href: "/cases" },
    { label: "بەخشین", href: "/donate" },
    { label: "پەیوەندی", href: "/contact" },
  ],
};

export default function Navbar({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const isEn = locale === "en";

  return (
  <header className="absolute left-0 top-0 z-50 w-full bg-gradient-to-b from-black/45 via-black/15 to-transparent">
    <div className="relative mx-auto flex h-20 max-w-7xl items-center px-5">
        {/* LOGO */}
        <Link
          href={`/${locale}`}
          aria-label="Al Saleem Charity"
          className={[
            "absolute top-1/2 -translate-y-1/2",
            isEn ? "left-5" : "right-5",
          ].join(" ")}
        >
          <img
            src="/logo.png"
            alt="Al Saleem Charity"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* CENTER NAV */}
        <nav className="mx-auto hidden items-center gap-8 text-sm font-semibold text-white drop-shadow md:flex">
          {nav[locale].map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="transition hover:text-[#FFD42A]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ACTIONS */}
        <div
          className={[
            "absolute top-1/2 flex -translate-y-1/2 items-center gap-3",
            isEn ? "right-5" : "left-5",
          ].join(" ")}
        >
          <LanguageSwitcher locale={locale} />

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#071726]/25 text-white backdrop-blur-md md:hidden"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className={[
            "relative z-50 mx-5 -mt-1 rounded-3xl border border-white/10 bg-[#071726]/90 p-4 shadow-2xl backdrop-blur-xl md:hidden",
            locale === "en" ? "text-left" : "text-right",
          ].join(" ")}
        >
          <div className="flex flex-col gap-3 text-sm font-semibold text-white">
            {nav[locale].map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-white/10 px-4 py-3 transition hover:bg-white/15"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}