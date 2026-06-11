"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollRevealDirection = "up" | "left" | "right" | "zoom";

type ScrollRevealProps = {
  children: ReactNode;
  direction?: ScrollRevealDirection;
  delay?: number;
  className?: string;
};

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -80px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal scroll-reveal-${direction} ${
        isVisible ? "is-visible" : ""
      } ${className}`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}