import Image from "next/image";

const features = [
  {
    title: "Write Your Text",
    description: "Type out the exact quote, goal, or daily reminder you want to see on your screen.",
    image: "/Images/Welcomemmockup.png",
  },
  {
    title: "Choose a Font",
    description: "Select from a curated list of clean, minimalist typography to style your text.",
    image: "/Images/Fontmockup.png",
  },
  {
    title: "Select a Background",
    description: "Pick a solid color from our calming palette, or upload your own custom photo.",
    image: "/Images/bgmockup.png",
  },
];

export default function Features() {
  return (
    <section id="process" className="w-full pb-20">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-medium text-white mb-10 tracking-tight">
          Simplicity at the core.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col group">
              {/* Card Container */}
              <div className="bg-[#0D0E12] rounded-2xl aspect-[4/5] relative overflow-hidden border border-gray-800/30 transition-transform duration-500 group-hover:scale-[1.02] flex flex-col">
                
                {/* Image Container - Cropped at the top */}
                <div className="relative w-full flex-1">
                   <div className="absolute top-0 left-0 w-full h-[170%] -translate-y-[35%]">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain object-top"
                    />
                   </div>
                </div>

                {/* Text Content - Now Inside the Frame */}
                <div className="p-8 pt-0 space-y-1 relative z-10">
                  <h3 className="text-2xl font-medium text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
