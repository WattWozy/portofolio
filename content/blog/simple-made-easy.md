---
title: "Rich Hickey's simple made easy"
summary: "A summary on easy, simple, and clojure."
timestamp: "2025-12-13T11:54:00Z"
status: "PUBLISHED. ✅"
---

# Rich Hickey's Simple Made Easy

In his 2011 talk *Simple Made Easy*, Rich Hickey makes a distinction that sounds obvious until you start applying it to software design:

**Simple and easy are not the same thing.**

We use these words interchangeably. We say a framework is simple because we already know it, or because it lets us get something running quickly. But familiarity and simplicity are different properties.

That distinction has changed how I think about code.

## Easy is relative. Simple is not.

Easy means close at hand. Something familiar, convenient, or requiring little effort to start using.

Simple means not intertwined. Something that has fewer independent concerns tangled together.

A technology can be easy to use and still produce a complicated system. A tool can have a learning curve and still help us build something simpler.

This is where Hickey challenges a common engineering instinct: optimizing for the first few minutes of development.

The easiest solution often gets us moving quickly. But if it combines state, identity, behavior, and representation, the complexity eventually catches up. Changes become harder. Dependencies spread. Small modifications require understanding more of the system than they should.

The initial speed was borrowed from the future.

## Complexity comes from entanglement

Hickey uses the word *complecting* to describe things that have been twisted together.

Consider a few of his examples:

| More entangled | Simpler alternative |
| --- | --- |
| Objects | Values |
| Methods | Functions |
| Mutable state | Immutable data |
| Inheritance | Composition and polymorphism |
| Complex syntax | Data |
| ORM-centric modeling | Declarative data manipulation |

These are not universal rules saying that one construct is always wrong. The point is to recognize what each construct combines and what consequences that combination creates.

An object, for example, can combine identity, state, and value. When those concepts are coupled, reasoning about one of them can require understanding the others.

Separating them gives us more freedom.

A value can be copied and compared without worrying about who owns it. A pure function can be understood from its inputs and outputs. Immutable data can be passed around without every consumer having to consider who might change it later.

The goal is not fewer lines of code. It is fewer hidden relationships.

## Why Clojure fits the idea

Clojure is an interesting example because many of its core design choices reflect this philosophy.

Data is represented using simple, immutable structures: maps, vectors, lists, and sets. Functions operate on those values. Namespaces organize code without requiring everything to live inside an object hierarchy.

This makes data easier to inspect, transform, test, and move between parts of an application.

It also changes how we approach modeling. Instead of immediately creating a class for every concept, we can ask whether the concept is really just data.

That does not mean Clojure automatically produces simple software. We can create complicated systems in any language. But the language gives us tools that make certain forms of separation natural.

The important part is the mindset, not the syntax.

## Simplicity is a design decision

One of the most useful ideas in the talk is that simplicity requires deliberate effort.

We often optimize for convenience because the benefit is immediate. Simplicity requires us to think about the relationships we are introducing and the changes we might need to make later.

Sometimes that means writing more small functions instead of one large abstraction. Sometimes it means separating data from behavior. Sometimes it means resisting a framework that solves a problem we do not actually have.

And sometimes it means accepting a learning curve.

I find this particularly relevant when designing backend systems. Interfaces, dependency boundaries, data models, and use cases should make the system easier to reason about independently. If every component knows too much about the others, the architecture may look organized while remaining deeply coupled.

The number of classes or modules tells us very little. The relationships between them tell us much more.

## The takeaway

The question I take from Hickey's talk is not whether a tool is easy to use.

It is whether the things I build with it will remain easy to understand.

Convenience helps us start. Simplicity helps us continue.

And in software, the cost of continuing is usually much larger than the cost of getting started.

**Choose tools for the systems they help you create, not only for how quickly they let you begin.**

---

**Further reading**

- [Simple Made Easy — Rich Hickey, Strange Loop 2011](https://www.youtube.com/watch?v=SxdOUGdseq4)
- [Talk transcript](https://github.com/matthiasn/talk-transcripts/blob/master/Hickey_Rich/SimpleMadeEasy.md)
