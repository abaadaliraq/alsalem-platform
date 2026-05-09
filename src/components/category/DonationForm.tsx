"use client";

const paymentOptions = [
  "زين كاش",
  "آسيا بي",
  "تحويل ماستر للمنظمة",
  "تحويل مصرفي",
  "إرسال كارت",
];

type Props = {
  categoryTitle: string;
};

export default function DonationForm({ categoryTitle }: Props) {
  return (
    <div
      id="donation-form"
      className="rounded-[34px] border border-emerald-100 bg-white p-5 shadow-xl shadow-emerald-950/5 md:p-8"
    >
      <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-black text-emerald-700">
        فورمة التبرع
      </span>

      <h2 className="mt-5 text-3xl font-black text-[#082116]">
        تبرع ضمن {categoryTitle}
      </h2>

      <p className="mt-3 text-sm leading-7 text-black/55">
        املأ المعلومات التالية حتى يتم توثيق التبرع والتواصل معك عند الحاجة.
      </p>

      <form className="mt-7 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-bold">الاسم الكامل</label>
          <input
            type="text"
            placeholder="اكتب اسمك"
            className="w-full rounded-2xl border border-emerald-100 bg-[#f7fbf8] px-4 py-4 text-sm outline-none transition focus:border-emerald-500"
          />
        </div>

        <label className="flex items-center gap-3 rounded-2xl bg-[#f7fbf8] p-4 text-sm font-bold">
          <input type="checkbox" className="h-4 w-4 accent-emerald-700" />
          لا أريد إظهار اسمي كمتبرع
        </label>

        <div>
          <label className="mb-2 block text-sm font-bold">رقم الهاتف</label>
          <input
            type="tel"
            placeholder="07xxxxxxxxx"
            className="w-full rounded-2xl border border-emerald-100 bg-[#f7fbf8] px-4 py-4 text-sm outline-none transition focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold">مبلغ التبرع</label>
          <input
            type="number"
            placeholder="مثلاً 50000"
            className="w-full rounded-2xl border border-emerald-100 bg-[#f7fbf8] px-4 py-4 text-sm outline-none transition focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold">طريقة الدفع</label>
          <select className="w-full rounded-2xl border border-emerald-100 bg-[#f7fbf8] px-4 py-4 text-sm outline-none transition focus:border-emerald-500">
            <option value="">اختر طريقة الدفع</option>
            {paymentOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold">ملاحظات إضافية</label>
          <textarea
            rows={4}
            placeholder="اكتب أي ملاحظة تخص التبرع"
            className="w-full resize-none rounded-2xl border border-emerald-100 bg-[#f7fbf8] px-4 py-4 text-sm outline-none transition focus:border-emerald-500"
          />
        </div>

        <button
          type="button"
          className="w-full rounded-full bg-[#1F7A4D] px-6 py-4 text-sm font-black text-white transition hover:bg-[#14532D]"
        >
          إرسال طلب التبرع
        </button>
      </form>
    </div>
  );
}