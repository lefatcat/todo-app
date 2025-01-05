import { TODO_FILTER } from "../consts";
export interface Todos {
  id: number;
  title: string;
  complete: boolean;
}

export type Props = {
  todos: Todos[];
  onRemoveTodos: (id: number) => void;
  onCompleteTodos: (id: number, completed: boolean) => void; // Updated
};

export type FilterValue = (typeof TODO_FILTER)[keyof typeof TODO_FILTER];
