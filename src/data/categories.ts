export type CategorySlug =
  | "education"
  | "health"
  | "clothes"
  | "food"
  | "furniture"
  | "money"
  | "seasonal";

export const categories = {
  education: {
    slug: "education",
    title: "التبرع للتعليم",
    label: "التعليم",
    description:
      "دعم الطلاب والعوائل المحتاجة من خلال دفع الأقساط الدراسية أو شراء الحقائب والقرطاسية والملابس المدرسية.",
    heroImage: "/education.jpg",
    accent: "تعليم",
  },

  health: {
    slug: "health",
    title: "التبرع للصحة",
    label: "الصحة",
    description:
      "دعم الحالات المرضية والعمليات والأدوية والفحوصات الطبية للحالات التي تحتاج مساعدة عاجلة.",
    heroImage: "/health.jpg",
    accent: "صحة",
  },

  clothes: {
    slug: "clothes",
    title: "التبرع بالكسوة",
    label: "الكسوة",
    description:
      "توفير ملابس للأطفال والعوائل المحتاجة، خصوصاً في الشتاء والأعياد وبداية العام الدراسي.",
    heroImage: "/categories/clothes.jpg",
    accent: "كسوة",
  },

  food: {
    slug: "food",
    title: "التبرع بالغذاء",
    label: "الغذاء",
    description:
      "تجهيز سلال غذائية ودعم معيشي للعوائل التي تحتاج مساعدة يومية أو موسمية.",
    heroImage: "/categories/food.jpg",
    accent: "غذاء",
  },

  furniture: {
    slug: "furniture",
    title: "التبرع بالأثاث",
    label: "الأثاث",
    description:
      "تجهيز بيوت العوائل المحتاجة بالأثاث والاحتياجات المنزلية الأساسية.",
    heroImage: "/categories/furniture.jpg",
    accent: "أثاث",
  },

  money: {
    slug: "money",
    title: "التبرع المالي",
    label: "تبرع مالي",
    description:
      "تبرع مباشر تذهب قيمته إلى الحالات الأشد احتياجاً حسب أولوية المنظمة.",
    heroImage: "/categories/money.jpg",
    accent: "دعم مباشر",
  },

  seasonal: {
    slug: "seasonal",
    title: "التبرع الموسمي",
    label: "تبرع موسمي",
    description:
      "حملات رمضان، الشتاء، العودة للمدارس، كسوة العيد، والمبادرات المرتبطة بالمواسم.",
    heroImage: "/categories/seasonal.jpg",
    accent: "موسمي",
  },
} as const;