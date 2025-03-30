"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const t = useTranslations("HomePage");

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
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
    </div>
  );
}
