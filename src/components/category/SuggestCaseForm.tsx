"use client";

type Props = {
  categoryTitle: string;
};

export default function SuggestCaseForm({ categoryTitle }: Props) {
  return (
    <div
      id="suggest-case"
      className="rounded-[34px] border border-emerald-100 bg-white p-5 shadow-xl shadow-emerald-950/5 md:p-8"
    >
      <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-black text-emerald-700">
        اقتراح حالة
      </span>

      <h2 className="mt-5 text-3xl font-black text-[#082116]">
        تعرف حالة تحتاج مساعدة؟
      </h2>

      <p className="mt-3 text-sm leading-7 text-black/55">
        املأ المعلومات المتوفرة عن الحالة، وسيتم مراجعتها من قبل فريق المنظمة
        قبل نشرها ضمن {categoryTitle}.
      </p>

      <form className="mt-7 space-y-4">
        <div className="rounded-3xl bg-[#f7fbf8] p-4">
          <h3 className="mb-4 font-black text-[#082116]">معلومات المحتاج</h3>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="اسم المحتاج"
              className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-4 text-sm outline-none transition focus:border-emerald-500"
            />

            <input
              type="text"
              placeholder="المحافظة"
              className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-4 text-sm outline-none transition focus:border-emerald-500"
            />

            <input
              type="text"
              placeholder="عنوان المحتاج"
              className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-4 text-sm outline-none transition focus:border-emerald-500"
            />

            <input
              type="text"
              placeholder="نوع الحالة: مرضية، تعليم، سكن، غذاء..."
              className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-4 text-sm outline-none transition focus:border-emerald-500"
            />

            <textarea
              rows={4}
              placeholder="وصف الحالة"
              className="w-full resize-none rounded-2xl border border-emerald-100 bg-white px-4 py-4 text-sm outline-none transition focus:border-emerald-500"
            />
          </div>
        </div>

        <div className="rounded-3xl bg-[#f7fbf8] p-4">
          <h3 className="mb-4 font-black text-[#082116]">معلومات مقدم الطلب</h3>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="اسم مقدم الطلب"
              className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-4 text-sm outline-none transition focus:border-emerald-500"
            />

            <input
              type="tel"
              placeholder="رقم الهاتف"
              className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-4 text-sm outline-none transition focus:border-emerald-500"
            />

            <input
              type="text"
              placeholder="العنوان"
              className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-4 text-sm outline-none transition focus:border-emerald-500"
            />

            <input
              type="text"
              placeholder="صلة القرابة أو المعرفة بالحالة"
              className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-4 text-sm outline-none transition focus:border-emerald-500"
            />

            <label className="block rounded-2xl border border-dashed border-emerald-300 bg-white px-4 py-5 text-center text-sm font-bold text-emerald-700">
              رفع إثبات إن وجد
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>

        <button
          type="button"
          className="w-full rounded-full bg-[#1F7A4D] px-6 py-4 text-sm font-black text-white transition hover:bg-[#14532D]"
        >
          إرسال الحالة للمراجعة
        </button>
      </form>
    </div>
  );
}