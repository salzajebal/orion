import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/hero_trading_platform_clean.png";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Download, Gauge, ShieldCheck, Smartphone, Trophy, Wifi } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0f2744] to-[#1e3a5f] text-white">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#3a6aa0]/30 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#6aafff]/10 blur-3xl" />
      <div className="container relative z-10 flex flex-col items-center gap-14 px-4 py-20 md:flex-row md:gap-12 md:px-6 md:py-28">
        <div className="z-10 w-full space-y-7 md:w-[52%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6aafff]/30 bg-[#3a6aa0]/30 px-4 py-2 text-sm font-semibold text-[#dcecff]">
              <Trophy className="h-4 w-4 text-[#8fc4ff]" /> 국내 1위 해외선물 전문 플랫폼
            </div>
            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-7xl">
              해외선물 거래의<br /><span className="text-[#9fceff]">새로운 기준</span>
            </h1>
            <h2 className="mt-5 text-xl font-medium text-slate-200 sm:text-2xl">
              JW에셋과 함께 글로벌 선물 시장을 정복하세요
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              정밀한 분석 도구와 빠른 체결 인프라를 한 곳에 담았습니다. 매 순간의 시장 기회를 더 선명하게 확인하고 자신 있게 실행하세요.
            </p>

            <motion.div
              className="mt-8 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-2xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {[
                { value: "0.1초", label: "체결속도", icon: Gauge },
                { value: "15개+", label: "거래종목", icon: ArrowUpRight },
                { value: "24/5", label: "고객지원", icon: Wifi },
                { value: "99.9%", label: "서버안정성", icon: ShieldCheck },
              ].map(({ value, label, icon: Icon }) => (
                <div key={label} className="bg-[#173657]/70 p-4 md:p-5">
                  <Icon className="mb-3 h-4 w-4 text-[#8fc4ff]" />
                  <p className="text-2xl font-bold text-white md:text-3xl">{value}</p>
                  <p className="mt-1 text-xs text-slate-400">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild className="h-14 rounded-xl bg-[#3a6aa0] px-6 text-sm font-bold text-white shadow-xl shadow-[#091d35]/40 hover:bg-[#4b7db5]">
              <a href="https://hts.jw-asset.kr" target="_blank" rel="noopener noreferrer"><Download className="mr-2 h-5 w-5" /> HTS 다운로드</a>
            </Button>
            <Button asChild variant="outline" className="h-14 rounded-xl border-white/30 bg-white/5 px-6 text-sm font-bold text-white hover:bg-white/15 hover:text-white">
              <a href="https://jw-asset.kr/" target="_blank" rel="noopener noreferrer"><Smartphone className="mr-2 h-5 w-5" /> MTS 접속</a>
            </Button>
          </motion.div>
        </div>

        <div className="relative z-10 w-full md:w-[48%]">
          <div className="absolute -left-5 top-10 z-20 rounded-xl border border-white/20 bg-[#244b73]/90 px-4 py-3 text-sm shadow-2xl backdrop-blur-md">
            <span className="block text-xs text-slate-300">나스닥</span><strong className="text-[#8fd1a6]">+2.1%</strong>
          </div>
          <div className="absolute -right-3 bottom-12 z-20 rounded-xl border border-white/20 bg-[#244b73]/90 px-4 py-3 text-sm shadow-2xl backdrop-blur-md">
            <span className="block text-xs text-slate-300">금 선물</span><strong className="text-[#8fd1a6]">+0.8%</strong>
          </div>
          <div className="absolute inset-4 rounded-3xl bg-[#6aafff]/20 blur-3xl" />
          <motion.img
            src={heroImage}
            alt="JW에셋 Platform"
            className="relative w-full rounded-2xl border border-white/20 shadow-2xl shadow-black/30"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          />
        </div>
      </div>
    </section>
  );
}
