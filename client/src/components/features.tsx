import { motion } from "framer-motion";
import { BarChart2, Radio, Shield, Zap, ArrowRight } from "lucide-react";

const features = [
  { icon: Zap, title: "빠른 주문 체결", description: "해외선물 시장의 움직임을 놓치지 않도록 빠르고 정확한 주문 환경을 제공합니다.", tag: "0.1초 체결" },
  { icon: BarChart2, title: "고급 기술적 분석", description: "다양한 보조지표와 멀티차트로 시장의 흐름을 더 깊이 읽고 전략을 세우세요.", tag: "80+ 지표" },
  { icon: Radio, title: "실시간 시세", description: "글로벌 주요 거래소의 실시간 시세와 주요 이벤트를 한 화면에서 확인합니다.", tag: "LIVE DATA" },
  { icon: Shield, title: "안정적인 서버", description: "안정적인 인프라와 보안 시스템으로 중요한 순간에도 흔들림 없는 거래를 지원합니다.", tag: "99.9% 안정성" },
];

export function Features() {
  return (
    <section id="features" className="bg-white py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="mb-12 max-w-2xl">
          <span className="rounded-full bg-[#e8eef5] px-4 py-2 text-xs font-bold tracking-widest text-[#3a6aa0]">플랫폼 특징</span>
          <h2 className="mt-5 text-3xl font-bold text-slate-800 md:text-5xl">왜 JW에셋을<br /><span className="text-[#3a6aa0]">선택하는가?</span></h2>
          <p className="mt-5 text-slate-500">시장에 집중할 수 있도록, 거래에 필요한 모든 것을 빠르고 명확하게 설계했습니다.</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div key={feature.title} data-testid={`card-feature-${index}`} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileHover={{ y: -4 }} className="group border-l-4 border-[#3a6aa0] rounded-r-2xl border-y border-r border-slate-200 bg-[#f8fafc] p-7 shadow-sm transition-shadow hover:shadow-xl md:p-8">
              <div className="mb-7 flex items-start justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#3a6aa0] to-[#77a5d1] text-white shadow-lg"><feature.icon className="h-6 w-6" /></div><span className="rounded-full bg-[#e8eef5] px-3 py-1 text-[11px] font-bold tracking-wider text-[#3a6aa0]">{feature.tag}</span></div>
              <h3 className="text-xl font-bold text-slate-800">{feature.title}</h3><p className="mt-3 max-w-md leading-7 text-slate-500">{feature.description}</p>
              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#3a6aa0]">자세히 알아보기 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#1e3a5f] p-7 text-white md:flex-row md:items-center md:p-9"><div><p className="text-2xl font-bold">15개 이상의 해외선물 상품</p><p className="mt-2 text-slate-300">지금 바로 글로벌 시장을 만나보세요.</p></div><a href="#platforms" className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#1e3a5f] transition-colors hover:bg-[#dcecff]">거래 시작하기 <ArrowRight className="ml-2 inline h-4 w-4" /></a></div>
      </div>
    </section>
  );
}
