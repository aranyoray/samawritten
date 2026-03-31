"use client";

import { useEffect } from "react";
import { useReveal, useProgress } from "./hooks";
import { GLOBAL_CSS, tokens } from "./constants";
import { Nav, Hero, ProblemStats, LogoCarousel, Positioning, HowItWorks, HealthAndSensorsScroll, Conditions, Cellular, Science, Pricing, Market, CTA, Footer } from "./components/sections";

export default function SamaBeat() {
  const progress = useProgress();
  useReveal();

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = GLOBAL_CSS;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <>
      <div style={{ position:"fixed", top:0, left:0, height:2, width:`${progress}%`, background:tokens.accent, zIndex:300, transition:"width 0.08s linear" }} />
      <Nav />
      <Hero />
      <LogoCarousel />
      <ProblemStats />
      <Positioning />
      <HowItWorks />
      <HealthAndSensorsScroll />
      <Conditions />
      <Cellular />
      <Science />
      <Pricing />
      <Market />
      <CTA />
      <Footer />
    </>
  );
}
