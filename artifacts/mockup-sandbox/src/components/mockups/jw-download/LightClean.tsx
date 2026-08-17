import { ArrowUpRight, Check, ChevronRight, Globe2, LockKeyhole, Monitor, Smartphone, ShieldCheck, Sparkles, Zap } from "lucide-react";

const platforms = [
  {
    eyebrow: "DESKTOP TRADING",
    name: "HTS",
    title: "PC 다운로드",
    description: "빠른 주문과 깊이 있는 분석을 위한 데스크톱 트레이딩 환경",
    icon: Monitor,
    badge: "Windows 지원",
    detail: "Windows 10 이상",
    href: "https://hts.smart-trade.kr",
  },
  {
    eyebrow: "MOBILE TRADING",
    name: "MTS",
    title: "모바일 앱",
    description: "언제 어디서나 시장을 확인하고 기회를 놓치지 않는 모바일 앱",
    icon: Smartphone,
    badge: "iOS · Android",
    detail: "앱스토어 / 플레이스토어",
    href: "https://smart-trade.kr/",
  },
  {
    eyebrow: "BROWSER TRADING",
    name: "WTS",
    title: "웹 브라우저",
    description: "별도 설치 없이, 익숙한 브라우저에서 바로 시작하는 트레이딩",
    icon: Globe2,
    badge: "설치 불필요",
    detail: "Chrome · Safari · Edge",
    href: "https://smart-trade.kr/",
  },
];

