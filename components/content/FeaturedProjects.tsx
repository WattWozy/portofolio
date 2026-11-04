import NextLink from "next/link";

import { getProjects, isPublished } from "@/lib/projects";

export function FeaturedProjects({ limit = 3 }: { limit?: number }) {
  const projects = getProjects().filter(isPublished).slice(0, limit);

  if (projects.length === 0) return null;

  return (
    <section className="mx-auto max-w-3xl py-16">
      <h2 className="text-2xl font-bold tracking-tight mb-8">
        Featured Projects
      </h2>
      <ul className="space-y-6">
        {projects.map((p) => (
          <li key={p.id}>
            <NextLink className="group block" href={p.link}>
              <time className="text-xs text-default-400">
                {p.timestamp.slice(0, 10)}
              </time>
              <h3 className="font-semibold group-hover:text-primary">
                {p.title}
              </h3>
              <p className="text-sm text-default-500">{p.summary}</p>
            </NextLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
