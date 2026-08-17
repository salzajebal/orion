import { Link } from "wouter";
import logoImg from "@assets/jw_logo.png";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <img src={logoImg} alt="JW에셋 Logo" className="h-8 md:h-12 w-auto object-contain" />
        </Link>
      </div>
    </nav>
  );
}
