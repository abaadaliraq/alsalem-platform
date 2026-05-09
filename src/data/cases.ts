import type { CategorySlug } from "./categories";

export type DonationCase = {
  id: number;
  category: CategorySlug;
  title: string;
  governorate: string;
  beneficiaryName: string;
  beneficiaryType: "طالب" | "عائلة" | "مريض" | "مدرسة" | "أيتام" | "كبار سن";
  location: string;
  needType: string;
  description: string;
  targetAmount: number;
  collectedAmount: number;
  urgent?: boolean;
};

export const cases: DonationCase[] = [
  {
    id: 1,
    category: "education",
    title: "دعم أقساط طالب متفوق",
    governorate: "بغداد",
    beneficiaryName: "طالب في المرحلة المتوسطة",
    beneficiaryType: "طالب",
    location: "بغداد / الرصافة",
    needType: "دفع أقساط مدرسية",
    description:
      "طالب متفوق تحتاج عائلته إلى مساعدة في دفع جزء من الأقساط الدراسية حتى لا يترك الدراسة.",
    targetAmount: 450,
    collectedAmount: 180,
    urgent: true,
  },
  {
    id: 2,
    category: "education",
    title: "تجهيز مستلزمات مدرسية",
    governorate: "نينوى",
    beneficiaryName: "عائلة لديها 3 أطفال",
    beneficiaryType: "عائلة",
    location: "نينوى / الموصل",
    needType: "حقائب وقرطاسية وملابس",
    description:
      "عائلة محدودة الدخل تحتاج إلى تجهيز أطفالها للعام الدراسي الجديد.",
    targetAmount: 300,
    collectedAmount: 90,
  },
  {
    id: 3,
    category: "health",
    title: "مساعدة علاجية لطفل",
    governorate: "البصرة",
    beneficiaryName: "طفل يحتاج فحوصات",
    beneficiaryType: "مريض",
    location: "البصرة",
    needType: "فحوصات وأدوية",
    description:
      "حالة مرضية تحتاج إلى فحوصات دورية وأدوية مستمرة لا تستطيع العائلة تغطيتها بالكامل.",
    targetAmount: 700,
    collectedAmount: 250,
    urgent: true,
  },
  {
    id: 4,
    category: "clothes",
    title: "كسوة شتاء لعائلة",
    governorate: "ديالى",
    beneficiaryName: "عائلة متعففة",
    beneficiaryType: "عائلة",
    location: "ديالى",
    needType: "ملابس شتوية",
    description:
      "عائلة تحتاج إلى ملابس شتوية للأطفال بسبب ظروف معيشية صعبة.",
    targetAmount: 250,
    collectedAmount: 75,
  },
  {
    id: 5,
    category: "food",
    title: "سلة غذائية شهرية",
    governorate: "المثنى",
    beneficiaryName: "عائلة من 6 أفراد",
    beneficiaryType: "عائلة",
    location: "المثنى",
    needType: "سلة غذائية",
    description:
      "عائلة تحتاج إلى دعم غذائي شهري بسبب انقطاع مصدر الدخل.",
    targetAmount: 200,
    collectedAmount: 120,
  },
  {
    id: 6,
    category: "furniture",
    title: "تجهيز غرفة أساسية",
    governorate: "ميسان",
    beneficiaryName: "عائلة محتاجة",
    beneficiaryType: "عائلة",
    location: "ميسان",
    needType: "أثاث منزلي",
    description:
      "العائلة تحتاج إلى فرش وأثاث أساسي لتجهيز غرفة معيشة بسيطة.",
    targetAmount: 600,
    collectedAmount: 210,
  },
  {
    id: 7,
    category: "money",
    title: "دعم مالي مباشر",
    governorate: "بابل",
    beneficiaryName: "عائلة بلا معيل",
    beneficiaryType: "عائلة",
    location: "بابل",
    needType: "مساعدة مالية",
    description:
      "مساعدة مالية مباشرة لعائلة فقدت مصدر دخلها وتحتاج دعماً سريعاً.",
    targetAmount: 500,
    collectedAmount: 160,
  },
  {
    id: 8,
    category: "seasonal",
    title: "حملة العودة للمدارس",
    governorate: "كربلاء",
    beneficiaryName: "مجموعة طلاب",
    beneficiaryType: "مدرسة",
    location: "كربلاء",
    needType: "حقائب وقرطاسية",
    description:
      "حملة موسمية لتجهيز طلاب محتاجين قبل بداية العام الدراسي.",
    targetAmount: 900,
    collectedAmount: 300,
  },
];