"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/category/sightseeing", label: "景點" },
  { href: "/category/food",        label: "美食" },
  { href: "/category/transport",   label: "交通" },
  { href: "/category/shopping",    label: "購物" },
  { href: "/category/hotel",       label: "住宿" },
  { href: "/category/tips",        label: "實用資訊" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isTransparent = !scrolled && !menuOpen;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isTransparent ? "transparent" : "rgba(255,255,255,0.97)",
        backdropFilter: isTransparent ? "none" : "blur(8px)",
        borderBottom: isTransparent ? "none" : "1px solid #E2E8F0",
        boxShadow: isTransparent ? "none" : "0 2px 16px rgba(0,0,0,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-base font-bold text-white flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #0077B6, #00B4D8)" }}
            >
              沖
            </div>
            <div>
              <div
                className="font-bold text-base leading-tight transition-colors"
                style={{ color: isTransparent ? "#fff" : "#023E8A" }}
              >
                妙遊沖繩
              </div>
              <div
                className="text-xs leading-tight transition-colors"
                style={{ color: isTransparent ? "rgba(255,255,255,0.75)" : "#94A3B8" }}
              >
                在地生活日本人帶路的私房玩法
              </div>
            </div>
          </Link>

          {/* デスクトップナビ */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{
                  color: isTransparent ? "rgba(255,255,255,0.9)" : "#475569",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = isTransparent ? "#fff" : "#0077B6";
                  (e.target as HTMLElement).style.background = isTransparent
                    ? "rgba(255,255,255,0.15)"
                    : "#EFF6FF";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = isTransparent
                    ? "rgba(255,255,255,0.9)"
                    : "#475569";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ハンバーガー */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: isTransparent ? "#fff" : "#475569" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {menuOpen ? (
                <>
                  <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6"  x2="19" y2="6"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* モバイルナビ */}
        {menuOpen && (
          <nav
            className="md:hidden pb-4 flex flex-col gap-1"
            style={{ borderTop: "1px solid #E2E8F0" }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-[#0077B6] hover:bg-blue-50 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
