import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import desktopImg from "@assets/generated_images/desktop_trading_platform_screenshot.png";
import mobileImg from "@assets/generated_images/mobile_trading_app_screenshot.png";
import { Monitor, Smartphone, Download, ExternalLink } from "lucide-react";

export function Platforms() {
  return (
    <section id="platforms" className="py-16 md:py-24 bg-[#1e3a5f] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#2c4a6e] to-[#1a3050] pointer-events-none" />
      <div className="container text-center px-4 md:px-6 relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          SMART HTS / SMART MTS
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-base">
          어디서나 SMART와 함께 거래하세요. 데스크탑, 모바일 모든 기기에서 완벽한 거래 환경을 제공합니다.
        </p>

        <Tabs defaultValue="desktop" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 bg-white/10 p-1 rounded-full mb-8 md:mb-12">
            <TabsTrigger value="desktop" className="flex-1 rounded-full data-[state=active]:bg-[#3a6aa0] data-[state=active]:text-white py-2 md:py-3 text-xs md:text-sm font-bold justify-center">
              <Monitor className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 shrink-0" /> SMART HTS
            </TabsTrigger>
            <TabsTrigger value="mobile" className="flex-1 rounded-full data-[state=active]:bg-[#3a6aa0] data-[state=active]:text-white py-2 md:py-3 text-xs md:text-sm font-bold justify-center">
              <Smartphone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 shrink-0" /> SMART MTS
            </TabsTrigger>
          </TabsList>

          <TabsContent value="desktop" className="mt-0">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-left">
              <div className="flex-1 space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#6aafff]">SMART HTS 데스크탑</h3>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  SMART HTS를 데스크톱이나 노트북에 직접 설치하면 플랫폼의 모든 기능을 이용할 수 있습니다. 
                  원하는 대로 차트를 사용자 지정하고, 전문적인 기술적 분석 도구를 활용하세요.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <motion.a
                    href="https://smart-trade.kr/download/SMART%20Setup%201.0.23.exe"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="button-download-hts"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3a6aa0] to-[#5a8ac0] text-white font-bold rounded-full px-8 py-4 text-base shadow-lg shadow-blue-500/25 cursor-pointer border border-white/20"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(58, 106, 160, 0.4)" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Download className="w-5 h-5" />
                    HTS 다운로드
                  </motion.a>
                </div>
              </div>
              <div className="flex-1">
                <img src={desktopImg} alt="Desktop Platform" className="rounded-lg shadow-2xl border border-white/10" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="mt-0">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-left">
              <div className="flex-1 space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#6aafff]">SMART MTS</h3>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  이동 중에도 거래 기회를 놓치지 마세요. SMART MTS 앱을 통해 언제 어디서나 시장에 접속하고 거래를 관리할 수 있습니다.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <motion.a
                    href="https://smart-trade.kr/mts"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="button-access-mts"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3a6aa0] to-[#5a8ac0] text-white font-bold rounded-full px-8 py-4 text-base shadow-lg shadow-blue-500/25 cursor-pointer border border-white/20"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(58, 106, 160, 0.4)" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    MTS 접속
                  </motion.a>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <img src={mobileImg} alt="Mobile App" className="max-w-[300px] rounded-3xl shadow-2xl border-4 border-slate-700" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
