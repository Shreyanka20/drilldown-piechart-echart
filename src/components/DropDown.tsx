import React from "react";

interface DropdownMenuProps {
  selectedOption: string;
  handleOptionChange: (option: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ selectedOption, handleOptionChange }) => {
  const options = ["FilledBottles", "CIP", "LabellerProduction", "GoodCases"];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleOptionChange(event.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
