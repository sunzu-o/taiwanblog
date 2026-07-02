import { getPostsByCategory } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

type Props = { params: Promise<{ category: string }> };

const categoryMeta: Record<string, { label: string; emoji: string; desc: string }> = {
  sightseeing: { label: "景點介紹", emoji: "🏖️", desc: "沖繩必訪景點完整介紹" },
  food: { label: "美食推薦", emoji: "🍜", desc: "沖繩在地美食與餐廳指南" },
  transport: { label: "交通攻略", emoji: "🚌", desc: "沖繩交通方式完整攻略" },
  shopping: { label: "購物指南", emoji: "🛍️", desc: "沖繩購物、伴手禮推薦" },
  hotel: { label: "住宿推薦", emoji: "🏨", desc: "沖繩各類型住宿評介" },
  tips: { label: "實用資訊", emoji: "💡", desc: "赴沖繩旅遊必知的實用知識" },
};

const validCategories = Object.keys(categoryMeta);

export async function generateStaticParams() {
  return validCategories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const meta = categoryMeta[category];
  if (!meta) return {};
  return {
    title: meta.label,
    description: meta.desc,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const meta = categoryMeta[category];
  if (!meta) notFound();

  const posts = getPostsByCategory(category);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* パンくずリスト */}
      <nav className="text-sm text-slate-500 mb-6 flex items-center gap-1.5">
        <Link href="/" className="hover:text-[#0077B6]">首頁</Link>
        <span>›</span>
        <span className="text-slate-700">{meta.label}</span>
      </nav>

      {/* カテゴリヘッダー */}
      <header className="mb-10 flex items-center gap-4">
        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl">
          {meta.emoji}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{meta.label}</h1>
          <p className="text-slate-500 mt-1">{meta.desc}</p>
        </div>
      </header>

      {/* 記事一覧 */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-slate-400">
          <div className="text-5xl mb-4">{meta.emoji}</div>
          <p className="text-base">此分類目前還沒有文章，敬請期待！</p>
          <Link href="/" className="mt-6 inline-block text-sm text-[#0077B6] hover:underline">
            ← 返回首頁
          </Link>
        </div>
      )}
    </div>
  );
}
