import { BarChart3, Coins, Flame, TrendingUp } from "lucide-react";

const markets = [
  {
    icon: BarChart3,
    title: "지수 선물",
    description: "마이크로나스닥, S&P500, 마이크로S&P500, 항셍, 미니항셍"
  },
  {
    icon: TrendingUp,
    title: "금속 선물",
    description: "금, 마이크로금, 은, 구리"
  },
  {
    icon: Flame,
    title: "에너지 선물",
    description: "크루드오일, 마이크로크루드오일"
  },
  {
    icon: Coins,
    title: "통화 선물",
    description: "일본엔화, 호주달러, 영국파운드, 유로FX"
  }
];

export function Markets() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              SMART에서 <span className="text-[#3a6aa0] border-b-4 border-[#3a6aa0]/30">해외선물 거래</span>
            </h2>
            <p className="text-slate-500 text-lg">
              SMART를 통해 글로벌 주요 거래소의 다양한 해외선물 상품을 거래할 수 있습니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {markets.map((market, index) => (
            <div key={index} data-testid={`card-market-${index}`} className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border-l-4 border-transparent hover:border-[#3a6aa0] group border border-slate-200/60">
              <div className="w-12 h-12 bg-[#3a6aa0]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#3a6aa0] transition-colors">
                <market.icon className="w-6 h-6 text-[#3a6aa0] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{market.title}</h3>
              <p className="text-slate-500 leading-relaxed">{market.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
