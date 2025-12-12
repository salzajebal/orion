import { Link } from "wouter";
import { Menu, X, Globe, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/telegram-cloud-photo-size-4-5899834457139645287-m_1765536158470.jpg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src={logoImg} alt="Logo" className="h-12 w-12 rounded-full object-cover" />
          <span className="text-2xl font-bold tracking-tighter text-primary font-display">MT5</span>
        </Link>


        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Globe className="w-5 h-5" />
          </Button>
          <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white font-bold px-6">
            로그인
          </Button>
          <Button 
            className="rounded-full bg-secondary text-secondary-foreground hover:bg-yellow-400 font-bold px-6"
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
            <Button variant="outline" className="w-full rounded-full border-primary text-primary">로그인</Button>
            <Button 
              className="w-full rounded-full bg-secondary text-secondary-foreground font-bold"
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
