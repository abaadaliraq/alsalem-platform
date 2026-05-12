"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Locale = "ar" | "en" | "ku";

type Props = {
  locale: Locale;
};

const whatsappNumber = "9647770350030";

const content = {
  ar: {
    desc: "منصة إنسانية حديثة تربط التبرعات بالحالات المحتاجة بوضوح وثقة.",
    contactTitle: "تواصل معنا",
    name: "الاسم الكامل",
    contact: "رقم الهاتف أو البريد",
    message: "الرسالة",
    send: "إرسال الرسالة",
    columns: [
      {
        title: "Company",
        links: [
          ["عن المنظمة", "/about"],
          ["الحالات", "/cases"],
          ["الأقسام", "/categories"],
          ["آلية التبرع", "/donate"],
        ],
      },
      {
        title: "Support",
        links: [
          ["تواصل معنا", "/contact"],
          ["المتطوعون", "/volunteers"],
          ["الشفافية", "/transparency"],
          ["الأسئلة الشائعة", "/faq"],
        ],
      },
      
    ],
  },
  en: {
    desc: "A modern charity platform connecting donations with real humanitarian cases.",
    contactTitle: "Contact us from",
    name: "Full name",
    contact: "Email or phone",
    message: "Message",
    send: "Send message",
    columns: [
      {
        title: "Company",
        links: [
          ["About Us", "/about"],
          ["Cases", "/cases"],
          ["Categories", "/categories"],
          ["Donation Process", "/donate"],
        ],
      },
      {
        title: "Support",
        links: [
          ["Contact Us", "/contact"],
          ["Volunteers", "/volunteers"],
          ["Transparency", "/transparency"],
          ["FAQ", "/faq"],
        ],
      },
      {
        title: "Legal",
        links: [
          ["Privacy Policy", "/privacy-policy"],
          ["Terms", "/terms"],
          ["Cookies", "/cookies"],
        ],
      },
    ],
  },
  ku: {
    desc: "پلاتفۆرمێکی مرۆیی نوێ بۆ گەیاندنی یارمەتی بە ڕوونی و متمانە.",
    contactTitle: "پەیوەندی بکە",
    name: "ناوی تەواو",
    contact: "ئیمەیڵ یان ژمارە",
    message: "نامە",
    send: "ناردنی نامە",
    columns: [
      {
        title: "Company",
        links: [
          ["دەربارەی ئێمە", "/about"],
          ["حاڵەتەکان", "/cases"],
          ["بەشەکان", "/categories"],
          ["شێوازی بەخشین", "/donate"],
        ],
      },
      {
        title: "Support",
        links: [
          ["پەیوەندی", "/contact"],
          ["خۆبەخشەکان", "/volunteers"],
          ["ڕوونی", "/transparency"],
          ["پرسیارەکان", "/faq"],
        ],
      },
      {
        title: "Legal",
        links: [
          ["Privacy Policy", "/privacy-policy"],
          ["Terms", "/terms"],
          ["Cookies", "/cookies"],
        ],
      },
    ],
  },
};

export default function Footer({ locale }: Props) {
  const t = content[locale] ?? content.ar;
  const isRtl = locale === "ar" || locale === "ku";

  const [form, setForm] = useState({
    name: "",
    contact: "",
    message: "",
  });

  function sendToWhatsApp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const text = `
رسالة من موقع منظمة السالم الخيرية

الاسم: ${form.name || "-"}
التواصل: ${form.contact || "-"}
الرسالة: ${form.message || "-"}
    `.trim();

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  }

  return (
    <footer
      dir={isRtl ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#101915] text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.35fr_1fr_1fr_1.25fr] md:px-10 md:py-16">
        <div>
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Al Saleem"
              width={38}
              height={38}
              className="h-[38px] w-auto object-contain"
            />
            <div>
              <p className="text-[17px] font-normal leading-none">Al Saleem</p>
              <p className="mt-1 text-[10px] font-normal tracking-[0.18em] text-white/45">
                CHARITY
              </p>
            </div>
          </Link>

          <p className="mt-5 max-w-[260px] text-[13px] font-normal leading-7 text-white/55">
            {t.desc}
          </p>

          <div className="mt-8">
            <p className="mb-3 text-[12px] font-normal text-white/75">
              Follow us on
            </p>

            <div className="flex items-center gap-3 text-white/70">
              <Social href="https://facebook.com" label="Facebook" icon="f" />
              <Social href="https://instagram.com" label="Instagram" icon="◎" />
              <Social href="https://tiktok.com" label="TikTok" icon="♪" />
              <Social href="https://youtube.com" label="YouTube" icon="▶" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:contents">
          {t.columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-[13px] font-normal text-white">
                {col.title}
              </h4>

              <div className="space-y-3">
                {col.links.map(([label, href]) => (
                  <Link
                    key={href}
                    href={`/${locale}${href}`}
                    className="block text-[12px] font-normal text-white/43 transition hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={sendToWhatsApp} className="md:col-start-4">
          <h4 className="mb-4 text-[13px] font-normal text-white">
            {t.contactTitle}
          </h4>

          <div className="grid gap-2">
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={t.name}
              className="h-11 w-full rounded-md border border-white/5 bg-white/9 px-4 text-[12px] font-normal text-white outline-none placeholder:text-white/35 focus:border-white/20"
            />

            <input
              value={form.contact}
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
              placeholder={t.contact}
              className="h-11 w-full rounded-md border border-white/5 bg-white/9 px-4 text-[12px] font-normal text-white outline-none placeholder:text-white/35 focus:border-white/20"
            />

            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t.message}
              className="min-h-[115px] w-full resize-none rounded-md border border-white/5 bg-white/9 px-4 py-3 text-[12px] font-normal leading-6 text-white outline-none placeholder:text-white/35 focus:border-white/20"
            />

            <button
              type="submit"
              className="mt-1 h-11 rounded-md bg-white text-[12px] font-normal text-[#101915] transition hover:bg-[#f8c542]"
            >
              {t.send}
            </button>
          </div>
        </form>
      </div>

      <div className="pointer-events-none absolute -bottom-[95px] left-0 right-0 text-center text-[160px] font-black leading-none tracking-[-0.08em] text-white/[0.035] md:-bottom-[150px] md:text-[300px]">
        saleem
      </div>

     <div className="relative border-t border-white/7 px-6 py-4">
  <div className="flex flex-wrap items-center justify-center gap-4 text-[9px] font-light tracking-[0.08em] text-white/28 md:text-[10px]">
    <Link
      href={`/${locale}/privacy-policy`}
      className="transition hover:text-white/60"
    >
      Privacy Policy
    </Link>

    <span className="h-[3px] w-[3px] rounded-full bg-white/20" />

    <Link
      href={`/${locale}/terms`}
      className="transition hover:text-white/60"
    >
      Terms
    </Link>

    <span className="h-[3px] w-[3px] rounded-full bg-white/20" />

    <Link
      href={`/${locale}/cookies`}
      className="transition hover:text-white/60"
    >
      Cookies
    </Link>
  </div>

  <p className="mt-3 text-center text-[9px] font-light tracking-[0.06em] text-white/18">
    © 2026 Al Saleem Charity Organization
  </p>
</div>
    </footer>
  );
}

function Social({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/6 text-[12px] transition hover:bg-white hover:text-[#101915]"
    >
      {icon}
    </Link>
  );
}