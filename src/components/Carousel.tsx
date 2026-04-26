import Image from "next/image";

const wallpapers = [
  "/Images/wallpaper1.png",
  "/Images/wallpaper2.png",
  "/Images/wallpaper3.png",
  "/Images/wallpaper4.png",
  // Repeat for seamless scroll
  "/Images/wallpaper1.png",
  "/Images/wallpaper2.png",
  "/Images/wallpaper3.png",
  "/Images/wallpaper4.png",
];

export default function Carousel() {
  return (
    <section className="w-full py-20 overflow-hidden bg-[#030406]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 mb-10">
        <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
          Made with Nudge
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-light">
          A selection of environments crafted by users. Each piece is designed to anchor the mind and elevate the daily digital experience.
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Infinite Scroll Container */}
        <div className="flex animate-scroll hover:[animation-play-state:paused] gap-6 px-3">
          {wallpapers.map((src, index) => (
            <div 
              key={index} 
              className="relative w-[280px] md:w-[350px] aspect-[9/16] flex-shrink-0 rounded-2xl overflow-hidden"
            >
              <Image
                src={src}
                alt={`Community Wallpaper ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 280px, 350px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
