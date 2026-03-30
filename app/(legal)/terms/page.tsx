import { Metadata } from "next";
import { tokens } from "@/app/constants";

export const metadata: Metadata = {
  title: "Terms of Service — SamaWritten",
  description: "SamaWritten terms of service. Review the terms and conditions governing use of the SamaWritten wearable device, apps, and website.",
  openGraph: {
    title: "Terms of Service — SamaWritten",
    description: "Terms and conditions for using SamaWritten.",
    url: "https://samawritten.com/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <style>{`
        .terms-h1 {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 200;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: ${tokens.text};
          margin-bottom: 16px;
        }
        .terms-updated {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${tokens.dim};
          margin-bottom: 48px;
        }
        .terms-section {
          margin-bottom: 40px;
        }
        .terms-section h2 {
          font-size: 22px;
          font-weight: 600;
          letter-spacing: -0.03em;
          color: ${tokens.text};
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid ${tokens.border};
        }
        .terms-section p {
          font-size: 15px;
          line-height: 1.7;
          color: ${tokens.mid};
          margin-bottom: 12px;
        }
        .terms-section ul {
          padding-left: 20px;
          margin-bottom: 12px;
        }
        .terms-section li {
          font-size: 15px;
          line-height: 1.7;
          color: ${tokens.mid};
          margin-bottom: 6px;
        }
        .terms-contact {
          margin-top: 24px;
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: ${tokens.dim};
        }
        .terms-contact a {
          color: ${tokens.accent};
          text-decoration: none;
          border-bottom: 1px solid ${tokens.accent};
        }
      `}</style>

      <h1 className="terms-h1">Terms of Service</h1>
      <p className="terms-updated">Last updated: March 30, 2026</p>

      <div className="terms-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the SamaWritten website, mobile applications, or wearable device
          (collectively, the &ldquo;Service&rdquo;), you agree to be bound by these Terms of Service.
          If you do not agree to these terms, do not use the Service.
        </p>
      </div>

      <div className="terms-section">
        <h2>2. Description of Service</h2>
        <p>
          SamaWritten provides a cardiac monitoring wearable device and companion software that
          collects health data including heart rate, blood oxygen saturation (SpO2), and step count.
          The Service includes:
        </p>
        <ul>
          <li>The SamaWritten wearable device</li>
          <li>iOS and Android companion applications</li>
          <li>Web dashboard for data viewing</li>
          <li>Cloud backup and synchronization services</li>
          <li>Health alerts and notifications</li>
        </ul>
      </div>

      <div className="terms-section">
        <h2>3. Medical Disclaimer</h2>
        <p>
          <strong>SamaWritten is not a medical device intended to diagnose, treat, cure, or prevent any
          disease.</strong> The health data and alerts provided by SamaWritten are for informational
          purposes only and should not be used as a substitute for professional medical advice,
          diagnosis, or treatment. Always seek the advice of your physician or other qualified
          health provider with any questions regarding a medical condition.
        </p>
        <p>
          Do not disregard professional medical advice or delay seeking it because of information
          provided by SamaWritten. In case of a medical emergency, call your local emergency
          services immediately.
        </p>
      </div>

      <div className="terms-section">
        <h2>4. Account Registration</h2>
        <p>
          To use certain features of the Service, you may need to create an account. You are
          responsible for maintaining the confidentiality of your account credentials and for all
          activities that occur under your account. You agree to provide accurate and complete
          information when creating your account.
        </p>
      </div>

      <div className="terms-section">
        <h2>5. Waitlist & Pre-Orders</h2>
        <p>
          Joining the SamaWritten waitlist does not constitute a purchase or binding commitment.
          Pre-order pricing and availability are subject to change. We will notify waitlist
          members of any material changes to pricing or expected availability.
        </p>
      </div>

      <div className="terms-section">
        <h2>6. Subscription Services</h2>
        <p>
          Certain features of SamaWritten require a paid subscription. Subscription terms,
          pricing, and billing cycles are presented at the time of purchase. You may cancel
          your subscription at any time; cancellation takes effect at the end of the current
          billing period.
        </p>
      </div>

      <div className="terms-section">
        <h2>7. User Responsibilities</h2>
        <p>You agree to:</p>
        <ul>
          <li>Use the Service only for its intended purpose of personal health monitoring</li>
          <li>Not attempt to reverse-engineer, decompile, or tamper with the device or software</li>
          <li>Not use the Service for any unlawful purpose</li>
          <li>Keep your wearable device firmware up to date</li>
          <li>Not share your account credentials with others</li>
        </ul>
      </div>

      <div className="terms-section">
        <h2>8. Data & Privacy</h2>
        <p>
          Your use of the Service is also governed by our{" "}
          <a href="/privacy" style={{ color: tokens.accent, textDecoration: "none", borderBottom: `1px solid ${tokens.accent}` }}>
            Privacy Policy
          </a>
          , which describes how we collect, use, and protect your personal and health data.
        </p>
      </div>

      <div className="terms-section">
        <h2>9. Intellectual Property</h2>
        <p>
          The SamaWritten name, logo, device design, software, and all related intellectual
          property are owned by SamaWritten. You are granted a limited, non-exclusive,
          non-transferable license to use the Service for personal, non-commercial purposes.
        </p>
      </div>

      <div className="terms-section">
        <h2>10. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, SamaWritten shall not be liable
          for any indirect, incidental, special, consequential, or punitive damages, or any loss
          of profits or revenues, whether incurred directly or indirectly, or any loss of data,
          use, goodwill, or other intangible losses resulting from your use of the Service.
        </p>
        <p>
          SamaWritten does not guarantee uninterrupted or error-free operation of the device
          or software. Health alerts are not guaranteed to detect all conditions or to function
          in all circumstances.
        </p>
      </div>

      <div className="terms-section">
        <h2>11. Modifications to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. We will notify you of material
          changes by updating the &ldquo;Last Updated&rdquo; date and, where appropriate, providing
          notice through the Service. Continued use after changes constitutes acceptance.
        </p>
      </div>

      <div className="terms-section">
        <h2>12. Governing Law</h2>
        <p>
          These terms shall be governed by and construed in accordance with applicable law,
          without regard to conflict of law principles.
        </p>
      </div>

      <div className="terms-section">
        <h2>13. Contact</h2>
        <p>For questions about these terms:</p>
        <p className="terms-contact">
          <a href="mailto:hi@samawritten.com">hi@samawritten.com</a>
        </p>
      </div>
    </>
  );
}
