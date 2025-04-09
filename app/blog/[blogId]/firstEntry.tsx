export const firstEntry = {
  id: "firstEntry",
  title: "Working experience first year: A brief summary",
  timestamp: "2024-05-27T10:30:00Z",
  headers: [
    "Application process",
    "About the people",
    "Initial team: the blue ones",
    "About knowledge sharing culture",
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
    "Application process",
    "Tech stack and general architecture",
    "Teamwork: challenges and profits",
  ],
  paragraphs: [
    'Just after completing my work with the first team, summer was approaching, and the next project involved developing an internal chatbot: an AI-powered customer service platform for bank clients. Terms like "AI", "RAG", and "Vector database" frequently peppered our group chat. The initiative grew more intriguing with each passing day. True to their Swedish work culture, the team members had already meticulously planned their summer schedule, scheduling numerous meetings to discuss the tech stack and tools weeks before the project\'s kickoff.',
    "The tech stack was partly aligned with the more classical tools used across the different teams in the banking division, and included a backend built on Java Spring Boot, an integration layer (which I will explain in the following paragraph) and a react React webapp to fuel our frontend service. When it came to the more AI related engine, hosted in the integration layer, we used Langchain4j: a spinoff of the Python library “LangChain”. This library was included as a Spring dependency to our Spring boot repo, so that the installation and information management could be seamless. When it came to connecting the library to an LLM engine we filled our credit cards (two of us in the team) and bought a generous amount of tokens linked to our OPENAI API key. This API key not only allowed us to receive some good answers to natural language prompts, but also enabled us to translate strings (chunks of text) into meaning-vectors, which were then stored into a vector database the LLM was able to query. This was the RAG part, as you can guess. All these layers were hosted in Azure, where we deployed our three services: the backend, the integration layer, and the frontend. Azure served both as a great codebase as well as a versatile deployment tool. Pipelines and environments were quickly built with the help of some of the senior workers at the banking division and our Git policies were well defined, as well as our stable way of working. As you might imagine, the selection of tools and technologies did not happen in a couple of minutes: we started off trying the original Python library, and testing some free inference models via huggingface. The decisions were taken as a group, and were backed by simple PoC failures and a “get it done” mentality.",
    "Working with 15 other junior developers proved to be an incredibly enriching experience. We enjoyed full autonomy, reporting to our team leader only on Mondays and organizing ourselves based on availability and task preferences. I chose to focus on the integration layer, spending the early weeks conducting research and subsequently wrestling with our stubborn LLM engine. During the first two weeks, I worked alongside T. Strömberg, exploring creative approaches within the original Python framework. Our goal was to develop a stable agent capable of intelligently differentiating between calling its Tools, executing RAG queries, and responding based on its conversational training. The following week, J. Saeed joined the team with remarkable efficiency, decisively advocating for the Java library initially proposed. From my perspective, Java offers superior fail-traceability and type-class accountability. We were also more familiar with best practices for developing Java Spring Boot microservices, and ultimately, efficiency triumphed over our initial Tony Stark-esque experimental approach. It was fascinating to observe how a seemingly mechanical field like software engineering can be rife with human emotions—pride, impatience, frustration, and even jealousy. These sentiments were likely intensified by the collective decision to forgo summer vacations. Despite the challenges, I consider this project the most collaborative and transformative team experience of my career.",
    "When it came to sharing knowledge, I highly appreciated the specific actions taken to spread knowledge. Knowledge in the sense of technical novelties, revising the structure of the code, or taking some time to explain at a high level how the architecture of the project looked. Knowledge could also be lifting up a problem one was facing that week to the seniors in the team, or the other way around: the architects in the team reminding us others how stuff had to be implemented. Another stable specific resource for sharing information about the project was the documentation and the internal network of documents that were revised in parallel to the development of certain stories. As you might imagine: it was a huge volume of data to assimilate, and still is. And this can, of course, either make you desperate and bored, or glad and joyful with an apparently endless fuel for your curiosity. Outside of the team, we had monthly meetings with all other teams across the teams working for other customers, and we even started a hobby-project group, where we shared features of new technology stacks and sat together and developed some simple proofs of concept (PoCs).",
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
  title: "Code Obfuscation: meaning, process and an example",
  timestamp: "2025-03-27T10:30:00Z",
  headers: [
    "Where it all started",
    "Scraping data",
    "Countermeasures",
    "Dynamic element-ids",
    "Headers and cookies",
  ],
  paragraphs: [
    "Some years ago, messing around with some python scrapers, I realized at some point that acquiring interesting data was simple and straightforward. Nowadays, that same interesting data has become a clear valuable asset, and companies displaying it are well aware of protecting it. Say for example you are a big finance website, that has achieved to gather real time information of a significant amount of tickers (stocks). You pay for a bunch of API keys, and you makes sure you are compliant with the business you are running, and loyal to your providers… until you find script kiddies stealing and re-selling the same data you are displaying in your website. Something must be done.",
    "There are some ways of scraping data. The two ways I have been taught to do this is, either by searching for a specific id of the html element, or you somehow discover the endpoint that populates the front-end with nice, clear and structured data.",
    "To fight back, companies have started protecting both: the ids for the html elements containing the information now can change upon each request, and the endpoints are now secured with session cookies, http headers, and so on.",
    "SOON TO ARRIVE",
    "SOON TO ARRIVE",
  ],
};
