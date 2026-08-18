import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";
import { localizedUrl } from "@/lib/seo";

// Pages publiques indexables. Les coquilles (estimation, case-studies) sont
// exclues tant qu'elles n'ont pas de contenu (elles sont aussi en noindex).
const PATHS = ["", "/mentions-legales"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(locale, path),
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, localizedUrl(l, path)]),
        ),
      },
    })),
  );
}
