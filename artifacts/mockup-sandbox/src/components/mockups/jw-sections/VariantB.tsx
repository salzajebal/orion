// 🅑 Blueprint Grid — 구조적 그리드 스타일
export function VariantB() {
  const stats = [
    { num: "80+", label: "기술 지표", icon: "📊" },
    { num: "1ms", label: "체결 속도", icon: "⚡" },
    { num: "24/7", label: "고객 지원", icon: "🛡️" },
    { num: "10+", label: "글로벌 거래소", icon: "🌐" },
  ];
  const chips = ["시장가 주문", "지정가 주문", "스톱로스 자동화", "원클릭 매매", "복수 타임프레임"];
  return (
    <div style={{ fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif", color: "#0f172a", background: "#f1f5f9", minWidth: 1280 }}>
      {/* NAV */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "0 64px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 50 }}>
        <img src="/__mockup/images/jw_logo.png" alt="JW에셋" style={{ height: 32 }} />
        <div style={{ display: "flex", gap: 32, fontSize: 14, color: "#475569" }}>
          <span>서비스 소개</span><span>플랫폼</span><span>고객지원</span>
        </div>
        <a href="#" style={{ background: "#3a6aa0", color: "#fff", borderRadius: 8, padding: "8px 20px", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>다운로드</a>
      </nav>

      {/* FEATURES — Blueprint Card Grid */}
      <section style={{ padding: "80px 64px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
          <div style={{ width: 4, height: 32, background: "#3a6aa0", borderRadius: 2 }} />
          <div>
            <p style={{ fontSize: 12, color: "#3a6aa0", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", margin: 0 }}>INFRASTRUCTURE</p>
            <h2 style={{ fontSize: 36, fontWeight: 800, margin: 0, marginTop: 4 }}>핵심 인프라 현황</h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: "32px 28px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "#3a6aa0", borderRadius: "16px 16px 0 0" }} />
              <div style={{ fontSize: 28, marginBottom: 16 }}>{s.icon}</div>
              <div style={{ fontSize: 48, fontWeight: 900, color: "#3a6aa0", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 14, color: "#64748b", marginTop: 8, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTENT ROW 1 */}
      <section style={{ padding: "0 64px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ background: "#fff", borderRadius: 20, overflow: "hidden", border: "1px solid #e2e8f0" }}>
          <img src="/__mockup/images/img_desktop.png" alt="" style={{ width: "100%", height: 260, objectFit: "cover" }} />
          <div style={{ padding: "28px 32px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#3a6aa0", textTransform: "uppercase", marginBottom: 10 }}>분석 환경</p>
            <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>전문가 수준의 기술적 분석 환경</h3>
            <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.8 }}>80종 이상의 기술 지표, 복수 타임프레임 차트, DOM 패널을 하나의 화면에서 운용합니다.</p>
          </div>
        </div>
        <div style={{ background: "#fff", borderRadius: 20, overflow: "hidden", border: "1px solid #e2e8f0" }}>
          <img src="/__mockup/images/img_laptop.png" alt="" style={{ width: "100%", height: 260, objectFit: "cover" }} />
          <div style={{ padding: "28px 32px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#3a6aa0", textTransform: "uppercase", marginBottom: 10 }}>자동화</p>
            <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>조건 기반의 자동화 매매 시스템</h3>
            <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.8 }}>사전에 설정한 조건이 충족되면 자동으로 주문을 실행합니다. 전략이 일관되게 작동합니다.</p>
          </div>
        </div>
      </section>

      {/* CONTENT ROW 2 — 리스크 제어 with data chips */}
      <section style={{ padding: "0 64px 64px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ background: "#fff", borderRadius: 20, border: "1px solid #e2e8f0", overflow: "hidden" }}>
          <img src="/__mockup/images/img_web.png" alt="" style={{ width: "100%", height: 240, objectFit: "cover" }} />
          <div style={{ padding: "28px 32px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#3a6aa0", textTransform: "uppercase", marginBottom: 10 }}>리스크 관리</p>
            <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>체계적인 주문 관리와 리스크 제어</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {chips.map((c, i) => (
                <span key={i} style={{ fontSize: 12, background: "#f0f7ff", color: "#3a6aa0", border: "1px solid #bfdbfe", borderRadius: 100, padding: "4px 12px", fontWeight: 600 }}>{c}</span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ background: "#3a6aa0", borderRadius: 20, padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#bfdbfe", textTransform: "uppercase", marginBottom: 16 }}>PLATFORMS</p>
          <h3 style={{ fontSize: 32, fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: 24 }}>트레이딩 플랫폼<br />바로가기</h3>
          <p style={{ fontSize: 14, color: "#bfdbfe", lineHeight: 1.8, marginBottom: 36 }}>데스크탑·모바일·웹 어디서든 JW에셋과 함께 실시간 투자를 경험하세요</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <a href="#" style={{ background: "#fff", color: "#3a6aa0", borderRadius: 12, padding: "14px 28px", fontWeight: 700, fontSize: 15, textDecoration: "none", textAlign: "center" }}>↓ HTS 다운로드</a>
            <a href="#" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", borderRadius: 12, padding: "14px 28px", fontWeight: 700, fontSize: 15, textDecoration: "none", textAlign: "center", border: "1px solid rgba(255,255,255,0.3)" }}>🌐 MTS &amp; WTS 바로가기</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0f172a", color: "#94a3b8", padding: "48px 64px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <img src="/__mockup/images/jw_logo.png" alt="JW에셋" style={{ height: 26, filter: "brightness(0) invert(1)", marginBottom: 12 }} />
          <p style={{ fontSize: 12, lineHeight: 2 }}>© 2025 JW에셋. All rights reserved.</p>
        </div>
        <div style={{ display: "flex", gap: 32, fontSize: 13 }}>
          <span>이용약관</span><span>개인정보처리방침</span><span>고객센터</span>
        </div>
      </footer>
    </div>
  );
}
