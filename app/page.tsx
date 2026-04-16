"use client";

import { useReveal, useProgress } from "./hooks";
import { GLOBAL_CSS, tokens } from "./constants";
import { Nav, Hero, ProblemStats, LogoCarousel, Positioning, HowItWorks, HealthAndSensorsScroll, Conditions, Cellular, Science, ClinicallyValidated, Market, CTA, Footer } from "./components/sections";

export default function SamaWritten() {
  const progress = useProgress();
  useReveal();

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <div style={{ position:"fixed", top:0, left:0, height:2, width:`${progress}%`, background:tokens.accent, zIndex:300, transition:"width 0.08s linear" }} />
      <Nav />
      <Hero />
      <LogoCarousel />
      <ProblemStats />
      <Positioning />
      <ClinicallyValidated />
      <HowItWorks />
      <HealthAndSensorsScroll />
      <Conditions />
      <Cellular />
      <Science />
      <Market />
      <CTA />
      <Footer />
    </>
  );
}
