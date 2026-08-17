import { motion } from "framer-motion";
import { Monitor, Smartphone, Download, ExternalLink, CheckCircle2 } from "lucide-react";

export function Platforms() {
  return (
    <section id="platforms" className="py-16 md:py-24 bg-[#1e3a5f] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#2c4a6e] to-[#1a3050] pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">SMART HTS / MTS</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            데스크탑과 모바일, 모든 기기에서 해외선물을 거래하세요.
          </p>
        </div>

        {/* 한 박스 안에 HTS + MTS */}
        <motion.div
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* HTS 영역 */}
          <div className="p-6 md:p-10 border-b border-white/10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-[#3a6aa0]/30 rounded-2xl flex items-center justify-center border border-[#3a6aa0]/40">
                <Monitor className="w-7 h-7 text-[#6aafff]" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-white">SMART HTS</h3>
                  <span className="text-xs bg-[#3a6aa0]/40 text-[#6aafff] px-2 py-0.5 rounded-full w-fit border border-[#3a6aa0]/40">데스크탑</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  PC에 직접 설치하여 고성능 차트, 기술 분석 도구, 멀티 화면 레이아웃을 경험하세요.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-slate-400">
                  {["Windows 지원", "멀티 차트", "실시간 시세", "원클릭 주문"].map(f => (
                    <span key={f} className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#6aafff]" />{f}
                    </span>
                  ))}
                </div>
              </div>
              <motion.a
                href="https://hts.jw-asset.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-[#3a6aa0] to-[#5a8ac0] text-white font-bold rounded-xl px-6 py-3 text-sm shadow-lg shadow-blue-500/20 border border-white/10 whitespace-nowrap"
                whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(58,106,160,0.4)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Download className="w-4 h-4" />
                HTS 다운로드
              </motion.a>
            </div>
          </div>

          {/* MTS 영역 */}
          <div className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-[#3a6aa0]/30 rounded-2xl flex items-center justify-center border border-[#3a6aa0]/40">
                <Smartphone className="w-7 h-7 text-[#6aafff]" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-white">SMART MTS</h3>
                  <span className="text-xs bg-[#3a6aa0]/40 text-[#6aafff] px-2 py-0.5 rounded-full w-fit border border-[#3a6aa0]/40">모바일</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  이동 중에도 시장을 확인하고 주문을 관리하세요. 스마트폰으로 언제 어디서나 접속 가능합니다.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-slate-400">
                  {["iOS / Android", "실시간 알림", "간편 주문", "포지션 관리"].map(f => (
                    <span key={f} className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#6aafff]" />{f}
                    </span>
                  ))}
                </div>
              </div>
              <motion.a
                href="https://jw-asset.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-bold rounded-xl px-6 py-3 text-sm border border-white/20 whitespace-nowrap"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <ExternalLink className="w-4 h-4" />
                MTS 접속
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
