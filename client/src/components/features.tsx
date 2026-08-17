import { motion } from "framer-motion";
const features = [
  {
    num: "01",
    stat: "0.1초",
    statLabel: "평균 체결 속도",
    title: "초고속 주문 체결",
    description:
      "초저지연 체결 인프라를 기반으로 시장의 순간적인 움직임에 정확히 대응합니다. 슬리피지를 최소화하여 전략이 의도한 가격에 실행됩니다.",
    points: ["저지연 전용 서버", "슬리피지 최소화", "실시간 호가 반영"],
  },
  {
    num: "02",
    stat: "80+",
    statLabel: "기술 지표 제공",
    title: "전문 기술 분석 환경",
    description:
      "80종 이상의 기술 지표, 멀티 타임프레임 차트, 시장 깊이(DOM) 패널을 하나의 화면에서 운용합니다. 근거 있는 매매 판단을 내리세요.",
    points: ["멀티 타임프레임 차트", "DOM 시장 깊이 분석", "커스텀 지표 설정"],
  },
  {
    num: "03",
    stat: "24/5",
    statLabel: "실시간 시세 제공",
    title: "글로벌 실시간 시세",
    description:
      "CME·CBOT 등 주요 거래소의 선물 시세를 지연 없이 제공합니다. 경제 지표 캘린더와 연동하여 시장 이슈를 즉각적으로 파악하세요.",
    points: ["CME·CBOT 직결", "경제 지표 캘린더", "다중 종목 동시 모니터링"],
  },
  {
    num: "04",
    stat: "99.9%",
    statLabel: "서버 가동률",
    title: "엔터프라이즈급 인프라",
    description:
      "이중화 서버 구조와 상시 모니터링 체계로 거래 중단 없는 환경을 보장합니다. 장중 어느 순간에도 안정적인 접속을 유지하세요.",
    points: ["이중화 서버 구조", "24/5 시스템 모니터링", "데이터 암호화 보안"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Features() {
  return (
    <section id="features" className="bg-white py-16 md:py-24">
      <div className="container px-4 md:px-6">

        {/* 헤더 */}
        <motion.div
          className="mb-12 md:mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-full border border-[#3a6aa0] bg-white px-4 py-1.5 text-sm font-semibold text-[#3a6aa0]">
            플랫폼 특징
          </span>
          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            JW에셋이 선택받는 이유
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-500 md:text-lg">
            해외선물 거래에 필요한 핵심 역량을 하나의 플랫폼에 집약했습니다.
          </p>
        </motion.div>

        {/* 카드 그리드 */}
        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {features.map(({ num, stat, statLabel, title, description, points }) => (
            <motion.div
              key={num}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(58,106,160,0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm cursor-default"
            >
              {/* 배경 번호 */}
              <span className="absolute -right-2 -top-3 select-none text-7xl font-black text-slate-100 transition-colors group-hover:text-[#3a6aa0]/10">
                {num}
              </span>

              {/* 수치 강조 */}
              <div className="relative z-10 mt-5 flex items-end gap-2.5">
                <span className="text-5xl font-black text-slate-900 leading-none">{stat}</span>
                <span className="mb-1 text-sm text-slate-400">{statLabel}</span>
              </div>

              {/* 제목 */}
              <h3 className="relative z-10 mt-4 text-xl font-bold text-slate-900">{title}</h3>

              {/* 구분선 */}
              <div className="relative z-10 my-5 h-px w-full bg-slate-100 transition-colors group-hover:bg-[#3a6aa0]/20" />

              {/* 설명 */}
              <p className="relative z-10 text-sm leading-7 text-slate-500 flex-1">{description}</p>

              {/* 포인트 리스트 */}
              <ul className="relative z-10 mt-6 space-y-2.5">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-slate-500">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#3a6aa0]" />
                    {p}
                  </li>
                ))}
              </ul>

              {/* 하단 accent 라인 */}
              <motion.div
                className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#3a6aa0] rounded-b-2xl"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
