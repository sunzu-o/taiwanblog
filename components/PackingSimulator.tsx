"use client";

import { useState } from "react";

const seasons = {
  spring: {
    label: "3〜5月（春季）", emoji: "🌸",
    items: ["薄外套（早晚較涼）", "防曬乳 SPF50+", "折疊雨傘", "舒適步行鞋", "台灣健保卡影本"],
  },
  summer: {
    label: "6〜9月（夏季）", emoji: "☀️",
    items: ["防曬乳 SPF50+（必備！）", "防蚊液", "涼感衣物", "泳衣、泳鏡", "墨鏡", "寬簷帽", "保冷水壺"],
  },
  autumn: {
    label: "10〜11月（秋季）", emoji: "🍂",
    items: ["薄外套", "防曬乳 SPF30+", "折疊雨傘", "舒適步行鞋", "台灣健保卡影本"],
  },
  winter: {
    label: "12〜2月（冬季）", emoji: "🌬️",
    items: ["中等厚度外套（約台北冬天）", "圍巾", "保濕護膚品", "舒適步行鞋", "台灣健保卡影本"],
  },
} as const;

type Season = keyof typeof seasons;

export default function PackingSimulator() {
  const [selected, setSelected] = useState<Season | null>(null);

  return (
    <div className="rounded-2xl p-6 md:p-8" style={{ background: "#F4F8F9", border: "1px solid #E0EDF0" }}>
      <h3 className="font-bold text-slate-800 text-lg mb-1">🧳 依季節推薦必備物品</h3>
      <p className="text-sm text-slate-500 mb-5">選擇旅遊季節，查看建議攜帶物品</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {(Object.keys(seasons) as Season[]).map((s) => (
          <button key={s}
            onClick={() => setSelected(s === selected ? null : s)}
            className="px-3 py-3 rounded-xl text-sm font-semibold text-left transition-all duration-200"
            style={{
              background: selected === s ? "#00A896" : "#fff",
              color: selected === s ? "#fff" : "#475569",
              border: selected === s ? "2px solid #00A896" : "1.5px solid #E2E8F0",
            }}>
            <span className="text-xl block mb-1">{seasons[s].emoji}</span>
            {seasons[s].label}
          </button>
        ))}
      </div>
      {selected && (
        <div className="rounded-xl p-5" style={{ background: "#fff", border: "1px solid #E0F7F4" }}>
          <p className="text-xs font-bold mb-3" style={{ color: "#00A896" }}>
            {seasons[selected].emoji} {seasons[selected].label} 建議攜帶
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {seasons[selected].items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#00A896" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
