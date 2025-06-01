"use client";

import { Card } from "@heroui/card";
import { Divider } from "@heroui/divider";

import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className={title({ color: "green", size: "lg", fullWidth: true })}>
        About:{" "}
      </h1>
      <br />
      <br />
      <br />
      <div className="space-y-4 mt-6">
        <Card className="py-4">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Who am I?</h2>
            <Divider />
            <p className="mt-2">
              {
                "I'm Niklas, Nik, Nicke... however you prefer. I was born in 2002 and raised in Spain, with Swedish roots."
              }
            </p>
          </div>
        </Card>

        <Card className={"py-4"}>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">What am I doing?</h2>
            <Divider />
            <p className="mt-2">
              {
                "I am currently working as a Java Fullstack Developer at TietoEvry Banking, at its Stockholm office. I am especially acquainted with working with loan products."
              }
            </p>
          </div>
        </Card>

        <Card className={"py-4"}>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Hobbies</h2>
            <Divider />
            <div className="mt-2 space-y-2">
              <p>{"⚽ Watching Soccer (¡Vamos Real, Hasta el Final!)"}</p>
              <p>{"🏃 Running (Striving for a <5.00 min/km pace)"}</p>
              <p>{"🤓 Coding (and messing around, I guess!)"}</p>
              <p>{"📖 Reading (far beyond docs and math proofs!)"}</p>
              <p>{"❤️ Hanging out with friends and family"}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
