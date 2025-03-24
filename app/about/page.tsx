"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";

import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className={title()}>About Me</h1>
      <Accordion className="mt-4">
        <AccordionItem title="Who am I?">
          <p>
            {
              "I'm Niklas, Nik, Nicke.. however you prefer. I'm currently 22, born and raised in Spain, with roots in Stockholm."
            }
          </p>
        </AccordionItem>
        <AccordionItem title="What do I work on?">
          <p>
            {
              "I am currently working as a Java Fullstack Developer at TietoEvry Banking, at its Stockholm office. I am specially acquainted with working with loan products."
            }
          </p>
        </AccordionItem>
        <AccordionItem title="Hobbies">
          <p>{"Watching Soccer (¡Vamos Real, Hasta el Final! ⚽),"}</p>
          <p>{"Running (Striving for a >5.00 min/km pace 🏃), "}</p>
          <p>{"Coding (4nd m3355ing 4r0und 1 gu355! 🤓), "}</p>
          <p>{"Reading (far beyond docs and math proofs! 📖),"}</p>
          <p>{"...and hanging out with friends and family ❤️"}</p>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
