"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const content = {
  ar: {
    heroTitle: "منظمة السالم الخيرية",
    heroText:
      "منظمة إنسانية غير ربحية أسسها الفنان محمد السالم تخليداً لروح والده الراحل، لتكون مساحة حقيقية للعطاء الإنساني المنظم، وربط الخير بالناس الذين يحتاجونه بكرامة واحترام.",

    aboutTitle: "من نحن",
    aboutText:
      "منظمة السالم الخيرية هي مبادرة إنسانية عراقية تسعى إلى بناء نموذج أكثر وضوحاً وثقة في العمل الخيري. لا نؤمن بأن التبرع مجرد مبلغ مالي ينتهي أثره بعد الدفع، بل نؤمن أن كل مساهمة يجب أن تتحول إلى أثر حقيقي ينعكس على حياة إنسان أو عائلة كاملة.\n\nتأسست المنظمة على فكرة أن الرحمة يمكن أن تكون منظمة، وأن الخير لا يحتاج إلى ضجيج بقدر ما يحتاج إلى صدق وشفافية واحترام للإنسان. لذلك نعمل على دعم الحالات الإنسانية المختلفة بطريقة تحفظ كرامة المستفيد، وتمنح المتبرع الثقة بأن دعمه يصل بالشكل الصحيح.\n\nنحن نطمح إلى خلق مساحة يشعر فيها الناس أن العمل الخيري ليس واجباً ثقيلاً، بل فرصة حقيقية لصناعة فرق ملموس داخل المجتمع.",

    missionTitle: "رسالتنا",
    missionText:
      "رسالتنا أن نعيد بناء الثقة بين الإنسان والعمل الخيري. نريد أن يشعر المتبرع أن مساهمته تذهب إلى مكان واضح ومفهوم، وأن يرى أثر دعمه بشكل حقيقي، بعيداً عن العشوائية أو الاستغلال.\n\nنؤمن أن الإنسان المحتاج لا يجب أن يتحول إلى صورة مؤلمة من أجل الحصول على المساعدة، بل يجب أن يُعامل بكرامة واحترام كاملين. لذلك تعتمد المنظمة على توثيق منظم، ودعم إنساني مدروس، وآلية واضحة لمتابعة الحالات والتأكد من وصول المساعدة بالشكل الصحيح.\n\nهدفنا ليس جمع التبرعات فقط، بل بناء ثقافة إنسانية أعمق داخل المجتمع.",

    visionTitle: "رؤيتنا",
    visionText:
      "نسعى لأن تصبح منظمة السالم نموذجاً عراقياً حديثاً في العمل الإنساني، يعتمد على الشفافية والتنظيم والثقة. نريد أن نخلق منصة يشعر فيها الناس بالأمان عند التبرع، ويشعر فيها المحتاج بالاحترام وليس بالشفقة.\n\nرؤيتنا أن يتحول الخير من مبادرات فردية متفرقة إلى منظومة إنسانية متكاملة، تستخدم الإعلام، والتوثيق، والتكنولوجيا، للوصول إلى أكبر عدد ممكن من الحالات المحتاجة بطريقة أكثر كفاءة وتأثيراً.\n\nكما نطمح إلى أن تكون المنظمة مساحة تلهم الناس للعودة إلى قيمة الرحمة والتكافل الحقيقي داخل المجتمع.",

    goals: [
      "دعم الحالات الإنسانية العاجلة.",
      "مساعدة الأيتام والعوائل المتعففة.",
      "توفير دعم غذائي وصحي وتعليمي.",
      "بناء علاقة ثقة حقيقية مع المتبرعين.",
      "الحفاظ على كرامة المستفيد في جميع مراحل الدعم.",
      "استخدام التوثيق والإعلام لإظهار أثر المساعدة بشكل إنساني.",
    ],

    values: [
      {
        title: "الكرامة",
        text: "نساعد الإنسان بدون استغلال صورته أو تحويل معاناته إلى وسيلة دعائية.",
        icon: <HeartHandshake size={24} />,
      },
      {
        title: "الشفافية",
        text: "كل حالة يتم التعامل معها بطريقة واضحة وقابلة للمتابعة.",
        icon: <ShieldCheck size={24} />,
      },
      {
        title: "المجتمع",
        text: "نؤمن أن الخير يصبح أقوى عندما يتحول إلى ثقافة عامة داخل المجتمع.",
        icon: <Users size={24} />,
      },
      {
        title: "الأثر",
        text: "هدفنا أن يترك كل دعم أثراً حقيقياً ومستداماً في حياة الناس.",
        icon: <Sparkles size={24} />,
      },
    ],
  },

  en: {
    heroTitle: "Al Saleem Charity Organization",
    heroText:
      "A non-profit humanitarian organization founded by artist Mohammed Al Saleem in memory of his late father, dedicated to creating meaningful and transparent humanitarian impact.",

    aboutTitle: "Who We Are",
    aboutText:
      "Al Saleem Charity is an Iraqi humanitarian initiative focused on building a more trustworthy and transparent model for charitable work.\n\nWe believe that donations should not disappear without impact. Every contribution should become real change in the life of a person or a family.\n\nThe organization was founded on the belief that compassion can be organized, and that dignity should always remain at the center of humanitarian work.",

    missionTitle: "Our Mission",
    missionText:
      "Our mission is to rebuild trust between people and charitable work.\n\nWe aim to create a system where donors clearly understand how their support changes lives, while ensuring that beneficiaries are treated with dignity and respect.\n\nWe focus on transparency, organized humanitarian support, and long-term social impact rather than temporary emotional campaigns.",

    visionTitle: "Our Vision",
    visionText:
      "We aspire to become a modern Iraqi humanitarian organization built on transparency, trust, and meaningful impact.\n\nOur vision is to transform charitable work into a sustainable culture supported by media, storytelling, and technology, while protecting the dignity of every beneficiary.",

    goals: [
      "Support urgent humanitarian cases.",
      "Assist orphaned and vulnerable families.",
      "Provide food, medical, and educational aid.",
      "Build trust with donors and communities.",
      "Protect the dignity of beneficiaries.",
      "Show real humanitarian impact through ethical storytelling.",
    ],

    values: [
      {
        title: "Dignity",
        text: "Helping people without exploiting their suffering.",
        icon: <HeartHandshake size={24} />,
      },
      {
        title: "Transparency",
        text: "Clear and organized support processes.",
        icon: <ShieldCheck size={24} />,
      },
      {
        title: "Community",
        text: "Creating a culture of compassion and solidarity.",
        icon: <Users size={24} />,
      },
      {
        title: "Impact",
        text: "Every contribution should create meaningful change.",
        icon: <Sparkles size={24} />,
      },
    ],
  },

  ku: {
    heroTitle: "ڕێکخراوی خێرخوازی سەلام",
    heroText:
      "ڕێکخراوێکی مرۆیی ناحکومی دامەزراوە لەلایەن هونەرمەند محەمەد السەلام بۆ یادی باوکی کۆچی دوایی کردوو.",

    aboutTitle: "دەربارەی ئێمە",
    aboutText:
      "ڕێکخراوی سەلام هەوڵدەدات متمانە و ڕوونی زیاتر بۆ کاری خێرخوازی دروست بکات.\n\nباوەڕمان وایە یارمەتی تەنها پارە نییە، بەڵکو کاریگەرییەکی ڕاستەقینە لە ژیانی خەڵک.",

    missionTitle: "پەیامەکەمان",
    missionText:
      "پەیامەکەمان دروستکردنی متمانەی نوێیە لەنێوان خەڵک و کاری خێرخوازی.\n\nدەمانەوێت پشتگیری بە شێوەیەکی ڕێکخراو و بەڕێز بگات بە پێویستەکان.",

    visionTitle: "بینینمان",
    visionText:
      "ئامانجمان ئەوەیە ببین بە نموونەیەکی نوێی کاری مرۆیی لە عێراق، پشت بە شەفافیەت و کاریگەری ببەستێت.",

    goals: [
      "یارمەتیدانی دۆخە مرۆییە خێراکان.",
      "پشتیوانی لە هەتیوان و خێزانە هەژارەکان.",
      "دابینکردنی یارمەتی تەندروستی و خواردن.",
      "پاراستنی کرامەتی سوودمەند.",
    ],

    values: [
      {
        title: "کرامەت",
        text: "یارمەتیدانی خەڵک بە ڕێزەوە.",
        icon: <HeartHandshake size={24} />,
      },
      {
        title: "شەفافیەت",
        text: "کارکردنی ڕوون و ڕێکخراو.",
        icon: <ShieldCheck size={24} />,
      },
      {
        title: "کۆمەڵگا",
        text: "دروستکردنی ڕۆحی هاوکاری.",
        icon: <Users size={24} />,
      },
      {
        title: "کاریگەری",
        text: "هەر پشتگیرییەک دەبێت کاریگەری هەبێت.",
        icon: <Sparkles size={24} />,
      },
    ],
  },
};

