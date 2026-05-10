"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Copy,
  UploadCloud,
  Gift,
  MessageCircle,
} from "lucide-react";

const ORGANIZATION_WHATSAPP = "9647770350030";

const donationTargets = [
  "التعليم",
  "الصحة",
  "علاج المرضى",
  "الكسوة",
  "الغذاء",
  "الأثاث",
  "التبرع المالي",
  "التبرع الموسمي",
  "ترميم المنازل",
  "الأجهزة الطبية",
  "الماء",
  "دار الأيتام",
  "دار العجزة",
];

const donationTypes = [
  "تبرع عام",
  "صدقة جارية",
  "زكاة",
  "كفالة",
  "دعم عاجل",
  "تبرع شهري",
  "هدية / باسم شخص",
];

const paymentMethods = [
  {
    id: "zain-cash",
    title: "زين كاش",
    details: "حوّل المبلغ إلى محفظة المنظمة ثم ارفع صورة الوصل أو رقم العملية.",
    receiver: "منصة السالم الإنسانية",
    number: "07770350030",
  },
  {
    id: "asia-pay",
    title: "آسيا بي",
    details: "حوّل المبلغ إلى حساب المنظمة ثم أرسل رقم العملية للتوثيق.",
    receiver: "منصة السالم الإنسانية",
    number: "07770350030",
  },
  {
    id: "master-transfer",
    title: "تحويل ماستر",
    details: "حوّل من تطبيق البطاقة/المصرف إلى حساب المنظمة ثم ارفع الوصل.",
    receiver: "منصة السالم الإنسانية",
    number: "37878638462",
  },
  {
    id: "bank-transfer",
    title: "تحويل مصرفي",
    details: "استخدم معلومات الحساب المصرفي الخاصة بالمنظمة.",
    receiver: "منصة السالم الإنسانية",
    number: "IBAN / ACCOUNT NUMBER",
  },
  {
    id: "balance-card",
    title: "كارت رصيد",
    details: "أرسل رقم الكارت أو ارفع صورة واضحة للكارت بعد الحك.",
    receiver: "منصة السالم الإنسانية",
    number: "يتم التحقق منه من قبل الإدارة",
  },
];

type Props = {
  defaultTarget?: string;
};

