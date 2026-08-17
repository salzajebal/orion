import { motion } from "framer-motion";

const stats = [
  { stat: "0.1초", label: "평균 체결 속도" },
  { stat: "80+",  label: "기술 지표 제공" },
  { stat: "24/5", label: "실시간 시세 제공" },
  { stat: "99.9%",label: "서버 가동률" },
];

export function Features() {
  return (
    <section id="features" className="bg-white py-20 md:py-28">
      <div className="container px-4 md:px-6">

        {/* 헤더 — 좌측 헤드라인 / 우측 설명 */}
        <motion.div
          className="flex flex-col gap-8 border-b-2 border-slate-900 pb-10 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#3a6aa0]">
              WHY JW ASSET
            </p>
            <h2 className="break-keep text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              숫자로 증명하는<br />투자 인프라
            </h2>
          </div>
          <p className="max-w-sm break-keep text-base leading-8 text-slate-500 md:mb-1">
            글로벌 선물 시장을 주도하는 JW에셋의 핵심 지표를 확인하세요.
            검증된 데이터가 신뢰의 기준입니다.
          </p>
        </motion.div>

        {/* 수치 그리드 — 세로선으로 구분 */}
        <motion.div
          className="grid grid-cols-2 divide-x divide-slate-100 md:grid-cols-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {stats.map(({ stat, label }, i) => (
            <div key={i} className="px-8 py-10 first:pl-0 last:pr-0">
              <div className="text-5xl font-black leading-none text-[#3a6aa0] md:text-6xl lg:text-7xl">
                {stat}
              </div>
              <div className="mt-3 text-sm text-slate-400">{label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
