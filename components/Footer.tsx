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
            © {new Date().getFullYear()} 沖繩旅遊指南　資訊僅供參考，請以官方公告為準
          </p>
          <p className="text-xs" style={{ color: "#1E3340" }}>
            內容由 AI 輔助生成並經人工審核
          </p>
        </div>
      </div>
    </footer>
  );
}
