// 🅔 Finance Journal — WSJ·애널리스트 보고서 스타일
export function VariantE() {
  const stats = [
    { num: "80+", label: "기술 지표", sub: "이동평균·볼린저·MACD 포함" },
    { num: "1ms", label: "체결 지연", sub: "최첨단 매칭 엔진 기반" },
    { num: "24/7", label: "고객 대응", sub: "연중무휴 전담 지원팀" },
    { num: "10+", label: "글로벌 거래소", sub: "CME·ICE·SGX 연동" },
  ];
  const articles = [
    {
      tag: "분석 환경",
      title: "전문가 수준의 기술적 분석 환경",
      desc: "80종 이상의 기술 지표, 복수 타임프레임 차트, 시장 깊이(DOM) 패널을 하나의 화면에서 운용합니다. 실시간 해외선물 시세와 경제 지표 캘린더를 통해 근거 있는 매매 판단을 내리세요.",
      quote: "\"차트 하나에 모든 정보가 집약되어 있어 분석 시간이 크게 단축됩니다.\"",
      img: "/__mockup/images/img_desktop.png",
    },
    {
      tag: "자동화 매매",
      title: "조건 기반의 자동화 매매 시스템",
      desc: "사전에 설정한 조건이 충족되면 자동으로 주문을 실행합니다. 시장을 직접 지켜보지 않아도 전략이 일관되게 작동하며, 매매 이력 분석을 통해 전략을 지속적으로 개선할 수 있습니다.",
      quote: "\"수면 중에도 포지션이 자동으로 관리되어 심리적 부담이 없어졌습니다.\"",
      img: "/__mockup/images/img_laptop.png",
    },
    {
      tag: "리스크 관리",
      title: "체계적인 주문 관리와 리스크 제어",
      desc: "시장가·지정가·스톱 주문 등 다양한 주문 유형을 지원하며, 스톱로스와 테이크프로핏을 사전에 설정해 리스크를 체계적으로 관리할 수 있습니다.",
      quote: "\"원클릭 매매로 순간적인 기회를 절대 놓치지 않습니다.\"",
      img: "/__mockup/images/img_web.png",
    },
  ];
  return (
    <div style={{ fontFamily: "'Pretendard', 'Noto Sans KR', Georgia, serif", color: "#1e293b", background: "#fafaf8", minWidth: 1280 }}>
      {/* NAV — newspaper masthead feel */}
      <nav style={{ borderBottom: "2px solid #1e293b", padding: "0 80px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, background: "#fafaf8" }}>
        <img src="/__mockup/images/jw_logo.png" alt="JW에셋" style={{ height: 30 }} />
        <div style={{ display: "flex", gap: 36, fontSize: 13, color: "#475569", letterSpacing: 0.5 }}>
          <span>서비스 소개</span><span>플랫폼</span><span>투자 정보</span><span>고객지원</span>
        </div>
        <a href="#" style={{ background: "#3a6aa0", color: "#fff", padding: "8px 20px", fontSize: 13, fontWeight: 700, textDecoration: "none", borderRadius: 4 }}>다운로드</a>
      </nav>

      {/* FEATURES — Journal 2-col layout */}
      <section style={{ padding: "72px 80px 64px", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: 3, color: "#3a6aa0", textTransform: "uppercase", fontWeight: 700, marginBottom: 20 }}>INVESTMENT INFRASTRUCTURE</p>
            <h2 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>숫자로 증명하는 JW에셋의 투자 인프라</h2>
            <p style={{ fontSize: 16, color: "#64748b", lineHeight: 2 }}>글로벌 선물 시장에서 신뢰받는 JW에셋의 핵심 성과 지표입니다. 검증된 기술 인프라 위에서 투자하세요.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "#e2e8f0", border: "1px solid #e2e8f0" }}>
            {stats.map((s, i) => (
              <div key={i} style={{ background: "#fafaf8", padding: "32px 28px" }}>
                <div style={{ fontSize: 52, fontWeight: 900, color: "#3a6aa0", lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 12, color: "#94a3b8" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES — Journal card style */}
      {articles.map((a, i) => (
        <section key={i} style={{ padding: "64px 80px", borderBottom: "1px solid #e2e8f0", display: "grid", gridTemplateColumns: i % 2 === 0 ? "3fr 2fr" : "2fr 3fr", gap: 64, alignItems: "center", background: i === 1 ? "#fff" : "#fafaf8" }}>
          {i % 2 !== 0 && (
            <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
              <img src={a.img} alt="" style={{ width: "100%", display: "block" }} />
            </div>
          )}
          <div>
            <span style={{ fontSize: 11, letterSpacing: 3, color: "#3a6aa0", fontWeight: 700, textTransform: "uppercase" }}>{a.tag}</span>
            <h3 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.3, margin: "16px 0 20px" }}>{a.title}</h3>
            <p style={{ fontSize: 15, color: "#475569", lineHeight: 2, marginBottom: 24 }}>{a.desc}</p>
            <blockquote style={{ borderLeft: "3px solid #3a6aa0", paddingLeft: 20, color: "#64748b", fontSize: 14, fontStyle: "italic", lineHeight: 1.8 }}>{a.quote}</blockquote>
          </div>
          {i % 2 === 0 && (
            <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
              <img src={a.img} alt="" style={{ width: "100%", display: "block" }} />
            </div>
          )}
        </section>
      ))}

      {/* PLATFORMS — Newspaper CTA */}
      <section style={{ padding: "80px", textAlign: "center", borderBottom: "2px solid #1e293b", background: "#fafaf8" }}>
        <p style={{ fontSize: 11, letterSpacing: 4, color: "#3a6aa0", textTransform: "uppercase", fontWeight: 700, marginBottom: 24 }}>PLATFORMS</p>
        <h2 style={{ fontSize: 48, fontWeight: 900, marginBottom: 12, lineHeight: 1.1 }}>트레이딩 플랫폼 바로가기</h2>
        <div style={{ width: 48, height: 3, background: "#3a6aa0", margin: "0 auto 32px" }} />
        <p style={{ fontSize: 16, color: "#64748b", marginBottom: 48 }}>데스크탑·모바일·웹 어디서든 JW에셋과 함께 실시간 투자를 경험하세요</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <a href="#" style={{ padding: "16px 40px", border: "2px solid #1e293b", borderRadius: 4, fontSize: 15, fontWeight: 700, color: "#1e293b", textDecoration: "none" }}>↓ HTS 다운로드</a>
          <a href="#" style={{ padding: "16px 40px", background: "#3a6aa0", borderRadius: 4, fontSize: 15, fontWeight: 700, color: "#fff", textDecoration: "none" }}>🌐 MTS &amp; WTS 바로가기</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#1e293b", color: "#64748b", padding: "48px 80px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48 }}>
        <div>
          <img src="/__mockup/images/jw_logo.png" alt="JW에셋" style={{ height: 26, filter: "brightness(0) invert(1)", marginBottom: 16 }} />
          <p style={{ fontSize: 12, lineHeight: 2 }}>JW에셋은 금융위원회 등록 해외선물 전문 투자 중개 서비스입니다.<br />© 2025 JW에셋. All rights reserved.</p>
        </div>
        <div style={{ fontSize: 13 }}>
          <div style={{ color: "#f1f5f9", fontWeight: 700, marginBottom: 16, fontSize: 12, letterSpacing: 1, textTransform: "uppercase" }}>플랫폼</div>
          <div style={{ lineHeight: 2.5 }}>HTS 다운로드<br />MTS 바로가기<br />WTS 바로가기</div>
        </div>
        <div style={{ fontSize: 13 }}>
          <div style={{ color: "#f1f5f9", fontWeight: 700, marginBottom: 16, fontSize: 12, letterSpacing: 1, textTransform: "uppercase" }}>법적 고지</div>
          <div style={{ lineHeight: 2.5 }}>이용약관<br />개인정보처리방침<br />고객센터</div>
        </div>
      </footer>
    </div>
  );
}
