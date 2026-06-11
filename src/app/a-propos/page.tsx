import type { Metadata } from "next";

import AboutPageContent from "./PageContent";

export const metadata: Metadata = {
  title: "A propos | Afrigate Partner by Infinity International Intertrade",
  description:
    "Découvrez Afrigate Partner by Infinity International Intertrade, son positionnement B2B, son accompagnement en sourcing, import-export et coordination commerciale vers l'Afrique et l'international.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
