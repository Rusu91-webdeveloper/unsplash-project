import { useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { IoSunnySharp } from "react-icons/io5";

const ThemeToggle = ({ toggle, toggleButton }) => {
  return (
    <div className="flex justify-end">
      <button onClick={toggleButton} className="h-40 w-40">
        {!toggle ? <FaMoon /> : <IoSunnySharp />}
      </button>
    </div>
  );
};

export default ThemeToggle;
