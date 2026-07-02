"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;       // ミリ秒単位のディレイ（カード等のスタッガー用）
  from?: "bottom" | "left" | "right" | "fade"; // 登場方向
  className?: string;
};

export default function AnimateOnView({
  children,
  delay = 0,
  from = "bottom",
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const initialTransform = {
    bottom: "translateY(32px)",
    left:   "translateX(-32px)",
    right:  "translateX(32px)",
    fade:   "scale(0.97)",
  }[from];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "none" : initialTransform,
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
