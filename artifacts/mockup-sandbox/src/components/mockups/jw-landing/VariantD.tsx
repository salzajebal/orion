import {
  ArrowUpRight,
  BarChart3,
  ChevronRight,
  Globe2,
  LockKeyhole,
  Menu,
  MousePointer2,
  ShieldCheck,
  X,
} from "lucide-react";
import { useState } from "react";

const gridStyle = {
  backgroundImage:
    "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
  backgroundSize: "48px 48px",
};

const navItems = ["서비스", "플랫폼", "회사소개"];

export default function VariantD() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#1e293b] font-['Montserrat',sans-serif] selection:bg-[#3a6aa0] selection:text-white">
      <section className="relative min-h-screen overflow-hidden" style={gridStyle}>
        <header className="relative z-10 mx-auto flex max-w-[1440px] items-center justify-between px-6 py-7 sm:px-10 lg:px-16">
          <a href="#top" className="block" aria-label="JW에셋 홈">
            <img src="/__mockup/images/jw_logo.png" alt="JW에셋" className="h-auto w-[126px] object-contain" />
          </a>
          <nav className="hidden items-center gap-10 text-[11px] font-semibold tracking-[0.22em] text-slate-600 md:flex">
            {navItems.map((item, index) => (
              <a key={item} href={["#service", "#platform", "#about"][index]} className="transition-colors hover:text-[#3a6aa0]">
                {item}
              </a>
            ))}
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="border border-slate-300 p-2 md:hidden" aria-label="메뉴 열기">
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
          {menuOpen && (
            <div className="absolute right-6 top-[78px] z-20 w-44 border border-slate-300 bg-white p-3 shadow-sm md:hidden">
              {navItems.map((item, index) => (
                <a key={item} href={["#service", "#platform", "#about"][index]} onClick={() => setMenuOpen(false)} className="block border-b border-slate-100 px-3 py-3 text-xs tracking-widest last:border-0">
                  {item}
                </a>
              ))}
            </div>
          )}
        </header>

        <div id="top" className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-[1200px] flex-col items-center justify-center px-6 pb-16 pt-4 text-center sm:px-10">
          <p className="mb-6 text-[10px] font-semibold tracking-[0.48em] text-[#3a6aa0] sm:text-xs">GLOBAL FUTURES TRADING PLATFORM</p>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.08] tracking-[-0.055em] sm:text-7xl lg:text-[88px]">
            JW에셋으로 거래하는
            <br />
            <span className="text-[#3a6aa0]">새로운 안목</span>
          </h1>
          <p className="mt-7 max-w-xl text-sm leading-7 tracking-[-0.01em] text-slate-500 sm:text-base">
            글로벌 금융 시장에서 앞서가는 JW에셋.
            <br className="hidden sm:block" /> 혁신적인 트레이딩 플랫폼으로 투자를 한 차원 높이십시오
          </p>
          <img src="/__mockup/images/jw_symbol.png" alt="JW에셋 심볼" className="my-10 h-[210px] w-[210px] object-contain sm:my-12 sm:h-[280px] sm:w-[280px]" />
          <p className="text-[11px] font-semibold tracking-[0.43em] text-[#3a6aa0]">JW ASSETS CO., LTD.</p>

          <div className="mt-12 grid w-full max-w-2xl grid-cols-3 border-y border-l border-slate-200 bg-white/85">
            {[
              ["10만+", "회원"],
              ["24/5", "글로벌"],
              ["99.9%", "안정성"],
            ].map(([number, label]) => (
              <div key={label} className="border-r border-slate-200 px-2 py-5 sm:px-6 sm:py-6">
                <strong className="block text-xl font-bold tracking-tight text-[#1e293b] sm:text-2xl">{number}</strong>
                <span className="mt-1 block text-[10px] tracking-[0.18em] text-slate-500">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#platform" className="flex items-center justify-center gap-3 bg-[#1e293b] px-8 py-4 text-xs font-semibold tracking-[0.12em] text-white transition-colors hover:bg-[#3a6aa0]">
              플랫폼 다운로드 <ArrowUpRight size={15} />
            </a>
            <a href="#about" className="flex items-center justify-center border border-[#1e293b] px-10 py-4 text-xs font-semibold tracking-[0.12em] transition-colors hover:border-[#3a6aa0] hover:text-[#3a6aa0]">
              소개
            </a>
          </div>
        </div>
        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] tracking-[0.3em] text-slate-400 sm:flex">
          <span className="h-px w-10 bg-slate-300" /> SCROLL TO EXPLORE <span className="h-px w-10 bg-slate-300" />
        </div>
      </section>

      <section id="service" className="min-h-screen bg-[#f8fafc] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col justify-between gap-8 border-b border-slate-200 pb-14 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.5em] text-[#3a6aa0]">THE JW STANDARD</p>
              <h2 className="mt-5 max-w-xl text-3xl font-bold leading-tight tracking-[-0.045em] sm:text-5xl">숫자로 증명하는<br />정밀한 거래 환경</h2>
            </div>
            <p className="max-w-xs text-xs leading-6 text-slate-500">변동성이 큰 시장일수록 기준은 선명해야 합니다. JW에셋은 모든 순간에 같은 원칙을 지킵니다.</p>
          </div>
          <div className="grid grid-cols-2 border-l border-slate-200 md:grid-cols-4">
            {[
              ["01", "15+", "글로벌 거래소 연결"],
              ["02", "0.0", "빠르게 시작하는 수수료"],
              ["03", "24/5", "끊김 없는 시장 접근"],
              ["04", "99.9%", "안정성을 향한 약속"],
            ].map(([index, value, desc]) => (
              <div key={index} className="relative min-h-[230px] border-b border-r border-slate-200 px-5 py-7 sm:px-8 sm:py-10">
                <span className="text-[10px] font-semibold tracking-[0.25em] text-slate-400">{index}</span>
                <strong className="mt-12 block text-5xl font-bold tracking-[-0.06em] text-[#3a6aa0] sm:text-6xl">{value}</strong>
                <span className="mt-3 block text-[10px] tracking-wide text-slate-500">{desc}</span>
              </div>
            ))}
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              [Globe2, "GLOBAL ACCESS", "미국·유럽·아시아 주요 시장을 한 화면에서"],
              [ShieldCheck, "RISK CONTROL", "투자 판단을 돕는 투명한 기준과 보안"],
              [BarChart3, "CLEAR DATA", "복잡함을 덜어낸 직관적인 실시간 시세"],
            ].map(([Icon, title, text]) => (
              <div key={title as string} className="flex gap-4 border-t border-slate-300 pt-5">
                <Icon size={18} strokeWidth={1.5} className="mt-0.5 text-[#3a6aa0]" />
                <div><p className="text-[10px] font-bold tracking-[0.2em]">{title as string}</p><p className="mt-2 text-xs leading-5 text-slate-500">{text as string}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid border-t border-slate-200 py-16 md:grid-cols-2 md:gap-20">
            <div className="max-w-lg">
              <p className="text-right text-[10px] font-semibold tracking-[0.35em] text-[#3a6aa0]">FEATURE 01</p>
              <h2 className="mt-10 text-4xl font-bold leading-[1.12] tracking-[-0.06em] sm:text-6xl">보이는 정보만으로<br />충분하도록.</h2>
              <p className="mt-8 text-sm leading-7 text-slate-500">필요한 정보는 더 가까이, 불필요한 노이즈는 더 멀리. 한눈에 시장의 흐름을 읽고 자신 있게 다음을 선택할 수 있도록 설계했습니다.</p>
            </div>
            <div className="hidden items-center justify-center md:flex">
              <div className="relative h-56 w-56 border border-slate-200 p-5">
                <div className="flex h-full items-end gap-2 border-b border-l border-slate-300 p-5">
                  {[35, 58, 46, 82, 66, 92].map((height, index) => <div key={index} className="flex-1 bg-[#3a6aa0]" style={{ height: `${height}%`, opacity: 0.35 + index * 0.1 }} />)}
                </div>
                <MousePointer2 size={15} className="absolute bottom-10 right-10 text-[#1e293b]" />
              </div>
            </div>
          </div>
          <div className="grid border-y border-slate-200 py-16 md:grid-cols-2 md:gap-20">
            <div className="order-2 hidden md:block" />
            <div className="order-1 md:order-2 max-w-lg">
              <p className="text-[10px] font-semibold tracking-[0.35em] text-[#3a6aa0]">FEATURE 02</p>
              <h2 className="mt-10 text-4xl font-bold leading-[1.12] tracking-[-0.06em] sm:text-6xl">당신의 판단에<br />속도를 더합니다.</h2>
              <p className="mt-8 text-sm leading-7 text-slate-500">빠른 실행과 정확한 체결. 시장이 움직이는 찰나에도 플랫폼은 흔들리지 않아야 합니다.</p>
              <blockquote className="mt-10 border-l-4 border-[#3a6aa0] pl-5 text-sm italic leading-6 text-[#3a6aa0]">“정확한 판단은 단순한 화면에서 시작됩니다.”</blockquote>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="flex min-h-[75vh] items-center justify-center bg-white px-6 py-24 sm:px-10">
        <div className="w-full max-w-[800px] text-center">
          <p className="border-y border-slate-200 py-5 text-[10px] font-semibold tracking-[0.3em] text-[#3a6aa0]">START WITH JW ASSETS</p>
          <h2 className="mt-12 text-4xl font-bold tracking-[-0.06em] sm:text-7xl">다음 거래를<br /><span className="text-[#3a6aa0]">더 선명하게.</span></h2>
          <p className="mx-auto mt-8 max-w-md text-sm leading-7 text-slate-500">JW에셋 플랫폼을 다운로드하고 새로운 기준의 거래를 시작하십시오.</p>
          <a href="https://smart-trade.kr" className="mx-auto mt-10 flex w-fit items-center gap-4 bg-[#1e293b] px-8 py-4 text-xs font-semibold tracking-[0.15em] text-white transition-colors hover:bg-[#3a6aa0]">
            플랫폼 다운로드 <ChevronRight size={15} />
          </a>
          <p className="mt-5 text-[10px] tracking-[0.18em] text-slate-400">HTS / MTS · WINDOWS · MOBILE</p>
        </div>
      </section>

      <footer className="bg-[#1e293b] px-6 py-16 text-slate-300 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <img src="/__mockup/images/jw_logo.png" alt="JW에셋" className="w-[120px] brightness-0 invert" />
              <p className="mt-6 text-[10px] leading-5 tracking-[0.12em] text-slate-400">GLOBAL FUTURES<br />TRADING PLATFORM</p>
            </div>
            {[
              ["SERVICE", "해외선물 거래", "플랫폼 안내", "시장 정보"],
              ["COMPANY", "JW에셋 소개", "인재 채용", "문의하기"],
              ["LEGAL", "이용약관", "개인정보처리방침", "투자 유의사항"],
            ].map(([heading, ...links]) => (
              <div key={heading}><p className="mb-5 text-[10px] font-bold tracking-[0.25em] text-white">{heading}</p>{links.map(link => <a href="#top" key={link} className="mb-3 block text-xs text-slate-400 transition-colors hover:text-white">{link}</a>)}</div>
            ))}
          </div>
          <div className="mt-16 flex flex-col justify-between gap-3 border-t border-slate-600 pt-6 text-[10px] tracking-[0.15em] text-slate-500 sm:flex-row">
            <p>© 2024 JW ASSETS CO., LTD. ALL RIGHTS RESERVED.</p>
            <p>SEOUL · REPUBLIC OF KOREA</p>
          </div>
        </div>
      </footer>
    </main>
  );
}