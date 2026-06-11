"use client";

import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  ClipboardList,
  Factory,
  PackageCheck,
  SearchCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  getLocalizedProductCategories,
  productCategories,
} from "@/data/productCategories";
import { useLanguage } from "@/i18n/LanguageProvider";

const heroImage = "/images/backgrounds/container-port.jpg";
const sideImage = "/images/backgrounds/container-terminal.jpg";

const keyFigures = [
  {
    value: `${productCategories.length}+`,
    labelKey: "productsPage.stats.categories",
  },
  {
    value: "500+",
    labelKey: "productsPage.stats.references",
  },
  {
    value: "B2B",
    labelKey: "productsPage.stats.usage",
  },
  {
    value: "12+",
    labelKey: "productsPage.stats.markets",
  },
];

const highlights = [
  "productsPage.logic.highlightOne",
  "productsPage.logic.highlightTwo",
  "productsPage.logic.highlightThree",
  "productsPage.logic.highlightFour",
];

const productApproach = [
  {
    icon: SearchCheck,
    titleKey: "productsPage.process.stepOneTitle",
    descriptionKey: "productsPage.process.stepOneDescription",
  },
  {
    icon: ClipboardList,
    titleKey: "productsPage.process.stepTwoTitle",
    descriptionKey: "productsPage.process.stepTwoDescription",
  },
  {
    icon: ShieldCheck,
    titleKey: "productsPage.process.stepThreeTitle",
    descriptionKey: "productsPage.process.stepThreeDescription",
  },
  {
    icon: Truck,
    titleKey: "productsPage.process.stepFourTitle",
    descriptionKey: "productsPage.process.stepFourDescription",
  },
];

const sectors = [
  "productsPage.domains.construction",
  "productsPage.domains.electricity",
  "productsPage.domains.plumbing",
  "productsPage.domains.industry",
  "productsPage.domains.sanitary",
  "productsPage.domains.procurement",
];

