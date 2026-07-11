import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import AnimateOnView from "@/components/AnimateOnView";
import {
  IconPlane, IconWave, IconSun,
  IconCamera, IconCutlery, IconBus, IconShoppingBag, IconHotel, IconInfo,
  IconCastle, IconBowl, IconArrow,
} from "@/components/Icon";
import Link from "next/link";

const categories = [
  { slug: "sightseeing", Icon: IconCamera,      label: "景點介紹", desc: "海灘、城跡、自然景觀",  img: "/images/tran-chura.jpg",      imgClass: "img-ocean",  span: true },
  { slug: "food",        Icon: IconCutlery,     label: "美食推薦", desc: "沖繩拉麵、泡盛、在地料理", img: "/images/cat-food.jpg",        imgClass: "img-food"              },
  { slug: "transport",   Icon: IconBus,         label: "交通攻略", desc: "單軌、巴士、租車攻略",   img: "/images/cat-transport.jpg",   imgClass: "img-nature"            },
  { slug: "shopping",    Icon: IconShoppingBag, label: "購物指南", desc: "國際通、免稅、伴手禮",   img: "/images/cat-shopping.jpg",    imgClass: "img-night"             },
  { slug: "hotel",       Icon: IconHotel,       label: "住宿推薦", desc: "度假村、民宿、商務旅館",  img: "/images/cat-hotel.jpg",       imgClass: "img-sunset"            },
  { slug: "tips",        Icon: IconInfo,        label: "實用資訊", desc: "禮儀、換錢、SIM卡",      img: "/images/hospital.jpg",        imgClass: "img-city"              },
];

const highlights = [
  { Icon: IconPlane, stat: "1.5h",   title: "直飛即達",   desc: "從台北、高雄直達那霸，是台灣人最近的境外南島天堂" },
  { Icon: IconWave,  stat: "Top 3",  title: "世界級海洋", desc: "珊瑚礁覆蓋率極高，海水透明度名列全球前茅"         },
  { Icon: IconSun,   stat: "365日",  title: "全年皆宜",   desc: "亞熱帶氣候溫暖宜人，秋冬也是逃離台灣寒流的首選"  },
];

