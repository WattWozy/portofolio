---
title: "A more poetic understanding of code"
summary: "The beautiful paradigm of functional programming."
timestamp: "2026-10-30T10:03:00Z"
status: "PUBLISHED. ✅"
---

Code is written twice: once for the machine, and once for whoever has to read it next. Functional programming is the paradigm that takes the second reader seriously.

## Things that do not change

In mathematics, `f(x) = x + 1` does nothing. It does not act, it relates: for this input, that output, in every room and every decade. `2 + 2` is not `4` today and something else after a deploy.

A pure function carries that same quiet promise. Same input, same output, and nothing else in the universe moves. That is called referential transparency, and it means you can replace a call with its result and the program means the same thing. Reading code starts to feel like reading an equation: you reason by substitution rather than by simulation.

## The river

A mutable variable is a different kind of object. `x` means one thing now and another a line later, so to understand it you must reconstruct its entire history. Heraclitus would recognise the problem: you cannot step into the same variable twice.

Immutable values refuse that deal. They do not change, so there is no history to carry in your head. When something must change, you create a new value and leave the old one true.

I find this strangest and most convincing in Datomic, the database I use with Clojure. It does not overwrite; it accumulates facts. Something becomes true, later something else does, and the past remains available as a thing that was true. The database stops being a set of boxes that get painted over, and becomes a record of what has been said.

## Composition is grammar

Small functions behave like words, and a pipeline reads like a sentence:

```clojure
(->> orders
     (filter paid?)
     (map :total)
     (reduce +))
```

Take the orders, keep the paid ones, look at their totals, add them up. No loop counter, no accumulator, no temporary state to babysit. The code states what is meant and leaves the how to the machine.

## Where the poem meets the world

The honest objection is that useful programs must touch the world, and the world is full of side effects. Sending an email is the point of sending an email.

The craft is in where you let them in. Keep a pure core of decisions and calculations, push the effects to a thin shell at the edge, and test the core as if the world did not exist. Anyone who read my post on clean architecture will see the rhyme: it is the dependency rule again, arrived at from the other side.

## Verdict

You do not need to give up other paradigms to benefit from this. You only need to notice, each time you reach for mutation, what you are trading away: the ability to understand a piece of code by looking at it. Beauty in code is mostly that, the feeling of understanding something at a glance.
