import React from "react";
import { tokens } from "@/app/constants";

export const Mono = ({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <span style={{ fontFamily: "'DM Mono', monospace", ...style }}>{children}</span>
);

export const Eyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <p style={{
    fontFamily: "'DM Mono', monospace",
    fontSize: 9.5,
    letterSpacing: "0.4em",
    color: light ? "rgba(255,255,255,0.3)" : tokens.dim,
    textTransform: "uppercase",
    marginBottom: 14,
  }}>{children}</p>
);

export const SectionTitle = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <h2 style={{
    fontSize: "clamp(30px,3.8vw,50px)",
    fontWeight: 200,
    lineHeight: 1.1,
    letterSpacing: "-0.03em",
    color: light ? tokens.white : tokens.text,
  }}>{children}</h2>
);
