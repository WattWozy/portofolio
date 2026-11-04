"use client";

import { useEffect, useState } from "react";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";

export function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visits")
      .then((r) => r.json())
      .then((j) => setCount(j.total ?? j.data?.length ?? 0))
      .catch(() => {});
  }, []);

  return (
    <Snippet hideCopyButton hideSymbol variant="bordered">
      <span>
        Visit counter: <Code color="primary">{count ?? "…"}</Code>
      </span>
    </Snippet>
  );
}
