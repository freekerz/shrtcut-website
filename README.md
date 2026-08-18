# shrtcut.ai — site web

Refonte du site [shrtcut.ai](https://shrtcut.ai) en **Next.js (App Router)**, en
remplacement de la SPA Vite + React précédente (`../SHRTCUT-WEBSITE`).

Objectif principal : servir du **HTML pré-rendu** (SSG), pour le SEO et pour la
lisibilité par les crawlers et les bots IA.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Langage | TypeScript |
| UI | React 19 |
| Styles | Tailwind CSS v4 (config CSS-first dans `app/globals.css`) |
| i18n | next-intl 4 — locales `fr` (défaut) / `en` |
| Polices | `next/font/google` — Inter + Shadows Into Light |

## Démarrer

```bash
npm install
npm run dev     # http://localhost:3000 -> redirige vers /fr ou /en
```

```bash
npm run build   # build de production + génération statique
npm run start   # sert le build
npm run lint
```

## Structure

```
app/
  globals.css                        design tokens (@theme) + styles globaux
  [locale]/
    layout.tsx                       root layout : <html lang>, polices, i18n
    (marketing)/page.tsx             page d'accueil
    case-studies/[slug]/page.tsx     cas clients            (à construire)
    estimation/page.tsx              outil d'estimation     (à construire)
components/                          composants partagés
i18n/
  routing.ts                         locales, defaultLocale, localePrefix
  navigation.ts                      <Link>, useRouter… locale-aware
  request.ts                         chargement des messages côté serveur
messages/
  fr.json / en.json                  tous les textes du site
proxy.ts                             détection de langue + redirection /
```

### i18n

- Toutes les URLs sont préfixées : `/fr/...` et `/en/...`. `/` redirige selon
  l'en-tête `Accept-Language`.
- **Tout texte visible passe par `messages/*.json`** — pas de copie en dur dans
  les composants.
- Pour naviguer, utiliser `Link` / `useRouter` de `@/i18n/navigation` (et non
  `next/link`), afin de conserver la locale courante.

## État de la migration

- [x] Setup Next.js + Tailwind + next-intl, routing i18n opérationnel
- [ ] Migration de la page d'accueil existante (header, hero, consultant,
      offre développement, process, offres conseil, contact, footer)
- [ ] Formulaire de contact côté serveur (remplace EmailJS côté client)
- [ ] Mentions légales
- [ ] Metadata SEO complètes : OpenGraph, `hreflang`, `sitemap.ts`, `robots.ts`
- [ ] Google Analytics (`@next/third-parties`)
- [ ] 3 cas clients
- [ ] Outil d'estimation de projet
