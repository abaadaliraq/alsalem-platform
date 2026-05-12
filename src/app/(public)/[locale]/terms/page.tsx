import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الشروط والأحكام | منظمة السالم الخيرية",
  description:
    "الشروط والأحكام الخاصة باستخدام منصة منظمة السالم الخيرية وخدمات التبرع.",
};

export default function TermsPage() {
  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_35%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.14),transparent_35%)]" />

      <div className="relative mx-auto max-w-5xl px-6 py-24 md:px-10">
        {/* HEADER */}
        <div className="mb-16">
          <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/70 backdrop-blur">
            Terms & Conditions
          </span>

          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            الشروط والأحكام
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            باستخدامك لمنصة منظمة السالم الخيرية، فإنك توافق على الالتزام
            بالشروط والأحكام التالية. تم وضع هذه الشروط لضمان تجربة آمنة وواضحة
            وعادلة لجميع المستخدمين والمتبرعين.
          </p>
        </div>

        {/* CONTENT */}
        <div className="space-y-10">
          {/* SECTION */}
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              1- قبول الشروط
            </h2>

            <p className="leading-8 text-white/75">
              عند دخولك أو استخدامك لمنصة منظمة السالم الخيرية، فإنك تقر
              بموافقتك الكاملة على جميع الشروط والأحكام المذكورة في هذه الصفحة.
              إذا كنت لا توافق على أي جزء منها، يرجى عدم استخدام المنصة.
            </p>
          </section>

          {/* SECTION */}
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              2- استخدام المنصة
            </h2>

            <div className="space-y-4 text-white/75 leading-8">
              <p>
                يلتزم المستخدم باستخدام المنصة بطريقة قانونية وإنسانية وعدم
                القيام بأي نشاط قد يضر بالمنصة أو المستخدمين الآخرين.
              </p>

              <ul className="list-disc space-y-2 pr-6">
                <li>عدم إرسال معلومات مزيفة أو مضللة.</li>
                <li>عدم محاولة اختراق أو تعطيل المنصة.</li>
                <li>عدم إساءة استخدام خدمات التبرع.</li>
                <li>عدم رفع محتوى غير قانوني أو مسيء.</li>
              </ul>
            </div>
          </section>

          {/* SECTION */}
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              3- التبرعات
            </h2>

            <div className="space-y-4 text-white/75 leading-8">
              <p>
                جميع التبرعات المقدمة عبر المنصة تعتبر مساهمات طوعية لدعم
                الحالات والأنشطة الإنسانية التابعة لمنظمة السالم الخيرية.
              </p>

              <p>
                يتحمل المتبرع مسؤولية التأكد من صحة بيانات التحويل والمعلومات
                التي يقوم بإرسالها أثناء عملية التبرع.
              </p>

              <p>
                تحتفظ المنظمة بحق مراجعة أو رفض أي تبرع في حال وجود اشتباه
                بعملية غير قانونية أو مخالفة للأنظمة.
              </p>
            </div>
          </section>

          {/* SECTION */}
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              4- المحتوى والبيانات
            </h2>

            <p className="leading-8 text-white/75">
              جميع النصوص والتصاميم والشعارات والمحتوى الموجود داخل المنصة
              مملوك لمنظمة السالم الخيرية أو يتم استخدامه بإذن قانوني، ولا يجوز
              إعادة استخدامه أو نسخه دون موافقة مسبقة.
            </p>
          </section>

          {/* SECTION */}
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              5- حدود المسؤولية
            </h2>

            <p className="leading-8 text-white/75">
              تسعى منظمة السالم الخيرية لتوفير منصة مستقرة وآمنة، لكن لا يمكن
              ضمان خلو الخدمة من الانقطاعات أو الأخطاء التقنية بشكل كامل.
              استخدام المنصة يتم على مسؤولية المستخدم.
            </p>
          </section>

          {/* SECTION */}
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              6- الخصوصية
            </h2>

            <p className="leading-8 text-white/75">
              يخضع جمع واستخدام البيانات لسياسة الخصوصية الخاصة بالمنصة، وننصح
              بقراءتها لفهم كيفية التعامل مع المعلومات الشخصية.
            </p>
          </section>

          {/* SECTION */}
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              7- التعديلات على الشروط
            </h2>

            <p className="leading-8 text-white/75">
              تحتفظ منظمة السالم الخيرية بحق تعديل أو تحديث هذه الشروط في أي
              وقت دون إشعار مسبق. استمرار استخدام المنصة بعد التعديلات يعني
              موافقتك على النسخة المحدثة.
            </p>
          </section>

          {/* CONTACT */}
          <section className="rounded-[32px] border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              التواصل معنا
            </h2>

            <p className="leading-8 text-white/75">
              إذا كانت لديك أي استفسارات بخصوص الشروط والأحكام، يمكنك التواصل
              مع فريق منظمة السالم الخيرية عبر صفحة التواصل داخل المنصة.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}