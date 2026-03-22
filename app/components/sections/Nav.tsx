"use client";

import { useState, useEffect } from "react";
import { Mono } from "../ui/Typography";
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
    ["#pricing", "Pricing"]
  ];

  return (
    <>
      <style>{`
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
      
      <nav className="nav-container" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        height: 60,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.7)",
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${scrolled ? tokens.border : "transparent"}`,
        transition: "background 0.4s, border-color 0.4s",
      }}>
        <div style={{ cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1, color: tokens.black, display: "flex", alignItems: "baseline" }}>
            SamaWritten
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: tokens.accent, marginLeft: 2, display: "inline-block" }} />
          </div>
          <Mono style={{ fontSize: 9, letterSpacing: "0.5em", color: tokens.dim, textTransform: "uppercase", display: "block", marginTop: 1 }}>
            SAMABEAT
          </Mono>
        </div>

        <div className="nav-links" style={{ gap: 28, alignItems: "center" }}>
          {navLinks.map(([href, label]) => (
            <a key={label} href={href} style={{ fontSize: 12, fontWeight: 300, color: tokens.mid, textDecoration: "none", letterSpacing: "0.02em", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = tokens.black}
              onMouseLeave={e => e.currentTarget.style.color = tokens.mid}
            >{label}</a>
          ))}
          <a href="#cta" style={{
            fontSize: 12, fontWeight: 400, color: tokens.white, textDecoration: "none",
            padding: "8px 20px", borderRadius: 100, background: tokens.black,
            transition: "opacity 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.72"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >Reserve · $199</a>
        </div>

        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: "none", border: "none", padding: 0, cursor: "pointer",
            flexDirection: "column", gap: 5, width: 24, alignItems: "flex-end"
          }}
        >
          <span style={{ width: 24, height: 1.5, background: tokens.black, borderRadius: 10 }} />
          <span style={{ width: 16, height: 1.5, background: tokens.black, borderRadius: 10 }} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 190,
        background: tokens.white,
        transform: mobileMenuOpen ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        display: "flex", flexDirection: "column", padding: "100px 24px 40px",
        gap: 32,
      }}>
        {navLinks.map(([href, label]) => (
          <a 
            key={label} 
            href={href} 
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: 32, fontWeight: 200, color: tokens.black, textDecoration: "none", letterSpacing: "-0.02em" }}
          >{label}</a>
        ))}
        <div style={{ marginTop: "auto" }}>
          <a href="#cta" onClick={() => setMobileMenuOpen(false)} style={{
            display: "block", textAlign: "center",
            fontSize: 14, fontWeight: 400, color: tokens.white, textDecoration: "none",
            padding: "16px", borderRadius: 100, background: tokens.black,
          }}>Reserve SamaBeat · $199</a>
        </div>
      </div>
    </>
  );
}
