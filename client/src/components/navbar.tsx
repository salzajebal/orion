import { Link } from "wouter";
import { Menu, X, Globe, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold tracking-tighter text-primary font-display">
            INFINOX
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-sm font-semibold text-gray-700 hover:text-primary">거래</Link>
          <Link href="#" className="text-sm font-semibold text-gray-700 hover:text-primary">플랫폼</Link>
          <Link href="#" className="text-sm font-semibold text-gray-700 hover:text-primary">파트너</Link>
          <Link href="#" className="text-sm font-semibold text-gray-700 hover:text-primary">학습</Link>
          <Link href="#" className="text-sm font-semibold text-gray-700 hover:text-primary">회사 소개</Link>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Globe className="w-5 h-5" />
          </Button>
          <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white font-bold px-6">
            로그인
          </Button>
          <Button className="rounded-full bg-secondary text-secondary-foreground hover:bg-yellow-400 font-bold px-6">
            회원가입
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
          <Link href="#" className="text-lg font-semibold py-2">거래</Link>
          <Link href="#" className="text-lg font-semibold py-2">플랫폼</Link>
          <Link href="#" className="text-lg font-semibold py-2">파트너</Link>
          <div className="flex flex-col gap-3 mt-4">
            <Button variant="outline" className="w-full rounded-full border-primary text-primary">로그인</Button>
            <Button className="w-full rounded-full bg-secondary text-secondary-foreground font-bold">회원가입</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
