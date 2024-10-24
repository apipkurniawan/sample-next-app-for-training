import React from "react";

interface ToggleProps {
  isChecked: boolean;
  onToggle: (checked: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ isChecked, onToggle }) => {
  return (
    <div
      onClick={() => onToggle(!isChecked)}
      className={`flex items-center cursor-pointer ${
        isChecked ? "bg-orange-400" : "bg-gray-300"
      } w-12 h-6 rounded-full transition duration-200`}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition duration-200 ${
          isChecked ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </div>
  );
};

export default Toggle;
