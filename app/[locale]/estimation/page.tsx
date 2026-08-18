import { getTranslations, setRequestLocale } from "next-intl/server";

import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function EstimationPage({ params }: PageProps) {
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
      {/* TODO : outil d'estimation — règles de calcul et grille tarifaire
          [À COMPLÉTER] (à définir avec toi). */}
      <p className="text-gray-400">{t("estimation.placeholder")}</p>
    </main>
  );
}
