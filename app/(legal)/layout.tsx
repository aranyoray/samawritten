import { tokens } from "@/app/constants";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@200;300;400;600;700&family=DM+Mono:wght@300;400&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family:'Sora',sans-serif; background:#fff; color:#0F0F0F; }

        .legal-page {
          max-width: 780px;
          margin: 0 auto;
          padding: 120px 56px 120px;
        }
        .legal-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${tokens.dim};
          text-decoration: none;
          margin-bottom: 48px;
          transition: color 0.2s;
        }
        .legal-back:hover { color: ${tokens.accent}; }
        .legal-back svg { transition: transform 0.2s; }
        .legal-back:hover svg { transform: translateX(-2px); }

        @media (max-width: 768px) {
          .legal-page { padding: 100px 24px 60px; }
        }
      `}</style>

      <div className="legal-page">
        <a href="/" className="legal-back">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Home
        </a>

        {children}
      </div>
    </>
  );
}
