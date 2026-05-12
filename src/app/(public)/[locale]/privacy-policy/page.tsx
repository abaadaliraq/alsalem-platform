import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | منظمة السالم الخيرية",
  description:
    "تعرف على كيفية جمع واستخدام وحماية بيانات المستخدمين والمتبرعين في منصة منظمة السالم الخيرية.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_35%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.14),transparent_35%)]" />

      <div className="relative mx-auto max-w-5xl px-6 py-24 md:px-10">
        {/* HEADER */}
        <div className="mb-16">
          <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/70 backdrop-blur">
            Privacy Policy
          </span>

          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            سياسة الخصوصية
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            تلتزم منظمة السالم الخيرية بحماية خصوصية جميع المستخدمين
            والمتبرعين والزوار. توضح هذه السياسة كيفية جمع البيانات
            واستخدامها وتخزينها وحمايتها أثناء استخدام منصتنا الإلكترونية.
          </p>
        </div>

        {/* CONTENT */}
        <div className="space-y-10">
          {/* SECTION */}
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              1- المعلومات التي نقوم بجمعها
            </h2>

            <div className="space-y-4 text-white/75 leading-8">
              <p>
                عند استخدام منصة منظمة السالم الخيرية، قد نقوم بجمع بعض
                المعلومات التي يقدمها المستخدم بشكل مباشر، وتشمل:
              </p>

              <ul className="list-disc space-y-2 pr-6">
                <li>الاسم الكامل.</li>
                <li>رقم الهاتف.</li>
                <li>البريد الإلكتروني.</li>
                <li>العنوان أو المدينة.</li>
                <li>بيانات التبرع والمبلغ.</li>
                <li>صور إثبات التحويل أو صور التبرعات العينية.</li>
                <li>أي معلومات إضافية يرسلها المستخدم طوعاً.</li>
              </ul>
            </div>
          </section>

          {/* SECTION */}
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              2- كيفية استخدام المعلومات
            </h2>

            <div className="space-y-4 text-white/75 leading-8">
              <p>
                يتم استخدام المعلومات التي يتم جمعها للأغراض التالية فقط:
              </p>

              <ul className="list-disc space-y-2 pr-6">
                <li>معالجة التبرعات والتأكد من وصولها.</li>
                <li>التواصل مع المتبرعين عند الحاجة.</li>
                <li>إدارة الحالات الإنسانية وتنظيم الدعم.</li>
                <li>تحسين تجربة استخدام المنصة.</li>
                <li>الحماية من عمليات الاحتيال أو الاستخدام غير المشروع.</li>
                <li>الامتثال للمتطلبات القانونية والتنظيمية.</li>
              </ul>
            </div>
          </section>

          {/* SECTION */}
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              3- حماية البيانات
            </h2>

            <p className="leading-8 text-white/75">
              نحن نتخذ إجراءات تقنية وتنظيمية مناسبة لحماية بيانات المستخدمين
              من الوصول غير المصرح به أو التعديل أو الفقدان أو سوء الاستخدام.
              ومع ذلك، لا يمكن ضمان أمان أي نظام إلكتروني بنسبة 100% بشكل
              كامل.
            </p>
          </section>

          {/* SECTION */}
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              4- مشاركة المعلومات
            </h2>

            <div className="space-y-4 text-white/75 leading-8">
              <p>
                لا تقوم منظمة السالم الخيرية ببيع أو تأجير بيانات المستخدمين
                لأي جهة خارجية.
              </p>

              <p>
                قد تتم مشاركة بعض المعلومات فقط في الحالات الضرورية التالية:
              </p>

              <ul className="list-disc space-y-2 pr-6">
                <li>الامتثال للقوانين أو الطلبات الرسمية.</li>
                <li>حماية حقوق المنظمة أو المستخدمين.</li>
                <li>
                  مع مزودي الخدمات التقنية المرتبطين بتشغيل المنصة مثل خدمات
                  الاستضافة أو الدفع الإلكتروني.
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION */}
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              5- ملفات تعريف الارتباط (Cookies)
            </h2>

            <p className="leading-8 text-white/75">
              قد تستخدم المنصة ملفات تعريف الارتباط لتحسين تجربة المستخدم،
              وتذكر الإعدادات، وتحليل أداء الموقع. يمكن للمستخدم التحكم بإعدادات
              الكوكيز من خلال المتصفح أو عبر نافذة إعدادات الكوكيز داخل الموقع.
            </p>
          </section>

          {/* SECTION */}
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              6- روابط الجهات الخارجية
            </h2>

            <p className="leading-8 text-white/75">
              قد تحتوي المنصة على روابط لمواقع أو خدمات خارجية. منظمة السالم
              الخيرية غير مسؤولة عن سياسات الخصوصية أو محتوى تلك المواقع.
            </p>
          </section>

          {/* SECTION */}
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              7- حقوق المستخدم
            </h2>

            <div className="space-y-4 text-white/75 leading-8">
              <p>يحق للمستخدم:</p>

              <ul className="list-disc space-y-2 pr-6">
                <li>طلب الاطلاع على بياناته.</li>
                <li>طلب تعديل أو حذف بياناته عند الإمكان.</li>
                <li>الاعتراض على استخدام بعض البيانات.</li>
                <li>إيقاف استقبال الرسائل أو الإشعارات.</li>
              </ul>
            </div>
          </section>

          {/* SECTION */}
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              8- تحديثات السياسة
            </h2>

            <p className="leading-8 text-white/75">
              قد تقوم منظمة السالم الخيرية بتحديث سياسة الخصوصية من وقت لآخر
              لتتوافق مع التغييرات التقنية أو القانونية. استمرار استخدام المنصة
              يعني الموافقة على النسخة المحدثة من السياسة.
            </p>
          </section>

          {/* CONTACT */}
          <section className="rounded-[32px] border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold">
              التواصل معنا
            </h2>

            <p className="leading-8 text-white/75">
              إذا كانت لديك أي استفسارات حول سياسة الخصوصية أو كيفية استخدام
              البيانات، يمكنك التواصل مع فريق منظمة السالم الخيرية عبر صفحة
              التواصل داخل المنصة.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}