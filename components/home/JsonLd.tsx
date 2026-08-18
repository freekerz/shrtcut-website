import { getTranslations } from "next-intl/server";

import { localizedUrl, SITE_NAME, SITE_URL } from "@/lib/seo";

/**
 * Données structurées schema.org (JSON-LD) : décrivent l'entreprise pour les
 * moteurs (rich results) et les bots IA. Injecté dans la home.
 * Les valeurs proviennent des messages i18n et des mentions légales.
 */
export default async function JsonLd({ locale }: { locale: string }) {
  const meta = await getTranslations({ locale, namespace: "meta" });
  const consultant = await getTranslations({ locale, namespace: "consultant" });

  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: localizedUrl(locale),
    logo: `${SITE_URL}/favicon.svg`,
    image: `${localizedUrl(locale)}/opengraph-image`,
    description: meta("description"),
    email: "go@shrtcut.ai",
    founder: {
      "@type": "Person",
      name: "David Lascombe",
      jobTitle: consultant("role"),
      sameAs: consultant("linkedin"),
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "60 rue François 1er",
      postalCode: "75008",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    areaServed: ["FR", "CA"],
    sameAs: [consultant("linkedin")],
    knowsAbout: [
      "Développement web",
      "Développement mobile",
      "Conseil IA",
      "Intelligence artificielle",
      "MVP",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify échappe le contenu ; suffisant pour du JSON-LD statique.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
