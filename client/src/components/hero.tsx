import { motion } from "framer-motion";
import symbolImg from "@assets/jw_symbol_no_bg.png";
import logoImg from "@assets/jw_logo.png";

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
          className="w-[420px] opacity-[0.18] sm:w-[520px] md:w-[640px] lg:w-[720px]"
          draggable={false}
        />
      </div>

      {/* 콘텐츠 */}
      <div className="container relative z-10 flex flex-col items-center px-4 py-16 pb-24 text-center sm:px-6 sm:py-20 sm:pb-28 md:py-32 md:pb-36">

        {/* 로고 — 원래 색상 */}
        <motion.img
          src={logoImg}
          alt="JW에셋"
          className="mb-2 h-12 w-auto object-contain sm:h-14 md:h-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          draggable={false}
        />

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
          빠른 체결과 선명한 분석 환경으로 글로벌 시장을 더 자신 있게 만나보세요.
        </motion.p>

      </div>
    </section>
  );
}
