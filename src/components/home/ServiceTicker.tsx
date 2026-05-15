const items = [
  "UIUX Design",
  "Brand Identity",
  "Web Development",
  "SEO Optimisation",
  "Generative Engine Optimisation",
  "Logo Design",
  "Digital Strategy",
  "Conversion Optimisation",
];

export default function ServiceTicker() {
  const doubled = [...items, ...items];

  return (
    <section className="border-y border-black/8 bg-white py-5 overflow-hidden">
      <div className="flex w-max animate-ticker gap-0">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-6 px-8"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-[#0a0a0a]">
              {item}
            </span>
            <span className="text-[#ff5c1a] text-lg leading-none select-none">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
