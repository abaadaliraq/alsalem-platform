import DonationForm from "../../../../components/donate/DonationForm";
import type { Locale } from "../../../../lib/locales/config";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{ locale: Locale }>;

  searchParams: Promise<{
    case?: string;
    category?: string;
  }>;
};

export default async function DonatePage({
  params,
  searchParams,
}: Props) {
  const { locale } = await params;
  const query = await searchParams;

  const isAr = locale === "ar";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#061A2B] px-4 py-20 text-white md:px-10 md:py-28">
      {/* BACKGROUND */}
      <img
        src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2200&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[#061A2B]/88" />

      <div className="absolute inset-0 bg-gradient-to-br from-[#061A2B] via-[#07395F]/80 to-[#071726]/95" />

      {/* GLOW */}
      <div className="absolute left-[-120px] top-[120px] h-[320px] w-[320px] rounded-full bg-[#5B2BD8]/20 blur-[120px]" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-[#2563EB]/20 blur-[120px]" />

      {/* CONTENT */}
      <section className="relative z-10 mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_0.9fr] md:items-start">
        {/* LEFT SIDE */}
        <div className="pt-8">
          <Link
            href={`/${locale}`}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-black text-white backdrop-blur transition hover:bg-white hover:text-[#071726]"
          >
            <ArrowLeft className="h-4 w-4" />

            {isAr ? "العودة للرئيسية" : "Back Home"}
          </Link>

          <p className="mb-4 text-[11px] font-black tracking-[0.35em] text-[#F4C430]">
            DONATION FORM
          </p>

          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            {locale === "en"
              ? "Complete your donation"
              : locale === "ku"
              ? "بەخشینەکەت تەواو بکە"
              : "أكمل تبرعك بسهولة"}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
            {locale === "en"
              ? "Choose the type of contribution and leave your details so the team can verify and follow up."
              : locale === "ku"
              ? "جۆری بەخشینەکەت هەڵبژێرە و زانیارییەکانت بنووسە بۆ بەدواداچوون."
              : "اختر نوع المساهمة واترك معلوماتك حتى يتمكن فريق المنظمة من التحقق والمتابعة معك."}
          </p>

          {/* INFO CARDS */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm font-black text-[#F4C430]">
                {isAr ? "تحويل آمن" : "Secure Transfer"}
              </p>

              <p className="mt-3 text-sm leading-7 text-white/70">
                {isAr
                  ? "جميع التبرعات يتم مراجعتها وتوثيقها قبل اعتمادها داخل المنصة."
                  : "All donations are reviewed and verified before approval."}
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm font-black text-[#F4C430]">
                {isAr ? "متابعة مباشرة" : "Direct Follow Up"}
              </p>

              <p className="mt-3 text-sm leading-7 text-white/70">
                {isAr
                  ? "فريق المنظمة يتواصل مع المتبرعين عند الحاجة لاستكمال المعلومات."
                  : "The organization team may contact donors for verification."}
              </p>
            </div>
          </div>
        </div>

        {/* FORM */}
       <DonationForm locale={locale} />
      </section>
    </main>
  );
}