import Link from "next/link";
import { PostMeta } from "@/lib/posts";

const cfg: Record<string, { label: string; dot: string; imgClass: string }> = {
  sightseeing: { label: "景點介紹", dot: "#0077B6", imgClass: "img-ocean"  },
  food:        { label: "美食推薦", dot: "#E8714A", imgClass: "img-food"   },
  transport:   { label: "交通攻略", dot: "#2E7D32", imgClass: "img-nature" },
  shopping:    { label: "購物指南", dot: "#3F51B5", imgClass: "img-night"  },
  hotel:       { label: "住宿推薦", dot: "#E64A19", imgClass: "img-sunset" },
  tips:        { label: "實用資訊", dot: "#00838F", imgClass: "img-city"   },
};

export default function PostCard({ post }: { post: PostMeta }) {
  const c = cfg[post.category] ?? { label: post.category, dot: "#00A896", imgClass: "img-ocean" };

  return (
    <Link href={`/${post.slug}`} className="block group h-full">
      <article className="bg-white rounded-2xl overflow-hidden h-full flex flex-col card-lift"
        style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>

        {/* サムネイル */}
        <div className={`relative h-52 overflow-hidden ${post.image ? "" : c.imgClass}`}>
          {post.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={post.image} alt={post.title}
              className="absolute inset-0 w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>

        {/* テキスト */}
        <div className="p-5 flex flex-col flex-1">
          {/* カテゴリ・日付 */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: c.dot }}
            />
            <span className="text-xs font-bold tracking-wide uppercase"
              style={{ color: c.dot }}>
              {c.label}
            </span>
            <span className="text-xs text-slate-300 mx-0.5">·</span>
            <span className="text-xs text-slate-400">{post.date}</span>
          </div>

          {/* タイトル */}
          <h2 className="font-bold text-slate-900 text-[1.05rem] leading-snug mb-2.5 line-clamp-2
            group-hover:text-[#00796B] transition-colors duration-200">
            {post.title}
          </h2>

          {/* 概要 */}
          <p className="text-sm text-slate-500 leading-relaxed flex-1 line-clamp-3">
            {post.excerpt}
          </p>

          {/* 続きを読む */}
          <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: "#00A896" }}>
            <span>閱讀全文</span>
            <svg className="transition-transform duration-200 group-hover:translate-x-1"
              width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
