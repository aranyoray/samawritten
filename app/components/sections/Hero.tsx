import Link from "next/link";
import { Mono, BtnDark } from "../ui";
import { tokens } from "@/app/constants";
import { useWaitlist } from "../../context/WaitlistContext";

export function Hero() {
  const { openModal } = useWaitlist();

  return (
    <section
      className="hero-section"
      style={{
        minHeight: "100vh",
        paddingTop: 116,
        display: "grid",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        .hero-section {
          grid-template-columns: 1.1fr 0.9fr;
          padding: 0 56px;
        }

        .hero-child { grid-column: 1; z-index: 2; }
        .hero-watch-container {
          grid-column: 2;
          grid-row: 1 / 10;
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

        .hero-trial-pill {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          max-width: 560px;
          margin-top: 28px;
          margin-bottom: 18px;
          padding: 12px 18px;
          border-radius: 999px;
          border: 1px solid rgba(26, 107, 255, 0.08);
          background: linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(247,247,245,0.96) 100%);
          box-shadow: 0 18px 44px rgba(15,15,15,0.06);
          overflow: hidden;
          text-decoration: none;
          isolation: isolate;
        }
        .hero-trial-pill::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(26,107,255,0.08), transparent 28%, rgba(26,107,255,0.05));
          z-index: 0;
          pointer-events: none;
        }
        .hero-trial-copy {
          position: relative;
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
          z-index: 2;
        }
        .hero-trial-kicker {
          flex-shrink: 0;
          padding: 5px 10px;
          border-radius: 999px;
          background: rgba(26,107,255,0.1);
          color: ${tokens.accent};
          font-family: 'DM Mono',monospace;
          font-size: 9px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }
        .hero-trial-text {
          color: ${tokens.black};
          font-size: 13px;
          line-height: 1.35;
          letter-spacing: -0.01em;
        }
        .hero-trial-text strong {
          font-weight: 600;
        }

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
          .hero-btns { order: 6; justify-content: center; }
          .vitals-strip { order: 7; justify-content: center; }

          .hero-watch-img {
            width: 100%;
            max-width: 420px;
          }
          .hero-trial-pill {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
            width: min(100%, 520px);
            border-radius: 28px;
            margin-top: 0;
          }
          .hero-trial-copy {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>

      <Link href="/clinical-trials" className="hero-child hero-pill hero-trial-pill">
        <span className="hero-trial-copy">
          <span className="hero-trial-kicker">Clinical Trial</span>
          <span className="hero-trial-text">
            Now running with <strong>Indiana University School of Medicine</strong>
          </span>
        </span>
      </Link>

      <h1
        className="hero-child hero-h1"
        style={{
          fontSize: "clamp(32px, 8vw, 70px)",
          fontWeight: 200,
          lineHeight: 1.06,
          letterSpacing: "-0.04em",
          marginBottom: 24,
          marginTop: 36,
        }}
      >
        A wristband that
        <br />
        watches your heart
        <br />
        and <strong style={{ fontWeight: 700 }}>calls for help</strong>
      </h1>

      <div className="hero-watch-container">
        <img
          src="/watch.png"
          alt="SamaWritten advanced cardiac wearable for AI-powered heart monitoring and emergency response"
          className="hero-watch-img"
        />
      </div>

      <p
        className="hero-child hero-p"
        style={{
          fontSize: 15,
          fontWeight: 300,
          lineHeight: 1.75,
          color: tokens.mid,
          maxWidth: 440,
          marginBottom: 20,
        }}
      >
        SamaWritten monitors 20+ cardiac conditions with five on-wrist sensors
        and on-device AI. When something goes wrong, it alerts caregivers and
        emergency contacts, then calls for help - no phone needed.
      </p>

      <div
        className="hero-child hero-tags"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 44,
        }}
      >
        {[
          "Clinical-grade sensors",
          "LTE-M cellular",
          "AI cardiac predictions",
        ].map((tag) => (
          <Mono
            key={tag}
            style={{
              fontSize: 9.5,
              letterSpacing: "0.15em",
              color: tokens.dim,
              background: tokens.surface,
              border: `1px solid ${tokens.border}`,
              borderRadius: 100,
              padding: "5px 12px",
              textTransform: "uppercase",
            }}
          >
            {tag}
          </Mono>
        ))}
      </div>

      <div
        className="hero-child hero-btns"
        style={{
          display: "flex",
          gap: 14,
          alignItems: "center",
          marginBottom: 64,
          flexWrap: "wrap",
        }}
      >
        <BtnDark onClick={openModal}>Reserve SamaWritten</BtnDark>
      </div>
    </section>
  );
}
