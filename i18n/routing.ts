import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Locales supportées (identiques au projet Vite : fr / en)
  locales: ["fr", "en"],

  // Le site est édité en français en premier → fr = défaut.
  // [À VALIDER] l'ancien projet avait fallbackLng "en" mais détectait fr via le navigateur.
  defaultLocale: "fr",

  // Toujours préfixer l'URL (/fr/..., /en/...) : chaque page a une URL canonique
  // par langue, ce qui est ce qu'on veut pour le SEO et les crawlers IA.
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
