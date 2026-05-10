"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import {
  Download,
  Share2,
  MessageCircle,
  Copy,
  Home,
  CheckCircle2,
} from "lucide-react";

const templates = [
  { id: "green", name: "الأخضر" },
  { id: "gold", name: "الذهبي" },
  { id: "dark", name: "الفاخر" },
];

export default function CertificatePage() {
  const certificateRef = useRef<HTMLDivElement>(null);
  const [template, setTemplate] = useState("green");

  const donorName = "أحمد علي";
  const giftedName = "سارة محمد";
  const donationFor = "على روح المرحوم الحاج أحمد محمد";
  const target = "التعليم";
  const date = "25 مايو 2026";
  const certificateId = "TRF-2026-0525-00123";

  async function downloadCertificate() {
    if (!certificateRef.current) return;

    const dataUrl = await toPng(certificateRef.current, {
      quality: 1,
      pixelRatio: 2,
      cacheBust: true,
      backgroundColor: "#fffaf0",
    });

    const link = document.createElement("a");
    link.download = `alsaleem-certificate-${certificateId}.png`;
    link.href = dataUrl;
    link.click();
  }

  function shareWhatsApp() {
    const text = `شهادة شكر وتقدير من منصة السالم الإنسانية 🤍

تم تقديم تبرع إنساني باسم:
${giftedName}

${donationFor}

من قبل:
${donorName}

وجهة التبرع:
${target}

رقم الشهادة:
${certificateId}`;

    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  }

  function copyLink() {
    navigator.clipboard.writeText(window.location.href);
  }

  return (
    <main dir="rtl" className="min-h-screen bg-[#eef8f2] px-4 py-8 text-[#082116] md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* TOP */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black md:text-5xl">شهادة شكر وتقدير</h1>
            <p className="mt-2 text-sm text-black/55">
              شهادة قابلة للتحميل والمشاركة بعد توثيق التبرع.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-5 py-3 text-sm font-black text-emerald-800 shadow-sm"
          >
            الرئيسية
            <Home className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* CERTIFICATE */}
          <section className="rounded-[32px] border border-emerald-100 bg-white p-4 shadow-xl shadow-emerald-950/5 md:p-6">
            <div
              ref={certificateRef}
              className={`relative mx-auto aspect-[1/1.414] w-full max-w-[760px] overflow-hidden rounded-[28px] border bg-[#fffaf0] p-10 text-center shadow-inner md:p-14 ${
                template === "dark"
                  ? "border-[#123524] bg-[#06110d] text-white"
                  : "border-[#d8bd77] text-[#082116]"
              }`}
            >
              {/* DECOR */}
              <div className="absolute right-0 top-0 h-44 w-44 rounded-bl-[120px] bg-[#0f5132]" />
              <div className="absolute right-4 top-4 h-44 w-44 rounded-bl-[120px] border-b-4 border-l-4 border-[#d8bd77]" />

              <div className="absolute bottom-0 left-0 h-52 w-52 rounded-tr-[150px] bg-[#0f5132]" />
              <div className="absolute bottom-4 left-4 h-52 w-52 rounded-tr-[150px] border-r-4 border-t-4 border-[#d8bd77]" />

              <div className="absolute inset-8 rounded-[24px] border border-[#d8bd77]/70" />

              <div className="relative z-10 flex h-full flex-col items-center justify-between">
                <div>
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#d8bd77] bg-white text-[#0f5132]">
                    <span className="text-3xl">🌿</span>
                  </div>

                  <p className="text-sm font-black">منصة السالم الإنسانية</p>
                  <p className="mt-1 text-xs opacity-60">الخير بين أيدينا</p>
                </div>

                <div className="w-full">
                  <h2 className="text-4xl font-black leading-tight text-[#0f5132] md:text-6xl">
                    شهادة شكر وتقدير
                  </h2>

                  <p className="mx-auto mt-6 max-w-xl text-sm leading-8 opacity-75 md:text-base">
                    تتقدم منصة السالم الإنسانية بخالص الشكر والتقدير إلى
                  </p>

                  <div className="mx-auto mt-6 max-w-xl rounded-[24px] border border-[#d8bd77] bg-white/70 px-6 py-5">
                    <p className="text-4xl font-black text-[#0f5132] md:text-5xl">
                      {giftedName}
                    </p>
                  </div>

                  <p className="mt-5 text-lg font-bold opacity-75">{donationFor}</p>

                  <p className="mx-auto mt-6 max-w-lg text-sm leading-8 opacity-75">
                    وذلك لتقديم تبرع إنساني كريم في سبيل خدمة المحتاجين،
                    سائلين الله أن يجعل هذا العمل في ميزان الحسنات.
                  </p>

                  <div className="mx-auto mt-8 flex max-w-sm items-center gap-4">
                    <span className="h-px flex-1 bg-[#d8bd77]" />
                    <span className="text-sm font-bold">وجهة التبرع</span>
                    <span className="h-px flex-1 bg-[#d8bd77]" />
                  </div>

                  <p className="mt-3 text-2xl font-black text-[#0f5132]">{target}</p>
                </div>

                <div className="grid w-full grid-cols-3 items-end gap-4 text-sm">
                  <div>
                    <p className="opacity-50">تاريخ التبرع</p>
                    <p className="mt-1 font-black">{date}</p>
                  </div>

                  <div>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0f5132] text-white">
                      🌿
                    </div>
                    <p className="mt-2 text-xs font-bold opacity-60">
                      {certificateId}
                    </p>
                  </div>

                  <div>
                    <p className="opacity-50">من</p>
                    <p className="mt-1 font-black">{donorName}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SIDE PANEL */}
          <aside className="space-y-5">
            <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-950/5">
              <h3 className="text-xl font-black">تفاصيل الشهادة</h3>

              <div className="mt-5 space-y-4 text-sm">
                <Info label="اسم المهدى له" value={giftedName} />
                <Info label="نوع الإهداء" value={donationFor} />
                <Info label="اسم المتبرع" value={donorName} />
                <Info label="وجهة التبرع" value={target} />
                <Info label="تاريخ التبرع" value={date} />
                <Info label="رقم الشهادة" value={certificateId} />
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-emerald-800">
                <CheckCircle2 className="h-5 w-5" />
                تم استلام إثبات التبرع بانتظار التوثيق النهائي.
              </div>
            </div>

            <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-950/5">
              <h3 className="text-xl font-black">مشاركة الشهادة</h3>

              <div className="mt-5 space-y-3">
                <button
                  onClick={shareWhatsApp}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#1F7A4D] px-5 py-4 text-sm font-black text-white"
                >
                  مشاركة عبر واتساب
                  <MessageCircle className="h-4 w-4" />
                </button>

                <button
                  onClick={copyLink}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-emerald-100 bg-white px-5 py-4 text-sm font-black text-emerald-800"
                >
                  نسخ رابط الشهادة
                  <Copy className="h-4 w-4" />
                </button>

                <button
                  onClick={downloadCertificate}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-5 py-4 text-sm font-black text-emerald-800"
                >
                  تحميل صورة PNG
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-950/5">
              <h3 className="text-xl font-black">اختيار التصميم</h3>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {templates.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTemplate(item.id)}
                    className={`rounded-2xl border p-4 text-sm font-black transition ${
                      template === item.id
                        ? "border-emerald-600 bg-emerald-50 text-emerald-800"
                        : "border-black/10 bg-white text-black/60"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-black/5 pb-3">
      <span className="text-black/45">{label}</span>
      <span className="font-black text-[#082116]">{value}</span>
    </div>
  );
}