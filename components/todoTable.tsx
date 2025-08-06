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
