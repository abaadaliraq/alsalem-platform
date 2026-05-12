"use client";

import { useMemo, useState } from "react";
import { supabase } from "../lib/supabase/client";
import { donationCategories } from "../lib/data/categories";
import type { Locale } from "../lib/data/cases";

type Props = {
  locale: Locale;
  caseSlug?: string;
  categorySlug?: string;
};

const paymentNumbers = {
  zain_cash: "07700000000",
  asia_pay: "07700000000",
  mastercard: "8364868256",
};

const text = {
  ar: {
    label: "نموذج التبرع",
    title: "إكمال التبرع",
    donorName: "اسم المتبرع",
    phone: "رقم الهاتف",
    donationType: "نوع التبرع",
    money: "تبرع مالي",
    other: "خدمة أو بضاعة",
    paymentMethod: "طريقة الدفع",
    choosePayment: "اختر طريقة الدفع",
    zain: "زين كاش",
    asia: "آسيا بي",
    master: "تحويل ماستر",
    balance: "كارت رصيد",
    transferNumber: "رقم التحويل",
    amount: "المبلغ",
    proof: "إثبات التحويل",
    proofHint: "ارفع صورة من تطبيق الدفع أو صورة كارت الرصيد بعد الإرسال.",
    address: "العنوان",
    otherDetails: "تفاصيل التبرع",
    otherPlaceholder: "مثلاً: أثاث، قرطاسية، ملابس، خدمة طبية، محاماة، نقل...",
    submit: "إرسال طلب التبرع",
    sending: "جاري الإرسال...",
    success: "تم إرسال طلب التبرع بنجاح.",
    caseLabel: "التبرع مخصص لهذه الحالة",
  },
  en: {
    label: "DONATION FORM",
    title: "Complete Donation",
    donorName: "Donor name",
    phone: "Phone number",
    donationType: "Donation type",
    money: "Financial donation",
    other: "Service or goods",
    paymentMethod: "Payment method",
    choosePayment: "Choose payment method",
    zain: "Zain Cash",
    asia: "Asia Pay",
    master: "Mastercard transfer",
    balance: "Balance card",
    transferNumber: "Transfer number",
    amount: "Amount",
    proof: "Payment proof",
    proofHint: "Upload a screenshot from the payment app or a balance card image.",
    address: "Address",
    otherDetails: "Donation details",
    otherPlaceholder: "Example: furniture, stationery, clothes, medical service, legal service, transport...",
    submit: "Submit donation",
    sending: "Sending...",
    success: "Donation request submitted successfully.",
    caseLabel: "Donation for this case",
  },
  ku: {
    label: "فۆرمی بەخشین",
    title: "تەواوکردنی بەخشین",
    donorName: "ناوی بەخشەر",
    phone: "ژمارەی مۆبایل",
    donationType: "جۆری بەخشین",
    money: "بەخشینی دارایی",
    other: "خزمەتگوزاری یان کەلوپەل",
    paymentMethod: "شێوازی پارەدان",
    choosePayment: "شێوازی پارەدان هەڵبژێرە",
    zain: "زەین کاش",
    asia: "ئاسیا پەی",
    master: "گواستنەوەی ماستەر",
    balance: "کارتی باڵانس",
    transferNumber: "ژمارەی گواستنەوە",
    amount: "بڕی پارە",
    proof: "بەڵگەی پارەدان",
    proofHint: "وێنەی پارەدان یان وێنەی کارتی باڵانس بار بکە.",
    address: "ناونیشان",
    otherDetails: "وردەکاری بەخشین",
    otherPlaceholder: "نموونە: کەلوپەل، نووسینگە، جلوبەرگ، خزمەتی پزیشکی، یاسایی، گواستنەوە...",
    submit: "ناردنی بەخشین",
    sending: "دەنێردرێت...",
    success: "داواکاری بەخشین بە سەرکەوتوویی نێردرا.",
    caseLabel: "بەخشین بۆ ئەم دۆخەیە",
  },
};

