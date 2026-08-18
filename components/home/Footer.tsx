import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

const Footer = () => {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-[#0a0a0a] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-2xl font-bold text-white">Shrtcut</h3>
            <p className="text-sm text-gray-400">
              {t.rich("hero.tagline", {
                strong: (chunks) => <strong>{chunks}</strong>,
                em: (chunks) => <em>{chunks}</em>,
              })}
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
              {t("footer.offers")}
            </h4>
            <div className="flex flex-col gap-2">
              <a href="#dev" className="text-left text-sm text-gray-400 transition-colors hover:text-blue-400">
                {t("header.devLink")}
              </a>
              <a href="#conseil" className="text-left text-sm text-gray-400 transition-colors hover:text-blue-400">
                {t("header.conseilLink")}
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
              {t("footer.legalTitle")}
            </h4>
            <Link
              href="/mentions-legales"
              className="text-sm text-gray-400 transition-colors hover:text-blue-400"
            >
              {t("footer.legal")}
            </Link>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
              {t("footer.companyTitle")}
            </h4>
            <p className="whitespace-pre-line text-sm text-gray-400">{t("footer.location")}</p>
          </div>
        </div>

        <p className="text-xs text-gray-600">
          © {currentYear} Shrtcut — {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
