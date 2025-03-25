"use client";

import { Card } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { title } from "@/components/primitives";

export default function AboutPage() {
  const cardStyles = "hover:bg-grey-50 transition-colors duration-300 ease-in-out transform hover:scale-[1.02] shadow-sm hover:shadow-md";

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className={title()}>About Me</h1>
      
      <div className="space-y-4 mt-6">
        <Card className={cardStyles}>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2 text-green-400">Who am I?</h2>
            <Divider />
            <p className="mt-2">
              {
                "I'm Niklas, Nik, Nicke.. however you prefer. I'm currently 22, born and raised in Spain, with roots in Stockholm."
              }
            </p>
          </div>
        </Card>

        <Card className={cardStyles}>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2 text-green-400">What do I work on?</h2>
            <Divider />
            <p className="mt-2">
              {
                "I am currently working as a Java Fullstack Developer at TietoEvry Banking, at its Stockholm office. I am specially acquainted with working with loan products."
              }
            </p>
          </div>
        </Card>

        <Card className={cardStyles}>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2 text-green-400">Hobbies</h2>
            <Divider />
            <div className="mt-2 space-y-2">
              <p>{"⚽ Watching Soccer (¡Vamos Real, Hasta el Final!)"}</p>
              <p>{"🏃 Running (Striving for a >5.00 min/km pace)"}</p>
              <p>{"🤓 Coding (4nd m3355ing 4r0und 1 gu355!)"}</p>
              <p>{"📖 Reading (far beyond docs and math proofs!)"}</p>
              <p>{"❤️ Hanging out with friends and family"}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}