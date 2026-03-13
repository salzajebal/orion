import { Link } from "wouter";
import logoImg from "@assets/telegram-cloud-document-4-5881970613953764683_1773374272289.jpg";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 md:gap-4">
          <img src={logoImg} alt="Logo" className="h-10 w-10 md:h-16 md:w-16 rounded-full object-cover" />
          <span className="text-2xl md:text-4xl font-bold tracking-tighter text-slate-800 font-display">SMART</span>
        </Link>
      </div>
    </nav>
  );
}