export default function ProductsPage() {
  const { t, language } = useLanguage();
  const localizedProductCategories = getLocalizedProductCategories(language);

  return (
    <main className="bg-[#F4F6F9]">
      <section className="relative isolate min-h-[calc(100vh-6rem)] overflow-hidden bg-[#011332] py-24 text-white sm:py-28 lg:py-32">
        <Image
          src={heroImage}
          alt={t("productsPage.imageAlt.hero")}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-[#011332]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#011332] via-[#011332]/88 to-[#011332]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#011332] via-transparent to-[#011332]/15" />

        <Container className="relative flex min-h-[calc(100vh-15rem)] max-w-[1500px] items-center">
          <ScrollReveal direction="up">
            <div className="max-w-5xl">
              <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-sm">
                <span className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                  {t("productsPage.hero.label")}
                </span>
              </div>

              <h1 className="heading-serif mt-8 max-w-6xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {t("productsPage.hero.title")}
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-9 text-white/78">
                {t("productsPage.hero.description")}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/demande-devis"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#D7A83F] px-8 text-sm font-black uppercase tracking-[0.16em] text-[#011332] transition hover:bg-[#efc661]"
                >
                  {t("productsPage.hero.primaryCta")}
                </Link>

                <Link
                  href="#categories"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-[#D7A83F] hover:text-[#D7A83F]"
                >
                  {t("productsPage.hero.secondaryCta")}
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
              {keyFigures.map((item) => (
                <div key={item.labelKey}>
                  <p className="heading-serif text-5xl font-black leading-none text-[#D7A83F] sm:text-6xl">
                    {item.value}
                  </p>
                  <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-white/72">
                    {t(item.labelKey)}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container className="max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <ScrollReveal direction="left">
              <div className="relative min-h-[36rem] overflow-hidden rounded-[2rem] bg-[#011332] shadow-2xl shadow-slate-950/10">
                <Image
                  src={sideImage}
                  alt={t("productsPage.imageAlt.side")}
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover object-center opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011332]/92 via-[#011332]/35 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/15 bg-[#011332]/88 p-7 text-white shadow-2xl backdrop-blur-sm">
                  <p className="heading-serif text-5xl font-black text-[#D7A83F]">
                    500+
                  </p>
                  <p className="mt-2 text-xs font-black uppercase tracking-[0.28em] text-white">
                    {t("productsPage.logic.badge")}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/72">
                    {t("productsPage.logic.badgeDescription")}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120}>
              <div>
                <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                  {t("productsPage.logic.label")}
                </p>
                <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                <h2 className="heading-serif mt-7 text-4xl font-black leading-[1] tracking-tight text-[#011332] sm:text-5xl lg:text-6xl">
                  {t("productsPage.logic.title")}
                </h2>

                <p className="mt-7 text-lg leading-9 text-slate-600">
                  {t("productsPage.logic.description")}
                </p>

                <div className="mt-9 grid gap-4">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#D7A83F]" />
                      <p className="text-base font-bold leading-7 text-[#011332]">
                        {t(item)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link
                    href="/services"
                    className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#011332] px-8 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#D7A83F] hover:text-[#011332]"
                  >
                    {t("productsPage.logic.cta")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section
        id="categories"
        className="bg-[#F4F6F9] py-20 sm:py-24 lg:py-28"
      >
        <Container className="max-w-[1500px]">
          <ScrollReveal direction="up">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                {t("productsPage.categories.label")}
              </p>
              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

              <h2 className="heading-serif mt-7 text-4xl font-black leading-[1] tracking-tight text-[#011332] sm:text-5xl lg:text-6xl">
                {t("productsPage.categories.title")}
              </h2>

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-slate-600">
                {t("productsPage.categories.description")}
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {localizedProductCategories.map((category, index) => (
              <ScrollReveal
                key={category.slug}
                direction="up"
                delay={index * 70}
              >
                <article className="group h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-950/5 transition duration-300 hover:-translate-y-1 hover:border-[#D7A83F]">
                  <div className="relative h-72 overflow-hidden bg-slate-100">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#011332]/80 via-transparent to-transparent" />

                    <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D7A83F] text-[#011332] shadow-lg">
                      <PackageCheck className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="heading-serif text-3xl font-black leading-tight text-[#011332]">
                      {category.title}
                    </h3>

                    <p className="mt-5 text-base leading-8 text-slate-600">
                      {category.description}
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href={`/produits/${category.slug}`}
                        className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#D7A83F] px-7 text-sm font-black uppercase tracking-[0.14em] text-[#011332] transition hover:bg-[#efc661]"
                      >
                        {t("productsPage.categories.discover")}
                      </Link>

                      <Link
                        href={`/demande-devis?categorie=${encodeURIComponent(
                          category.title,
                        )}`}
                        className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 px-7 text-sm font-black uppercase tracking-[0.14em] text-[#011332] transition hover:border-[#011332] hover:bg-[#011332] hover:text-white"
                      >
                        {t("productsPage.categories.quote")}
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#011332] py-20 text-white sm:py-24 lg:py-28">
        <Image
          src={heroImage}
          alt={t("productsPage.imageAlt.process")}
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
                  {t("productsPage.process.label")}
                </p>
                <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                <h2 className="heading-serif mt-7 text-4xl font-black leading-[1] tracking-tight sm:text-5xl lg:text-6xl">
                  {t("productsPage.process.title")}
                </h2>

                <p className="mt-7 text-lg leading-9 text-white/72">
                  {t("productsPage.process.description")}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {productApproach.map((item, index) => {
                const Icon = item.icon;

                return (
                  <ScrollReveal
                    key={item.titleKey}
                    direction="right"
                    delay={index * 90}
                  >
                    <article className="h-full rounded-[1.7rem] border border-white/10 bg-white/[0.08] p-7 shadow-xl backdrop-blur-sm">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm font-black uppercase tracking-[0.22em] text-[#D7A83F]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D7A83F] text-[#011332]">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      <h3 className="mt-5 text-xl font-black text-white">
                        {t(item.titleKey)}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-white/75">
                        {t(item.descriptionKey)}
                      </p>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container className="max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <ScrollReveal direction="left">
              <div>
                <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                  {t("productsPage.domains.label")}
                </p>
                <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                <h2 className="heading-serif mt-7 text-4xl font-black leading-[1] tracking-tight text-[#011332] sm:text-5xl lg:text-6xl">
                  {t("productsPage.domains.title")}
                </h2>

                <p className="mt-7 text-lg leading-9 text-slate-600">
                  {t("productsPage.domains.description")}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {sectors.map((sector, index) => (
                <ScrollReveal key={sector} direction="up" delay={index * 60}>
                  <div className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-950/5 transition hover:-translate-y-1 hover:border-[#D7A83F]">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#011332] text-[#D7A83F] transition group-hover:bg-[#D7A83F] group-hover:text-[#011332]">
                        {index % 2 === 0 ? (
                          <Factory className="h-5 w-5" />
                        ) : (
                          <Boxes className="h-5 w-5" />
                        )}
                      </div>

                      <p className="text-base font-black text-[#011332]">
                        {t(sector)}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
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
                    {t("productsPage.cta.label")}
                  </p>
                  <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                  <h2 className="heading-serif mt-7 max-w-4xl text-4xl font-black leading-[1] tracking-tight sm:text-5xl lg:text-6xl">
                    {t("productsPage.cta.title")}
                  </h2>

                  <p className="mt-7 max-w-3xl text-lg leading-9 text-white/72">
                    {t("productsPage.cta.description")}
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  <Link
                    href="/demande-devis"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#D7A83F] px-8 text-sm font-black uppercase tracking-[0.16em] text-[#011332] transition hover:bg-[#efc661]"
                  >
                    {t("productsPage.cta.quote")}
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-[#D7A83F] hover:text-[#D7A83F]"
                  >
                    {t("productsPage.cta.contact")}
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