import { useState, useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (elements.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        entry.target.classList.remove("reveal-pending");
        obs.unobserve(entry.target);
      }),
      {
        threshold: 0.01,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    const isInViewport = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    };

    elements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add("visible");
        element.classList.remove("reveal-pending");
        return;
      }

      element.classList.add("reveal-pending");
      obs.observe(element);
    });

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
    window.addEventListener("resize", fn);
    fn();
    return () => {
      window.removeEventListener("scroll", fn);
      window.removeEventListener("resize", fn);
    };
  }, []);
  return pct;
}
