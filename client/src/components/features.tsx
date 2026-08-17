import { motion } from "framer-motion";
import { Activity, BarChart2, Shield, Zap } from "lucide-react";

const features = [
  [Zap, "빠른 체결", "시장 움직임을 놓치지 않도록 빠르고 정확한 주문 환경을 제공합니다."],
  [BarChart2, "기술분석", "다양한 보조지표와 멀티차트로 시장 흐름을 더 깊이 읽어보세요."],
  [Activity, "실시간 시세", "글로벌 주요 거래소의 실시간 시세를 한 화면에서 확인합니다."],
  [Shield, "안정 서버", "안정적인 인프라와 보안 시스템으로 흔들림 없는 거래를 지원합니다."],
];

export function Features() {
  return <section id="features" className="bg-white py-20 md:py-28">
    <div className="container px-4 md:px-6">
      <div className="mb-12 max-w-2xl"><h2 className="text-3xl font-bold text-slate-900 md:text-5xl">JW에셋이 선택받는 이유</h2><p className="mt-5 text-lg leading-8 text-slate-500">거래에 필요한 핵심 기능을 명확하고 안정적으로 담았습니다.</p></div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(([Icon, title, description], index) => { const FeatureIcon = Icon as typeof Zap; return <motion.div key={title as string} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-colors hover:border-[#3a6aa0]/40">
          <FeatureIcon className="h-8 w-8 text-[#3a6aa0]" /><h3 className="mt-6 text-lg font-bold text-slate-900">{title as string}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{description as string}</p>
        </motion.div>; })}
      </div>
    </div>
  </section>;
}