export interface Todos {
  id: number;
  title: string;
  complete: boolean;
}

export type Props = {
  todos: Todos[];
};
