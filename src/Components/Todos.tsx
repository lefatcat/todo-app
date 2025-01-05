import { type Props, type Todos } from "../modules/types";
import Todo from "./Todo";
const Todos = ({ todos, onRemoveTodos, onCompleteTodos }: Props) => {
  console.log("hola", todos);
  return (
    <ul className="border rounded-b-2xl p-4 min-w-72 text-center">
      {todos.length === 0
        ? "No hay tareas pendientes"
        : todos.map((todo: Todos) => {
            return (
              <li
                key={todo.id}
                className={`rounded-2xl  ${
                  todo.complete ? "bg-red-100 " : "white"
                }`}
              >
                <Todo
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  complete={todo.complete}
                  onRemove={onRemoveTodos}
                  onComplete={onCompleteTodos}
                />
              </li>
            );
          })}
    </ul>
  );
};

export default Todos;
