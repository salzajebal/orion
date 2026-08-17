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
    <section className="overflow-hidden bg-white">
      <div className="container flex flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-20 md:py-28">

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
          className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          JW에셋으로<br />해외선물을 거래하세요
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl text-base leading-8 text-slate-500 sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          빠른 체결과 선명한 분석 환경으로 글로벌 선물 시장을 더 자신 있게 만나보세요.
        </motion.p>

        {/* 로고 — 정중앙, 풀 컬러 */}
        <motion.div
          className="my-10 md:my-14"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 120, damping: 16 }}
        >
          <img
            src={symbolImg}
            alt="JW에셋 심볼"
            className="h-44 w-44 object-contain drop-shadow-xl sm:h-56 sm:w-56 md:h-72 md:w-72"
            draggable={false}
          />
        </motion.div>

        {/* 통계 */}
        <motion.div
          className="flex w-full max-w-lg divide-x divide-slate-200 border-y border-slate-200 py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
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
