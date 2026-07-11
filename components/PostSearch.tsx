"use client";

import { useState } from "react";
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

const categoryLabels: Record<string, string> = {
  sightseeing: "景點介紹",
  food:        "美食推薦",
  transport:   "交通攻略",
  shopping:    "購物指南",
  hotel:       "住宿推薦",
  tips:        "實用資訊",
};

export default function PostSearch({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const q = query.trim().toLowerCase();
  const active = q.length > 0 || category !== null;

  const results = active
    ? posts.filter((p) => {
        if (category && p.category !== category) return false;
        if (!q) return true;
        const haystack = [p.title, p.excerpt, ...p.tags].join(" ").toLowerCase();
        return haystack.includes(q);
      })
    : [];

  return (
    <div className="rounded-3xl p-6 md:p-8" style={{ background: "#fff", border: "1.5px solid #E2EDF0" }}>
      {/* 検索窓 */}
      <div className="relative mb-4">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="8" cy="8" r="5.5" stroke="#94A3B8" strokeWidth="1.8" />
          <line x1="12.2" y1="12.2" x2="16" y2="16" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="搜尋景點、美食、關鍵字⋯（例：水族館、拉麵）"
          className="w-full pl-11 pr-4 py-3.5 rounded-full text-sm outline-none transition-all"
          style={{ background: "#F6FAFB", border: "1.5px solid #D8E8EC" }}
          onFocus={(e) => { e.target.style.borderColor = "#00A896"; e.target.style.background = "#fff"; }}
          onBlur={(e)  => { e.target.style.borderColor = "#D8E8EC"; e.target.style.background = "#F6FAFB"; }}
        />
      </div>

      {/* カテゴリ絞り込み */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(categoryLabels).map(([slug, label]) => (
          <button key={slug}
            onClick={() => setCategory(category === slug ? null : slug)}
            className="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all"
            style={{
              background: category === slug ? "#00A896" : "#F0F9F8",
              color: category === slug ? "#fff" : "#00796B",
              border: `1px solid ${category === slug ? "#00A896" : "#B2DFDB"}`,
            }}>
            {label}
          </button>
        ))}
      </div>

      {/* 検索結果 */}
      {active && (
        <div className="mt-5 pt-5" style={{ borderTop: "1px dashed #D8E8EC" }}>
          {results.length > 0 ? (
            <>
              <p className="text-xs text-slate-400 mb-3">找到 {results.length} 篇文章</p>
              <ul className="space-y-2">
                {results.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/${p.slug}`}
                      className="flex items-center gap-3 p-3 rounded-xl transition-colors hover:bg-[#F0F9F8]">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0"
                        style={{ background: "#E0F7F4", color: "#00796B" }}>
                        {categoryLabels[p.category] ?? p.category}
                      </span>
                      <span className="text-sm font-semibold text-slate-700 truncate">{p.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-sm text-slate-400 text-center py-4">
              沒有找到相關文章，請嘗試其他關鍵字 🔍
            </p>
          )}
        </div>
      )}
    </div>
  );
}
