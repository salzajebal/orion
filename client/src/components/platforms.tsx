import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import desktopImg from "@assets/generated_images/desktop_trading_platform_screenshot.png";
import mobileImg from "@assets/generated_images/mobile_trading_app_screenshot.png";
import webImg from "@assets/generated_images/web_trading_platform_screenshot.png";
import { Monitor, Smartphone, Globe } from "lucide-react";

export function Platforms() {
  return (
    <section id="platforms" className="py-16 md:py-24 bg-primary text-white">
      <div className="container text-center px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          SMART HTS / SMART MTS
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-base">
          어디서나 SMART와 함께 거래하세요. 데스크탑, 모바일, 웹 모든 기기에서 완벽한 거래 환경을 제공합니다.
        </p>

        <Tabs defaultValue="desktop" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-white/10 p-1 rounded-full mb-8 md:mb-12">
            <TabsTrigger value="desktop" className="flex-1 rounded-full data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground py-2 md:py-3 text-xs md:text-sm font-bold justify-center">
              <Monitor className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 shrink-0" /> SMART HTS
            </TabsTrigger>
            <TabsTrigger value="mobile" className="flex-1 rounded-full data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground py-2 md:py-3 text-xs md:text-sm font-bold justify-center">
              <Smartphone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 shrink-0" /> SMART MTS
            </TabsTrigger>
            <TabsTrigger value="web" className="flex-1 rounded-full data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground py-2 md:py-3 text-xs md:text-sm font-bold justify-center">
              <Globe className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 shrink-0" /> SMART HTS 웹
            </TabsTrigger>
          </TabsList>

          <TabsContent value="desktop" className="mt-0">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-left">
              <div className="flex-1 space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-secondary">SMART HTS 데스크탑</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  SMART HTS를 데스크톱이나 노트북에 직접 설치하면 플랫폼의 모든 기능을 이용할 수 있습니다. 
                  원하는 대로 차트를 사용자 지정하고, 전문적인 기술적 분석 도구를 활용하세요.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-primary rounded-full"
                    onClick={() => window.location.href = "https://fohn4u1l.metaiinvest.pro/hts_meta5.exe"}
                  >
                    Windows 다운로드
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                <img src={desktopImg} alt="Desktop Platform" className="rounded-lg shadow-2xl border border-white/10" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="mt-0">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-left">
              <div className="flex-1 space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-secondary">SMART MTS</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  이동 중에도 거래 기회를 놓치지 마세요. SMART MTS 앱을 통해 언제 어디서나 시장에 접속하고 거래를 관리할 수 있습니다.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-primary rounded-full"
                    onClick={() => window.location.href = "https://eyqhhhjl.dyasset.pro/mts_dyasset_twa.apk"}
                  >
                    모바일 앱 다운로드
                  </Button>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <img src={mobileImg} alt="Mobile App" className="max-w-[300px] rounded-3xl shadow-2xl border-4 border-gray-800" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="web" className="mt-0">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-left">
              <div className="flex-1 space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-secondary">SMART HTS 웹트레이더</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  설치가 필요 없는 유연한 웹 기반 브라우저 플랫폼을 사용합니다. 컴퓨터와 인터넷이 연결된 모든 곳에서 즉시 거래할 수 있습니다.
                  운영체제에 구애받지 않는 자유로움을 경험하세요.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button 
                    className="bg-secondary text-secondary-foreground hover:bg-yellow-400 rounded-full font-bold"
                    onClick={() => window.location.href = "https://btqac56x.metaiinvest.pro/"}
                  >웹트레이더 실행</Button>
                </div>
              </div>
              <div className="flex-1">
                <img src={webImg} alt="Web Trader" className="rounded-lg shadow-2xl border border-white/10" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
