export type Locale = "ar" | "en" | "ku";

export type CategoryCase = {
  id: string;
  title: Record<Locale, string>;
  story: Record<Locale, string>;
  need: Record<Locale, string>;
  province: Record<Locale, string>;
  donationType: Record<Locale, string>;
  amount?: number;
  image: string;
};

export type DonationCategory = {
  slug: string;
  title: Record<Locale, string>;
  short: Record<Locale, string>;
  image: string;
  color: string;
  cases: CategoryCase[];
};

export const donationCategories: DonationCategory[] = [
  {
    slug: "medical",
    color: "#DFF4FF",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600&auto=format&fit=crop",
    title: {
      ar: "المرضى والعلاج",
      en: "Medical Support",
      ku: "پشتگیری تەندروستی",
    },
    short: {
      ar: "عمليات، أدوية، فحوصات، وحالات عاجلة.",
      en: "Surgeries, medicine, tests, and urgent care.",
      ku: "نەشتەرگەری، دەرمان، پشکنین و دۆخی پەلە.",
    },
    cases: [
      {
        id: "medical-1",
        title: {
          ar: "علاج عاجل لطفل يعاني من مشكلة في القلب",
          en: "Urgent heart treatment for a child",
          ku: "چارەسەری پەلە بۆ منداڵێک",
        },
        story: {
          ar: "طفل من عائلة محدودة الدخل يحتاج إلى فحوصات قلبية وعلاج سريع قبل أن تتدهور حالته الصحية.",
          en: "A child from a low-income family needs urgent heart tests and medical treatment.",
          ku: "منداڵێک لە خێزانێکی کەم‌داهات پێویستی بە پشکنین و چارەسەری خێرا هەیە.",
        },
        need: {
          ar: "فحوصات، علاج، ومراجعة طبيب مختص.",
          en: "Tests, treatment, and specialist follow-up.",
          ku: "پشکنین، چارەسەر و بەدواداچوونی پزیشک.",
        },
        province: { ar: "بغداد", en: "Baghdad", ku: "بەغدا" },
        donationType: { ar: "مبلغ مالي", en: "Financial donation", ku: "یارمەتی دارایی" },
        amount: 6000000,
        image:
          "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "medical-2",
        title: {
          ar: "أدوية شهرية لمريضة سكري",
          en: "Monthly medicine for a diabetic patient",
          ku: "دەرمانی مانگانە بۆ نەخۆشی شەکرە",
        },
        story: {
          ar: "مريضة تحتاج إلى أدوية منتظمة وفحوصات شهرية ولا تستطيع العائلة تغطية الكلفة بشكل مستمر.",
          en: "A patient needs regular medicine and monthly tests, but the family cannot cover the cost.",
          ku: "نەخۆشێک پێویستی بە دەرمانی بەردەوام و پشکنینی مانگانە هەیە.",
        },
        need: {
          ar: "أدوية وفحوصات لمدة شهرين.",
          en: "Medicine and tests for two months.",
          ku: "دەرمان و پشکنین بۆ دوو مانگ.",
        },
        province: { ar: "النجف", en: "Najaf", ku: "نەجەف" },
        donationType: { ar: "مبلغ مالي أو أدوية", en: "Money or medicine", ku: "پارە یان دەرمان" },
        amount: 850000,
        image:
          "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "medical-3",
        title: {
          ar: "كرسي متحرك لرجل كبير في السن",
          en: "Wheelchair for an elderly man",
          ku: "کورسی جوڵاو بۆ پیاوێکی بەساڵاچوو",
        },
        story: {
          ar: "رجل كبير في السن فقد قدرته على الحركة ويحتاج إلى كرسي متحرك يساعده في حياته اليومية.",
          en: "An elderly man lost mobility and needs a wheelchair for daily life.",
          ku: "پیاوێکی بەساڵاچوو پێویستی بە کورسی جوڵاو هەیە.",
        },
        need: {
          ar: "كرسي متحرك مناسب.",
          en: "A suitable wheelchair.",
          ku: "کورسی جوڵاوی گونجاو.",
        },
        province: { ar: "البصرة", en: "Basra", ku: "بەسرە" },
        donationType: { ar: "مبلغ مالي أو كرسي", en: "Money or wheelchair", ku: "پارە یان کورسی" },
        amount: 450000,
        image:
          "https://images.unsplash.com/photo-1576765608622-067973a79f53?q=80&w=1600&auto=format&fit=crop",
      },
    ],
    
  },
    {
    slug: "clothing",
    color: "#F1E8FF",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1600&auto=format&fit=crop",
    title: { ar: "الكسوة والملابس", en: "Clothing Support", ku: "جلوبەرگ" },
    short: {
      ar: "ملابس شتوية، ملابس أطفال، وأحذية للعوائل المحتاجة.",
      en: "Winter clothes, children’s clothes, and shoes for families in need.",
      ku: "جلوبەرگی زستانە، جلوبەرگی منداڵان و پێڵاو بۆ خێزانە پێویستەکان.",
    },
    cases: [
      {
        id: "clothing-1",
        title: {
          ar: "كسوة شتوية للأطفال الأيتام",
          en: "Winter clothing for orphan children",
          ku: "جلوبەرگی زستانە بۆ منداڵانی بێ‌باوک",
        },
        story: {
          ar: "أطفال أيتام يحتاجون إلى ملابس شتوية مناسبة بعد انخفاض درجات الحرارة، ولا تستطيع العائلة توفير احتياجاتهم الأساسية.",
          en: "Orphan children need proper winter clothing as temperatures drop, while the family cannot cover their basic needs.",
          ku: "منداڵانی بێ‌باوک پێویستیان بە جلوبەرگی زستانەی گونجاو هەیە.",
        },
        need: {
          ar: "جاكيتات، أحذية، وملابس شتوية للأطفال.",
          en: "Jackets, shoes, and winter clothes.",
          ku: "چاکەت، پێڵاو و جلوبەرگی زستانە.",
        },
        province: { ar: "كركوك", en: "Kirkuk", ku: "کەرکووک" },
        donationType: {
          ar: "ملابس أو مبلغ مالي",
          en: "Clothes or money",
          ku: "جلوبەرگ یان پارە",
        },
        amount: 1200000,
        image:
          "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "clothing-2",
        title: {
          ar: "ملابس مدرسية لثلاثة أطفال",
          en: "School uniforms for three children",
          ku: "جلوبەرگی قوتابخانە بۆ سێ منداڵ",
        },
        story: {
          ar: "ثلاثة أطفال من عائلة متعففة يحتاجون إلى ملابس مدرسية حتى يتمكنوا من الاستمرار بالدوام دون إحراج أو انقطاع.",
          en: "Three children from a struggling family need school uniforms to continue attending school with dignity.",
          ku: "سێ منداڵ پێویستیان بە جلوبەرگی قوتابخانە هەیە.",
        },
        need: {
          ar: "ملابس مدرسية وأحذية وحقائب بسيطة.",
          en: "School uniforms, shoes, and basic bags.",
          ku: "جلوبەرگی قوتابخانە، پێڵاو و جانتای سادە.",
        },
        province: { ar: "بابل", en: "Babil", ku: "بابڵ" },
        donationType: {
          ar: "مواد عينية أو مبلغ مالي",
          en: "Goods or money",
          ku: "کەلوپەل یان پارە",
        },
        amount: 900000,
        image:
          "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "clothing-3",
        title: {
          ar: "كسوة عائلة نازحة",
          en: "Clothing for a displaced family",
          ku: "جلوبەرگ بۆ خێزانێکی ئاوارە",
        },
        story: {
          ar: "عائلة نازحة مكونة من خمسة أفراد تحتاج إلى ملابس أساسية بعد انتقالها إلى سكن جديد بظروف صعبة.",
          en: "A displaced family of five needs essential clothing after moving into difficult living conditions.",
          ku: "خێزانێکی ئاوارە پێویستی بە جلوبەرگی بنەڕەتی هەیە.",
        },
        need: {
          ar: "ملابس لجميع أفراد العائلة.",
          en: "Clothes for all family members.",
          ku: "جلوبەرگ بۆ هەموو ئەندامانی خێزان.",
        },
        province: { ar: "صلاح الدين", en: "Salah Al-Din", ku: "سەلاحەدین" },
        donationType: {
          ar: "ملابس جديدة أو مبلغ مالي",
          en: "New clothes or money",
          ku: "جلوبەرگی نوێ یان پارە",
        },
        amount: 1500000,
        image:
          "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1600&auto=format&fit=crop",
      },
    ],
  },

  {
    slug: "furniture",
    color: "#EAF7D7",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop",
    title: { ar: "الأثاث وتجهيز البيوت", en: "Furniture Support", ku: "کەلوپەلی ماڵ" },
    short: {
      ar: "أسِرّة، بطانيات، أجهزة بسيطة، وتجهيزات أساسية للبيوت.",
      en: "Beds, blankets, basic appliances, and essential home needs.",
      ku: "جێگا، پەتوو، ئامێری سادە و پێداویستی ماڵ.",
    },
    cases: [
      {
        id: "furniture-1",
        title: {
          ar: "تجهيز غرفة لعائلة محتاجة",
          en: "Preparing a room for a family in need",
          ku: "ئامادەکردنی ژوور بۆ خێزانێکی پێویست",
        },
        story: {
          ar: "عائلة تعيش في بيت بسيط وتحتاج إلى تجهيز غرفة نوم أساسية للأطفال بعد تلف الأثاث القديم.",
          en: "A family living in a simple home needs basic bedroom furniture for children after their old furniture was damaged.",
          ku: "خێزانێک پێویستی بە کەلوپەلی بنەڕەتی ژووری نووستن هەیە.",
        },
        need: {
          ar: "أسرة، فرش، بطانيات، وخزانة صغيرة.",
          en: "Beds, mattresses, blankets, and a small wardrobe.",
          ku: "جێگا، فەرش، پەتوو و دۆڵابێکی بچووک.",
        },
        province: { ar: "بغداد", en: "Baghdad", ku: "بەغدا" },
        donationType: {
          ar: "أثاث أو مبلغ مالي",
          en: "Furniture or money",
          ku: "کەلوپەل یان پارە",
        },
        amount: 2500000,
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "furniture-2",
        title: {
          ar: "ثلاجة لعائلة متعففة",
          en: "A refrigerator for a struggling family",
          ku: "ساردکەرەوە بۆ خێزانێکی کەم‌داهات",
        },
        story: {
          ar: "عائلة كبيرة لا تمتلك ثلاجة صالحة، مما يصعّب حفظ الطعام والأدوية اليومية.",
          en: "A large family does not have a working refrigerator, making food and medicine storage difficult.",
          ku: "خێزانێکی گەورە ساردکەرەوەی کارا نییە.",
        },
        need: {
          ar: "ثلاجة مستعملة بحالة جيدة أو مبلغ لتوفيرها.",
          en: "A used refrigerator in good condition or money to buy one.",
          ku: "ساردکەرەوەی بەکارهاتووی باش یان پارە.",
        },
        province: { ar: "واسط", en: "Wasit", ku: "واسیت" },
        donationType: {
          ar: "جهاز منزلي أو مبلغ مالي",
          en: "Appliance or money",
          ku: "ئامێری ماڵ یان پارە",
        },
        amount: 800000,
        image:
          "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "furniture-3",
        title: {
          ar: "بطانيات وفرش لعائلة نازحة",
          en: "Blankets and bedding for a displaced family",
          ku: "پەتوو و فەرش بۆ خێزانێکی ئاوارە",
        },
        story: {
          ar: "عائلة نازحة تحتاج إلى فرش وبطانيات أساسية بسبب ظروف السكن الباردة وغير المستقرة.",
          en: "A displaced family needs bedding and blankets due to cold and unstable housing conditions.",
          ku: "خێزانێکی ئاوارە پێویستی بە پەتوو و فەرش هەیە.",
        },
        need: {
          ar: "فرش، بطانيات، وسجاد بسيط.",
          en: "Bedding, blankets, and simple rugs.",
          ku: "فەرش، پەتوو و فەرشی سادە.",
        },
        province: { ar: "الأنبار", en: "Anbar", ku: "ئەنبار" },
        donationType: {
          ar: "مواد عينية أو مبلغ مالي",
          en: "Goods or money",
          ku: "کەلوپەل یان پارە",
        },
        amount: 1100000,
        image:
          "https://images.unsplash.com/photo-1616627561950-9f746e330187?q=80&w=1600&auto=format&fit=crop",
      },
    ],
  },

  {
    slug: "services",
    color: "#DFF4FF",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",
    title: { ar: "التبرع بخدمة", en: "Service Donation", ku: "بەخشینی خزمەتگوزاری" },
    short: {
      ar: "طبابة، محاماة، تعليم، نقل، صيانة، أو أي خدمة نافعة.",
      en: "Medical, legal, teaching, transport, repair, or any useful service.",
      ku: "پزیشکی، یاسایی، فێرکاری، گواستنەوە، چاککردنەوە یان هەر خزمەتێک.",
    },
    cases: [
      {
        id: "services-1",
        title: {
          ar: "استشارة طبية مجانية لحالة مرضية",
          en: "Free medical consultation for a patient",
          ku: "ڕاوێژکاری پزیشکی بێ‌بەرامبەر",
        },
        story: {
          ar: "حالة مرضية تحتاج إلى مراجعة طبيب مختص لتحديد مسار العلاج قبل جمع التبرعات.",
          en: "A patient needs specialist consultation to define the treatment path before fundraising.",
          ku: "نەخۆشێک پێویستی بە ڕاوێژکاری پزیشکی تایبەت هەیە.",
        },
        need: {
          ar: "طبيب مختص أو مركز طبي يقدم استشارة.",
          en: "A specialist doctor or clinic to provide consultation.",
          ku: "پزیشکی تایبەت یان بنکەی پزیشکی.",
        },
        province: { ar: "بغداد", en: "Baghdad", ku: "بەغدا" },
        donationType: {
          ar: "خدمة طبية",
          en: "Medical service",
          ku: "خزمەتی پزیشکی",
        },
        image:
          "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "services-2",
        title: {
          ar: "مساعدة قانونية لعائلة متضررة",
          en: "Legal support for an affected family",
          ku: "پشتگیری یاسایی بۆ خێزانێکی زیانلێکەوتوو",
        },
        story: {
          ar: "عائلة تحتاج إلى استشارة قانونية لتنظيم أوراقها ومعرفة حقوقها بطريقة صحيحة.",
          en: "A family needs legal consultation to organize papers and understand their rights.",
          ku: "خێزانێک پێویستی بە ڕاوێژکاری یاسایی هەیە.",
        },
        need: {
          ar: "محامٍ أو مستشار قانوني يتابع الحالة.",
          en: "A lawyer or legal advisor to follow up.",
          ku: "پارێزەر یان ڕاوێژکاری یاسایی.",
        },
        province: { ar: "ذي قار", en: "Dhi Qar", ku: "زیقار" },
        donationType: {
          ar: "خدمة قانونية",
          en: "Legal service",
          ku: "خزمەتی یاسایی",
        },
        image:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "services-3",
        title: {
          ar: "نقل أثاث لعائلة محتاجة",
          en: "Furniture transport for a family",
          ku: "گواستنەوەی کەلوپەل بۆ خێزانێک",
        },
        story: {
          ar: "عائلة حصلت على أثاث متبرع به لكنها تحتاج إلى وسيلة نقل لإيصاله إلى المنزل.",
          en: "A family received donated furniture but needs transport to deliver it home.",
          ku: "خێزانێک کەلوپەلی بەخشراوی هەیە بەڵام پێویستی بە گواستنەوە هەیە.",
        },
        need: {
          ar: "سيارة حمل أو خدمة نقل.",
          en: "Truck or transport service.",
          ku: "ئۆتۆمبێلی بار یان خزمەتی گواستنەوە.",
        },
        province: { ar: "ميسان", en: "Maysan", ku: "مەیسان" },
        donationType: {
          ar: "خدمة نقل",
          en: "Transport service",
          ku: "خزمەتی گواستنەوە",
        },
        image:
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop",
      },
    ],
  },

  {
    slug: "sponsorship",
    color: "#FFE6DF",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop",
    title: { ar: "الكفالة الشهرية", en: "Monthly Sponsorship", ku: "کەفالەی مانگانە" },
    short: {
      ar: "كفالة طفل، عائلة، طالب، أو حالة مرضية بشكل شهري.",
      en: "Monthly sponsorship for a child, family, student, or patient.",
      ku: "کەفالەی مانگانە بۆ منداڵ، خێزان، قوتابی یان نەخۆش.",
    },
    cases: [
      {
        id: "sponsorship-1",
        title: {
          ar: "كفالة طفل يتيم شهرياً",
          en: "Monthly sponsorship for an orphan child",
          ku: "کەفالەی مانگانە بۆ منداڵێکی بێ‌باوک",
        },
        story: {
          ar: "طفل يتيم يحتاج إلى دعم شهري ثابت يغطي جزءاً من احتياجاته الأساسية من غذاء وتعليم وملابس.",
          en: "An orphan child needs steady monthly support covering food, education, and clothing.",
          ku: "منداڵێکی بێ‌باوک پێویستی بە پشتگیری مانگانەی بەردەوام هەیە.",
        },
        need: {
          ar: "كفالة شهرية لمدة 6 أشهر قابلة للتجديد.",
          en: "Monthly sponsorship for 6 months, renewable.",
          ku: "کەفالەی مانگانە بۆ ٦ مانگ.",
        },
        province: { ar: "بغداد", en: "Baghdad", ku: "بەغدا" },
        donationType: {
          ar: "كفالة شهرية",
          en: "Monthly sponsorship",
          ku: "کەفالەی مانگانە",
        },
        amount: 250000,
        image:
          "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "sponsorship-2",
        title: {
          ar: "كفالة عائلة متعففة",
          en: "Sponsorship for a struggling family",
          ku: "کەفالە بۆ خێزانێکی کەم‌داهات",
        },
        story: {
          ar: "عائلة فقدت مصدر دخلها وتحتاج إلى دعم شهري يساعدها في الغذاء والاحتياجات الأساسية.",
          en: "A family lost its income source and needs monthly support for food and basic needs.",
          ku: "خێزانێک سەرچاوەی داهاتی لەدەستداوە و پێویستی بە پشتگیری مانگانە هەیە.",
        },
        need: {
          ar: "سلة غذائية ودعم شهري أساسي.",
          en: "Food basket and basic monthly support.",
          ku: "سەبەتەی خواردن و پشتگیری مانگانە.",
        },
        province: { ar: "الديوانية", en: "Diwaniyah", ku: "دیوانیە" },
        donationType: {
          ar: "كفالة شهرية أو سلة غذائية",
          en: "Monthly sponsorship or food basket",
          ku: "کەفالە یان سەبەتەی خواردن",
        },
        amount: 400000,
        image:
          "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "sponsorship-3",
        title: {
          ar: "كفالة علاج شهري لمريض",
          en: "Monthly medical sponsorship",
          ku: "کەفالەی چارەسەری مانگانە",
        },
        story: {
          ar: "مريض يحتاج إلى أدوية ومراجعات مستمرة، والكفالة الشهرية تساعده على الاستمرار بالعلاج دون انقطاع.",
          en: "A patient needs regular medicine and follow-up; monthly support helps treatment continue.",
          ku: "نەخۆشێک پێویستی بە دەرمان و بەدواداچوونی بەردەوام هەیە.",
        },
        need: {
          ar: "أدوية ومراجعة شهرية.",
          en: "Monthly medicine and follow-up.",
          ku: "دەرمان و بەدواداچوونی مانگانە.",
        },
        province: { ar: "البصرة", en: "Basra", ku: "بەسرە" },
        donationType: {
          ar: "كفالة علاج شهرية",
          en: "Monthly treatment sponsorship",
          ku: "کەفالەی چارەسەر",
        },
        amount: 300000,
        image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "education",
    color: "#FFF0B8",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop",
    title: { ar: "التعليم والقرطاسية", en: "Education", ku: "خوێندن" },
    short: {
      ar: "حقائب، قرطاسية، أجور دراسة، ودعم طلاب.",
      en: "Bags, stationery, school fees, and student support.",
      ku: "جانتا، نووسینگە، کرێی خوێندن و پشتگیری قوتابی.",
    },
    cases: [
      {
        id: "education-1",
        title: { ar: "حقائب مدرسية لطلاب محتاجين", en: "School bags for students", ku: "جانتا بۆ قوتابیان" },
        story: {
          ar: "مجموعة طلاب من عوائل متعففة يحتاجون إلى حقائب وقرطاسية لبداية العام الدراسي.",
          en: "Students from struggling families need bags and stationery for the school year.",
          ku: "قوتابیانی خێزانە کەم‌داهاتەکان پێویستیان بە جانتا و نووسینگە هەیە.",
        },
        need: { ar: "حقائب وقرطاسية", en: "Bags and stationery", ku: "جانتا و نووسینگە" },
        province: { ar: "نينوى", en: "Nineveh", ku: "نەینەوا" },
        donationType: { ar: "مواد عينية أو مبلغ مالي", en: "Goods or money", ku: "کەلوپەل یان پارە" },
        amount: 3500000,
        image:
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "education-2",
        title: { ar: "دعم أجور دراسة لطالبة", en: "School fee support", ku: "پشتگیری کرێی خوێندن" },
        story: {
          ar: "طالبة متفوقة مهددة بترك الدراسة بسبب عدم قدرة العائلة على دفع الأجور.",
          en: "A high-performing student may leave school because her family cannot pay fees.",
          ku: "قوتابییەکی زیرەک لە مەترسی وازهێنان لە خوێندندایە.",
        },
        need: { ar: "تغطية أجور فصل دراسي", en: "Semester fee support", ku: "کرێی وەرزێکی خوێندن" },
        province: { ar: "كربلاء", en: "Karbala", ku: "کەربەلا" },
        donationType: { ar: "مبلغ مالي", en: "Financial donation", ku: "یارمەتی دارایی" },
        amount: 1200000,
        image:
          "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "education-3",
        title: { ar: "دروس تقوية لطالب يتيم", en: "Tutoring for an orphan student", ku: "وانەی پشتگیری بۆ قوتابی بێ‌باوک" },
        story: {
          ar: "طالب يتيم يحتاج إلى دروس تقوية حتى لا يتأخر عن أقرانه في المدرسة.",
          en: "An orphan student needs tutoring to keep up with school.",
          ku: "قوتابییەکی بێ‌باوک پێویستی بە وانەی پشتگیری هەیە.",
        },
        need: { ar: "دروس تقوية لمدة شهر", en: "One month of tutoring", ku: "وانە بۆ مانگێک" },
        province: { ar: "ديالى", en: "Diyala", ku: "دیالە" },
        donationType: { ar: "خدمة تعليمية أو مبلغ مالي", en: "Teaching service or money", ku: "خزمەتی فێرکاری یان پارە" },
        amount: 500000,
        image:
          "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop",
      },
    ],
  },

  // كرري نفس النمط للأقسام الباقية مؤقتاً
];