import { type Todos } from "../modules/types";

const Todo: React.FC<Todos> = ({ id, title, complete }) => {
  return (
    <div className="flex items-center space-x-3">
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
          peer-checked:bg-blue-600 peer-checked:border-blue-600"
        ></span>
      </label>

      {/* Título */}
      <label className="text-gray-700">{title}</label>

      {/* Botón */}
      <button
        className="Destroy px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
        onClick={() => {}}
      >
        x
      </button>
    </div>
  );
};

export default Todo;
