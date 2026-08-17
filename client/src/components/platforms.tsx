import { motion } from "framer-motion";
import { Check, Download, Globe2, Monitor, Smartphone } from "lucide-react";

export function Platforms() {
  return (
    <section id="platforms" className="bg-[#f8fafc] py-16 md:py-24">
      <div className="container px-4 md:px-6">
        {/* 헤더 */}
        <div className="mb-10 md:mb-14">
          <span className="inline-flex items-center rounded-full border border-[#3a6aa0] bg-white px-4 py-1.5 text-sm font-semibold text-[#3a6aa0]">
            플랫폼 다운로드
          </span>
          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            원하는 환경에서 시작하세요
          </h2>
          <p className="mt-4 text-base text-slate-500 md:text-lg">
            데스크탑, 모바일, 웹 브라우저 — 어디서든 JW에셋으로 글로벌 선물 시장에 접속할 수 있습니다.
          </p>
        </div>

        {/* 2-box 레이아웃 */}
        <div className="grid gap-5 lg:grid-cols-2">

          {/* HTS — 단독 박스 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="relative flex flex-col rounded-2xl border-2 border-[#3a6aa0] bg-white p-8 shadow-sm"
          >
            <span className="absolute right-6 top-6 rounded-full bg-[#3a6aa0] px-3 py-1 text-xs font-bold text-white">
              추천
            </span>

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f0f7ff] text-[#3a6aa0]">
              <Monitor className="h-7 w-7" />
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#3a6aa0]">데스크탑</p>
              <h3 className="mt-1.5 text-2xl font-bold text-slate-900">JW에셋 HTS</h3>
              <p className="mt-3 leading-7 text-slate-600">
                전문 트레이더를 위한 고성능 데스크탑 트레이딩 시스템. 멀티 차트, 80종 이상의 기술 지표,
                원클릭 주문 등 정밀한 분석과 신속한 매매 실행이 가능합니다.
              </p>
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-2 border-t border-slate-100 pt-6">
              {["Windows 지원", "멀티 차트 레이아웃", "80+ 기술 지표", "원클릭 주문", "실시간 시세 연동", "예약 주문"].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="h-4 w-4 shrink-0 text-[#3a6aa0]" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://hts.jw-asset.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#3a6aa0] text-sm font-bold text-white transition-colors hover:bg-[#315b8b]"
            >
              <Download className="h-4 w-4" />
              HTS 무료 다운로드
            </a>
          </motion.div>

          {/* MTS + WTS — 하나의 박스에 두 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
          >
            {/* MTS */}
            <div className="flex flex-1 flex-col p-8 border-b border-slate-100">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f0f7ff] text-[#3a6aa0]">
                  <Smartphone className="h-7 w-7" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">모바일</p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900">JW에셋 MTS</h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                iOS·Android 환경에서 실시간 시세 확인과 간편 주문이 가능합니다.
                언제 어디서나 포지션을 관리하고 시장 기회를 놓치지 마세요.
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {["iOS · Android", "실시간 알림", "간편 주문", "포지션 관리"].map(item => (
                  <li key={item} className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Check className="h-3.5 w-3.5 text-[#3a6aa0]" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://jw-asset.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-[#3a6aa0] text-sm font-bold text-[#3a6aa0] transition-colors hover:bg-[#f0f7ff]"
              >
                <Smartphone className="h-4 w-4" />
                MTS 바로 접속
              </a>
            </div>

            {/* WTS */}
            <div className="flex flex-1 flex-col p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f0f7ff] text-[#3a6aa0]">
                  <Globe2 className="h-7 w-7" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">웹 브라우저</p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900">JW에셋 WTS</h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                별도 설치 없이 브라우저에서 바로 접속해 거래를 시작할 수 있습니다.
                PC·태블릿 모두 지원하며 HTS와 동일한 기능을 제공합니다.
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {["설치 불필요", "모든 브라우저 지원", "PC · 태블릿", "즉시 시작"].map(item => (
                  <li key={item} className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Check className="h-3.5 w-3.5 text-[#3a6aa0]" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://jw-asset.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-[#3a6aa0] text-sm font-bold text-[#3a6aa0] transition-colors hover:bg-[#f0f7ff]"
              >
                <Globe2 className="h-4 w-4" />
                WTS 바로 접속
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
