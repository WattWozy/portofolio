import { Card, CardBody } from "@heroui/card";
import Link from "next/link";

import { title } from "@/components/primitives";

export default function BlogPage() {
  const cards = [
    {
      title: "Building a second brain: a new purpose.",
      content:
        "Having almost finisher with my basic web-portfolio, I bumped into this book. (I am reading it now 📖)",
      link: "/blog/seventhEntry",
    },
    {
      title: "GIT: the information manager from hell",
      content: "GIT, its history, and some basic concepts.(I'm on it 🚀)",
      link: "/blog/sixthEntry",
    },
    {
      title:
        "Teaching a computer to learn: A summary of Nielsen's book about Machine Leaning and Deep Neural Networks.",
      content: "Summary of this great read.(Soon to arrive 📅)",
      link: "/blog/fifthEntry",
    },
    {
      title: "Code Obfuscation: meaning, techniques and tools",
      content:
        "Obfuscation's goals and mechanisms. A brief introduction.",
      link: "/blog/fourthEntry",
    },
    {
      title: "A brief introduction to DEVOPS.",
      content:
        "From commit and pushing to the right branches, through code review and deployment.",
      link: "/blog/thirdEntry",
    },
    {
      title:
        "Building a Langchain4j chatbot agent for banking customer service.",
      content:
        "Project done internally together with other 15 co-workers. I describe the general architecutre of the service, the technologies  and the teamwork experience.",
      link: "/blog/secondEntry",
    },
    {
      title: "Working experience first year: A brief summary.",
      content:
        "In this blog post I cover the first impressions of starting an amazing journey at a huge fintech company.",
      link: "/blog/firstEntry",
    },
  ];

  return (
    <div>
      <h1 className={title({ color: "cyan", size: "lg", fullWidth: true })}>
        Blog:{" "}
      </h1>
      <br />
      <br />
      <br />
      <div className="flex flex-col items-center justify-center gap-6 py-10">
        {cards.map((card, index) => (
          <Link key={index} className="w-full max-w-md" href={card.link}>
            <Card className="cursor-pointer hover:shadow-lg transition">
              <CardBody>
                <h2 className="text-xl font-bold">{card.title}</h2>
                <p className="mt-2 text-gray-600">{card.content}</p>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
