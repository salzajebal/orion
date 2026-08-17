import { ArrowUpRight, Check, ChevronDown, Download, Globe2, Headphones, LineChart, Monitor, Smartphone, Sparkles, TimerReset, Wifi } from "lucide-react";

const platforms = [
  {
    eyebrow: "DESKTOP TERMINAL",
    name: "HTS",
    title: "JW Pro",
    description: "정교한 차트와 빠른 주문 환경을 하나의 화면에 담았습니다.",
    detail: "Windows 10 이상 · 64bit",
    Icon: Monitor,
    href: "https://hts.jw-asset.kr",
    action: "HTS 설치파일 다운로드",
    featured: true,
  },
  {
    eyebrow: "MOBILE TRADING",
    name: "MTS",
    title: "JW Mobile",
    description: "언제 어디서나 시장을 확인하고, 단 한 번의 터치로 주문하세요.",
    detail: "iOS · Android",
    Icon: Smartphone,
    href: "https://jw-asset.kr/",
    action: "모바일 앱 다운로드",
    featured: false,
  },
  {
    eyebrow: "BROWSER TRADING",
    name: "WTS",
    title: "JW Web",
    description: "별도의 설치 없이 브라우저에서 바로 시작하는 트레이딩.",
    detail: "Chrome · Edge · Safari",
    Icon: Globe2,
    href: "https://jw-asset.kr/",
    action: "웹 트레이딩 시작",
    featured: false,
  },
];

const benefits = [
  { Icon: TimerReset, label: "0.1초 체결", note: "빠르고 정확한 주문" },
  { Icon: Headphones, label: "24/5 지원", note: "거래일 내 전문 상담" },
  { Icon: Wifi, label: "실시간 시세", note: "끊김 없는 글로벌 데이터" },
];