export default function DonationForm({ locale, caseSlug, categorySlug }: Props) {
  const t = text[locale] ?? text.ar;

  const [loading, setLoading] = useState(false);
  const [donationKind, setDonationKind] = useState<"money" | "other">("money");
  const [paymentMethod, setPaymentMethod] = useState("");

  const selectedCase = useMemo(() => {
    for (const category of donationCategories) {
      const found = category.cases.find((c) => c.id === caseSlug);
      if (found) {
        return {
          ...found,
          categoryTitle: category.title[locale],
          categorySlug: category.slug,
        };
      }
    }
    return null;
  }, [caseSlug, locale]);

  async function uploadProof(file: File | null) {
    if (!file) return null;

    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}.${fileExt}`;

    const { error } = await supabase.storage
      .from("donation-proofs")
      .upload(fileName, file);

    if (error) throw error;

    const { data } = supabase.storage
      .from("donation-proofs")
      .getPublicUrl(fileName);

    return data.publicUrl;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formElement = e.currentTarget;
    const form = new FormData(formElement);

    try {
      setLoading(true);

      const proofFile = form.get("proof_file") as File | null;
      const proofUrl =
        proofFile && proofFile.size > 0 ? await uploadProof(proofFile) : null;

      const payload = {
        donor_name: String(form.get("donor_name") || ""),
        phone: String(form.get("phone") || ""),
        address: String(form.get("address") || ""),
        donation_method: donationKind === "money" ? paymentMethod : "non_money",
        donation_type: donationKind,
        amount: String(form.get("amount") || ""),
        notes: String(form.get("notes") || ""),
        case_slug: caseSlug || null,
        category_slug: selectedCase?.categorySlug || categorySlug || null,
        case_title: selectedCase?.title?.[locale] || null,
        case_province: selectedCase?.province?.[locale] || null,
        proof_url: proofUrl,
      };

      const { error } = await supabase.from("donations").insert([payload]);

      if (error) throw error;

      alert(t.success);
      formElement.reset();
      setPaymentMethod("");
      setDonationKind("money");
    } catch (error) {
      console.error(error);
      alert("حدث خطأ أثناء الإرسال. راجع Supabase أو Storage.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative mx-auto w-full max-w-[440px] overflow-hidden rounded-[24px] bg-white p-4 text-[#071726] shadow-2xl md:max-w-[520px] md:p-6"
    >
      <div className="mb-5">
        <p className="text-[10px] font-semibold tracking-[0.26em] text-[#5B2BD8]">
          {t.label}
        </p>

        <h2 className="mt-1 text-xl font-semibold leading-tight md:text-2xl">
          {t.title}
        </h2>
      </div>

      {selectedCase && (
        <div className="mb-5 overflow-hidden rounded-[22px] bg-[#071726] text-white">
          <img
            src={selectedCase.image}
            alt=""
            className="h-32 w-full object-cover opacity-80"
          />

          <div className="p-4">
            <p className="text-[11px] font-semibold text-[#FFD42A]">
              {t.caseLabel}
            </p>

            <h3 className="mt-2 text-lg font-semibold leading-7">
              {selectedCase.title[locale]}
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/70">
              {selectedCase.categoryTitle} / {selectedCase.province[locale]}
            </p>
          </div>
        </div>
      )}

      <div className="grid gap-4">
        <Field label={t.donorName} name="donor_name" />

        <div>
          <label className="mb-2 block text-sm font-medium">
            {t.donationType}
          </label>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setDonationKind("money")}
              className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                donationKind === "money"
                  ? "bg-[#FFD42A] text-[#071726]"
                  : "bg-[#F7F3EA] text-[#071726]/60"
              }`}
            >
              {t.money}
            </button>

            <button
              type="button"
              onClick={() => setDonationKind("other")}
              className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                donationKind === "other"
                  ? "bg-[#FFD42A] text-[#071726]"
                  : "bg-[#F7F3EA] text-[#071726]/60"
              }`}
            >
              {t.other}
            </button>
          </div>
        </div>

        {donationKind === "money" ? (
          <>
            <div>
              <label className="mb-2 block text-sm font-medium">
                {t.paymentMethod}
              </label>

              <select
                required
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full rounded-xl border border-dashed border-black/20 bg-[#F7F3EA] px-3 py-2.5 text-xs outline-none"
              >
                <option value="">{t.choosePayment}</option>
                <option value="zain_cash">{t.zain}</option>
                <option value="asia_pay">{t.asia}</option>
                <option value="mastercard">{t.master}</option>
                <option value="balance_card">{t.balance}</option>
              </select>
            </div>

            {paymentMethod && paymentMethod !== "balance_card" && (
              <div className="rounded-2xl bg-[#071726] p-4 text-white">
                <p className="text-xs text-white/50">{t.transferNumber}</p>

                <p className="mt-1 text-xl font-semibold text-[#FFD42A]">
                  {paymentNumbers[paymentMethod as keyof typeof paymentNumbers]}
                </p>
              </div>
            )}

            <Field label={t.amount} name="amount" />

            <FileField label={t.proof} hint={t.proofHint} required />
          </>
        ) : (
          <>
            <Field label={t.phone} name="phone" />
            <Field label={t.address} name="address" />

            <div>
              <label className="mb-2 block text-sm font-medium">
                {t.otherDetails}
              </label>

              <textarea
                name="notes"
                required
                rows={4}
                placeholder={t.otherPlaceholder}
                className="w-full resize-none rounded-xl border border-black/10 bg-[#F7F3EA] px-3 py-2.5 text-sm leading-6 outline-none"
              />
            </div>

            <FileField
  label={locale === "en" ? "Goods photo" : locale === "ku" ? "وێنەی کەلوپەل" : "صورة البضاعة أو الخدمة"}
  hint={
    locale === "en"
      ? "Upload a photo of the goods, furniture, clothes, stationery, or service details."
      : locale === "ku"
      ? "وێنەی کەلوپەل، جلوبەرگ، نووسینگە یان وردەکاری خزمەت بار بکە."
      : "ارفع صورة للبضاعة مثل الأثاث، الملابس، القرطاسية، أو أي تفاصيل تخص الخدمة."
  }
/>
          </>
        )}

        <button
          disabled={loading}
          className="mt-1 rounded-full bg-[#FFD42A] px-6 py-3 text-sm font-semibold text-[#071726] transition hover:scale-[1.015] disabled:opacity-50"
        >
          {loading ? t.sending : t.submit}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>

      <input
        name={name}
        required
        className="w-full rounded-2xl border border-black/10 bg-[#F7F3EA] px-4 py-3 text-sm outline-none"
      />
    </div>
  );
}

function FileField({
  label,
  hint,
  required,
}: {
  label: string;
  hint: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>

      <input
        name="proof_file"
        type="file"
        accept="image/*"
        required={required}
        className="w-full rounded-2xl border border-dashed border-black/20 bg-[#F7F3EA] px-4 py-3 text-sm outline-none"
      />

      <p className="mt-2 text-xs leading-5 text-black/45">{hint}</p>
    </div>
  );
}