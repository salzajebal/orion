import { motion } from "framer-motion";
import symbolImg from "@assets/jw_symbol.png";

const stats = [
  ["0.1초", "빠른 체결"],
  ["15개+", "거래 종목"],
  ["24/5", "고객 지원"],
  ["99.9%", "서버 안정성"],
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* 뒷배경 로고 — absolute, 중앙 정렬, 반투명 */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        aria-hidden="true"
      >
        <img
          src={symbolImg}
          alt=""
          className="w-[420px] opacity-[0.08] sm:w-[520px] md:w-[640px] lg:w-[720px]"
          draggable={false}
        />
      </div>

      {/* 콘텐츠 */}
      <div className="container relative z-10 flex flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-20 md:py-28">

        {/* 배지 */}
        <motion.span
          className="inline-flex items-center rounded-full border border-[#3a6aa0] bg-white px-4 py-1.5 text-sm font-semibold text-[#3a6aa0]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          해외선물 전문 플랫폼
        </motion.span>

        {/* 제목 */}
        <motion.h1
          className="mt-5 break-keep text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          JW에셋으로 해외선물을 거래하세요
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl break-keep text-base leading-8 text-slate-500 sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          빠른 체결과 선명한 분석 환경으로 글로벌 선물 시장을 더 자신 있게 만나보세요.
        </motion.p>

        {/* 통계 */}
        <motion.div
          className="mt-10 flex w-full max-w-lg divide-x divide-slate-200 border-y border-slate-200 py-4 md:mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {stats.map(([value, label]) => (
            <div key={label} className="min-w-0 flex-1 px-2 text-center sm:px-4">
              <p className="text-lg font-bold text-slate-900 sm:text-xl md:text-2xl">{value}</p>
              <p className="mt-0.5 text-[10px] text-slate-500 sm:text-xs sm:mt-1">{label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
