import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";

import { routing } from "@/i18n/routing";

// Image de partage (réseaux sociaux) générée dynamiquement, par locale.
// S'applique à toutes les pages sous /[locale] (home, mentions-légales…).
export const alt = "Shrtcut";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  // meta.title = "Shrtcut - L'IA + 20 ans d'expertise web et mobile"
  // On garde la partie après le tiret comme accroche.
  const title = t("title");
  const tagline = title.includes(" - ") ? title.split(" - ").slice(1).join(" - ") : title;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(1200px 600px at 20% 0%, #1a1a2e 0%, #121212 55%)",
          color: "#f9fafb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", fontSize: 96, fontWeight: 800, letterSpacing: "-0.03em" }}>
          Shrtcut
          <span style={{ color: "#6366F1" }}>.</span>
        </div>

        <div style={{ marginTop: 32, fontSize: 44, lineHeight: 1.25, fontWeight: 600, maxWidth: 960, color: "#e5e7eb" }}>
          {tagline}
        </div>

        <div style={{ marginTop: 56, display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 44, height: 6, background: "#6366F1", borderRadius: 4 }} />
          <div style={{ fontSize: 28, color: "#9ca3af" }}>shrtcut.ai</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
