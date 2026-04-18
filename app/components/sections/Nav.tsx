"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { tokens } from "@/app/constants";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    ["#how", "How it works"],
    ["#features", "Features"],
    ["#conditions", "Conditions"],
    ["#cta", "Join Waitlist"],
  ];

  return (
    <>
      <style>{`
        .top-banner {
          position: fixed; top: 0; left: 0; right: 0; z-index: 210;
          height: 36px;
          display: flex; align-items: center; justify-content: center;
          background: ${tokens.accent};
          font-size: 14px; font-weight: 500; letter-spacing: 0.01em;
          color: ${tokens.white};
          padding: 0 16px;
          text-align: center;
          gap: 4px;
        }
        .top-banner-text { white-space: nowrap; }
        .top-banner a {
          color: ${tokens.white};
          text-decoration: underline;
          text-underline-offset: 2px;
          font-weight: 600;
          white-space: nowrap;
        }
        .top-banner a:hover { opacity: 0.85; }
        @media (max-width: 480px) {
          .top-banner { font-size: 12px; height: 32px; }
          .top-banner-text { white-space: normal; }
          .nav-container { top: 32px !important; }
        }
        .nav-container {
          padding: 0 56px;
        }
        .nav-links {
          display: flex;
        }
        .mobile-toggle {
          display: none;
        }
        @media (max-width: 768px) {
          .nav-container {
            padding: 0 24px;
          }
          .nav-links {
            display: none;
          }
          .mobile-toggle {
            display: flex;
          }
        }
      `}</style>

      <div className="top-banner">
        <span className="top-banner-text">
          Express interest for Indiana trial –
        </span>
        <Link href="/clinical-trials">apply now</Link>
      </div>

      <nav
        className="nav-container"
        style={{
          position: "fixed",
          top: 36,
          left: 0,
          right: 0,
          zIndex: 200,
          height: 60,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: scrolled
            ? "rgba(255,255,255,0.92)"
            : "rgba(255,255,255,0.7)",
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${scrolled ? tokens.border : "transparent"}`,
          transition: "background 0.4s, border-color 0.4s",
        }}
      >
        <Link
          href="/"
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}
        >
          <img
            src="/SamaWritten-Logo.png"
            alt="SamaWritten Logo"
            style={{ height: 22, width: "auto" }}
          />
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "-0.05em",
              lineHeight: 1,
              color: tokens.black,
              display: "flex",
              alignItems: "baseline",
            }}
          >
            SamaWritten
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: tokens.accent,
                marginLeft: 2,
                display: "inline-block",
              }}
            />
          </div>
        </Link>

        <div className="nav-links" style={{ gap: 28, alignItems: "center" }}>
          {navLinks.map(([href, label]) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: tokens.black,
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = tokens.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = tokens.black)}
            >
              {label}
            </a>
          ))}
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            flexDirection: "column",
            gap: 5,
            width: 24,
            alignItems: "flex-end",
          }}
        >
          <span
            style={{
              width: 24,
              height: 1.5,
              background: tokens.black,
              borderRadius: 10,
            }}
          />
          <span
            style={{
              width: 16,
              height: 1.5,
              background: tokens.black,
              borderRadius: 10,
            }}
          />
        </button>
      </nav>

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 190,
          background: tokens.white,
          transform: mobileMenuOpen ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          display: "flex",
          flexDirection: "column",
          padding: "100px 24px 40px",
          gap: 32,
        }}
      >
        {navLinks.map(([href, label]) => (
          <a
            key={label}
            href={href}
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: 32,
              fontWeight: 200,
              color: tokens.black,
              textDecoration: "none",
              letterSpacing: "-0.02em",
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
