import { createNavigation } from "next-intl/navigation";

import { routing } from "./routing";

// Wrappers locale-aware de next/link et next/navigation.
// À utiliser partout à la place de next/link pour conserver la locale courante.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
