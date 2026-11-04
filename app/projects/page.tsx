import fs from "fs";
import path from "path";

import { Card, CardBody } from "@heroui/card";
import Link from "next/link";

import { title } from "@/components/primitives";

const CONTENT_PATH = path.join(process.cwd(), "content/projects");

function parseMarkdown(fileContent: string) {
  const parts = fileContent.split("---");

  if (parts.length < 3) return { data: {}, content: fileContent };

  const data: Record<string, string> = {};

  parts[1]
    .trim()
    .split("\n")
    .forEach((line) => {
      const [key, ...valParts] = line.split(":");

      if (key && valParts.length) {
        data[key.trim()] = valParts
          .join(":")
          .trim()
          .replace(/^["'](.*)["']$/, "$1");
      }
    });

  return { data, content: parts.slice(2).join("---").trim() };
}

export default function DocsPage() {
  const files = fs.existsSync(CONTENT_PATH) ? fs.readdirSync(CONTENT_PATH) : [];

  const projects = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const projectId = file.replace(/\.md$/, "");
      const { data } = parseMarkdown(
        fs.readFileSync(path.join(CONTENT_PATH, file), "utf8"),
      );

      return {
        id: projectId,
        title: data.title || projectId,
        summary: data.summary || "Project breakdown coming soon.",
        tech: data.tech || "Full-stack",
        status: data.status || "PUBLISHED. ✅",
        timestamp: data.timestamp || new Date().toISOString(),
        link: `/projects/${projectId}`,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
    );

  return (
    <div>
      <h1 className={title({ color: "violet", size: "lg", fullWidth: true })}>
        Projects:{" "}
      </h1>
      <br />
      <br />
      <br />
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full h-full">
        {projects.map((project) => (
          <Link
            key={project.id}
            className="w-full max-w-md"
            href={project.link}
          >
            <Card className="cursor-pointer hover:shadow-lg transition max-w-md w-full">
              <CardBody style={{ whiteSpace: "pre-line" }}>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  {project.tech && (
                    <span className="text-xs bg-violet-500/10 text-violet-400 px-2 py-1 rounded">
                      {project.tech}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-gray-600">
                  {project.summary}
                  {"\n\n"}------------------------------------------{"\n"}
                  {project.status}
                </p>
              </CardBody>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
}
