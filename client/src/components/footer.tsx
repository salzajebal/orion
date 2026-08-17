import logoImg from "@assets/jw_logo.png";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] pt-10 pb-8 text-white">
      <div className="container px-4 md:px-6">

        {/* 로고 */}
        <img
          src={logoImg}
          alt="JW에셋"
          className="mb-6 h-6 w-auto max-w-[140px] object-contain brightness-0 invert"
        />

        {/* 링크 2열 + 구분선 */}
        <div className="border-b border-slate-800 pb-8">
          <div className="grid grid-cols-2 gap-8 text-sm text-slate-400">
            <div>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-300">플랫폼</h3>
              <div className="space-y-2">
                <a className="block hover:text-white transition-colors" href="https://hts.jw-asset.kr" target="_blank" rel="noopener noreferrer">
                  HTS 다운로드
                </a>
                <a className="block hover:text-white transition-colors" href="https://jw-asset.kr/" target="_blank" rel="noopener noreferrer">
                  MTS 바로가기
                </a>
                <a className="block hover:text-white transition-colors" href="https://jw-asset.kr/" target="_blank" rel="noopener noreferrer">
                  WTS 바로가기
                </a>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-300">고객지원</h3>
              <div className="space-y-2">
                <span className="block">이용약관</span>
                <span className="block">개인정보처리방침</span>
                <span className="block">고객센터</span>
              </div>
            </div>
          </div>

        </div>

        {/* 하단 바 */}
        <div className="flex flex-col gap-1 pt-5 text-xs leading-6 text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2025 JW Assets Co., Ltd. All rights reserved.</p>
          <p className="break-keep md:text-right">
            거래는 원금 손실의 위험이 있습니다
          </p>
        </div>

      </div>
    </footer>
  );
}
