"use client";

import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, PaperPlaneIcon } from "@/components/icons";
import { SponsorModal } from "@/components/SponsorModal";

const GREETINGS = [
  "Hello",
  "Hola",
  "Bonjour",
  "안녕",
  "Привіт",
  "Hallo",
  "Ciao",
  "नमस्ते",
  "Olá",
  "Terve",
  "Hei",
  "Γεια σου",
  "Hej",
  "سلام",
  "你好",
  "こんにちは",
  "Merhaba",
  "Szia",
  "Sawubona",
];

export function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="flex flex-col items-center gap-6 py-12 md:py-16">
      <SponsorModal
        isOpen={isContactOpen}
        title="Contact me!"
        onClose={() => setIsContactOpen(false)}
      />

      <h1 className="text-center">
        <span className={title({ size: "lg", fullWidth: false })}>
          <Typewriter
            cursor
            loop
            cursorStyle="_"
            delaySpeed={1500}
            deleteSpeed={50}
            typeSpeed={120}
            words={GREETINGS}
          />
        </span>
        <span
          className={title({ color: "green", size: "lg", fullWidth: false })}
        >
          World!
        </span>
      </h1>

      {/* Placeholder pitch, rewrite in your own voice */}
      <p className={subtitle({ class: "max-w-xl text-center" })}>
        Backend engineer building clean-architecture systems in Java, and the
        tools that keep them clean.
      </p>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({ color: "primary", radius: "full" })}
          href="/projects"
        >
          View projects
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
        <Button
          className="text-sm font-normal text-default-600 bg-default-100"
          startContent={<PaperPlaneIcon className="text-danger" />}
          variant="flat"
          onPress={() => setIsContactOpen(true)}
        >
          Contact
        </Button>
      </div>

      <p className="max-w-md text-center text-sm italic text-default-400">
        &ldquo;Simplicity is a great virtue but it requires hard work to achieve
        it and education to appreciate it. And to make matters worse: complexity
        sells better&rdquo; &mdash; Edsger Dijkstra
      </p>
    </section>
  );
}
