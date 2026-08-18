"use client";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const FULL_STEP_COUNT = 8;
// Étapes affichées dans la vue synthétique (indices dans process.steps).
const SUMMARY_INDEXES = [0, 1, 2, 3] as const;

const ProcessDeveloppement = () => {
  const t = useTranslations();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-gradient-to-b from-[#121212] to-[#1a1a1a] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            {t("process.sectionTitle")}
          </h2>
        </div>

        {!isExpanded ? (
          <>
            <div className="mb-8 grid grid-cols-1 gap-6">
              {SUMMARY_INDEXES.map((stepIndex, position) => (
                <div
                  key={stepIndex}
                  className="rounded-lg border border-gray-800 bg-[#1a1a1a] p-6 transition-all duration-300 hover:border-blue-500/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-4 border-[#1a1a1a] bg-blue-600">
                      <span className="text-lg font-bold text-white">{position + 1}</span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-white">
                        {t(`process.summarySteps.${position}.title`)}
                      </h3>
                      <p className="text-gray-300">{t(`process.summarySteps.${position}.desc`)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => setIsExpanded(true)}
                className="inline-flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-300"
              >
                {t("process.showDetail")}
                <ChevronDown className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="relative">
              <div
                className="absolute bottom-0 left-1/2 top-0 hidden w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-600 md:block"
                aria-hidden="true"
              />
              <div className="space-y-8 md:space-y-12">
                {Array.from({ length: FULL_STEP_COUNT }).map((_, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col items-start md:gap-12 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="z-10 mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-4 border-[#1a1a1a] bg-blue-600 md:absolute md:left-1/2 md:mb-0 md:h-16 md:w-16 md:-translate-x-1/2">
                      <span className="text-lg font-bold text-white md:text-xl">{index + 1}</span>
                    </div>
                    <div
                      className={`w-full md:w-[calc(50%-4rem)] ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div className="rounded-lg border border-gray-800 bg-[#1a1a1a] p-6 shadow-lg transition-all duration-300 hover:border-blue-500/30">
                        <h3 className="mb-3 text-xl font-bold text-white">
                          {t(`process.steps.${index}.title`)}
                        </h3>
                        <p className="leading-relaxed text-gray-300">
                          {t(`process.steps.${index}.description`)}
                        </p>
                      </div>
                    </div>
                    <div className="hidden w-[calc(50%-4rem)] md:block" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-300"
              >
                {t("process.collapse")}
                <ChevronDown className="h-5 w-5 rotate-180" aria-hidden="true" />
              </button>
            </div>
          </>
        )}

        <div className="mt-16 rounded-xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold text-white">{t("process.afterTitle")}</h3>
          <p className="text-xl text-gray-300">{t("process.afterDescription")}</p>
        </div>
      </div>
    </section>
  );
};

export default ProcessDeveloppement;
