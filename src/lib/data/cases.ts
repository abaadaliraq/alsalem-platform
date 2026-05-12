export type Locale = "ar" | "en" | "ku";

export type CharityCase = {
  slug: string;
  category: "medical" | "education" | "food" | "orphans" | "shelter";
  image: string;
  target: number;
  raised: number;
  donors: number;
  daysLeft: number;
  location: Record<Locale, string>;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  story: Record<Locale, string>;
  updates: Record<Locale, string[]>;
};

export const cases: CharityCase[] = [
  {
    slug: "child-heart-treatment",
    category: "medical",
    image:
      "https://images.unsplash.com/photo-1576765607924-830b1dd16184?q=80&w=1400&auto=format&fit=crop",
    target: 6000000,
    raised: 3850000,
    donors: 74,
    daysLeft: 12,
    location: { ar: "بغداد", en: "Baghdad", ku: "بەغدا" },
    title: {
      ar: "علاج عاجل لطفل يعاني من مشكلة في القلب",
      en: "Urgent heart treatment for a child",
      ku: "چارەسەری پەلە بۆ منداڵێک",
    },
    excerpt: {
      ar: "طفل بحاجة إلى فحوصات وعلاج عاجل لتجنب تدهور حالته الصحية.",
      en: "A child needs urgent tests and treatment to prevent health complications.",
      ku: "منداڵێک پێویستی بە چارەسەری پەلە هەیە.",
    },
    story: {
      ar: "تحتاج هذه الحالة إلى دعم عاجل لتغطية الفحوصات الطبية والعلاج والمتابعة. تعمل المنظمة على توثيق الحالة ومتابعة مراحل العلاج لضمان وصول الدعم بالشكل الصحيح.",
      en: "This case requires urgent support to cover medical tests, treatment, and follow-up. The organization documents and tracks the process to ensure support reaches correctly.",
      ku: "ئەم کەیسە پێویستی بە پشتگیری پەلە هەیە بۆ پشکنین و چارەسەر.",
    },
    updates: {
      ar: ["تم استلام التقارير الأولية.", "تم التواصل مع الطبيب المختص."],
      en: ["Initial reports received.", "Specialist doctor contacted."],
      ku: ["ڕاپۆرتی سەرەتایی وەرگیرا.", "پەیوەندی بە پزیشک کرا."],
    },
  },
  {
    slug: "school-bags-for-students",
    category: "education",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1400&auto=format&fit=crop",
    target: 3500000,
    raised: 2100000,
    donors: 43,
    daysLeft: 20,
    location: { ar: "نينوى", en: "Nineveh", ku: "نەینەوا" },
    title: {
      ar: "حقائب مدرسية وقرطاسية لطلاب محتاجين",
      en: "School bags and supplies for students",
      ku: "جانتا و پێداویستی قوتابخانە",
    },
    excerpt: {
      ar: "دعم طلاب من عوائل متعففة لتوفير المستلزمات الدراسية الأساسية.",
      en: "Supporting students from vulnerable families with basic school supplies.",
      ku: "پشتیوانی قوتابیانی خێزانە پێویستەکان.",
    },
    story: {
      ar: "يهدف هذا المشروع إلى توفير حقائب مدرسية وقرطاسية لطلاب لا تستطيع عوائلهم تغطية تكاليف الدراسة. التعليم ليس رفاهية، بل فرصة حقيقية لتغيير حياة الطفل.",
      en: "This project provides school bags and supplies to students whose families cannot cover education costs.",
      ku: "ئەم پرۆژەیە بۆ دابینکردنی پێداویستی قوتابخانەیە.",
    },
    updates: {
      ar: ["تم تحديد أسماء الطلاب.", "جاري تجهيز الحقائب."],
      en: ["Students identified.", "Bags are being prepared."],
      ku: ["ناوی قوتابیان دیاری کرا.", "جانتاکان ئامادە دەکرێن."],
    },
  },
  {
    slug: "monthly-food-baskets",
    category: "food",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1400&auto=format&fit=crop",
    target: 5000000,
    raised: 4650000,
    donors: 96,
    daysLeft: 6,
    location: { ar: "البصرة", en: "Basra", ku: "بەسرە" },
    title: {
      ar: "سلال غذائية شهرية لعوائل متعففة",
      en: "Monthly food baskets for families",
      ku: "سەبەتەی خواردن بۆ خێزانەکان",
    },
    excerpt: {
      ar: "توفير مواد غذائية أساسية لعوائل تحتاج إلى دعم شهري منتظم.",
      en: "Providing essential food items to families needing monthly support.",
      ku: "دابینکردنی خواردنی بنەڕەتی بۆ خێزانەکان.",
    },
    story: {
      ar: "تواجه بعض العوائل صعوبة في تأمين الاحتياجات الغذائية الأساسية. يهدف هذا الدعم إلى توفير سلة غذائية شهرية تحفظ كرامة العائلة وتخفف الضغط عنها.",
      en: "Some families struggle to secure basic food needs. This support provides monthly food baskets with dignity.",
      ku: "هەندێ خێزان ناتوانن پێداویستی خواردن دابین بکەن.",
    },
    updates: {
      ar: ["تم تجهيز قائمة المواد.", "سيتم التوزيع بعد اكتمال المبلغ."],
      en: ["Food list prepared.", "Distribution begins after target is completed."],
      ku: ["لیستی خواردن ئامادەیە.", "دابەشکردن دوای تەواوبوونی بڕەکە دەبێت."],
    },
  },
  {
    slug: "orphan-winter-support",
    category: "orphans",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1400&auto=format&fit=crop",
    target: 4200000,
    raised: 1200000,
    donors: 31,
    daysLeft: 18,
    location: { ar: "كربلاء", en: "Karbala", ku: "کەربەلا" },
    title: {
      ar: "دعم شتوي للأطفال الأيتام",
      en: "Winter support for orphan children",
      ku: "پشتیوانی زستانە بۆ منداڵانی بێباوک",
    },
    excerpt: {
      ar: "توفير ملابس واحتياجات شتوية للأطفال الأيتام قبل انخفاض درجات الحرارة.",
      en: "Providing winter clothing and essentials for orphan children.",
      ku: "دابینکردنی پێداویستی زستانە بۆ منداڵان.",
    },
    story: {
      ar: "يحتاج عدد من الأطفال الأيتام إلى ملابس شتوية واحتياجات أساسية قبل موسم البرد. الدعم يضمن لهم دفئاً وأماناً دون أن يشعروا بالحرمان.",
      en: "Orphan children need winter clothing and essentials before colder days arrive.",
      ku: "منداڵانی بێباوک پێویستیان بە جل و پێداویستی زستانە هەیە.",
    },
    updates: {
      ar: ["تم تحديد المقاسات.", "جاري تجهيز قائمة المستفيدين."],
      en: ["Sizes collected.", "Beneficiary list is being prepared."],
      ku: ["قەبارەکان دیاری کرا.", "لیستی سوودمەندان ئامادە دەکرێت."],
    },
  },
  {
    slug: "family-rent-support",
    category: "shelter",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1400&auto=format&fit=crop",
    target: 3000000,
    raised: 850000,
    donors: 19,
    daysLeft: 10,
    location: { ar: "بابل", en: "Babylon", ku: "بابل" },
    title: {
      ar: "دعم إيجار لعائلة مهددة بفقدان السكن",
      en: "Rent support for a family at risk",
      ku: "پشتیوانی کرێ بۆ خێزانێک",
    },
    excerpt: {
      ar: "عائلة تحتاج إلى دعم عاجل لتغطية إيجار السكن وتجنب الإخلاء.",
      en: "A family needs urgent support to cover rent and avoid eviction.",
      ku: "خێزانێک پێویستی بە پشتگیری کرێ هەیە.",
    },
    story: {
      ar: "تمر العائلة بظرف مالي صعب يهدد استقرارها السكني. يهدف الدعم إلى تغطية الإيجار لفترة مؤقتة حتى تستعيد العائلة قدرتها على الوقوف من جديد.",
      en: "The family is facing financial hardship that threatens housing stability.",
      ku: "خێزانەکە لە دۆخێکی دارایی قورسدایە.",
    },
    updates: {
      ar: ["تم التحقق من الحالة.", "تم التواصل مع صاحب العقار."],
      en: ["Case verified.", "Landlord contacted."],
      ku: ["کەیسەکە پشتڕاست کرایەوە.", "پەیوەندی بە خاوەنی خانوو کرا."],
    },
  },
];

export function getCaseBySlug(slug: string) {
  return cases.find((item) => item.slug === slug);
}