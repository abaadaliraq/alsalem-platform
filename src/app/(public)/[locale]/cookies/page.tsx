import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الكوكيز | منظمة السالم الخيرية",
  description:
    "تعرف على كيفية استخدام ملفات تعريف الارتباط (Cookies) داخل منصة منظمة السالم الخيرية.",
};

export default function CookiesPage() {
  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_35%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.14),transparent_35%)]" />

      <div className="relative mx-auto max-w-5xl px-6 py-24 md:px-10">
        {/* HEADER */}
        <div className="mb-16">
          <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/70 backdrop-blur">
            Cookie Policy
          </span>

          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            سياسة الكوكيز
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            تستخدم منصة منظمة السالم الخيرية ملفات تعريف الارتباط (Cookies)
            لتحسين تجربة المستخدم، وتطوير أداء المنصة، وتوفير تجربة أكثر
            سلاسة وأماناً أثناء التصفح.
          </p>
        </div>

        {/* CONTENT */}
        <div className="space-y-10">
          {/* SECTION */}
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              1- ما هي ملفات الكوكيز؟
            </h2>

            <p className="leading-8 text-white/75">
              الكوكيز هي ملفات صغيرة يتم حفظها على جهاز المستخدم عند زيارة
              الموقع الإلكتروني. تساعد هذه الملفات في تذكر بعض الإعدادات
              والمعلومات لتحسين تجربة الاستخدام.
            </p>
          </section>

          {/* SECTION */}
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              2- كيف نستخدم الكوكيز؟
            </h2>

            <div className="space-y-4 text-white/75 leading-8">
              <p>
                تستخدم منظمة السالم الخيرية الكوكيز للأغراض التالية:
              </p>

              <ul className="list-disc space-y-2 pr-6">
                <li>تذكر لغة المستخدم وإعداداته.</li>
                <li>تحسين أداء وسرعة الموقع.</li>
                <li>تحليل استخدام المنصة بشكل عام.</li>
                <li>تقديم تجربة تصفح أكثر استقراراً.</li>
                <li>تعزيز الأمان ومنع الاستخدام غير المشروع.</li>
              </ul>
            </div>
          </section>

          {/* SECTION */}
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              3- أنواع الكوكيز المستخدمة
            </h2>

            <div className="space-y-5 text-white/75 leading-8">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  الكوكيز الأساسية
                </h3>

                <p>
                  ضرورية لتشغيل الموقع بشكل صحيح وتمكين الوظائف الأساسية.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  كوكيز الأداء والتحليل
                </h3>

                <p>
                  تساعدنا على فهم كيفية استخدام الزوار للمنصة وتحسين التجربة.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  كوكيز التفضيلات
                </h3>

                <p>
                  تستخدم لتذكر إعدادات المستخدم مثل اللغة أو بعض خيارات العرض.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION */}
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              4- التحكم بالكوكيز
            </h2>

            <p className="leading-8 text-white/75">
              يمكن للمستخدم التحكم بملفات الكوكيز أو حذفها من خلال إعدادات
              المتصفح الخاص به. قد يؤدي تعطيل بعض الكوكيز إلى التأثير على
              وظائف معينة داخل المنصة.
            </p>
          </section>

          {/* SECTION */}
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              5- خدمات الجهات الخارجية
            </h2>

            <p className="leading-8 text-white/75">
              قد تستخدم المنصة خدمات خارجية مثل أدوات التحليل أو خدمات الحماية،
              والتي قد تقوم بدورها باستخدام ملفات كوكيز خاصة بها وفقاً لسياسات
              تلك الجهات.
            </p>
          </section>

          {/* SECTION */}
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              6- تحديثات سياسة الكوكيز
            </h2>

            <p className="leading-8 text-white/75">
              قد تقوم منظمة السالم الخيرية بتحديث سياسة الكوكيز من وقت لآخر
              بما يتوافق مع التطورات التقنية أو القانونية. استمرار استخدام
              المنصة يعني موافقتك على النسخة المحدثة من هذه السياسة.
            </p>
          </section>

          {/* CONTACT */}
          <section className="rounded-[32px] border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              التواصل معنا
            </h2>

            <p className="leading-8 text-white/75">
              إذا كانت لديك أي استفسارات بخصوص سياسة الكوكيز أو كيفية استخدام
              ملفات تعريف الارتباط داخل المنصة، يمكنك التواصل مع فريق منظمة
              السالم الخيرية عبر صفحة التواصل.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}