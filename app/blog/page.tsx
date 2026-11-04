import fs from "fs";
import path from "path";
import { Card, CardBody } from "@heroui/card";
import Link from "next/link";
import { title } from "@/components/primitives";

const CONTENT_PATH = path.join(process.cwd(), "content/blog");

function parseMarkdown(fileContent: string) {
  const parts = fileContent.split("---");
  if (parts.length < 3) return { data: {}, content: fileContent };
  
  const data: Record<string, string> = {};
  parts[1].trim().split("\n").forEach((line) => {
    const [key, ...valParts] = line.split(":");
    if (key && valParts.length) {
      data[key.trim()] = valParts.join(":").trim().replace(/^["'](.*)["']$/, "$1");
    }
  });

  return { data, content: parts.slice(2).join("---").trim() };
}

export default function BlogPage() {
  const files = fs.existsSync(CONTENT_PATH) ? fs.readdirSync(CONTENT_PATH) : [];

  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const blogId = file.replace(/\.md$/, "");
      const { data } = parseMarkdown(fs.readFileSync(path.join(CONTENT_PATH, file), "utf8"));

      return {
        id: blogId,
        title: data.title || blogId,
        summary: data.summary || "Summary coming soon.",
        timestamp: data.timestamp || new Date().toISOString(),
        status: data.status || "PUBLISHED. ✅",
        link: `/blog/${blogId}`,
      };
    })
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  return (
    <div>
      <h1 className={title({ color: "cyan", size: "lg", fullWidth: true })}>Blog: </h1>
      <br /><br /><br />
      <div className="flex flex-col items-center justify-center gap-6 py-10 w-full">
        {posts.map((post) => (
          <Link key={post.id} className="w-full max-w-md" href={post.link}>
            <Card className="cursor-pointer hover:shadow-lg transition">
              <CardBody style={{ whiteSpace: "pre-line" }}>
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="mt-2 text-gray-600">
                  {post.summary}
                  {"\n\n"}------------------------------------------{"\n"}
                  {post.status}
                </p>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}