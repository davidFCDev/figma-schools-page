import React from "react";

interface FilterOptionProps {
  selectedOptions: string[];
  toggleOption: (option: string) => void;
  text: string;
}

const FilterOption: React.FC<FilterOptionProps> = ({
  selectedOptions,
  toggleOption,
  text,
}) => {
  return (
    <div
      className={`px-7 py-3 rounded-3xl font-semibold bg-white border hover:cursor-pointer ${
        selectedOptions.includes(text)
          ? "border-yellow bg-yellowPalid"
          : "border-neutral-200"
      } border-neutral-200`}
      onClick={() => toggleOption(text)}
    >
      {text}
    </div>
  );
};

export default FilterOption;
