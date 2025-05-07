import { Card, CardBody } from "@heroui/card";

import { title } from "@/components/primitives";

export default function DocsPage() {
  const cards = [
    {
      title: "Building an iOS app from scratch",
      content:
        "Simple, lovable, and complete iOS app, aiming to help users track their private economy. (Soon to arrive)",
      link: "https://example.com",
    },
    {
      title: "LLM chatbot orchestration: models, scrapers and containers",
      content:
        "Scraping enormous websites, loading them into a vector database, and using LLMs to chat with the data. (Soon to arrive)",
      link: "https://example.com",
    },
    {
      title: "AWS-hosted portfolio: amplify, s3, and lambda",
      content:
        "The process of building the site you are currently on. (Soon to arrive)",
      link: "/",
    },
    {
      title: "Django Stock Market Analysis Application",
      content:
        "Python Django framework application for stock market analysis. (Soon to arrive)",
      link: "https://example.com",
    },
    {
      title: "Spring boot queuing system",
      content:
        "Spring Boot Java backend handling a simple ticketing/queuing system. React on the frontend. (Soon to arrive)",
      link: "https://example.com",
    },
    {
      title: "Nextjs OCR project from scratch",
      content:
        "Project built in React, Next.js, Python processing engine, and an Appwrite backend.",
      link: "https://example.com",
    },
  ];

  return (
    <div>
      <h1 className={title({ color: "violet", size: "lg", fullWidth: true })}>
        Projects:{" "}
      </h1>
      <br />
      <br />
      <br />
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full h-full">
        {cards.map((card, index) => (
          <Card key={index} className="max-w-md w-full">
            <CardBody>
              <h2 className="text-xl font-bold">{card.title}</h2>
              <p className="mt-2">{card.content}</p>
            </CardBody>
          </Card>
        ))}
      </section>
    </div>
  );
}
