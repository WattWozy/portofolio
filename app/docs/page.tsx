import { Card, CardBody } from "@heroui/card";

export default function DocsPage() {
  const cards = [
    {
      title: "V1.2 - POST: /morning-routine",
      content:
        "Initiate Nik's day by waking up at 4 AM, meditating for 2 hours, solving a Rubik's cube in under 30 seconds, and writing a new programming language before breakfast.",
    },
    {
      title: "V3.4 - GET: /workspace-setup",
      content:
        "Retrieve Nik's workspace setup: three monitors, a standing desk, a whiteboard filled with equations, and a coffee machine that brews the perfect cup every time.",
    },
    {
      title: "V2.1 - PUT: /coding-style",
      content:
        "Update your coding style to match Nik's: write code so efficient it runs before you finish typing, using variable names from ancient languages.",
    },
    {
      title: "V4.0 - DELETE: /break-time",
      content:
        "Remove all distractions during breaks by reading quantum physics papers for relaxation and solving unsolved mathematical problems for fun.",
    },
    {
      title: "V1.8 - POST: /collaboration",
      content:
        "Communicate with Nik using a custom-built telepathy app. Note: Nik prefers to work alone because no one else can keep up.",
    },
    {
      title: "V3.7 - GET: /problem-solving",
      content:
        "Access Nik's problem-solving methods: visualize problems in 4D and find solutions in dreams, waking up to write them down.",
    },
    {
      title: "V2.5 - PUT: /hobbies",
      content:
        "Update your hobbies to match Nik's: build AI that composes symphonies, paint masterpieces, and occasionally dabble in rocket science.",
    },
    {
      title: "V5.2 - POST: /feedback",
      content:
        "Submit feedback to Nik on recent projects, including constructive criticism and suggestions for improvement.",
    },
    {
      title: "V3.8 - GET: /daily-summary/{date}",
      content:
        "Retrieve Nik's daily summary for a specific date. Parameter: {date} (string, format: YYYY-MM-DD).",
    },
    {
      title: "V4.5 - PUT: /update-goals/{goalId}",
      content:
        "Update a specific goal in Nik's list. Parameter: {goalId} (integer).",
    },
    {
      title: "V2.3 - DELETE: /remove-task/{taskId}",
      content:
        "Remove a specific task from Nik's to-do list. Parameter: {taskId} (integer).",
    },
    {
      title: "V4.4 - PUT: /update-skill/{skillName}",
      content:
        "Update a specific skill in Nik's skill set. Parameter: {skillName} (string).",
    },
    {
      title: "V2.6 - DELETE: /clear-notifications/{notificationId}",
      content:
        "Clear a specific notification from Nik's notifications list. Parameter: {notificationId} (integer).",
    },
    {
      title: "V5.3 - POST: /send-message/{message}",
      content: "Send a message to Nik. Parameter: {message} (string).",
    },
    {
      title: "V5.3 - GET: /surrender/{goalId} @DEPRECATED",
      content: "Tell Nik to surrender. Parameter: {goalId} (integer).",
    },
  ];

  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full h-full">
        {cards.map((card, index) => (
          <Card key={index} className="max-w-md w-full">
            <CardBody>
              <h2 className="text-xl font-bold">{card.title}</h2>
              <p className="mt-2">{card.content}</p>
            </CardBody>
          </Card>
        ))}
      </section>
    </div>
  );
}
