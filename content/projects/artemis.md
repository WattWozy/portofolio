---
title: "Artemis II"
summary: "Riding the hype wave by publishing a game"
timestamp: "2026-04-05T12:03:00Z"
status: "PUBLISHED. ✅"
tech: Js, GTM, DevOps
stack: JavaScript, WebSockets, A* pathfinding
---

Most projects start with an idea looking for a moment. This one started with a moment looking for an idea. The Artemis II mission had the internet looking up, and I wondered what it would take to be standing there with something playable while it did.

## What it is

A multiplayer browser game in pure JavaScript, with multiple rooms and three game modes: capture the flag, survive, and bank robbery. No framework, no engine, just the language and a socket.

![Image](/blog/artemis/artemis-four.jpeg)

## Built test-first, with AI

I developed it test-driven with an AI writing much of the code, and I think that combination is the only way I would do it again. An AI assistant is quick and tireless, but it has no memory of what it promised you yesterday. Each new feature is a chance for it to quietly break an old one.

The tests became that memory. Every game mode I added had to leave the previous ones working, and the test suite said so within seconds. Speed without a safety net is just a faster way to get lost.

## What I learned

**WebSockets.** Moving from request and response to a persistent connection changes how you think. The server stops answering questions and becomes a place where several people share one evolving state, and the hard part is keeping everyone's view of that state honest.

**A\* shortest path.** A\* is a lovely algorithm: it always expands the node that minimises the cost so far plus an optimistic estimate of the cost remaining. As long as the estimate never overestimates, it is guaranteed to find the best route, while searching far less than brute force would. Implementing it yourself is the moment "heuristic" stops being a vague word.

## The business experiment

The more interesting half was not technical. I bought a domain, `artemis2.earth`, posted the game on Reddit, and then did what I would do with any product: I looked at the traffic.

![Image](/blog/artemis/artemis-three.jpeg)


A launch tied to a news event has a half-life. The audience is enormous for a few days and then it is gone, which makes this a rare and useful kind of scoping constraint: the deadline is set by the world, not by you. 
Nevertheless, the traffic arrived, and I sat down and screenshotted the actual metrics which Railway was catching (not much, but pretty cool) 
![Image](/blog/artemis/artemis-one.jpeg)


It was awesome to see the live metrics logging hash-values for the actual players that tested the game: 
![Image](/blog/artemis/artemis-two.jpeg)

## Verdict

A fun experiment, and a cheap one. I would not call it a business, but it taught me more about distribution timing and shipping against a clock than a month of planning would have.
