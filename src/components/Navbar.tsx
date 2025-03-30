"use client";

import LanguageMenu from "@/components/LanguageMenu";
import { routes } from "@/routes/routes";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Navbar() {
  const t = useTranslations("Nav");

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
        <LanguageMenu />
        <div className="w-8 h-8 bg-white rounded-full"></div>
      </div>
    </div>
  );
}
