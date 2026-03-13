import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { ContentSection } from "@/components/content-section";
import { Platforms } from "@/components/platforms";
import { Markets } from "@/components/markets";
import { Steps } from "@/components/steps";
import { Footer } from "@/components/footer";

// Images for content sections
import analysisToolsImg from "@assets/generated_images/desktop_trading_platform_screenshot.png";
import automatedTradingImg from "@assets/generated_images/laptop_and_mobile_phone_displaying_professional_forex_trading_charts.png";
import orderSystemImg from "@assets/generated_images/web_trading_platform_screenshot.png";
import signalsImg from "@assets/generated_images/mobile_trading_app_screenshot.png";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      <Hero />
      <Features />
      
      <ContentSection 
        title="다양한" 
        highlight="분석 도구들"
        description="SMART를 사용하면 다양한 시간대의 차트와 80개 이상의 기술 지표 및 분석 도구를 활용할 수 있습니다. 실시간 해외선물 시세와 경제 일정 등 기본 분석 도구에도 액세스할 수 있습니다."
        image={analysisToolsImg}
      />
      
      <ContentSection 
        title="체계적인" 
        highlight="자동화된 거래"
        description="자동 매매 시스템을 활용하여 해외선물 거래를 자동화할 수 있습니다. 사전 설정된 조건에 따라 자동으로 주문을 실행하고, 거래 성과를 분석할 수 있습니다."
        image={automatedTradingImg}
        reversed={true}
      />

      <Steps />

      <ContentSection 
        title="주문 시스템 및" 
        highlight="주문 타입"
        description="모든 유형의 주문에 대한 지원을 포함하여 해외선물 거래를 유연하게 제어할 수 있습니다. 다양한 주문 유형과 위험 관리 도구를 활용하여 체계적인 포지션 관리가 가능합니다."
        image={orderSystemImg}
        listItems={[
          "시장가 주문 및 지정가 주문 지원",
          "스톱 로스 및 테이크 프로핏 설정",
          "트레이링 스톱 기능",
          "원클릭 매매 지원"
        ]}
      />
      
      <ContentSection 
        title="경험이 풍부한" 
        highlight="거래자로부터 거래 신호 수신"
        description="SMART에서 경험이 풍부한 해외선물 트레이더의 거래 전략을 참고하고, 실시간 거래 신호를 활용하여 보다 효과적인 투자 판단을 내릴 수 있습니다."
        image={signalsImg}
        reversed={true}
      />

      <Platforms />
      <Markets />
      <Footer />
    </div>
  );
}
