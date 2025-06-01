import { Code } from "@heroui/code";
import { Snippet } from "@heroui/snippet";

import { Todo } from "@/types";

interface TodoTableProps {
  todos: Todo[];
  completedCount: number;
  totalCount: number;
}

// Function to get status color class
const getStatusColorClass = (status: Todo["status"]) => {
  switch (status) {
    case "completed":
      return "text-green-600";
    case "in-progress":
      return "text-yellow-600";
    case "pending":
      return "text-gray-600";
    default:
      return "text-gray-600";
  }
};

export default function TodoTable({
  todos,
  completedCount,
  totalCount,
}: TodoTableProps) {
  return (
    <div className="w-full max-w-2xl mt-8">
      <div className="flex flex-col justify-center items-center mb-4">
        <Snippet hideCopyButton hideSymbol className="w-fit" variant="bordered">
          <span>
            Monthly tasks: <Code color="success">{completedCount}</Code> /{" "}
            {totalCount}
          </span>
        </Snippet>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-2 px-4 text-left font-semibold">Task</th>
              <th className="py-2 px-4 text-left font-semibold">Status</th>
              <th className="py-2 px-4 text-left font-semibold">Deadline</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr
                key={todo.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-2 px-4">{todo.task}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${getStatusColorClass(todo.status)} bg-opacity-10 ${todo.status === "completed" ? "bg-green-100" : todo.status === "in-progress" ? "bg-yellow-100" : "bg-gray-100"}`}
                  >
                    {todo.status}
                  </span>
                </td>
                <td className="py-2 px-4">{todo.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
