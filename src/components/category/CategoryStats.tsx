import type { DonationCase } from "@/data/cases";

type Props = {
  cases: DonationCase[];
};

export default function CategoryStats({ cases }: Props) {
  const totalTarget = cases.reduce((sum, item) => sum + item.targetAmount, 0);
  const totalCollected = cases.reduce(
    (sum, item) => sum + item.collectedAmount,
    0
  );
  const urgentCount = cases.filter((item) => item.urgent).length;

  const stats = [
    { label: "عدد الحالات", value: cases.length.toString() },
    { label: "حالات عاجلة", value: urgentCount.toString() },
    { label: "المبلغ المطلوب", value: `$${totalTarget.toLocaleString()}` },
    { label: "تم جمعه", value: `$${totalCollected.toLocaleString()}` },
  ];

  return (
    <section className="bg-[#03150f] px-4 pb-8 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 text-center backdrop-blur"
          >
            <p className="text-2xl font-black text-emerald-200 md:text-4xl">
              {item.value}
            </p>
            <p className="mt-2 text-xs text-white/55 md:text-sm">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}