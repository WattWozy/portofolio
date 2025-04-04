import { Card, CardBody } from "@heroui/card";
import Link from "next/link";

export default function BlogPage() {
  const cards = [
    {
      title: "GIT: the information manager from hell",
      content: "GIT, its history, and some basic concepts.(I'm on it 🚀)",
      link: "https://example.com",
    },
    {
      title:
        "Teaching a computer to learn: A summary of Nielsen's book about Machine Leaning and Deep Neural Networks.",
      content: "Summary of this great read.(Soon to arrive 📅)",
      link: "https://example.com",
    },
    {
      title: "Code obfuscation: meaning, process and an example.",
      content:
        "Obfuscation's goals and mechanisms. Implementation of a POC with some common tools (Processing the blog post...🙏)",
      link: "https://example.com",
    },
    {
      title: "A brief introduction to DEVOPS.",
      content:
        "From commit and pushing to the right branches, through code review and deployment (Editing the story 😅)",
      link: "/blog/thirdEntry",
    },
    {
      title:
        "Building a Langchain4j chatbot agent for banking customer service.",
      content:
        "Project done internally together with other 15 co-workers. I describe the general architecutre of the service, the technologies  and the teamwork experience. (Website under construction 🤔)",
      link: "/blog/secondEntry",
    },
    {
      title: "Working experience first year: A brief summary.",
      content:
        "In this blog post I cover the first impressions of starting an amazing journey at a huge fintech company. (Click still not available ⏰)",
      link: "/blog/firstEntry",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10">
      {cards.map((card, index) => (
        <Link key={index} href={card.link} className="w-full max-w-md">
          <Card className="cursor-pointer hover:shadow-lg transition">
            <CardBody>
              <h2 className="text-xl font-bold">{card.title}</h2>
              <p className="mt-2 text-gray-600">{card.content}</p>
            </CardBody>
          </Card>
        </Link>
      ))}
    </div>
  );
}
