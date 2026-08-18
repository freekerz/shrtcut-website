import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";

import LocaleSwitcher from "@/components/LocaleSwitcher";

/**
 * Header fixe. Les anciens boutons "scrollTo" (JS) sont remplacés par des
 * ancres <a href="#..."> : fonctionnent sans JS, meilleures pour le SEO, et le
 * défilement doux est géré par `scroll-behavior: smooth` (globals.css).
 */
const Header = () => {
  const t = useTranslations();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-[#121212]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="text-2xl font-bold text-white transition-colors hover:text-blue-400"
        >
          Shrtcut<span className="text-blue-500">.</span>
        </a>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-6 sm:flex">
          <a href="#dev" className="text-gray-300 transition-colors hover:text-white">
            {t("header.devLink")}
          </a>
          <a href="#conseil" className="text-gray-300 transition-colors hover:text-white">
            {t("header.conseilLink")}
          </a>
          <a
            href="#contact"
            className="inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
          >
            {t("cta.talkToConsultant")}
          </a>
          <LocaleSwitcher />
        </nav>

        {/* Navigation mobile */}
        <nav className="flex items-center gap-4 sm:hidden">
          <a
            href="#contact"
            aria-label={t("cta.talkToConsultant")}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
          >
            <Mail className="h-4 w-4" />
          </a>
          <LocaleSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;
