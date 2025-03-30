"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" className="cursor-pointer">
          {locale.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-24">
        <DropdownMenuRadioGroup value={locale} onValueChange={selectLanguage}>
          {routing.locales.map((lang) => (
            <DropdownMenuRadioItem key={lang} value={lang} className="cursor-pointer">
              {lang.toUpperCase()}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
