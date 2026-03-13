export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden motion-reduce:hidden">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-strong">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          id="curve1"
          d="M-50,200 C200,100 400,400 600,200 S900,100 1100,300 S1400,500 1600,200"
          fill="none"
          stroke="none"
        />
        <path
          id="curve2"
          d="M-50,500 C150,300 350,600 550,400 S800,200 1000,500 S1300,700 1500,400"
          fill="none"
          stroke="none"
        />
        <path
          id="curve3"
          d="M-50,700 C100,600 300,800 500,650 S750,500 950,700 S1200,850 1500,650"
          fill="none"
          stroke="none"
        />
        <path
          id="curve4"
          d="M-50,350 C250,200 450,500 700,350 S1000,150 1200,400 S1500,600 1700,350"
          fill="none"
          stroke="none"
        />

        {[
          { href: "#curve1", dur: "12s", r: "3", delay: "0s" },
          { href: "#curve1", dur: "12s", r: "2.5", delay: "3s" },
          { href: "#curve1", dur: "12s", r: "2", delay: "6s" },
          { href: "#curve1", dur: "12s", r: "3.5", delay: "9s" },
          { href: "#curve2", dur: "15s", r: "2.5", delay: "0s" },
          { href: "#curve2", dur: "15s", r: "3", delay: "4s" },
          { href: "#curve2", dur: "15s", r: "2", delay: "8s" },
          { href: "#curve2", dur: "15s", r: "3.5", delay: "12s" },
          { href: "#curve3", dur: "18s", r: "2", delay: "0s" },
          { href: "#curve3", dur: "18s", r: "3", delay: "5s" },
          { href: "#curve3", dur: "18s", r: "2.5", delay: "10s" },
          { href: "#curve3", dur: "18s", r: "3.5", delay: "15s" },
          { href: "#curve4", dur: "14s", r: "2.5", delay: "0s" },
          { href: "#curve4", dur: "14s", r: "3", delay: "3.5s" },
          { href: "#curve4", dur: "14s", r: "2", delay: "7s" },
          { href: "#curve4", dur: "14s", r: "3.5", delay: "10.5s" },
        ].map((p, i) => (
          <circle key={`particle-${i}`} r={p.r} fill="#3a6aa0" opacity="0.6" filter="url(#glow)">
            <animateMotion dur={p.dur} repeatCount="indefinite" begin={p.delay}>
              <mpath href={p.href} />
            </animateMotion>
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" begin={p.delay} />
          </circle>
        ))}

        {[
          { cx: "15%", cy: "25%", maxR: 80, dur: "6s", delay: "0s" },
          { cx: "50%", cy: "50%", maxR: 120, dur: "8s", delay: "1s" },
          { cx: "80%", cy: "30%", maxR: 70, dur: "7s", delay: "2s" },
          { cx: "30%", cy: "70%", maxR: 90, dur: "9s", delay: "0.5s" },
          { cx: "70%", cy: "75%", maxR: 100, dur: "7.5s", delay: "3s" },
          { cx: "90%", cy: "55%", maxR: 60, dur: "6.5s", delay: "1.5s" },
        ].map((pulse, i) => (
          <circle
            key={`pulse-${i}`}
            cx={pulse.cx}
            cy={pulse.cy}
            r="10"
            fill="none"
            stroke="#3a6aa0"
            strokeWidth="1"
            opacity="0"
          >
            <animate attributeName="r" values={`10;${pulse.maxR}`} dur={pulse.dur} repeatCount="indefinite" begin={pulse.delay} />
            <animate attributeName="opacity" values="0.25;0" dur={pulse.dur} repeatCount="indefinite" begin={pulse.delay} />
          </circle>
        ))}

        <g stroke="#3a6aa0" strokeWidth="1" fill="none" opacity="0.15">
          <line x1="10%" y1="20%" x2="30%" y2="15%" strokeDasharray="8 6">
            <animate attributeName="stroke-dashoffset" values="0;-100" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="30%" y1="15%" x2="45%" y2="35%" strokeDasharray="8 6">
            <animate attributeName="stroke-dashoffset" values="0;-100" dur="5s" repeatCount="indefinite" />
          </line>
          <line x1="45%" y1="35%" x2="65%" y2="25%" strokeDasharray="8 6">
            <animate attributeName="stroke-dashoffset" values="0;-100" dur="4.5s" repeatCount="indefinite" />
          </line>
          <line x1="65%" y1="25%" x2="85%" y2="40%" strokeDasharray="8 6">
            <animate attributeName="stroke-dashoffset" values="0;-100" dur="3.5s" repeatCount="indefinite" />
          </line>
          <line x1="85%" y1="40%" x2="95%" y2="20%" strokeDasharray="8 6">
            <animate attributeName="stroke-dashoffset" values="0;-100" dur="4s" repeatCount="indefinite" />
          </line>

          <line x1="5%" y1="60%" x2="20%" y2="75%" strokeDasharray="6 8">
            <animate attributeName="stroke-dashoffset" values="0;-80" dur="5s" repeatCount="indefinite" />
          </line>
          <line x1="20%" y1="75%" x2="40%" y2="65%" strokeDasharray="6 8">
            <animate attributeName="stroke-dashoffset" values="0;-80" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="40%" y1="65%" x2="55%" y2="80%" strokeDasharray="6 8">
            <animate attributeName="stroke-dashoffset" values="0;-80" dur="4.5s" repeatCount="indefinite" />
          </line>
          <line x1="55%" y1="80%" x2="75%" y2="70%" strokeDasharray="6 8">
            <animate attributeName="stroke-dashoffset" values="0;-80" dur="3.5s" repeatCount="indefinite" />
          </line>
          <line x1="75%" y1="70%" x2="92%" y2="85%" strokeDasharray="6 8">
            <animate attributeName="stroke-dashoffset" values="0;-80" dur="5s" repeatCount="indefinite" />
          </line>

          <line x1="25%" y1="45%" x2="50%" y2="50%" strokeDasharray="10 5">
            <animate attributeName="stroke-dashoffset" values="0;-120" dur="6s" repeatCount="indefinite" />
          </line>
          <line x1="50%" y1="50%" x2="75%" y2="45%" strokeDasharray="10 5">
            <animate attributeName="stroke-dashoffset" values="0;-120" dur="5.5s" repeatCount="indefinite" />
          </line>
        </g>

        {[
          { cx: "30%", cy: "15%", r: 4 },
          { cx: "45%", cy: "35%", r: 3.5 },
          { cx: "65%", cy: "25%", r: 4 },
          { cx: "85%", cy: "40%", r: 3 },
          { cx: "20%", cy: "75%", r: 3.5 },
          { cx: "40%", cy: "65%", r: 4 },
          { cx: "55%", cy: "80%", r: 3 },
          { cx: "75%", cy: "70%", r: 4 },
          { cx: "50%", cy: "50%", r: 5 },
          { cx: "10%", cy: "20%", r: 3 },
          { cx: "95%", cy: "20%", r: 3 },
          { cx: "25%", cy: "45%", r: 3.5 },
          { cx: "75%", cy: "45%", r: 3.5 },
        ].map((node, i) => (
          <circle
            key={`node-${i}`}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="#3a6aa0"
            opacity="0.2"
            filter="url(#glow)"
          >
            <animate attributeName="opacity" values="0.1;0.35;0.1" dur={`${3 + (i % 4)}s`} repeatCount="indefinite" begin={`${i * 0.5}s`} />
          </circle>
        ))}
      </svg>
    </div>
  );
}
