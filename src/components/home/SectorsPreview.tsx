import { Building2, Factory, Leaf, PlugZap, Utensils } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { homeContent } from "@/data/home";

const icons = [Building2, PlugZap, Leaf, Utensils, Factory];

export function SectorsPreview() {
  const { products } = homeContent;

  return (
    <section className="py-20 sm:py-28" id="secteurs">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionTitle
            description={products.description}
            label={products.label}
            title={products.title}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {products.categories.slice(0, 5).map((sector, index) => {
              const Icon = icons[index] ?? Building2;

              return (
                <article
                  className="group flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#D7A83F] hover:shadow-lg"
                  key={sector.title}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#081A33] text-[#D7A83F]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-bold text-[#081A33]">
                    {sector.title}
                  </h3>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
