// Configuration EmailJS.
//
// Ces valeurs sont des identifiants *publics* (clé publique, IDs de service et
// de template) : ils sont conçus pour être exposés côté navigateur, comme dans
// l'ancien projet Vite. On les rend surchargeables par variables d'env
// (NEXT_PUBLIC_*) pour la préprod, avec repli sur les valeurs existantes.
//
// TODO (amélioration future) : passer l'envoi côté serveur (Server Action /
// Route Handler) pour ne plus dépendre d'un SDK client. Cela nécessite la clé
// *privée* EmailJS (ou un autre fournisseur) → [À COMPLÉTER].
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "bCoPX-1FWPfZcZ0kW",
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_yextk8m",
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_oprqeni",
  TO_EMAIL: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL ?? "go@shrtcut.ai",
};
