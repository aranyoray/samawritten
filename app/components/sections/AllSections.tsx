"use client";

import { useState, useEffect, useRef } from "react";
import { useReveal } from "../../hooks";
import { useWaitlist } from "../../context/WaitlistContext";
import { Mono, Eyebrow, SectionTitle, BtnDark } from "../ui";
import { tokens, PROBLEM_STATS, HOW_IT_WORKS_STEPS, LEFT_FEATURES, RIGHT_FEATURES, SENSORS, CONDITION_TIERS, CELLULAR_SCENARIOS, SCIENCE_STATS, PRICING_PLANS, MARKET_NUMBERS } from "@/app/constants";

const RESPONSIVE_STYLES = `
  .section-pad { padding: 100px 56px; }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; }
  .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); }
  .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); }
  
  @media (max-width: 1024px) {
    .section-pad { padding: 60px 24px; }
    .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
    .md-grid-2 { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 640px) {
    .md-grid-2 { grid-template-columns: 1fr; }
  }
`;

// ── PROBLEM STATS ─────────────────────────────────────────────────
export function ProblemStats() {
  return (
    <section className="reveal grid-4" style={{ background:tokens.black, padding:"80px 24px" }}>
      <style>{RESPONSIVE_STYLES}</style>
      {PROBLEM_STATS.map((s, i) => (
        <div key={i} style={{
          padding:"24px 40px",
          borderRight: "none",
          borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
          display:"flex", flexDirection:"column", gap:8,
          textAlign: "center"
        }} className="stat-item">
          <style>{`
            @media (min-width: 1025px) {
              .stat-item { padding: 0 40px !important; text-align: left !important; border-bottom: none !important; border-right: ${i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none"} !important; }
              .stat-item:first-child { padding-left: 0 !important; }
            }
          `}</style>
          <span style={{ fontSize:44, fontWeight:200, letterSpacing:"-0.04em", color:tokens.white, lineHeight:1 }}>
            {s.num}<span style={{ color:tokens.green, fontWeight:600 }}>{s.unit}</span>
          </span>
          <Mono style={{ fontSize:13, letterSpacing:"0.15em", color:tokens.white, textTransform:"uppercase", lineHeight:1.5 }}>{s.label}</Mono>
        </div>
      ))}
    </section>
  );
}

// ── POSITIONING ───────────────────────────────────────────────────
export function Positioning() {
  return (
    <section id="how" className="section-pad" style={{ background:tokens.offWhite, borderBottom:`1px solid ${tokens.border}` }}>
      <div className="reveal" style={{ maxWidth: 800 }}>
        <h2 style={{ fontSize: "clamp(28px, 4.5vw, 46px)", fontWeight: 200, lineHeight: 1.2, letterSpacing: "-0.03em", marginBottom: 32 }}>
          Most cardiac emergencies happen<br />
          <strong style={{ fontWeight: 600 }}>when no one is watching.</strong>
        </h2>
        <p style={{ fontSize:15, fontWeight:300, lineHeight:1.85, color:tokens.mid }}>
          Your Apple Watch can detect AFib. But it can&apos;t call your daughter when you collapse at 2am. It can&apos;t text your cardiologist your last 72 hours of data. And it{" "}
          <strong style={{ color:tokens.text, fontWeight:500 }}>definitely can&apos;t predict a heart failure episode six days before it happens.</strong>{" "}
          SamaBeat can.
        </p>
      </div>
    </section>
  );
}

