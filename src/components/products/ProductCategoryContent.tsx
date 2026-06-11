"use client";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  PackageCheck,
  SearchCheck,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  getLocalizedProductCategories,
  type ProductCategory,
} from "@/data/productCategories";
import { useLanguage } from "@/i18n/LanguageProvider";

type ProductCategoryContentProps = {
  category: ProductCategory;
};

const categorySteps = [
  {
    icon: SearchCheck,
    titleKey: "productDetail.request.stepOneTitle",
    descriptionKey: "productDetail.request.stepOneDescription",
  },
  {
    icon: ClipboardCheck,
    titleKey: "productDetail.request.stepTwoTitle",
    descriptionKey: "productDetail.request.stepTwoDescription",
  },
  {
    icon: Truck,
    titleKey: "productDetail.request.stepThreeTitle",
    descriptionKey: "productDetail.request.stepThreeDescription",
  },
];

const quoteRequirements = [
  "productDetail.info.itemOne",
  "productDetail.info.itemTwo",
  "productDetail.info.itemThree",
  "productDetail.info.itemFour",
  "productDetail.info.itemFive",
];

function buildQuoteHref(categoryTitle: string, productName?: string) {
  const params = new URLSearchParams({
    categorie: categoryTitle,
  });

  if (productName) {
    params.set("produit", productName);
  }

  return `/demande-devis?${params.toString()}`;
}

