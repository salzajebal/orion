import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/laptop_and_mobile_phone_displaying_professional_forex_trading_charts.png";
import { Button } from "@/components/ui/button";
import { Download, UserPlus } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full bg-primary text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none" />
      
      <div className="container py-12 px-4 md:py-32 md:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2 space-y-6 md:space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              MetaTrader 5 <span className="text-secondary">(MT5)</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light mt-3 md:mt-4 text-gray-300">
              MetaTrader 경험 업그레이드
            </h2>
            <p className="text-gray-400 mt-4 md:mt-6 max-w-lg text-base md:text-lg">
              고급 차트, 자동 매매, 다양한 분석 도구를 제공하는 세계적인 거래 플랫폼 MT5를 경험하세요.
            </p>

            <motion.div 
              className="mt-6 md:mt-8 bg-white/5 backdrop-blur-sm border border-secondary/50 rounded-xl p-4 md:p-6 relative overflow-hidden max-w-md cursor-pointer hover:bg-white/10 hover:border-secondary transition-all duration-300 group"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg animate-pulse">
                EVENT
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 pr-12">
                26년도 Metatrader5 에서 <span className="text-secondary">최대 10% 제공</span>
              </h3>
              <div className="space-y-1 text-sm text-gray-300">
                <p>기간: 2025.12.01 ~ 혜택 소진시</p>
                <p>대상: 신규 코드 가입고객</p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-secondary text-sm font-semibold group-hover:gap-3 transition-all">
                자세히 보기 <span className="text-lg">→</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              className="bg-secondary text-secondary-foreground hover:bg-yellow-400 rounded-full px-6 py-5 md:px-8 md:py-6 text-sm md:text-base font-bold flex items-center gap-2 w-full sm:w-auto justify-center"
              onClick={() => document.getElementById('platforms')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Download className="w-5 h-5" />
              MT5 다운로드
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary rounded-full px-6 py-5 md:px-8 md:py-6 text-sm md:text-base font-bold flex items-center gap-2 bg-transparent w-full sm:w-auto justify-center"
              onClick={() => window.location.href = "https://btqac56x.metaiinvest.pro/"}
            >
              <UserPlus className="w-5 h-5" />
              계정 가입하기
            </Button>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 relative z-10">
          <motion.img
            src={heroImage}
            alt="MetaTrader 5 Platform"
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
