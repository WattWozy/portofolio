import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Todo {
  id: number;
  task: string;
  status: "pending" | "in-progress" | "completed";
  deadline: string;
}
