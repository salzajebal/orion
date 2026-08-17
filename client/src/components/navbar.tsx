import logoImg from "@assets/jw_logo.png";

const navLinks = [
  { label: "주요 특징", href: "#features" },
  { label: "거래 종목", href: "#markets" },
  { label: "플랫폼 다운로드", href: "#platforms" },
];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md shadow-sm">
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
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              {label}
            </button>
          ))}
        </div>

        {/* CTA 버튼 */}
        <button
          onClick={() => scrollTo("#platforms")}
          className="hidden rounded-lg bg-[#3a6aa0] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#315b8b] md:inline-flex items-center"
        >
          다운로드
        </button>

        {/* 모바일 햄버거 — 간단 드롭다운 */}
        <details className="group relative md:hidden">
          <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50">
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
