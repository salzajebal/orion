import { ArrowDownRight, ArrowUpRight, BarChart3, ChevronRight, Clock3, Download, Globe2, Layers3, LockKeyhole, Menu, MousePointer2, ShieldCheck, Sparkles, TrendingUp, X } from "lucide-react";
import { useState } from "react";

const markets = [
  { symbol: "NQ", name: "Nasdaq 100", value: "18,442.25", change: "+0.82%", positive: true },
  { symbol: "GC", name: "Gold Futures", value: "2,384.60", change: "+0.31%", positive: true },
  { symbol: "CL", name: "Crude Oil", value: "78.42", change: "-0.47%", positive: false },
  { symbol: "6E", name: "Euro FX", value: "1.0842", change: "+0.18%", positive: true },
];

function MarketPanel({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-[26px] border border-white/15 bg-[#10284c]/80 p-4 shadow-2xl shadow-[#051021]/50 backdrop-blur-xl ${compact ? "" : "min-h-[370px]"}`}>
      <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <img src="/__mockup/images/jw_symbol.png" className="h-7 w-7 object-contain" alt="" />
          <span className="text-sm font-semibold tracking-wide text-white">JW TRADE</span>
          <span className="rounded-full bg-[#60a5fa]/15 px-2 py-0.5 text-[9px] font-bold text-[#93c5fd]">LIVE</span>
        </div>
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-rose-300/70" /><span className="h-2 w-2 rounded-full bg-amber-300/70" /><span className="h-2 w-2 rounded-full bg-emerald-300/70" />
        </div>
      </div>
      <div className="mb-4 flex items-end justify-between">
        <div><p className="text-[10px] uppercase tracking-[0.22em] text-white/40">Portfolio value</p><p className="mt-1 text-2xl font-semibold tracking-tight text-white">$248,691<span className="text-base text-white/40">.20</span></p></div>
        <span className="rounded-lg bg-emerald-400/10 px-2 py-1 text-xs text-emerald-300">+4.82%</span>
      </div>
      <div className="mb-5 flex h-16 items-end gap-1.5 border-b border-white/10 pb-0">
        {[22, 34, 28, 48, 39, 52, 45, 60, 49, 67, 57, 76, 65, 82, 73, 88, 79, 94, 88, 100].map((h, i) => <span key={i} style={{ height: `${h}%` }} className={`w-full rounded-t-sm ${i > 12 ? "bg-[#60a5fa]" : "bg-[#60a5fa]/35"}`} />)}
      </div>
      <div className="grid grid-cols-[1.2fr_1fr_0.8fr] gap-3 px-1 text-[9px] uppercase tracking-wider text-white/35"><span>Instrument</span><span>Last price</span><span className="text-right">Change</span></div>
      <div className="mt-2 space-y-1">
        {markets.map((market) => <div key={market.symbol} className="grid grid-cols-[1.2fr_1fr_0.8fr] items-center gap-3 rounded-xl px-1 py-2.5 text-xs hover:bg-white/5"><span className="flex items-center gap-2 text-white/80"><b className="grid h-6 w-6 place-items-center rounded-md bg-white/10 text-[9px] text-[#93c5fd]">{market.symbol}</b>{market.name}</span><span className="font-mono text-white/75">{market.value}</span><span className={`text-right ${market.positive ? "text-emerald-300" : "text-rose-300"}`}>{market.change}</span></div>)}
      </div>
    </div>
  );
}

export default function VariantC() {
  const [menu, setMenu] = useState(false);
  const [notice, setNotice] = useState("");
  const action = (message: string) => { setNotice(message); window.setTimeout(() => setNotice(""), 2500); };
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f2044] to-[#0a1628] font-sans text-white selection:bg-[#60a5fa]/40">
      {notice && <div className="fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-full border border-white/20 bg-[#19345c]/95 px-5 py-3 text-sm text-white shadow-xl backdrop-blur-xl">{notice}</div>}
      <section className="relative min-h-screen">
        <div className="pointer-events-none absolute -left-40 top-24 h-[520px] w-[520px] rounded-full bg-[#3a6aa0]/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-180px] top-[-140px] h-[600px] w-[600px] rounded-full bg-[#2563eb]/10 blur-[130px]" />
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
          <a href="#top" className="flex items-center gap-3"><img src="/__mockup/images/jw_logo.png" alt="JW에셋" className="h-9 w-auto brightness-0 invert" /></a>
          <div className="hidden items-center gap-9 text-sm text-white/60 md:flex"><a href="#edge" className="transition hover:text-white">Our edge</a><a href="#platform" className="transition hover:text-white">Platform</a><a href="#download" className="transition hover:text-white">Download</a></div>
          <button onClick={() => setMenu(!menu)} className="rounded-full border border-white/15 p-2 text-white md:hidden" aria-label="메뉴">{menu ? <X size={18} /> : <Menu size={18} />}</button>
        </nav>
        {menu && <div className="absolute right-6 top-20 z-20 flex flex-col gap-4 rounded-2xl border border-white/15 bg-[#10284c] p-5 text-sm text-white/75 shadow-xl md:hidden"><a href="#edge" onClick={() => setMenu(false)}>Our edge</a><a href="#platform" onClick={() => setMenu(false)}>Platform</a><a href="#download" onClick={() => setMenu(false)}>Download</a></div>}
        <div id="top" className="relative z-10 mx-auto grid min-h-[calc(100vh-92px)] max-w-7xl items-center gap-14 px-6 pb-16 pt-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:pt-0">
          <div className="max-w-xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#60a5fa]/25 bg-[#60a5fa]/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#93c5fd]"><Sparkles size={13} /> A clearer view of global markets</div>
            <h1 className="text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl lg:text-[76px]">JW에셋으로 거래하는<br /><span className="text-[#60a5fa]">새로운 안목</span></h1>
            <p className="mt-7 max-w-lg text-base leading-8 text-white/55">글로벌 금융 시장에서 앞서가는 JW에셋. 혁신적인 트레이딩 플랫폼으로 투자를 한 차원 높이십시오</p>
            <div className="mt-9 flex flex-wrap gap-3"><button onClick={() => action("다운로드 링크를 준비하고 있습니다.")} className="group flex items-center gap-2 rounded-full bg-[#60a5fa] px-6 py-3.5 text-sm font-semibold text-[#08162c] transition hover:bg-[#93c5fd]">플랫폼 다운로드 <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button><a href="#edge" className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">소개</a></div>
            <div className="mt-16 grid max-w-lg grid-cols-3 gap-2">
              {[["10만+", "회원"], ["24/5", "글로벌"], ["99.9%", "안정성"]].map(([value, label]) => <div key={label} className="rounded-2xl border border-white/15 bg-white/10 px-3 py-4 backdrop-blur-md"><p className="text-xl font-semibold text-white">{value}</p><p className="mt-1 text-[11px] tracking-wide text-white/45">{label}</p></div>)}
            </div>
          </div>
          <div className="relative flex min-h-[500px] items-center justify-center">
            <div className="absolute h-[390px] w-[390px] rounded-full border border-[#60a5fa]/15 shadow-[0_0_100px_rgba(96,165,250,0.12)] sm:h-[500px] sm:w-[500px]" />
            <div className="absolute h-[270px] w-[270px] rounded-full border border-white/10 sm:h-[360px] sm:w-[360px]" />
            <img src="/__mockup/images/jw_symbol.png" alt="JW에셋 심볼" className="relative z-10 h-[220px] w-[220px] object-contain drop-shadow-[0_25px_45px_rgba(96,165,250,0.3)] sm:h-[330px] sm:w-[330px]" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium tracking-[0.48em] text-[#60a5fa]">JW ASSETS CO., LTD.</div>
          </div>
        </div>
      </section>

      <section id="edge" className="relative min-h-screen border-t border-white/10 px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-4 text-[11px] font-bold tracking-[0.3em] text-[#60a5fa]">OUR PERFORMANCE</p><h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">더 선명하게 보고,<br /><span className="text-white/40">더 빠르게 움직입니다.</span></h2></div><p className="max-w-xs text-sm leading-7 text-white/45">매 순간 변하는 글로벌 시장에서 판단의 기준이 되는 기술과 안정성을 제공합니다.</p></div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[{ icon: <Globe2 />, val: "24 / 5", title: "글로벌 마켓 접근", desc: "주요 해외선물 시장을 하나의 시선으로." }, { icon: <TrendingUp />, val: "0.01s", title: "빠른 실행 속도", desc: "기회를 놓치지 않는 정밀한 주문 처리." }, { icon: <ShieldCheck />, val: "99.9%", title: "안정적인 인프라", desc: "언제나 연결되는 트레이딩 환경." }, { icon: <Layers3 />, val: "ONE", title: "통합 플랫폼", desc: "분석부터 주문, 리스크 관리까지 한 곳에서." }].map((item) => <div key={item.title} className="group min-h-[260px] rounded-[26px] border border-white/15 bg-white/10 p-7 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15"><div className="mb-14 flex items-center justify-between"><span className="text-[#93c5fd]">{item.icon}</span><ArrowUpRight size={18} className="text-white/25 transition group-hover:text-white" /></div><p className="text-3xl font-semibold text-white">{item.val}</p><h3 className="mt-3 text-sm font-medium text-white">{item.title}</h3><p className="mt-2 text-xs leading-6 text-white/45">{item.desc}</p></div>)}</div>
        </div>
      </section>

      <section id="platform" className="min-h-screen border-t border-white/10 px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20"><p className="mb-4 text-[11px] font-bold tracking-[0.3em] text-[#60a5fa]">THE JW EXPERIENCE</p><h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">투자의 순간마다,<br /><span className="text-[#60a5fa]">정교한 도구를.</span></h2></div>
          <div className="space-y-24">
            {[{ n: "01", title: "시장을 읽는\n더 깊은 시선", desc: "실시간 차트와 핵심 지표를 한 화면에 담아 시장의 흐름을 놓치지 않습니다.", side: "left" }, { n: "02", title: "결정에서 실행까지\n끊김 없이", desc: "직관적인 주문 화면과 빠른 체결로 생각한 전략을 정확하게 실행합니다.", side: "right" }, { n: "03", title: "나만의 리듬으로\n관리하는 포트폴리오", desc: "한눈에 들어오는 손익과 포지션 현황. 투자에 필요한 정보만 간결하게.", side: "left" }, { n: "04", title: "안심을 설계한\n보안 시스템", desc: "고객의 자산과 데이터를 최우선으로 생각하는 다층 보안 아키텍처.", side: "right" }].map((item) => <div key={item.n} className={`grid items-center gap-12 lg:grid-cols-2 ${item.side === "right" ? "lg:[&>div:first-child]:order-2" : ""}`}><div className="max-w-md"><p className="mb-8 font-mono text-5xl text-[#60a5fa]/60">{item.n}</p><h3 className="whitespace-pre-line text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">{item.title}</h3><p className="mt-5 leading-7 text-white/45">{item.desc}</p><a href="#download" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#93c5fd]">자세히 보기 <ChevronRight size={15} /></a></div><MarketPanel compact={item.n !== "01"} /></div>)}
          </div>
        </div>
      </section>

      <section id="download" className="relative min-h-screen px-6 py-28 lg:px-10">
        <div className="mx-auto flex min-h-[620px] max-w-7xl items-center justify-center overflow-hidden rounded-[38px] border border-white/20 bg-gradient-to-br from-[#1a3f70] via-[#12315b] to-[#0d1f3d] p-8 text-center shadow-2xl shadow-[#051021]/40 sm:p-16">
          <div className="absolute h-[500px] w-[500px] rounded-full border border-white/10" /><div className="relative z-10 max-w-2xl"><p className="mb-6 text-[11px] font-bold tracking-[0.3em] text-[#fbbf24]">READY WHEN YOU ARE</p><img src="/__mockup/images/jw_symbol.png" alt="" className="mx-auto mb-8 h-20 w-20 object-contain opacity-90" /><h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">새로운 안목으로<br /><span className="text-[#93c5fd]">시장을 시작하세요.</span></h2><p className="mx-auto mt-6 max-w-md text-sm leading-7 text-white/55">JW에셋의 글로벌 트레이딩 플랫폼이 당신의 다음 결정을 기다립니다.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><button onClick={() => action("HTS 다운로드 페이지로 이동합니다.")} className="flex items-center gap-2 rounded-full bg-[#f59e0b] px-6 py-3.5 text-sm font-semibold text-[#241504] transition hover:bg-[#fbbf24]"><Download size={16} /> HTS 다운로드</button><button onClick={() => action("MTS 다운로드 페이지로 이동합니다.")} className="flex items-center gap-2 rounded-full border border-white/35 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"><MousePointer2 size={16} /> MTS 다운로드</button></div></div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#060d1a] px-6 py-14 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row"><div><img src="/__mockup/images/jw_logo.png" alt="JW에셋" className="h-8 w-auto brightness-0 invert" /><p className="mt-5 max-w-xs text-xs leading-6 text-white/35">글로벌 금융 시장을 향한 더 나은 시선.<br />JW에셋과 함께 투자 그 이상의 기준을 만듭니다.</p></div><div className="grid grid-cols-2 gap-x-16 gap-y-3 text-xs text-white/45"><a href="#edge" className="hover:text-white">Our performance</a><a href="#platform" className="hover:text-white">The JW experience</a><a href="#download" className="hover:text-white">Download</a><span className="text-white/25">고객센터 1588-0000</span></div></div><div className="mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[10px] tracking-wide text-white/25 sm:flex-row"><span>© 2024 JW ASSETS CO., LTD. ALL RIGHTS RESERVED.</span><span className="flex items-center gap-2"><LockKeyhole size={12} /> SECURE GLOBAL TRADING</span></div></footer>
    </main>
  );
}