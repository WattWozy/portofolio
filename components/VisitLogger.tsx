"use client";

import { useEffect } from "react";

export function VisitLogger() {
  useEffect(() => {
    const logVisit = async () => {
      // Check if we've already logged a visit in this session
      if (sessionStorage.getItem("visitLogged")) {
        return;
      }

      try {
        // Log the visit
        await fetch("/api/visits", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        });

        // Mark this session as logged
        sessionStorage.setItem("visitLogged", "true");
      } catch (error) {
        console.error("Failed to log visit:", error);
      }
    };

    logVisit();
  }, []);

  return null;
}
