import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import AnimateOnView from "@/components/AnimateOnView";
import Link from "next/link";
import {
  IconCamera, IconCutlery, IconBus, IconShoppingBag, IconHotel, IconInfo, IconArrow,
} from "@/components/Icon";
import PackingSimulator from "@/components/PackingSimulator";
import OkinawaMap from "@/components/OkinawaMap";
import PostSearch from "@/components/PostSearch";
import CouponSection from "@/components/CouponSection";

const announcements = [
  "🌺 沖繩花季：寒緋櫻1月底綻放，比本州早兩個月",
  "🚌 機場交通：東京巴士¥240直達國際通，約15分鐘",
  "🌊 美麗海水族館：國中生以下免費，全年開放",
  "🛍️ 國際通：持台灣護照享免稅優惠",
];

const categories = [
  { slug: "sightseeing", Icon: IconCamera,      label: "景點介紹", desc: "海灘、城跡、自然景觀",    img: "/images/tran-chura.jpg"    },
  { slug: "food",        Icon: IconCutlery,     label: "美食推薦", desc: "沖繩拉麵、泡盛、在地料理", img: "/images/cat-food.jpg"      },
  { slug: "transport",   Icon: IconBus,         label: "交通攻略", desc: "單軌、巴士、租車攻略",    img: "/images/cat-transport.jpg" },
  { slug: "shopping",    Icon: IconShoppingBag, label: "購物指南", desc: "國際通、免稅、伴手禮",    img: "/images/cat-shopping.jpg"  },
  { slug: "hotel",       Icon: IconHotel,       label: "住宿推薦", desc: "度假村、民宿、商務旅館",  img: "/images/cat-hotel.jpg"     },
  { slug: "tips",        Icon: IconInfo,        label: "實用資訊", desc: "禮儀、換錢、SIM卡",      img: "/images/hospital.jpg"      },
];

const bentoItems = [
  {
    id: "sakura", wide: true,
    style: { background: "linear-gradient(135deg,#FF6B8A 0%,#FFB3C1 100%)" },
    emoji: "🌸", tag: "季節特輯", title: "沖繩花季攻略",
    desc: "寒緋櫻1月底綻放，比本州早兩個月！今歸仁城跡是最佳賞櫻地點。",
    href: "/category/sightseeing",
  },
  {
    id: "ramen", wide: false,
    style: { background: "linear-gradient(135deg,#E8714A 0%,#F4A261 100%)" },
    emoji: "🍜", tag: "美食特輯", title: "沖繩拉麵",
    desc: "豬骨清湯，台灣人一定喜歡！",
    href: "/category/food",
  },
  {
    id: "souvenir", wide: false,
    style: { background: "linear-gradient(135deg,#00A896 0%,#64D8CB 100%)" },
    emoji: "🛍️", tag: "伴手禮", title: "必買調味料",
    desc: "泡盛、沖繩鹽——帶回台灣的最佳禮物。",
    href: "/category/shopping",
  },
  {
    id: "snorkel", wide: true,
    style: { background: "linear-gradient(135deg,#0077B6 0%,#00B4D8 100%)" },
    emoji: "🌊", tag: "體驗推薦", title: "珊瑚礁浮潛",
    desc: "沖繩海水透明度名列全球前茅，恩納村是浮潛聖地，初學者也能輕鬆體驗。",
    href: "/category/sightseeing",
  },
];

const themes = [
  { emoji: "🌊", label: "浮潛・潛水", href: "/category/sightseeing" },
  { emoji: "🏰", label: "歷史古跡",   href: "/category/sightseeing" },
  { emoji: "🍜", label: "在地美食",   href: "/category/food"        },
  { emoji: "🛍️", label: "免稅購物",  href: "/category/shopping"    },
  { emoji: "👘", label: "琉裝體驗",   href: "/category/sightseeing" },
  { emoji: "♨️", label: "溫泉・SPA",  href: "/category/sightseeing" },
  { emoji: "🌅", label: "夕陽景點",   href: "/category/sightseeing" },
  { emoji: "👨‍👩‍👧", label: "親子旅遊", href: "/category/sightseeing" },
  { emoji: "🚗", label: "租車自駕",   href: "/category/transport"   },
  { emoji: "🐬", label: "海豚體驗",   href: "/category/sightseeing" },
];

