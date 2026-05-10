import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CategoryHero from "@/components/category/CategoryHero";
import CategoryStats from "@/components/category/CategoryStats";
import CasesGrid from "@/components/category/CasesGrid";
import { categories, type CategorySlug } from "@/data/categories";
import { cases } from "@/data/cases";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  if (!(slug in categories)) {
    notFound();
  }

  const category = categories[slug as CategorySlug];
  const categoryCases = cases.filter((item) => item.category === category.slug);

  return (
    <main dir="rtl" className="min-h-screen bg-[#03150f] text-white">
      <Navbar />

      <CategoryHero category={category} />

      <CategoryStats cases={categoryCases} />

      <CasesGrid cases={categoryCases} />
      <section className="bg-[#eef8f2] px-4 py-16 text-[#082116] md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
         
        
        </div>
      </section>

      <Footer />
    </main>
  );
}