import DownloadIcon from "./icons/DownloadIcon";

export default function FooterCTA() {
  return (
    <section className="w-full py-20 flex flex-col items-center justify-center text-center bg-[#030406]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-medium text-white mb-10 tracking-tight leading-tight max-w-2xl mx-auto">
          Take the first step towards <br />
          a more intentional life.
        </h2>
        
        <button className="flex items-center space-x-2 bg-[#0A91FF] text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-blue-600 transition-all hover:scale-105 shadow-[0_0_20px_rgba(10,145,255,0.4)] mx-auto">
          <DownloadIcon className="w-6 h-6" />
          <span>Download app</span>
        </button>
      </div>
    </section>
  );
}
