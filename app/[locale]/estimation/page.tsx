import { getTranslations, setRequestLocale } from "next-intl/server";

import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

import type { Metadata } from "next";

// Coquille sans contenu : on empêche l'indexation tant que l'outil n'existe pas.
export const metadata: Metadata = { robots: { index: false, follow: true } };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// TODO (hors périmètre étape 2) : outil d'estimation — règles de calcul et
// grille tarifaire [À COMPLÉTER].
export default async function EstimationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-8 px-6 py-20">
      <header className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          Shrtcut<span className="text-blue-500">.</span>
        </Link>
        <LocaleSwitcher />
      </header>
      <h1 className="text-3xl font-bold text-white">{t("nav.estimation")}</h1>
      <p className="text-gray-400">{t("pages.estimation.placeholder")}</p>
    </main>
  );
}
