"use client";

import { useEffect, useState } from "react";

import { VisitLogger } from "@/components/VisitLogger";
import { PrivacyModal } from "@/components/PrivacyModal";

export function VisitTracking() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("privacyAccepted")) setOpen(true);
  }, []);

  const accept = () => {
    localStorage.setItem("privacyAccepted", "true");
    setOpen(false);
  };

  return (
    <>
      <VisitLogger />
      <PrivacyModal
        isOpen={open}
        onAccept={accept}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
