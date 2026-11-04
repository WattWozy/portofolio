---
title: "Clean Architecture, Uncle Bob"
summary: "A summary on Clean Architecture, and my take on the whole."
timestamp: "2026-03-02T10:31:00Z"
status: "PUBLISHED. ✅"
---

Most architecture books tell you what to build. *Clean Architecture* mostly tells you which way to point your arrows. That sounds like a small thing, and it is the whole book, and it is why it is worth reading.

## One rule

Picture concentric circles. At the center, your entities: the rules that would exist even if no computer did. Around them, the use cases. Around those, the interface adapters: controllers, gateways, presenters. On the outside, the frameworks and drivers: the web, the database, the UI.

The Dependency Rule says source code dependencies may only point inward. An inner circle knows nothing about an outer one. A use case cannot import a framework annotation or a SQL driver. When it needs the outside world, it declares an interface and lets the outer layer implement it. It is dependency inversion, promoted from a trick to a discipline.

The most provocative consequence is a sentence the book repeats in several forms: the database is a detail, the web is a detail, the framework is a detail. A detail is whatever changes for reasons unrelated to your business. What deserves protection is the thing those details exist to serve.

## What I took from it

**Tests become cheap.** When the core has no framework inside it, you test business behaviour with plain objects, in milliseconds, with no container to boot. This is what makes TDD something you do rather than something you admire.

**Structure should say what the system does.** Open a project and you should see orders and payments, not controllers and repositories. The book calls this screaming architecture, and once you notice it, it is hard to unsee.

**Architecture is the art of postponing decisions.** A good boundary lets you start building before you know which database you will need, and then choose with evidence instead of guessing.

## Where I push back

Every boundary has a toll. Crossing it means mapping: entity to DTO to persistence model and back. In a CRUD-heavy service, that can be four ways to say the same thing, and at that point the abstraction has stopped protecting you and started charging you.

A boundary is a bet that something will change. Place it where you have a reason to believe that, not everywhere by default. The book can read as if more layers always means more clean, but sometimes a vertical slice or a modular monolith is the more honest answer, and knowing when abstraction becomes a liability is a skill the diagram cannot teach you.

## Verdict

The principle is timeless, the diagram is a suggestion. Keep the rule about the arrows, hold the circles loosely, and let the problem in front of you decide how many of them you actually need.
