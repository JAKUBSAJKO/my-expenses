"use client";

import LanguageMenu from "@/components/LanguageMenu";
import { routes } from "@/routes/routes";
import { useSessionStore } from "@/store/session";
import { createClient } from "@/utils/supabase/client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Navbar() {
  const t = useTranslations("Nav");
  const router = useRouter();

  const { session, clearSession, clearUser, setSession, setUser, setLoading } =
    useSessionStore((state) => state);

  const logout = async () => {
    const { error } = await createClient().auth.signOut();

    if (error) {
      console.error("Error signing out:", error.message);
      return;
    }

    clearSession();
    clearUser();
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
    setLoading(true);
    const currentSession = await createClient().auth.getSession();
    setSession(currentSession.data.session);
    setUser(currentSession.data.session?.user ?? null);
    setLoading(false);
  };

  return (
    <div className="w-full h-16 bg-teal-700 flex items-center justify-between px-16 text-white">
      <div>MyExpenses</div>
      <ul className="flex-1 flex justify-center items-center gap-8">
        <li className="cursor-pointer">
          <Link href={routes.home}>{t("home")}</Link>
        </li>
        <li className="cursor-pointer">
          <Link href={routes.board}>{t("board")}</Link>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        {session ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <div>
            <button onClick={() => router.push(routes.signin)}>SignIn</button>
            <button onClick={() => router.push(routes.signup)}>SignUp</button>
          </div>
        )}
        <LanguageMenu />
        <div className="w-8 h-8 bg-white rounded-full"></div>
      </div>
    </div>
  );
}
