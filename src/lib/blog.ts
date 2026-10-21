import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

/** Published posts, newest first. Drafts are visible only in `astro dev`. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection("blog", ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Rough reading time in minutes (Turkish prose, ~200 wpm). */
export function readingTime(markdown: string | undefined): number {
  const words = (markdown ?? "").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" });

/** Posts sharing at least one tag with `post`, most recent first. */
export function relatedPosts(post: BlogPost, all: BlogPost[], limit = 2): BlogPost[] {
  const tags = new Set(post.data.tags);
  const others = all.filter((p) => p.id !== post.id);
  const scored = others
    .map((p) => ({ p, score: p.data.tags.filter((t) => tags.has(t)).length }))
    .sort((a, b) => b.score - a.score || b.p.data.pubDate.valueOf() - a.p.data.pubDate.valueOf());
  return scored.slice(0, limit).map((s) => s.p);
}
