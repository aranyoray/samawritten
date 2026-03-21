import React from "react";
import { tokens } from "@/app/constants";

export const BtnDark = ({
  href = "#",
  children,
  style = {}
}: {
  href?: string;
  children: React.ReactNode;
  style?: React.CSSProperties
}) => (
  <a
    href={href}
    style={{
      display: "inline-block",
      background: tokens.black,
      color: tokens.white,
      padding: "14px 30px",
      borderRadius: 100,
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: "0.01em",
      textDecoration: "none",
      transition: "opacity 0.2s",
      ...style,
    }}
    onMouseEnter={e => (e.currentTarget.style.opacity = "0.72")}
    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
  >{children}</a>
);
