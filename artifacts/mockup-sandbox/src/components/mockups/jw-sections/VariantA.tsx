// 🅐 Editorial Finance — 금융 매거진 스타일
export function VariantA() {
  const stats = [
    { num: "80+", label: "기술 지표" },
    { num: "1ms", label: "체결 속도" },
    { num: "24/7", label: "고객 지원" },
    { num: "10+", label: "글로벌 거래소" },
  ];
  const features = [
    {
      title: "전문가 수준의 기술적 분석 환경",
      desc: "80종 이상의 기술 지표, 복수 타임프레임 차트, 시장 깊이(DOM) 패널을 하나의 화면에서 운용합니다.",
      img: "/__mockup/images/img_desktop.png",
    },
    {
      title: "조건 기반의 자동화 매매 시스템",
      desc: "사전에 설정한 조건이 충족되면 자동으로 주문을 실행합니다. 전략이 일관되게 작동하며 지속적으로 개선할 수 있습니다.",
      img: "/__mockup/images/img_laptop.png",
      rev: true,
    },
    {
      title: "체계적인 주문 관리와 리스크 제어",
      desc: "시장가·지정가·스톱 주문 등 다양한 주문 유형을 지원하며 스톱로스와 테이크프로핏을 사전에 설정해 리스크를 체계적으로 관리합니다.",
      img: "/__mockup/images/img_web.png",
    },
  ];
  return (
    <div style={{ fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif", color: "#0f172a", background: "#fff", minWidth: 1280 }}>
      {/* NAV */}
      <nav style={{ borderBottom: "1px solid #e2e8f0", padding: "0 80px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff", position: "sticky", top: 0, zIndex: 50 }}>
        <img src="/__mockup/images/jw_logo.png" alt="JW에셋" style={{ height: 32 }} />
        <div style={{ display: "flex", gap: 32, fontSize: 14, color: "#475569" }}>
          <span>서비스 소개</span><span>플랫폼</span><span>고객지원</span>
        </div>
        <a href="#" style={{ background: "#3a6aa0", color: "#fff", borderRadius: 8, padding: "8px 20px", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>다운로드</a>
      </nav>

      {/* FEATURES — Editorial Stat Grid */}
      <section style={{ padding: "100px 80px 60px", background: "#fff" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", borderBottom: "2px solid #0f172a", paddingBottom: 40, marginBottom: 56 }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: "#3a6aa0", textTransform: "uppercase", marginBottom: 16 }}>WHY JW ASSET</p>
            <h2 style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.1, margin: 0 }}>숫자로 증명하는<br />투자 인프라</h2>
          </div>
          <p style={{ fontSize: 16, color: "#64748b", maxWidth: 360, lineHeight: 1.8, marginBottom: 4 }}>글로벌 선물 시장을 주도하는 JW에셋의 핵심 지표를 확인하세요. 검증된 데이터가 신뢰의 기준입니다.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ padding: "40px 40px", borderRight: i < 3 ? "1px solid #e2e8f0" : "none" }}>
              <div style={{ fontSize: 64, fontWeight: 900, color: "#3a6aa0", lineHeight: 1, marginBottom: 12 }}>{s.num}</div>
              <div style={{ fontSize: 15, color: "#64748b" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTENT SECTIONS — Full-bleed editorial */}
      {features.map((f, i) => (
        <section key={i} style={{ display: "flex", flexDirection: f.rev ? "row-reverse" : "row", minHeight: 480, borderTop: "1px solid #e2e8f0" }}>
          <div style={{ flex: 1, overflow: "hidden", background: "#f8fafc" }}>
            <img src={f.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ flex: 1, padding: "80px 72px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "#3a6aa0", textTransform: "uppercase", marginBottom: 24 }}>FEATURE 0{i + 1}</p>
            <h3 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.2, marginBottom: 24, color: "#0f172a" }}>{f.title}</h3>
            <div style={{ width: 40, height: 3, background: "#3a6aa0", marginBottom: 28 }} />
            <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.9 }}>{f.desc}</p>
          </div>
        </section>
      ))}

      {/* PLATFORMS */}
      <section style={{ padding: "100px 80px", background: "#f8fafc", borderTop: "1px solid #e2e8f0", textAlign: "center" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "#3a6aa0", textTransform: "uppercase", marginBottom: 24 }}>PLATFORMS</div>
        <h2 style={{ fontSize: 44, fontWeight: 800, marginBottom: 16 }}>트레이딩 플랫폼 바로가기</h2>
        <p style={{ color: "#64748b", fontSize: 16, marginBottom: 48 }}>데스크탑·모바일·웹 어디서든 JW에셋과 함께 실시간 투자를 경험하세요</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <a href="#" style={{ padding: "16px 40px", borderRadius: 100, border: "1px solid #cbd5e1", background: "#fff", fontSize: 16, fontWeight: 700, color: "#0f172a", textDecoration: "none" }}>↓ HTS 다운로드</a>
          <a href="#" style={{ padding: "16px 40px", borderRadius: 100, background: "#3a6aa0", fontSize: 16, fontWeight: 700, color: "#fff", textDecoration: "none" }}>🌐 MTS &amp; WTS 바로가기</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0f172a", color: "#94a3b8", padding: "56px 80px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <img src="/__mockup/images/jw_logo.png" alt="JW에셋" style={{ height: 28, filter: "brightness(0) invert(1)", marginBottom: 16 }} />
          <p style={{ fontSize: 13, lineHeight: 2, maxWidth: 360 }}>JW에셋은 금융위원회 등록 해외선물 전문 투자 중개 서비스입니다.</p>
        </div>
        <div style={{ display: "flex", gap: 64, fontSize: 13 }}>
          <div>
            <div style={{ color: "#fff", fontWeight: 700, marginBottom: 16 }}>플랫폼</div>
            <div style={{ lineHeight: 2.5 }}>HTS<br />MTS<br />WTS</div>
          </div>
          <div>
            <div style={{ color: "#fff", fontWeight: 700, marginBottom: 16 }}>고객지원</div>
            <div style={{ lineHeight: 2.5 }}>이용약관<br />개인정보처리방침<br />고객센터</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
