import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { ContentSection } from "@/components/content-section";
import { Platforms } from "@/components/platforms";
import { Footer } from "@/components/footer";

import analysisToolsImg from "@assets/generated_images/desktop_trading_platform_screenshot.png";
import automatedTradingImg from "@assets/generated_images/laptop_and_mobile_phone_displaying_professional_forex_trading_charts.png";
import orderSystemImg from "@assets/generated_images/web_trading_platform_screenshot.png";
import signalsImg from "@assets/generated_images/mobile_trading_app_screenshot.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Features />

      <ContentSection
        title="전문가 수준의"
        highlight="기술적 분석 환경"
        description="80종 이상의 기술 지표, 복수 타임프레임 차트, 시장 깊이(DOM) 패널을 하나의 화면에서 운용합니다. 실시간 해외선물 시세와 경제 지표 캘린더를 통해 근거 있는 매매 판단을 내리세요."
        image={analysisToolsImg}
      />

      <ContentSection
        title="조건 기반의"
        highlight="자동화 매매 시스템"
        description="사전에 설정한 조건이 충족되면 자동으로 주문을 실행합니다. 시장을 직접 지켜보지 않아도 전략이 일관되게 작동하며, 매매 이력 분석을 통해 전략을 지속적으로 개선할 수 있습니다."
        image={automatedTradingImg}
        reversed={true}
      />

      <ContentSection
        title="체계적인 주문 관리와"
        highlight="리스크 제어"
        description="시장가·지정가·스톱 주문 등 다양한 주문 유형을 지원하며, 스톱로스와 테이크프로핏을 사전에 설정해 리스크를 체계적으로 관리할 수 있습니다."
        image={orderSystemImg}
        listItems={[
          "시장가 · 지정가 주문 완벽 지원",
          "스톱로스 · 테이크프로핏 자동 실행",
          "트레일링 스톱으로 수익 극대화",
          "원클릭 매매로 신속한 포지션 진입",
        ]}
      />

      <ContentSection
        title="시장 전문가의"
        highlight="거래 신호 활용"
        description="JW에셋에서는 경험이 풍부한 해외선물 트레이더의 실시간 거래 신호를 참고할 수 있습니다. 전략의 근거를 학습하고, 자신만의 투자 판단 기준을 정립하세요."
        image={signalsImg}
        reversed={true}
      />

      <Platforms />
      <Footer />
    </div>
  );
}
