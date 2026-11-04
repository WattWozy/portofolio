import fs from "fs";
import path from "path";

export function parseMarkdown(fileContent: string): {
  data: Record<string, string>;
  content: string;
} {
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

export function readMarkdownDir(dir: string) {
  const full = path.join(process.cwd(), dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({
      id: f.replace(/\.md$/, ""),
      ...parseMarkdown(fs.readFileSync(path.join(full, f), "utf8")),
    }));
}
