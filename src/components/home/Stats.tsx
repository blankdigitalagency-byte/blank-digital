import AnimatedSection from "@/components/shared/AnimatedSection";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5★", label: "Average Rating" },
  { value: "UK-Wide", label: "Service Coverage" },
];

export default function Stats() {
  return (
    <section className="bg-[#0a0a0a] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <p className="text-4xl font-black text-white sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
