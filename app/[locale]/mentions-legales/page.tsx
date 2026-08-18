import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legalNotice" });
  return { title: `${t("title")} — Shrtcut` };
}

const SECTIONS = [
  "companyDetails",
  "hosting",
  "intellectualProperty",
  "dataProtection",
] as const;

export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("legalNotice");

  return (
    <div className="min-h-screen bg-[#121212]">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Shrtcut
        </Link>

        <h1 className="mb-8 text-4xl font-semibold text-white md:text-5xl">{t("title")}</h1>

        <div className="space-y-10">
          {SECTIONS.map((section) => (
            <section key={section}>
              <h2 className="mb-3 text-2xl font-semibold text-white">{t(`${section}.title`)}</h2>
              <div className="whitespace-pre-line leading-relaxed text-gray-300">
                {t(`${section}.content`)}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
