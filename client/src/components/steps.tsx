import { UserPlus, Wallet, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "가입하기",
    description: "간단한 온라인 신청을 완료하고 설정할 계정을 확인합니다"
  },
  {
    icon: Wallet,
    step: "02",
    title: "입금",
    description: "거래 계정에 자금을 입금하면 바로 사용할 수 있습니다"
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "거래하기",
    description: "이제 기회를 활용합니다."
  }
];

export function Steps() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            3가지 간단한 과정과 <span className="text-[#3a6aa0] border-b-4 border-[#3a6aa0]/30">SMART에서</span> 거래 즐기기
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200/60 -z-10" />

          {steps.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-sm border-4 border-slate-200/60 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-sm">
                <item.icon className="w-10 h-10 text-[#3a6aa0]" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#2c5a8c] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-500 max-w-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
