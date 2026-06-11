import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductCategoryContent } from "@/components/products/ProductCategoryContent";
import { productCategories } from "@/data/productCategories";

type ProductCategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return productCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductCategoryPageProps): Promise<Metadata> {
  const { slug } = await params;

  const category = productCategories.find((item) => item.slug === slug);

  if (!category) {
    return {
      title: "Catégorie introuvable | Afrigate Partners",
    };
  }

  return {
    title: `${category.title} | Afrigate Partners`,
    description: category.description,
  };
}

export default async function ProductCategoryPage({
  params,
}: ProductCategoryPageProps) {
  const { slug } = await params;

  const category = productCategories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  return <ProductCategoryContent category={category} />;
}