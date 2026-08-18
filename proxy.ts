import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

// Next.js 16 : le fichier "middleware.ts" est remplacé par "proxy.ts".
// Rôle ici : détection de langue + redirection / -> /fr (ou /en).
export default createMiddleware(routing);

export const config = {
  // Tout sauf les routes API, les assets Next et les fichiers statiques.
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
