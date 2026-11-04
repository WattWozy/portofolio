import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { title } from "@/components/primitives";

const CONTENT_PATH = path.join(process.cwd(), "content/projects");

function parseMarkdown(fileContent: string) {
  const parts = fileContent.split("---");

  if (parts.length < 3) {
    return { data: {}, content: fileContent };
  }

  const data: Record<string, string> = {};

  parts[1].trim().split("\n").forEach((line) => {
    const [key, ...valParts] = line.split(":");

    if (key && valParts.length) {
      data[key.trim()] = valParts
        .join(":")
        .trim()
        .replace(/^["'](.*)["']$/, "$1");
    }
  });

  return {
    data,
    content: parts.slice(2).join("---").trim(),
  };
}

export async function generateStaticParams() {
  if (!fs.existsSync(CONTENT_PATH)) return [];

  return fs
    .readdirSync(CONTENT_PATH)
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      projectId: file.replace(/\.md$/, ""),
    }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;

  // Prevent directory traversal
  if (!/^[a-zA-Z0-9_-]+$/.test(projectId)) {
    notFound();
  }

  const filePath = path.join(CONTENT_PATH, `${projectId}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const { data, content } = parseMarkdown(
    fs.readFileSync(filePath, "utf8")
  );

  return (
    <article className="p-6 max-w-4xl mx-auto text-left">
      <h1 className={title({ color: "violet", size: "lg", fullWidth: true })}>
        {data.title || projectId}
      </h1>

      <br />
      <br />
      <br />

      {/* Project Links */}
      <div className="flex gap-4 mb-8 text-sm">
        {data.github && (
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-400 hover:underline"
          >
            GitHub Repository →
          </a>
        )}

        {data.demo && (
          <a
            href={data.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            Live Demo →
          </a>
        )}
      </div>

      <div className="prose dark:prose-invert max-w-none leading-relaxed text-justify">
        <ReactMarkdown
          components={{
            h1: ({ node, children, ...props }) => (
                <h1 className="text-3xl font-bold mt-8 mb-4 text-violet-500" {...props}>
                    {children}
                </h1>
            ),

            h2: ({ node, children, ...props }) => (
              <h2
                className="text-2xl font-semibold mt-6 mb-3 text-cyan-500"
                {...props}>
                    {children}
            </h2>
              
            ),

            p: ({ node, ...props }) => (
              <p className="mb-4 leading-relaxed" {...props} />
            ),

            img: ({ node, ...props }) => (
              <img
                className="rounded-lg shadow-md my-6 mx-auto border border-gray-800"
                {...props}
                alt={props.alt || "Project image"}
              />
            ),

            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");

              // Only use SyntaxHighlighter for fenced code blocks.
              if (match) {
                // Don't forward HTML attributes/ref to SyntaxHighlighter.
                const { ref, ...rest } = props;

                return (
                  <SyntaxHighlighter
                    style={oneDark as any}
                    language={match[1]}
                    PreTag="div"
                    {...rest}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                );
              }

              return (
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