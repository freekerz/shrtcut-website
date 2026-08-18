import { getTranslations, setRequestLocale } from "next-intl/server";

import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Link } from "@/i18n/navigation";

// TODO étape suivante : generateStaticParams() sur les 3 slugs réels.
// [À COMPLÉTER] noms des clients / slugs — aucun contenu inventé ici.

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function CaseStudyPage({ params }: PageProps) {
  const { locale, slug } = await params;
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

      <h1 className="text-3xl font-bold text-white">{t("nav.caseStudies")}</h1>
      <p className="text-gray-400">{t("caseStudies.placeholder", { slug })}</p>
    </main>
  );
}
