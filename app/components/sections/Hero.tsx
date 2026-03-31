import { Mono, BtnDark } from "../ui";
import { tokens } from "@/app/constants";
import { useWaitlist } from "../../context/WaitlistContext";

export function Hero() {
  const { openModal } = useWaitlist();
  
  return (
    <section className="hero-section" style={{
      minHeight: "100vh", paddingTop: 80,
      display: "grid",
      alignItems: "center", position: "relative", overflow: "hidden",
    }}>
      <style>{`
        .hero-section {
          grid-template-columns: 1.1fr 0.9fr;
          padding: 0 56px;
        }
        
        /* DESKTOP LAYOUT (Default) */
        .hero-child { grid-column: 1; z-index: 2; }
        .hero-watch-container {
          grid-column: 2;
          grid-row: 1 / 10; /* Span multiple rows to stay on the right */
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          animation: fadeUp 1s 0.5s both;
        }

        .hero-watch-img {
          width: 720px;
          height: auto;
          object-fit: contain;
          animation: heroFloat 5.5s ease-in-out infinite alternate;
        }
        
        @keyframes heroFloat {
          0% 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-3deg); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-pill { animation: fadeUp 0.8s 0.2s both; }
        .hero-h1 { animation: fadeUp 0.9s 0.35s both; }
        .hero-p { animation: fadeUp 0.9s 0.5s both; }
        .hero-tags { animation: fadeUp 0.9s 0.6s both; }
        .hero-btns { animation: fadeUp 0.9s 0.75s both; }
        .vitals-strip { animation: fadeUp 1s 1.1s both; }

        @media (max-width: 1024px) {
          .hero-section {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 100px 24px 60px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-child, .hero-watch-container {
            grid-column: auto;
            grid-row: auto;
          }
          .hero-watch-container {
            order: 3;
            margin: 0 0 10px;
          }
          .hero-pill { order: 1; }
          .hero-h1 { order: 2; }
          .hero-p { order: 4; }
          .hero-tags { order: 5; margin-bottom: 30px; justify-content: center; }
          .hero-btns { order: 6; justify-content: center; margin-bottom: 32px !important; }
          .vitals-strip { order: 7; justify-content: center; }
          
          .hero-watch-img {
            width: 100%;
            max-width: 420px;
          }
        }
      `}</style>


      <h1 className="hero-child hero-h1" style={{
        fontSize: "clamp(32px, 8vw, 70px)",
        fontWeight: 200, lineHeight: 1.06, letterSpacing: "-0.04em",
        marginBottom: 24, marginTop: 36,
      }}>
        A wristband that<br />
        watches your heart<br />
        and <strong style={{ fontWeight: 700 }}>alerts nearby samaritans</strong>
      </h1>

      <div className="hero-watch-container">
        <img src="/watch.png" alt="SamaWritten Advanced Cardiac Wearable - AI-powered heart monitoring and emergency alerts" className="hero-watch-img" />
      </div>

      <p className="hero-child hero-p" style={{
        fontSize: 15, fontWeight: 300, lineHeight: 1.75, color: tokens.mid,
        maxWidth: 400, marginBottom: 20,
      }}>
        SamaBeat monitors 20+ cardiac conditions with five on-wrist sensors
        and on-device AI. When something goes wrong, it alerts nearby samaritans 
        and calls for help — no phone needed.
      </p>

      <div className="hero-child hero-tags" style={{
        display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 44,
      }}>
        {["$199 device", "Plans from $9.99/mo", "LTE-M cellular"].map(tag => (
          <Mono key={tag} style={{
            fontSize: 9.5, letterSpacing: "0.15em", color: tokens.dim,
            background: tokens.surface, border: `1px solid ${tokens.border}`,
            borderRadius: 100, padding: "5px 12px", textTransform: "uppercase",
          }}>{tag}</Mono>
        ))}
      </div>

      <div className="hero-child hero-btns" style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 64, flexWrap: "wrap" }}>
        <BtnDark onClick={openModal}>Reserve SamaBeat</BtnDark>
      </div>
    </section>
  );
}
