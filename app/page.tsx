"use client";

import { useEffect, useState } from "react";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { VisitLogger } from "@/components/VisitLogger";

interface Visit {
  id: string;
  timestamp: string;
  ip_address: string;
}

export default function Home() {
  const [visitCount, setVisitCount] = useState<number>(0);
  const [visits, setVisits] = useState<Visit[]>([]);

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

  // Get the most recent visits
  const recentVisits = visits
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, 5); // Show top 5 visits

  // Function to mask IP address
  const maskIP = (ip: string | null | undefined) => {
    if (!ip) return "-";
    const parts = ip.split(".");

    if (parts.length !== 4) return ip;

    return `${parts[0]}.${parts[1]}.***.***`;
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
          Hello&nbsp;
        </span>
        <span
          className={title({ color: "yellow", size: "lg", fullWidth: false })}
        >
          World&nbsp;
        </span>
        <span className={title({ size: "lg", fullWidth: false })}>!</span>
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
                <th className="py-2 px-4 text-left font-semibold">IP Address</th>
                <th className="py-2 px-4 text-left font-semibold">Visit Date</th>
              </tr>
            </thead>
            <tbody>
              {recentVisits.map((visit) => (
                <tr key={visit.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-2 px-4 font-mono">{maskIP(visit.ip_address)}</td>
                  <td className="py-2 px-4">{formatDate(visit.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