export function DarkPremium() {
  return (
    <main
      className="min-h-screen overflow-hidden text-white"
      style={{
        background: "#1e3a5f",
        fontFamily: "'Noto Sans KR', 'Pretendard', sans-serif",
        backgroundImage:
          "radial-gradient(circle at 50% 0%, rgba(75,130,185,.25), transparent 38%), linear-gradient(135deg, rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(45deg, rgba(255,255,255,.018) 1px, transparent 1px)",
        backgroundSize: "auto, 54px 54px, 54px 54px",
      }}
    >
      <div className="mx-auto w-[1120px] px-3 pb-16">
        <header className="flex h-[86px] items-center justify-between border-b border-white/10">
          <a href="#top" className="flex items-center gap-3">
            <img src="/__mockup/images/jw_logo.png" alt="JW에셋" className="h-9 w-auto object-contain" />
            <span className="h-5 w-px bg-white/20" />
            <span className="text-[11px] font-medium tracking-[.28em] text-slate-300">GLOBAL FUTURES</span>
          </a>
          <nav className="flex items-center gap-9 text-[13px] text-slate-300">
            <a href="#platforms" className="transition-colors hover:text-white">플랫폼</a>
            <a href="#benefits" className="transition-colors hover:text-white">거래 환경</a>
            <a href="#support" className="transition-colors hover:text-white">고객지원</a>
            <a href="https://jw-asset.kr/" className="flex items-center gap-1.5 text-white transition-colors hover:text-sky-200">
              JW에셋 바로가기 <ArrowUpRight size={14} strokeWidth={1.8} />
            </a>
          </nav>
        </header>

        <section id="top" className="relative flex flex-col items-center pb-20 pt-[88px] text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200/20 bg-sky-100/[.07] px-4 py-2 text-[11px] font-semibold tracking-[.18em] text-sky-100">
            <Sparkles size={13} className="text-sky-300" /> PREMIUM TRADING EXPERIENCE
          </div>
          <h1 className="text-[52px] font-semibold leading-[1.18] tracking-[-.055em] text-white">
            전문가를 위한<br /><span className="text-sky-200">해외선물 거래</span>
          </h1>
          <p className="mt-6 max-w-[490px] text-[15px] leading-7 text-slate-300">
            시장을 읽는 모든 순간에 집중할 수 있도록.<br />
            JW에셋의 안정적인 거래 환경을 지금 만나보세요.
          </p>
          <a href="#platforms" className="mt-9 flex items-center gap-2 text-[13px] font-medium text-sky-200 transition-colors hover:text-white">
            내게 맞는 플랫폼 찾기 <ChevronDown size={16} />
          </a>
          <div className="absolute left-1/2 top-[280px] -z-0 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-300/10 blur-[80px]" />
        </section>

        <section id="platforms" className="relative z-10">
          <div className="mb-7 flex items-end justify-between">
            <div>
              <p className="mb-2 text-[11px] font-semibold tracking-[.2em] text-sky-300">CHOOSE YOUR PLATFORM</p>
              <h2 className="text-[25px] font-semibold tracking-[-.035em]">거래 방식에 맞춰 선택하세요</h2>
            </div>
            <p className="mb-1 text-xs text-slate-400">모든 플랫폼은 하나의 계정으로 연결됩니다.</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {platforms.map(({ Icon, ...platform }) => (
              <article
                key={platform.name}
                className="group relative flex min-h-[308px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[.055] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/40 hover:bg-white/[.085] hover:shadow-[0_16px_55px_rgba(58,106,160,.38)]"
              >
                {platform.featured && (
                  <span className="absolute right-5 top-5 rounded-md border border-sky-300/25 bg-sky-300/10 px-2.5 py-1 text-[10px] font-semibold tracking-[.08em] text-sky-200">MOST POPULAR</span>
                )}
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-sky-200/20 bg-[#2c5a8c]/35 text-sky-200">
                  <Icon size={23} strokeWidth={1.5} />
                </div>
                <p className="text-[10px] font-semibold tracking-[.18em] text-slate-400">{platform.eyebrow}</p>
                <h3 className="mt-2 flex items-baseline gap-2 text-[27px] font-semibold tracking-[-.045em]">
                  {platform.name}<span className="text-[14px] font-normal tracking-normal text-slate-400">{platform.title}</span>
                </h3>
                <p className="mt-3 min-h-[48px] text-[13px] leading-6 text-slate-300">{platform.description}</p>
                <p className="mt-2 text-[11px] text-slate-500">{platform.detail}</p>
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2c5a8c] to-[#3a6aa0] text-[12px] font-semibold text-white shadow-[0_5px_18px_rgba(38,83,130,.25)] transition-all hover:brightness-110"
                >
                  <Download size={15} strokeWidth={2} /> {platform.action}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="benefits" className="mt-7 grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-[#173454]/65 px-2 py-5">
          {benefits.map(({ Icon, label, note }) => (
            <div key={label} className="flex items-center justify-center gap-3">
              <Icon size={20} strokeWidth={1.5} className="text-sky-300" />
              <div><p className="text-[13px] font-semibold">{label}</p><p className="mt-0.5 text-[11px] text-slate-400">{note}</p></div>
            </div>
          ))}
        </section>

        <section id="support" className="mt-16 flex items-center justify-between border-t border-white/10 pt-9">
          <div>
            <p className="text-[11px] font-semibold tracking-[.18em] text-slate-400">JW ASSETS CO., LTD.</p>
            <p className="mt-2 text-[13px] text-slate-300">더 나은 거래를 위한 가장 단단한 선택</p>
          </div>
          <div className="flex items-center gap-6 text-[11px] text-slate-400">
            <span className="flex items-center gap-2"><Check size={14} className="text-sky-300" /> 안전한 보안 시스템</span>
            <span>고객센터 02-6929-3010</span>
            <span className="text-slate-500">© JW에셋</span>
          </div>
        </section>
      </div>
    </main>
  );
}