const guides = [
  {
    emoji: "🚗", title: "租車・駕照",
    items: ["台灣駕照＋日文譯本即可租車", "日文譯本可在台灣監理站申辦", "日本靠左行駛，注意方向"],
  },
  {
    emoji: "📞", title: "緊急聯絡",
    items: ["從台灣撥日本：+81（去掉0）", "沖繩警察：+81-98-863-0110", "中文醫療口譯：0570-050-235"],
  },
  {
    emoji: "💴", title: "換錢・支付",
    items: ["7-Eleven ATM可用台灣卡", "國際通有多家換錢所", "主要景點接受信用卡"],
  },
];

// レンタカー手続き4ステップ（台湾人向け）
const rentalSteps = [
  { step: "1", emoji: "📋", title: "台灣申辦駕照日文譯本", desc: "至監理站辦理，當天可取件（約100元）" },
  { step: "2", emoji: "💻", title: "線上預約租車", desc: "旺季建議提前1個月，選含中文導航車款" },
  { step: "3", emoji: "🔑", title: "現場取車", desc: "出示台灣駕照＋日文譯本＋護照" },
  { step: "4", emoji: "🚗", title: "靠左行駛出發", desc: "日本靠左行駛，方向燈與雨刷位置相反" },
];

const youtubeVideos = [
  { title: "沖繩3天2夜完全攻略｜台灣人必看", channel: "妙遊沖繩" },
  { title: "那霸機場到市區最省錢方法", channel: "妙遊沖繩" },
];

