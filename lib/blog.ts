import { readMarkdownDir } from "@/lib/markdown";

export type BlogPost = {
  id: string;
  title: string;
  summary: string;
  timestamp: string;
  status: string;
  link: string;
};

export function getPosts(): BlogPost[] {
  return readMarkdownDir("content/blog")
    .map(({ id, data }) => ({
      id,
      title: data.title || id,
      summary: data.summary || "Summary coming soon.",
      timestamp: data.timestamp || new Date().toISOString(),
      status: data.status || "PUBLISHED. ✅",
      link: `/blog/${id}`,
    }))
    .sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
    );
}

export const isPublished = (p: BlogPost) =>
  !p.status.toUpperCase().startsWith("PENDING");
