import { ArrowUpRight, Download, Terminal } from "lucide-react";

export function Platforms() {
  return (
    <section
      id="platforms"
      className="relative min-h-[620px] overflow-hidden bg-[#eef4fb] px-6 py-32 text-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(58,106,160,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(58,106,160,0.07) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >
      <div className="relative mx-auto max-w-3xl">
        <Terminal className="mx-auto mb-8 text-[#3a6aa0]" size={30} />

        <div className="font-mono text-xs tracking-[0.35em] text-[#3a6aa0]">
          DOWNLOAD PLATFORM
        </div>

        <h2 className="mt-7 text-5xl font-semibold tracking-[-0.05em] text-slate-900 md:text-6xl">
          시장의 문을<br />
          <span className="text-[#3a6aa0]">여는 가장 빠른 방법</span>
        </h2>

        <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-slate-500">
          언제 어디서나 같은 데이터, 같은 속도.<br />
          JW에셋의 트레이딩 환경을 시작하십시오.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="https://hts.jw-asset.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-xl bg-[#2c5a8c] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#3a6aa0]"
          >
            <Download size={17} /> HTS 다운로드 <ArrowUpRight size={15} />
          </a>
          <a
            href="https://jw-asset.kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-xl border border-[#3a6aa0]/50 px-8 py-4 text-sm text-[#3a6aa0] transition hover:bg-blue-50"
          >
            <Download size={17} /> MTS &amp; WTS <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
