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
  return (
    <>
      <Todos todos={todos} />
    </>
  );
}

export default App;
