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

![Image](/blog/finai/finai.gif)

## Evolution and architecture of the system

I wanted to approach the project incrementally. Rather than designing an elaborate architecture from day one, I started with the smallest working pieces and gradually introduced complexity when it became necessary.

One of my initial decisions was not to rely directly on commercial AI APIs such as OpenAI or Anthropic. I wanted to understand what actually happened behind the abstraction: how models consume context, how tools are exposed to them, and how an application can orchestrate those interactions.

This led me down the rabbit hole of local models, inference servers and tool calling. I experimented with running models locally and exposing functionality through a backend that could retrieve financial information, interpret requests and return structured results.

The iOS application was divided into smaller modules, keeping responsibilities relatively independent. The backend acted as the bridge between the financial data provider and the AI functionality, rather than allowing the mobile application to communicate with every external service directly.

Looking back, the most valuable part was learning how to evolve an architecture without overengineering it. I didn't need a sophisticated distributed system. I needed something I could understand, test and improve.

## Developing an iOS app

I chose iOS because I wanted to build something people could actually use in their everyday lives. Personal finances are sensitive, and the application needed to feel trustworthy. A native mobile experience also gave me access to the platform's components and conventions, allowing me to focus on the product rather than reinventing basic interaction patterns.

Developing for iOS was a learning experience in itself. I had to understand how to divide functionality into packages, work with native components and navigate Apple's development ecosystem. I also discovered that getting an application ready for the App Store involves considerably more friction than simply getting it running on a device.

AI played a significant role in speeding up development. However, I deliberately worked without an autonomous coding agent. I wanted assistance with implementation, not an abstraction that would make the engineering decisions for me. I still had to read the suggestions, understand the generated code and decide whether it belonged in the project.

That distinction mattered to me: using AI to accelerate learning is very different from outsourcing understanding.

## Shooting with Postman

One of the toughest challenges was getting all the moving pieces to communicate. In particular, wiring up the routing between the backend running inside a container and the Xcode simulator required more troubleshooting than I initially expected.

I approached this incrementally, using Postman to isolate requests and validate each integration before moving further down the stack. Instead of debugging the entire application at once, I could verify whether the backend received the request, whether the external service returned the expected information and whether the AI layer could process it.

The most rewarding moment was seeing the tool-calling workflow actually work. The model received structured financial information, interpreted the available data and produced a useful natural-language response.

It was a small milestone, but an important one. Suddenly, the idea was no longer just a collection of APIs and components. It was something that could answer questions about real financial information.

![Image](/blog/finai/finai-two.png)


## Deploying on AWS using S3 and EC2

Eventually, I wanted the application to be accessible outside my development environment. That meant moving from local infrastructure to something that could run continuously.

I created an AWS account, explored the available services and had to learn a completely different set of concerns: IAM permissions, networking, deployment, resource management and, perhaps most importantly, budgeting.

I opted for EC2 because I wanted to keep things relatively straightforward. Having control over a virtual machine made it easier to understand what was running, how the services communicated and where problems originated. S3 was another piece of the infrastructure I had to become familiar with.

AWS introduced a new dimension to the project. It was no longer enough for something to work on my laptop. It needed to remain available, expose the right endpoints and behave consistently outside my development environment.

One particularly rewarding milestone was having my partner test the application remotely. Seeing someone else interact with something I had built, running on infrastructure I had deployed myself, made all the previous troubleshooting worthwhile.

![Image](/blog/finai/finai-four.png)


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
