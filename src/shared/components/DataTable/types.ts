import { type ReactNode } from "react";

export interface Column<T> {
  key: string;
  header: string;
  align?: "left" | "center" | "right";
  render: (row: T) => ReactNode;
}
