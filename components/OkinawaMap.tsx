"use client";

import { useState } from "react";
import Link from "next/link";

// エリア定義（マップの領域と連動）
const areas = {
  north: {
    emoji: "🐋", name: "北部・本部", color: "#00A896",
    desc: "大自然與世界級水族館的度假勝地",
    spots: ["美麗海水族館", "今歸仁城跡", "古宇利大橋", "山原國家公園"],
    tip: "從那霸開車約2小時，建議安排一整天",
  },
  central: {
    emoji: "🏖️", name: "中部", color: "#0097A7",
    desc: "美式風情與海岸體驗的交匯處",
    spots: ["美國村", "殘波岬", "青之洞窟浮潛", "港川外人住宅"],
    tip: "適合海洋體驗與異國風情街拍",
  },
  south: {
    emoji: "🏙️", name: "那霸・南部", color: "#E8714A",
    desc: "美食購物與琉球歷史的中心",
    spots: ["國際通", "首里城", "瀨長島", "玉泉洞"],
    tip: "單軌電車即可暢遊，適合第一天與最後一天",
  },
  islands: {
    emoji: "🌴", name: "離島", color: "#D4A843",
    desc: "夢幻海色的絕美島嶼群",
    spots: ["石垣島", "宮古島", "慶良間群島", "久米島"],
    tip: "慶良間可從那霸當天來回，石垣・宮古需搭飛機",
  },
} as const;

type AreaKey = keyof typeof areas;

export default function OkinawaMap() {
  const [selected, setSelected] = useState<AreaKey>("south");

  const fill = (key: AreaKey) =>
    selected === key ? areas[key].color : "#CDE7E4";
  const area = areas[selected];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-3xl p-6 md:p-10"
      style={{ background: "#F4FBFA", border: "1.5px solid #DDF0ED" }}>

      {/* イラスト風マップ */}
      <div>
        <svg viewBox="0 0 400 420" className="w-full max-w-md mx-auto" role="img" aria-label="沖繩地圖">
          {/* 海の波紋（装飾） */}
          <circle cx="200" cy="210" r="195" fill="none" stroke="#BFE5E0" strokeWidth="1.5" strokeDasharray="4 8" />
          <circle cx="200" cy="210" r="165" fill="none" stroke="#D5EEEA" strokeWidth="1.5" strokeDasharray="3 9" />

          {/* 北部・本部（本島北側＋本部半島） */}
          <path
            d="M262 46 C288 38 316 52 324 78 C332 104 322 128 302 144 C288 156 276 168 264 178 L236 152 C230 142 232 126 240 112 C230 108 218 104 214 92 C210 78 220 64 236 58 C244 54 254 48 262 46 Z"
            fill={fill("north")} stroke="#fff" strokeWidth="3"
            className="cursor-pointer transition-all duration-300"
            style={{ opacity: selected === "north" ? 1 : 0.85 }}
            onClick={() => setSelected("north")} />

          {/* 中部（本島中央） */}
          <path
            d="M264 178 C252 192 240 204 226 216 C214 226 202 236 190 244 L168 216 C176 204 186 194 198 184 C210 172 224 162 236 152 Z"
            fill={fill("central")} stroke="#fff" strokeWidth="3"
            className="cursor-pointer transition-all duration-300"
            style={{ opacity: selected === "central" ? 1 : 0.85 }}
            onClick={() => setSelected("central")} />

          {/* 那覇・南部（本島南側） */}
          <path
            d="M190 244 C178 254 164 262 150 268 C132 276 114 282 100 278 C84 272 78 256 84 242 C90 230 104 224 118 222 C132 218 148 220 168 216 Z"
            fill={fill("south")} stroke="#fff" strokeWidth="3"
            className="cursor-pointer transition-all duration-300"
            style={{ opacity: selected === "south" ? 1 : 0.85 }}
            onClick={() => setSelected("south")} />

          {/* 離島（慶良間・宮古・石垣） */}
          <g className="cursor-pointer transition-all duration-300"
            style={{ opacity: selected === "islands" ? 1 : 0.85 }}
            onClick={() => setSelected("islands")}>
            <ellipse cx="66" cy="316" rx="17" ry="12" fill={fill("islands")} stroke="#fff" strokeWidth="3" />
            <ellipse cx="106" cy="346" rx="13" ry="9" fill={fill("islands")} stroke="#fff" strokeWidth="3" />
            <ellipse cx="58" cy="368" rx="20" ry="13" fill={fill("islands")} stroke="#fff" strokeWidth="3" />
          </g>

          {/* エリアラベル */}
          <text x="296" y="96" fontSize="13" fontWeight="700" fill={selected === "north" ? "#fff" : "#4A6B66"}
            textAnchor="middle" className="pointer-events-none select-none">北部</text>
          <text x="214" y="200" fontSize="13" fontWeight="700" fill={selected === "central" ? "#fff" : "#4A6B66"}
            textAnchor="middle" className="pointer-events-none select-none">中部</text>
          <text x="128" y="252" fontSize="13" fontWeight="700" fill={selected === "south" ? "#fff" : "#4A6B66"}
            textAnchor="middle" className="pointer-events-none select-none">南部</text>
          <text x="82" y="342" fontSize="13" fontWeight="700" fill={selected === "islands" ? "#B8860B" : "#4A6B66"}
            textAnchor="middle" className="pointer-events-none select-none">離島</text>
        </svg>

        {/* エリア切替ボタン（モバイル操作補助） */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {(Object.keys(areas) as AreaKey[]).map((key) => (
            <button key={key} onClick={() => setSelected(key)}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all"
              style={{
                background: selected === key ? areas[key].color : "#fff",
                color: selected === key ? "#fff" : "#5C6E7E",
                border: `1.5px solid ${selected === key ? areas[key].color : "#D8E8EC"}`,
              }}>
              {areas[key].emoji} {areas[key].name}
            </button>
          ))}
        </div>
      </div>

      {/* 選択エリアの詳細 */}
      <div className="rounded-2xl p-6 md:p-7 bg-white" style={{ border: "1px solid #E5F0EE" }}>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{area.emoji}</span>
          <div>
            <h3 className="font-black text-slate-800 text-xl leading-tight">{area.name}</h3>
            <p className="text-sm text-slate-500">{area.desc}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {area.spots.map((spot) => (
            <div key={spot} className="flex items-center gap-2 text-sm text-slate-700 px-3 py-2 rounded-lg"
              style={{ background: "#F6FAFB" }}>
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: area.color }} />
              {spot}
            </div>
          ))}
        </div>

        <p className="text-xs leading-relaxed px-3.5 py-2.5 rounded-lg mb-4"
          style={{ background: "#FFF9EC", color: "#8A6D1F", border: "1px solid #F3E3B8" }}>
          💡 {area.tip}
        </p>

        <Link href="/category/sightseeing"
          className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors"
          style={{ color: area.color }}>
          查看{area.name}相關文章 →
        </Link>
      </div>
    </div>
  );
}
