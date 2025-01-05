const mockTodos = [
  {
    id: 1,
    title: "Comprar leche",
    complete: false,
  },
  {
    id: 2,
    title: "Llamar al doctor",
    complete: true,
  },
  {
    id: 3,
    title: "Escribir un correo a Juan",
    complete: false,
  },
  {
    id: 4,
    title: "Limpiar el escritorio",
    complete: true,
  },
  {
    id: 5,
    title: "Leer 10 páginas de un libro",
    complete: false,
  },
];
import { useState } from "react";
import Todos from "./Components/Todos";

function App() {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCompleted = (id: number, completed: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="container flex justify-center items-center">
          <Todos
            todos={todos}
            onRemoveTodos={handleRemove}
            onCompleteTodos={handleCompleted}
          />
        </div>
      </div>
    </>
  );
}

export default App;
