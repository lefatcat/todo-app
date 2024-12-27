import { type Props, type Todos } from "../modules/types";
import Todo from "./Todo";
const Todos = ({ todos }: Props) => {
  console.log("hola", todos);
  return (
    <ul>
      {todos.map((todo: Todos) => {
        return (
          <li
            key={todo.id}
            className={`${todo.complete ? "bg-amber-900" : "bg-amber-200"}`}
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