export function ProductCategoryContent({
  category,
}: ProductCategoryContentProps) {
  const { t, language } = useLanguage();

  const localizedCategory =
    getLocalizedProductCategories(language).find(
      (item) => item.slug === category.slug,
    ) ?? category;

  const categoryQuoteHref = buildQuoteHref(localizedCategory.title);

  return (
    <main className="bg-[#F4F6F9]">
      <section className="relative isolate min-h-[calc(100vh-6rem)] overflow-hidden bg-[#011332] py-24 text-white sm:py-28 lg:py-32">
        <Image
          src={localizedCategory.image}
          alt={localizedCategory.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-[#011332]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#011332] via-[#011332]/88 to-[#011332]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#011332] via-transparent to-[#011332]/15" />

        <Container className="relative flex min-h-[calc(100vh-15rem)] max-w-[1500px] items-center">
          <ScrollReveal direction="up">
            <div className="max-w-5xl">
              <Link
                href="/produits"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm transition hover:border-[#D7A83F] hover:text-[#D7A83F]"
              >
                <ArrowLeft className="h-4 w-4" />
                {t("productDetail.back")}
              </Link>

              <div className="mt-8 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-sm">
                <span className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                  {t("productDetail.label")}
                </span>
              </div>

              <h1 className="heading-serif mt-8 max-w-6xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {localizedCategory.title}
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-9 text-white/78">
                {localizedCategory.description}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={categoryQuoteHref}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#D7A83F] px-8 text-sm font-black uppercase tracking-[0.16em] text-[#011332] transition hover:bg-[#efc661]"
                >
                  {t("productDetail.quote")}
                </Link>

                <Link
                  href="#selection"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-[#D7A83F] hover:text-[#D7A83F]"
                >
                  {t("productDetail.viewSelection")}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-[#011332] pb-20 text-white sm:pb-24">
        <Container className="max-w-[1500px]">
          <ScrollReveal direction="up">
            <div className="grid gap-8 border-y border-white/10 py-10 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="heading-serif text-5xl font-black leading-none text-[#D7A83F] sm:text-6xl">
                  {localizedCategory.products.length}+
                </p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-white/72">
                  {t("productDetail.stats.products")}
                </p>
              </div>

              <div>
                <p className="heading-serif text-5xl font-black leading-none text-[#D7A83F] sm:text-6xl">
                  B2B
                </p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-white/72">
                  {t("productDetail.stats.usage")}
                </p>
              </div>

              <div>
                <p className="heading-serif text-5xl font-black leading-none text-[#D7A83F] sm:text-6xl">
                  100%
                </p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-white/72">
                  {t("productDetail.stats.studied")}
                </p>
              </div>

              <div>
                <p className="heading-serif text-5xl font-black leading-none text-[#D7A83F] sm:text-6xl">
                  Export
                </p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-white/72">
                  {t("productDetail.stats.export")}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section id="selection" className="bg-white py-20 sm:py-24 lg:py-28">
        <Container className="max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <ScrollReveal direction="left">
              <div>
                <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                  {t("productDetail.selection.label")}
                </p>
                <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                <h2 className="heading-serif mt-7 text-4xl font-black leading-[1] tracking-tight text-[#011332] sm:text-5xl lg:text-6xl">
                  {t("productDetail.selection.titlePrefix")}{" "}
                  {localizedCategory.title}
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120}>
              <p className="text-lg leading-9 text-slate-600">
                {t("productDetail.selection.description")}
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {localizedCategory.products.map((product, index) => {
              const quoteHref = buildQuoteHref(
                localizedCategory.title,
                product.name,
              );

              return (
                <ScrollReveal
                  key={product.name}
                  direction="up"
                  delay={index * 70}
                >
                  <article className="group h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-950/5 transition duration-300 hover:-translate-y-1 hover:border-[#D7A83F]">
                    <div className="relative h-72 overflow-hidden bg-slate-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#011332]/75 via-transparent to-transparent" />

                      <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D7A83F] text-[#011332] shadow-lg">
                        <PackageCheck className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="heading-serif text-3xl font-black leading-tight text-[#011332]">
                        {product.name}
                      </h3>

                      <p className="mt-5 text-base leading-8 text-slate-600">
                        {product.description}
                      </p>

                      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link
                          href={quoteHref}
                          className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#D7A83F] px-7 text-sm font-black uppercase tracking-[0.14em] text-[#011332] transition hover:bg-[#efc661]"
                        >
                          {t("productDetail.quote")}
                        </Link>

                        <Link
                          href="/contact"
                          className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 px-7 text-sm font-black uppercase tracking-[0.14em] text-[#011332] transition hover:border-[#011332] hover:bg-[#011332] hover:text-white"
                        >
                          {t("productDetail.selection.question")}
                        </Link>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#011332] py-20 text-white sm:py-24 lg:py-28">
        <Image
          src={localizedCategory.image}
          alt={`${t("productDetail.imageAlt.supplyPrefix")} ${
            localizedCategory.title
          }`}
          fill
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-[#011332]/82" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#011332] via-[#011332]/92 to-[#011332]/60" />

        <Container className="relative max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <ScrollReveal direction="left">
              <div>
                <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                  {t("productDetail.request.label")}
                </p>
                <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                <h2 className="heading-serif mt-7 text-4xl font-black leading-[1] tracking-tight sm:text-5xl lg:text-6xl">
                  {t("productDetail.request.title")}
                </h2>

                <p className="mt-7 text-lg leading-9 text-white/72">
                  {t("productDetail.request.description")}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-5">
              {categorySteps.map((item, index) => {
                const Icon = item.icon;

                return (
                  <ScrollReveal
                    key={item.titleKey}
                    direction="right"
                    delay={index * 90}
                  >
                    <article className="rounded-[1.7rem] border border-white/10 bg-white/[0.08] p-7 shadow-xl backdrop-blur-sm">
                      <div className="flex flex-col gap-5 sm:flex-row">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#D7A83F] text-[#011332]">
                          <Icon className="h-6 w-6" />
                        </div>

                        <div>
                          <span className="text-sm font-black uppercase tracking-[0.22em] text-[#D7A83F]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <h3 className="mt-3 text-xl font-black text-white">
                            {t(item.titleKey)}
                          </h3>

                          <p className="mt-3 text-base leading-8 text-white/70">
                            {t(item.descriptionKey)}
                          </p>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F4F6F9] py-20 sm:py-24 lg:py-28">
        <Container className="max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <ScrollReveal direction="left">
              <div>
                <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                  {t("productDetail.info.label")}
                </p>
                <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                <h2 className="heading-serif mt-7 text-4xl font-black leading-[1] tracking-tight text-[#011332] sm:text-5xl lg:text-6xl">
                  {t("productDetail.info.title")}
                </h2>

                <p className="mt-7 text-lg leading-9 text-slate-600">
                  {t("productDetail.info.description")}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120}>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-950/5 sm:p-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#011332] text-[#D7A83F]">
                  <FileText className="h-7 w-7" />
                </div>

                <h3 className="heading-serif mt-7 text-3xl font-black leading-tight text-[#011332] sm:text-4xl">
                  {t("productDetail.info.cardTitle")}
                </h3>

                <div className="mt-7 grid gap-4">
                  {quoteRequirements.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#D7A83F]" />
                      <p className="text-base font-bold leading-7 text-[#011332]">
                        {t(item)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#F4F6F9] pb-20 sm:pb-24 lg:pb-28">
        <Container className="max-w-[1500px]">
          <ScrollReveal direction="zoom">
            <div className="overflow-hidden rounded-[2.2rem] bg-[#011332] p-8 text-white shadow-2xl shadow-slate-950/10 sm:p-10 lg:p-14">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                    {t("productDetail.cta.label")}
                  </p>
                  <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                  <h2 className="heading-serif mt-7 max-w-4xl text-4xl font-black leading-[1] tracking-tight sm:text-5xl lg:text-6xl">
                    {t("productDetail.cta.titlePrefix")}{" "}
                    {localizedCategory.title} ?
                  </h2>

                  <p className="mt-7 max-w-3xl text-lg leading-9 text-white/72">
                    {t("productDetail.cta.description")}
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  <Link
                    href={categoryQuoteHref}
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#D7A83F] px-8 text-sm font-black uppercase tracking-[0.16em] text-[#011332] transition hover:bg-[#efc661]"
                  >
                    {t("productDetail.quote")}
                  </Link>

                  <Link
                    href="/produits"
                    className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-8 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-[#D7A83F] hover:text-[#D7A83F]"
                  >
                    {t("productDetail.cta.allCategories")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}