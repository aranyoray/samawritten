import React from "react";
import { tokens } from "@/app/constants";

export const BtnDark = ({
  href,
  onClick,
  children,
  style = {}
}: {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties
}) => {
  const commonStyle: React.CSSProperties = {
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
    border: "none",
    cursor: "pointer",
    ...style,
  };

  if (onClick) {
    return (
      <button 
        onClick={onClick}
        style={commonStyle}
        onMouseEnter={e => (e.currentTarget.style.opacity = "0.72")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
      >{children}</button>
    );
  }

  return (
    <a
      href={href || "#"}
      style={commonStyle}
      onMouseEnter={e => (e.currentTarget.style.opacity = "0.72")}
      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
    >{children}</a>
  );
};
