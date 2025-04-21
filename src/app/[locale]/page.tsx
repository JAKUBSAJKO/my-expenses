"use client";

import { Link } from "@/i18n/navigation";
import { createClient } from "@/utils/supabase/client";
import { Session } from "@supabase/supabase-js";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [session, setSession] = useState<Session | null>(null);

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

  useEffect(() => {
    fetchSession();

    const { data: authListener } = createClient().auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const fetchSession = async () => {
    const currentSession = await createClient().auth.getSession();
    console.log(currentSession);
    setSession(currentSession.data.session);

    console.log(session);
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-teal-500">
      My Expenses
      <button
        onClick={changeDarkMode}
        className="ml-4 p-2 bg-teal-500 text-white rounded"
      >
        Enable Dark Mode
      </button>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
    </div>
  );
}
