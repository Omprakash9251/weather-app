import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeChange() {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("dark", mode);
    localStorage.setItem("theme", mode ? "dark" : "light");
  }, [mode]);

  return (
    <div className="icon-container">
      <button
        onClick={() => setMode(!mode)}
        className={`icon ${mode ? "text-white" : "text-black"}`}
      >
        {mode ? <FiSun /> : <FiMoon />}
      </button>
    </div>
  );
}
