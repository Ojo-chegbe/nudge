import Link from "next/link";
import Logo from "./icons/Logo";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-6 w-full">
      <Link href="/">
        <Logo className="w-24 md:w-[130px] h-auto" />
      </Link>
      
      <nav className="hidden md:flex items-center space-x-12">
        <Link href="#benefits" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
          Benefits
        </Link>
        <Link href="#process" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
          Process
        </Link>
      </nav>

      <button className="bg-[#0A91FF] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-blue-600 transition-colors">
        Download app
      </button>
    </header>
  );
}
