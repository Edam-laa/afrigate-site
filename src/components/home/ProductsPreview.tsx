"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getLocalizedProductCategories } from "@/data/productCategories";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useHomeContent } from "@/i18n/useHomeContent";

const visibleCardsCount = 4;

export function ProductsPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { language } = useLanguage();
  const { products } = useHomeContent();

  const productCategories = useMemo(
    () => getLocalizedProductCategories(language),
    [language],
  );

  const visibleCategories = useMemo(() => {
    return Array.from({ length: visibleCardsCount }, (_, index) => {
      const categoryIndex = (activeIndex + index) % productCategories.length;
      return productCategories[categoryIndex];
    });
  }, [activeIndex, productCategories]);

  function goToPrevious() {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? productCategories.length - 1 : currentIndex - 1,
    );
  }

  function goToNext() {
    setActiveIndex((currentIndex) =>
      currentIndex === productCategories.length - 1 ? 0 : currentIndex + 1,
    );
  }

  return (
    <section className="overflow-hidden bg-background" id="produits">
      <div className="relative bg-[#011332] pb-44 pt-24 text-white sm:pb-48 sm:pt-28 lg:pb-52 lg:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(215,168,63,0.16),transparent_30%),radial-gradient(circle_at_25%_65%,rgba(255,255,255,0.08),transparent_28%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(120deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:80px_80px]" />

        <Container className="relative">
          <ScrollReveal direction="up">
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                {products.label}
              </p>

              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

              <h2 className="heading-serif mx-auto mt-6 max-w-5xl text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                {products.title}
              </h2>

              <p className="mx-auto mt-7 max-w-4xl text-base font-medium leading-8 text-white/78 sm:text-lg">
                {products.description}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={140}>
            <div className="mt-10 flex justify-center gap-3 lg:absolute lg:right-0 lg:top-1/2 lg:mt-0">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Catégorie précédente"
                className="flex h-12 w-12 items-center justify-center rounded-none border border-white/35 bg-white/5 text-white transition hover:border-gold hover:bg-gold hover:text-navy"
              >
                <ChevronLeft aria-hidden="true" className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Catégorie suivante"
                className="flex h-12 w-12 items-center justify-center rounded-none border border-white/35 bg-white/5 text-white transition hover:border-gold hover:bg-gold hover:text-navy"
              >
                <ChevronRight aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </ScrollReveal>
        </Container>
      </div>

      <Container className="relative -mt-32 max-w-[1500px] pb-20 sm:pb-28">
        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {visibleCategories.map((category, index) => {
            const direction =
              index === 0
                ? "left"
                : index === visibleCategories.length - 1
                  ? "right"
                  : "up";

            return (
              <ScrollReveal
                key={category.slug}
                direction={direction}
                delay={120 + index * 100}
              >
                <article className="group flex h-full min-h-[34rem] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-2xl hover:shadow-slate-900/10">
                  <Link
                    href={`/produits/${category.slug}`}
                    className="flex h-full flex-col"
                  >
                    <div className="relative h-64 overflow-hidden bg-slate-100">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover object-center transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#011332]/35 via-transparent to-transparent opacity-80" />
                    </div>

                    <div className="flex flex-1 flex-col p-8 text-center">
                      <h3 className="text-2xl font-black leading-tight text-navy">
                        {category.title}
                      </h3>

                      <p className="mt-4 text-base leading-8 text-slate-600">
                        {category.description}
                      </p>

                      <span className="mx-auto mt-auto inline-flex items-center justify-center rounded-md bg-gold px-8 py-3 text-sm font-black uppercase tracking-[0.08em] text-navy transition group-hover:-translate-y-0.5 group-hover:bg-[#efc661] group-hover:shadow-lg group-hover:shadow-gold/25">
                        {products.buttonLabel}
                      </span>
                    </div>
                  </Link>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal direction="up" delay={220}>
          <div className="mt-9 flex justify-center gap-3">
            {productCategories.map((category, index) => (
              <button
                key={category.slug}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Afficher ${category.title}`}
                className={`h-3.5 w-3.5 rounded-full transition ${
                  activeIndex === index
                    ? "bg-gold"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
