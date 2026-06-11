import type { Metadata } from "next";

import ProductsPageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Produits | Afrigate Partner by Infinity International Intertrade",
  description:
    "Parcourez les catégories produits Afrigate Partner by Infinity International Intertrade : matériaux de construction, outillage, plomberie, électricité, cosmétiques, produits alimentaires et approvisionnement B2B.",
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}