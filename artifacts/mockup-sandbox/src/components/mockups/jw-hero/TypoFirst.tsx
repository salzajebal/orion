export function TypoFirst() {
  const stats = [
    { value: "0.1초", label: "빠른 체결" },
    { value: "15+", label: "거래 종목" },
    { value: "24/5", label: "운영" },
    { value: "99.9%", label: "서버 안정성" },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white font-sans">
      {/* 배경 로고 */}
      <img
        src="/__mockup/images/jw_symbol.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 w-[640px] opacity-[0.06] select-none"
      />

      {/* 네비 */}
      <nav className="relative z-10 flex items-center justify-between px-12 py-7">
        <img src="/__mockup/images/jw_logo.png" alt="JW에셋" className="h-10 w-auto" />
        <div className="flex items-center gap-8 text-sm font-medium text-slate-500">
          <span>주요 특징</span>
          <span>플랫폼 다운로드</span>
          <a
            href="#"
            className="rounded-none border border-slate-900 px-5 py-2 text-sm font-bold text-slate-900 transition hover:bg-slate-900 hover:text-white"
          >
            HTS 다운로드
          </a>
        </div>
      </nav>

      {/* 히어로 */}
      <div className="relative z-10 px-12 pt-16 pb-24">
        {/* 상단 레이블 */}
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#3a6aa0]">
          해외선물 전문 플랫폼
        </p>

        {/* 메인 타이포 */}
        <h1
          className="break-keep text-[clamp(3rem,7vw,6.5rem)] font-black leading-[1.0] tracking-tight text-slate-900"
          style={{ fontFamily: "'Pretendard', sans-serif" }}
        >
          JW에셋으로<br />
          <span className="text-[#3a6aa0]">해외선물</span>을<br />
          거래하세요
        </h1>

        {/* 서브 */}
        <p className="mt-8 max-w-md break-keep text-base leading-8 text-slate-400">
          초저지연 체결 인프라와 전문 분석 도구로
          글로벌 선물 시장을 자신 있게 공략하세요.
        </p>

        {/* CTA */}
        <div className="mt-10 flex items-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#3a6aa0] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#2c5a8c]"
          >
            HTS 다운로드
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" />
            </svg>
          </a>
          <a href="#" className="text-sm font-bold text-slate-400 underline underline-offset-4 hover:text-slate-900">
            WTS 바로 접속
          </a>
        </div>

        {/* 수치 바 */}
        <div className="mt-16 flex gap-0 border-t border-slate-100">
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className={`flex-1 border-r border-slate-100 pt-6 pr-8 ${i === 0 ? "" : "pl-8"} ${i === stats.length - 1 ? "border-r-0" : ""}`}
            >
              <p className="text-3xl font-black text-slate-900">{value}</p>
              <p className="mt-1 text-xs text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