// SNSタイムライン（編集部発信。KOL提携後に実際の口コミ投稿へ差し替え）
const snsTimeline = [
  { time: "1月", emoji: "🌸", text: "寒緋櫻1月底就開了！比日本本州早兩個月，今歸仁城跡是小編最推的賞櫻點。", tags: ["#沖繩櫻花", "#今歸仁城跡"] },
  { time: "交通", emoji: "🚌", text: "從那霸機場搭東京巴士只要¥240就能直達國際通，約15分鐘，比計程車省超多！", tags: ["#那霸機場", "#交通攻略"] },
  { time: "親子", emoji: "🐋", text: "美麗海水族館國中生以下免費入館！帶小朋友來沖繩，這裡絕對是首選。", tags: ["#美麗海水族館", "#親子旅遊"] },
  { time: "離島", emoji: "🏝️", text: "慶良間群島從那霸出發當天就能來回，海水透明度真的名不虛傳。", tags: ["#慶良間", "#浮潛"] },
];

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      {/* ═══ 第1層: ファーストビュー ═══ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero.jpg" alt="沖繩"
          className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom,rgba(0,0,0,0.15) 0%,rgba(5,18,30,0.78) 100%)" }} />

        {/* 告知バナー（マーキー） */}
        <div className="relative z-10 overflow-hidden py-2.5"
          style={{ background: "rgba(0,168,150,0.88)", backdropFilter: "blur(4px)" }}>
          <div className="marquee-track text-white text-xs font-semibold">
            {[...announcements, ...announcements].map((a, i) => (
              <span key={i} className="inline-block px-10">{a}</span>
            ))}
          </div>
        </div>

        {/* メインコンテンツ */}
        <div className="relative z-10 flex-1 flex items-end">
          <div className="w-full max-w-6xl mx-auto px-6 pb-20 pt-12">
            {/* 言語バッジ */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", backdropFilter: "blur(6px)" }}>
                🌏 繁體中文（台灣）
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "rgba(0,168,150,0.3)", color: "#64D8CB", border: "1px solid rgba(100,216,203,0.4)" }}>
                在地日本人帶路
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-[1.05] tracking-tight">
              發現<br />
              <span style={{ background: "linear-gradient(90deg,#64D8CB,#ADE8F4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                沖繩之美
              </span>
            </h1>
            <p className="text-white/80 text-base mb-8 max-w-lg leading-relaxed">
              在地生活日本人親身帶路，提供最真實的沖繩景點、美食、交通完整攻略。
            </p>

            {/* カテゴリショートカット */}
            <div className="flex flex-wrap gap-2">
              {categories.map(({ slug, Icon, label }) => (
                <Link key={slug} href={`/category/${slug}`}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
                  style={{ background: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", backdropFilter: "blur(8px)" }}>
                  <Icon size={14} color="rgba(255,255,255,0.8)" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg viewBox="0 0 1440 72" fill="none" preserveAspectRatio="none" style={{ display: "block" }}>
            <path d="M0,48 C360,12 1080,72 1440,36 L1440,72 L0,72 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ═══ 第2層: 実利提供エリア（クーポン＋LINE/Facebook誘導） ═══ */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnView from="bottom">
            <div className="mb-8">
              <p className="section-eyebrow mb-2">MEMBER BENEFITS</p>
              <h2 className="section-heading">會員<em>專屬優惠</em></h2>
              <p className="text-slate-500 text-sm mt-2">藥妝、伴手禮、租車——為台灣旅客準備的專屬折扣（實際優惠以店家公告為準）</p>
            </div>
          </AnimateOnView>

          {/* クーポン一覧 */}
          <AnimateOnView from="bottom">
            <div className="mb-8">
              <CouponSection />
            </div>
          </AnimateOnView>

          <AnimateOnView from="bottom">
            <div className="rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8"
              style={{ background: "linear-gradient(135deg,#0D2B3E 0%,#1A4060 100%)" }}>
              <div className="flex-1">
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#64D8CB" }}>FOLLOW US</p>
                <h2 className="text-2xl font-black text-white mb-3">加入會員，優惠券上線搶先領取</h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  加入LINE或Facebook，第一時間獲取優惠券、限定旅遊Tips、季節特報與私房景點推薦。
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <a href="https://line.me" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold transition-all hover:brightness-110"
                  style={{ background: "#06C755", color: "#fff" }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                    <path d="M9 1.5C4.86 1.5 1.5 4.44 1.5 8.06c0 2.13 1.14 4.02 2.9 5.25L3.75 16.5l3.13-1.64A7.58 7.58 0 009 15c4.14 0 7.5-3.07 7.5-6.56C16.5 4.87 13.14 1.5 9 1.5z"/>
                  </svg>
                  加入LINE
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold transition-all hover:brightness-110"
                  style={{ background: "#1877F2", color: "#fff" }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                    <path d="M9 1.5a7.5 7.5 0 100 15A7.5 7.5 0 009 1.5zm1 8h1.5l.25-2H10V6.5c0-.55.15-1 1-1h.75V3.5A8.3 8.3 0 0010.5 3.4C9 3.4 8 4.3 8 6v1.5H6.5v2H8V16h2V9.5z"/>
                  </svg>
                  追蹤Facebook
                </a>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ═══ 第3層: 旬情報 Bento UI ═══ */}
      <section className="py-20" style={{ background: "#F4F8F9" }}>
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnView from="bottom">
            <div className="mb-10">
              <p className="section-eyebrow mb-2">FEATURED</p>
              <h2 className="section-heading">旬情報<em>特輯</em></h2>
              <p className="text-slate-500 text-sm mt-2">季節、美食、體驗——沖繩現在最值得關注的精選主題</p>
            </div>
          </AnimateOnView>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {bentoItems.map((item, i) => (
              <AnimateOnView key={item.id} delay={i * 80} from="bottom"
                className={item.wide ? "md:col-span-2" : "md:col-span-1"}>
                <Link href={item.href}
                  className="block rounded-2xl p-7 h-full flex flex-col justify-between min-h-[180px] transition-all hover:brightness-105 hover:-translate-y-0.5"
                  style={item.style}>
                  <div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full mb-3 inline-block"
                      style={{ background: "rgba(255,255,255,0.22)", color: "#fff" }}>
                      {item.tag}
                    </span>
                    <div className="text-3xl mb-2">{item.emoji}</div>
                    <h3 className="text-white font-black text-lg mb-1">{item.title}</h3>
                    <p className="text-white/85 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              </AnimateOnView>
            ))}
          </div>

          {/* 最新記事 */}
          {posts.length > 0 && (
            <>
              <h3 className="font-bold text-slate-700 text-base mb-5">最新文章</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.slice(0, 3).map((post, i) => (
                  <AnimateOnView key={post.slug} delay={i * 90} from="bottom">
                    <PostCard post={post} />
                  </AnimateOnView>
                ))}
              </div>
              {posts.length > 3 && (
                <div className="text-center mt-8">
                  <Link href="/category/sightseeing"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all hover:brightness-110"
                    style={{ background: "#00A896", color: "#fff" }}>
                    查看所有文章 <IconArrow size={14} color="#fff" />
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ═══ 第4層: エリア・体験検索 ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnView from="bottom">
            <div className="mb-10">
              <p className="section-eyebrow mb-2">EXPLORE</p>
              <h2 className="section-heading">探索<em>沖繩</em></h2>
              <p className="text-slate-500 text-sm mt-2">依地區或體驗主題，找到屬於你的沖繩旅行</p>
            </div>
          </AnimateOnView>

          {/* 検索窓（キーワード＋カテゴリ絞り込み） */}
          <AnimateOnView from="bottom">
            <div className="mb-12">
              <PostSearch posts={posts} />
            </div>
          </AnimateOnView>

          {/* イラスト風クリッカブルマップ */}
          <AnimateOnView from="bottom">
            <div className="mb-12">
              <OkinawaMap />
            </div>
          </AnimateOnView>

          {/* 体験テーマ */}
          <AnimateOnView from="bottom">
            <h3 className="font-bold text-slate-700 text-sm mb-4">依體驗主題搜尋</h3>
            <div className="flex flex-wrap gap-2.5">
              {themes.map((theme) => (
                <Link key={theme.label} href={theme.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                  style={{ background: "#F0F9F8", color: "#00796B", border: "1px solid #B2DFDB" }}>
                  <span>{theme.emoji}</span>
                  {theme.label}
                </Link>
              ))}
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ═══ 第5層: UGCエリア ═══ */}
      <section className="py-20" style={{ background: "#F4F8F9" }}>
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnView from="bottom">
            <div className="mb-10">
              <p className="section-eyebrow mb-2">COMMUNITY</p>
              <h2 className="section-heading">旅人<em>推薦</em></h2>
              <p className="text-slate-500 text-sm mt-2">來自台灣旅客的真實體驗與影片分享</p>
            </div>
          </AnimateOnView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {youtubeVideos.map((v, i) => (
              <AnimateOnView key={v.title} delay={i * 100} from="bottom">
                <div className="rounded-2xl overflow-hidden bg-white"
                  style={{ border: "1px solid #EEF2F5", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                  <div className="w-full aspect-video flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg,#1A1A2E,#16213E)" }}>
                    <div className="text-center">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3"
                        style={{ background: "#FF0000" }}>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="white">
                          <path d="M8 6l9 5-9 5V6z"/>
                        </svg>
                      </div>
                      <p className="text-xs text-white/50">請設定YouTube網址</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-bold mb-1" style={{ color: "#00A896" }}>{v.channel}</p>
                    <p className="font-semibold text-slate-800 text-sm">{v.title}</p>
                  </div>
                </div>
              </AnimateOnView>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* SNSタイムライン */}
            <AnimateOnView from="bottom" className="md:col-span-3">
              <div className="rounded-2xl p-6 md:p-7 bg-white h-full"
                style={{ border: "1px solid #EEF2F5" }}>
                <h3 className="font-bold text-slate-800 text-base mb-5">📱 小編即時分享</h3>
                <div className="space-y-5">
                  {snsTimeline.map((post) => (
                    <div key={post.text} className="flex gap-3.5">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black text-white"
                          style={{ background: "linear-gradient(135deg,#00796B,#00A896)" }}>
                          妙
                        </div>
                        <div className="w-px flex-1 mt-2" style={{ background: "#E2EDF0" }} />
                      </div>
                      <div className="pb-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-bold text-slate-800">妙遊沖繩小編</span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{ background: "#F0F9F8", color: "#00796B" }}>
                            {post.emoji} {post.time}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed mb-1.5">{post.text}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {post.tags.map((tag) => (
                            <span key={tag} className="text-xs font-semibold" style={{ color: "#00A896" }}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnView>

            {/* KOLブログ枠 + Instagram誘導 */}
            <div className="md:col-span-2 flex flex-col gap-6">
              <AnimateOnView from="bottom">
                <div className="rounded-2xl p-6 text-center"
                  style={{ background: "#fff", border: "1.5px dashed #C9DDE2" }}>
                  <div className="text-3xl mb-2">✍️</div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1.5">台灣旅遊達人專欄</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">
                    台灣KOL的沖繩遊記與影片，正在合作洽談中
                  </p>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                    style={{ background: "#FFF4E0", color: "#A16207", border: "1px solid #F3D9A4" }}>
                    🔜 即將推出
                  </span>
                </div>
              </AnimateOnView>

              <AnimateOnView from="bottom">
                <div className="p-6 rounded-2xl text-center flex-1"
                  style={{ background: "#fff", border: "1.5px solid #E0F7F4" }}>
                  <p className="text-slate-600 text-sm mb-4">
                    在Instagram分享你的沖繩回憶，使用標籤&nbsp;
                    <strong style={{ color: "#00A896" }}>#妙遊沖繩</strong>
                  </p>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:brightness-110"
                    style={{ background: "linear-gradient(135deg,#F58529,#DD2A7B,#8134AF)", color: "#fff" }}>
                    前往Instagram
                  </a>
                </div>
              </AnimateOnView>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 第6層: 実用ガイド ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnView from="bottom">
            <div className="mb-10">
              <p className="section-eyebrow mb-2">TRAVEL GUIDE</p>
              <h2 className="section-heading">實用<em>指南</em></h2>
              <p className="text-slate-500 text-sm mt-2">台灣人赴沖繩必知的旅行實用知識</p>
            </div>
          </AnimateOnView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {guides.map((g, i) => (
              <AnimateOnView key={g.title} delay={i * 80} from="bottom">
                <div className="p-6 rounded-2xl h-full"
                  style={{ background: "#F4F8F9", border: "1px solid #E0EDF0" }}>
                  <div className="text-2xl mb-3">{g.emoji}</div>
                  <h3 className="font-bold text-slate-800 text-base mb-3">{g.title}</h3>
                  <ul className="space-y-2">
                    {g.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#00A896" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnView>
            ))}
          </div>

          {/* レンタカー手続き4ステップ */}
          <AnimateOnView from="bottom">
            <div className="rounded-2xl p-6 md:p-8 mb-10"
              style={{ background: "linear-gradient(135deg,#0D2B3E 0%,#14384F 100%)" }}>
              <h3 className="font-bold text-white text-lg mb-1">🚗 台灣人租車自駕 4步驟</h3>
              <p className="text-sm mb-6" style={{ color: "#8AA8B5" }}>
                不需要國際駕照！只要台灣駕照＋日文譯本就能在沖繩租車
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {rentalSteps.map((s, i) => (
                  <div key={s.step} className="relative rounded-xl p-5"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
                        style={{ background: "#00A896", color: "#fff" }}>
                        {s.step}
                      </span>
                      <span className="text-2xl">{s.emoji}</span>
                    </div>
                    <h4 className="font-bold text-white text-sm mb-1.5 leading-snug">{s.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: "#8AA8B5" }}>{s.desc}</p>
                    {i < rentalSteps.length - 1 && (
                      <span className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-sm"
                        style={{ color: "#3E5A68" }}>→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnView>

          <AnimateOnView from="bottom">
            <PackingSimulator />
          </AnimateOnView>
        </div>
      </section>
    </>
  );
}
