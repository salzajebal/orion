import { motion } from "framer-motion";
import symbolImg from "@assets/jw_symbol.png";
import { Button } from "@/components/ui/button";
import { Download, Smartphone } from "lucide-react";

const stats = [
  ["0.1초", "빠른 체결"],
  ["15개+", "거래 종목"],
  ["24/5", "고객 지원"],
  ["99.9%", "서버 안정성"],
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* 배경 로고 — 반투명, 우측 하단에 크게 */}
      <div
        className="pointer-events-none absolute -right-16 -top-8 h-[110%] w-[70%] max-w-3xl select-none opacity-[0.07] sm:-right-8 sm:w-[60%] md:right-0 md:top-1/2 md:h-auto md:w-[52%] md:-translate-y-1/2"
        aria-hidden="true"
      >
        <img
          src={symbolImg}
          alt=""
          className="h-full w-full object-contain"
          draggable={false}
        />
      </div>

      <div className="container relative z-10 px-4 py-16 sm:px-6 sm:py-20 md:py-28 lg:py-32">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          {/* 배지 */}
          <span className="inline-flex items-center rounded-full border border-[#3a6aa0] bg-white px-4 py-1.5 text-sm font-semibold text-[#3a6aa0]">
            해외선물 전문 플랫폼
          </span>

          {/* 제목 */}
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
            JW에셋으로<br />해외선물을<br className="sm:hidden" /> 거래하세요
          </h1>

          {/* 설명 */}
          <p className="mt-5 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
            빠른 체결과 선명한 분석 환경으로 글로벌 선물 시장을 더 자신 있게 만나보세요.
          </p>

          {/* 통계 */}
          <motion.div
            className="mt-8 grid grid-cols-4 gap-0 divide-x divide-slate-200 border-y border-slate-200 py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {stats.map(([value, label]) => (
              <div key={label} className="min-w-0 px-2 text-center first:pl-0 last:pr-0 sm:px-4">
                <p className="text-lg font-bold text-slate-900 sm:text-xl md:text-2xl">{value}</p>
                <p className="mt-0.5 text-[10px] text-slate-500 sm:text-xs sm:mt-1">{label}</p>
              </div>
            ))}
          </motion.div>

          {/* 버튼 */}
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              asChild
              className="h-12 w-full rounded-lg bg-[#3a6aa0] px-7 text-sm font-bold text-white hover:bg-[#315b8b] sm:w-auto"
            >
              <a href="https://hts.jw-asset.kr" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />HTS 다운로드
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 w-full rounded-lg border-[#3a6aa0] px-7 text-sm font-bold text-[#3a6aa0] hover:bg-[#f0f7ff] sm:w-auto"
            >
              <a href="https://jw-asset.kr/" target="_blank" rel="noopener noreferrer">
                <Smartphone className="mr-2 h-4 w-4" />MTS 접속
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
