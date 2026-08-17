import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  Cpu,
  Download,
  LineChart,
  Menu,
  Radio,
  ShieldCheck,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import { type ReactNode, useState } from "react";

const marketBars = [36, 54, 45, 72, 60, 82, 58, 91, 73, 98, 77, 88, 69, 83, 103, 94, 115, 100, 126, 111, 137, 121, 151, 132];
const systemMetrics: Array<{ value: string; label: string; number: string; icon: typeof Activity; color: string }> = [
  { value: "+18.4%", label: "평균 수익률", number: "01", icon: BarChart3, color: "#00d4ff" },
  { value: "0.003s", label: "체결 속도", number: "02", icon: Zap, color: "#fbbf24" },
  { value: "24/5", label: "시장 접근", number: "03", icon: Activity, color: "#a78bfa" },
  { value: "99.9%", label: "시스템 안정성", number: "04", icon: ShieldCheck, color: "#34d399" },
];

function StatCard({ value, label, accent }: { value: string; label: string; accent: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] px-5 py-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: accent }} />
      <div className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent, boxShadow: `0 0 12px ${accent}` }} />
        {label}
      </div>
      <div className="font-mono text-2xl font-bold tracking-tight text-slate-100">{value}</div>
    </div>
  );
}

function ChartMockup() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-cyan-300/15 bg-[#07111e] p-4 shadow-2xl shadow-cyan-950/20">
      <div className="mb-4 flex items-center justify-between border-b border-white/[0.07] pb-3 font-mono text-[10px] text-slate-500">
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#00d4ff]" /> GOLD JUN26</span>
        <span className="text-emerald-300">+1.84%</span>
      </div>
      <div className="relative h-52">
        <div className="absolute inset-0 flex flex-col justify-between opacity-30">
          {[1, 2, 3, 4, 5].map((line) => <div key={line} className="border-t border-cyan-100/20" />)}
        </div>
        <div className="absolute inset-0 flex items-end gap-1.5 px-1">
          {marketBars.map((height, index) => (
            <div key={index} className="relative flex-1">
              <div className={`mx-auto w-[3px] rounded-full ${index % 4 === 0 ? "bg-rose-300/70" : "bg-cyan-300/75"}`} style={{ height: `${height}%` }} />
              <div className={`absolute bottom-[${height / 2}%] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full ${index % 4 === 0 ? "bg-rose-300" : "bg-cyan-300"}`} />
            </div>
          ))}
        </div>
        <div className="absolute left-0 right-0 top-[38%] border-t border-dashed border-cyan-300/60">
          <span className="absolute -top-3 right-0 bg-cyan-300 px-1.5 py-0.5 font-mono text-[9px] text-[#07111e]">2,348.70</span>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 font-mono text-[10px]">
        <div className="rounded-lg bg-white/[0.035] p-2"><span className="block text-slate-500">OPEN</span><span className="text-slate-200">2,326.40</span></div>
        <div className="rounded-lg bg-white/[0.035] p-2"><span className="block text-slate-500">HIGH</span><span className="text-cyan-200">2,364.10</span></div>
        <div className="rounded-lg bg-white/[0.035] p-2"><span className="block text-slate-500">VOL</span><span className="text-slate-200">48.2K</span></div>
      </div>
    </div>
  );
}

function FeaturePanel({ number, title, description, children, reverse, icon: Icon }: { number: string; title: string; description: string; children: ReactNode; reverse?: boolean; icon: typeof Activity }) {
  return (
    <div className={`grid min-h-[560px] items-center gap-12 border-b border-white/[0.06] px-6 py-20 lg:grid-cols-2 lg:px-16 ${reverse ? "bg-[#0a1420]" : "bg-[#0d1a2e]"}`}>
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="mb-7 flex items-center gap-4 font-mono text-xs tracking-[0.25em] text-cyan-300/70"><span className="text-cyan-300">{number}</span><span className="h-px w-12 bg-cyan-300/30" /> JW SYSTEM</div>
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300"><Icon size={22} /></div>
        <h3 className="max-w-lg text-4xl font-semibold tracking-[-0.04em] text-slate-100 md:text-5xl">{title}</h3>
        <p className="mt-6 max-w-md text-base leading-8 text-slate-400">{description}</p>
        <button className="mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-wider text-cyan-300 transition hover:gap-4">DETAIL VIEW <ChevronRight size={14} /></button>
      </div>
      <div className={reverse ? "lg:order-1" : ""}>{children}</div>
    </div>
  );
}

