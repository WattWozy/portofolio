import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import type { CSSProperties } from "react";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { title } from "@/components/primitives";

const CONTENT_PATH = path.join(process.cwd(), "content/blog");
const syntaxTheme = oneDark as { [key: string]: CSSProperties };

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

export async function generateStaticParams() {
  if (!fs.existsSync(CONTENT_PATH)) return [];
  return fs.readdirSync(CONTENT_PATH)
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({ blogId: file.replace(/\.md$/, "") }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const filePath = path.join(CONTENT_PATH, `${blogId}.md`);

  if (!fs.existsSync(filePath)) notFound();

  const { data, content } = parseMarkdown(fs.readFileSync(filePath, "utf8"));

  return (
    <article className="p-6 max-w-4xl mx-auto">
      <h1 className={title({ color: "violet", size: "lg", fullWidth: true })}>
        {data.title || blogId}
      </h1>
      <br /><br /><br />
      {data.timestamp && (
        <p className="text-sm text-gray-500 mt-2 mb-8">
          Published on: {new Date(data.timestamp).toLocaleDateString()}
        </p>
      )}

      {/* Render formatted markdown with syntax highlighting */}
      <div className="prose dark:prose-invert max-w-none leading-relaxed text-justify">
        <ReactMarkdown
          components={{
            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  style={syntaxTheme}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
}