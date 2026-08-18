import { setRequestLocale } from "next-intl/server";

import Consultant from "@/components/home/Consultant";
import ContactForm from "@/components/home/ContactForm";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import JsonLd from "@/components/home/JsonLd";
import OffreDeveloppement from "@/components/home/OffreDeveloppement";
import OffresConseil from "@/components/home/OffresConseil";
import ProcessDeveloppement from "@/components/home/ProcessDeveloppement";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-[#121212]">
      <JsonLd locale={locale} />
      <Header />
      <Hero />
      {/* Consultant placé juste après le Hero (ordre de l'ancien HomeRefonte) */}
      <Consultant />
      <OffreDeveloppement />
      <ProcessDeveloppement />
      <OffresConseil />
      <ContactForm />
      <Footer />
    </div>
  );
}
