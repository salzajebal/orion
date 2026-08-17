import symbolImg from "@assets/jw_symbol_no_bg.png";
import logoImg from "@assets/jw_logo.png";

const stats = [
  ["10만+", "회원"],
  ["24/5", "글로벌"],
  ["99.9%", "안정성"],
];

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#eef4fb]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(58,106,160,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(58,106,160,0.07) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
      }}
    >
      <div className="container flex flex-col items-center px-5 pb-12 pt-10 text-center sm:px-6 sm:pt-12">

        {/* 로고 */}
        <img
          src={logoImg}
          alt="JW에셋"
          className="mb-7 h-10 w-auto object-contain sm:h-11"
          draggable={false}
        />

        {/* 2줄 제목 */}
        <h1 className="break-keep font-bold leading-tight tracking-tight">
          <span className="block text-3xl text-slate-900 sm:text-4xl md:text-5xl">
            JW에셋으로 거래하는
          </span>
          <span className="block text-3xl text-[#3a6aa0] sm:text-4xl md:text-5xl">
            새로운 안목
          </span>
        </h1>

        {/* 서브타이틀 */}
        <p className="mt-4 max-w-xs break-keep text-sm leading-7 text-slate-500 sm:max-w-sm sm:text-base">
          글로벌 금융 시장에서 앞서가는 JW에셋.<br />
          혁신적인 트레이딩 플랫폼으로 투자를 한 차원 높이십시오
        </p>

        {/* 심볼 */}
        <img
          src={symbolImg}
          alt=""
          className="my-8 w-[220px] sm:w-[260px] md:w-[300px]"
          draggable={false}
          aria-hidden="true"
        />

        {/* 회사명 */}
        <p className="mb-7 text-xs font-bold tracking-[0.22em] text-[#3a6aa0] sm:text-sm">
          JW ASSETS CO., LTD.
        </p>

        {/* 스탯 카드 3개 */}
        <div className="mb-7 grid w-full max-w-xs grid-cols-3 gap-3">
          {stats.map(([value, label]) => (
            <div
              key={label}
              className="flex flex-col items-center rounded-2xl bg-white/80 px-2 py-3 shadow-sm backdrop-blur-sm"
            >
              <span className="text-lg font-bold text-slate-900 sm:text-xl">{value}</span>
              <span className="mt-0.5 text-xs text-slate-500">{label}</span>
            </div>
          ))}
        </div>

        {/* CTA 버튼 */}
        <div className="flex w-full max-w-xs gap-3">
          <a
            href="https://hts.jw-asset.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#1e293b] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2c3e54]"
          >
            플랫폼 다운로드 ↗
          </a>
          <a
            href="#features"
            className="flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            소개
          </a>
        </div>

      </div>
    </section>
  );
}
