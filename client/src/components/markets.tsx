import { motion } from "framer-motion";
import { BarChart3, Coins, Flame, TrendingUp, ArrowRight } from "lucide-react";

const markets = [
  {
    icon: BarChart3,
    title: "지수 선물",
    items: ["나스닥", "S&P500", "마이크로 나스닥", "항셍", "미니 항셍"]
  },
  {
    icon: TrendingUp,
    title: "금속 선물",
    items: ["금", "마이크로 금", "은", "구리"]
  },
  {
    icon: Flame,
    title: "에너지 선물",
    items: ["크루드오일", "마이크로 오일"]
  },
  {
    icon: Coins,
    title: "통화 선물",
    items: ["일본 엔화", "호주 달러", "영국 파운드", "유로 FX"]
  }
];

export function Markets() {
  return (
    <section className="bg-[#f0f5fb] py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="mb-12 max-w-2xl">
          <span className="rounded-full bg-white px-4 py-2 text-xs font-bold tracking-widest text-[#3a6aa0]">거래 가능 종목</span>
          <h2 className="mt-5 text-3xl font-bold text-slate-800 md:text-5xl">글로벌 시장의<br /><span className="text-[#3a6aa0]">핵심 종목을 한 곳에서</span></h2>
          <p className="mt-5 text-slate-500">주요 지수부터 금속, 에너지, 통화까지 JW에셋의 폭넓은 상품 라인업을 확인하세요.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {markets.map((market, index) => (
            <motion.div key={market.title} data-testid={`card-market-${index}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} whileHover={{ y: -4 }} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl md:p-9">
              <div className="flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8eef5] text-[#3a6aa0]"><market.icon className="h-6 w-6" /></div><h3 className="text-xl font-bold text-slate-800">{market.title}</h3></div>
              <div className="mt-8 flex flex-wrap gap-2">{market.items.map(item => <span key={item} className="rounded-full border border-[#d7e3ef] bg-[#f7fafd] px-3 py-2 text-sm font-medium text-slate-600">{item}</span>)}</div>
              <p className="mt-7 text-sm font-semibold text-[#3a6aa0]">{market.items.length}개 종목</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex flex-col justify-between gap-5 rounded-2xl bg-[#1e3a5f] p-7 text-white md:flex-row md:items-center md:p-8"><p className="text-xl font-bold md:text-2xl">15개 해외선물 종목 모두 JW에셋에서</p><a href="#platforms" className="w-fit rounded-xl bg-[#3a6aa0] px-5 py-3 text-sm font-bold hover:bg-[#4b7db5]">지금 시작하기 <ArrowRight className="ml-2 inline h-4 w-4" /></a></div>
      </div>
    </section>
  );
}
