"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Props = {
  locale: string;
};

export default function CookieBanner({ locale }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("alsaleem-cookies");
    if (!saved) setVisible(true);
  }, []);

  function handleAccept() {
    localStorage.setItem("alsaleem-cookies", "accepted");
    setVisible(false);
  }

  function handleReject() {
    localStorage.setItem("alsaleem-cookies", "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] border-t border-white/10 bg-[#101915]/98 text-white shadow-[0_-20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="max-w-3xl">
          <p className="text-[10px] font-light tracking-[0.28em] text-white/35">
            COOKIES
          </p>

          <p className="mt-2 text-[12px] font-light leading-6 text-white/62 md:text-[13px]">
            We use cookies to improve website performance, remember basic
            preferences, and enhance your browsing experience.
            <Link
              href={`/${locale}/cookies`}
              className="mx-1 text-white/90 underline underline-offset-4 transition hover:text-[#f8c542]"
            >
              Read Cookies Policy
            </Link>
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={handleReject}
            className="h-9 rounded-full border border-white/12 px-5 text-[11px] font-light text-white/65 transition hover:bg-white/8 hover:text-white"
          >
            Reject
          </button>

          <button
            type="button"
            onClick={handleAccept}
            className="h-9 rounded-full bg-[#f8c542] px-5 text-[11px] font-normal text-[#101915] transition hover:bg-white"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}