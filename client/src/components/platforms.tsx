import { motion } from "framer-motion";
import { Download, Globe2 } from "lucide-react";

export function Platforms() {
  return (
    <section id="platforms" className="bg-white py-20 md:py-28">
      <div className="container flex flex-col items-center px-4 md:px-6">

        {/* 아이콘 */}
        <motion.div
          className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Globe2 className="h-8 w-8 text-[#3a6aa0]" />
        </motion.div>

        {/* 제목 */}
        <motion.h2
          className="break-keep text-center text-3xl font-bold text-slate-900 md:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          트레이딩 플랫폼 바로가기
        </motion.h2>

        {/* 설명 */}
        <motion.p
          className="mt-3 break-keep text-center text-base text-slate-400"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          데스크탑·모바일·웹 어디서든 JW에셋과 함께 실시간 투자를 경험하세요
        </motion.p>

        {/* 버튼 */}
        <motion.div
          className="mt-10 flex w-full max-w-sm flex-col gap-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          {/* HTS 다운로드 — outline */}
          <a
            href="https://hts.jw-asset.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-6 py-4 text-base font-bold text-slate-700 transition-colors hover:border-[#3a6aa0] hover:text-[#3a6aa0]"
          >
            <Download className="h-5 w-5" />
            HTS 다운로드
          </a>

          {/* MTS & WTS — filled */}
          <a
            href="https://jw-asset.kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3a6aa0] px-6 py-4 text-base font-bold text-white transition-colors hover:bg-[#315b8b]"
          >
            <Globe2 className="h-5 w-5" />
            MTS &amp; WTS 바로가기
          </a>
        </motion.div>

      </div>
    </section>
  );
}
