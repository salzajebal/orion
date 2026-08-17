import { motion } from "framer-motion";
import { Check, Download, Globe2, Monitor, Smartphone } from "lucide-react";

export function Platforms() {
  return (
    <section id="platforms" className="bg-white py-16 md:py-24">
      <div className="container px-4 md:px-6">

        {/* 헤더 */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <span className="inline-flex items-center rounded-full border border-[#3a6aa0] bg-white px-4 py-1.5 text-sm font-semibold text-[#3a6aa0]">
            플랫폼 다운로드
          </span>
          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            원하는 환경에서 시작하세요
          </h2>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-2">

          {/* HTS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-4 rounded-2xl border-2 border-[#3a6aa0] bg-white p-6 sm:flex-row sm:items-center sm:justify-between md:p-8"
          >
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f0f7ff]">
                <Monitor className="h-7 w-7 text-[#3a6aa0]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-slate-900">HTS</h3>
                  <span className="rounded-full bg-[#3a6aa0] px-2.5 py-0.5 text-xs font-bold text-white">추천</span>
                </div>
                <p className="mt-1 break-keep text-sm text-slate-400">Windows · 데스크탑</p>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                  {["멀티 차트", "80+ 지표", "원클릭 주문"].map(f => (
                    <li key={f} className="flex items-center gap-1 text-xs text-slate-500">
                      <Check className="h-3 w-3 text-[#3a6aa0]" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a
              href="https://hts.jw-asset.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#3a6aa0] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#315b8b] sm:w-auto sm:shrink-0"
            >
              <Download className="h-4 w-4" />
              다운로드
            </a>
          </motion.div>

          {/* MTS + WTS 통합 박스 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="flex flex-col justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f0f7ff]">
                  <Smartphone className="h-6 w-6 text-[#3a6aa0]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">MTS</h3>
                  <p className="mt-0.5 break-keep text-xs text-slate-400">iOS · Android · 모바일</p>
                </div>
              </div>
              <a
                href="https://jw-asset.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#3a6aa0] px-5 py-2.5 text-sm font-bold text-[#3a6aa0] transition-colors hover:bg-[#f0f7ff] sm:w-auto sm:shrink-0"
              >
                접속하기
              </a>
            </div>

            <div className="h-px w-full bg-slate-100" />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f0f7ff]">
                  <Globe2 className="h-6 w-6 text-[#3a6aa0]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">WTS</h3>
                  <p className="mt-0.5 break-keep text-xs text-slate-400">브라우저 · 설치 불필요</p>
                </div>
              </div>
              <a
                href="https://jw-asset.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#3a6aa0] px-5 py-2.5 text-sm font-bold text-[#3a6aa0] transition-colors hover:bg-[#f0f7ff] sm:w-auto sm:shrink-0"
              >
                접속하기
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
