import { motion } from "framer-motion";
import { BarChart3, Coins, Flame, TrendingUp } from "lucide-react";

const markets = [
  [BarChart3, "지수선물", ["나스닥", "S&P500", "마이크로 나스닥", "항셍", "미니 항셍"]],
  [TrendingUp, "금속선물", ["금", "마이크로 금", "은", "구리"]],
  [Flame, "에너지선물", ["크루드오일", "마이크로 오일"]],
  [Coins, "통화선물", ["일본 엔화", "호주 달러", "영국 파운드", "유로 FX"]],
];
export function Markets() {
  return <section className="bg-[#f8fafc] py-20 md:py-28"><div className="container px-4 md:px-6"><div className="mb-12"><h2 className="text-3xl font-bold text-slate-900 md:text-5xl">거래 가능 종목</h2><p className="mt-5 text-lg text-slate-500">주요 지수부터 금속, 에너지, 통화까지 다양한 상품을 만나보세요.</p></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {markets.map(([Icon, title, items], i) => { const MarketIcon = Icon as typeof BarChart3; return <motion.div key={title as string} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-center gap-3"><MarketIcon className="h-7 w-7 text-[#3a6aa0]" /><h3 className="font-bold text-slate-900">{title as string}</h3></div><div className="mt-6 flex flex-wrap gap-2">{(items as string[]).map(item => <span key={item} className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700">{item}</span>)}</div></motion.div>; })}
  </div></div></section>;
}