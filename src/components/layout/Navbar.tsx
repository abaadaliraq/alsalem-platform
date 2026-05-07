"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "الرئيسية", href: "/" },
  { name: "الحالات", href: "/" },
  { name: "المبادرات", href: "/" },
  { name: "من نحن", href: "/" },
  { name: "تواصل معنا", href: "/" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        dir="rtl"
        className="absolute left-0 top-0 z-50 w-full"
      >
        <div className="mx-auto flex h-[82px] max-w-[1700px] items-center justify-between px-5 md:h-[94px] md:px-8">

          {/* LOGO */}
          <Link
            href="/"
            className="mr-1 flex items-center gap-1.5 md:gap-2"
          >
            <div className="relative h-[54px] w-[54px] shrink-0 md:h-[94px] md:w-[94px]">
              <Image
                src="/logo.png"
                alt="Al Salem Logo"
                fill
                sizes="100px"
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-[18px] font-black tracking-tight text-white md:text-[23px]">
                منصة السالم
              </span>

              <span className="mt-1 text-[8px] font-semibold tracking-[1.8px] text-white/40 md:mt-2 md:text-[10px] md:tracking-[2.2px]">
                AL SALEM PLATFORM
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-12 md:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative pb-2 text-sm font-medium text-white/75 transition hover:text-white"
              >
                {link.name}

                <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#F6C84C] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">

            {/* DESKTOP BUTTON */}
            <button className="hidden rounded-full border border-[#2A9D62] bg-[#1F7A4D]/90 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-[#14532D] md:block">
              تبرع الآن
            </button>

            {/* MOBILE BURGER */}
            <button
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-xl md:hidden"
            >
              <Menu size={19} />
            </button>
          </div>
        </div>
      </motion.header>

     {/* MOBILE MENU */}
<AnimatePresence>
  {open && (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setOpen(false)}
        className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm md:hidden"
      />

      <motion.div
        dir="rtl"
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        exit={{ x: 300 }}
        transition={{ duration: 0.35 }}
        className="fixed right-0 top-0 z-[70] flex h-screen w-[82%] flex-col bg-[#07150F] p-6 text-right shadow-2xl md:hidden"
      >
        {/* TOP */}
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="relative h-16 w-16 shrink-0">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>

            <div className="-mr-2 flex flex-col items-start leading-none">
              <span className="text-lg font-black text-white">
                منصة السالم
              </span>

              <span className="mt-1 text-[8px] tracking-[2px] text-white/35">
                AL SALEM PLATFORM
              </span>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
          >
            <X size={17} />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-7 text-right">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 pb-4 text-right text-lg font-semibold text-white/85 transition hover:text-[#8FE3B0]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button className="mt-10 rounded-2xl bg-[#1F7A4D] py-4 text-base font-bold text-white">
          تبرع الآن
        </button>
      </motion.div>
    </>
  )}
</AnimatePresence>
    </>
  );
}