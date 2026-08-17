import logoImg from "@assets/jw_logo.png";

export function Footer() {
  return (
    <footer className="border-t border-[#315271] bg-[#142b46] pb-8 pt-16 text-white md:pt-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div><img src={logoImg} alt="JW에셋 Logo" className="h-11 w-auto object-contain brightness-0 invert" /><p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">글로벌 시장을 더 빠르고 선명하게 만나는 프리미엄 해외선물 거래 플랫폼.</p></div>
          <div><h3 className="mb-5 text-sm font-bold text-white">플랫폼</h3><div className="space-y-3 text-sm text-slate-400"><a className="block hover:text-white" href="https://hts.jw-asset.kr" target="_blank" rel="noopener noreferrer">HTS 다운로드</a><a className="block hover:text-white" href="https://jw-asset.kr/" target="_blank" rel="noopener noreferrer">MTS 접속</a><a className="block hover:text-white" href="https://jw-asset.kr/" target="_blank" rel="noopener noreferrer">WTS 접속</a></div></div>
          <div><h3 className="mb-5 text-sm font-bold text-white">거래 종목</h3><div className="space-y-3 text-sm text-slate-400"><p>지수선물</p><p>금속선물</p><p>에너지선물</p><p>통화선물</p></div></div>
          <div><h3 className="mb-5 text-sm font-bold text-white">지원</h3><div className="space-y-3 text-sm text-slate-400"><a href="#platforms" className="block hover:text-white">고객센터</a><a href="#" className="block hover:text-white">이용약관</a><a href="#" className="block hover:text-white">개인정보처리방침</a></div></div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-slate-500 md:flex-row md:items-center md:justify-between"><p>&copy; 2025 JW에셋 (JW Assets Co., Ltd.). All rights reserved.</p><p>해외선물 거래는 원금 손실의 위험이 있으며, 투자 결과에 대한 책임은 투자자 본인에게 있습니다.</p>
        </div>
      </div>
    </footer>
  );
}
