import Image from "next/image";

export default function Psychology() {
  return (
    <section className="w-full pb-16">
      {/* Separator / Sub-header - Aligned with container */}
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 py-12">
        <h2 className="text-3xl md:text-[40px] font-medium leading-tight text-white opacity-90 max-w-3xl">
          A simple way to stay focused on your goals, reinforce better habits, and keep your attention on what actually matters.
        </h2>
      </div>

      {/* Main Psychology Content - Full Width Background */}
      <div className="w-full bg-[#030406] py-16 md:py-20">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-2 text-left">
            <h3 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight">
              The Psychology of Nudge.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md font-light">
              Inspiration fades but discipline remains. Nudge is a tool to protect your focus. By setting intentional thoughts on a clean background, it creates a strict visual cue that anchors your mindset. It is built to reinforce your commitment and fortify your daily decisions before you engage with the digital world.
            </p>
          </div>
          
          <div className="flex-1 w-full aspect-[4/3] md:aspect-square relative rounded-2xl overflow-hidden bg-[#0D0E12] border border-gray-800/30 flex items-center justify-center p-4">
            <div className="relative w-full h-full">
              <Image
                src="/Images/psychology.png"
                alt="Psychology of Nudge"
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
