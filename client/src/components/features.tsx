import { Activity, BarChart3, ShieldCheck, Zap } from "lucide-react";

const metrics = [
  { value: "+18.4%", label: "평균 수익률",   number: "01", icon: BarChart3,   color: "#3a6aa0", desc: "검증된 전략과 빠른 체결로 달성한 실제 계좌 기준 평균 수익률입니다." },
  { value: "0.003s", label: "체결 속도",    number: "02", icon: Zap,          color: "#f59e0b", desc: "초저지연 인프라로 시장 변동에 0.003초 안에 대응합니다." },
  { value: "24/5",   label: "시장 접근",    number: "03", icon: Activity,     color: "#3a6aa0", desc: "글로벌 주요 선물 시장 전체를 주 5일 24시간 실시간으로 연결합니다." },
  { value: "99.9%",  label: "시스템 안정성", number: "04", icon: ShieldCheck,  color: "#10b981", desc: "이중화된 서버와 자동 페일오버로 서비스 중단 없는 거래 환경을 보장합니다." },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative bg-[#eef4fb] px-6 py-28 lg:px-16"
      style={{
        backgroundImage:
          "linear-gradient(rgba(58,106,160,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(58,106,160,0.07) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
      }}
    >
      <div className="mx-auto max-w-7xl">
        {/* 헤더 */}
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <div className="mb-5 font-mono text-xs tracking-[0.3em] text-[#3a6aa0]">
              SYSTEM STATUS / ONLINE
            </div>
            <h2 className="text-5xl font-semibold leading-tight tracking-[-0.05em] text-slate-900 md:text-6xl">
              글로벌 해외선물<br />
              <span className="text-[#3a6aa0]">프리미엄 서비스</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-slate-500">
            데이터가 흐르는 곳에서<br />
            결정은 더 빠르고 정확해야 합니다.
          </p>
        </div>

        {/* 지표 카드 4개 */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(({ value, label, number, icon: Icon, color, desc }) => (
            <div
              key={number}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              {/* 상단: 아이콘 + 번호 */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `${color}15` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <span className="font-mono text-[10px] text-slate-400">{number}</span>
              </div>
              {/* 수치 */}
              <div className="font-mono text-3xl font-bold tracking-tight text-slate-900">{value}</div>
              <div className="mt-1.5 text-sm font-medium text-slate-600">{label}</div>
              {/* 설명 */}
              <p className="mt-3 text-xs leading-5 text-slate-400">{desc}</p>
              {/* 하단 컬러 바 */}
              <div className="absolute bottom-0 left-0 h-0.5 w-1/2" style={{ background: color }} />
            </div>
          ))}
        </div>

        {/* LIVE 인디케이터 */}
        <div className="mt-16 flex items-center justify-end gap-2 font-mono text-[10px] tracking-[0.28em] text-[#3a6aa0]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#3a6aa0]" />
          LIVE / ALL SYSTEMS NOMINAL
        </div>
      </div>
    </section>
  );
}
