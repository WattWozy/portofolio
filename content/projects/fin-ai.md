---
title: "FIN-AI: personal finance copilot"
summary: "Deploying an app for personal finance assistance"
timestamp: "2025-08-13T13:53:00Z"
status: "PUBLISHED. ✅"
tech: AWS, AI, iOS
stack: iOS, Tink API, AWS, LocalAI
---

This was my first role as a CTO, at a startup that never flew. I am putting it on this page anyway, because it taught me more than several things that did.

## What we built

Over several months I developed an iOS app that connected to the **Tink API** to retrieve users' financial data, and deployed the backend on **AWS** so an instance was running around the clock. The idea was a personal finance copilot: you ask about your money in plain language, and it helps you understand it.

![The app](/img/fin-ai/app.png)

## Where it stopped

The bottleneck was not the infrastructure. It was the AI, and specifically my doubt about what it was for.

I did not believe a language model was the right tool for drawing statistics out of JSON payloads. Totals, averages and trends have right answers, and a calculation that is correct should be performed by code that is deterministic, testable and cheap. Asking a model to approximate arithmetic is paying a premium for a worse result.

Where language models shine is language: understanding the question, explaining the result, finding the sentence a person actually needs. So the honest design was to let ordinary code compute the numbers and let the model narrate them. That is a smaller product than the one in the pitch, and it raised the question I could not answer well: whether the model, at that scale, was worth the cost.

Then the other questions arrived. Tokens are not free, and a product that calls a model on every interaction has a cost structure that grows with its users. Serious AI contracts meant serious commitments, made before the product had proven anything. I stepped back, partly for that reason and partly for personal reasons.

## What I took from it

- **LocalAI and AWS services.** I learned the tooling by needing it, including what it takes to run models yourself, and what you give up when you do.
- **The business side.** I spoke with venture capital firms and learned how a pitch is actually read, which is not how I had assumed.
- **A rule of thumb.** Use the model as an interface, not as a calculator. If the answer can be computed, compute it, and spend the model's capacity on the part only a model can do.

## Verdict

A project that ended early, honestly, and with its lessons intact. I would rather publish a startup that stopped for good reasons than pretend it never existed.
