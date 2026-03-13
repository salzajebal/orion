import { Link } from "wouter";
import { Menu, X, Globe, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/telegram-cloud-document-4-5881970613953764683_1773374272289.jpg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-4">
          <img src={logoImg} alt="Logo" className="h-10 w-10 md:h-16 md:w-16 rounded-full object-cover" />
          <span className="text-2xl md:text-4xl font-bold tracking-tighter text-primary font-display">SMART HTS</span>
        </Link>


        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            className="rounded-full bg-secondary text-secondary-foreground hover:bg-yellow-400 font-bold px-8 md:px-10 py-3 text-base md:text-lg"
            onClick={() => window.location.href = "https://btqac56x.metaiinvest.pro/"}
          >
            가입하기
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-lg absolute w-full">
          <div className="flex flex-col gap-3">
            <Button 
              className="w-full rounded-full bg-secondary text-secondary-foreground font-bold py-4 text-lg"
              onClick={() => window.location.href = "https://btqac56x.metaiinvest.pro/"}
            >
              가입하기
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
