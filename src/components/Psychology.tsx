import Image from "next/image";

export default function Psychology() {
  return (
    <section className="w-full pb-16">
      {/* Separator / Sub-header - Aligned with container */}
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 py-12">
        <h2 className="text-3xl md:text-[40px] font-medium leading-tight text-white opacity-90 max-w-2xl">
          Your wallpaper isn&apos;t just a background. <br />
          It should serve as your daily Nudge.
        </h2>
      </div>

      {/* Main Psychology Content - Full Width Background */}
      <div className="w-full bg-[#0D0E12] py-16 md:py-20">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-2 text-left">
            <h3 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight">
              The Psychology of Nudge.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md font-light">
              Every time you wake your screen, you make a choice. A nudge is not about productivity. It is about perspective. By creating wallpapers that place intentional thoughts directly on a clean background, Nudge provides passive reinforcement of what matters most. It is built to ground you before the digital chaos begins.
            </p>
          </div>
          
          <div className="flex-1 w-full aspect-[4/3] md:aspect-square relative rounded-2xl overflow-hidden bg-[#0A91FF] flex items-center justify-center p-4">
            <div className="relative w-full h-full">
              <Image
                src="/Images/Fontmockup.png"
                alt="Font mockup"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
