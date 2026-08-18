import type { Metadata } from "next";

import { routing } from "@/i18n/routing";

// Domaine de production (validé avec le client).
export const SITE_URL = "https://shrtcut.ai";
export const SITE_NAME = "Shrtcut";

const OG_LOCALE: Record<string, string> = { fr: "fr_FR", en: "en_US" };

/** URL absolue et localisée d'un chemin (localePrefix "always"). */
export function localizedUrl(locale: string, path = "") {
  return `${SITE_URL}/${locale}${path}`;
}

/**
 * Métadonnées complètes (canonical + hreflang + OpenGraph + Twitter) pour une
 * page localisée. À appeler depuis chaque generateMetadata.
 */
export function pageMetadata({
  locale,
  path = "",
  title,
  description,
}: {
  locale: string;
  path?: string;
  title: string;
  description?: string;
}): Metadata {
  const url = localizedUrl(locale, path);
  const languages: Record<string, string> = {};
  for (const l of routing.locales) languages[l] = localizedUrl(l, path);
  languages["x-default"] = localizedUrl(routing.defaultLocale, path);

  return {
    title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: OG_LOCALE[locale] ?? "fr_FR",
      url,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
