"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

type Props = {
  locale: "ar" | "en" | "ku";
};

export default function DonationForm({ locale }: Props) {
  const searchParams = useSearchParams();
  const caseSlug = searchParams.get("case") || "";

  const [donationType, setDonationType] = useState<"money" | "non_money">(
    "money"
  );
  const [paymentMethod, setPaymentMethod] = useState("mastercard");

  const isAr = locale === "ar";

  const paymentNumbers: Record<string, string> = {
    mastercard: "0000 0000 0000 0000",
    zaincash: "0780 000 0000",
    asiahawala: "0770 000 0000",
    balance: "0750 000 0000",
  };

  return (
    <section className="mx-auto max-w-3xl rounded-[36px] bg-white p-6 text-[#071726] shadow-2xl md:p-10">
      <div className="mb-8">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5B2BD8]">
          Donation Form
        </p>

        <h1 className="mt-3 text-4xl font-black">
          {isAr ? "نموذج التبرع" : "Donation Form"}
        </h1>

        {caseSlug && (
          <p className="mt-3 rounded-2xl bg-[#F3F0FF] px-4 py-3 text-sm font-bold text-[#5B2BD8]">
            {isAr ? "الحالة المختارة: " : "Selected case: "}
            {caseSlug}
          </p>
        )}
      </div>

      <div className="mb-8 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => setDonationType("money")}
          className={`rounded-2xl px-5 py-4 text-sm font-black transition ${
            donationType === "money"
              ? "bg-[#071726] text-white"
              : "bg-black/5 text-black/60"
          }`}
        >
          {isAr ? "تبرع مالي" : "Money Donation"}
        </button>

        <button
          type="button"
          onClick={() => setDonationType("non_money")}
          className={`rounded-2xl px-5 py-4 text-sm font-black transition ${
            donationType === "non_money"
              ? "bg-[#071726] text-white"
              : "bg-black/5 text-black/60"
          }`}
        >
          {isAr ? "تبرع عيني / خدمة" : "Goods / Service"}
        </button>
      </div>

      <form className="space-y-5">
        <input
          type="text"
          placeholder={isAr ? "اسم المتبرع" : "Donor name"}
          className="w-full rounded-2xl border border-black/10 bg-black/[0.03] px-5 py-4 text-base font-bold outline-none focus:border-[#5B2BD8]"
        />

        {donationType === "money" ? (
          <>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full rounded-2xl border border-black/10 bg-black/[0.03] px-5 py-4 text-base font-bold outline-none focus:border-[#5B2BD8]"
            >
              <option value="mastercard">MasterCard</option>
              <option value="zaincash">Zain Cash</option>
              <option value="asiahawala">Asia Hawala</option>
              <option value="balance">رصيد</option>
            </select>

            <div className="rounded-2xl bg-[#071726] p-5 text-white">
              <p className="text-sm text-white/60">
                {isAr ? "رقم التحويل" : "Transfer number"}
              </p>
              <p className="mt-2 text-xl font-black">
                {paymentNumbers[paymentMethod]}
              </p>
            </div>

            <input
              type="number"
              placeholder={isAr ? "المبلغ" : "Amount"}
              className="w-full rounded-2xl border border-black/10 bg-black/[0.03] px-5 py-4 text-base font-bold outline-none focus:border-[#5B2BD8]"
            />

            <input
              type="file"
              accept="image/*"
              className="w-full rounded-2xl border border-dashed border-black/20 bg-black/[0.03] px-5 py-4 text-sm font-bold"
            />
          </>
        ) : (
          <>
            <input
              type="tel"
              placeholder={isAr ? "رقم الهاتف" : "Phone number"}
              className="w-full rounded-2xl border border-black/10 bg-black/[0.03] px-5 py-4 text-base font-bold outline-none focus:border-[#5B2BD8]"
            />

            <input
              type="text"
              placeholder={isAr ? "العنوان" : "Address"}
              className="w-full rounded-2xl border border-black/10 bg-black/[0.03] px-5 py-4 text-base font-bold outline-none focus:border-[#5B2BD8]"
            />

            <textarea
              placeholder={isAr ? "تفاصيل التبرع" : "Donation details"}
              rows={5}
              className="w-full resize-none rounded-2xl border border-black/10 bg-black/[0.03] px-5 py-4 text-base font-bold outline-none focus:border-[#5B2BD8]"
            />

            <input
              type="file"
              accept="image/*"
              multiple
              className="w-full rounded-2xl border border-dashed border-black/20 bg-black/[0.03] px-5 py-4 text-sm font-bold"
            />
          </>
        )}

        <button
          type="submit"
          className="w-full rounded-full bg-gradient-to-r from-[#5B2BD8] to-[#2563EB] px-6 py-4 text-base font-black text-white transition hover:scale-[1.01]"
        >
          {isAr ? "إرسال التبرع" : "Submit Donation"}
        </button>
      </form>
    </section>
  );
}