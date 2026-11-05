---
title: "Claude-coded gym-tracker"
summary: "Vibecoding a tool I need"
timestamp: "2026-05-05T10:30:00Z"
tech: GTM, FullStack
status: "PUBLISHED. ✅"
---

## The tool I needed: a gym tracker

I had a rather annoying habit of going to the gym without a plan. Every session starts with the same ritual: standing around, trying to remember what I did last time.

I wanted a simple tracker. Nothing revolutionary: keep track of exercises, record sets and repetitions, and know what I should be doing when I walk through the gym doors. The picture that triggered me on starting the project was: a smooth, zero-friction gym tracker with no ads, and a custom UI I would enjoy using.

![Image](/blog/bro/bro-one.png)

Around the same time, I was becoming curious about Claude Code. Stockholm's startup environment wasn't helping either. Everyone seemed to be building something, launching something or discussing the next big thing over coffee. Naturally, I decided that what the world was missing was yet another gym-tracking application.

I also wanted to try Appwrite. I had heard good things about it and figured this was a sufficiently small project to experiment with a new backend without committing to anything particularly serious.

The conditions were perfect: a problem I personally had, a new tool to explore, and an AI agent willing to write code much faster than I could.

What could possibly go wrong?

## Vibecoding vs Development

The first few hours were genuinely exciting. Describe a component, press Enter, watch it appear. Ask for a slightly different layout, and there it is. Suddenly, frontend development feels like ordering from a menu.

And I understand the appeal. Getting a working interface on the screen is probably the most immediately rewarding part of software development. You can see the result, interact with it and show it to someone else. The feedback loop is incredibly short.

But there is a catch.

Software development has a funny way of collecting debt. Not necessarily financial debt, but cognitive debt. Every shortcut you take creates something that someone will eventually have to understand. In this case, that someone was me.

As the application grew, I increasingly found myself asking Claude where things were, which component handled a particular interaction, or what would happen if I changed a certain piece of state.

Of course, the agent could answer those questions. It could even make the changes for me. But at some point, I started feeling less like the developer and more like the person supervising a very enthusiastic intern who had read the entire internet but occasionally forgot what it had done five minutes ago.

The distinction is important. You can have an application that works without necessarily having an application you understand.

And those two things are not interchangeable.

## Managing OAuth Gmail sign-ins

One genuinely useful takeaway was setting up Google OAuth authentication.

I had to work through the configuration, redirect URIs, credentials and the communication between the frontend and Appwrite. It was a good opportunity to understand how third-party authentication fits into an application, rather than simply adding another username-and-password form.

Once authentication was working, I started inviting friends to test the application.

This was another enjoyable part of the process. Going from an idea on my laptop to something other people could access and use is always satisfying, regardless of how sophisticated the underlying architecture happens to be.

It also exposed the usual collection of small integration problems that never appear in the initial demo.

## Result

I actually used the application myself for a couple of months. That, at least, is a better product validation exercise than asking friends whether they like your idea.

It solved the original problem reasonably well. I could open it at the gym, check my exercises and keep track of my progress without having to improvise an entire workout.

However, the development lifecycle started deteriorating as soon as I wanted to introduce more features.

The initial implementation had been optimized for getting something working, not for making future changes predictable. Responsibilities became entangled, changes in one place could have unexpected consequences elsewhere, and there was little test coverage to protect existing functionality.

This is where the difference between generating code and engineering software becomes particularly visible.

An agent can produce a working implementation very quickly. But unless you deliberately establish boundaries, tests and conventions, it can also produce a codebase that becomes progressively harder to reason about.

There was another small lesson in choosing a backend service: Appwrite's free tier could pause inactive projects. Every now and then, the application would need waking up after a period without logins. Not exactly the availability guarantee I had imagined for my personal fitness infrastructure.

![Image](/blog/bro/bro-six.jpeg)

Still, the application did its job. I used it, learned a few things and eventually moved on.

## Aftermath

I have mixed feelings about this experiment.

On one hand, owning a project is incredibly rewarding. You get to identify a problem, make decisions, build something and see it used. Even a small application can teach you a surprising amount when you are responsible for the entire thing.

On the other hand, I cannot honestly say I learned much about frontend development, database design or software architecture from this particular project.

I learned how to configure Google's OAuth integration with Appwrite, got a feel for Claude Code's capabilities and experienced just how quickly an AI agent can turn an idea into a working interface.

But I outsourced much of the reasoning that would normally have forced me to understand the underlying technologies.

That is probably the most interesting takeaway.

Vibecoding lowers the barrier to creating software, but it does not automatically lower the barrier to understanding it. And if your goal is to learn, those are two very different objectives.

Would I build another small application this way? Absolutely.

Would I use the same approach for something I expected to maintain and extend for years? Probably not.

Sometimes you just need a gym tracker. But it helps to know whether you're building software or simply borrowing some.