import { Mono, BtnDark } from "../ui";
import { tokens, VITALS_DATA } from "@/app/constants";

export function Hero() {
  return (
    <section style={{
      minHeight: "100vh", paddingTop: 60,
      display: "grid", gridTemplateColumns: "1fr 1fr",
      alignItems: "center", position: "relative", overflow: "hidden",
    }}>
      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-3deg); }
        }
      `}</style>

      {/* Left copy */}
      <div style={{ padding: "80px 56px", zIndex: 2 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: tokens.surface, border: `1px solid ${tokens.border}`,
          borderRadius: 100, padding: "6px 14px", marginBottom: 28,
          animation: "fadeUp 0.8s 0.2s both",
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: "50%", background: tokens.green,
            boxShadow: `0 0 8px ${tokens.green}`, display: "inline-block",
            animation: "blink 2s infinite",
          }} />
          <Mono style={{ fontSize: 9.5, letterSpacing: "0.2em", color: tokens.mid, textTransform: "uppercase" }}>
            Seed Round Open · Cardiac Wearables
          </Mono>
        </div>

        <h1 style={{
          fontSize: "clamp(40px,5.2vw,70px)",
          fontWeight: 200, lineHeight: 1.06, letterSpacing: "-0.04em",
          marginBottom: 24, animation: "fadeUp 0.9s 0.35s both",
        }}>
          A wristband that<br />
          watches your heart<br />
          and <strong style={{ fontWeight: 700 }}>calls for help.</strong>
        </h1>

        <p style={{
          fontSize: 15, fontWeight: 300, lineHeight: 1.75, color: tokens.mid,
          maxWidth: 400, marginBottom: 20,
          animation: "fadeUp 0.9s 0.5s both",
        }}>
          SamaBeat monitors 20+ cardiac conditions with five on-wrist sensors
          and on-device AI. When something goes wrong, it alerts your loved ones
          and calls for help — no phone needed.
        </p>

        <div style={{
          display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 44,
          animation: "fadeUp 0.9s 0.6s both",
        }}>
          {["$199 device", "Plans from $9.99/mo", "LTE-M cellular", "FDA 510(k) pathway"].map(tag => (
            <Mono key={tag} style={{
              fontSize: 9.5, letterSpacing: "0.15em", color: tokens.dim,
              background: tokens.surface, border: `1px solid ${tokens.border}`,
              borderRadius: 100, padding: "5px 12px", textTransform: "uppercase",
            }}>{tag}</Mono>
          ))}
        </div>

        <div style={{ display: "flex", gap: 14, alignItems: "center", animation: "fadeUp 0.9s 0.75s both", marginBottom: 64 }}>
          <BtnDark href="#cta">Reserve SamaBeat</BtnDark>
          <a href="#how" style={{ fontSize:13, fontWeight:300, color:tokens.mid, textDecoration:"none", display:"flex", alignItems:"center", gap:6, transition:"color 0.2s" }}
            onMouseEnter={e=>e.currentTarget.style.color=tokens.black}
            onMouseLeave={e=>e.currentTarget.style.color=tokens.mid}
          >How it works →</a>
        </div>

        {/* Vitals strip */}
        <div style={{
          display: "flex", gap: 12, flexWrap: "wrap",
          animation: "fadeUp 1s 1.1s both",
        }}>
          {VITALS_DATA.map(v => (
            <div key={v.label} style={{
              background: tokens.white, border: `1px solid ${tokens.border}`,
              borderRadius: 12, padding: "10px 16px",
              display: "flex", flexDirection: "column", gap: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
            }}>
              <span style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.03em", color: v.color, lineHeight: 1 }}>{v.val}</span>
              <Mono style={{ fontSize: 8.5, letterSpacing: "0.2em", color: tokens.dim, textTransform: "uppercase" }}>{v.label}</Mono>
            </div>
          ))}
        </div>
      </div>

      {/* Right — watch mockup png */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        height: "100%", paddingTop: 60,
        animation: "fadeUp 1s 0.5s both",
      }}>
        <img src="/watch.png" alt="SamaBeat Watch" style={{ width: 720, height: "auto", objectFit: "contain", animation: "heroFloat 5.5s ease-in-out infinite alternate" }} />
      </div>
    </section>
  );
}
