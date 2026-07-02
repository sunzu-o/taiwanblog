import type { Metadata } from "next";
import Link from "next/link";
import { IconWave, IconCastle, IconBowl, IconPlane, IconArrow, IconSun, IconCamera } from "@/components/Icon";

export const metadata: Metadata = {
  title: "為什麼台灣人要去沖繩？",
  description: "距離近、物價合理、文化親切——沖繩是台灣人出國旅遊的絕佳選擇。住在沖繩的日本人親身說明4大理由。",
};

const reasons = [
  {
    Icon: IconPlane,
    number: "01",
    title: "直飛1.5小時，比去日本本島近多了",
    body: `從台北桃園機場到那霸機場，直飛只需約1.5小時；從高雄出發更只需約1小時。相比之下，飛東京需要3小時以上，飛大阪也要2.5小時。

沖繩是台灣人「最近的境外南島天堂」。不需要請長假，週末2～3天就能玩得盡興，這是其他海外目的地很難做到的。`,
  },
  {
    Icon: IconWave,
    number: "02",
    title: "世界頂級的珊瑚礁海洋",
    body: `沖繩的海水透明度名列全球前茅，珊瑚礁覆蓋率極高，光是在岸邊浮潛就能看到色彩繽紛的熱帶魚與活珊瑚礁。

與台灣的墾丁或綠島相比，沖繩的海域面積更廣、水更清、海洋生態更豐富。加上美麗海水族館這種世界級設施，無論喜不喜歡潛水，都能充分享受沖繩的海洋魅力。`,
  },
  {
    Icon: IconCastle,
    number: "03",
    title: "琉球王國的歷史與文化，與日本本島截然不同",
    body: `沖繩不只是「日本的一部分」，它擁有獨特的琉球王國歷史，文化、語言、建築風格都和日本本島大相徑庭。

首里城的紅色城牆、傳統的琉球料理、泡盛酒文化……這些都是在東京或大阪看不到的沖繩獨有風情。對喜愛日本文化的台灣人來說，這是一種全新的「另一種日本」體驗。`,
  },
  {
    Icon: IconBowl,
    number: "04",
    title: "在地美食豐富，口味台灣人容易接受",
    body: `沖繩拉麵（豬骨清湯麵）、海葡萄（一種海藻）、炒苦瓜（ゴーヤチャンプルー）、泡盛酒……沖繩的在地美食種類豐富，口味上對台灣人來說相對親切，不會太難接受。

尤其是豬骨湯底的拉麵，和台灣的湯麵文化有共通之處，大多數台灣人第一次吃就能喜歡上。`,
  },
  {
    Icon: IconSun,
    number: "05",
    title: "全年氣候溫暖，秋冬也是逃離寒流的好去處",
    body: `沖繩屬亞熱帶氣候，全年平均氣溫約23℃，即使是冬天也很少低於15℃。台灣的冬天常有東北季風帶來的寒流，這時候飛到沖繩「避寒」是個非常舒適的選擇。

夏天雖然熱，但海風徐徐，在海邊度過的時光格外愜意。`,
  },
  {
    Icon: IconCamera,
    number: "06",
    title: "中文標示普及，旅遊門檻低",
    body: `那霸市區的國際通、主要觀光景點周邊，中文標示與中文菜單已相當普及。即使不懂日文，也能輕鬆購物、點餐、搭乘交通工具。

此外，部分醫療機構也提供中文對應，萬一生病或受傷也不用太擔心。對於第一次出國的旅客，沖繩是一個友善且門檻低的目的地。`,
  },
];

export default function WhyOkinawaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 pt-28">
      {/* パンくず */}
      <nav className="text-sm text-slate-400 mb-10 flex items-center gap-1.5">
        <Link href="/" className="hover:text-[#00A896] transition-colors">首頁</Link>
        <span>›</span>
        <span className="text-slate-600">為什麼台灣人要去沖繩？</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-16 text-center">
        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#00A896" }}>
          WHY OKINAWA?
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
          為什麼台灣人<br />要去沖繩？
        </h1>
        <p className="text-slate-500 text-base leading-relaxed max-w-xl mx-auto">
          住在沖繩的日本人親身整理——從距離、海洋、文化到美食，沖繩值得台灣人一去再去的6大理由。
        </p>
      </header>

      {/* 理由一覧 */}
      <div className="space-y-12">
        {reasons.map(({ Icon, number, title, body }) => (
          <div key={number} className="flex gap-6 md:gap-10">
            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#00A896,#64D8CB)" }}>
                <Icon size={22} color="#fff" />
              </div>
              <div className="text-xs font-black tracking-widest" style={{ color: "#CBD5E1" }}>{number}</div>
            </div>
            <div className="flex-1 pb-12" style={{ borderBottom: "1px solid #E2EDF0" }}>
              <h2 className="text-xl font-bold text-slate-800 mb-4 leading-snug">{title}</h2>
              <div className="text-slate-500 text-sm leading-relaxed space-y-3">
                {body.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center p-12 rounded-3xl"
        style={{ background: "linear-gradient(135deg,#004D40,#00A896)" }}>
        <h3 className="text-2xl font-black text-white mb-3">準備好了嗎？</h3>
        <p className="text-white/70 text-sm mb-7">從景點、交通到美食，妙遊沖繩為你整理最完整的旅遊資訊。</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/category/sightseeing"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all hover:brightness-110"
            style={{ background: "#fff", color: "#00796B" }}>
            探索景點 <IconArrow size={14} color="#00796B" />
          </Link>
          <Link href="/category/transport"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:bg-white/15"
            style={{ border: "1.5px solid rgba(255,255,255,0.45)", color: "#fff", background: "rgba(255,255,255,0.08)" }}>
            交通攻略
          </Link>
        </div>
      </div>
    </div>
  );
}
