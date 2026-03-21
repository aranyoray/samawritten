"use client";

import { useState, useEffect } from "react";
import { Mono } from "../ui/Typography";
import { tokens } from "@/app/constants";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      height: 60, padding: "0 56px",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.7)",
      backdropFilter: "blur(16px)",
      borderBottom: `1px solid ${scrolled ? tokens.border : "transparent"}`,
      transition: "background 0.4s, border-color 0.4s",
    }}>
      <div>
        <div style={{ fontSize: 27, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1, color: tokens.black, display: "flex", alignItems: "baseline" }}>
          SamaWritten
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: tokens.accent, marginLeft: 2, display: "inline-block" }} />
        </div>
        <Mono style={{ fontSize: 11, letterSpacing: "0.5em", color: tokens.dim, textTransform: "uppercase", display: "block", marginTop: 1 }}>
          SAMABEAT
        </Mono>
      </div>
      <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
        {[["#how","How it works"],["#features","Features"],["#conditions","Conditions"],["#pricing","Pricing"]].map(([href,label]) => (
          <a key={label} href={href} style={{ fontSize:12, fontWeight:300, color:tokens.mid, textDecoration:"none", letterSpacing:"0.02em", transition:"color 0.2s" }}
            onMouseEnter={e=>e.currentTarget.style.color=tokens.black}
            onMouseLeave={e=>e.currentTarget.style.color=tokens.mid}
          >{label}</a>
        ))}
        <a href="#cta" style={{
          fontSize:12, fontWeight:400, color:tokens.white, textDecoration:"none",
          padding:"8px 20px", borderRadius:100, background:tokens.black,
          transition:"opacity 0.2s",
        }}
          onMouseEnter={e=>e.currentTarget.style.opacity="0.72"}
          onMouseLeave={e=>e.currentTarget.style.opacity="1"}
        >Reserve · $199</a>
      </div>
    </nav>
  );
}
