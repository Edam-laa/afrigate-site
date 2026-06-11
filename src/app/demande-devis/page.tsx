import type { Metadata } from "next";

import { QuoteRequestContent } from "@/components/quote/QuoteRequestContent";

export const metadata: Metadata = {
  title: "Demande de devis | Afrigate Partner by Infinity International Intertrade",
  description:
    "Demandez un devis à Afrigate Partner by Infinity International Intertrade pour vos besoins B2B : sourcing, import-export, produits de bâtiment, plomberie, industrie et approvisionnement international.",
};

type QuoteRequestPageProps = {
  searchParams?: Promise<{
    categorie?: string;
    produit?: string;
    sent?: string;
  }>;
};

export default async function QuoteRequestPage({
  searchParams,
}: QuoteRequestPageProps) {
  const params = await searchParams;

  return (
    <QuoteRequestContent
      selectedCategory={params?.categorie ?? ""}
      selectedProduct={params?.produit ?? ""}
      status={
        params?.sent === "success" || params?.sent === "error"
          ? params.sent
          : undefined
      }
    />
  );
}
