import React, { useState } from "react";
import { type Todos } from "../modules/types";

interface Props extends Todos {
  onRemove: (id: number) => void;
  onComplete: (id: number, completed: boolean) => void;
}

const Todo: React.FC<Props> = ({
  id,
  title,
  complete,
  onRemove,
  onComplete,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false); // New state for removal transition

  const handleToggleComplete = (e: React.ChangeEvent<HTMLInputElement>) => {
    onComplete(id, e.target.checked);
  };

  const handleClickRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsRemoving(true); // Trigger removal transition
    setTimeout(() => {
      onRemove(id);
    }, 300); // Delay removal to allow transition to complete
  };

  return (
    <div
      className={`transition-all duration-300 ease-in-out flex h-10 justify-between items-center space-x-3 px-1 rounded-2xl ${
        isHovered && !complete && "bg-gray-100 "
      } ${isRemoving ? "opacity-0 transition-opacity duration-300" : ""}`} // Apply transition class
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Checkbox personalizado */}
      <label className="flex items-center space-x-2 transition-all duration-300 ease-in-out">
        <input
          type="checkbox"
          className="opacity-0 absolute peer"
          checked={complete}
          onChange={handleToggleComplete}
        />
        <span
          className="w-6 h-6 inline-block rounded-full border border-gray-300 bg-white 
          transition-all duration-300 ease-in-out peer-checked:bg-green-100 peer-checked:border-green-200"
        ></span>
      </label>

      {/* Título */}
      <label
        className={`min-w-[200px] transition-all duration-300 ease-in-out${
          complete ? "text-gray-500  line-through italic " : "text-gray-700 "
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
           hover:bg-red-100 rounded-full
          ${isHovered ? "opacity-100" : "opacity-0"}
        `}
        onClick={handleClickRemove}
      >
        X
      </button>
    </div>
  );
};

export default Todo;
