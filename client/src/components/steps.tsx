import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { UserPlus, Wallet, TrendingUp } from "lucide-react";

const steps = [
  {
    Icon: UserPlus,
    step: "01",
    title: "계좌 개설",
    description:
      "간단한 온라인 신청서 작성만으로 거래 계좌를 개설할 수 있습니다. 복잡한 서류 절차 없이 빠르게 시작하세요.",
  },
  {
    Icon: Wallet,
    step: "02",
    title: "증거금 입금",
    description:
      "거래 계좌에 증거금을 입금하면 즉시 거래가 가능합니다. 다양한 입금 방법을 지원합니다.",
  },
  {
    Icon: TrendingUp,
    step: "03",
    title: "거래 시작",
    description:
      "HTS·MTS·WTS 중 원하는 플랫폼을 선택해 글로벌 선물 시장에 접속하세요. 전문 트레이더의 환경이 기다립니다.",
  },
];

export function Steps() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-10 md:mb-14 text-center">
          <span className="inline-flex items-center rounded-full border border-[#3a6aa0] bg-white px-4 py-1.5 text-sm font-semibold text-[#3a6aa0]">
            시작하기
          </span>
          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            3단계로 거래를 시작하세요
          </h2>
          <p className="mt-4 text-base text-slate-500 md:text-lg">
            복잡한 준비 없이 단 세 단계만으로 글로벌 선물 시장에 참여할 수 있습니다.
          </p>
        </div>

        <div className="relative grid gap-5 md:grid-cols-3">
          {/* 연결선 */}
          <div className="absolute left-[calc(33.33%+1rem)] right-[calc(33.33%+1rem)] top-10 hidden h-px bg-slate-200 md:block" />

          {steps.map(({ Icon, step, title, description }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.45 }}
              className="relative z-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <span className="text-5xl font-bold leading-none text-[#3a6aa0]/15 select-none">
                  {step}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0f7ff] text-[#3a6aa0]">
                  <Icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="mt-7 text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2.5 text-sm leading-7 text-slate-500">{description}</p>

              {i < steps.length - 1 && (
                <ArrowRight className="mt-5 h-4 w-4 text-slate-300 md:hidden" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
