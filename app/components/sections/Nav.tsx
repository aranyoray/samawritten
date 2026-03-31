"use client";

import { useState, useEffect } from "react";
import { useWaitlist } from "../../context/WaitlistContext";
import { tokens } from "@/app/constants";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useWaitlist();

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
          <img 
            src="/SamaWritten-Logo.png" 
            alt="SamaWritten Logo" 
            style={{ height: 22, width: "auto", display: "block" }} 
          />
        </div>

        <div className="nav-links" style={{ gap: 28, alignItems: "center" }}>
          {navLinks.map(([href, label]) => (
            <a key={label} href={href} style={{ fontSize: 15, fontWeight: 500, color: tokens.black, textDecoration: "none", letterSpacing: "0.01em", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = tokens.accent}
              onMouseLeave={e => e.currentTarget.style.color = tokens.black}
            >{label}</a>
          ))}
          <button onClick={openModal} style={{
            fontSize: 12, fontWeight: 400, color: tokens.white, textDecoration: "none",
            padding: "8px 20px", borderRadius: 100, background: tokens.black,
            transition: "opacity 0.2s",
            border: "none", cursor: "pointer"
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.72"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >Reserve · $199</button>
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
          <button onClick={() => { setMobileMenuOpen(false); openModal(); }} style={{
            display: "block", width: "100%", textAlign: "center",
            fontSize: 14, fontWeight: 400, color: tokens.white, textDecoration: "none",
            padding: "16px", borderRadius: 100, background: tokens.black,
            border: "none", cursor: "pointer"
          }}>Reserve SamaBeat · $199</button>
        </div>
      </div>
    </>
  );
}
