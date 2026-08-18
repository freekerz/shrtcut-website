import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations();

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-8 px-6 py-20">
      <header className="flex items-center justify-between">
        <span className="text-2xl font-bold text-white">
          Shrtcut<span className="text-blue-500">.</span>
        </span>
        <LocaleSwitcher />
      </header>

      {/* TODO étape suivante : migrer HeaderNew / HeroNew / ConsultantSection /
          OffreDeveloppement / ProcessDeveloppement / OffresConseil /
          ContactForm / FooterNew depuis le projet Vite. */}
      <p className="text-gray-400">{t("home.placeholder")}</p>

      <nav className="flex flex-col gap-2 text-blue-400">
        <Link href="/case-studies/placeholder" className="hover:underline">
          {t("nav.caseStudies")} →
        </Link>
        <Link href="/estimation" className="hover:underline">
          {t("nav.estimation")} →
        </Link>
      </nav>
    </main>
  );
}
