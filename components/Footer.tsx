import Link from "next/link";

const col1 = [
  { href: "/category/sightseeing", label: "景點介紹" },
  { href: "/category/food",        label: "美食推薦" },
  { href: "/category/transport",   label: "交通攻略" },
];
const col2 = [
  { href: "/category/shopping", label: "購物指南" },
  { href: "/category/hotel",    label: "住宿推薦" },
  { href: "/category/tips",     label: "實用資訊" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#08131E" }}>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* ブランド */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black text-white"
                style={{ background: "linear-gradient(135deg,#00A896,#64D8CB)" }}>
                沖
              </div>
              <div>
                <div className="font-bold text-white text-base leading-tight">妙遊沖繩</div>
                <div className="text-xs leading-tight" style={{ color: "#3E5A68" }}>在地生活日本人帶路的私房玩法</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "#3E5A68" }}>
              為台灣旅客量身打造的沖繩旅遊資訊平台，
              提供景點、美食、交通等最實用的旅遊攻略。
            </p>
            <div className="flex gap-2 flex-wrap">
              {["沖繩", "台灣視角", "繁體中文"].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{ background: "rgba(0,168,150,0.1)", color: "#64D8CB", border: "1px solid rgba(0,168,150,0.18)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* リンク 1 */}
          <div>
            <h4 className="font-semibold text-sm mb-5" style={{ color: "#8AA8B5" }}>旅遊分類</h4>
            <ul className="space-y-3">
              {col1.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: "#3E5A68" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* リンク 2 */}
          <div>
            <h4 className="font-semibold text-sm mb-5" style={{ color: "#8AA8B5" }}>旅遊資訊</h4>
            <ul className="space-y-3">
              {col2.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: "#3E5A68" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-xs" style={{ color: "#1E3340" }}>
            © {new Date().getFullYear()} 妙遊沖繩　資訊僅供參考，請以官方公告為準
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs" style={{ color: "#1E3340" }}>內容由 AI 輔助生成並經人工審核</p>
            {/* チャットボット（将来の外部サービス埋め込み用プレースホルダー） */}
            <a href="mailto:cosmos_rockin@yahoo.co.jp"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(0,168,150,0.15)", border: "1px solid rgba(0,168,150,0.3)" }}
              title="聯絡我們">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1.5C4.41 1.5 1.5 4.03 1.5 7.15c0 1.73.86 3.27 2.2 4.33L3.25 14l2.63-1.38c.67.19 1.37.28 2.12.28 3.59 0 6.5-2.53 6.5-5.65S11.59 1.5 8 1.5z"
                  stroke="#64D8CB" strokeWidth="1.2" fill="none"/>
                <circle cx="5.5" cy="7.5" r="0.75" fill="#64D8CB"/>
                <circle cx="8" cy="7.5" r="0.75" fill="#64D8CB"/>
                <circle cx="10.5" cy="7.5" r="0.75" fill="#64D8CB"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