export default function DonationForm({
  defaultTarget = "التبرع المالي",
}: Props) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
const [error, setError] = useState("");
const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [target, setTarget] = useState(defaultTarget);
  const [donationType, setDonationType] = useState("تبرع عام");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("zain-cash");

  const [donorName, setDonorName] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [hideName, setHideName] = useState(false);
  const [updates, setUpdates] = useState(true);

  const [giftType, setGiftType] = useState<"none" | "person" | "deceased">(
    "none"
  );
  const [giftName, setGiftName] = useState("");
  const [giftPhone, setGiftPhone] = useState("");
  const [giftMessage, setGiftMessage] = useState(
    "تم تقديم هذا التبرع الإنساني باسمك، ليكون أثراً طيباً يصل لمن يحتاج."
  );

  const [transactionNumber, setTransactionNumber] = useState("");
  const [note, setNote] = useState("");

  const selectedPayment = useMemo(
    () =>
      paymentMethods.find((item) => item.id === paymentMethod) ??
      paymentMethods[0],
    [paymentMethod]
  );

  function copyText(text: string) {
    navigator.clipboard?.writeText(text);
  }

  function openWhatsAppToOrganization() {
    const message = `
طلب توثيق تبرع جديد عبر منصة السالم الإنسانية

الاسم: ${donorName || "فاعل خير"}
رقم الهاتف: ${donorPhone || "غير مذكور"}
إخفاء الاسم: ${hideName ? "نعم" : "لا"}
استلام تحديثات: ${updates ? "نعم" : "لا"}

وجهة التبرع: ${target}
نوع التبرع: ${donationType}
المبلغ: ${amount || "غير مذكور"}

طريقة الدفع: ${selectedPayment.title}
رقم العملية / الكارت: ${transactionNumber || "غير مذكور"}

إهداء التبرع:
${
  giftType === "none"
    ? "بدون إهداء"
    : giftType === "deceased"
    ? `على روح: ${giftName || "غير مذكور"}`
    : `باسم: ${giftName || "غير مذكور"}`
}
رقم واتساب المستلم: ${giftPhone || "غير مذكور"}
رسالة الشهادة: ${giftType !== "none" ? giftMessage : "لا توجد"}

ملاحظات:
${note || "لا توجد"}
`;

    window.open(
      `https://wa.me/${ORGANIZATION_WHATSAPP}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  }

  const certificateUrl = `/certificate?donor=${encodeURIComponent(
    donorName || "فاعل خير"
  )}&gifted=${encodeURIComponent(
    giftName || "شخص عزيز"
  )}&donationFor=${encodeURIComponent(
    giftType === "deceased"
      ? `على روح ${giftName || "شخص عزيز"}`
      : `إهداء إلى ${giftName || "شخص عزيز"}`
  )}&target=${encodeURIComponent(target)}&amount=${encodeURIComponent(
    amount || ""
  )}`;
function validateStepOne() {
  if (!target) return "اختاري وجهة التبرع.";
  if (!donationType) return "اختاري نوع التبرع.";
  if (!amount || Number(amount) <= 0) return "اكتبي مبلغ تبرع صحيح.";
  if (!paymentMethod) return "اختاري طريقة الدفع.";
  if (!donorPhone.trim()) return "اكتبي رقم الهاتف.";

  if (giftType !== "none" && !giftName.trim()) {
    return giftType === "deceased"
      ? "اكتبي اسم المتوفى."
      : "اكتبي اسم الشخص المهدى له.";
  }

  return "";
}

function validateStepTwo() {
  if (!transactionNumber.trim()) {
    return "اكتبي رقم العملية أو رقم الكارت.";
  }

  if (!receiptFile) {
    return "ارفعي صورة الوصل أو الكارت.";
  }

  return "";
}

function goToStepTwo() {
  const message = validateStepOne();

  if (message) {
    setError(message);
    return;
  }

  setError("");
  setStep(2);
}

function goToStepThree() {
  const message = validateStepTwo();

  if (message) {
    setError(message);
    return;
  }

  setError("");
  setStep(3);
}
  return (
    <div
      id="donation-form"
      dir="rtl"
      className="scroll-mt-28 rounded-[34px] border border-emerald-100 bg-white p-5 shadow-xl shadow-emerald-950/5 md:p-8"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-black text-emerald-700">
          فورمة التبرع
        </span>

        <div className="flex items-center gap-2 text-xs font-black text-black/45">
          <span className={step === 1 ? "text-emerald-700" : ""}>البيانات</span>
          <span>—</span>
          <span className={step === 2 ? "text-emerald-700" : ""}>الدفع</span>
          <span>—</span>
          <span className={step === 3 ? "text-emerald-700" : ""}>الإرسال</span>
        </div>
      </div>

      <h2 className="mt-5 text-3xl font-black text-[#082116]">
        {step === 1 && "أكمل بيانات التبرع"}
        {step === 2 && "تفاصيل الدفع وإثبات التحويل"}
        {step === 3 && "إرسال التبرع والشهادة"}
      </h2>

      <p className="mt-3 text-sm leading-7 text-black/55">
        {step === 1 &&
          "اختر وجهة التبرع ونوعه، ويمكنك إهداء التبرع باسم شخص عزيز أو على روح متوفى."}
        {step === 2 &&
          "بعد التحويل، اكتب رقم العملية أو ارفع صورة الوصل ثم أرسل البيانات للتوثيق."}
        {step === 3 &&
          "أرسل بيانات التبرع إلى واتساب المنظمة، وبعدها يمكنك فتح شهادة الإهداء."}
      </p>

      <form className="mt-7 space-y-4">
        {step === 1 && (
          <>
            <div>
              <label className="mb-2 block text-sm font-bold">وجهة التبرع</label>
              <select
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="w-full rounded-2xl border border-emerald-100 bg-[#f7fbf8] px-4 py-4 text-sm font-bold outline-none transition focus:border-emerald-500"
              >
                {donationTargets.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">نوع التبرع</label>
              <select
                value={donationType}
                onChange={(e) => setDonationType(e.target.value)}
                className="w-full rounded-2xl border border-emerald-100 bg-[#f7fbf8] px-4 py-4 text-sm font-bold outline-none transition focus:border-emerald-500"
              >
                {donationTypes.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">مبلغ التبرع</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="مثلاً 50000"
                className="w-full rounded-2xl border border-emerald-100 bg-[#f7fbf8] px-4 py-4 text-sm outline-none transition focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">طريقة الدفع</label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full rounded-2xl border border-emerald-100 bg-[#f7fbf8] px-4 py-4 text-sm font-bold outline-none transition focus:border-emerald-500"
              >
                {paymentMethods.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">
                الاسم الكامل <span className="text-xs text-black/35">(اختياري)</span>
              </label>
              <input
                type="text"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                placeholder="اكتب اسمك"
                className="w-full rounded-2xl border border-emerald-100 bg-[#f7fbf8] px-4 py-4 text-sm outline-none transition focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">رقم الهاتف</label>
              <input
                type="tel"
                value={donorPhone}
                onChange={(e) => setDonorPhone(e.target.value)}
                placeholder="07xxxxxxxxx"
                className="w-full rounded-2xl border border-emerald-100 bg-[#f7fbf8] px-4 py-4 text-sm outline-none transition focus:border-emerald-500"
              />
            </div>

            <div className="rounded-[28px] border border-emerald-100 bg-[#f7fbf8] p-4">
              <div className="mb-4 flex items-center gap-2">
                <Gift className="h-5 w-5 text-emerald-700" />
                <p className="text-sm font-black text-[#082116]">إهداء التبرع</p>
              </div>

              <div className="grid gap-3">
                <label className="flex cursor-pointer items-center gap-3 rounded-2xl bg-white p-4 text-sm font-bold">
                  <input
                    type="radio"
                    checked={giftType === "none"}
                    onChange={() => setGiftType("none")}
                    className="h-4 w-4 accent-emerald-700"
                  />
                  بدون إهداء
                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-2xl bg-white p-4 text-sm font-bold">
                  <input
                    type="radio"
                    checked={giftType === "person"}
                    onChange={() => setGiftType("person")}
                    className="h-4 w-4 accent-emerald-700"
                  />
                  باسم شخص عزيز
                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-2xl bg-white p-4 text-sm font-bold">
                  <input
                    type="radio"
                    checked={giftType === "deceased"}
                    onChange={() => setGiftType("deceased")}
                    className="h-4 w-4 accent-emerald-700"
                  />
                  على روح متوفى
                </label>
              </div>

              {giftType !== "none" && (
                <div className="mt-4 space-y-3">
                  <input
                    type="text"
                    value={giftName}
                    onChange={(e) => setGiftName(e.target.value)}
                    placeholder={
                      giftType === "deceased"
                        ? "اسم المتوفى"
                        : "اسم الشخص المهدى له"
                    }
                    className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-4 text-sm outline-none transition focus:border-emerald-500"
                  />

                  <input
                    type="tel"
                    value={giftPhone}
                    onChange={(e) => setGiftPhone(e.target.value)}
                    placeholder="رقم واتساب المستلم - اختياري"
                    className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-4 text-sm outline-none transition focus:border-emerald-500"
                  />

                  <textarea
                    rows={3}
                    value={giftMessage}
                    onChange={(e) => setGiftMessage(e.target.value)}
                    placeholder="رسالة قصيرة تظهر في الشهادة"
                    className="w-full resize-none rounded-2xl border border-emerald-100 bg-white px-4 py-4 text-sm outline-none transition focus:border-emerald-500"
                  />
                </div>
              )}
            </div>

            <label className="flex items-center gap-3 rounded-2xl bg-[#f7fbf8] p-4 text-sm font-bold">
              <input
                type="checkbox"
                checked={hideName}
                onChange={(e) => setHideName(e.target.checked)}
                className="h-4 w-4 accent-emerald-700"
              />
              لا أريد إظهار اسمي كمتبرع
            </label>

            <label className="flex items-center gap-3 rounded-2xl bg-[#f7fbf8] p-4 text-sm font-bold">
              <input
                type="checkbox"
                checked={updates}
                onChange={(e) => setUpdates(e.target.checked)}
                className="h-4 w-4 accent-emerald-700"
              />
              أريد استلام تحديثات عن حالة التبرع
            </label>

            <button
              type="button"
              onClick={goToStepTwo}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#1F7A4D] px-6 py-4 text-sm font-black text-white transition hover:bg-[#14532D]"
            >
              متابعة إلى تفاصيل الدفع
              <ArrowLeft className="h-4 w-4" />
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div className="rounded-[28px] border border-emerald-100 bg-[#f7fbf8] p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black text-emerald-700">
                    طريقة الدفع المختارة
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-[#082116]">
                    {selectedPayment.title}
                  </h3>
                </div>
                <CheckCircle2 className="h-7 w-7 text-emerald-700" />
              </div>

              <p className="mt-3 text-sm leading-7 text-black/60">
                {selectedPayment.details}
              </p>

              <div className="mt-5 space-y-3">
                <div className="rounded-2xl bg-white p-4">
                  <p className="text-xs font-bold text-black/45">اسم المستلم</p>
                  <p className="mt-1 font-black text-[#082116]">
                    {selectedPayment.receiver}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-3 rounded-2xl bg-white p-4">
                  <div>
                    <p className="text-xs font-bold text-black/45">
                      رقم/حساب التحويل
                    </p>
                    <p className="mt-1 font-black text-[#082116]">
                      {selectedPayment.number}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyText(selectedPayment.number)}
                    className="rounded-full bg-emerald-50 p-3 text-emerald-700 transition hover:bg-emerald-100"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <input
              type="text"
              value={transactionNumber}
              onChange={(e) => setTransactionNumber(e.target.value)}
              placeholder="رقم العملية / رقم الكارت"
              className="w-full rounded-2xl border border-emerald-100 bg-[#f7fbf8] px-4 py-4 text-sm outline-none transition focus:border-emerald-500"
            />

            <label className="flex min-h-[150px] cursor-pointer flex-col items-center justify-center rounded-3xl border border-dashed border-emerald-300 bg-emerald-50/50 p-6 text-center transition hover:bg-emerald-50">
              <UploadCloud className="h-8 w-8 text-emerald-700" />
              <span className="mt-3 text-sm font-black text-[#082116]">
                اضغط لرفع صورة الإثبات
              </span>
              <span className="mt-1 text-xs text-black/45">PNG / JPG / PDF</span>
              {receiptFile && (
  <span className="mt-2 text-xs font-bold text-emerald-700">
    تم اختيار الملف: {receiptFile.name}
  </span>
)}
<input
  type="file"
  accept="image/*,.pdf"
  className="hidden"
  onChange={(e) => setReceiptFile(e.target.files?.[0] || null)}
/>
            </label>

            <textarea
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="ملاحظات إضافية - اختياري"
              className="w-full resize-none rounded-2xl border border-emerald-100 bg-[#f7fbf8] px-4 py-4 text-sm outline-none transition focus:border-emerald-500"
            />

            <div className="grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-6 py-4 text-sm font-black text-emerald-800 transition hover:bg-emerald-50"
              >
                <ArrowRight className="h-4 w-4" />
                رجوع
              </button>

              <button
                type="button"
                onClick={goToStepThree}
                className="w-full rounded-full bg-[#1F7A4D] px-6 py-4 text-sm font-black text-white transition hover:bg-[#14532D]"
              >
                مراجعة وإرسال
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="rounded-[32px] border border-emerald-100 bg-[#f7fbf8] p-6 text-center">
              <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-700" />

              <h3 className="mt-4 text-2xl font-black text-[#082116]">
                التبرع جاهز للإرسال
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/55">
                اضغط على زر واتساب لإرسال بيانات التبرع إلى فريق منصة السالم
                الإنسانية على الرقم 07770350030.
              </p>
              {error && (
  <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
    {error}
  </div>
)}
            </div>

            <button
              type="button"
              onClick={openWhatsAppToOrganization}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#1F7A4D] px-6 py-4 text-sm font-black text-white transition hover:bg-[#14532D]"
            >
              إرسال البيانات عبر واتساب
              <MessageCircle className="h-4 w-4" />
            </button>

            {giftType !== "none" && (
              <a
                href={certificateUrl}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-6 py-4 text-sm font-black text-emerald-800 transition hover:bg-emerald-50"
              >
                عرض شهادة الإهداء
                <Gift className="h-4 w-4" />
              </a>
            )}

            <button
              type="button"
              onClick={() => setStep(2)}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-6 py-4 text-sm font-black text-emerald-800 transition hover:bg-emerald-50"
            >
              <ArrowRight className="h-4 w-4" />
              رجوع
            </button>
          </>
        )}
      </form>
    </div>
  );
}