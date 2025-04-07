import { entries } from "./entries";

import { title, subtitle } from "@/components/primitives";

export default async function Page({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  // Extract blogId from params
  const { blogId } = await params;

  // Find the corresponding blog post by ID
  const entry = entries.find((entry) => entry.id === blogId);

  if (!entry) {
    return <div>Post not found. {blogId}</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Render title */}
      <h1 className={title({ color: "violet", size: "lg", fullWidth: true })}>
        {entry.title}
      </h1>

      {/* Render timestamp */}
      <p className="text-sm text-gray-500 mt-2">
        Published on: {new Date(entry.timestamp).toLocaleDateString()}
      </p>

      {/* Render headers and paragraphs */}
      {entry.headers.map((header, index) => (
        <div key={index} className="mt-6">
          <h2 className={subtitle()}>{header}</h2>
          <p className="text-base text-gray-600">
            {entry.paragraphs[index] || "Content not provided."}
          </p>
        </div>
      ))}
    </div>
  );
}
