"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

/**
 * Bascule FR <-> EN en conservant la route courante.
 * Contrairement au LanguageSelector du projet Vite (qui changeait une langue
 * côté client), on navigue ici vers une vraie URL localisée → pré-rendue.
 */
export default function LocaleSwitcher() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const params = useParams();

  const current = params.locale as string;
  const other = routing.locales.find((locale) => locale !== current)!;

  return (
    <Link
      href={pathname}
      locale={other}
      className="rounded-lg border border-gray-700 px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
    >
      {t("switchTo")}
    </Link>
  );
}
