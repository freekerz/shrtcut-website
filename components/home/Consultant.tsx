import { Award, Briefcase } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import davidPhoto from "@/public/david-lascombe.webp";

// lucide-react ne fournit plus les logos de marque : SVG LinkedIn inline.
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const Consultant = () => {
  const t = useTranslations();
  // t.raw() renvoie les tableaux tels quels (remplace returnObjects d'i18next).
  const diplomas = t.raw("consultant.diplomas") as string[];
  const expertise = t.raw("consultant.expertise") as string[];

  return (
    <section
      id="consultant"
      className="scroll-mt-24 bg-gradient-to-b from-[#1a1a1a] to-[#121212] px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 shadow-2xl md:p-10">
          <div className="grid items-start gap-8 md:grid-cols-5">
            {/* Photo + nom */}
            <div className="flex flex-col items-center md:col-span-2">
              <div className="mb-4 h-56 w-56 overflow-hidden rounded-full border border-gray-800 bg-blue-600/10 shadow-xl">
                <Image
                  src={davidPhoto}
                  alt={t("consultant.name")}
                  width={224}
                  height={224}
                  placeholder="blur"
                  className="h-full w-full object-cover object-center"
                  priority
                />
              </div>
              <div className="text-center">
                <p className="text-xl font-semibold text-white">David</p>
                <p className="text-sm text-gray-400">{t("consultant.role")}</p>
                <a
                  href={t("consultant.linkedin")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-300"
                >
                  <LinkedinIcon className="h-5 w-5" /> LinkedIn
                </a>
              </div>
            </div>

            {/* Formation / expérience / clients */}
            <div className="md:col-span-3">
              <div className="mb-8">
                <p className="text-lg leading-relaxed text-gray-300">{t("consultant.intro")}</p>
              </div>

              <div className="mb-8">
                <div className="mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-400" />
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                    {t("consultant.labels.education")}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {diplomas.map((diploma, index) => (
                    <li key={index} className="flex items-start gap-2 leading-relaxed text-gray-300">
                      <span className="mt-1 text-blue-400">•</span>
                      <span>{diploma}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <div className="mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-blue-400" />
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                    {t("consultant.labels.experience")}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {expertise.map((exp, index) => (
                    <li key={index} className="flex items-start gap-2 leading-relaxed text-gray-300">
                      <span className="mt-1 text-blue-400">•</span>
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
                  {t("consultant.labels.clients")}
                </h4>
                <p className="leading-relaxed text-gray-400">{t("consultant.clientsText")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultant;
