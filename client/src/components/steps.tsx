import { UserPlus, Wallet, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="bg-gradient-to-r from-[#1e3a5f] to-[#2c5a8c] py-20 text-white md:py-28">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center"><span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-widest text-[#dcecff]">시작하기</span><h2 className="mt-5 text-3xl font-bold md:text-5xl">간단한 3단계로<br /><span className="text-[#a8d2ff]">거래를 시작하세요</span></h2></div>

        <div className="relative grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-16 hidden h-px bg-white/30 md:block" />

          {steps.map((item, index) => (
            <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="relative z-10 rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm md:p-8"><div className="flex items-center justify-between"><span className="text-5xl font-bold text-white/20">{item.step}</span><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#2c5a8c]"><item.icon className="h-6 w-6" /></div></div><h3 className="mt-8 text-xl font-bold">{item.title}</h3><p className="mt-3 leading-7 text-slate-300">{item.description}</p></motion.div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"><p className="text-lg font-semibold">지금 바로 시작하세요</p><a href="https://hts.jw-asset.kr" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#1e3a5f] hover:bg-[#e4f0fc]">HTS 다운로드</a></div>
      </div>
    </section>
  );
}
