"use client";

import { Card } from "@heroui/card";
import { Divider } from "@heroui/divider";

import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 text-left">
      <h1 className={title({ color: "green", size: "lg", fullWidth: true })}>
        About:{" "}
      </h1>
      <br />
      <br />
      <br />
      <div className="space-y-4 mt-6">
        <Card className="py-4">
          <div className="p-4 text-left">
            <h2 className="text-xl font-bold mb-2">Who am I?</h2>
            <Divider />
            <p className="mt-2 text-gray-800 dark:text-gray-300">
              {
                "I'm a Mid Java Software Engineer specializing in backend systems, test-driven-development, and clean architecture"
              }
            </p>
          </div>
        </Card>

        <Card className={"py-4"}>
          <div className="p-4 text-left">
            <h2 className="text-xl font-bold mb-2">What am I doing?</h2>
            <Divider />
            <p className="mt-2 text-gray-800 dark:text-gray-300">
              {
                "I am currently searching for an interesting opportunity where I can contribute building long-term solutions and continue learning alongside my colleagues"
              }
            </p>
          </div>
        </Card>

        <Card className={"py-4"}>
          <div className="p-4 text-left">
            <h2 className="text-xl font-bold mb-2">Tech stack</h2>
            <Divider />
            <div className="mt-2 space-y-2 text-gray-800 dark:text-gray-300">
              <p>{"Languages: "}</p>
              <p>{"Java, Elixir, Clojure, SQL, TypeScript, Python, C"}</p>
              <Divider />
              <p>{"Frameworks: "}</p>
              <p>
                {"Spring Boot, Next.js, React, Angular, Django, LangChain4j"}
              </p>
              <Divider />
              <p>{"Data & messaging: "}</p>
              <p>
                {"PostgreSQL, MongoDB, Datomic, Supabase, vector databases"}
              </p>
              <Divider />
              <p>{"Tools: "}</p>
              <p>
                {
                  "Docker, Kubernetes, Git, Dagger, Postman, Grafana, Claude Code"
                }
              </p>
              <Divider />
              <p>{"Cloud: "}</p>
              <p>{"AWS (Amplify, S3, Lambda), Vercel, Railway"}</p>
              <Divider />
              <p>{"Practices: "}</p>
              <p>
                {
                  "Clean/hexagonal architecture, TDD, microservices, AI-assisted coding"
                }
              </p>
            </div>
          </div>
        </Card>

        <Card className={"py-4"}>
          <div className="p-4 text-left">
            <h2 className="text-xl font-bold mb-2">Hobbies</h2>
            <Divider />
            <div className="mt-2 space-y-2 text-gray-800 dark:text-gray-300">
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