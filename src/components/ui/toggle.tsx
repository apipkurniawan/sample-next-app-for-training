import React from "react";
import { twMerge } from "tailwind-merge";

interface ToggleProps {
  isChecked: boolean;
  onToggle: (checked: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ isChecked, onToggle }) => {
  return (
    <div
      onClick={() => onToggle(!isChecked)}
      className={twMerge(
        "flex items-center cursor-pointer bg-gray-300 w-12 h-6 rounded-full transition duration-200",
        isChecked && "bg-orange-400"
      )}
    >
      <div
        className={twMerge(
          "w-6 h-6 bg-white translate-x-0 rounded-full shadow-md transform transition duration-200",
          isChecked && "translate-x-6"
        )}
      />
    </div>
  );
};

export default Toggle;
