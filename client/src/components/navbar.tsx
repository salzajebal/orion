import logoImg from "@assets/jw_logo.png";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "SYSTEM",   href: "#features" },
  { label: "FEATURES", href: "#detail" },
  { label: "PLATFORM", href: "#platforms" },
];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/60 bg-white/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:h-20 md:px-6">
        {/* 로고 */}
        <a href="/" className="flex items-center">
          <img src={logoImg} alt="JW에셋" className="h-8 w-auto object-contain md:h-11" />
        </a>

        {/* 데스크탑 네비 */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  : "text-slate-700 hover:text-[#3a6aa0]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* CTA 버튼 */}
        <button
          onClick={() => scrollTo("#platforms")}
          className={`hidden rounded-lg px-5 py-2.5 text-sm font-bold transition-colors md:inline-flex items-center ${
            scrolled
              ? "bg-[#3a6aa0] text-white hover:bg-[#315b8b]"
              : "border border-[#3a6aa0] text-[#3a6aa0] hover:bg-[#3a6aa0] hover:text-white"
          }`}
        >
          다운로드
        </button>

        {/* 모바일 햄버거 */}
        <details className="group relative md:hidden">
          <summary className={`flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-lg border transition-colors ${
            scrolled ? "border-slate-200 text-slate-600" : "border-slate-400/50 text-slate-700"
          } hover:bg-slate-50`}>
            <svg className="h-5 w-5 group-open:hidden" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className="hidden h-5 w-5 group-open:block" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </summary>
          <div className="absolute right-0 top-11 w-52 rounded-xl border border-slate-200 bg-white py-2 shadow-lg">
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => { scrollTo(href); (document.activeElement as HTMLElement)?.blur(); }}
                className="block w-full px-4 py-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {label}
              </button>
            ))}
            <div className="mx-3 my-2 border-t border-slate-100" />
            <button
              onClick={() => { scrollTo("#platforms"); (document.activeElement as HTMLElement)?.blur(); }}
              className="block w-full px-4 py-2.5 text-left text-sm font-bold text-[#3a6aa0] hover:bg-slate-50"
            >
              다운로드 →
            </button>
          </div>
        </details>
      </div>
    </nav>
  );
}
