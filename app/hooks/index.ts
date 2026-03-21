import { useState, useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export function useProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => {
      const p = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setPct(Math.round(p * 100));
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return pct;
}
