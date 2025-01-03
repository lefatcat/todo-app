import { useState } from "react";
import { type Todos } from "../modules/types";

const Todo: React.FC<Todos> = ({ id, title, complete }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`flex h-10 justify-between items-center space-x-3 px-1 ${
        isHovered && !complete && "bg-gray-100"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Checkbox personalizado */}
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          className="hidden peer"
          checked={complete}
          onChange={() => {}}
        />
        <span
          className="w-6 h-6 inline-block rounded-full border border-gray-300 bg-white 
          peer-checked:bg-green-100 peer-checked:border-green-100"
        ></span>
      </label>

      {/* Título */}
      <label
        className={`${
          complete ? "text-gray-500 line-through italic" : "text-gray-700"
        }`}
      >
        {title}
      </label>

      {/* Botón */}
      <button
        aria-label="Eliminar tarea"
        className={`
          px-2 
          text-black 
          transition-all 
          duration-200 
          ease-in-out
          ${complete ? "opacity-70" : "opacity-0"}
          ${
            !complete &&
            isHovered &&
            "opacity-100 hover:bg-red-100 rounded-full"
          }
        `}
        onClick={() => {}}
      >
        X
      </button>
    </div>
  );
};

export default Todo;
