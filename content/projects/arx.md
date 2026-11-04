---
title: "ARX: arch harnessing agents"
summary: "Enforcing Clean Architecture metrics via an mcp"
timestamp: "2026-03-15T09:32:00Z"
status: "PUBLISHED. ✅"
tech: Architecture
stack: MCP, H2, Clean Architecture metrics, git history analysis
---

While I was reading *Clean Architecture*, I was also working on a real codebase, so I did the obvious thing and tried to apply the book to it as I went. The idea for ARX came from the metrics the book presents: instability, abstractness, and the distance of a component from the ideal balance between the two. They are numbers that say whether a structure is healthy, and I wondered why nobody was measuring them continuously.

## The problem

An AI coding agent optimises for the task in front of it. That is its strength and its blind spot, because architecture is not a property of any single change. It is a property of all the changes together, and it erodes the way a path erodes: one step at a time, no step looking like the problem.

An agent cannot see that drift. Neither, honestly, can a tired human at the end of a sprint.

## The idea

ARX analyses a Java or TypeScript codebase against Clean Architecture metrics, and also reads the **git history** to see how those metrics move over time. That second part is what I find most interesting. A snapshot tells you where you are, but a history tells you which way you are heading, which is the difference between a value and its derivative.

All of it is exposed through an **MCP server**, so an agent like Claude can ask about the architecture before changing it and check afterwards that it did not make things worse. The aim is a harness that keeps development sustainable in the long term, independently of the business logic being written.

## How it grew

- A diagnostic matrix that classifies recurring architectural problems into named syndromes
- The MCP adapter (v1.4.0), and embedded persistence on H2 (v1.5.0)
- Scoped scanning, so a monorepo can be analysed one part at a time
- A retro Win98-style dashboard, because tools can be useful and still have a sense of humour
- A source-available license (FSL-1.1-ALv2)

## Some content
The idea started out quite informative, displaying the basic information: 
![Image](/blog/arx/arx-one.png)
![Image](/blog/arx/arx-two.png)

One thing I was for sure missing was the graph signaling the "domain" and the dependence direction each component had. So, setting out for a more modern display, and making use of some js library for drawing graphs (we love deps, don't we...), a clear representation of the components was achieved!
![Image](/blog/arx/arx-four.png)

As you see, Claude had helped me tons, but had violated the structure by introducing a transitive dependency looping back to a never-ending circle (which was detected by some smart Tarjan graph algorithm I'd love to read more about). 

Moving on, I felt like the amount of metrics overwhelmed me, so I decided I needed to synthetize everything. After presenting it to the CTO and discussing the project with some other colleague, I got the idea of producing, so called, diganostics: 
The metrics can mean different completely different things depending on the purpose of the component they are describing. A domaing layey should be stable. An adapter should be thin. Etc... So I made a table with a combination of spectrums for each type of onion-component, assigning a diagnosis to each one:  

![Image](/blog/arx/arx-five.png)


## A design question I keep thinking about

Metrics are proxies, and a proxy under pressure gets gamed. Tell an agent to satisfy a number and it will satisfy the number, sometimes in ways that miss the point of it. So the guardrail has to show direction and diagnosis rather than only a pass or fail score, which is part of why the history matters.

## Verdict

ARX started as a way to take a book seriously, and it turned into an argument: if software is going to be written faster than anyone can review it, then the architecture has to be something that can be checked by machines too.
