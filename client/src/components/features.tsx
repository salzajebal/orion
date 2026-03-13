import iconFlexible from "@assets/generated_images/icon_for_flexible_trading.png";
import iconTechnical from "@assets/generated_images/icon_for_technical_analysis.png";
import iconFundamental from "@assets/generated_images/icon_for_fundamental_analysis.png";
import iconVPS from "@assets/generated_images/icon_for_vps_hosting.png";

const features = [
  {
    icon: iconFlexible,
    title: "빠른 주문 체결",
    description: "해외선물 시장에서 빠르고 정확한 주문 체결로 최적의 거래 타이밍을 잡으세요."
  },
  {
    icon: iconTechnical,
    title: "기술적 분석",
    description: "다양한 기술 지표, 시장 깊이 분석, 예약 주문, 다중 시간대 차트를 활용한 정밀 분석."
  },
  {
    icon: iconFundamental,
    title: "실시간 시세",
    description: "글로벌 해외선물 시장의 실시간 시세와 경제 지표를 통해 최적의 거래 판단을 내리세요."
  },
  {
    icon: iconVPS,
    title: "안정적인 서버",
    description: "안정적인 서버 환경으로 끊김 없는 거래와 최소한의 지연으로 주문이 실행됩니다."
  }
];

export function Features() {
  return (
    <section id="features" className="py-12 md:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
            SMART에서 <span className="text-secondary-foreground border-b-4 border-secondary">해외선물 거래</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            SMART 플랫폼에서 해외선물을 거래하세요. 빠른 체결, 기술 분석 도구, 실시간 시세, 안정적인 서버 환경을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} data-testid={`card-feature-${index}`} className="bg-white p-4 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border border-gray-100">
              <div className="w-14 h-14 md:w-20 md:h-20 mb-4 md:mb-6 bg-gray-50 rounded-full flex items-center justify-center p-3 md:p-4">
                <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-primary mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
