"use client";

import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import TodoTable from "@/components/todoTable";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { VisitLogger } from "@/components/VisitLogger";
import { Todo } from "@/types";

interface Visit {
  id: string;
  timestamp: string;
  ip_address: string;
}

export default function Home() {
  const [visitCount, setVisitCount] = useState<number>(0);
  const [visits, setVisits] = useState<Visit[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedCount, setCompletedCount] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;

    const fetchVisits = async () => {
      try {
        const response = await fetch("/api/visits");
        const { data } = await response.json();

        if (isMounted) {
          setVisits(data);
          setVisitCount(data.length);
        }
      } catch (error) {
        console.error("Failed to fetch visits:", error);
      }
    };

    fetchVisits();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const fetchTodos = async () => {
      try {
        const response = await fetch("/api/todos");
        const { data } = await response.json();

        console.log("Received response:", JSON.stringify(response));

        if (isMounted) {
          setTodos(data);
          setCompletedCount(
            data.filter((todo: Todo) => todo.status === "completed").length,
          );
          setTotalCount(data.length);
        }
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };

    fetchTodos(); // Move this outside the try-catch

    return () => {
      isMounted = false;
    };
  }, []);
  // Get the most recent visits
  const recentVisits = visits
    .sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
    )
    .slice(0, 5); // Show top 5 visits

  // Function to mask IP address
  const maskIP = (ip: string | null | undefined) => {
    if (!ip) return "-";

    // Handle IPv4 addresses
    if (ip.includes(".")) {
      const parts = ip.split(".");

      if (parts.length !== 4) return ip;

      return `${parts[0]}.${parts[1]}.***.***`;
    }

    // Handle IPv6 addresses
    if (ip.includes(":")) {
      // Split into parts, handling both compressed and uncompressed formats
      const parts = ip.split(":");

      // If we have a compressed format (::), we need to handle it differently
      if (ip.includes("::")) {
        const beforeCompression = ip.split("::")[0].split(":").filter(Boolean);
        const afterCompression =
          ip.split("::")[1]?.split(":").filter(Boolean) || [];

        // Get the first two non-empty parts
        const firstTwo = [...beforeCompression, ...afterCompression].slice(
          0,
          2,
        );

        if (firstTwo.length < 2) return ip;

        return `${firstTwo[0]}:${firstTwo[1]}:****`;
      }

      // For uncompressed format
      if (parts.length < 2) return ip;

      return `${parts[0]}:${parts[1]}:****`;
    }

    return ip;
  };

  // Function to format date
  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toISOString().split("T")[0];
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <VisitLogger />
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ size: "lg", fullWidth: false })}>
          <Typewriter
            cursor
            cursorStyle="_"
            delaySpeed={1500}
            deleteSpeed={50}
            loop={true}
            typeSpeed={120}
            words={[
              "Hello", // English
              "Hola", // Spanish
              "Bonjour", // French
              "안녕", // Korean – 안녕
              "Привіт", // Ukrainian – Привіт
              "Hallo", // German
              "Ciao", // Italian
              "नमस्ते", // Hindi – नमस्ते
              "Olá", // Portuguese
              "Terve", // Finnish
              "Hei", // Norwegian
              "Γεια σου", // Greek – Yassou
              "Hej", // Swedish
              "سلام", // Arabic – سلام
              "你好", // Chinese – 你好
              "こんにちは", // Japanese – こんにちは
              "Merhaba", // Turkish
              "Szia", // Hungarian
              "Sawubona", // Zulu
            ]}
          />
        </span>
        <span
          className={title({ color: "green", size: "lg", fullWidth: false })}
        >
          World!
        </span>
        <br />
        <br /> <br />
        <div className={subtitle({ class: "mt-4" })}>
          {
            '"Simplicity is a great virtue but it requires hard work to achieve it and education to appreciate it. And to make matters worse: complexity sells better" ~ Edsger Dijkstra'
          }
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Visit counter: <Code color="primary">{visitCount}</Code>
          </span>
        </Snippet>

        <div className="w-full max-w-2xl">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-2 px-4 text-left font-semibold">
                  IP<span className="text-green-600">(v6)</span> Address
                </th>
                <th className="py-2 px-4 text-left font-semibold">
                  Visit Date
                </th>
              </tr>
            </thead>
            <tbody>
              {recentVisits.map((visit) => (
                <tr
                  key={visit.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-2 px-4 font-mono">
                    <span
                      className={
                        visit.ip_address?.includes(":") ? "text-green-600" : ""
                      }
                    >
                      {maskIP(visit.ip_address)}
                    </span>
                  </td>
                  <td className="py-2 px-4">{formatDate(visit.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Todo Section */}
        <TodoTable
          completedCount={completedCount}
          todos={todos}
          totalCount={totalCount}
        />
      </div>
    </section>
  );
}
