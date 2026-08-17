// 🅓 Card Dashboard — 현대적 SaaS 랜딩 스타일
export function VariantD() {
  const features = [
    { icon: "📈", title: "80+ 기술 지표", desc: "이동평균, 볼린저밴드, MACD 등 80종 이상의 기술 지표를 실시간으로 활용할 수 있습니다.", stat: "80+" },
    { icon: "⚡", title: "초고속 체결", desc: "평균 1ms의 초고속 주문 체결 속도로 시장 기회를 놓치지 않습니다.", stat: "1ms" },
    { icon: "🛡️", title: "체계적 리스크 관리", desc: "스톱로스·테이크프로핏 자동 실행으로 리스크를 시스템화합니다.", stat: "24/7" },
    { icon: "🌐", title: "글로벌 시장 접근", desc: "CME, ICE 등 세계 10개 이상의 주요 거래소에 실시간으로 연결됩니다.", stat: "10+" },
  ];
  const bullets = ["시장가 · 지정가 주문 완벽 지원", "스톱로스 · 테이크프로핏 자동 실행", "트레일링 스톱으로 수익 극대화", "원클릭 매매로 신속한 포지션 진입"];
  return (
    <div style={{ fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif", color: "#0f172a", background: "#f8fafc", minWidth: 1280 }}>
      {/* NAV */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "0 64px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 50 }}>
        <img src="/__mockup/images/jw_logo.png" alt="JW에셋" style={{ height: 32 }} />
        <div style={{ display: "flex", gap: 32, fontSize: 14, color: "#475569" }}>
          <span>서비스 소개</span><span>플랫폼</span><span>고객지원</span>
        </div>
        <a href="#" style={{ background: "#3a6aa0", color: "#fff", borderRadius: 8, padding: "8px 20px", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>다운로드</a>
      </nav>

      {/* FEATURES — 4 stat cards */}
      <section style={{ padding: "80px 64px" }}>
        <div style={{ marginBottom: 48 }}>
          <span style={{ background: "#eff6ff", color: "#3a6aa0", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 100, letterSpacing: 1 }}>핵심 기능</span>
          <h2 style={{ fontSize: 40, fontWeight: 800, marginTop: 16, marginBottom: 0 }}>JW에셋이 선택받는 이유</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {features.map((f, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 20, padding: "32px 28px", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", border: "1px solid #f1f5f9" }}>
              <div style={{ fontSize: 32, marginBottom: 20 }}>{f.icon}</div>
              <div style={{ fontSize: 42, fontWeight: 900, color: "#3a6aa0", marginBottom: 8, lineHeight: 1 }}>{f.stat}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>{f.title}</h3>
              <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTENT SECTION 1 — 50/50 split */}
      <section style={{ margin: "0 64px 24px", background: "#fff", borderRadius: 24, overflow: "hidden", border: "1px solid #e2e8f0", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div style={{ padding: "56px 52px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span style={{ background: "#eff6ff", color: "#3a6aa0", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 100, marginBottom: 24, display: "inline-block", width: "fit-content" }}>분석 환경</span>
          <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 20, lineHeight: 1.3 }}>전문가 수준의<br />기술적 분석 환경</h3>
          <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.9, marginBottom: 28 }}>80종 이상의 기술 지표, 복수 타임프레임 차트, 시장 깊이(DOM) 패널을 하나의 화면에서 운용합니다.</p>
          <a href="#" style={{ color: "#3a6aa0", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>자세히 보기 →</a>
        </div>
        <div style={{ background: "#f8fafc", overflow: "hidden" }}>
          <img src="/__mockup/images/img_desktop.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </section>

      {/* CONTENT SECTION 2 — reversed with bullets */}
      <section style={{ margin: "0 64px 64px", background: "#fff", borderRadius: 24, overflow: "hidden", border: "1px solid #e2e8f0", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div style={{ background: "#f8fafc", overflow: "hidden" }}>
          <img src="/__mockup/images/img_web.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ padding: "56px 52px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span style={{ background: "#eff6ff", color: "#3a6aa0", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 100, marginBottom: 24, display: "inline-block", width: "fit-content" }}>리스크 관리</span>
          <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 20, lineHeight: 1.3 }}>체계적인 주문 관리와<br />리스크 제어</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {bullets.map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 20, height: 20, background: "#eff6ff", borderRadius: 100, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#3a6aa0", fontSize: 11, fontWeight: 900 }}>✓</span>
                </div>
                <span style={{ fontSize: 14, color: "#475569" }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section style={{ margin: "0 64px 64px", background: "linear-gradient(135deg, #3a6aa0 0%, #2c5a8c 100%)", borderRadius: 24, padding: "64px", textAlign: "center" }}>
        <h2 style={{ fontSize: 40, fontWeight: 800, color: "#fff", marginBottom: 16 }}>트레이딩 플랫폼 바로가기</h2>
        <p style={{ fontSize: 16, color: "#bfdbfe", marginBottom: 40 }}>데스크탑·모바일·웹 어디서든 JW에셋과 함께 실시간 투자를 경험하세요</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <a href="#" style={{ padding: "16px 40px", borderRadius: 100, background: "#fff", color: "#3a6aa0", fontWeight: 700, fontSize: 16, textDecoration: "none" }}>↓ HTS 다운로드</a>
          <a href="#" style={{ padding: "16px 40px", borderRadius: 100, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.4)", color: "#fff", fontWeight: 700, fontSize: 16, textDecoration: "none" }}>🌐 MTS &amp; WTS 바로가기</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0f172a", padding: "48px 64px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <img src="/__mockup/images/jw_logo.png" alt="" style={{ height: 28, filter: "brightness(0) invert(1)" }} />
        <p style={{ fontSize: 12, color: "#475569" }}>© 2025 JW에셋. All rights reserved.</p>
        <div style={{ display: "flex", gap: 24, fontSize: 13, color: "#64748b" }}>
          <span>이용약관</span><span>개인정보처리방침</span><span>고객센터</span>
        </div>
      </footer>
    </div>
  );
}
