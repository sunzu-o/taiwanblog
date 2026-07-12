// 第2層：実利提供エリア（クーポン一覧）
// 提携店舗が決まったら coupons のデータとバーコード値を実際のものに差し替える

const coupons = [
  {
    emoji: "💊", store: "藥妝店優惠", color: "#E8714A",
    benefit: "免稅 + 額外折扣", cond: "結帳時出示此畫面＋台灣護照",
    status: "合作洽談中",
  },
  {
    emoji: "🎁", store: "伴手禮店優惠", color: "#00A896",
    benefit: "滿額贈品", cond: "國際通指定店鋪適用",
    status: "合作洽談中",
  },
  {
    emoji: "🚗", store: "租車優惠", color: "#0097A7",
    benefit: "預約折扣", cond: "透過本站連結預約適用",
    status: "合作洽談中",
  },
];

// 疑似バーコード（実クーポン導入時に jsbarcode 等で実コードに置き換え）
const barWidths = [3, 1, 2, 1, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 2, 1, 2, 1];

function Barcode({ dimmed }: { dimmed: boolean }) {
  let x = 4;
  const bars = barWidths.map((w, i) => {
    const rect = <rect key={i} x={x} y={4} width={w * 2} height={36} fill={dimmed ? "#CBD5E1" : "#1E293B"} />;
    x += w * 2 + 3;
    return rect;
  });
  return (
    <svg viewBox={`0 0 ${x + 4} 44`} className="h-11 w-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      {bars}
    </svg>
  );
}

export default function CouponSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {coupons.map((c) => (
        <div key={c.store} className="relative rounded-2xl overflow-hidden bg-white"
          style={{ border: "1.5px dashed #C9DDE2" }}>
          {/* ステータスリボン */}
          <span className="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full"
            style={{ background: "#FFF4E0", color: "#A16207", border: "1px solid #F3D9A4" }}>
            🔜 即將推出
          </span>

          <div className="p-6 pb-4">
            <div className="text-3xl mb-3">{c.emoji}</div>
            <h3 className="font-black text-slate-800 text-base mb-1">{c.store}</h3>
            <p className="text-sm font-bold mb-2" style={{ color: c.color }}>{c.benefit}</p>
            <p className="text-xs text-slate-500 leading-relaxed">{c.cond}</p>
          </div>

          {/* バーコード部（切り取り線風） */}
          <div className="px-6 py-4 relative" style={{ borderTop: "1.5px dashed #C9DDE2", background: "#F8FBFC" }}>
            <span className="absolute -top-2.5 -left-2.5 w-5 h-5 rounded-full bg-white"
              style={{ border: "1.5px dashed #C9DDE2" }} />
            <span className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-white"
              style={{ border: "1.5px dashed #C9DDE2" }} />
            <Barcode dimmed />
            <p className="text-center text-[10px] text-slate-400 mt-1.5 tracking-widest">
              {c.status}・敬請期待
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
