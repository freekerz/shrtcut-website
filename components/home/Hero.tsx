import { useTranslations } from "next-intl";

/**
 * Hero. `hero.tagline` contient des balises <strong><em> : rendu via t.rich
 * (remplace le <Trans> d'i18next). Les CTA sont des ancres vers #dev / #conseil.
 */
const Hero = () => {
  const t = useTranslations();

  return (
    <section
      id="top"
      className="relative flex min-h-screen -translate-y-24 select-none items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#121212] px-6 py-20 sm:translate-y-0 sm:py-20"
    >
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="mb-8 text-3xl font-normal leading-tight text-white md:text-4xl lg:text-5xl">
          {t.rich("hero.tagline", {
            strong: (chunks) => <strong>{chunks}</strong>,
            em: (chunks) => <em>{chunks}</em>,
          })}
        </h1>

        {/* CTAs — 2 portes d'entrée */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="group relative">
            <a
              href="#dev"
              className="flex w-[350px] transform flex-col items-center rounded-lg bg-blue-600 px-8 py-5 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
            >
              <span className="mb-1 text-xs uppercase tracking-wide text-blue-100">
                {t("hero.ctaDev.category")}
              </span>
              <span className="text-lg font-semibold">{t("hero.ctaDev.promise")}</span>
            </a>
            <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-3 w-96 -translate-x-1/2 rounded-xl border border-white/10 bg-[#0b1220] px-6 py-4 text-center text-sm leading-relaxed text-white opacity-0 shadow-2xl transition-opacity duration-150 group-hover:opacity-100 md:text-base">
              {t("hero.ctaDev.tooltip")}
              <span className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-white/10 bg-[#0b1220]" />
            </div>
          </div>

          <div className="group relative">
            <a
              href="#conseil"
              className="flex w-[350px] transform flex-col items-center rounded-lg border-2 border-blue-500 bg-transparent px-8 py-5 text-white transition-all duration-300 hover:scale-105 hover:bg-blue-600"
            >
              <span className="mb-1 text-xs uppercase tracking-wide text-blue-300">
                {t("hero.ctaConseil.category")}
              </span>
              <span className="text-lg font-semibold">{t("hero.ctaConseil.promise")}</span>
            </a>
            <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-3 w-96 -translate-x-1/2 rounded-xl border border-white/10 bg-[#0b1220] px-6 py-4 text-center text-sm leading-relaxed text-white opacity-0 shadow-2xl transition-opacity duration-150 group-hover:opacity-100 md:text-base">
              {t("hero.ctaConseil.tooltip")}
              <span className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-white/10 bg-[#0b1220]" />
            </div>
          </div>
        </div>

        {/* Indicateur de défilement + annotation manuscrite */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex animate-bounce items-center justify-center">
            <svg
              className="h-6 w-6 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <a
            href="#consultant"
            className="relative mx-auto mt-3 block text-slate-200/85 transition-colors hover:text-slate-100"
            aria-label={t("hero.who")}
          >
            <span className="font-handwritten-shadow handwriting-pencil inline-block -rotate-[11deg] transform select-none text-[2.05rem] sm:text-[2.55rem]">
              {t("hero.who")}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
