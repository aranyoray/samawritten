import { Metadata } from "next";
import { tokens } from "@/app/constants";
import { PlatformTabs } from "./PlatformTabs";

export const metadata: Metadata = {
  title: "Privacy Policy — SamaWritten",
  description: "SamaWritten privacy policy. Learn how we collect, use, and protect your health data across our web, iOS, and Android platforms.",
  openGraph: {
    title: "Privacy Policy — SamaWritten",
    description: "How SamaWritten protects your health data.",
    url: "https://samawritten.com/privacy",
  },
};

const trustCards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={tokens.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18.36 6.64a9 9 0 1 1-12.73 0" /><line x1="12" y1="2" x2="12" y2="12" />
      </svg>
    ),
    title: "No Tracking",
    desc: "We don't track you across apps or websites. No advertising identifiers.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={tokens.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="3" x2="9" y2="21" /><line x1="15" y1="3" x2="15" y2="21" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" />
      </svg>
    ),
    title: "No Ads",
    desc: "We don't sell your data. No advertising, no marketing partnerships.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={tokens.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Your Data, Your Control",
    desc: "Access, export, or delete your data at any time. It's yours.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <style>{`
        .privacy-h1 {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 200;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: ${tokens.text};
          margin-bottom: 16px;
        }
        .privacy-updated {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${tokens.dim};
          margin-bottom: 48px;
        }
        .trust-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 56px;
        }
        .trust-card {
          padding: 24px;
          border-radius: 16px;
          background: ${tokens.surface};
          border: 1px solid ${tokens.border};
        }
        .trust-card-title {
          font-size: 15px;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: ${tokens.text};
          margin: 14px 0 6px;
        }
        .trust-card-desc {
          font-size: 13px;
          line-height: 1.5;
          color: ${tokens.mid};
        }

        .policy-section {
          margin-bottom: 40px;
        }
        .policy-section h2 {
          font-size: 22px;
          font-weight: 600;
          letter-spacing: -0.03em;
          color: ${tokens.text};
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid ${tokens.border};
        }
        .policy-section h3 {
          font-size: 16px;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: ${tokens.text};
          margin: 20px 0 10px;
        }
        .policy-section p {
          font-size: 15px;
          line-height: 1.7;
          color: ${tokens.mid};
          margin-bottom: 12px;
        }
        .policy-section ul {
          padding-left: 20px;
          margin-bottom: 12px;
        }
        .policy-section li {
          font-size: 15px;
          line-height: 1.7;
          color: ${tokens.mid};
          margin-bottom: 6px;
        }

        .data-ctas {
          display: flex;
          gap: 12px;
          margin-top: 56px;
          padding-top: 40px;
          border-top: 1px solid ${tokens.border};
        }
        .data-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 24px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          transition: opacity 0.2s;
          cursor: pointer;
        }
        .data-cta:hover { opacity: 0.72; }
        .data-cta-primary {
          background: ${tokens.black};
          color: ${tokens.white};
          border: none;
        }
        .data-cta-secondary {
          background: ${tokens.white};
          color: ${tokens.text};
          border: 1px solid ${tokens.border};
        }

        .policy-contact {
          margin-top: 24px;
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: ${tokens.dim};
        }
        .policy-contact a {
          color: ${tokens.accent};
          text-decoration: none;
          border-bottom: 1px solid ${tokens.accent};
        }

        @media (max-width: 768px) {
          .trust-cards { grid-template-columns: 1fr; }
          .data-ctas { flex-direction: column; }
        }
      `}</style>

      <h1 className="privacy-h1">Privacy Policy</h1>
      <p className="privacy-updated">Last updated: April 23, 2026</p>

      {/* Trust Signal Cards */}
      <div className="trust-cards">
        {trustCards.map((card) => (
          <div key={card.title} className="trust-card">
            {card.icon}
            <div className="trust-card-title">{card.title}</div>
            <div className="trust-card-desc">{card.desc}</div>
          </div>
        ))}
      </div>

      {/* Platform Tabs + Policy Content */}
      <PlatformTabs />

      {/* Common Sections */}
      <div className="policy-section">
        <h2>Data Storage & Security</h2>
        <h3>On the Web</h3>
        <p>
          Waitlist information (name, email, consent status) is stored in a Notion database
          secured by API authentication. Data is transmitted over HTTPS/TLS.
        </p>
        <h3>In the Apps</h3>
        <p>
          Health data is stored locally on your device using encrypted storage (CoreData on iOS,
          Room database on Android) with a 90-day automatic retention policy — older snapshots are
          pruned automatically. Optionally, daily health snapshots are synced to Firebase Firestore
          every 15 minutes, secured with user-scoped access controls, encryption in transit (TLS),
          and encryption at rest (AES-256). Data is associated with your authenticated account and
          is not accessible to other users.
        </p>
        <p>
          Authentication credentials are stored using the platform keychain (iOS Keychain / Android Keystore
          with AES-256-GCM encryption). On iOS, users start with an anonymous account and may
          optionally sign in with Apple or Google.
        </p>
        <h3>Crash Reporting & Feature Configuration</h3>
        <p>
          We use Firebase Crashlytics to collect error-level crash reports for app stability.
          Health values are never included in crash reports — only error types, stack traces,
          and framework-level messages are sent. We use Firebase Remote Config to manage feature
          flags (e.g., enabling or disabling specific app features). Remote Config does not
          collect personal data.
        </p>
      </div>

      <div className="policy-section">
        <h2>Data Sharing</h2>
        <p>
          We do not sell, rent, or share your health data with third parties for advertising
          or marketing purposes. Your data is shared only with:
        </p>
        <ul>
          <li><strong>Apple Health / Health Connect</strong> — when you grant permission, Sama reads your heart rate, SpO2, step count, sleep, and active energy data from the platform health store</li>
          <li><strong>Firebase</strong> — for optional cloud backup (Firestore), crash reporting (Crashlytics), and feature configuration (Remote Config), all secured with user-scoped access controls</li>
          <li><strong>People you choose</strong> — the app supports sharing your health data with family members, doctors, or caregivers you explicitly authorize, with time-limited, revocable access</li>
        </ul>
        <p>No data is shared with analytics or advertising networks.</p>
      </div>

      <div className="policy-section">
        <h2>Tracking</h2>
        <p>
          SamaWritten does not track you across other apps or websites. We do not use advertising
          identifiers. On iOS, <code style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, background: tokens.surface, padding: "2px 6px", borderRadius: 4 }}>
          NSPrivacyTracking</code> is set to <code style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, background: tokens.surface, padding: "2px 6px", borderRadius: 4 }}>
          false</code>. The website does not use cookies, analytics, or tracking scripts.
        </p>
      </div>

      <div className="policy-section">
        <h2>Data Retention</h2>
        <ul>
          <li><strong>Local device data</strong> — automatically pruned after 90 days</li>
          <li><strong>Cloud backup</strong> — retained as long as you maintain an active account</li>
          <li><strong>Waitlist data</strong> — retained until the waitlist program concludes or you request removal</li>
        </ul>
        <p>You may request deletion of your account and all associated data at any time.</p>
      </div>

      <div className="policy-section">
        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li><strong>Access</strong> your health data at any time through the app or web dashboard</li>
          <li><strong>Export</strong> your data as a 30-day health summary PDF, shared via your device&apos;s share sheet</li>
          <li><strong>Delete</strong> your account and all associated data (local storage, Firestore snapshots, and Firebase Auth account are all removed)</li>
          <li><strong>Revoke</strong> HealthKit, Health Connect, or cloud sync permissions at any time</li>
          <li><strong>Withdraw consent</strong> for data collection at any time through the app settings or by contacting us</li>
        </ul>
      </div>

      <div className="policy-section">
        <h2>Children&apos;s Privacy</h2>
        <p>
          SamaWritten is not directed at children under 13. We do not knowingly collect personal
          information from children under 13. If you believe we have inadvertently collected such
          information, please contact us immediately.
        </p>
      </div>

      <div className="policy-section">
        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will notify you of any material
          changes by posting the new policy on this page and updating the &ldquo;Last Updated&rdquo; date.
          Continued use of SamaWritten after changes constitutes acceptance of the updated policy.
        </p>
      </div>

      <div className="policy-section">
        <h2>Contact</h2>
        <p>
          For privacy questions, data access requests, or deletion requests:
        </p>
        <p className="policy-contact">
          <a href="mailto:privacy@samawritten.com">privacy@samawritten.com</a>
        </p>
      </div>

      {/* Data Request CTAs */}
      <div className="data-ctas">
        <a
          href="mailto:privacy@samawritten.com?subject=Data%20Access%20Request"
          className="data-cta data-cta-primary"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Request My Data
        </a>
        <a
          href="mailto:privacy@samawritten.com?subject=Data%20Deletion%20Request"
          className="data-cta data-cta-secondary"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
          Delete My Data
        </a>
      </div>
    </>
  );
}
