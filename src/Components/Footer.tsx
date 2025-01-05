import React from "react";
import { Filter } from "./Filter";
import { FilterValue } from "../modules/types";

interface Props {
  activeCount: number;
  completedCount: number;
  filterSelected: FilterValue;
  onClearCompleted: () => void;
  handleFilterChange: (filter: FilterValue) => void;
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  onClearCompleted,
}) => {
  return (
    <footer>
      <span>
        <strong>{activeCount}</strong> Tareas Pendientes
      </span>
      <Filter
        filterSelected={filterSelected}
        onFilterChange={() => {}}
      ></Filter>
    </footer>
  );
};
