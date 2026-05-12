import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import DonationForm from "../../../../forms/DonationForm";
import type { Locale } from "../../../../lib/locales/config";

type Props = {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{
    case?: string;
    category?: string;
    title?: string;
  }>;
};

const text = {
  ar: {
    label: "آلية التبرع",
    title: "تبرع بخطوات واضحة وبسيطة",
    desc: "اختر الحالة، اضغط على تبرع، أدخل معلوماتك، ثم حوّل المبلغ أو اترك تفاصيل التبرع إذا كان خدمة أو أغراض ليتم التواصل معك.",
    back: "العودة للرئيسية",
    note: "جميع البيانات تُستخدم لغرض المتابعة والتحقق فقط.",
    steps: [
      "اختيار الحالة أو مجال التبرع المناسب.",
      "الضغط على زر التبرع من صفحة الحالة أو القسم.",
      "إدخال معلومات المتبرع وطريقة المساهمة.",
      "تحويل المبلغ أو كتابة تفاصيل الخدمة أو الأغراض.",
      "يتواصل فريق المنظمة للتأكيد والمتابعة.",
    ],
  },
  en: {
    label: "Donation Process",
    title: "Donate through clear and simple steps",
    desc: "Choose a case, click donate, enter your information, then transfer the amount or leave details if your donation is a service or items.",
    back: "Back Home",
    note: "All data is used only for follow-up and verification.",
    steps: [
      "Choose a case or donation category.",
      "Click donate from the case or category page.",
      "Enter your details and contribution type.",
      "Transfer the amount or describe your service/items.",
      "The organization team follows up for confirmation.",
    ],
  },
  ku: {
    label: "شێوازی بەخشین",
    title: "بەخشین بە هەنگاوی ڕوون و ئاسان",
    desc: "حاڵەتەکە هەڵبژێرە، بەخشین بکە، زانیارییەکانت بنووسە، پاشان بڕە پارەکە بنێرە یان وردەکاری خزمەتگوزاری/کەرەستە بنووسە.",
    back: "گەڕانەوە",
    note: "هەموو زانیارییەکان تەنها بۆ پەیگیری و دڵنیابوون بەکاردێن.",
    steps: [
      "هەڵبژاردنی حاڵەت یان بەشی بەخشین.",
      "کرتەکردن لەسەر دوگمەی بەخشین.",
      "نووسینی زانیارییەکانی بەخشەر.",
      "ناردنی بڕی پارە یان وردەکاری خزمەتگوزاری/کەرەستە.",
      "تیمی ڕێکخراو پەیوەندی دەکات بۆ دڵنیابوون.",
    ],
  },
};

export default async function DonatePage({ params, searchParams }: Props) {
  const { locale } = await params;
  const query = await searchParams;

  const t = text[locale] ?? text.ar;
  const isRtl = locale === "ar" || locale === "ku";

  return (
    <main dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-white text-[#211803]">
      <section className="relative overflow-hidden bg-[#fff9e8] px-5 pb-14 pt-32 md:px-10 md:pb-20 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(248,197,66,0.34),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(248,197,66,0.16),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Link
              href={`/${locale}`}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#efd98d] bg-white px-5 py-3 text-[13px] font-normal text-[#6f5208] shadow-sm transition hover:bg-[#fff3c9]"
            >
              <ArrowLeft size={15} strokeWidth={1.6} />
              {t.back}
            </Link>

            <p className="mb-4 text-[12px] font-normal tracking-[0.28em] text-[#c49102]">
              {t.label}
            </p>

            <h1 className="max-w-2xl text-[34px] font-normal leading-[1.35] tracking-[-0.02em] text-[#211803] md:text-[52px]">
              {t.title}
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] font-normal leading-8 text-[#6f654b] md:text-[16px]">
              {t.desc}
            </p>

            <div className="mt-9 grid gap-3">
              {t.steps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-3 border-b border-[#f1df9f] pb-3 text-[14px] font-normal leading-7 text-[#5f563f]"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f8c542] text-[12px] text-[#211803]">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 text-[13px] font-normal text-[#8a6a0c]">
              <CheckCircle2 size={17} strokeWidth={1.7} />
              <span>{t.note}</span>
            </div>
          </div>

          <DonationForm
            locale={locale}
            caseSlug={query.case}
            categorySlug={query.category}
          />
        </div>
      </section>
    </main>
  );
}