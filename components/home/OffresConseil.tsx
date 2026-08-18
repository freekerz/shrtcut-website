import { CheckCircle, Lightbulb, Sparkles, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

const ICONS = [Lightbulb, Sparkles, TrendingUp] as const;
const ATELIER_IDS = ["mvp", "ia", "mission"] as const;

/** Colore le suffixe après le tiret cadratin dans un titre d'atelier. */
function AtelierTitle({ title }: { title: string }) {
  const parts = title.split("—");
  if (parts.length < 2) return <>{title}</>;
  return (
    <>
      <span>{parts[0]} — </span>
      <span className="text-blue-400">{parts.slice(1).join("—").trim()}</span>
    </>
  );
}

const OffresConseil = () => {
  const t = useTranslations();

  return (
    <section id="conseil" className="scroll-mt-24 bg-[#1a1a1a] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-lg uppercase tracking-widest text-blue-400">
            {t("conseil.sectionTitle")}
          </h2>
          <h3 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            {t("conseil.title")}
          </h3>
          <p className="mx-auto mb-4 max-w-4xl whitespace-pre-line text-xl text-gray-300">
            {t("conseil.longIntro")}
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {ATELIER_IDS.map((atelierId, index) => {
            const Icon = ICONS[index];
            const isMission = atelierId === "mission";
            const deroulement = isMission
              ? []
              : (t.raw(`conseil.ateliers.${index}.deroulement`) as string[]);
            const livrables = isMission
              ? []
              : (t.raw(`conseil.ateliers.${index}.livrables`) as string[]);
            const method = isMission
              ? (t.raw(`conseil.ateliers.${index}.method`) as string[])
              : [];

            return (
              <div
                key={atelierId}
                className="flex flex-col rounded-2xl border border-gray-800 bg-gradient-to-br from-[#121212] to-[#0f0f0f] p-8 shadow-lg transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl"
              >
                <div className="mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-500/30 bg-blue-600/10">
                    <Icon className="h-8 w-8 text-blue-400" />
                  </div>
                </div>

                <h3 className="mb-4 text-2xl font-bold leading-tight text-white">
                  <AtelierTitle title={t(`conseil.ateliers.${index}.title`)} />
                </h3>

                <p className="mb-6 leading-relaxed text-gray-300" style={{ lineHeight: "1.7" }}>
                  {t(`conseil.ateliers.${index}.intro`)}
                </p>

                <div className="mb-6 flex items-center justify-between rounded-lg border border-gray-800 bg-[#1a1a1a] p-4">
                  <span className="text-2xl font-bold text-blue-400">
                    {t(`conseil.ateliers.${index}.price`)}
                  </span>
                  {!isMission && (
                    <span className="text-right text-sm text-gray-400">
                      {t(`conseil.ateliers.${index}.duration`)}
                    </span>
                  )}
                </div>

                {!isMission && (
                  <>
                    <div className="mb-8">
                      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                        {t("conseil.labels.schedule")}
                      </h4>
                      <ul className="space-y-3">
                        {deroulement.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-300"
                            style={{ lineHeight: "1.6" }}
                          >
                            <span className="mt-1 text-blue-400">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                        {t("conseil.labels.deliverables")}
                      </h4>
                      <ul className="space-y-3">
                        {livrables.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-300"
                            style={{ lineHeight: "1.6" }}
                          >
                            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                {isMission && (
                  <div className="mb-8 flex-grow">
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                      {t(`conseil.ateliers.${index}.methodTitle`)}
                    </h4>
                    <ul className="space-y-3">
                      {method.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-300"
                          style={{ lineHeight: "1.6" }}
                        >
                          <span className="min-w-[20px] font-bold text-blue-400">{i + 1}.</span>
                          <span className="whitespace-pre-line">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {atelierId === "ia" && (
                  <div className="mb-6 rounded-lg border border-blue-500/20 bg-blue-600/5 p-4">
                    <p className="text-sm text-blue-300">
                      <span className="font-semibold">{t("conseil.labels.option")}</span>{" "}
                      {t(`conseil.ateliers.${index}.option`)}
                    </p>
                  </div>
                )}

                <a
                  href="#contact"
                  className="mt-auto w-full transform rounded-lg bg-blue-600 px-8 py-4 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
                >
                  {t(`conseil.ateliers.${index}.cta`)}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OffresConseil;
