import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/hero_trading_platform_clean.png";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

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
              SMART
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light mt-3 md:mt-4 text-gray-300">
              SMART 경험 업그레이드
            </h2>
            <p className="text-gray-400 mt-4 md:mt-6 max-w-lg text-base md:text-lg">
              고급 차트, 자동 매매, 다양한 분석 도구를 제공하는 세계적인 거래 플랫폼 SMART를 경험하세요.
            </p>

            <motion.div 
              className="mt-6 md:mt-8 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 max-w-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-secondary">500+</p>
                  <p className="text-xs md:text-sm text-gray-400 mt-1">거래 가능 상품</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-secondary">0.0</p>
                  <p className="text-xs md:text-sm text-gray-400 mt-1">최소 스프레드</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-secondary">24/7</p>
                  <p className="text-xs md:text-sm text-gray-400 mt-1">고객 지원</p>
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
            <Button 
              className="bg-secondary text-secondary-foreground hover:bg-yellow-400 rounded-full px-6 py-5 md:px-8 md:py-6 text-sm md:text-base font-bold flex items-center gap-2 w-full sm:w-auto justify-center"
              onClick={() => document.getElementById('platforms')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Download className="w-5 h-5" />
              SMART HTS 다운로드
            </Button>
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
