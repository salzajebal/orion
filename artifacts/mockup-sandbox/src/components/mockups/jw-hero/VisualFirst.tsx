export function VisualFirst() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#f7f9fc] font-sans">
      {/* 배경 로고 — 중앙 하단 */}
      <img
        src="/__mockup/images/jw_symbol.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 w-[700px] opacity-[0.05] select-none"
      />

      {/* 네비 */}
      <nav className="relative z-10 flex items-center justify-between px-12 py-7">
        <img src="/__mockup/images/jw_logo.png" alt="JW에셋" className="h-10 w-auto" />
        <div className="flex items-center gap-8 text-sm font-medium text-slate-500">
          <span>주요 특징</span>
          <span>플랫폼 다운로드</span>
          <a
            href="#"
            className="rounded-full bg-[#3a6aa0] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#2c5a8c]"
          >
            HTS 다운로드
          </a>
        </div>
      </nav>

      {/* 히어로 — 중앙 정렬 */}
      <div className="relative z-10 flex flex-col items-center px-8 pt-16 pb-20 text-center">
        {/* 상단 레이블 */}
        <div className="mb-6 flex items-center gap-2">
          <span className="h-px w-8 bg-[#3a6aa0]" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3a6aa0]">
            해외선물 전문 플랫폼
          </p>
          <span className="h-px w-8 bg-[#3a6aa0]" />
        </div>

        {/* 메인 타이포 */}
        <h1 className="break-keep text-[clamp(2.8rem,6vw,5.5rem)] font-black leading-[1.05] tracking-tight text-slate-900">
          JW에셋으로<br />해외선물을 거래하세요
        </h1>

        {/* 서브 */}
        <p className="mt-6 max-w-lg break-keep text-base leading-8 text-slate-500">
          초저지연 체결 인프라와 전문 분석 도구로
          글로벌 선물 시장을 자신 있게 공략하세요.
        </p>

        {/* CTA */}
        <div className="mt-8 flex items-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-[#3a6aa0] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#3a6aa0]/20 transition hover:bg-[#2c5a8c]"
          >
            HTS 다운로드
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 transition hover:border-slate-400"
          >
            WTS 바로 접속
          </a>
        </div>

        {/* 수치 카드 그룹 */}
        <div className="mt-14 grid grid-cols-4 gap-4 w-full max-w-2xl">
          {[
            { value: "0.1초", label: "평균 체결 속도" },
            { value: "15+", label: "글로벌 거래 종목" },
            { value: "24/5", label: "운영 시간" },
            { value: "99.9%", label: "서버 가동률" },
          ].map(({ value, label }) => (
            <div key={label} className="rounded-2xl bg-white px-4 py-5 shadow-sm ring-1 ring-slate-100 text-center">
              <p className="text-2xl font-black text-slate-900">{value}</p>
              <p className="mt-1 text-[11px] text-slate-400 break-keep">{label}</p>
            </div>
          ))}
        </div>

        {/* 구분선 */}
        <div className="mt-12 flex items-center gap-4 text-xs text-slate-400">
          <span>HTS · MTS · WTS</span>
          <span className="h-px w-12 bg-slate-200" />
          <span>글로벌 선물 전문 플랫폼</span>
        </div>
      </div>
    </div>
  );
}
