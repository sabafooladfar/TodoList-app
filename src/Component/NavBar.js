import { useState } from "react";
import Select from "react-select";

const filterOptions = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "Uncompleted", label: "Uncompleted" },
];
const NavBar = ({ unCompletedTodos, onSelect, selectedOption}) => {
  return (
    <div>
      Uncompleted Todos : <button>{unCompletedTodos}</button>
      <div>
        <Select
          onChange={onSelect}
          options={filterOptions}
          value={selectedOption}
        />
      </div>
    </div>
  );
};

export default NavBar;
