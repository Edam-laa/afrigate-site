import type { Metadata } from "next";

import ContactPageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Contact | Afrigate Partner by Infinity International Intertrade",
  description:
    "Contactez Afrigate Partner by Infinity International Intertrade pour vos besoins en sourcing, import-export, coordination commerciale et approvisionnement B2B vers l'Afrique et l'international.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
