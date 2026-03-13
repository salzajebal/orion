import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/hero_trading_platform_clean.png";
import { Button } from "@/components/ui/button";
import { Download, Smartphone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="container py-12 px-4 md:py-32 md:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2 space-y-6 md:space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-slate-800">
              SMART
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light mt-3 md:mt-4 text-slate-600">
              해외선물 거래의 새로운 기준
            </h2>
            <p className="text-slate-500 mt-4 md:mt-6 max-w-lg text-base md:text-lg">
              고급 차트, 빠른 체결, 다양한 분석 도구를 제공하는 해외선물 전문 거래 플랫폼 SMART를 경험하세요.
            </p>

            <motion.div 
              className="mt-6 md:mt-8 bg-white/60 backdrop-blur-sm border border-slate-200/80 rounded-xl p-4 md:p-6 max-w-md shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-[#3a6aa0]">0.1초</p>
                  <p className="text-xs md:text-sm text-slate-500 mt-1">빠른 체결 속도</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-[#3a6aa0]">24/5</p>
                  <p className="text-xs md:text-sm text-slate-500 mt-1">실시간 고객 지원</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                className="bg-gradient-to-r from-[#2c5a8c] to-[#3a6aa0] text-white hover:from-[#1e4a7a] hover:to-[#2c5a8c] rounded-full px-6 py-5 md:px-8 md:py-6 text-sm md:text-base font-bold flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-blue-500/20"
                onClick={() => document.getElementById('platforms')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Download className="w-5 h-5" />
                SMART HTS 다운로드
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                className="bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white rounded-full px-6 py-5 md:px-8 md:py-6 text-sm md:text-base font-bold flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg border border-slate-200"
                onClick={() => window.open("https://smart-trade.kr/mts", "_blank")}
              >
                <Smartphone className="w-5 h-5" />
                SMART MTS 접속하기
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 relative z-10">
          <motion.img
            src={heroImage}
            alt="SMART Platform"
            className="w-full h-auto drop-shadow-2xl rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          />
        </div>
      </div>
    </section>
  );
}
