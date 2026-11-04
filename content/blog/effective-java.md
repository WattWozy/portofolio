---
title: "Effective Java, Joshua Bloch"
summary: "A summary on the best practices for the java platform."
timestamp: "2026-08-21T09:22:00Z"
status: "PUBLISHED. ✅"
---

*Effective Java* is not a book you read so much as one you consult and slowly come to agree with. It is dense, ninety items long, and written by someone who helped design the Java Collections Framework, so he is often explaining mistakes he watched an entire ecosystem make.

## The thread running through it

Read enough items and a pattern appears: almost all of them are about **shrinking the ways your code can go wrong**. Restrict, hide, freeze.

- **Static factories over constructors (Item 1).** A name like `Money.of(10, EUR)` says more than `new Money(...)`, and the factory is free to cache or return a subtype.
- **Builders for many parameters (Item 2).** Validation happens before an object ever exists, so a half-built one cannot leak.
- **Minimize mutability (Item 17).** An immutable object has one state, forever. It is thread-safe without a single lock, and you can share it without fear.
- **Composition over inheritance (Item 18).** Inheritance breaks encapsulation, because a subclass depends on how its parent happens to work today.
- **Dependency injection over hardwiring (Item 5).** Hand a class what it needs instead of letting it fetch its own world.

Each one removes a category of bug by making it unwritable rather than by asking developers to be careful. Good rules do not rely on discipline; they remove the need for it.

## The honest caveat

Parts of the book are aging. The third edition predates records, so Item 17 is now almost free in modern Java, and sealed types change what "design for inheritance" even means. The reasoning in each item still holds, but you should check what the language gives you today before following the recipe to the letter.

## How I would actually use it

Cover to cover is the hard way, and I would not recommend it. What works better is to treat it as a review checklist:

1. Pick one item a week.
2. Hunt for a violation of it in code you own.
3. Fix it and notice what got simpler.

The items that changed my habits the most were the boring ones about immutability and API surface. They are the ones that make the clean-architecture arguments in my other post possible, because a core you can trust starts with objects you cannot break.

## Verdict

A reference rather than a novel. Keep it nearby, let it argue with your code, and give each item a week before you decide whether it is right for you.
