import { ArrowRight, BarChart3, Coins, Flame, Wheat, TrendingUp } from "lucide-react";

const markets = [
  {
    icon: BarChart3,
    title: "지수 선물",
    description: "나스닥, S&P500, 다우존스, 항셍 등 글로벌 주요 지수 선물 거래."
  },
  {
    icon: Coins,
    title: "통화 선물",
    description: "유로, 엔화, 파운드, 호주달러 등 주요 통화 선물 거래."
  },
  {
    icon: TrendingUp,
    title: "금속 선물",
    description: "금, 은, 구리 등 귀금속 및 비철금속 선물 거래."
  },
  {
    icon: Flame,
    title: "에너지 선물",
    description: "원유(WTI, 브렌트), 천연가스 등 에너지 상품 선물 거래."
  },
  {
    icon: Wheat,
    title: "농산물 선물",
    description: "옥수수, 대두, 밀, 설탕 등 농산물 선물 거래."
  }
];

export function Markets() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              SMART에서 <span className="text-secondary-foreground border-b-4 border-secondary">해외선물 거래</span>
            </h2>
            <p className="text-gray-600 text-lg">
              SMART를 통해 글로벌 주요 거래소의 다양한 해외선물 상품을 거래할 수 있습니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market, index) => (
            <div key={index} data-testid={`card-market-${index}`} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border-l-4 border-transparent hover:border-secondary group">
              <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                <market.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{market.title}</h3>
              <p className="text-gray-600 leading-relaxed">{market.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
