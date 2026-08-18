import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const OffreDeveloppement = () => {
  const t = useTranslations();
  const whyPoints = t.raw("developpement.whyPoints") as string[];
  const guarantees = t.raw("developpement.guarantees") as string[];

  return (
    <section id="dev" className="scroll-mt-24 bg-[#121212] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-lg uppercase tracking-widest text-blue-400">
            {t("developpement.sectionTitle")}
          </h2>
          <h3 className="mb-6 text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
            {t.rich("developpement.title", {
              u: (chunks) => <u>{chunks}</u>,
            })}
          </h3>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            {t("developpement.subtitle")}
          </p>
        </div>

        <div className="mb-12 rounded-2xl border border-gray-800 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 shadow-2xl md:p-12">
          <div className="mb-12 text-center">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="inline-block rounded-full border border-blue-500/30 bg-blue-600/10 px-6 py-3">
                <span className="text-3xl font-bold text-blue-400 md:text-4xl">
                  {t("developpement.price")}
                </span>
              </div>
              <div className="inline-block rounded-full border border-blue-500/30 bg-blue-600/10 px-6 py-3">
                <span className="text-3xl font-bold text-blue-400 md:text-4xl">
                  {t("developpement.duration")}
                </span>
              </div>
            </div>
            <p className="mt-4 text-gray-300">{t("developpement.guaranteesSubtitle")}</p>
          </div>

          <div className="mb-12">
            <h4 className="mb-6 text-center text-2xl font-bold text-white">
              {t("developpement.whyTitle")}
            </h4>
            <div className="grid grid-cols-1 gap-6">
              {whyPoints.map((point, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-800 bg-[#1a1a1a] p-6 transition-all duration-300 hover:border-blue-500/30"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600/20">
                        <div className="h-3 w-3 rounded-full bg-blue-500" />
                      </div>
                    </div>
                    <p className="leading-relaxed text-gray-300">{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="mb-6 text-center text-2xl font-bold text-white">
              {t("developpement.guaranteesTitle")}
            </h4>
            <div className="space-y-4">
              {guarantees.map((guarantee, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-lg border border-green-500/20 bg-[#1a1a1a] p-6"
                >
                  <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
                  <p className="leading-relaxed text-gray-300">{guarantee}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-block transform rounded-lg bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
            >
              {t("cta.estimateProject")}
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl text-center">
          <p className="text-lg text-gray-400">
            {t("developpement.bridge")}{" "}
            <a href="#conseil" className="text-blue-400 underline transition-colors hover:text-blue-300">
              {t("developpement.bridgeLink")}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OffreDeveloppement;
