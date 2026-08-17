import logoImg from "@assets/jw_logo.png";

export function Footer() {
  return (
    <footer className="bg-slate-900 pb-8 pt-16 text-white md:pt-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 border-b border-slate-800 pb-12 sm:grid-cols-2">

          {/* 회사 소개 */}
          <div>
            <img
              src={logoImg}
              alt="JW에셋"
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-xs break-keep text-sm leading-7 text-slate-400">
              JW에셋은 글로벌 해외선물 시장에 특화된 전문 트레이딩 플랫폼입니다.
              빠른 체결과 정밀한 분석 환경으로 트레이더의 성과를 지원합니다.
            </p>
          </div>

          {/* 플랫폼 */}
          <div>
            <h3 className="mb-5 text-sm font-bold text-slate-200">플랫폼</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <a className="block transition-colors hover:text-white" href="https://hts.jw-asset.kr" target="_blank" rel="noopener noreferrer">
                HTS 다운로드 <span className="ml-1 text-xs text-[#6aafff]">Windows</span>
              </a>
              <a className="block transition-colors hover:text-white" href="https://jw-asset.kr/" target="_blank" rel="noopener noreferrer">
                MTS 접속 <span className="ml-1 text-xs text-slate-500">iOS · Android</span>
              </a>
              <a className="block transition-colors hover:text-white" href="https://jw-asset.kr/" target="_blank" rel="noopener noreferrer">
                WTS 접속 <span className="ml-1 text-xs text-slate-500">브라우저</span>
              </a>
            </div>
          </div>

        </div>

        {/* 하단 바 */}
        <div className="flex flex-col gap-2 pt-7 text-xs leading-6 text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2025 JW Assets Co., Ltd. All rights reserved.</p>
          <p className="break-keep md:text-right">
            해외선물 거래는 원금 손실의 위험이 있습니다. 투자 전 반드시 상품설명서를 확인하시기 바랍니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