export default function VariantA() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen overflow-hidden bg-[#080f1a] font-sans text-slate-100 selection:bg-cyan-300 selection:text-[#07111e]">
      <section className="relative min-h-screen bg-[radial-gradient(circle_at_70%_18%,rgba(24,74,116,.34),transparent_32%),linear-gradient(145deg,#080f1a_0%,#0d1627_58%,#091521_100%)]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(0,212,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,.5)_1px,transparent_1px)] [background-size:64px_64px]" />
        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-12">
          <img src="/__mockup/images/jw_logo.png" alt="JW에셋" className="h-8 w-auto object-contain brightness-0 invert opacity-95" />
          <nav className={`${menuOpen ? "absolute left-6 right-6 top-20 flex rounded-xl border border-white/10 bg-[#0d1a2e] p-5 shadow-2xl" : "hidden"} flex-col gap-5 text-xs tracking-[0.18em] text-slate-300 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
            <a href="#system" className="transition hover:text-cyan-300">SYSTEM</a>
            <a href="#features" className="transition hover:text-cyan-300">FEATURES</a>
            <a href="#platform" className="transition hover:text-cyan-300">PLATFORM</a>
          </nav>
          <button aria-label="메뉴 열기" onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg border border-white/10 p-2 text-slate-300 md:hidden">{menuOpen ? <X size={18} /> : <Menu size={18} />}</button>
        </header>
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-90px)] max-w-7xl flex-col items-center justify-center px-6 pb-16 text-center lg:px-12">
          <div className="mb-8 flex items-center gap-3 font-mono text-[10px] tracking-[0.35em] text-cyan-300/80"><Radio size={13} className="animate-pulse" /> GLOBAL MARKET ACCESS / 01</div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-slate-100 md:text-7xl lg:text-8xl">JW에셋으로 거래하는<br /><span className="text-[#3a6aa0]">새로운 안목</span></h1>
          <p className="mt-8 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">글로벌 금융 시장에서 앞서가는 JW에셋.<br className="md:hidden" /> 혁신적인 트레이딩 플랫폼으로 투자를 한 차원 높이십시오</p>
          <div className="relative my-10 flex items-center justify-center">
            <div className="absolute h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
            <img src="/__mockup/images/jw_symbol.png" alt="JW에셋 심볼" className="relative h-40 w-40 object-contain opacity-90 drop-shadow-[0_0_28px_rgba(0,212,255,.24)] md:h-52 md:w-52" />
          </div>
          <div className="font-mono text-[11px] tracking-[0.42em] text-cyan-300/90" style={{ textShadow: "0 0 16px rgba(0,212,255,.55)" }}>JW ASSETS CO., LTD.</div>
          <div className="mt-11 grid w-full max-w-2xl grid-cols-3 gap-2 md:gap-4"><StatCard value="10만+" label="회원" accent="#00d4ff" /><StatCard value="24/5" label="글로벌" accent="#7dd3fc" /><StatCard value="99.9%" label="안정성" accent="#34d399" /></div>
          <div className="mt-8 flex flex-wrap justify-center gap-3"><a href="https://smart-trade.kr" className="inline-flex items-center gap-3 rounded-xl bg-[#2c5a8c] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/40 transition hover:bg-[#3a6aa0]">플랫폼 다운로드 <ArrowUpRight size={16} /></a><a href="#system" className="rounded-xl border border-slate-500/50 px-7 py-3.5 text-sm text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300">소개</a></div>
        </div>
      </section>

      <section id="system" className="relative min-h-screen bg-[#080f1a] px-6 py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end"><div><div className="mb-5 font-mono text-xs tracking-[0.3em] text-cyan-300">SYSTEM STATUS / ONLINE</div><h2 className="text-5xl font-semibold leading-tight tracking-[-0.05em] md:text-7xl">글로벌 해외선물<br /><span className="text-[#00d4ff]">프리미엄 서비스</span></h2></div><p className="max-w-xs text-sm leading-7 text-slate-500">데이터가 흐르는 곳에서<br />결정은 더 빠르고 정확해야 합니다.</p></div>
          <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {systemMetrics.map(({ value, label, number, icon: Icon, color }) => <div key={number} className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1627] p-6"><div className="mb-14 flex items-center justify-between"><Icon size={20} style={{ color }} /><span className="font-mono text-[10px] text-slate-600">{number}</span></div><div className="font-mono text-3xl font-bold text-slate-100">{value}</div><div className="mt-2 text-sm text-slate-500">{label}</div><div className="absolute bottom-0 left-0 h-0.5 w-1/2" style={{ background: color }} /></div>)}
          </div>
          <div className="mt-16 flex items-center justify-end gap-2 font-mono text-[10px] tracking-[0.28em] text-emerald-300"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300 shadow-[0_0_10px_#34d399]" /> LIVE / ALL SYSTEMS NOMINAL</div>
        </div>
      </section>

      <section id="features">
        <FeaturePanel number="01" title="기술적 분석" description="정교한 차트와 실시간 시장 데이터. 필요한 신호만 선명하게, 수많은 기회를 한 화면에서 읽어냅니다." icon={LineChart}><ChartMockup /></FeaturePanel>
        <FeaturePanel number="02" title="자동화 매매" description="나만의 전략을 코드 없이 설계하고, 조건이 충족되는 순간 시장에 정확하게 진입합니다. 감정은 덜고 일관성은 높입니다." reverse icon={Cpu}><div className="rounded-2xl border border-violet-300/15 bg-[#07111e] p-7 font-mono shadow-2xl shadow-violet-950/10"><div className="mb-7 flex items-center gap-2 text-xs text-slate-500"><span className="h-2 w-2 rounded-full bg-violet-300" /> STRATEGY BUILDER <span className="ml-auto text-emerald-300">ACTIVE</span></div>{["GOLD / LONG", "WHEN RSI < 30", "RISK 1.2% / TP 2.4%"].map((item, i) => <div key={item} className="mb-3 flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.035] p-4 text-xs"><span className="text-slate-300">{item}</span>{i === 0 ? <ArrowUpRight size={14} className="text-emerald-300" /> : <Check size={14} className="text-violet-300" />}</div>)}<div className="mt-7 flex items-center justify-between border-t border-white/[0.07] pt-5 text-[10px] text-slate-500"><span>EXECUTION MODE</span><span className="text-violet-300">SMART AUTO</span></div></div></FeaturePanel>
        <FeaturePanel number="03" title="리스크 관리" description="투자 원칙을 시스템에 담으세요. 포지션별 손절 라인과 증거금 현황을 실시간으로 관리해 예측 가능한 거래를 만듭니다." icon={ShieldCheck}><div className="rounded-2xl border border-emerald-300/15 bg-[#07111e] p-6"><div className="flex items-center justify-between border-b border-white/[0.07] pb-5"><span className="font-mono text-xs text-slate-400">RISK MONITOR</span><span className="rounded-full bg-emerald-300/10 px-2 py-1 font-mono text-[9px] text-emerald-300">SAFE ZONE</span></div><div className="py-8"><div className="mb-2 flex justify-between font-mono text-xs"><span className="text-slate-500">MARGIN USED</span><span className="text-slate-200">34.8%</span></div><div className="h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[35%] rounded-full bg-emerald-300" /></div><div className="mt-8 grid grid-cols-2 gap-3"><div className="rounded-lg bg-white/[0.04] p-4"><div className="text-[10px] text-slate-500">DAILY P&L</div><div className="mt-2 font-mono text-lg text-emerald-300">+₩842,600</div></div><div className="rounded-lg bg-white/[0.04] p-4"><div className="text-[10px] text-slate-500">MAX DRAWDOWN</div><div className="mt-2 font-mono text-lg text-slate-200">-2.14%</div></div></div></div></div></FeaturePanel>
      </section>

      <section id="platform" className="relative min-h-[620px] overflow-hidden bg-[#0a1628] px-6 py-32 text-center"><div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(0,212,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,.7)_1px,transparent_1px)] [background-size:48px_48px]" /><div className="relative mx-auto max-w-3xl"><Terminal className="mx-auto mb-8 text-cyan-300" size={30} /><div className="font-mono text-xs tracking-[0.35em] text-cyan-300">DOWNLOAD PLATFORM</div><h2 className="mt-7 text-5xl font-semibold tracking-[-0.05em] text-slate-100 md:text-7xl">시장의 문을<br /><span className="text-cyan-300">여는 가장 빠른 방법</span></h2><p className="mx-auto mt-7 max-w-md text-sm leading-7 text-slate-400">언제 어디서나 같은 데이터, 같은 속도.<br />JW에셋의 트레이딩 환경을 시작하십시오.</p><div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row"><a href="https://smart-trade.kr" className="flex items-center justify-center gap-3 rounded-xl bg-[#2c5a8c] px-8 py-4 text-sm font-semibold transition hover:bg-[#3a6aa0]"><Download size={17} /> HTS 다운로드 <ArrowUpRight size={15} /></a><a href="https://smart-trade.kr" className="flex items-center justify-center gap-3 rounded-xl border border-cyan-300/50 px-8 py-4 text-sm text-cyan-200 transition hover:bg-cyan-300/10"><Download size={17} /> MTS 다운로드 <ArrowUpRight size={15} /></a></div></div></section>

      <footer className="relative overflow-hidden bg-[#04080f] px-6 py-14 lg:px-16"><div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(0,212,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,.6)_1px,transparent_1px)] [background-size:72px_72px]" /><div className="relative mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-12 md:flex-row"><img src="/__mockup/images/jw_logo.png" alt="JW에셋" className="h-8 w-auto object-contain brightness-0 invert opacity-80" /><div className="flex flex-wrap gap-7 font-mono text-[10px] tracking-[0.18em] text-slate-500"><a href="#system" className="hover:text-cyan-300">SYSTEM</a><a href="#features" className="hover:text-cyan-300">FEATURES</a><a href="#platform" className="hover:text-cyan-300">PLATFORM</a></div></div><div className="flex flex-col justify-between gap-4 pt-8 text-[10px] leading-6 text-slate-600 md:flex-row"><span>© 2024 JW ASSETS CO., LTD. ALL RIGHTS RESERVED.</span><span>해외선물 거래에는 원금 초과 손실의 위험이 있습니다. 투자 전 상품설명서를 확인하시기 바랍니다.</span></div></div></footer>
    </main>
  );
}