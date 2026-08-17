// 🅒 Minimal Luxury — 극단적 여백, 타이포 중심
export function VariantC() {
  const stats = [
    { num: "80+", label: "기술 지표 지원" },
    { num: "1ms", label: "평균 체결 지연" },
    { num: "24/7", label: "실시간 고객 지원" },
    { num: "10+", label: "연동 글로벌 거래소" },
  ];
  const sections = [
    { label: "분석 환경", title: "전문가 수준의\n기술적 분석 환경", desc: "80종 이상의 기술 지표와 복수 타임프레임 차트, 시장 깊이 패널을 하나의 화면에서 운용합니다. 실시간 시세와 경제 지표 캘린더를 통해 근거 있는 매매 판단을 내리세요.", img: "/__mockup/images/img_desktop.png" },
    { label: "자동화 매매", title: "조건 기반의\n자동화 매매 시스템", desc: "사전에 설정한 조건이 충족되면 자동으로 주문을 실행합니다. 시장을 직접 지켜보지 않아도 전략이 일관되게 작동합니다.", img: "/__mockup/images/img_laptop.png", rev: true },
  ];
  return (
    <div style={{ fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif", color: "#0f172a", background: "#fff", minWidth: 1280 }}>
      {/* NAV — minimal */}
      <nav style={{ padding: "28px 96px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <img src="/__mockup/images/jw_logo.png" alt="JW에셋" style={{ height: 28 }} />
        <div style={{ display: "flex", gap: 40, fontSize: 14, color: "#94a3b8", letterSpacing: 1 }}>
          <span>서비스</span><span>플랫폼</span><span>지원</span>
        </div>
      </nav>

      {/* FEATURES — Minimal ruled numbers */}
      <section style={{ padding: "80px 96px 100px" }}>
        <p style={{ fontSize: 11, letterSpacing: 4, color: "#94a3b8", textTransform: "uppercase", marginBottom: 48 }}>CORE METRICS</p>
        {stats.map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", padding: "36px 0", borderBottom: i < stats.length - 1 ? "1px solid #f1f5f9" : "none" }}>
            <span style={{ fontSize: 13, color: "#94a3b8", width: 200 }}>0{i + 1}</span>
            <span style={{ fontSize: 80, fontWeight: 900, color: "#3a6aa0", letterSpacing: -2, lineHeight: 1 }}>{s.num}</span>
            <span style={{ fontSize: 20, color: "#475569", minWidth: 300, textAlign: "right" }}>{s.label}</span>
          </div>
        ))}
      </section>

      {/* CONTENT SECTIONS — Image dominant, text floated */}
      {sections.map((s, i) => (
        <section key={i} style={{ display: "flex", flexDirection: s.rev ? "row-reverse" : "row", minHeight: 520, borderTop: "1px solid #f1f5f9" }}>
          <div style={{ flex: "0 0 60%", background: "#f8fafc", overflow: "hidden" }}>
            <img src={s.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ flex: 1, padding: "72px 64px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize: 11, letterSpacing: 4, color: "#3a6aa0", textTransform: "uppercase", marginBottom: 32 }}>{s.label}</p>
            <h3 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.3, marginBottom: 28, whiteSpace: "pre-line" }}>{s.title}</h3>
            <p style={{ fontSize: 15, color: "#64748b", lineHeight: 2 }}>{s.desc}</p>
          </div>
        </section>
      ))}

      {/* PLATFORMS — ultra minimal */}
      <section style={{ padding: "120px 96px", textAlign: "center", borderTop: "1px solid #f1f5f9" }}>
        <p style={{ fontSize: 11, letterSpacing: 4, color: "#94a3b8", textTransform: "uppercase", marginBottom: 32 }}>PLATFORMS</p>
        <h2 style={{ fontSize: 52, fontWeight: 900, marginBottom: 16, letterSpacing: -1 }}>트레이딩 플랫폼</h2>
        <p style={{ fontSize: 16, color: "#94a3b8", marginBottom: 64 }}>어디서든, 언제든</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <a href="#" style={{ padding: "18px 48px", borderRadius: 100, border: "1px solid #e2e8f0", fontSize: 15, fontWeight: 600, color: "#475569", textDecoration: "none", letterSpacing: 0.5 }}>HTS 다운로드</a>
          <a href="#" style={{ padding: "18px 48px", borderRadius: 100, background: "#3a6aa0", color: "#fff", fontSize: 15, fontWeight: 600, textDecoration: "none", letterSpacing: 0.5 }}>MTS &amp; WTS 바로가기</a>
        </div>
      </section>

      {/* FOOTER — single line */}
      <footer style={{ borderTop: "1px solid #f1f5f9", padding: "32px 96px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <img src="/__mockup/images/jw_logo.png" alt="JW에셋" style={{ height: 24 }} />
        <p style={{ fontSize: 12, color: "#cbd5e1" }}>© 2025 JW에셋. 금융위원회 등록 해외선물 중개</p>
        <div style={{ display: "flex", gap: 24, fontSize: 12, color: "#94a3b8" }}>
          <span>이용약관</span><span>개인정보처리방침</span>
        </div>
      </footer>
    </div>
  );
}
