export const firstEntry = {
  id: "firstEntry",
  title: "Working experience first year: A brief summary",
  timestamp: "2024-05-27T10:30:00Z",
  headers: [
    "Introduction",
    "Landing the job: nerves, calls, and a breakthrough",
    "About the people",
    "Day One and beyond: entering the code jungle",
    "Knowledge flows: How we shared and grew",
    "Looking ahead: growth, doubt and direction",
  ],
  paragraphs: [
    `This post is about my first experience working in a corporate environment — from the application process to a year-long perspective on the journey. I want to share how I felt and what I experienced, hoping to present my point of view and personal take on things. I also hope this might help others, in case there are any valuable tips to take away from the post.
    `,
    `It was the third and final year of my bachelor’s degree, and I knew I had to be punctual and eager in my job applications. I began applying systematically to every opportunity I could find — graduate programs, internships, full-time positions. Only after a personal video, a technical Java quiz, and three interviews did I finally get the call from the HR employee I’d been in contact with. Sweaty and nervous, I picked up on the first ring. The news was worth it: I had landed a one-year, full-time, paid contract at a massive banking software company.
    Hope that the following paragraphs can illustrate the impressions, feelings, challenges and gains, that I’ve experienced over the last year and a half.
    `,
    `I’ll start with what I found most essential: the colleagues.
    
    It took just a few days to feel the atmosphere — a friendly, sharp, and fun bunch of peers. What stood out was how relaxed and confident they all seemed. By contrast, I barely dared to let a word slip into the conversation at first. And yet, it’s precisely because of them that I came in early every day and didn’t leave the building before my contract allowed.
    
    They hadn’t all come from fancy universities. Most didn’t even have a master’s degree. One of the sharpest minds I met — who quickly moved from frontend tweaks to configuring servers and deployment files — had simply completed a popular full-stack bootcamp a few months earlier.
    
    One thing I really appreciated was the small age gap between me and the colleagues I spent the most time with. As I said — I was overwhelmed by how brilliant everyone was, and honestly felt like an impostor most days.
    `,
    `On the first day, after some introductory chats with one of the section heads, I met my mentor. The very next day, with full transparency, they threw me straight into the Daily Stand-Up — a short morning meeting for all dev teams to sync up, report progress, and re-prioritize tasks with the team lead.
    
    A few days later, once I had all the permissions and access rights in place, I could start taking on simple tasks. That’s when I began diving into the code: a giant project, made up of countless repos, dozens of branches, and more Java classes than I’d ever imagined possible.
    
    Step by step, those first weeks were about learning acronyms, project logic, and the team’s preferred “way of working.” Some lessons I still carry with me:
    
    * Talk more about the code you’re visiting.
    * Be open about your thought process when solving a problem.
    * Don’t be afraid to be the dumb one in the room.
    * Ask, ask, ask — even if few answers come back.
    * And write everything down, just in case you ever find yourself in the same spot again.
    `,
    `When it came to knowledge-sharing, I was genuinely impressed by how deliberately it was handled.

    Not just in the sense of discussing technical novelties or revising parts of the code — but also in making time to explain, at a high level, how the whole architecture fit together. Knowledge could mean raising a tough issue you were facing that week and getting input from seniors — or it could come the other way around, with architects reminding us of the “why” behind certain implementations.
    
    Documentation was another major source of insight. There was a strong culture of updating internal docs in parallel with story development, which gave you something to fall back on. The volume of information was massive — and still is. That can either make you desperate and bored, or deeply grateful for the endless stream of fuel for your curiosity.
    
    Outside of the team, we also had monthly syncs with colleagues working for other customers. And eventually, we started a small hobby-project group, where we shared new tech stacks and built small proofs of concept (PoCs) together — purely for fun.
    `,
    `After graduating and landing the job, I had this slightly inflated feeling of satisfaction — like life was somehow already solved, and I could comfortably survive in the cold Northern European capital.

    That illusion cracked a bit during a periodic check-in with my mentor and closest boss. I realized I could — and should — be doing more. Faster. Better.
    
    There was a trace of disappointment in the air when I left the first team, and it got me thinking: what’s forward from here?
    
    For me, the answer is simple:
    1) Keep learning.
    2) Deliver better, faster solutions.
    3) And stay curious — always thirsty for more.
    `,
  ],
};

