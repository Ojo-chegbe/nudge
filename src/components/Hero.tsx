import DownloadIcon from "./icons/DownloadIcon";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center pt-20 pb-16 w-full text-center">
      <h1 className="text-5xl md:text-[80px] font-medium tracking-tight text-white mb-10 leading-[1.1]">
        Create text wallpapers <br className="hidden md:block" />
        to keep goals in sight.
      </h1>

      <button className="flex items-center space-x-2 bg-[#0A91FF] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors mb-20 shadow-[0_0_15px_rgba(10,145,255,0.4)]">
        <DownloadIcon className="w-5 h-5" />
        <span>Download app</span>
      </button>

      <div className="w-full relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[1184/779] bg-[#0D0E12] flex items-center justify-center border border-gray-800/30">

        {/* Background Image */}
        <Image
          src="/Images/hero-imagebackground.png"
          alt="Hero background"
          fill
          className="object-cover opacity-80"
          priority
        />

        {/* Mockup Container */}
        <div className="relative w-full h-full flex items-center justify-center z-10">
          {/* Phone Mockup */}
          <Image
            src="/Images/Wallpapermockup.png"
            alt="Wallpaper mockup"
            width={600}
            height={1200}
            className="relative z-10 w-[320px] md:w-[500px] h-auto drop-shadow-2xl"
            priority
          />
        </div>

      </div>
    </section>
  );
}
