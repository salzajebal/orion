import { Activity, ArrowUpRight, Check, ChevronRight, LineChart, ShieldCheck, Layers } from "lucide-react";

/* ── 기술 지표 대시보드 목업 ───────────────────────────── */
const rsiPoints   = [44,48,52,49,55,61,58,63,67,65,68];
const macdHist    = [-3,-2,0,1,2,4,3,5,6,5,7];
const bbPoints    = [48,52,50,55,58,54,60,57,62,59,64];

function Sparkline({ points, color, height = 32 }: { points: number[]; color: string; height?: number }) {
  const min = Math.min(...points), max = Math.max(...points);
  const w = 100 / (points.length - 1);
  const toY = (v: number) => height - ((v - min) / (max - min)) * height;
  const d = points.map((p, i) => `${i === 0 ? "M" : "L"} ${i * w} ${toY(p)}`).join(" ");
  return (
    <svg viewBox={`0 0 100 ${height}`} className="w-full" preserveAspectRatio="none" style={{ height }}>
      <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IndicatorBadge({ signal }: { signal: "과매수" | "과매도" | "중립" | "상승 신호" | "하락 신호" }) {
  const map = {
    "과매수":   "bg-amber-50 text-amber-600",
    "과매도":   "bg-red-50 text-red-500",
    "중립":     "bg-slate-100 text-slate-500",
    "상승 신호":"bg-emerald-50 text-emerald-600",
    "하락 신호":"bg-red-50 text-red-500",
  };
  return <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${map[signal]}`}>{signal}</span>;
}

function TechnicalIndicatorsMockup() {
  return (
    <div className="space-y-3">
      {/* 헤더 */}
      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-slate-500">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#3a6aa0]" />
          GOLD JUN26 · INDICATOR PANEL
        </div>
        <span className="font-mono text-[11px] font-semibold text-[#3a6aa0]">2,348.70</span>
      </div>

      {/* RSI */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400">RSI (14)</div>
            <div className="mt-0.5 font-mono text-2xl font-bold text-slate-900">68.4</div>
          </div>
          <IndicatorBadge signal="과매수" />
        </div>
        <Sparkline points={rsiPoints} color="#f59e0b" />
        <div className="mt-2 flex justify-between font-mono text-[9px] text-slate-400">
          <span>과매도 &lt;30</span><span>중립</span><span>과매수 &gt;70</span>
        </div>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full rounded-full bg-gradient-to-r from-blue-400 via-emerald-400 to-amber-400" style={{ width: "68.4%" }} />
        </div>
      </div>

      {/* MACD */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400">MACD (12,26,9)</div>
            <div className="mt-0.5 flex items-baseline gap-2">
              <span className="font-mono text-2xl font-bold text-slate-900">+0.42</span>
              <span className="font-mono text-xs text-slate-400">Signal +0.28</span>
            </div>
          </div>
          <IndicatorBadge signal="상승 신호" />
        </div>
        {/* 히스토그램 미니바 */}
        <div className="flex h-8 items-end gap-0.5">
          {macdHist.map((v, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: `${Math.abs(v) * 11}%`, background: v >= 0 ? "#10b981" : "#ef4444", opacity: 0.75 }} />
          ))}
        </div>
        <div className="mt-2 grid grid-cols-3 gap-2 font-mono text-[10px]">
          <div className="rounded-lg bg-slate-50 p-2"><span className="block text-slate-400">MACD</span><span className="text-emerald-600">+0.42</span></div>
          <div className="rounded-lg bg-slate-50 p-2"><span className="block text-slate-400">Signal</span><span className="text-slate-700">+0.28</span></div>
          <div className="rounded-lg bg-slate-50 p-2"><span className="block text-slate-400">Hist</span><span className="text-emerald-600">+0.14</span></div>
        </div>
      </div>

      {/* 볼린저 밴드 */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Bollinger Bands (20,2)</div>
            <div className="mt-0.5 font-mono text-2xl font-bold text-slate-900">중간 밴드</div>
          </div>
          <IndicatorBadge signal="중립" />
        </div>
        <Sparkline points={bbPoints} color="#3a6aa0" height={28} />
        <div className="mt-3 grid grid-cols-3 gap-2 font-mono text-[10px]">
          <div className="rounded-lg bg-red-50 p-2 text-center"><span className="block text-slate-400">상단</span><span className="text-red-400">2,394.20</span></div>
          <div className="rounded-lg bg-blue-50 p-2 text-center"><span className="block text-slate-400">중간</span><span className="text-[#3a6aa0]">2,348.70</span></div>
          <div className="rounded-lg bg-emerald-50 p-2 text-center"><span className="block text-slate-400">하단</span><span className="text-emerald-600">2,303.20</span></div>
        </div>
      </div>
    </div>
  );
}

/* ── 오더북 (DOM) 목업 ─────────────────────────────────── */
const asks = [
  { price: "2,352.40", size: "18", depth: 22 },
  { price: "2,351.80", size: "34", depth: 41 },
  { price: "2,351.20", size: "27", depth: 33 },
  { price: "2,350.60", size: "52", depth: 63 },
  { price: "2,350.00", size: "71", depth: 86 },
];
const bids = [
  { price: "2,349.40", size: "84", depth: 100 },
  { price: "2,348.80", size: "63", depth: 75 },
  { price: "2,348.20", size: "41", depth: 49 },
  { price: "2,347.60", size: "29", depth: 35 },
  { price: "2,347.00", size: "15", depth: 18 },
];

function OrderBookMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* 헤더 */}
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5">
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-slate-500">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#3a6aa0]" />
          GOLD JUN26 · ORDER BOOK
        </div>
        <div className="flex items-center gap-3 font-mono text-[10px]">
          <span className="text-red-400">매도</span>
          <span className="text-slate-300">/</span>
          <span className="text-[#3a6aa0]">매수</span>
        </div>
      </div>

      {/* 컬럼 헤더 */}
      <div className="grid grid-cols-[1fr_52px_52px] border-b border-slate-100 px-5 py-2 font-mono text-[9px] uppercase tracking-widest text-slate-400">
        <span>잔량 깊이</span>
        <span className="text-center">잔량</span>
        <span className="text-right">가격</span>
      </div>

      {/* 매도 호가 (ASK) — 위쪽, 낮은 가격이 아래 */}
      {[...asks].reverse().map((row, i) => (
        <div key={`ask-${i}`} className="relative grid grid-cols-[1fr_52px_52px] items-center px-5 py-2">
          <div className="relative h-5 overflow-hidden rounded-sm">
            <div
              className="absolute right-0 top-0 h-full rounded-sm bg-red-50"
              style={{ width: `${row.depth}%` }}
            />
            <div
              className="absolute right-0 top-0 h-full rounded-sm bg-red-200/60"
              style={{ width: `${row.depth * 0.35}%` }}
            />
          </div>
          <span className="text-center font-mono text-[11px] text-slate-500">{row.size}</span>
          <span className="text-right font-mono text-[12px] font-semibold text-red-500">{row.price}</span>
        </div>
      ))}

      {/* 스프레드 */}
      <div className="flex items-center justify-center gap-3 border-y border-slate-100 bg-slate-50 py-2.5 font-mono text-[10px]">
        <span className="text-slate-400">SPREAD</span>
        <span className="font-bold text-[#3a6aa0]">0.60</span>
        <span className="text-slate-300">|</span>
        <span className="text-slate-400">현재가</span>
        <span className="font-bold text-slate-800">2,349.70</span>
      </div>

      {/* 매수 호가 (BID) — 아래쪽 */}
      {bids.map((row, i) => (
        <div key={`bid-${i}`} className="relative grid grid-cols-[1fr_52px_52px] items-center px-5 py-2">
          <div className="relative h-5 overflow-hidden rounded-sm">
            <div
              className="absolute right-0 top-0 h-full rounded-sm bg-blue-50"
              style={{ width: `${row.depth}%` }}
            />
            <div
              className="absolute right-0 top-0 h-full rounded-sm bg-blue-200/60"
              style={{ width: `${row.depth * 0.35}%` }}
            />
          </div>
          <span className="text-center font-mono text-[11px] text-slate-500">{row.size}</span>
          <span className="text-right font-mono text-[12px] font-semibold text-[#3a6aa0]">{row.price}</span>
        </div>
      ))}

      {/* 푸터 — 매수/매도 비중 */}
      <div className="border-t border-slate-100 px-5 py-3">
        <div className="mb-1.5 flex justify-between font-mono text-[10px] text-slate-400">
          <span className="text-[#3a6aa0]">매수 54.2%</span>
          <span className="text-red-400">매도 45.8%</span>
        </div>
        <div className="flex h-1.5 overflow-hidden rounded-full">
          <div className="h-full bg-[#3a6aa0]" style={{ width: "54.2%" }} />
          <div className="h-full bg-red-400" style={{ width: "45.8%" }} />
        </div>
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
        title="기술 지표 대시보드"
        description="RSI·MACD·볼린저밴드 등 80종 이상의 기술 지표를 한 화면에서 실시간으로 확인하세요. 과매수·과매도 신호를 즉시 포착해 더 정확한 진입 타이밍을 잡습니다."
        icon={LineChart}
      >
        <TechnicalIndicatorsMockup />
      </FeaturePanel>

      <FeaturePanel
        number="02"
        title="호가창 · 시장 깊이"
        description="매수·매도 잔량의 분포를 실시간으로 파악하세요. 대형 매물대와 지지 구간을 시각적으로 읽고, 전문 트레이더처럼 시장의 흐름을 앞서 포착합니다."
        icon={Layers}
        reversed
        dark
      >
        <OrderBookMockup />
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