export default function AboutStoryPage({
  locale = "ar",
}: {
  locale?: "ar" | "en" | "ku";
}) {
  const t = content[locale];

  return (
    <main className="overflow-hidden bg-[#071726] text-white">
      {/* HERO */}
      <section className="relative h-[65vh] w-full overflow-hidden">
        <img
          src="/about-main.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#071726]/75" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-16 md:px-10">
          <div className="max-w-3xl">
            <span className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur">
              AL SALEEM CHARITY
            </span>

            <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
              {t.heroTitle}
            </h1>

            <p className="max-w-2xl text-lg leading-9 text-white/80 md:text-xl">
              {t.heroText}
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative px-6 py-20 md:px-10">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/about-main.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/about-main.jpg"
              alt=""
              className="h-[520px] w-full rounded-[36px] object-cover shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-4 inline-block text-sm font-bold tracking-[0.3em] text-[#8B5CF6]">
              AL SALEEM CHARITY
            </span>

            <h2 className="mb-8 text-4xl font-black md:text-6xl">
              {t.aboutTitle}
            </h2>

            <p className="whitespace-pre-line text-lg leading-10 text-white/75">
              {t.aboutText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-white px-6 py-20 text-[#071726] md:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2">
          <div>
            <span className="mb-4 inline-block text-sm font-bold tracking-[0.3em] text-[#8B5CF6]">
              OUR MISSION
            </span>

            <h2 className="mb-8 text-4xl font-black md:text-6xl">
              {t.missionTitle}
            </h2>

            <p className="whitespace-pre-line text-lg leading-10 text-black/70">
              {t.missionText}
            </p>
          </div>

          <div>
            <img
              src="/about-main.jpg"
              alt=""
              className="h-[560px] w-full rounded-[36px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/about-main.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-[#0B2238]/90 p-10 backdrop-blur">
          <span className="mb-4 inline-block text-sm font-bold tracking-[0.3em] text-[#FFD32A]">
            OUR VISION
          </span>

          <h2 className="mb-8 text-4xl font-black md:text-6xl">
            {t.visionTitle}
          </h2>

          <p className="whitespace-pre-line text-lg leading-10 text-white/75">
            {t.visionText}
          </p>
        </div>
      </section>

     {/* GOALS */}
<section className="bg-white px-4 py-10 text-[#071726] md:px-10 md:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="mb-8 text-right md:mb-12">
      <span className="mb-3 inline-block text-[11px] font-bold tracking-[0.25em] text-[#5B2BD8] md:text-sm">
        AL SALEEM GOALS
      </span>

      <h2 className="text-3xl font-black leading-tight md:text-6xl">
        أهداف المنظمة
      </h2>
    </div>

    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
      {t.goals.map((goal, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: index * 0.04 }}
          viewport={{ once: true }}
          className="rounded-[22px] border border-black/5 bg-[#F5F7FA] p-4 shadow-sm md:rounded-[28px] md:p-6"
        >
          <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFD32A] text-sm font-black text-[#071726] md:h-11 md:w-11">
            {index + 1}
          </div>

          <p className="text-right text-[13px] font-bold leading-6 text-[#071726]/80 md:text-base md:leading-8">
            {goal}
          </p>
        </motion.div>
      ))}
    </div>

    <div className="mt-6 overflow-hidden rounded-[26px] md:mt-10 md:rounded-[36px]">
      <img
        src="/about-main.jpg"
        alt="Al Saleem Charity Goals"
        className="h-[180px] w-full object-cover md:h-[420px]"
      />
    </div>
  </div>
</section>

      {/* VALUES */}
<section className="px-4 py-10 md:px-10 md:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="mb-8 md:mb-14">
      <span className="mb-3 inline-block text-[11px] font-bold tracking-[0.25em] text-[#8B5CF6] md:text-sm">
        OUR VALUES
      </span>

      <h2 className="text-3xl font-black leading-tight md:text-6xl">
        ما الذي نؤمن به؟
      </h2>
    </div>

    {/* MOBILE = 2 CARDS */}
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
      {t.values.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: index * 0.05 }}
          className="
            rounded-[24px]
            border border-white/10
            bg-[#0B1E31]
            p-4
            md:rounded-[32px]
            md:p-8
          "
        >
          {/* ICON */}
          <div
            className="
              mb-4
              flex h-11 w-11
              items-center justify-center
              rounded-2xl
              bg-white/5
              text-[#FFD32A]
              md:mb-6
              md:h-14 md:w-14
            "
          >
            {item.icon}
          </div>

          {/* TITLE */}
          <h3
            className="
              mb-2
              text-lg
              font-black
              leading-tight
              md:mb-4
              md:text-2xl
            "
          >
            {item.title}
          </h3>

          {/* TEXT */}
          <p
            className="
              text-[13px]
              leading-6
              text-white/70
              md:text-base
              md:leading-8
            "
          >
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    </main>
  );
}