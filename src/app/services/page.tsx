import type { Metadata } from "next";

import ServicesPageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Services | Afrigate Partner by Infinity International Intertrade",
  description:
    "Découvrez les services Afrigate Partner by Infinity International Intertrade : sourcing international, import-export, coordination logistique, accompagnement B2B et fourniture multi-secteurs.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
