import { Activity, ArrowUpRight, Check, ChevronRight, LineChart, ShieldCheck, Cpu } from "lucide-react";

/* ── 차트 목업 ─────────────────────────────────────────── */
const bars = [36,54,45,72,60,82,58,91,73,98,77,88,69,83,103,94,115,100,126,111,137,121,151,132];

function ChartMockup() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3 font-mono text-[10px] text-slate-500">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#3a6aa0]" /> GOLD JUN26
        </span>
        <span className="text-emerald-500">+1.84%</span>
      </div>
      <div className="relative h-52">
        <div className="absolute inset-0 flex flex-col justify-between opacity-20">
          {[1,2,3,4,5].map(l => <div key={l} className="border-t border-blue-200" />)}
        </div>
        <div className="absolute inset-0 flex items-end gap-1 px-1">
          {bars.map((h, i) => (
            <div key={i} className="relative flex-1">
              <div
                className={`mx-auto w-[3px] rounded-full ${i % 4 === 0 ? "bg-red-400/70" : "bg-[#3a6aa0]/70"}`}
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>
        <div className="absolute left-0 right-0 top-[38%] border-t border-dashed border-[#3a6aa0]/50">
          <span className="absolute -top-3 right-0 bg-[#3a6aa0] px-1.5 py-0.5 font-mono text-[9px] text-white">
            2,348.70
          </span>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 font-mono text-[10px]">
        <div className="rounded-lg bg-slate-50 p-2"><span className="block text-slate-500">OPEN</span><span className="text-slate-700">2,326.40</span></div>
        <div className="rounded-lg bg-slate-50 p-2"><span className="block text-slate-500">HIGH</span><span className="text-[#3a6aa0]">2,364.10</span></div>
        <div className="rounded-lg bg-slate-50 p-2"><span className="block text-slate-500">VOL</span><span className="text-slate-700">48.2K</span></div>
      </div>
    </div>
  );
}

/* ── 전략 빌더 목업 (다크) ─────────────────────────────── */
function StrategyMockup() {
  const rows = ["GOLD / LONG", "WHEN RSI < 30", "RISK 1.2% / TP 2.4%"];
  return (
    <div className="rounded-2xl border border-violet-300/20 bg-[#07111e] p-7 font-mono shadow-2xl">
      <div className="mb-7 flex items-center gap-2 text-xs text-slate-500">
        <span className="h-2 w-2 rounded-full bg-violet-400" />
        STRATEGY BUILDER
        <span className="ml-auto text-emerald-400">ACTIVE</span>
      </div>
      {rows.map((item, i) => (
        <div key={item} className="mb-3 flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.035] p-4 text-xs">
          <span className="text-slate-300">{item}</span>
          {i === 0
            ? <ArrowUpRight size={14} className="text-emerald-400" />
            : <Check size={14} className="text-violet-400" />}
        </div>
      ))}
      <div className="mt-7 flex items-center justify-between border-t border-white/[0.07] pt-5 text-[10px] text-slate-500">
        <span>EXECUTION MODE</span>
        <span className="text-violet-400">SMART AUTO</span>
      </div>
    </div>
  );
}

/* ── 리스크 모니터 목업 (다크) ─────────────────────────── */
function RiskMockup() {
  return (
    <div className="rounded-2xl border border-emerald-300/15 bg-[#07111e] p-6">
      <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
        <span className="font-mono text-xs text-slate-400">RISK MONITOR</span>
        <span className="rounded-full bg-emerald-400/10 px-2 py-1 font-mono text-[9px] text-emerald-400">SAFE ZONE</span>
      </div>
      <div className="py-8">
        <div className="mb-2 flex justify-between font-mono text-xs">
          <span className="text-slate-500">MARGIN USED</span>
          <span className="text-slate-200">34.8%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[35%] rounded-full bg-emerald-400" />
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-white/[0.04] p-4">
            <div className="font-mono text-[10px] text-slate-500">DAILY P&L</div>
            <div className="mt-2 font-mono text-lg text-emerald-400">+₩842,600</div>
          </div>
          <div className="rounded-lg bg-white/[0.04] p-4">
            <div className="font-mono text-[10px] text-slate-500">MAX DRAWDOWN</div>
            <div className="mt-2 font-mono text-lg text-slate-200">-2.14%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 공통 패널 ─────────────────────────────────────────── */
interface PanelProps {
  number: string;
  title: string;
  description: string;
  icon: typeof Activity;
  reversed?: boolean;
  children: React.ReactNode;
  dark?: boolean;
}

function FeaturePanel({ number, title, description, icon: Icon, reversed, children, dark }: PanelProps) {
  return (
    <div
      className={`grid min-h-[560px] items-center gap-12 border-b border-slate-200 px-6 py-20 lg:grid-cols-2 lg:px-16 ${dark ? "bg-[#f8fafc]" : "bg-white"}`}
    >
      <div className={reversed ? "lg:order-2" : ""}>
        <div className="mb-7 flex items-center gap-4 font-mono text-xs tracking-[0.25em] text-[#3a6aa0]/70">
          <span className="text-[#3a6aa0]">{number}</span>
          <span className="h-px w-12 bg-[#3a6aa0]/30" />
          JW SYSTEM
        </div>
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-[#3a6aa0]">
          <Icon size={22} />
        </div>
        <h3 className="max-w-lg text-4xl font-semibold tracking-[-0.04em] text-slate-900 md:text-5xl">
          {title}
        </h3>
        <p className="mt-6 max-w-md text-base leading-8 text-slate-500">{description}</p>
        <button className="mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-wider text-[#3a6aa0] transition hover:gap-4">
          DETAIL VIEW <ChevronRight size={14} />
        </button>
      </div>
      <div className={reversed ? "lg:order-1" : ""}>{children}</div>
    </div>
  );
}

/* ── 전체 섹션 export ──────────────────────────────────── */
export function ContentSections() {
  return (
    <section id="detail">
      <FeaturePanel
        number="01"
        title="기술적 분석"
        description="정교한 차트와 실시간 시장 데이터. 필요한 신호만 선명하게, 수많은 기회를 한 화면에서 읽어냅니다."
        icon={LineChart}
      >
        <ChartMockup />
      </FeaturePanel>

      <FeaturePanel
        number="02"
        title="자동화 매매"
        description="나만의 전략을 코드 없이 설계하고, 조건이 충족되는 순간 시장에 정확하게 진입합니다. 감정은 덜고 일관성은 높입니다."
        icon={Cpu}
        reversed
        dark
      >
        <StrategyMockup />
      </FeaturePanel>

      <FeaturePanel
        number="03"
        title="리스크 관리"
        description="투자 원칙을 시스템에 담으세요. 포지션별 손절 라인과 증거금 현황을 실시간으로 관리해 예측 가능한 거래를 만듭니다."
        icon={ShieldCheck}
      >
        <RiskMockup />
      </FeaturePanel>
    </section>
  );
}
