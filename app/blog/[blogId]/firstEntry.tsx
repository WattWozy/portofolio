export const firstEntry = {
  id: "firstEntry",
  title: "Working experience first year: A brief summary",
  timestamp: "2024-05-27T10:30:00Z",
  headers: [
    "Application process",
    "About the people",
    "Initial team: the blue ones",
    "About knowledge sharing culture",
    "An introduction to architecture",
    "About the learning process, and the need for thirst",
  ],
  paragraphs: [
    "It was the third and last year in my bachelor’s degree, and I knew I had to be punctual and eager on my job applications. I started applying systematically to all possible job openings, graduate programs, internships, and the like. It was only after a personal video, a technical java quiz, and three interviews that I eventually got the call from the HR employee I had been in contact with. Sweaty and nervous, taking the call at the first ring was worth the good news: I had a one-years-contract, full time paid, on a huge banking-software company. The following paragraphs aim to describe the impressions and feelings, the challenges and profits I have been experiencing for the last year and a half. ",
    "I would like to start with the most essential element of any job: the colleagues. Few days were needed to taste the atmosphere of a friendly, sharp and fun bunch of peers. They all seemed to excel on how relaxed and confident they were. I guess, by contrast, my mouth didn’t dare to let many words jump out to the conversation. In the end, it’s the colleagues’ that have locked me into coming early every day to the office, and not leaving the building before the contract’s specification. They had not arrived from fancy universities, and the majority had not even got a master’s degree. In fact, one of the friend I consider sharpest, which had rapidly escalated from frontend tasks to deployment files and server configurations counted with just a popular full-stack bootcamp he had completed in some months. One great factor I appreciated was the small age difference of the colleagues I spent most time with. As I mentioned: I was overwhelmed at how brilliant everyone was, and felt much like an impostor in the daily tasks.",
    'The first day, after some introductory sessions with one of the chiefs at the section, I got to know my mentor. The day after, with all transparency, they bumped me into the Daily Stand Up, a meeting all developer teams have at the start of the day in order to report how work is going, and to quickly sync with the team leader for prioritizing the right tasks. After some days, already with the permissions and access rights in place, I could start taking simple tasks, and discuss the code I was diving into: an enormous project with lots of repos, lots of branches, and a volume of classes I had never seen before. Step by step, the following weeks were all about learning acronyms and the convenient "way of working" of the team. Important stuff I remember from that first team was the need to discuss more often the code one is often visiting, being open about the critical approach one is taking to solve a problem and not being afraid to be the dumb one in the group. Ask, ask, ask, no matter how few answers you get. And write down as much as you can, if you ever are in the same situation.',
    "When it came to sharing knowledge, I highly appreciated the specific actions taken to spread knowledge. Knowledge in the sense of technical novelties, revising the structure of the code, or taking some time to explain at a high level how the architecture of the project looked. Knowledge could also be lifting up a problem one was facing that week to the seniors in the team, or the other way around: the architects in the team reminding us others how stuff had to be implemented. Another stable specific resource for sharing information about the project was the documentation and the internal network of documents that were revised in parallel to the development of certain stories. As you might imagine: it was a huge volume of data to assimilate, and still is. And this can, of course, either make you desperate and bored, or glad and joyful with an apparently endless fuel for your curiosity. Outside of the team, we had monthly meetings with all other teams across the teams working for other customers, and we even started a hobby-project group, where we shared features of new technology stacks and sat together and developed some simple proofs of concept (PoCs).",
    'After graduating from university and landing a job contract, my mentality was kind of overflowing with a sense of satisfaction and achievement, thinking life was already solved and the current situation provided for a comfortable survival in the cold Northern European capital. Until the periodic check-in with my mentor and closest boss arrived: I knew I was able to do more, faster and much better. There was a certain feeling of disappointment in the air when I left the first team that made me think about my future as a developer in the same company or in any other one: Where is "forward" now? Keeping learning and delivering faster, better solutions to my daily tasks. Keeping curiosity thirsty for more.',
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
    "From text to vectors: Working with vector stores",
    "Memory: Saving the Conversation", 
    "AI concepts, and tech in the project",
    "TL;DR:",
  ],
  paragraphs: [
    `This post is about an internal project carried out at TietoEvry, together with 15 other colleagues, during the summer of 2024. The goal was to create a simple chatbot agent — one that could rely on a specified context (to prevent it from hallucinating) and trigger certain custom-made functions in our code, such as fetching or posting data to an endpoint.
    `,
    `
    The inspiration came from a talk by Lizzy Raes at JFokus24. She introduced a Java library called Langchain4j — basically a Java version of the more well-known LangChain (Python). The idea is to bring the same "agentic" behavior into a more object-oriented Java context.
    That means being able to instantiate an interface and treat your AI model like a regular object: you send it data, it gives you a response — and under the hood, you can plug in tools, memory, and context. That’s what we wanted to explore.
    `,
     `
    Before diving into building, we had to get familiar with two key terms: LLM and Agent.
    
    LLM stands for Large Language Model. It's a trained neural network that understands and generates human language. Underneath, it turns words, phrases, even paragraphs into vectors — big arrays of numbers that represent meaning. For example, the word “bad” might become a vector with mostly negative values, while “good” might have more positive ones. This allows the model to “understand” and operate on meaning.
    
    An agent, on the other hand, is an LLM with extra powers. It can access external tools — functions that you’ve defined in your code. You can think of it like this: the agent maps meaning from a user’s input to a trigger — and that trigger might call a function, send a request, or return custom output. Agents are basically LLMs with access to your toolbox. 
    `,
    `
    One of the early challenges we faced was the classic: how do we stop the model from hallucinating?
    
    That’s where RAG — Retrieval Augmented Generation — comes in. The idea is simple: instead of just feeding the user query into the model, we also pass along extra information — context. This can be documentation, a previous conversation, or any other relevant data.

    In LLM terms, context is just a bunch of strings passed to the model alongside the query. This enriches the model’s answers and keeps them grounded in your own data.
    `, 
    `
    There are many ways to provide context to an LLM. One approach we found compelling was to embed all our context into a vector database.
    
    Basically, we chunked our documents into smaller bits, converted them into vectors, and saved them in a database optimized for similarity search. When the user makes a request, the model looks for the most relevant chunks, loads them, and uses them to answer.
    
    But this whole pipeline is sensitive to a lot of things:
    
    * Which model you use to embed the text
    * How long the text chunks are
    * Which vector database you go for
    
    We tried different combinations and got a deeper understanding of how much these little details affect performance and quality.
    `, 
    `
    Besides static context, another way to enrich responses is by adding memory — letting the model "remember" previous interactions.
    
    We explored using LangChain’s memory modules to store both the user’s question and the model’s response. One idea was to persist this into a DB and treat it as dynamic context. This way, the conversation itself becomes part of the model’s reference material.
    
    There are also simpler ways — like using .loadDocs() to inject documents or history into the model without building a full custom pipeline. Still, it was interesting to test both approaches and understand what’s going on under the hood.
    `, 
    `
    One of the biggest personal learnings came from the non-AI side of the project: architecture.
    
    At the time, I was 21 — and mostly focused on syntax. I hadn’t really given much thought to how a service should be structured: file layout, framework decisions, scalability, naming conventions, and just best practices in general. Not the quick get-arounds, but the solid patterns that help you when your project grows.
    
    Designing this project with a team made me see how important architecture really is — and how much easier things get when your code is clean and your structure is clear.
    `, 
    `
    These were some of the things I learned and worked with during the project. From tools and agents to memory and RAG pipelines — and from embeddings to endpoints. But more than that, I learned to zoom out a bit. To think not just about the code, but how it fits together, and how to build something real.
    
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
    "Building a huge application, and involving several minds in each step requires powerful tools to coordinate and secure valuable outputs at each iteration. Similar to a factory producing cars, both the pipeline from importing the materials, binding the metal frames, installing the electronics, to finally testing and shipping, code nowadays requires a well defined set of practices and tools, which we commonly refer to as DevOps (Developer Operations).",
    "An essential tool used in software production is Git: a file version control program, which allows the developer to track the changes done to a file or directory. It allows the developer to easily create a version of the code, on which to apply the changes in the code, and apply for a merge into the main version. More on what Git is and how it works can be found in the previous post in my blog. ",
    "The remote, or codebase, is the place (often hosted in the cloud, meaning a remote server far away) where the project is hosted. Normally it includes tools for working with Git projects, and has features for protecting the versions (branches), specifying policies to update the main branch, or even creating pipelines that are triggered upon certain actions (more on that later). The most common ones are GitHub and BitBucket. However, both AWS and Azure have now started to implement their own repository-management solutions. Working with a stable remote allows a team with many brains to work coordinately, delivering great solutions at a stable pace.",
    "Usually, the client makes an order on a feature, which is then passed to the team leader, who distributes the tickets among the developers. The developer assigned to the ticket then makes a new version from the latest version: pulls the latest codes from the “main” branch, or as we call it, “branches out from main” or “branch out from the latest” and starts analyzing the requirements to comply with the order and proceed with the solution. Once the code is modified, the developer commits and “pushes” the new version to the remote, making it available to the rest of the team. Often times, there are clear policies for protecting the latest version from a stream of unsupervised pushes, so, “merge requests”, “pull requests” and even user policies are placed to secure the main branch. Once the code is accepted, and merged into the main branch, it often triggers a series of actions. It can be running tests, ensuring code quality, linting files, or triggering a deployment into some test environment. The tests are diverse, and in many cases, when the product is sensitive, the client often has its own testing environment.",
    "Delivering a software solution to a client often involves creating small features or fixing minor bugs. This common flow requires the development team to work in small iterative increments, which ensures that the changes are small, easy to revert, and fast to implement. This increases the security in the development process, and safeguards the final product’s security and reliability.",
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
    "Some years ago, messing around with some python scrapers, I realized at some point that acquiring interesting data was simple and straightforward. Nowadays, that same interesting data has become a clear valuable asset, and companies displaying it are well aware of protecting it. Say for example you are a big finance website, that has achieved to gather real time information of a significant amount of tickers (stocks). You pay for a bunch of API keys, and you makes sure you are compliant with the business you are running, and loyal to your providers… until you find script kiddies stealing and re-selling the same data you are displaying in your website. Something must be done.",
    "There are some ways of scraping data. The two ways I have been taught to do this is, either by searching for a specific id of the html element, or you somehow discover the endpoint that populates the front-end with nice, clear and structured data.",
    "To fight back, companies have started protecting both: the ids for the html elements containing the information now can change upon each request, and the endpoints are now secured with session cookies, http headers, and so on. They basically create their own dynamic naming convention to assign id- and class-names to the different html elements, making use of js scripts to rotate and update the names at a frequent rate. For this, you don’t really need to be a genius: there are several open-source tools that allow you to do this, depending on the language you are trying to obfuscate. A quick google search can present you with some powerful open source obfuscators.",
    "Of course, obfuscating the code sent to you browser can be a first step to secure your product, but HTTP request headers, ip address filtering, robot.txt files and other measures are often used against data stealing. If you ever encounter this kind of wall, be proud: it’s a clear sign of valuable data you are encountering.",
  ],
};
