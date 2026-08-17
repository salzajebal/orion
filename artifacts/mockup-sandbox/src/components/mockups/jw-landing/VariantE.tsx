import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  BellRing,
  Check,
  ChevronRight,
  Globe2,
  Layers3,
  LockKeyhole,
  Menu,
  MonitorSmartphone,
  Play,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: TrendingUp,
    metric: "0.01초",
    title: "빠른 주문 실행",
    body: "시장 변동을 놓치지 않도록 설계된 초고속 주문 체결 환경.",
  },
  {
    icon: Globe2,
    metric: "24/5",
    title: "글로벌 시장",
    body: "미국·유럽·아시아 주요 선물 시장을 하나의 화면에서.",
  },
  {
    icon: ShieldCheck,
    metric: "99.9%",
    title: "안정적인 운영",
    body: "중요한 순간에도 흔들림 없는 보안과 서버 인프라.",
  },
  {
    icon: Layers3,
    metric: "한눈에",
    title: "직관적인 분석",
    body: "필요한 정보만 선명하게. 복잡한 시장을 쉽게 읽습니다.",
  },
];

function MiniChart({ light = false }: { light?: boolean }) {
  return (
    <div className={`relative h-64 overflow-hidden rounded-3xl border ${light ? "border-white/15 bg-white/10" : "border-[#dbe8f5] bg-[#f8fbff]"}`}>
      <div className="absolute inset-0 opacity-60" style={{ backgroundImage: `linear-gradient(${light ? "rgba(255,255,255,.12)" : "rgba(58,106,160,.09)"} 1px, transparent 1px), linear-gradient(90deg, ${light ? "rgba(255,255,255,.12)" : "rgba(58,106,160,.09)"} 1px, transparent 1px)`, backgroundSize: "44px 44px" }} />
      <div className="absolute left-5 top-5 flex items-center gap-2 text-xs font-semibold tracking-[0.18em]">
        <span className="h-2 w-2 rounded-full bg-[#7dd3fc]" />
        NASDAQ 100 <span className={light ? "text-blue-100/60" : "text-slate-400"}>· 1D</span>
      </div>
      <div className="absolute right-5 top-5 text-sm font-bold text-[#7dd3fc]">+2.84%</div>
      <svg className="absolute inset-x-4 bottom-5 h-36 w-[calc(100%-2rem)]" viewBox="0 0 500 150" preserveAspectRatio="none" aria-label="상승 차트">
        <defs>
          <linearGradient id={light ? "chartLight" : "chartBlue"} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#7dd3fc" stopOpacity=".38" />
            <stop offset="1" stopColor="#7dd3fc" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 135 L32 128 L60 132 L91 104 L122 112 L156 77 L185 94 L222 69 L254 80 L283 48 L320 67 L347 39 L379 56 L410 21 L441 36 L470 10 L500 18 L500 150 L0 150Z" fill={`url(#${light ? "chartLight" : "chartBlue"})`} />
        <path d="M0 135 L32 128 L60 132 L91 104 L122 112 L156 77 L185 94 L222 69 L254 80 L283 48 L320 67 L347 39 L379 56 L410 21 L441 36 L470 10 L500 18" fill="none" stroke="#7dd3fc" strokeWidth="3" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}

export default function VariantE() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const nav = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fbff] text-[#102b4b]">
      <section id="top" className="relative min-h-screen bg-gradient-to-br from-[#3a6aa0] via-[#2c5a8c] to-[#193b67] text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #bfe7ff 0 1px, transparent 1px), radial-gradient(circle at 80% 70%, #bfe7ff 0 1px, transparent 1px)", backgroundSize: "42px 42px, 76px 76px" }} />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 lg:px-10">
          <nav className="flex items-center justify-between">
            <button onClick={() => nav("top")} className="flex items-center" aria-label="홈으로">
              <img src="/__mockup/images/jw_logo.png" alt="JW에셋" className="w-32 brightness-0 invert sm:w-40" />
            </button>
            <div className="hidden items-center gap-9 text-sm font-medium text-blue-100 md:flex">
              <button onClick={() => nav("why")}>JW에셋</button>
              <button onClick={() => nav("platform")}>플랫폼</button>
              <button onClick={() => nav("download")}>다운로드</button>
              <button onClick={() => nav("footer")} className="rounded-full border border-white/40 px-5 py-2.5 text-white transition hover:bg-white hover:text-[#1e4775]">문의하기</button>
            </div>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴 열기"><Menu /></button>
          </nav>
          {menuOpen && <div className="absolute right-6 top-20 z-20 flex w-48 flex-col gap-4 rounded-2xl border border-white/20 bg-[#1d4775] p-5 text-sm shadow-xl md:hidden"><button onClick={() => nav("why")}>JW에셋</button><button onClick={() => nav("platform")}>플랫폼</button><button onClick={() => nav("download")}>다운로드</button></div>}
          <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-20">
            <div className="max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200/30 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-blue-100"><Sparkles size={14} /> GLOBAL TRADING STANDARD</div>
              <h1 className="text-5xl font-black leading-[1.08] tracking-[-0.05em] sm:text-7xl lg:text-[88px]">JW에셋으로<br />거래하는 <span className="text-[#a9dcff]">새로운 안목</span></h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">글로벌 금융 시장에서 앞서가는 JW에셋.<br className="hidden sm:block" /> 혁신적인 트레이딩 플랫폼으로 투자를 한 차원 높이십시오</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <button onClick={() => nav("download")} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-[#244f7f] transition hover:-translate-y-1"><MonitorSmartphone size={18} /> 플랫폼 다운로드 <ArrowDownRight size={18} /></button>
                <button onClick={() => nav("why")} className="rounded-full border border-white/50 px-7 py-3.5 font-bold text-white transition hover:bg-white/10">소개</button>
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full bg-[#8cd6ff]/20 blur-3xl" />
              <img src="/__mockup/images/jw_symbol.png" alt="JW에셋 심볼" className="relative w-64 drop-shadow-[0_20px_35px_rgba(0,0,0,.25)] sm:w-80" />
              <p className="mt-8 text-sm font-semibold tracking-[0.32em] text-[#a9dcff]">JW ASSETS CO., LTD.</p>
            </div>
          </div>
          <div className="grid max-w-3xl grid-cols-3 gap-2 border-t border-white/20 py-8 sm:gap-4">
            {[["10만+", "회원"], ["24/5", "글로벌"], ["99.9%", "안정성"]].map(([num, label]) => <div key={label} className="rounded-2xl bg-white/15 p-4 backdrop-blur-sm sm:p-5"><p className="text-xl font-black sm:text-3xl">{num}</p><p className="mt-1 text-xs text-blue-100 sm:text-sm">{label}</p></div>)}
          </div>
        </div>
        <div className="absolute -bottom-px left-0 h-20 w-full bg-[#f8fbff]" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      <section id="why" className="min-h-screen bg-[#f8fbff] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl"><span className="rounded-full bg-[#e1effc] px-4 py-2 text-xs font-bold tracking-[0.16em] text-[#2c5a8c]">WHY JW ASSETS</span><h2 className="mt-7 text-4xl font-black tracking-[-0.045em] text-[#102b4b] sm:text-6xl">시장의 속도를<br /><span className="text-[#3a6aa0]">당신의 기준으로.</span></h2><p className="mt-6 text-lg leading-8 text-slate-500">더 빠르게 보고, 더 깊이 분석하고, 더 자신 있게 결정하세요.</p></div>
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map(({ icon: Icon, metric, title, body }, i) => <article key={title} className={`group rounded-2xl border-l-4 border-[#3a6aa0] bg-white p-7 shadow-[0_10px_35px_rgba(45,88,135,.09)] transition hover:-translate-y-1 ${i === 1 ? "sm:translate-y-8" : ""}`}><div className="flex items-start justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e5f2ff] text-[#2c5a8c]"><Icon size={24} /></div><span className="text-3xl font-black tracking-tight text-[#3a6aa0]">{metric}</span></div><h3 className="mt-8 text-xl font-bold">{title}</h3><p className="mt-3 max-w-sm leading-7 text-slate-500">{body}</p><ChevronRight className="mt-6 text-[#a5c8e8] transition group-hover:translate-x-2" /></article>)}
          </div>
        </div>
      </section>

      <section id="platform" className="min-h-screen bg-white px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl space-y-28">
          <div className="grid items-center gap-14 lg:grid-cols-2"><div><span className="text-sm font-bold tracking-[0.18em] text-[#3a6aa0]">01 / READ THE MARKET</span><h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">복잡한 시장을<br />한 장면으로 읽다.</h2><p className="mt-6 max-w-md leading-8 text-slate-500">실시간 호가와 차트를 빠르게 비교하고, 중요한 신호를 놓치지 않도록 필요한 도구를 한곳에 모았습니다.</p><button onClick={() => nav("download")} className="mt-8 inline-flex items-center gap-2 font-bold text-[#2c5a8c]">플랫폼 자세히 보기 <ArrowRight size={18} /></button></div><MiniChart /></div>
          <div className="grid items-center gap-14 rounded-[2.5rem] bg-[#1e3a5f] px-7 py-14 text-white sm:px-14 lg:grid-cols-2 lg:py-20"><MiniChart light /><div className="lg:pl-8"><span className="text-sm font-bold tracking-[0.18em] text-[#8fd7ff]">02 / TRADE WITH CONFIDENCE</span><h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">결정적인 순간,<br />더 단단하게.</h2><p className="mt-6 leading-8 text-blue-100/70">안정적인 체결 환경과 리스크 관리 기능으로 매 순간의 판단에 집중할 수 있습니다.</p><div className="mt-8 grid grid-cols-2 gap-3 text-sm"><div className="rounded-xl border border-white/10 bg-white/5 p-4"><LockKeyhole className="mb-3 text-[#8fd7ff]" size={20} />다중 보안 인증</div><div className="rounded-xl border border-white/10 bg-white/5 p-4"><BellRing className="mb-3 text-[#8fd7ff]" size={20} />실시간 알림</div></div></div></div>
          <div className="grid items-center gap-14 lg:grid-cols-2"><div className="order-2 lg:order-1"><div className="grid grid-cols-2 gap-4"><div className="rounded-3xl bg-[#e6f3ff] p-6"><BarChart3 className="text-[#3a6aa0]" /><p className="mt-14 text-2xl font-black">한눈에</p><p className="mt-2 text-sm text-slate-500">핵심 데이터 요약</p></div><div className="mt-10 rounded-3xl bg-[#2c5a8c] p-6 text-white"><Zap className="text-[#9cddff]" /><p className="mt-14 text-2xl font-black">즉시 반응</p><p className="mt-2 text-sm text-blue-100">빠른 주문 인터페이스</p></div></div></div><div className="order-1 lg:order-2"><span className="text-sm font-bold tracking-[0.18em] text-[#3a6aa0]">03 / MAKE IT YOURS</span><h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">나에게 맞춘<br />트레이딩 루틴.</h2><p className="mt-6 max-w-md leading-8 text-slate-500">모바일과 PC 어디서든 동일한 경험. 나만의 관심 종목과 화면을 저장하고 이어서 거래하세요.</p></div></div>
        </div>
      </section>

      <section id="download" className="relative min-h-[620px] overflow-hidden bg-[#3a6aa0] px-6 py-28 text-white lg:px-10"><img src="/__mockup/images/jw_symbol.png" alt="" className="pointer-events-none absolute -right-28 top-1/2 w-[540px] -translate-y-1/2 opacity-[.09]" /><div className="relative mx-auto max-w-7xl"><span className="rounded-full border border-white/30 px-4 py-2 text-xs font-bold tracking-[0.16em] text-blue-100">START YOUR NEXT MOVE</span><h2 className="mt-8 max-w-3xl text-5xl font-black leading-[1.08] tracking-[-0.05em] sm:text-7xl">다음 거래를 위한<br /><span className="text-[#a9dcff]">새로운 화면.</span></h2><p className="mt-7 max-w-lg text-lg leading-8 text-blue-100">JW에셋의 글로벌 트레이딩 플랫폼을 지금 만나보세요.</p><div className="mt-10 flex flex-wrap gap-3"><button onClick={() => setDownloaded(true)} className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[#244f7f] hover:bg-blue-50"><MonitorSmartphone size={19} /> {downloaded ? "다운로드 준비 완료" : "HTS 다운로드"} <ArrowRight size={18} /></button><button onClick={() => setDownloaded(true)} className="inline-flex items-center gap-2 rounded-full border border-white/60 px-7 py-4 font-bold text-white hover:bg-white/10"><Play size={17} /> 모바일 앱 보기</button></div>{downloaded && <p className="mt-4 text-sm text-[#bce7ff]"><Check className="mr-1 inline" size={15} /> 다운로드 페이지로 이동할 준비가 되었습니다.</p>}</div></section>

      <footer id="footer" className="bg-[#0f172a] px-6 py-16 text-white lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.4fr_1fr_1fr]"><div><img src="/__mockup/images/jw_logo.png" alt="JW에셋" className="w-36 brightness-0 invert" /><p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">글로벌 금융 시장을 더 선명하게 바라보는<br />해외선물 거래 플랫폼, JW에셋.</p></div><div><p className="mb-5 text-xs font-bold tracking-[0.16em] text-blue-300">SERVICE</p><div className="space-y-3 text-sm text-slate-400"><button className="block hover:text-white">플랫폼 안내</button><button className="block hover:text-white">거래 가능 상품</button><button className="block hover:text-white">이용 가이드</button></div></div><div><p className="mb-5 text-xs font-bold tracking-[0.16em] text-blue-300">COMPANY</p><div className="space-y-3 text-sm text-slate-400"><button className="block hover:text-white">회사 소개</button><button className="block hover:text-white">고객센터</button><button className="block hover:text-white">개인정보처리방침</button></div></div></div><div className="flex flex-col justify-between gap-5 pt-8 text-xs leading-6 text-slate-500 sm:flex-row"><p>JW ASSETS CO., LTD. · 서울특별시 강남구 테헤란로</p><p>해외선물 거래에는 원금 초과 손실의 위험이 있습니다. 투자 전 상품 설명서를 반드시 확인하시기 바랍니다.</p></div></div></footer>
    </main>
  );
}