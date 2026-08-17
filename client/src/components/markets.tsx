import { motion } from "framer-motion";
import { BarChart3, Coins, Flame, TrendingUp } from "lucide-react";

const markets = [
  {
    Icon: BarChart3,
    title: "지수 선물",
    desc: "미국·아시아 주요 지수를 추종하는 선물 상품",
    items: ["마이크로 나스닥", "S&P 500", "마이크로 S&P 500", "항셍 지수", "미니 항셍"],
  },
  {
    Icon: TrendingUp,
    title: "금속 선물",
    desc: "금·은·구리 등 귀금속 및 산업금속 선물",
    items: ["금 (Gold)", "마이크로 금", "은 (Silver)", "구리 (Copper)"],
  },
  {
    Icon: Flame,
    title: "에너지 선물",
    desc: "국제 원유 시장에 직접 참여할 수 있는 상품",
    items: ["WTI 원유", "마이크로 WTI 원유"],
  },
  {
    Icon: Coins,
    title: "통화 선물",
    desc: "주요 6개국 통화를 대상으로 한 외환 선물",
    items: ["일본 엔화 (JPY)", "호주 달러 (AUD)", "영국 파운드 (GBP)", "유로 (EUR)"],
  },
];

export function Markets() {
  return (
    <section id="markets" className="bg-[#f8fafc] py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-10 md:mb-14">
          <span className="inline-flex items-center rounded-full border border-[#3a6aa0] bg-white px-4 py-1.5 text-sm font-semibold text-[#3a6aa0]">
            거래 가능 종목
          </span>
          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            글로벌 선물 시장을 한 곳에서
          </h2>
          <p className="mt-4 text-base text-slate-500 md:text-lg">
            CME·CBOT 상장 주요 선물 상품을 JW에셋 하나로 거래하세요.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {markets.map(({ Icon, title, desc, items }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0f7ff]">
                <Icon className="h-6 w-6 text-[#3a6aa0]" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
              <p className="mt-1.5 text-xs leading-5 text-slate-400">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map(item => (
                  <span
                    key={item}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
