import { ArrowUpRight, ChevronDown, Download, Mail, Menu, Phone, ShieldCheck, X } from "lucide-react";
import { useState } from "react";

const stats = [
  { value: "10만+", label: "함께하는 회원" },
  { value: "24/5", label: "글로벌 마켓" },
  { value: "99.9%", label: "플랫폼 안정성" },
];

const features = [
  {
    no: "01",
    title: "시장을 읽는\n새로운 기준",
    body: "실시간 글로벌 시세와 정교한 분석 도구를 한 화면에 담았습니다. 복잡한 시장의 흐름을 더 선명하게 바라보세요.",
    quote: "정보의 속도가\n기회의 크기를 결정합니다.",
  },
  {
    no: "02",
    title: "빠르고 정확한\n실행",
    body: "찰나의 판단을 놓치지 않도록 설계한 주문 시스템. 직관적인 인터페이스와 안정적인 체결로 트레이딩에 집중합니다.",
    quote: "결정은 짧게,\n실행은 확실하게.",
  },
  {
    no: "03",
    title: "글로벌 시장을\n한 곳에서",
    body: "지수, 통화, 에너지, 금속까지. 세계 주요 거래소의 다양한 해외선물 상품을 JW에셋 플랫폼에서 만나보세요.",
    quote: "세계의 흐름이\n당신의 화면 안에.",
  },
  {
    no: "04",
    title: "안심을 설계한\n트레이딩",
    body: "보안과 시스템 안정성을 최우선으로 두었습니다. 매 순간 신뢰할 수 있는 환경을 만드는 것이 우리의 원칙입니다.",
    quote: "신뢰는 숫자로\n증명되어야 합니다.",
  },
];

