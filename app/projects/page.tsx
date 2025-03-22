import { Card, CardBody } from "@heroui/card";

export default function DocsPage() {
  const cards = [
    {
      title: "Django Stock Market Analysis Application",
      content: "Python Django framework application for stock market analysis.",
      link: "https://example.com",
    },
    {
      title: "Spring boot queuing system",
      content:
        "Spring boot java backend handling a simple ticketing/queuing system. React on the frontend.",
      link: "https://example.com",
    },
    {
      title: "Nextjs AWS deployment on Amplify",
      content: "Personal site built on Nextjs deployed on AWS Amplify.",
      link: "https://example.com",
    },
    {
      title: "Nextjs OCR project from scratch",
      content:
        "Project built in React, Nextjs, Python processing engine and an Appwrite backend.",
      link: "https://example.com",
    },
  ];

  return (
    <div>
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
