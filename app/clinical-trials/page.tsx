"use client";

import { GLOBAL_CSS, tokens } from "../constants";
import { Nav, Footer } from "../components/sections";
import { Mono, BtnDark } from "../components/ui";
import { useWaitlist } from "../context/WaitlistContext";

const ELIGIBILITY = [
  "Age 50 or above",
  "Based in a supported study market",
  "No active pacemaker or implanted defibrillator",
  "Willing to wear SamaBeat daily for 90 days",
  "Able to complete remote onboarding and scheduled follow-ups",
];

const TIMELINE = [
  {
    phase: "Screening",
    duration: "Week 1-2",
    detail: "Health questionnaire, eligibility review, baseline assessment, informed consent",
  },
  {
    phase: "Onboarding",
    duration: "Week 3",
    detail: "Remote orientation, device setup, caregiver briefing, and wear guidance",
  },
  {
    phase: "Active Monitoring",
    duration: "Week 4-14",
    detail: "Continuous cardiac monitoring with SamaBeat and scheduled study check-ins",
  },
  {
    phase: "Follow-up",
    duration: "Week 15-16",
    detail: "Final assessment, data review, and program closeout",
  },
];

export default function ClinicalTrials() {
  const { openModal } = useWaitlist();

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <Nav />

      <section
        style={{
          minHeight: "60vh",
          paddingTop: 140,
          paddingBottom: 80,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "140px 24px 80px",
          background: `linear-gradient(135deg, ${tokens.black} 0%, #0a1628 100%)`,
        }}
      >
        <Mono
          style={{
            fontSize: 11,
            letterSpacing: "0.2em",
            color: tokens.green,
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Global Validation Program - Rolling Applications
        </Mono>
        <h1
          style={{
            fontSize: "clamp(30px, 6vw, 56px)",
            fontWeight: 200,
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            color: tokens.white,
            maxWidth: 720,
            marginBottom: 24,
          }}
        >
          Help us prove that{" "}
          <strong style={{ fontWeight: 700 }}>early detection scales globally</strong>
        </h1>
        <p
          style={{
            fontSize: 16,
            fontWeight: 300,
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 620,
            marginBottom: 40,
          }}
        >
          We&apos;re enrolling a 500-participant cohort aged 50+ across supported
          markets for a 90-day study validating SamaBeat&apos;s real-time cardiac
          monitoring against clinical-grade diagnostics.
        </p>
        <BtnDark onClick={openModal} style={{ background: tokens.accent }}>
          Apply to the Program
        </BtnDark>
      </section>

      <section
        style={{
          background: tokens.offWhite,
          padding: "80px 24px",
          borderBottom: `1px solid ${tokens.border}`,
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Mono
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              color: tokens.accent,
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Who Can Participate
          </Mono>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 38px)",
              fontWeight: 200,
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              marginBottom: 40,
            }}
          >
            Eligibility criteria
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {ELIGIBILITY.map((item, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "flex-start", gap: 14 }}
              >
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: tokens.green,
                    color: tokens.white,
                    fontSize: 13,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </span>
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: tokens.text,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: tokens.white,
          padding: "80px 24px",
          borderBottom: `1px solid ${tokens.border}`,
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Mono
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              color: tokens.accent,
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            What to Expect
          </Mono>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 38px)",
              fontWeight: 200,
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              marginBottom: 40,
            }}
          >
            Program timeline
          </h2>
          <div style={{ display: "grid", gap: 0 }}>
            {TIMELINE.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: 24,
                  padding: "24px 0",
                  borderBottom:
                    i < TIMELINE.length - 1
                      ? `1px solid ${tokens.border}`
                      : "none",
                }}
              >
                <div>
                  <Mono
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.15em",
                      color: tokens.dim,
                      textTransform: "uppercase",
                    }}
                  >
                    {step.duration}
                  </Mono>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      marginBottom: 4,
                      color: tokens.text,
                    }}
                  >
                    {step.phase}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 300,
                      lineHeight: 1.6,
                      color: tokens.mid,
                    }}
                  >
                    {step.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: tokens.black,
          padding: "80px 24px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(24px, 4vw, 38px)",
            fontWeight: 200,
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
            color: tokens.white,
            marginBottom: 16,
          }}
        >
          Ready to participate?
        </h2>
        <p
          style={{
            fontSize: 14,
            fontWeight: 300,
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.5)",
            maxWidth: 480,
            marginBottom: 32,
          }}
        >
          Join our 500-participant cohort helping shape the future of cardiac
          care. Device access and study check-ins are fully covered for selected
          participants.
        </p>
        <BtnDark onClick={openModal} style={{ background: tokens.accent }}>
          Apply Now
        </BtnDark>
      </section>

      <Footer />
    </>
  );
}
