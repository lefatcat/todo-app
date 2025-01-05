import { FILTER_BOTTONS, TODO_FILTER } from "../consts";

interface Props {
  // lo que hace el typeof TODO_FILTER es indicar y type de cada una de las constantes en el objeto, luego [keyof typeof TODO_FILTER] indica la key de cada una de las constante, que seria el equivalente a 'ALL' | 'ACTIVE' | 'COMPLETED'
  onFilterChange: (
    filter: (typeof TODO_FILTER)[keyof typeof TODO_FILTER]
  ) => void;
  filterSelected: (typeof TODO_FILTER)[keyof typeof TODO_FILTER];
}
export const Filter: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul>
      {Object.entries(FILTER_BOTTONS).map(([key, { literal, href }]) => {
        const isSlected = key === filterSelected;
        const className = isSlected ? "selected" : "";
        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(e) => {
                e.preventDefault();
                onFilterChange(
                  key as (typeof TODO_FILTER)[keyof typeof TODO_FILTER]
                );
              }}
            >
              {literal}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
