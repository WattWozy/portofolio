---
title: "Java 27 is released"
summary: "Short summary and recap of Java's versions."
timestamp: "2026-09-15T22:24:00Z"
status: "PUBLISHED. ✅"
---

# Java 27 is released

Java 27 arrived on September 15, 2026. Another six-month release, another set of improvements, and another reminder that Java is far from standing still.

But to understand what Java 27 means, it helps to look at how we got here.

## A short history of Java

Java was introduced in 1995. Its original promise was portability: write code once and run it anywhere with a compatible JVM.

The language has changed considerably since then.

| Version | What mattered |
| --- | --- |
| Java 5 (2004) | Generics, annotations, enums |
| Java 8 (2014) | Lambdas, Streams, the modern functional foundation |
| Java 9 (2017) | The module system |
| Java 10 (2018) | Local-variable type inference with `var` |
| Java 11 (2018) | A major LTS release |
| Java 17 (2021) | Records, sealed classes, and a mature modern language |
| Java 21 (2023) | Virtual threads and pattern matching improvements |
| Java 25 (2025) | The latest LTS release |
| Java 27 (2026) | The latest feature release |

The important shift happened in 2017. Java moved from large, infrequent releases to a predictable six-month cadence. Instead of waiting years for a major batch of features, developers get a steady stream of improvements.

Not every release is an LTS release, though. That distinction matters. Java 27 is a feature release; Java 25 is the current LTS version. For many production systems, the support lifecycle matters more than having the newest language features.

## What is new in Java 27?

Java 27 brings nine JEPs, covering language features, runtime improvements, security, and libraries.

A few changes are particularly interesting:

- **Primitive types in patterns, `instanceof`, and `switch` (preview):** pattern matching becomes more consistent when working with primitive values.
- **Compact object headers:** the JVM uses a smaller default object header, reducing memory overhead.
- **G1 as the default garbage collector in all environments:** a more consistent default across different deployment scenarios.
- **Structured concurrency (preview):** related concurrent tasks can be treated as one unit, making cancellation and lifecycle management easier to reason about.
- **Lazy constants (preview):** immutable values can be initialized lazily while retaining constant-like runtime characteristics.
- **Post-quantum hybrid key exchange for TLS 1.3:** Java takes another step toward protecting network communication against future quantum-capable attackers.

There are also improvements to the Vector API, cryptographic APIs, diagnostics, and runtime performance.

One detail is worth keeping in mind: several of the headline language and API changes are still preview or incubator features. They are available for experimentation and feedback, not necessarily ready to become foundations of production code.

## Should you upgrade?

Not automatically.

A new Java release is not a reason to rewrite a working application. Compatibility, framework support, operational risk, and the support policy of your chosen JDK distribution should all be part of the decision.

For a new project, experimenting with the latest release can be valuable. For an established production system, a supported LTS version may be the more sensible choice.

The six-month cadence also changes how we should think about Java. Keeping up no longer means learning a completely different language every few years. It means gradually adopting improvements as they become useful.

## The bigger picture

Java's strength has never been that it changes everything overnight. It is the combination of a stable platform, a mature ecosystem, and a willingness to evolve without abandoning what already works.

Java 27 is another step in that direction.

The language is modernizing, the JVM keeps getting better, and the ecosystem continues to move forward. You do not need to adopt every new feature to benefit from that progress.

Sometimes the best upgrade is simply knowing what has become possible.

---

**References**

- [The Arrival of Java 27 — Oracle](https://blogs.oracle.com/java/the-arrival-of-java-27)
- [JDK release timeline](https://ops.java/releases/)
- [Java SE specifications](https://docs.oracle.com/javase/specs/)