// ── HOW IT WORKS ──────────────────────────────────────────────────
export function HowItWorks() {
  return (
    <section className="section-pad" style={{ background:tokens.white }}>
      <div className="reveal">
        <SectionTitle>Wear it. Forget it.<br /><strong>It&apos;s watching for you.</strong></SectionTitle>
      </div>
      <div className="grid-3" style={{ background:tokens.border, gap:1, border:`1px solid ${tokens.border}`, marginTop:56 }}>
        {HOW_IT_WORKS_STEPS.map((s, i) => (
          <div key={i} className={`reveal d${i+1}`} style={{ background:tokens.white, padding:"48px 36px", display:"flex", flexDirection:"column", gap:18 }}>
            <Mono style={{ fontSize:11, letterSpacing:"0.3em", color:tokens.accent, textTransform:"uppercase" }}>{s.num}</Mono>
            <h3 style={{ fontSize:22, fontWeight:400, letterSpacing:"-0.02em" }}>{s.title}</h3>
            <p style={{ fontSize:13.5, fontWeight:300, lineHeight:1.75, color:tokens.mid }}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── HEALTH & SENSORS SCROLL ───────────────────────────────────────
function FeatItem({ data, align = "left", dotRef }: {
  data: { tag: string; name: string; desc: string };
  align?: "left" | "right";
  dotRef?: React.RefObject<HTMLSpanElement | null>;
}) {
  return (
    <div className="feat-item" style={{ textAlign:align }}>
      <Mono style={{ fontSize:8.5, letterSpacing:"0.25em", color:tokens.accent, textTransform:"uppercase", display:"block", marginBottom:5 }}>
        {data.tag}
      </Mono>
      <div className="feat-title" style={{
        fontSize:17, fontWeight:400, letterSpacing:"-0.01em", color:tokens.black, marginBottom:6,
        display:"flex", alignItems:"center", gap:9,
        flexDirection: "row",
        justifyContent: align === "left" ? "flex-start" : "flex-end",
      }}>
        {align === "right" && (
           <span ref={dotRef} className="dot" style={{
             width:5, height:5, borderRadius:"50%", background:tokens.accent, flexShrink:0,
             boxShadow: `0 0 10px ${tokens.accent}`,
           }} />
        )}
        {data.name}
        {align === "left" && (
           <span ref={dotRef} className="dot" style={{
             width:5, height:5, borderRadius:"50%", background:tokens.accent, flexShrink:0,
             boxShadow: `0 0 10px ${tokens.accent}`,
           }} />
        )}
      </div>
      <p style={{
        fontFamily:"'DM Mono',monospace", fontSize:10.5,
        color:tokens.dim, lineHeight:1.7,
        maxWidth:210, marginLeft: align === "left" ? 0 : "auto",
        marginRight: align === "left" ? "auto" : 0,
      }} className="feat-desc">{data.desc}</p>
      <style>{`
        @media (max-width: 1024px) {
          .feat-item { text-align: center !important; }
          .feat-title { justify-content: center !important; flex-direction: row-reverse !important; gap: 8px !important; }
          .feat-desc { max-width: 100% !important; margin-left: auto !important; margin-right: auto !important; }
        }
      `}</style>
    </div>
  );
}

function SensorItem({ data, align = "left", color, dotRef }: {
  data: { icon: string; name: string; spec: string; detail: string };
  align?: "left" | "right";
  color: string;
  dotRef?: React.RefObject<HTMLSpanElement | null>;
}) {
  return (
    <div className="feat-item" style={{ textAlign:align }}>
      <Mono style={{ fontSize:8.5, letterSpacing:"0.25em", color, textTransform:"uppercase", display:"block", marginBottom:5 }}>
        {data.icon} {data.spec}
      </Mono>
      <div className="feat-title" style={{
        fontSize:17, fontWeight:400, letterSpacing:"-0.01em", color:tokens.black, marginBottom:6,
        display:"flex", alignItems:"center", gap:9,
        flexDirection: "row",
        justifyContent: align === "left" ? "flex-start" : "flex-end",
      }}>
        {align === "right" && (
           <span ref={dotRef} className="dot" style={{
             width:5, height:5, borderRadius:"50%", background:color, flexShrink:0,
             boxShadow: `0 0 10px ${color}`,
           }} />
        )}
        {data.name}
        {align === "left" && (
           <span ref={dotRef} className="dot" style={{
             width:5, height:5, borderRadius:"50%", background:color, flexShrink:0,
             boxShadow: `0 0 10px ${color}`,
           }} />
        )}
      </div>
      <p style={{
        fontFamily:"'DM Mono',monospace", fontSize:10.5,
        color:tokens.dim, lineHeight:1.7,
        maxWidth:210, marginLeft: align === "left" ? 0 : "auto",
        marginRight: align === "left" ? "auto" : 0,
      }} className="feat-desc">{data.detail}</p>
      <style>{`
        @media (max-width: 1024px) {
          .feat-item { text-align: center !important; }
          .feat-title { justify-content: center !important; flex-direction: row-reverse !important; gap: 8px !important; }
          .feat-desc { max-width: 100% !important; margin-left: auto !important; margin-right: auto !important; }
        }
      `}</style>
    </div>
  );
}

const SENSOR_COLORS = ["#22C55E", "#EAB308", "#F97316", "#EF4444", "#9CA3AF"];

export function HealthAndSensorsScroll() {
  const containerRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mobileCanvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  const l0Ref = useRef<HTMLSpanElement>(null);
  const l1Ref = useRef<HTMLSpanElement>(null);
  const r0Ref = useRef<HTMLSpanElement>(null);
  const r1Ref = useRef<HTMLSpanElement>(null);

  const s0Ref = useRef<HTMLSpanElement>(null);
  const s1Ref = useRef<HTMLSpanElement>(null);
  const s2Ref = useRef<HTMLSpanElement>(null);
  const s3Ref = useRef<HTMLSpanElement>(null);
  const s4Ref = useRef<HTMLSpanElement>(null);

  const [progress, setProgress] = useState(0);
  const [lines, setLines] = useState<{x1:number, y1:number, turnX:number, x2:number, y2:number}[]>([]);
  const [linesP2, setLinesP2] = useState<{x1:number, y1:number, turnX:number, dropY:number, x2:number, y2:number, color:string}[]>([]);

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScroll = rect.height - windowHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / totalScroll));
      setProgress(p);
    };
    
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const updateLines = () => {
      if (!stickyRef.current || !canvasRef.current) return;
      const sRect = stickyRef.current.getBoundingClientRect();
      const wRect = canvasRef.current.getBoundingClientRect();
      
      const cx = wRect.left + wRect.width / 2 - sRect.left;
      const cy = wRect.top + wRect.height / 2 - sRect.top;

      const getP = (r: React.RefObject<HTMLSpanElement | null>) => {
        if (!r.current) return null;
        const rect = r.current.getBoundingClientRect();
        return { x: rect.left + rect.width/2 - sRect.left, y: rect.top + rect.height/2 - sRect.top };
      };

      const pts = [getP(l0Ref), getP(l1Ref), getP(r0Ref), getP(r1Ref)];
      const targets = [
        { tx: cx - 145, ty: cy - 35 }, // BP (Top Left of face)
        { tx: cx - 145, ty: cy + 45 }, // HR (Bottom Left of face)
        { tx: cx + 115, ty: cy - 5 },  // SpO2 (Top Right of face)
        { tx: cx + 140, ty: cy + 45 }  // SOS (Bottom Right of face)
      ];

      const newLines = [];
      const turnLeft = cx - 130;
      const turnRight = cx + 130;
      for (let i = 0; i < 4; i++) {
        if (pts[i]) {
          const turnX = i < 2 ? turnLeft : turnRight;
          newLines.push({ x1: pts[i]!.x, y1: pts[i]!.y, turnX, x2: targets[i].tx, y2: targets[i].ty });
        }
      }
      setLines(newLines);

      // Phase 2
      const pts2 = [getP(s0Ref), getP(s1Ref), getP(s2Ref), getP(s3Ref), getP(s4Ref)];
      const targets2 = [
        { tx: cx - 80, ty: cy - 8 }, // Green
        { tx: cx - 60, ty: cy - 8 }, // Yellow
        { tx: cx - 40,      ty: cy - 8 }, // Orange
        { tx: cx - 20, ty: cy - 8 }, // Red
        { tx: cx, ty: cy - 8 }  // Gray
      ];
      const newLinesP2 = [];
      const turnOffsets = [-150, -130, -110, 110, 130];
      const dropYOffsets = [0, -32, 24, -32, 0];
      for (let i = 0; i < 5; i++) {
        if (pts2[i]) {
          const turnX = cx + turnOffsets[i];
          const dropY = cy - 8 + dropYOffsets[i];
          newLinesP2.push({ x1: pts2[i]!.x, y1: pts2[i]!.y, turnX, dropY, x2: targets2[i].tx, y2: targets2[i].ty, color: SENSOR_COLORS[i] });
        }
      }
      setLinesP2(newLinesP2);
    };

    updateLines();
    const timer = setTimeout(updateLines, 100);
    window.addEventListener("resize", updateLines);
    return () => {
      window.removeEventListener("resize", updateLines);
      clearTimeout(timer);
    };
  }, []);

  // 1. Preload images strongly
  useEffect(() => {
    if (imagesRef.current.length > 0) return;
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= 180; i++) {
      const img = new Image();
      img.src = `/rotate/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;
  }, []);

  // 2. High-performance Canvas Drawing
  useEffect(() => {
    const frameIndex = Math.max(0, Math.min(179, Math.round(progress * 179)));
    const img = imagesRef.current[frameIndex];
    
    if (img) {
      const draw = (canvas: HTMLCanvasElement | null) => {
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        
        // Clear and draw
        if (img.complete) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        } else {
          img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          };
        }
      };

      draw(canvasRef.current);
      draw(mobileCanvasRef.current);
    }
  }, [progress]);

  const getOpacity = (p: number, fadeInStart: number, fadeInEnd: number, fadeOutStart: number, fadeOutEnd: number) => {
    if (p < fadeInStart) return 0;
    if (p < fadeInEnd) return (p - fadeInStart) / (fadeInEnd - fadeInStart);
    if (p < fadeOutStart) return 1;
    if (p < fadeOutEnd) return 1 - (p - fadeOutStart) / (fadeOutEnd - fadeOutStart);
    return 0;
  };

  const phase1Op = getOpacity(progress, 0, 0, 0.3, 0.5);
  const phase3Op = getOpacity(progress, 0.5, 0.7, 2, 2);
  
  const watchLeft = 50; 

  return (
    <section ref={containerRef} id="features" className="scroll-main-container" style={{ height: "400vh", position: "relative", background: tokens.white, borderTop:`1px solid ${tokens.border}` }}>
      <style>{`
        .watch-fixed-box { display: none; }
        @media (max-width: 1024px) {
          .scroll-main-container { height: auto !important; padding-bottom: 100px; }
          .scroll-sticky { display: block !important; height: auto !important; position: static !important; }
          .watch-fixed-box {
            display: flex !important;
            position: sticky !important;
            top: 60px;
            height: 220px;
            align-items: center;
            justify-content: center;
            z-index: 100;
            background: linear-gradient(to bottom, #fff 80%, rgba(255,255,255,0) 100%);
            border-bottom: none !important;
          }
          .watch-sequence-mobile {
            position: relative !important;
            left: auto !important;
            transform: none !important;
            width: 290px !important;
            margin: 0 !important;
          }
          .scroll-phase {
            position: relative !important;
            inset: auto !important;
            opacity: 1 !important;
            pointer-events: auto !important;
            padding: 40px 24px !important;
            display: block !important;
            margin-top: -20px;
          }
          .scroll-phase-inner { opacity: 1 !important; text-align: center; margin-bottom: 40px; }
          .scroll-grid-mobile { opacity: 1 !important; }
          .scroll-grid { display: grid; grid-template-columns: 1fr !important; gap: 36px !important; }
          .scroll-feat-col { align-items: center !important; text-align: center !important; opacity: 1 !important; display: flex !important; flexDirection: column !important; }
          .hide-tablet { display: none !important; }
          .leader-lines { display: none !important; }
          .watch-sequence-desktop { display: none !important; }
        }
      `}</style>

      {/* FIXED WATCH BOX (Mobile Only) */}
      <div className="watch-fixed-box">
        <div style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "center", mixBlendMode: "multiply" }} className="watch-sequence-mobile">
           <canvas ref={mobileCanvasRef} width={800} height={800} style={{ width: "100%", height: "auto" }} />
        </div>
      </div>

      <div ref={stickyRef} className="scroll-sticky" style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        
        <div style={{ position: "absolute", left: `${watchLeft}%`, transform: "translateX(-50%)", width: 560, zIndex: 10, display: "flex", justifyContent: "center", mixBlendMode: "multiply", willChange: "left" }} className="watch-sequence-desktop">
           <canvas ref={canvasRef} width={1000} height={1000} style={{ width: "100%", height: "auto" }} />
        </div>

        {/* Phase 1 Leader Lines */}
        <svg className="leader-lines" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 20, opacity: phase1Op, transition: "opacity 0.5s", willChange: "opacity" }}>
          {lines.map((l, i) => (
            <g key={i}>
              <polyline points={`${l.x1},${l.y1} ${l.turnX},${l.y1} ${l.turnX},${l.y2} ${l.x2},${l.y2}`} fill="none" stroke={tokens.accent} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.85" />
              <circle cx={l.x2} cy={l.y2} r="3.5" fill={tokens.accent} opacity="1" />
            </g>
          ))}
        </svg>

        {/* Phase 2 Leader Lines */}
        <svg className="leader-lines" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 20, opacity: phase3Op, transition: "opacity 0.5s", willChange: "opacity" }}>
          {linesP2.map((l, i) => (
            <g key={i}>
              <polyline points={`${l.x1},${l.y1} ${l.turnX},${l.y1} ${l.turnX},${l.dropY} ${l.x2},${l.dropY} ${l.x2},${l.y2}`} fill="none" stroke={l.color} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.85" />
              <circle cx={l.x2} cy={l.y2} r="3.5" fill={l.color} opacity="1" />
            </g>
          ))}
        </svg>

        {/* Phase 1: Features */}
        <div style={{ position: "absolute", inset: 0, padding: "100px 56px", pointerEvents: phase1Op > 0 ? "auto" : "none", opacity: phase1Op, willChange: "opacity" }} className="section-pad scroll-phase">
          <div className="scroll-phase-inner" style={{ opacity: phase1Op }}>
            <SectionTitle>Every metric.<br /><strong>Every moment.</strong></SectionTitle>
          </div>
          <div className="grid-3 scroll-grid scroll-grid-mobile" style={{ gap:48, marginTop:56, opacity: phase1Op }}>
            <style>{`
              @media (min-width: 1025px) {
                .scroll-grid { display: grid; grid-template-columns: 1fr 340px 1fr !important; }
              }
            `}</style>
            <div className="scroll-feat-col" style={{ display:"flex", flexDirection:"column", gap:36 }}>
              {LEFT_FEATURES.map((f, i) => <FeatItem key={i} data={f} align="left" dotRef={i===0 ? l0Ref : l1Ref} />)}
            </div>
            <div className="hide-tablet" />
            <div className="scroll-feat-col" style={{ display:"flex", flexDirection:"column", gap:36 }}>
              {RIGHT_FEATURES.map((f, i) => <FeatItem key={i} data={f} align="right" dotRef={i===0 ? r0Ref : r1Ref} />)}
            </div>
          </div>
        </div>

        {/* Phase 2: Sensors */}
        <div style={{ position: "absolute", inset: 0, padding: "100px 56px", pointerEvents: phase3Op > 0 ? "auto" : "none", opacity: phase3Op, willChange: "opacity" }} className="section-pad scroll-phase">
          <div className="scroll-phase-inner" style={{ opacity: phase3Op }}>
            <SectionTitle>Five modalities.<br /><strong>One 2.82mm chip.</strong></SectionTitle>
          </div>
          <div className="grid-3 scroll-grid scroll-grid-mobile" style={{ gap:48, marginTop:56, opacity: phase3Op }}>
            <div className="scroll-feat-col" style={{ display:"flex", flexDirection:"column", gap:36 }}>
              {SENSORS.slice(0,3).map((s, i) => <SensorItem key={i} data={s} align="left" color={SENSOR_COLORS[i]} dotRef={i===0 ? s0Ref : i===1 ? s1Ref : s2Ref} />)}
            </div>
            <div className="hide-tablet" />
            <div className="scroll-feat-col" style={{ display:"flex", flexDirection:"column", gap:36 }}>
              {SENSORS.slice(3,5).map((s, i) => <SensorItem key={i} data={s} align="right" color={SENSOR_COLORS[i+3]} dotRef={i===0 ? s3Ref : s4Ref} />)}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ── CONDITIONS ────────────────────────────────────────────────────
export function Conditions() {
  return (
    <section id="conditions" className="section-pad" style={{ background:tokens.offWhite, borderTop:`1px solid ${tokens.border}` }}>
      <div className="reveal">
        <SectionTitle>20+ cardiac conditions.<br /><strong>Four tiers of clinical readiness.</strong></SectionTitle>
      </div>
      <div className="grid-4 md-grid-2" style={{ gap:24, marginTop:56 }}>
        {CONDITION_TIERS.map((tier, i) => (
          <div key={i} className={`reveal d${i+1}`}>
            <div style={{ padding:"14px 18px", borderRadius:"12px 12px 0 0", background:tier.bg, border:`1px solid ${tier.bd}`, display:"flex", flexDirection:"column", gap:4 }}>
              <Mono style={{ fontSize:8.5, letterSpacing:"0.25em", color:tier.color, textTransform:"uppercase" }}>{tier.label}</Mono>
              <span style={{ fontSize:13, fontWeight:400, color:tokens.black }}>{tier.sub}</span>
            </div>
            <div style={{ border:`1px solid ${tokens.border}`, borderTop:"none", borderRadius:"0 0 12px 12px", overflow:"hidden" }}>
              {tier.items.map((item, j) => (
                <div key={j} style={{
                  padding:"10px 18px", fontSize:12.5, fontWeight:300, color:tokens.text,
                  borderBottom: j < tier.items.length-1 ? `1px solid ${tokens.border}` : "none",
                  transition:"background 0.2s",
                }}
                  onMouseEnter={e=>e.currentTarget.style.background=tokens.surface}
                  onMouseLeave={e=>e.currentTarget.style.background="transparent"}
                >{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── CELLULAR ──────────────────────────────────────────────────────
export function Cellular() {
  return (
    <section className="section-pad" style={{ background:tokens.black }}>
      <div className="reveal">
        <SectionTitle light>Phone dead at 3am?<br /><strong>SamaBeat still calls for help.</strong></SectionTitle>
      </div>
      <div className="grid-2" style={{ gap:14, marginTop:56 }}>
        {CELLULAR_SCENARIOS.map((s, i) => (
          <div key={i} className={`reveal d${(i%2)+1}`} style={{
            background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)",
            borderRadius:14, padding:28, display:"flex", flexDirection:"column", gap:10,
            transition:"background 0.2s",
          }}
            onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.08)"}
            onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.04)"}
          >
            <div style={{ fontSize:15, fontWeight:400, color:tokens.white }}>{s.title}</div>
            <p style={{ fontSize:12.5, fontWeight:300, color:"rgba(255,255,255,0.42)", lineHeight:1.65 }}>{s.body}</p>
          </div>
        ))}
        {/* Explore More card */}
        <div className="reveal d2" style={{
            background: "rgba(255,255,255,0.04)", border: `1px solid ${tokens.accent}`,
            borderRadius: 14, padding: 28, display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", transition: "background 0.2s",
            boxShadow: `0 0 20px rgba(26,107,255,0.1)`,
          }}
          onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(26,107,255,0.08)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.04)"}
        >
          <div style={{ fontSize: 18, fontWeight: 600, color: tokens.white, display: "flex", alignItems: "center", gap: 8 }}>
            Explore Features →
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SCIENCE ───────────────────────────────────────────────────────
export function Science() {
  return (
    <section className="section-pad" style={{ background:tokens.offWhite, borderTop:`1px solid ${tokens.border}` }}>
      <div className="reveal">
        <SectionTitle>The science<br /><strong>backs it up.</strong></SectionTitle>
      </div>
      <div className="grid-3" style={{ gap:24, marginTop:56 }}>
        {SCIENCE_STATS.map((s, i) => (
          <div key={i} className={`reveal d${i+1}`} style={{ background:tokens.white, border:`1px solid ${tokens.border}`, borderRadius:16, padding:36, display:"flex", flexDirection:"column", gap:12 }}>
            <div style={{ fontSize:52, fontWeight:200, letterSpacing:"-0.04em", lineHeight:1 }}>
              {s.num}<span style={{ color:tokens.accent }}>{s.unit}</span>
            </div>
            <div style={{ fontSize:14, fontWeight:400 }}>{s.label}</div>
            <Mono style={{ fontSize:9, letterSpacing:"0.15em", color:tokens.dim, lineHeight:1.5 }}>{s.src}</Mono>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── PRICING ───────────────────────────────────────────────────────
export function Pricing() {
  return (
    <section id="pricing" className="section-pad" style={{ background:tokens.white }}>
      <div className="reveal">
        <SectionTitle>$199 device.<br /><strong>Plans from $9.99/mo.</strong></SectionTitle>
      </div>
      <div className="grid-3" style={{ gap:20, marginTop:56 }}>
        {PRICING_PLANS.map((p, i) => (
          <div key={i} className={`reveal d${i+1}`} style={{
            border:`1px solid ${p.featured ? tokens.accent : tokens.border}`,
            borderRadius:20, padding:36,
            display:"flex", flexDirection:"column",
            position:"relative",
            boxShadow: p.featured ? `0 0 0 1px ${tokens.accent}, 0 12px 40px rgba(26,107,255,0.1)` : "none",
          }}>
            {p.featured && (
              <div style={{
                position:"absolute", top:-12, left:"50%", transform:"translateX(-50%)",
                background:tokens.accent, color:tokens.white,
                fontFamily:"'DM Mono',monospace", fontSize:8.5, letterSpacing:"0.2em",
                textTransform:"uppercase", padding:"5px 14px", borderRadius:100,
              }}>Most Popular</div>
            )}
            <Mono style={{ fontSize:9.5, letterSpacing:"0.3em", color:tokens.dim, textTransform:"uppercase", marginBottom:14 }}>{p.tier}</Mono>
            <div style={{ display:"flex", alignItems:"baseline", gap:4, marginBottom:6 }}>
              {p.price ? (
                <>
                  <span style={{ fontSize:22, fontWeight:300, color:tokens.mid }}>$</span>
                  <span style={{ fontSize:52, fontWeight:200, letterSpacing:"-0.04em", lineHeight:1 }}>{p.price}</span>
                  <Mono style={{ fontSize:10, color:tokens.dim, letterSpacing:"0.1em" }}>/month</Mono>
                </>
              ) : (
                <span style={{ fontSize:36, fontWeight:200, color:tokens.mid }}>Custom</span>
              )}
            </div>
            <p style={{ fontSize:12, fontWeight:300, color:tokens.dim, marginBottom:24, paddingBottom:24, borderBottom:`1px solid ${tokens.border}` }}>{p.tagline}</p>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10, marginBottom:32, flex:1 }}>
              {p.features.map((f, j) => (
                <li key={j} style={{ fontSize:12.5, fontWeight:300, color:tokens.mid, display:"flex", gap:10, alignItems:"flex-start", lineHeight:1.5 }}>
                  <span style={{ color:tokens.green, fontWeight:600, flexShrink:0 }}>✓</span>{f}
                </li>
              ))}
            </ul>
            <a href={p.href} style={{
              display:"block", textAlign:"center", padding:13, borderRadius:100,
              fontSize:12.5, fontWeight:500, letterSpacing:"0.02em", textDecoration:"none", transition:"opacity 0.2s",
              background: p.featured ? tokens.accent : tokens.surface,
              color: p.featured ? tokens.white : tokens.black,
              border:`1px solid ${p.featured ? "transparent" : tokens.border}`,
            }}
              onMouseEnter={e=>e.currentTarget.style.opacity="0.75"}
              onMouseLeave={e=>e.currentTarget.style.opacity="1"}
            >{p.cta}</a>
          </div>
        ))}
      </div>
      <p className="reveal" style={{ marginTop:28, textAlign:"center", fontSize:13, fontWeight:400, color:tokens.black }}>
        Emergency calling always works — even without an active subscription.
      </p>
    </section>
  );
}

// ── MARKET ────────────────────────────────────────────────────────
export function Market() {
  return (
    <section id="market" className="section-pad" style={{ background:tokens.black }}>
      <div className="reveal">
        <SectionTitle light>A $30.7B problem.<br /><strong>No wearable has solved it.</strong></SectionTitle>
      </div>
      <div className="grid-2" style={{ gap:80, marginTop:56, alignItems:"start" }}>
        <div className="reveal" style={{ zIndex: 1 }}>
          {[
            <>6.2 million Americans live with heart failure. <strong style={{color:"rgba(255,255,255,0.88)",fontWeight:400}}>23% are readmitted within 30 days.</strong> The total annual treatment burden is $30.7B — and climbing.</>,
            <>Apple Watch detects AFib. But it can&apos;t predict decompensation, can&apos;t contact emergency services independently, and isn&apos;t cleared for clinical remote patient monitoring. <strong style={{color:"rgba(255,255,255,0.88)",fontWeight:400}}>SamaBeat fills every gap.</strong></>,
            <>With FDA 510(k) pathway underway, CMS RPM reimbursement eligibility, and a direct-to-consumer model starting at $199, SamaBeat is both a <strong style={{color:"rgba(255,255,255,0.88)",fontWeight:400}}>consumer product and a clinical tool</strong> — two revenue streams from one device.</>,
          ].map((text, i) => (
            <p key={i} style={{ fontSize:14.5, fontWeight:300, lineHeight:1.85, color:"rgba(255,255,255,0.44)", marginBottom:20 }}>{text}</p>
          ))}
        </div>
        <div className="reveal" style={{ display:"flex", flexDirection:"column", gap:24 }}>
          {MARKET_NUMBERS.map((n, i) => (
            <div key={i} style={{ paddingLeft:22, borderLeft:"1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ fontSize:46, fontWeight:200, letterSpacing:"-0.04em", color:tokens.white, lineHeight:1 }}>
                {n.val}<span style={{ color:tokens.green }}>{n.em}</span>
              </div>
              <Mono style={{ fontSize:13, letterSpacing:"0.1em", color:tokens.white, textTransform:"uppercase", marginTop:5, display:"block" }}>{n.label}</Mono>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────
export function CTA() {
  const { openModal } = useWaitlist();

  return (
    <section id="cta" className="reveal" style={{ padding: "120px 24px", textAlign: "center", background: tokens.offWhite }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1, color: tokens.black, display: "flex", alignItems: "baseline" }}>
            SamaWritten
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: tokens.accent, marginLeft: 2, display: "inline-block" }} />
          </div>
        </div>
        <h2 style={{ fontSize:"clamp(36px,7vw,88px)", fontWeight:200, lineHeight:1, letterSpacing:"-0.04em", marginBottom:24 }}>
          The most powerful<br />cardiac wearable<br /><strong style={{ fontWeight: 700 }}>ever built.</strong>
        </h2>
        <p style={{ fontSize:15, fontWeight:300, color:tokens.mid, maxWidth:420, margin:"0 auto 52px", lineHeight:1.75 }}>
          Five sensors. Twenty conditions. Cellular built in.<br />
          For the millions of people whose hearts need{" "}
          <strong style={{ color:tokens.text, fontWeight:500 }}>a guardian that never sleeps.</strong>
        </p>
        <div style={{ display:"flex", gap:14, justifyContent:"center", alignItems:"center", marginBottom:20, flexWrap: "wrap" }}>
          <BtnDark onClick={openModal} style={{ fontSize:14, padding:"16px 36px" }}>Reserve SamaBeat · $199</BtnDark>
          <a href="mailto:hi@samaritan.com" style={{ fontSize:13, fontWeight:300, color:tokens.mid, textDecoration: "none", display:"flex", alignItems:"center", gap:6 }}>Talk to us →</a>
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="footer-container" style={{ padding:"48px 56px", borderTop:`1px solid ${tokens.border}`, background:tokens.offWhite, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:24 }}>
      <style>{`
        @media (max-width: 1024px) {
          .footer-container { padding: 48px 24px !important; justify-content: center !important; text-align: center !important; }
        }
      `}</style>
      <div>
        <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1, color: tokens.black, display: "flex", alignItems: "baseline" }}>
          SamaWritten
          <span style={{ width: 4, height: 4, borderRadius: "50%", background: tokens.accent, marginLeft: 2, display: "inline-block" }} />
        </div>
      </div>
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <a href="mailto:hi@samaritan.com" style={{ fontFamily:"'DM Mono',monospace", fontSize:11, letterSpacing:"0.05em", color:tokens.accent, textDecoration:"none", borderBottom: `1px solid ${tokens.accent}` }}>
          hi@samaritan.com
        </a>
      </div>
    </footer>
  );
}
