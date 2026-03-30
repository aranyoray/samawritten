"use client";

import { useState, useEffect } from "react";
import { tokens } from "@/app/constants";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("cookie-banner-dismissed");
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    localStorage.setItem("cookie-banner-dismissed", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <style>{`
        .cookie-banner {
          position: fixed;
          bottom: 24px;
          left: 24px;
          right: 24px;
          max-width: 480px;
          z-index: 900;
          background: ${tokens.white};
          border: 1px solid ${tokens.border};
          border-radius: 16px;
          padding: 20px 24px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          display: flex;
          align-items: flex-start;
          gap: 16px;
          animation: cookieSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes cookieSlide {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cookie-text {
          flex: 1;
          font-size: 13px;
          line-height: 1.5;
          color: ${tokens.mid};
        }
        .cookie-text a {
          color: ${tokens.accent};
          text-decoration: none;
        }
        .cookie-btn {
          flex-shrink: 0;
          padding: 8px 18px;
          border-radius: 100px;
          border: none;
          background: ${tokens.black};
          color: ${tokens.white};
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: opacity 0.2s;
          white-space: nowrap;
        }
        .cookie-btn:hover { opacity: 0.72; }
        @media (max-width: 520px) {
          .cookie-banner {
            left: 12px;
            right: 12px;
            bottom: 12px;
            flex-direction: column;
            gap: 12px;
          }
          .cookie-btn { width: 100%; text-align: center; }
        }
      `}</style>

      <div className="cookie-banner">
        <div className="cookie-text">
          SamaWritten does not use cookies or tracking. Your privacy is protected.
          Read our <a href="/privacy">Privacy Policy</a>.
        </div>
        <button className="cookie-btn" onClick={dismiss}>
          Got it
        </button>
      </div>
    </>
  );
}