const whyOkinawa = [
  { Icon: IconWave,   text: "清澈見底的珊瑚礁海洋，世界頂級浮潛聖地" },
  { Icon: IconCastle, text: "琉球王國獨特的歷史文化遺產" },
  { Icon: IconBowl,   text: "沖繩拉麵、泡盛、海葡萄等珍貴在地美食" },
  { Icon: IconPlane,  text: "從台灣直飛1.5小時，無需長途跋涉" },
];

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero.jpg" alt="沖繩的海"
          className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 35%, rgba(5,18,30,0.78) 100%)" }} />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20 pt-40">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ background: "rgba(0,168,150,0.22)", color: "#64D8CB", border: "1px solid rgba(100,216,203,0.3)" }}>
              在地生活日本人親身帶路
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-5 leading-[1.05] tracking-tight">
              發現<br />
              <span style={{ background: "linear-gradient(90deg,#64D8CB 0%,#ADE8F4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                沖繩之美
              </span>
            </h1>
            <p className="text-base md:text-lg text-white/75 mb-9 leading-relaxed max-w-lg">
              從景點、美食到交通攻略，由台灣人視角精心整理的完整旅遊指南。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/category/sightseeing"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold shadow-lg transition-all duration-200 hover:brightness-110"
                style={{ background: "#00A896", color: "#fff" }}>
                開始探索 <IconArrow size={15} color="#fff" />
              </Link>
              <Link href="/category/transport"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-white/20"
                style={{ border: "1.5px solid rgba(255,255,255,0.45)", color: "#fff", backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.08)" }}>
                交通攻略
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg viewBox="0 0 1440 72" fill="none" preserveAspectRatio="none" style={{ display: "block" }}>
            <path d="M0,48 C360,12 1080,72 1440,36 L1440,72 L0,72 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════ HIGHLIGHTS ═══════════════════════ */}
      <section className="bg-white pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map(({ Icon, stat, title, desc }, i) => (
              <AnimateOnView key={title} delay={i * 130} from="bottom">
                <div className="group flex flex-col gap-5 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg"
                  style={{ border: "1.5px solid #D8F0ED", background: "#FAFFFE" }}>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(135deg,#00A896,#64D8CB)" }}>
                      <Icon size={20} color="#fff" />
                    </div>
                    <span className="text-3xl font-black" style={{ color: "#00A896" }}>{stat}</span>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-base mb-1.5">{title}</div>
                    <div className="text-sm text-slate-600 leading-relaxed">{desc}</div>
                  </div>
                  <div className="w-8 h-0.5 rounded-full transition-all duration-300 group-hover:w-14"
                    style={{ background: "#00A896" }} />
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CATEGORIES ═══════════════════════ */}
      <section className="py-24" style={{ background: "#F4F8F9" }}>
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnView from="bottom">
            <div className="mb-12">
              <p className="section-eyebrow mb-2">EXPLORE</p>
              <h2 className="section-heading">旅遊<em>分類</em></h2>
              <p className="text-slate-500 mt-3 text-sm max-w-md">
                從海灘到美食，從交通到購物，找到屬於你的沖繩旅行主題
              </p>
            </div>
          </AnimateOnView>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map(({ slug, Icon, label, desc, img, imgClass, span }, i) => (
              <AnimateOnView key={slug} delay={i * 70} from="bottom"
                className={span ? "md:row-span-2" : ""}>
                <Link href={`/category/${slug}`}
                  className={`cat-card relative overflow-hidden rounded-2xl block h-full ${span ? "min-h-[400px]" : "min-h-[180px]"}`}>
                  {img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={img} alt={label} className="cat-card-img absolute inset-0 w-full h-full object-cover" />
                  ) : (
                    <div className={`cat-card-img absolute inset-0 ${imgClass}`} />
                  )}
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top,rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.25) 50%,rgba(0,0,0,0.04) 100%)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-3">
                    <div>
                      <div className="mb-2 opacity-80">
                        <Icon size={18} color="rgba(255,255,255,0.9)" />
                      </div>
                      <div className="text-white font-bold text-base leading-tight"
                        style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>{label}</div>
                      <div className="text-white/85 text-xs mt-0.5"
                        style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>{desc}</div>
                    </div>
                    <div className="cat-card-arrow w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(0,168,150,0.9)" }}>
                      <IconArrow size={15} color="#fff" />
                    </div>
                  </div>
                </Link>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ ARTICLES ═══════════════════════ */}
      {posts.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateOnView from="bottom">
              <div className="mb-12">
                <p className="section-eyebrow mb-2">LATEST</p>
                <h2 className="section-heading">最新<em>文章</em></h2>
              </div>
            </AnimateOnView>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {posts.map((post, i) => (
                <AnimateOnView key={post.slug} delay={i * 110} from="bottom">
                  <PostCard post={post} />
                </AnimateOnView>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════ WHY OKINAWA ═══════════════════════ */}
      <section className="py-24" style={{ background: "#F4F8F9" }}>
        <div className="max-w-6xl mx-auto px-6">
          {/* className="contents" を廃止。代わりに親ごとアニメート */}
          <AnimateOnView from="bottom">
            <div className="rounded-3xl overflow-hidden grid md:grid-cols-2 shadow-xl">
              {/* 左：画像 */}
              <div className="relative min-h-72 md:min-h-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/why-okinawa.jpg" alt="沖繩風景"
                  className="absolute inset-0 w-full h-full object-cover" />
              </div>

              {/* 右：テキスト */}
              <div className="p-10 md:p-14 flex flex-col justify-center"
                style={{ background: "#0D2B3E" }}>
                <p className="section-eyebrow mb-3" style={{ color: "#64D8CB" }}>WHY OKINAWA?</p>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-7 leading-tight">
                  為什麼台灣人<br />要去沖繩？
                </h3>
                <ul className="space-y-4 mb-9">
                  {whyOkinawa.map(({ Icon, text }) => (
                    <li key={text} className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "rgba(100,216,203,0.2)" }}>
                        <Icon size={16} color="#64D8CB" />
                      </div>
                      <span className="text-white/90 text-sm leading-relaxed pt-1">{text}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/why-okinawa"
                  className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 hover:brightness-110"
                  style={{ background: "#00A896", color: "#fff" }}>
                  了解更多 <IconArrow size={14} color="#fff" />
                </Link>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ═══════════════════════ CTA STRIP ═══════════════════════ */}
      <AnimateOnView from="fade">
        <section className="py-24 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg,#004D40 0%,#00796B 40%,#00A896 100%)" }}>
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "radial-gradient(circle,white 1.5px,transparent 1.5px)", backgroundSize: "36px 36px" }} />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <p className="section-eyebrow mb-4" style={{ color: "#A7F3E8" }}>PLAN YOUR TRIP</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              準備好前往沖繩了嗎？
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-10">
              從出發前的交通準備，到抵達後的景點規劃，我們提供最完整的沖繩旅遊資訊。
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/category/sightseeing"
                className="px-8 py-4 rounded-full text-sm font-bold shadow-lg transition-all duration-200 hover:scale-105"
                style={{ background: "#fff", color: "#00796B" }}>
                探索景點
              </Link>
              <Link href="/category/transport"
                className="px-8 py-4 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-white/15"
                style={{ border: "1.5px solid rgba(255,255,255,0.45)", color: "#fff", background: "rgba(255,255,255,0.08)" }}>
                交通攻略
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnView>
    </>
  );
}