export const secondEntry = {
  id: "secondEntry",
  title: "Building a Langchain4j chatbot agent for banking customer service.",
  timestamp: "2024-06-27T10:30:00Z",
  headers: [
    "Introduction",
    "Where it all started",
    "First concepts: LLMs and Agents",
    "Context and hallucinations: RAG",
    "From text to vectors",
    "Memory: Saving the Conversation",
    "AI concepts, and tech in the project",
    "TL;DR:",
  ],
  paragraphs: [
    `This post is about an internal project carried out at TietoEvry, together with 15 other colleagues, during the summer of 2024. The goal was to create a simple chatbot agent — one that could rely on a specified context (to prevent it from hallucinating) and trigger certain custom-made functions in our code, such as fetching or posting data to an endpoint.
    `,
    `The inspiration came from a talk by Lizzy Raes at JFokus24. She introduced a Java library called Langchain4j — basically a Java version of the more well-known LangChain (Python). The idea is to bring the same "agentic" behavior into a more object-oriented Java context.
    That means being able to instantiate an interface and treat your AI model like a regular object: you send it data, it gives you a response — and under the hood, you can plug in tools, memory, and context. That’s what we wanted to explore.
    `,
    `Before diving into building, we had to get familiar with two key terms: LLM and Agent.
    
    LLM stands for Large Language Model. It's a trained neural network that understands and generates human language. Underneath, it turns words, phrases, even paragraphs into vectors — big arrays of numbers that represent meaning. For example, the word “bad” might become a vector with mostly negative values, while “good” might have more positive ones. This allows the model to “understand” and operate on meaning.
    
    An agent, on the other hand, is an LLM with extra powers. It can access external tools — functions that you’ve defined in your code. You can think of it like this: the agent maps meaning from a user’s input to a trigger — and that trigger might call a function, send a request, or return custom output. Agents are basically LLMs with access to your toolbox. 
    `,
    `One of the early challenges we faced was the classic: how do we stop the model from hallucinating?
    
    That’s where RAG — Retrieval Augmented Generation — comes in. The idea is simple: instead of just feeding the user query into the model, we also pass along extra information — context. This can be documentation, a previous conversation, or any other relevant data.

    In LLM terms, context is just a bunch of strings passed to the model alongside the query. This enriches the model’s answers and keeps them grounded in your own data.
    `,
    `There are many ways to provide context to an LLM. One approach we found compelling was to embed all our context into a vector database.
    
    Basically, we chunked our documents into smaller bits, converted them into vectors, and saved them in a database optimized for similarity search. When the user makes a request, the model looks for the most relevant chunks, loads them, and uses them to answer.
    
    But this whole pipeline is sensitive to a lot of things:
    
    * Which model you use to embed the text
    * How long the text chunks are
    * Which vector database you go for
    
    We tried different combinations and got a deeper understanding of how much these little details affect performance and quality.
    `,
    `Besides static context, another way to enrich responses is by adding memory — letting the model "remember" previous interactions.
    
    We explored using LangChain’s memory modules to store both the user’s question and the model’s response. One idea was to persist this into a DB and treat it as dynamic context. This way, the conversation itself becomes part of the model’s reference material.
    
    There are also simpler ways — like using .loadDocs() to inject documents or history into the model without building a full custom pipeline. Still, it was interesting to test both approaches and understand what’s going on under the hood.
    `,
    `One of the biggest personal learnings came from the non-AI side of the project: architecture.
    
    At the time, I was 21 — and mostly focused on syntax. I hadn’t really given much thought to how a service should be structured: file layout, framework decisions, scalability, naming conventions, and just best practices in general. Not the quick get-arounds, but the solid patterns that help you when your project grows.
    
    Designing this project with a team made me see how important architecture really is — and how much easier things get when your code is clean and your structure is clear.
    `,
    `These were some of the things I learned and worked with during the project. From tools and agents to memory and RAG pipelines — and from embeddings to endpoints. But more than that, I learned to zoom out a bit. To think not just about the code, but how it fits together, and how to build something real.
    
    Hope this post gave you some new words to chew on, and a glimpse into the project I was part of. I’ll probably write another one soon — maybe on how we integrated cloud services next.
    
    Hope you enjoyed it!`,
  ],
};

