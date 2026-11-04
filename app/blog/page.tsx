import fs from "fs";
import path from "path";
import { Card, CardBody } from "@heroui/card";
import Link from "next/link";
import { title } from "@/components/primitives";
import { getPosts } from "@/lib/blog";

const CONTENT_PATH = path.join(process.cwd(), "content/blog");

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div>
      <h1 className={title({ color: "cyan", size: "lg", fullWidth: true })}>
        Blog:{" "}
      </h1>
      <br />
      <br />
      <br />
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
