const cards = [
  {
    number: "01",
    title: "A small reminder. A better standard.",
    description:
      "When your environment keeps pulling you back to your goals, consistency gets easier.",
  },
  {
    number: "02",
    title: "See your goal everywhere you look.",
    description: "Match the mindset you want to build.",
  },
  {
    number: "03",
    title: "Make consistency automatic.",
    description:
      "The more often you see your intention, the easier it is to act on it.",
  },
];

export default function WhyNudge() {
  return (
    <section id="benefits" className="w-full py-20">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
          <h2 className="text-4xl md:text-5xl font-medium text-white max-w-2xl leading-tight tracking-tight">
            Most goals fail <br className="hidden md:block" />
            because they disappear.
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xs font-light">
            Nudge keeps your priorities visible, so you stay connected to the
            person you are trying to become.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#0D0E12] rounded-2xl p-8 flex flex-col justify-between border border-gray-800/30 transition-transform duration-500 hover:scale-[1.02] min-h-[240px]"
            >
              <span className="text-white text-sm font-medium mb-auto">
                {card.number}
              </span>
              <div className="space-y-3 mt-8">
                <h3 className="text-xl font-medium text-white leading-snug">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
