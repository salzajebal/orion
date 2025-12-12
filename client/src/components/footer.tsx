import { Link } from "wouter";
import logoImg from "@assets/telegram-cloud-photo-size-4-5899834457139645287-m_1765536158470.jpg";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-3 mb-6">
            <img src={logoImg} alt="Logo" className="h-14 w-14 rounded-full object-cover" />
            <span className="text-2xl font-bold tracking-tighter text-white font-display">MT5</span>
          </div>
          <p className="text-gray-400 leading-relaxed max-w-md">
            MT5는 전 세계 트레이더들에게 프리미엄 거래 서비스를 제공하는 글로벌 온라인 트레이딩 파트너입니다.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2025 MT5. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">개인정보 처리방침</Link>
            <Link href="#" className="hover:text-white">이용약관</Link>
            <Link href="#" className="hover:text-white">쿠키 정책</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
