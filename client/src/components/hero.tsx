import { motion } from "framer-motion";
import symbolImg from "@assets/jw_symbol.png";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Download, Smartphone } from "lucide-react";

const stats = [
  ["0.1초", "빠른 체결"],
  ["15개+", "거래 종목"],
  ["24/5", "고객 지원"],
  ["99.9%", "서버 안정성"],
];

export function Hero() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="container grid items-center gap-14 px-4 py-20 md:grid-cols-[1.05fr_.95fr] md:px-6 md:py-28">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>
          <span className="inline-flex rounded-full border border-[#3a6aa0] bg-white px-4 py-2 text-sm font-semibold text-[#3a6aa0]">
            해외선물 전문 플랫폼
          </span>
          <h1 className="mt-7 text-5xl font-bold leading-[1.12] tracking-tight text-slate-900 md:text-7xl">
            JW에셋으로<br />해외선물을 거래하세요
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            빠른 체결과 선명한 분석 환경으로 글로벌 선물 시장을 더 자신 있게 만나보세요.
          </p>
          <div className="mt-9 flex max-w-xl divide-x divide-slate-200 border-y border-slate-200 py-4">
            {stats.map(([value, label]) => (
              <div key={label} className="min-w-0 flex-1 px-3 first:pl-0 md:px-5">
                <p className="text-xl font-bold text-slate-900 md:text-2xl">{value}</p>
                <p className="mt-1 text-xs text-slate-500 md:text-sm">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild className="h-12 rounded-lg bg-[#3a6aa0] px-6 font-bold text-white hover:bg-[#315b8b]">
              <a href="https://hts.jw-asset.kr" target="_blank" rel="noopener noreferrer"><Download className="mr-2 h-4 w-4" />HTS 다운로드</a>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-lg border-[#3a6aa0] px-6 font-bold text-[#3a6aa0] hover:bg-[#f0f7ff]">
              <a href="https://jw-asset.kr/" target="_blank" rel="noopener noreferrer"><Smartphone className="mr-2 h-4 w-4" />MTS 접속</a>
            </Button>
          </div>
        </motion.div>
        <motion.div className="flex justify-center" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: .1 }}>
          <div className="relative flex aspect-square w-full max-w-sm items-center justify-center rounded-[2.5rem] border border-slate-200 bg-[#f0f7ff] p-12 shadow-sm md:max-w-md">
            <img src={symbolImg} alt="JW에셋 심볼" className="w-full max-w-[280px] drop-shadow-xl md:max-w-[340px]" />
            <div className="absolute bottom-7 right-7 flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm">
              <ArrowUpRight className="h-4 w-4 text-[#3a6aa0]" />실시간 시장 연결
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}