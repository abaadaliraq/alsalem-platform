import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import DonationForm from "@/components/category/DonationForm";
import SuggestCaseForm from "@/components/category/SuggestCaseForm";

type Props = {
  searchParams?: Promise<{
    target?: string;
  }>;
};

export default async function DonatePage({
  searchParams,
}: Props) {
  const params = await searchParams;

  const target = params?.target || "التبرع المالي";

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#eef8f2] text-[#082116]"
    >
      <Navbar />

      <section className="relative overflow-hidden px-4 pb-16 pt-32 md:px-10 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(31,122,77,0.12),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl text-right">
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-black text-emerald-800">
              مركز التبرع
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              تبرعك يصل بطريقة أوضح وأكثر توثيقاً
            </h1>

            <p className="mt-5 text-sm leading-8 text-black/60 md:text-lg">
              اختر وجهة التبرع، طريقة الدفع، ثم أرسل إثبات التحويل ليتم توثيق
              العملية من قبل فريق منصة السالم الإنسانية.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <DonationForm defaultTarget={target} />
            <SuggestCaseForm categoryTitle="عام" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}