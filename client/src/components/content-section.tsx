import { Activity, ArrowUpRight, Check, ChevronRight, LineChart, ShieldCheck, CalendarDays } from "lucide-react";

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

/* ── 경제 지표 캘린더 목업 ─────────────────────────────── */
const calendarEvents = [
  { date: "AUG 19", time: "22:00", name: "FOMC 회의록",          impact: "HIGH",   actual: "—",      prev: "5.25%",  currency: "USD" },
  { date: "AUG 20", time: "21:30", name: "CPI (소비자물가지수)",  impact: "HIGH",   actual: "—",      prev: "+3.2%",  currency: "USD" },
  { date: "AUG 21", time: "21:30", name: "신규 실업수당 청구건수", impact: "MED",    actual: "—",      prev: "232K",   currency: "USD" },
  { date: "AUG 22", time: "23:00", name: "GDP 성장률 (예비치)",   impact: "HIGH",   actual: "—",      prev: "+2.1%",  currency: "USD" },
  { date: "AUG 23", time: "03:00", name: "미시건 소비심리지수",   impact: "MED",    actual: "—",      prev: "71.6",   currency: "USD" },
];

const impactConfig: Record<string, { label: string; bg: string; text: string }> = {
  HIGH: { label: "HIGH", bg: "bg-red-50",    text: "text-red-500"    },
  MED:  { label: "MED",  bg: "bg-amber-50",  text: "text-amber-500"  },
  LOW:  { label: "LOW",  bg: "bg-slate-100", text: "text-slate-400"  },
};

function EconomicCalendarMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* 헤더 */}
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#3a6aa0]" />
          <span className="font-mono text-[11px] tracking-widest text-slate-500">ECONOMIC CALENDAR</span>
        </div>
        <span className="rounded-full bg-blue-50 px-2.5 py-1 font-mono text-[10px] text-[#3a6aa0]">KST 기준</span>
      </div>
      {/* 컬럼 헤더 */}
      <div className="grid grid-cols-[72px_60px_1fr_56px] gap-2 border-b border-slate-100 px-5 py-2.5 font-mono text-[9px] uppercase tracking-widest text-slate-400">
        <span>날짜</span><span>시간</span><span>지표</span><span className="text-right">영향도</span>
      </div>
      {/* 이벤트 행 */}
      {calendarEvents.map((ev, i) => {
        const cfg = impactConfig[ev.impact];
        return (
          <div
            key={i}
            className={`grid grid-cols-[72px_60px_1fr_56px] items-center gap-2 px-5 py-3.5 font-mono text-xs transition-colors hover:bg-slate-50 ${i < calendarEvents.length - 1 ? "border-b border-slate-100" : ""}`}
          >
            <span className="text-[11px] font-semibold text-slate-400">{ev.date}</span>
            <span className="text-[11px] text-slate-400">{ev.time}</span>
            <div>
              <div className="text-[12px] font-medium text-slate-800 leading-tight">{ev.name}</div>
              <div className="mt-0.5 text-[10px] text-slate-400">이전: {ev.prev}</div>
            </div>
            <span className={`justify-self-end rounded-md px-2 py-0.5 text-[10px] font-bold ${cfg.bg} ${cfg.text}`}>
              {cfg.label}
            </span>
          </div>
        );
      })}
      {/* 푸터 */}
      <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3 text-[10px] text-slate-400">
        <span>다음 발표까지 <span className="font-semibold text-[#3a6aa0]">02:14:38</span></span>
        <span className="font-mono tracking-wider">LIVE SYNC ON</span>
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
        title="경제 지표 캘린더"
        description="FOMC·CPI·GDP 등 시장을 움직이는 핵심 경제 지표를 한눈에 파악하세요. 발표 전 미리 대비하고, 정보 우위로 더 나은 진입 타이밍을 잡습니다."
        icon={CalendarDays}
        reversed
        dark
      >
        <EconomicCalendarMockup />
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
