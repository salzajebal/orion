import { motion } from "framer-motion";
import { Activity, BarChart2, Shield, Zap } from "lucide-react";

const features = [
  {
    Icon: Zap,
    title: "초고속 주문 체결",
    description:
      "0.1초 이내의 초저지연 체결 인프라로 시장의 빠른 움직임에 정확히 대응합니다. 슬리피지를 최소화하고 최적의 진입 타이밍을 확보하세요.",
  },
  {
    Icon: BarChart2,
    title: "전문 기술 분석 도구",
    description:
      "80종 이상의 기술 지표, 멀티 타임프레임 차트, 시장 깊이(DOM) 분석을 통해 거래 전략을 정밀하게 설계할 수 있습니다.",
  },
  {
    Icon: Activity,
    title: "실시간 글로벌 시세",
    description:
      "CME·CBOT 등 주요 글로벌 거래소의 실시간 선물 시세를 지연 없이 제공합니다. 경제 지표 캘린더와 연동해 시장 이슈를 즉시 파악하세요.",
  },
  {
    Icon: Shield,
    title: "99.9% 안정적 인프라",
    description:
      "이중화 서버 구조와 24/5 모니터링 체계로 거래 중단 없는 환경을 보장합니다. 장 중에도 안심하고 포지션을 유지하세요.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-white py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-10 md:mb-14 max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-[#3a6aa0] bg-white px-4 py-1.5 text-sm font-semibold text-[#3a6aa0]">
            플랫폼 특징
          </span>
          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            JW에셋이 선택받는 이유
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-500 md:text-lg">
            해외선물 거래에 필요한 핵심 기능을 하나의 플랫폼에 담았습니다.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-colors hover:border-[#3a6aa0]/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0f7ff]">
                <Icon className="h-6 w-6 text-[#3a6aa0]" />
              </div>
              <h3 className="mt-5 text-base font-bold text-slate-900">{title}</h3>
              <p className="mt-2.5 text-sm leading-7 text-slate-500">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