export default function VariantB() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-800 selection:bg-[#3a6aa0] selection:text-white">
      <section
        id="home"
        className="relative min-h-screen overflow-hidden border-t-[3px] border-slate-800 bg-white"
        style={{
          backgroundImage:
            "linear-gradient(#3a6aa015 1px, transparent 1px), linear-gradient(90deg, #3a6aa015 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      >
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-12">
          <a href="#home" aria-label="JW에셋 홈">
            <img src="/__mockup/images/jw_logo.png" alt="JW에셋" className="h-9 w-auto object-contain" />
          </a>
          <div className="hidden items-center gap-9 text-[11px] font-semibold tracking-[0.18em] text-slate-600 md:flex">
            <a href="#why" className="transition-colors hover:text-[#3a6aa0]">WHY JW에셋</a>
            <a href="#features" className="transition-colors hover:text-[#3a6aa0]">FEATURES</a>
            <a href="#start" className="transition-colors hover:text-[#3a6aa0]">START</a>
            <a href="#start" className="flex items-center gap-1 text-[#2c5a8c]">플랫폼 시작하기 <ArrowUpRight size={14} /></a>
          </div>
          <button
            type="button"
            className="text-slate-700 md:hidden"
            aria-label="메뉴 열기"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="absolute right-5 top-20 z-20 w-56 border border-slate-200 bg-white p-5 shadow-xl md:hidden">
            <div className="flex flex-col gap-5 text-xs font-semibold tracking-widest">
              <a href="#why" onClick={() => setMenuOpen(false)}>WHY JW에셋</a>
              <a href="#features" onClick={() => setMenuOpen(false)}>FEATURES</a>
              <a href="#start" onClick={() => setMenuOpen(false)}>START</a>
            </div>
          </div>
        )}

        <div className="relative mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-10 px-6 pb-16 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12 lg:pb-28">
          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
            <div className="relative flex h-[280px] w-full items-center justify-center lg:h-[410px] lg:justify-start">
              <div className="absolute h-[225px] w-[225px] rounded-full border border-[#3a6aa040] lg:h-[350px] lg:w-[350px]" />
              <div className="absolute h-[175px] w-[175px] rounded-full border border-dashed border-[#3a6aa040] lg:h-[285px] lg:w-[285px]" />
              <img src="/__mockup/images/jw_symbol.png" alt="JW에셋 심볼" className="relative z-10 h-[210px] w-[210px] object-contain lg:h-[350px] lg:w-[350px]" />
            </div>
            <p className="mt-5 text-[10px] font-bold tracking-[0.42em] text-[#3a6aa0]">JW ASSETS CO., LTD.</p>
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-7 text-[10px] font-semibold tracking-[0.35em] text-[#3a6aa0]">GLOBAL FUTURES PLATFORM / 2024</p>
            <h1 className="font-serif text-[clamp(2.8rem,6vw,6.5rem)] font-medium leading-[0.98] tracking-[-0.055em] text-slate-800">
              JW에셋으로 거래하는<br />
              <span className="text-[#3a6aa0]">새로운 안목</span>
            </h1>
            <p className="mt-8 max-w-xl text-sm leading-7 text-slate-500 md:text-base">
              글로벌 금융 시장에서 앞서가는 JW에셋.<br className="hidden md:block" />
              혁신적인 트레이딩 플랫폼으로 투자를 한 차원 높이십시오
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#start" className="inline-flex items-center gap-3 bg-[#1e293b] px-6 py-4 text-xs font-bold tracking-wider text-white transition-colors hover:bg-[#3a6aa0]">
                플랫폼 다운로드 <ArrowUpRight size={15} />
              </a>
              <a href="#why" className="inline-flex items-center gap-3 border border-slate-400 px-7 py-4 text-xs font-bold tracking-wider text-slate-700 transition-colors hover:border-[#3a6aa0] hover:text-[#3a6aa0]">
                소개 <ChevronDown size={14} />
              </a>
            </div>
            <div className="mt-14 grid max-w-xl grid-cols-3 border-t border-slate-300 pt-5">
              {stats.map((stat) => (
                <div key={stat.value} className="border-r border-slate-300 pl-3 first:pl-0 last:border-0">
                  <p className="font-serif text-2xl text-[#3a6aa0] md:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-[10px] tracking-wide text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="min-h-screen border-t-[3px] border-slate-800 bg-white px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[180px_1fr]">
          <div className="flex items-start gap-4 lg:block">
            <p className="text-[11px] font-bold tracking-[0.3em] text-[#3a6aa0] lg:rotate-180 lg:[writing-mode:vertical-rl]">WHY JW에셋</p>
            <div className="mt-0 h-px w-20 bg-slate-300 lg:mt-8 lg:h-20 lg:w-px" />
            <p className="hidden pt-5 text-xs leading-6 text-slate-400 lg:block">더 나은 판단을<br />위한 기준</p>
          </div>
          <div>
            <div className="mb-16 flex items-end justify-between border-b-2 border-slate-800 pb-8">
              <h2 className="font-serif text-4xl leading-tight tracking-tight text-slate-800 md:text-6xl">숫자로 증명하는<br /><span className="text-[#3a6aa0]">JW에셋의 기준</span></h2>
              <span className="hidden text-xs text-slate-400 md:block">01 — 04</span>
            </div>
            <div className="grid grid-cols-2 divide-x divide-slate-200 md:grid-cols-4">
              {[
                ["10만+", "누적 회원 수"],
                ["24/5", "글로벌 거래 시간"],
                ["99.9%", "시스템 가동률"],
                ["0.01s", "주문 처리 속도"],
              ].map(([value, label]) => (
                <div key={value} className="px-4 py-7 first:pl-0 md:px-7 md:py-2">
                  <p className="font-serif text-5xl font-bold tracking-[-0.07em] text-[#3a6aa0] md:text-7xl">{value}</p>
                  <p className="mt-4 text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-20 max-w-2xl border-l-2 border-[#3a6aa0] pl-5 text-sm leading-7 text-slate-500">투자의 본질은 정보와 실행의 균형에 있습니다. JW에셋은 시장을 바라보는 시선부터 거래를 완성하는 순간까지, 모든 기준을 다시 설계합니다.</p>
          </div>
        </div>
      </section>

      <section id="features" className="border-t-[3px] border-slate-800 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
          <div className="mb-16 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[11px] font-bold tracking-[0.3em] text-[#3a6aa0]">THE JW DIFFERENCE</p>
              <h2 className="font-serif text-5xl tracking-tight text-slate-800 md:text-7xl">거래의 기준을<br /><span className="text-[#3a6aa0]">다시 씁니다.</span></h2>
            </div>
            <p className="max-w-xs text-xs leading-6 text-slate-500">복잡한 시장을 더 단순하게.<br />확신 있는 결정을 위한 네 가지 설계.</p>
          </div>
          <div className="border-t-2 border-slate-800">
            {features.map((feature, index) => (
              <article key={feature.no} className={`grid gap-8 border-b border-slate-300 py-12 md:grid-cols-[110px_1.1fr_0.8fr] md:gap-12 md:py-16 ${index % 2 ? "md:pl-8" : ""}`}>
                <p className="font-mono text-xs font-bold text-[#3a6aa0]">FEATURE {feature.no}</p>
                <div>
                  <h3 className="whitespace-pre-line font-serif text-4xl leading-[1.05] tracking-tight text-slate-800 md:text-5xl">{feature.title}</h3>
                  <p className="mt-7 max-w-md text-sm leading-7 text-slate-500">{feature.body}</p>
                  <a href="#start" className="mt-7 inline-flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#2c5a8c]">MORE ABOUT THIS <ArrowUpRight size={14} /></a>
                </div>
                <blockquote className="flex items-center border-l border-slate-300 pl-6 font-serif text-2xl leading-tight text-slate-400 md:text-3xl">“<span className="whitespace-pre-line">{feature.quote}</span>”</blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="start" className="min-h-[70vh] border-t-[3px] border-slate-800 bg-white px-6 py-24 lg:px-12 lg:py-36">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          <p className="text-[11px] font-bold tracking-[0.35em] text-[#3a6aa0]">YOUR NEXT MOVE</p>
          <h2 className="mt-7 font-serif text-6xl tracking-[-0.05em] text-slate-800 md:text-8xl">지금 시작하세요</h2>
          <p className="mt-7 max-w-lg text-sm leading-7 text-slate-500">더 넓은 시장, 더 정확한 판단.<br />JW에셋과 함께 새로운 안목으로 거래를 시작해보세요.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="https://smart-trade.kr" className="inline-flex items-center gap-3 bg-[#1e293b] px-7 py-4 text-xs font-bold tracking-wider text-white transition-colors hover:bg-[#3a6aa0]"><Download size={15} /> HTS / MTS 다운로드</a>
            <a href="#features" className="inline-flex items-center gap-3 border border-slate-400 px-8 py-4 text-xs font-bold tracking-wider text-slate-700 hover:border-[#3a6aa0] hover:text-[#3a6aa0]">플랫폼 둘러보기 <ArrowUpRight size={15} /></a>
          </div>
          <div className="mt-20 flex items-center gap-3 text-xs text-slate-400"><ShieldCheck size={16} className="text-[#3a6aa0]" /> 안전하고 신뢰할 수 있는 해외선물 거래 환경</div>
        </div>
      </section>

      <footer className="border-t-4 border-[#3a6aa0] bg-[#1e293b] px-6 py-16 text-slate-300 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <img src="/__mockup/images/jw_logo.png" alt="JW에셋" className="h-8 w-auto brightness-0 invert" />
            <p className="mt-6 max-w-xs text-xs leading-6 text-slate-400">글로벌 금융 시장을 향한<br />더 나은 시선, JW에셋.</p>
            <p className="mt-10 text-[10px] tracking-[0.24em] text-slate-500">JW ASSETS CO., LTD.</p>
          </div>
          <div>
            <p className="mb-5 text-[10px] font-bold tracking-[0.25em] text-[#8db4de]">PLATFORM</p>
            <div className="flex flex-col gap-4 text-xs text-slate-400"><a href="#features" className="hover:text-white">플랫폼 특징</a><a href="#why" className="hover:text-white">JW에셋 소개</a><a href="https://smart-trade.kr" className="hover:text-white">HTS / MTS 다운로드</a></div>
          </div>
          <div>
            <p className="mb-5 text-[10px] font-bold tracking-[0.25em] text-[#8db4de]">CONTACT</p>
            <div className="flex flex-col gap-4 text-xs text-slate-400"><a href="mailto:support@jwassets.co.kr" className="flex items-center gap-2 hover:text-white"><Mail size={14} /> 고객지원 문의</a><a href="tel:1588-0000" className="flex items-center gap-2 hover:text-white"><Phone size={14} /> 1588-0000</a></div>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-7xl flex-col justify-between gap-3 border-t border-slate-700 pt-6 text-[10px] text-slate-500 md:flex-row"><span>© 2024 JW ASSETS CO., LTD. ALL RIGHTS RESERVED.</span><span>투자는 원금 손실의 위험이 있습니다.</span></div>
      </footer>
    </main>
  );
}