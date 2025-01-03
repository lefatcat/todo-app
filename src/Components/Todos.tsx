import { type Props, type Todos } from "../modules/types";
import Todo from "./Todo";
const Todos = ({ todos }: Props) => {
  console.log("hola", todos);
  return (
    <ul className="border rounded-b-2xl p-4">
      {todos.map((todo: Todos) => {
        return (
          <li
            key={todo.id}
            className={`rounded-2xl ${todo.complete ? "bg-red-100 " : "white"}`}
          >
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              complete={todo.complete}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
