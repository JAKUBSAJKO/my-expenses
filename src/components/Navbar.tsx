"use client";

import LanguageMenu from "@/components/LanguageMenu";

export default function Navbar() {
  return (
    <div className="w-full h-16 bg-teal-700 flex items-center justify-between px-16 text-white">
      <div>MyExpenses</div>
      <ul className="flex-1 flex justify-center items-center gap-8">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Board</li>
      </ul>
      <div className="flex items-center gap-4">
        <LanguageMenu />
        <div className="w-8 h-8 bg-white rounded-full"></div>
      </div>
    </div>
  );
}
