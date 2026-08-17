import { ArrowUpRight, Check, ChevronRight, Download, ExternalLink, Layers3, MonitorDown, Smartphone, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

const platforms = [
  {
    no: "01",
    name: "HTS",
    label: "Desktop Trading",
    audience: "정밀한 분석을 원하는 트레이더",
    desc: "빠른 주문과 차트 분석, 다중 모니터 환경에 최적화된 데스크탑 거래 프로그램",
    icon: MonitorDown,
    href: "https://hts.jw-asset.kr",
    action: "HTS 다운로드",
  },
  {
    no: "02",
    name: "MTS",
    label: "Mobile Trading",
    audience: "언제 어디서나 시장을 확인하는 투자자",
    desc: "이동 중에도 시세 확인부터 주문까지. 필요한 기능만 담은 모바일 거래 환경",
    icon: Smartphone,
    href: "https://jw-asset.kr/",
    action: "모바일 거래 시작",
  },
  {
    no: "03",
    name: "WTS",
    label: "Web Trading",
    audience: "설치 없이 바로 시작하는 투자자",
    desc: "별도의 설치 없이 브라우저에서 로그인하고, 시장의 흐름에 즉시 대응",
    icon: Layers3,
    href: "https://jw-asset.kr/",
    action: "WTS 접속",
  },
];

export function BoldImpact() {
  const [activePlatform, setActivePlatform] = useState("HTS");

  return (
    <main className="min-h-screen overflow-hidden text-[#102a44]" style={{ background: "#e8eef5", fontFamily: "'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif" }}>
      <section className="relative min-h-[690px] px-16 pt-7 text-white" style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2c5a8c 56%, #3a6aa0 100%)" }}>
        <div className="absolute inset-0 opacity-[.09]" style={{ backgroundImage: "linear-gradient(120deg, transparent 0 45%, #fff 45.1% 45.3%, transparent 45.4%), linear-gradient(30deg, transparent 0 72%, #fff 72.1% 72.3%, transparent 72.4%)", backgroundSize: "240px 240px" }} />
        <nav className="relative z-10 flex items-center justify-between border-b border-white/15 pb-6">
          <img src="/__mockup/images/jw_logo.png" alt="JW에셋" className="h-10 w-auto object-contain brightness-0 invert" />
          <div className="flex items-center gap-9 text-[13px] font-semibold tracking-wide text-white/75">
            <span>서비스</span><span>거래 안내</span><span>고객지원</span>
            <a href="https://jw-asset.kr/" className="flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-white transition hover:bg-white hover:text-[#1e3a5f]">거래 시작하기 <ArrowUpRight size={15} /></a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto flex max-w-[1180px] items-center justify-between pt-20">
          <div className="w-[58%]">
            <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[.23em] text-[#a9d5ff]"><span className="h-px w-9 bg-[#a9d5ff]" /> Global Futures Platform</div>
            <h1 className="max-w-[680px] text-[3.5rem] font-black leading-[1.12] tracking-[-.07em]">해외선물,<br /><span className="text-[#b9e0ff]">이제 JW에셋으로</span></h1>
            <p className="mt-7 max-w-[500px] text-[17px] leading-8 text-white/72">더 빠르고 선명하게 시장을 읽는 방법.<br />글로벌 시장을 향한 당신의 다음 거래를 JW에셋이 함께합니다.</p>
            <div className="mt-10 flex gap-3">
              <a href="https://hts.jw-asset.kr" className="group flex items-center gap-3 rounded-lg bg-white px-6 py-4 text-sm font-extrabold text-[#1e3a5f] shadow-xl shadow-[#102a44]/20 transition hover:-translate-y-1">HTS 다운로드 <Download size={17} className="transition group-hover:translate-y-0.5" /></a>
              <a href="https://jw-asset.kr/" className="flex items-center gap-3 rounded-lg border border-white/35 bg-white/10 px-6 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/20">WTS 접속 <ExternalLink size={17} /></a>
            </div>
            <div className="mt-16 flex items-center gap-8 text-xs text-white/55">
              <span className="flex items-center gap-2"><Check size={15} className="text-[#a9d5ff]" /> 실시간 글로벌 시세</span>
              <span className="flex items-center gap-2"><Check size={15} className="text-[#a9d5ff]" /> 전문 트레이딩 환경</span>
            </div>
          </div>

          <div className="relative mr-12 h-[390px] w-[390px]" aria-label="JW에셋 추상 큐브 그래픽">
            <div className="absolute inset-9 rounded-full border border-white/15" />
            <div className="absolute inset-20 rounded-full border border-dashed border-[#a9d5ff]/35" />
            <div className="absolute left-[92px] top-[58px] h-[218px] w-[218px] rotate-[30deg] skew-y-[-14deg] rounded-[34px] border border-white/55 bg-gradient-to-br from-[#b9e0ff]/45 via-[#3a6aa0]/40 to-[#102a44]/70 shadow-[22px_28px_50px_rgba(10,32,59,.35)]" />
            <div className="absolute left-[136px] top-[105px] h-[130px] w-[130px] rotate-[30deg] rounded-[26px] border-2 border-[#d6eeff]/85 bg-[#3a6aa0]/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,.18)]" />
            <div className="absolute left-[166px] top-[135px] flex h-[70px] w-[70px] rotate-[30deg] items-center justify-center rounded-xl bg-white text-2xl font-black text-[#2c5a8c] shadow-xl">JW</div>
            <span className="absolute right-4 top-20 h-2 w-2 rounded-full bg-[#b9e0ff] shadow-[0_0_20px_#b9e0ff]" /><span className="absolute bottom-24 left-8 h-1.5 w-1.5 rounded-full bg-white/80" />
            <div className="absolute bottom-3 right-0 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold tracking-[.18em] text-white/60 backdrop-blur">MARKET / MOVE / MORE</div>
          </div>
        </div>
        <div className="absolute bottom-0 left-16 right-16 flex items-end justify-between border-t border-white/15 py-5 text-xs text-white/45"><span>JW ASSETS CO., LTD.</span><span className="flex items-center gap-2">SCROLL TO EXPLORE <ChevronRight size={14} /></span></div>
      </section>

      <section className="bg-[#f8fafc] px-16 py-24">
        <div className="mx-auto max-w-[1150px]">
          <div className="mb-14 flex items-end justify-between"><div><p className="mb-4 text-xs font-extrabold tracking-[.22em] text-[#3a6aa0]">YOUR TRADING, YOUR WAY</p><h2 className="text-[2.7rem] font-black tracking-[-.06em] text-[#102a44]">당신의 거래에 맞는<br />플랫폼을 선택하세요.</h2></div><p className="mb-1 w-64 text-sm leading-6 text-[#61758a]">시장의 속도는 모두에게 다릅니다.<br />JW에셋은 세 가지 방식으로 답합니다.</p></div>
          <div className="border-t-2 border-[#102a44]">
            {platforms.map((platform) => { const Icon = platform.icon; const active = activePlatform === platform.name; return (
              <div key={platform.name} onMouseEnter={() => setActivePlatform(platform.name)} className={`group grid grid-cols-[80px_175px_220px_1fr_175px] items-center gap-5 border-b border-[#cbd8e5] py-7 transition ${active ? "bg-[#3a6aa0]/[.05]" : ""}`}>
                <span className="pl-3 font-mono text-sm text-[#8aa0b5]">{platform.no}</span>
                <div className="flex items-center gap-3"><div className={`flex h-11 w-11 items-center justify-center rounded-xl transition ${active ? "bg-[#3a6aa0] text-white" : "bg-[#e2eaf2] text-[#3a6aa0]"}`}><Icon size={21} /></div><div><div className="text-lg font-black">{platform.name}</div><div className="text-[10px] font-bold uppercase tracking-wider text-[#8aa0b5]">{platform.label}</div></div></div>
                <div className="text-sm font-bold leading-5 text-[#405b73]">{platform.audience}</div><p className="text-sm leading-6 text-[#71869a]">{platform.desc}</p>
                <a href={platform.href} className="flex items-center justify-center gap-2 justify-self-end rounded-md border border-[#b9c9d8] px-4 py-3 text-xs font-extrabold text-[#2c5a8c] transition hover:border-[#3a6aa0] hover:bg-[#3a6aa0] hover:text-white">{platform.action}<ArrowUpRight size={14} /></a>
              </div>
            ); })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-16 py-20 text-white" style={{ background: "linear-gradient(110deg, #102a44, #1e3a5f 65%, #2c5a8c)" }}>
        <div className="absolute -right-16 -top-28 h-80 w-80 rounded-full border-[30px] border-white/[.04]" /><div className="relative mx-auto flex max-w-[1150px] items-center justify-between"><div><p className="mb-4 flex items-center gap-2 text-xs font-extrabold tracking-[.2em] text-[#b9e0ff]"><Sparkles size={15} /> READY WHEN YOU ARE</p><h2 className="text-[2.8rem] font-black tracking-[-.06em]">지금 바로 시작하세요.</h2><p className="mt-3 text-sm text-white/55">글로벌 시장을 향한 첫 걸음, JW에셋에서.</p></div><a href="https://hts.jw-asset.kr" className="flex items-center gap-3 rounded-lg bg-[#b9e0ff] px-7 py-4 text-sm font-black text-[#1e3a5f] transition hover:-translate-y-1 hover:bg-white">거래 플랫폼 선택하기 <Zap size={17} /></a></div>
      </section>
      <footer className="flex items-center justify-between bg-[#102a44] px-16 py-7 text-[11px] text-white/40"><span>© 2024 JW ASSETS CO., LTD. ALL RIGHTS RESERVED.</span><span>해외선물 투자에는 원금 초과 손실 위험이 있습니다.</span></footer>
    </main>
  );
}