export const thirdEntry = {
  id: "thirdEntry",
  title: "A brief introduction to DevOps",
  timestamp: "2024-08-27T10:30:00Z",
  headers: [
    "The process",
    "Git is essential",
    "The remote",
    "The order",
    "The result",
  ],
  paragraphs: [
    `Building a large-scale application — especially one that brings together several minds at each stage — demands powerful tools to coordinate efforts and ensure quality output at every iteration. Think of it like a car factory: from importing materials, welding the metal frames, installing electronics, to final testing and shipping, each step needs precision and structure. In software, this structured approach is what we call DevOps (short for Developer Operations) — a set of practices and tools that bring development and operations together to produce reliable, secure, and scalable code.
    `,

    `A core tool in this process is Git — a version control system that allows developers to track and manage changes across files and directories. It lets you create separate versions (branches) of the code where you can work freely, make changes, and later propose merging them into the main version. Git gives teams a safety net, allowing experimentation and iteration without jeopardizing the working product. If you’re new to Git, you’ll find a more detailed introduction in the some other post on this blog.
    `,

    `The remote — also referred to as the codebase — is where the project lives. Usually hosted in the cloud (i.e., on a server somewhere far away), the remote includes Git project tools and adds features like protected branches, access control, and policies for merging changes. It often supports automatic actions such as pipelines that run tests or deployments when new code is pushed. The most well-known remotes are GitHub and Bitbucket, though cloud giants like AWS and Azure now offer their own repository solutions. A solid and secure remote is key to keeping all minds in sync and delivering consistent progress.
    `,

    `Everything starts with a request — a feature or fix from the client — passed on to the team lead, who breaks it down into tickets and assigns them to developers. From there, the developer creates a new branch from the latest code — what we call “branching out from main” — and dives into the requirements. After implementing the changes, the developer commits the work and pushes it to the remote, making it visible to the rest of the team.
      
    But things don’t just land on the main branch. Most remotes have strict policies in place: merge requests, pull requests, and user permissions help ensure only reviewed, tested, and approved code gets through. Once a change is merged into the main branch, it can automatically trigger a chain of actions — running tests, checking code quality, or even deploying the build to a staging or testing environment. When dealing with sensitive products, clients often have their own testing setups for additional validation.
    `,
    `Delivering great software rarely happens in big jumps. It’s about shipping small features, solving specific bugs, and doing so in small, repeatable iterations. This rhythm ensures that changes are quick to test, easy to reverse, and safe to roll out. Ultimately, this makes the development process more secure, and helps guarantee the stability, safety, and performance of the final product — especially when many people are involved and the stakes are high.
    `,
  ],
};

export const fourthEntry = {
  id: "fourthEntry",
  title: "Code Obfuscation: meaning, techniques and tools",
  timestamp: "2025-03-27T10:30:00Z",
  headers: [
    "Where it all started",
    "Scraping data",
    "Countermeasures",
    "Other measures",
  ],
  paragraphs: [
    `A few years ago, while playing around with some Python scrapers, I realized how simple and straightforward it was to acquire interesting data. What was once just an exploratory activity has now become a serious battleground. Today, the same data — especially if it’s timely, structured, and relevant — is a real asset. Companies know this.

Take a major finance website, for example. They pay for multiple API keys, maintain compliance with their data providers, and build a solid, valuable product by displaying real-time stock information. Then, they discover a handful of script kiddies scraping and reselling that same data for profit. It’s more than just a nuisance — it’s theft. And at some point, something has to be done.
`,
    `There are a couple of common ways to scrape data. The first is by targeting specific HTML element IDs or class names that contain the information you're after. The second — often a more elegant approach — involves discovering the API endpoint that populates the front-end. If you’re lucky, you’ll find an exposed endpoint returning nice, clean JSON, ready to be parsed and used.

For a while, either method would get you far. But not anymore.
`,
    `To defend their data, companies have started locking down both the structure and the access points. HTML IDs and classes are now dynamic, changing with each request or at regular intervals. Endpoints are protected using session cookies, authentication headers, CSRF tokens, and more. Many sites even generate randomized identifiers for every element using JavaScript — a tactic powered by widely available open-source obfuscation tools.

You don’t need to be a genius to implement this kind of defense; if you're serious about protecting your product, these tools are just a Google search away.
`,
    `Of course, client-side obfuscation is just the first line of defense. Additional layers include filtering based on IP addresses, deploying bot protection rules, using robots.txt to instruct crawlers, and monitoring suspicious traffic patterns.

And here’s a fun thought: if you ever hit one of these walls, take a moment to feel proud. It usually means you’ve found something valuable — something someone else has put serious effort into protecting.
`,
  ],
};
