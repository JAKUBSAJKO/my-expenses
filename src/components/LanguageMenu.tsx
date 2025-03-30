"use client";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function LanguageMenu() {
  const router = useRouter();
  const locale = useLocale();

  const pathname = usePathname();

  const selectLanguage = (language: string) => {
    router.replace({ pathname }, { locale: language });
  };

  return (
    <Select value={locale} onValueChange={selectLanguage}>
      <SelectTrigger className="w-24 cursor-pointer bg-gray-200 text-black hover:bg-gray-300">
        <SelectValue placeholder={locale.toUpperCase()} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {routing.locales.map((lang) => (
            <SelectItem key={lang} value={lang} className="cursor-pointer">
              {lang.toUpperCase()}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
