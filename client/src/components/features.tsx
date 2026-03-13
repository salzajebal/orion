import iconFlexible from "@assets/generated_images/icon_for_flexible_trading.png";
import iconTechnical from "@assets/generated_images/icon_for_technical_analysis.png";
import iconFundamental from "@assets/generated_images/icon_for_fundamental_analysis.png";
import iconVPS from "@assets/generated_images/icon_for_vps_hosting.png";

const features = [
  {
    icon: iconFlexible,
    title: "유연한 거래",
    description: "위험 관리 주문 시스템, 즉각적인, 요청, 시장 및 거래 실행 모드의 가용성."
  },
  {
    icon: iconTechnical,
    title: "기술적 분석",
    description: "38개의 기술 지표, 시장 깊이, 위험 관리 및 6개의 예약 주문, 21개의 분봉 등."
  },
  {
    icon: iconFundamental,
    title: "기본 분석",
    description: "경제 달력은 전 세계의 거시 경제 지표와 함께 당신의 거래에 영향을 미칠 수 있는 뉴스 보고서를 제공합니다."
  },
  {
    icon: iconVPS,
    title: "가상 호스팅 (VPS)",
    description: "로봇을 중단 없이 실행하고 주문이 최소한의 지연으로 실행되도록 합니다."
  }
];

export function Features() {
  return (
    <section id="features" className="py-12 md:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
            SMART HTS에서 <span className="text-secondary-foreground border-b-4 border-secondary">거래하세요</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            고급 SMART HTS 플랫폼에서 거래합니다. 알고리즘 거래, 기술 및 기본 분석 도구, 광범위한 가격 분석 기능, 거래 신호 등에 액세스할 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-4 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border border-gray-100">
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
