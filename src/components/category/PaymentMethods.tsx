import { CreditCard, Landmark, Smartphone, WalletCards } from "lucide-react";

const methods = [
  {
    title: "زين كاش",
    desc: "تحويل مباشر إلى رقم المنظمة.",
    icon: Smartphone,
  },
  {
    title: "آسيا بي",
    desc: "إرسال المبلغ عبر المحفظة.",
    icon: WalletCards,
  },
  {
    title: "تحويل ماستر",
    desc: "تحويل إلى بطاقة المنظمة.",
    icon: CreditCard,
  },
  {
    title: "تحويل مصرفي",
    desc: "للتبرعات الكبيرة أو الجهات.",
    icon: Landmark,
  },
];

export default function PaymentMethods() {
  return (
    <section className="bg-[#03150f] px-4 pb-16 text-white md:px-10 md:pb-24">
      <div className="mx-auto max-w-7xl rounded-[34px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl md:p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-black md:text-4xl">طرق الدفع</h2>
          <p className="mt-3 text-sm leading-7 text-white/55">
            اختر الطريقة المناسبة، وبعدها املأ الفورمة حتى يتم توثيق التبرع
            ومتابعته.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {methods.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-black/15 p-4"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-300/10 text-emerald-200">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="font-black">{item.title}</h3>
                <p className="mt-2 text-xs leading-6 text-white/50">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}