export function LightClean() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fafc] text-[#1e3a5f]" style={{ fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif" }}>
      <nav className="relative z-10 flex h-[76px] items-center justify-between border-b border-[#dbe5ef] bg-white px-[72px]">
        <a href="#top" className="flex items-center gap-3">
          <img src="/__mockup/images/jw_logo.png" alt="JW에셋" className="h-[35px] w-auto object-contain" />
          <span className="h-5 w-px bg-[#d7e1eb]" />
          <span className="text-[12px] font-semibold tracking-[0.16em] text-[#7890a8]">ASSETS CO., LTD.</span>
        </a>
        <div className="flex items-center gap-9 text-[13px] font-medium text-[#657f99]">
          <a href="#platforms" className="transition-colors hover:text-[#3a6aa0]">플랫폼 안내</a>
          <a href="#why-jw" className="transition-colors hover:text-[#3a6aa0]">JW에셋의 강점</a>
          <a href="#platforms" className="flex items-center gap-2 rounded-full bg-[#edf4fa] px-4 py-2.5 text-[#2c5a8c] transition-colors hover:bg-[#e0edf8]">
            시작하기 <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
        </div>
      </nav>

      <section id="top" className="relative mx-auto flex min-h-[474px] max-w-[1280px] items-center px-[72px]">
        <div className="pointer-events-none absolute -right-[85px] top-[42px] h-[410px] w-[660px] rounded-full bg-[#e8f0f7] opacity-70 blur-3xl" />
        <div className="relative z-[1] w-[48%]">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#cadbea] bg-white px-3.5 py-2 text-[11px] font-bold tracking-[0.13em] text-[#3a6aa0] shadow-[0_4px_14px_rgba(48,87,125,0.06)]">
            <Sparkles size={13} /> SMARTER TRADING, CLEARER CHOICE
          </div>
          <h1 className="m-0 text-[48px] font-semibold leading-[1.18] tracking-[-0.055em] text-[#1e3a5f]">
            JW에셋<br /><span className="text-[#3a6aa0]">트레이딩 플랫폼</span>
          </h1>
          <p className="mt-6 max-w-[430px] text-[16px] leading-[1.8] tracking-[-0.02em] text-[#6b8299]">
            시장을 보는 눈은 더 선명하게,<br />주문을 실행하는 순간은 더 빠르게.
          </p>
        </div>
        <div className="relative z-[1] ml-auto w-[52%]">
          <div className="relative h-[300px] w-full overflow-hidden rounded-[24px] border border-[#d4e1ec] bg-white/85 p-6 shadow-[0_24px_60px_rgba(60,95,130,0.10)]">
            <div className="mb-3 flex items-center justify-between text-[10px] font-bold tracking-[0.14em] text-[#91a6b9]">
              <span>MARKET OVERVIEW</span><span className="flex items-center gap-1 text-[#47a17d]"><i className="h-1.5 w-1.5 rounded-full bg-[#47a17d]" /> LIVE</span>
            </div>
            <div className="flex items-end gap-2">
              <strong className="text-[29px] tracking-[-0.05em] text-[#274d73]">34,820.50</strong>
              <span className="pb-1 text-[12px] font-semibold text-[#3c9a78]">+2.84%</span>
            </div>
            <svg viewBox="0 0 560 180" className="mt-3 h-[170px] w-full" fill="none" aria-label="시장 흐름 차트">
              <path d="M0 153H560M0 102H560M0 51H560" stroke="#e8eef4" strokeWidth="1" />
              <path d="M0 137 C28 130, 35 145, 62 126 S94 112, 120 123 S145 101, 169 107 S193 84, 214 99 S240 87, 263 91 S290 70, 312 82 S337 57, 365 69 S391 43, 412 55 S438 35, 466 44 S495 16, 514 27 S536 17, 560 7" stroke="#3a6aa0" strokeWidth="3" strokeLinecap="round" />
              <path d="M0 137 C28 130, 35 145, 62 126 S94 112, 120 123 S145 101, 169 107 S193 84, 214 99 S240 87, 263 91 S290 70, 312 82 S337 57, 365 69 S391 43, 412 55 S438 35, 466 44 S495 16, 514 27 S536 17, 560 7 V180H0Z" fill="url(#chartFill)" opacity=".48" />
              <circle cx="560" cy="7" r="5" fill="#3a6aa0" stroke="white" strokeWidth="3" />
              <defs><linearGradient id="chartFill" x1="280" y1="0" x2="280" y2="180" gradientUnits="userSpaceOnUse"><stop stopColor="#80adcf" stopOpacity=".48" /><stop offset="1" stopColor="#edf5fa" stopOpacity="0" /></linearGradient></defs>
            </svg>
            <div className="absolute bottom-4 left-6 right-6 flex justify-between text-[10px] font-medium text-[#a0b1c0]"><span>09:00</span><span>12:00</span><span>15:00</span></div>
          </div>
        </div>
      </section>

      <section id="platforms" className="border-y border-[#e1e9f0] bg-white px-[72px] py-[68px]">
        <div className="mx-auto max-w-[1136px]">
          <div className="mb-9 flex items-end justify-between">
            <div><p className="mb-2 text-[11px] font-bold tracking-[0.16em] text-[#7899b7]">CHOOSE YOUR PLATFORM</p><h2 className="m-0 text-[27px] font-semibold tracking-[-0.04em] text-[#1e3a5f]">나에게 맞는 방식으로 시작하세요</h2></div>
            <p className="mb-1 text-[13px] text-[#8498ab]">모든 플랫폼에서 동일한 JW에셋 계정을 사용합니다.</p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {platforms.map(({ icon: Icon, ...platform }) => (
              <article key={platform.name} className="group flex min-h-[310px] flex-col rounded-[14px] border border-[#dbe5ee] bg-[#fff] p-6 transition-all hover:-translate-y-1 hover:border-[#afc8dd] hover:shadow-[0_15px_32px_rgba(54,91,122,0.09)]">
                <div className="flex items-start justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#edf4fa] text-[#3a6aa0]"><Icon size={23} strokeWidth={1.65} /></div><span className="text-[11px] font-bold tracking-[0.15em] text-[#a0b0bd]">{platform.name}</span></div>
                <p className="mb-1 mt-6 text-[22px] font-semibold tracking-[-0.04em] text-[#244a70]">{platform.title}</p>
                <p className="m-0 h-[48px] text-[13px] leading-[1.65] text-[#7a90a3]">{platform.description}</p>
                <div className="mt-5 flex items-center justify-between border-t border-[#edf1f5] pt-4"><span className="rounded-full bg-[#f1f6fa] px-2.5 py-1.5 text-[11px] font-semibold text-[#527697]">{platform.badge}</span><span className="text-[11px] text-[#9aabb9]">{platform.detail}</span></div>
                <a href={platform.href} target="_blank" rel="noreferrer" className="mt-auto flex h-11 items-center justify-center gap-2 rounded-[8px] bg-[#3a6aa0] text-[13px] font-semibold text-white transition-colors hover:bg-[#2c5a8c]">다운로드 및 시작하기 <ChevronRight size={15} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-jw" className="mx-auto max-w-[1136px] px-0 py-[70px]">
        <div className="mb-10"><p className="mb-2 text-[11px] font-bold tracking-[0.16em] text-[#7899b7]">WHY JW ASSETS</p><h2 className="m-0 text-[27px] font-semibold tracking-[-0.04em] text-[#1e3a5f]">더 편안한 거래를 위한 기본</h2></div>
        <div className="grid grid-cols-3 gap-14">
          {[
            { icon: Zap, title: "빠르고 정확한 실행", body: "시장 변화에 지연 없이 대응할 수 있도록 주문 흐름을 단순하게 설계했습니다." },
            { icon: ShieldCheck, title: "안심할 수 있는 보안", body: "소중한 자산과 거래 정보를 지키는 보안 체계를 기본으로 적용했습니다." },
            { icon: LockKeyhole, title: "투명한 거래 환경", body: "복잡한 조건은 덜어내고, 필요한 정보와 수수료를 명확하게 보여드립니다." },
          ].map(({ icon: Icon, title, body }) => <div key={title} className="flex gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eaf2f8] text-[#3a6aa0]"><Icon size={19} strokeWidth={1.7} /></div><div><h3 className="m-0 text-[15px] font-semibold text-[#274d73]">{title}</h3><p className="mt-2 text-[12px] leading-[1.7] text-[#8397a9]">{body}</p></div></div>)}
        </div>
        <div className="mt-16 flex items-center justify-between rounded-[14px] bg-[#eaf2f8] px-8 py-6"><div><p className="m-0 text-[15px] font-semibold text-[#2c5a8c]">아직 JW에셋 계정이 없으신가요?</p><p className="mt-1 text-[12px] text-[#7792aa]">플랫폼을 먼저 둘러보고 나에게 맞는 거래 환경을 찾아보세요.</p></div><a href="https://smart-trade.kr/" className="flex items-center gap-2 rounded-[7px] bg-[#2c5a8c] px-5 py-3 text-[12px] font-semibold text-white">JW에셋 둘러보기 <ArrowUpRight size={14} /></a></div>
      </section>
      <footer className="flex h-[84px] items-center justify-between border-t border-[#dde7ef] bg-white px-[72px] text-[11px] text-[#94a5b4]"><span>© JW Assets Co., Ltd. All rights reserved.</span><span className="flex items-center gap-2"><Check size={13} className="text-[#4f9a7d]" /> 안전한 거래를 위한 JW에셋</span></footer>
    </main>
  );
}