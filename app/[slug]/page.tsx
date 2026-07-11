import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { marked } from "marked";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

const categoryLabels: Record<string, string> = {
  sightseeing: "景點介紹",
  food: "美食推薦",
  transport: "交通攻略",
  shopping: "購物指南",
  hotel: "住宿推薦",
  tips: "實用資訊",
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = await marked(post.content);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* パンくずリスト */}
      <nav className="text-sm text-slate-500 mb-6 flex items-center gap-1.5">
        <Link href="/" className="hover:text-[#0077B6]">首頁</Link>
        <span>›</span>
        <Link href={`/category/${post.category}`} className="hover:text-[#0077B6]">
          {categoryLabels[post.category] ?? post.category}
        </Link>
        <span>›</span>
        <span className="text-slate-700 truncate max-w-xs">{post.title}</span>
      </nav>

      {/* ヒーロー画像 */}
      {post.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={post.image} alt={post.title}
          className="w-full h-72 object-cover rounded-2xl mb-8" />
      )}

      {/* ヘッダー */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold px-3 py-1 rounded-full"
            style={{ background: "#E0F7F4", color: "#00796B" }}>
            {categoryLabels[post.category] ?? post.category}
          </span>
          <span className="text-sm text-slate-400">{post.date}</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-slate-600 text-base leading-[1.8] border-l-4 border-[#00A896] pl-4 bg-[#F0FDFB] py-3 pr-4 rounded-r-lg">
          {post.excerpt}
        </p>
      </header>

      {/* 記事本文 */}
      <article
        className="prose-okinawa"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* タグ */}
      {post.tags.length > 0 && (
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 bg-slate-100 text-slate-600 rounded-full"
            >
              # {tag}
            </span>
          ))}
        </div>
      )}

      {/* 戻るボタン */}
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#0077B6] hover:underline"
        >
          ← 返回首頁
        </Link>
      </div>
    </div>
  );
}
