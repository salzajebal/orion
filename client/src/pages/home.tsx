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
        description="SMART 를 사용하면 21개의 사용 가능한 기간과 80개 이상의 기술 지표 및 분석 개체를 사용할 수 있습니다. 또한 사용자는 MQL5 개발 환경 내에서 자체 지표를 생성하고 뉴스 피드 및 경제 일정과 같은 기본 분석 도구에 액세스할 수 있습니다."
        image={analysisToolsImg}
      />
      
      <ContentSection 
        title="전문가 조언자를 통한" 
        highlight="자동화된 거래"
        description="EA(Expert Advisors) 는 거래 활동의 분석 및 실행을 자동화하는 알고리즘 거래 모델입니다. EA를 사용하면 거래 로봇을 사용하여 거래를 실행하고 거래 성과를 분석할 수 있습니다."
        image={automatedTradingImg}
        reversed={true}
      />

      <Steps />

      <ContentSection 
        title="주문 시스템 및" 
        highlight="주문 타입"
        description="모든 유형의 주문에 대한 지원을 포함하여 거래 운영을 유연하게 제어하는 두 가지 유형의 포지션 관리 시스템을 사용합니다. 외환 거래를 할 때는 위험 관리 주문 모드를 사용하거나, 거래소에서 계좌 관리 모드를 사용합니다."
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
        description="SMART에서 경험이 풍부한 거래자의 거래 활동을 발견하고 거래 계정에서 동일한 거래를 수행할 수 있습니다. 신호 공급자의 거래 신호를 사용하여 실시간 거래를 복제합니다."
        image={signalsImg}
        reversed={true}
      />

      <Platforms />
      <Markets />
      <Footer />
    </div>
  );
}
