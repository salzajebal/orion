import { ArrowRight, TrendingUp, DollarSign, BarChart3, Wheat, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const markets = [
  {
    icon: DollarSign,
    title: "Forex",
    description: "글로벌 통화 쌍과 높은 유동성. 메이저, 마이너, 이국적인 45개 이상의 통화 쌍 거래."
  },
  {
    icon: TrendingUp,
    title: "주식",
    description: "750개 이상의 세계 최대 기업 거래. 빅테크, 산업, 제약 등 다양한 분야."
  },
  {
    icon: BarChart3,
    title: "지수",
    description: "전체 경제 또는 산업 분야에 걸쳐 있는 무역 기회. 글로벌 시장 벤치마크."
  },
  {
    icon: Wheat,
    title: "원자재",
    description: "에너지, 금속, 농산물 등 세계적으로 거래되는 상품으로 포트폴리오 다양화."
  },
  {
    icon: Activity,
    title: "선물",
    description: "CFD 선물로 포트폴리오 헤지. 낮은 마진 요건과 우호적인 거래 비용."
  }
];

export function Markets() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              MT5에서 어떤 것을 <span className="text-secondary-foreground border-b-4 border-secondary">거래할 수 있나요?</span>
            </h2>
            <p className="text-gray-600 text-lg">
              MT5를 통해 가장 널리 사용되는 상품에서부터 가장 이국적인 FX 쌍에 이르기까지 다양한 글로벌 시장을 거래할 수 있습니다.
            </p>
          </div>
          <Button variant="link" className="text-primary font-bold text-lg group p-0 h-auto">
            모든 시장 보기 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border-l-4 border-transparent hover:border-secondary group">
              <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                <market.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{market.title}</h3>
              <p className="text-gray-600 leading-relaxed">{market.description}</p>
            </div>
          ))}
          
          {/* CTA Card */}
          <div className="bg-primary p-8 rounded-xl shadow-lg flex flex-col justify-center items-start text-white">
            <h3 className="text-2xl font-bold mb-4">지금 거래를 시작하세요</h3>
            <p className="text-gray-300 mb-8">
              수천 명의 트레이더와 함께 MT5에서 성공적인 투자를 경험해보세요.
            </p>
            <Button 
              className="w-full bg-secondary text-secondary-foreground hover:bg-yellow-400 font-bold rounded-full"
              onClick={() => window.location.href = "https://btqac56x.metaiinvest.pro/"}
            >
              계정 개설하기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
