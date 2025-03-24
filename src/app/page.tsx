"use client";

import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const changeDarkMode = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-teal-500">
      My Expenses
      <button onClick={changeDarkMode} className="ml-4 p-2 bg-teal-500 text-white rounded">
        Enable Dark Mode
      </button>
    </div>
  );
}
