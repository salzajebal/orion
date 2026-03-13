import { Link } from "wouter";
import logoImg from "@assets/telegram-cloud-document-4-5881970613953764683_1773374272289.jpg";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 md:pt-20 pb-8 md:pb-10 border-t border-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <img src={logoImg} alt="Logo" className="h-10 w-10 md:h-14 md:w-14 rounded-full object-cover" />
            <span className="text-xl md:text-2xl font-bold tracking-tighter text-white font-display">SMART</span>
          </div>
          <p className="text-gray-400 leading-relaxed max-w-md text-sm md:text-base px-4">
            SMART는 전 세계 트레이더들에게 프리미엄 거래 서비스를 제공하는 글로벌 온라인 트레이딩 파트너입니다.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8 mt-6 md:mt-8 text-center flex flex-col justify-center items-center text-xs md:text-sm text-gray-500">
          <p>&copy; 2025 SMART. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4">
            <Link href="#" className="hover:text-white">개인정보 처리방침</Link>
            <Link href="#" className="hover:text-white">이용약관</Link>
            <Link href="#" className="hover:text-white">쿠키 정책</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
