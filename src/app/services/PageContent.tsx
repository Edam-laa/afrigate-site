"use client";

import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Globe2,
  Handshake,
  PackageCheck,
  Route,
  SearchCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageProvider";

const heroImage = "/images/backgrounds/container-terminal.jpg";
const processImage = "/images/backgrounds/container-port.jpg";

const mainServices = [
  {
    titleKey: "services.mainServices.sourcingTitle",
    descriptionKey: "services.mainServices.sourcingDescription",
    tagKey: "services.mainServices.sourcingTag",
    icon: SearchCheck,
  },
  {
    titleKey: "services.mainServices.exportTitle",
    descriptionKey: "services.mainServices.exportDescription",
    tagKey: "services.mainServices.exportTag",
    icon: PackageCheck,
  },
  {
    titleKey: "services.mainServices.coordinationTitle",
    descriptionKey: "services.mainServices.coordinationDescription",
    tagKey: "services.mainServices.coordinationTag",
    icon: Globe2,
  },
  {
    titleKey: "services.mainServices.consultingTitle",
    descriptionKey: "services.mainServices.consultingDescription",
    tagKey: "services.mainServices.consultingTag",
    icon: Handshake,
  },
  {
    titleKey: "services.mainServices.logisticsTitle",
    descriptionKey: "services.mainServices.logisticsDescription",
    tagKey: "services.mainServices.logisticsTag",
    icon: Route,
  },
  {
    titleKey: "services.mainServices.supplyTitle",
    descriptionKey: "services.mainServices.supplyDescription",
    tagKey: "services.mainServices.supplyTag",
    icon: Boxes,
  },
];

const serviceTracks = [
  {
    number: "01",
    titleKey: "services.tracks.exportTitle",
    descriptionKey: "services.tracks.exportDescription",
    points: [
      "services.tracks.exportPointOne",
      "services.tracks.exportPointTwo",
      "services.tracks.exportPointThree",
    ],
  },
  {
    number: "02",
    titleKey: "services.tracks.brokerageTitle",
    descriptionKey: "services.tracks.brokerageDescription",
    points: [
      "services.tracks.brokeragePointOne",
      "services.tracks.brokeragePointTwo",
      "services.tracks.brokeragePointThree",
    ],
  },
  {
    number: "03",
    titleKey: "services.tracks.consultingTitle",
    descriptionKey: "services.tracks.consultingDescription",
    points: [
      "services.tracks.consultingPointOne",
      "services.tracks.consultingPointTwo",
      "services.tracks.consultingPointThree",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    titleKey: "services.method.stepOneTitle",
    descriptionKey: "services.method.stepOneDescription",
    icon: ClipboardCheck,
  },
  {
    step: "02",
    titleKey: "services.method.stepTwoTitle",
    descriptionKey: "services.method.stepTwoDescription",
    icon: SearchCheck,
  },
  {
    step: "03",
    titleKey: "services.method.stepThreeTitle",
    descriptionKey: "services.method.stepThreeDescription",
    icon: ShieldCheck,
  },
  {
    step: "04",
    titleKey: "services.method.stepFourTitle",
    descriptionKey: "services.method.stepFourDescription",
    icon: Truck,
  },
];

const advantages = [
  "services.support.advantageOne",
  "services.support.advantageTwo",
  "services.support.advantageThree",
  "services.support.advantageFour",
  "services.support.advantageFive",
];

const sectors = [
  "services.domains.construction",
  "services.domains.electricity",
  "services.domains.plumbing",
  "services.domains.industry",
  "services.domains.professional",
  "services.domains.projects",
];

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <main className="bg-[#F4F6F9]">
      <section className="relative isolate min-h-[calc(100vh-6rem)] overflow-hidden bg-[#011332] py-24 text-white sm:py-28 lg:py-32">
        <Image
          src={heroImage}
          alt={t("services.imageAlt.hero")}
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
                  {t("services.hero.label")}
                </span>
              </div>

              <h1 className="heading-serif mt-8 max-w-6xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {t("services.hero.title")}
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-9 text-white/78">
                {t("services.hero.description")}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/demande-devis"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#D7A83F] px-8 text-sm font-black uppercase tracking-[0.16em] text-[#011332] transition hover:bg-[#efc661]"
                >
                  {t("services.hero.primaryCta")}
                </Link>

                <Link
                  href="/produits"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-[#D7A83F] hover:text-[#D7A83F]"
                >
                  {t("services.hero.secondaryCta")}
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
                  06
                </p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-white/72">
                  {t("services.stats.services")}
                </p>
              </div>

              <div>
                <p className="heading-serif text-5xl font-black leading-none text-[#D7A83F] sm:text-6xl">
                  B2B
                </p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-white/72">
                  {t("services.stats.approach")}
                </p>
              </div>

              <div>
                <p className="heading-serif text-5xl font-black leading-none text-[#D7A83F] sm:text-6xl">
                  360°
                </p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-white/72">
                  {t("services.stats.support")}
                </p>
              </div>

              <div>
                <p className="heading-serif text-5xl font-black leading-none text-[#D7A83F] sm:text-6xl">
                  +12
                </p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-white/72">
                  {t("services.stats.markets")}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container className="max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <ScrollReveal direction="left">
              <div>
                <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                  {t("services.intro.label")}
                </p>
                <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                <h2 className="heading-serif mt-7 text-4xl font-black leading-[1] tracking-tight text-[#011332] sm:text-5xl lg:text-6xl">
                  {t("services.intro.title")}
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120}>
              <p className="text-lg leading-9 text-slate-600">
                {t("services.intro.description")}
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {mainServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <ScrollReveal
                  key={service.titleKey}
                  direction="up"
                  delay={index * 70}
                >
                  <article
                    className={`group h-full rounded-[2rem] p-8 shadow-xl shadow-slate-950/5 transition hover:-translate-y-1 ${
                      index === 1
                        ? "bg-[#D7A83F] text-[#011332]"
                        : "border border-slate-200 bg-white text-[#011332] hover:border-[#D7A83F]"
                    }`}
                  >
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl transition ${
                        index === 1
                          ? "bg-[#011332] text-[#D7A83F]"
                          : "bg-[#011332] text-[#D7A83F] group-hover:bg-[#D7A83F] group-hover:text-[#011332]"
                      }`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>

                    <p
                      className={`mt-7 text-xs font-black uppercase tracking-[0.28em] ${
                        index === 1 ? "text-[#011332]/65" : "text-[#D7A83F]"
                      }`}
                    >
                      {t(service.tagKey)}
                    </p>

                    <h3 className="heading-serif mt-4 text-3xl font-black leading-tight">
                      {t(service.titleKey)}
                    </h3>

                    <p
                      className={`mt-5 text-base leading-8 ${
                        index === 1 ? "text-[#011332]/75" : "text-slate-600"
                      }`}
                    >
                      {t(service.descriptionKey)}
                    </p>

                    <div
                      className={`mt-7 flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] ${
                        index === 1 ? "text-[#011332]" : "text-[#D7A83F]"
                      }`}
                    >
                      <span>{t("services.mainServices.badge")}</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#F4F6F9] py-20 sm:py-24 lg:py-28">
        <Container className="max-w-[1500px]">
          <ScrollReveal direction="up">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                {t("services.tracks.label")}
              </p>
              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

              <h2 className="heading-serif mt-7 text-4xl font-black leading-[1] tracking-tight text-[#011332] sm:text-5xl lg:text-6xl">
                {t("services.tracks.title")}
              </h2>

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-slate-600">
                {t("services.tracks.description")}
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {serviceTracks.map((track, index) => (
              <ScrollReveal
                key={track.titleKey}
                direction="up"
                delay={index * 100}
              >
                <article className="h-full rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-950/5">
                  <span className="text-sm font-black uppercase tracking-[0.28em] text-[#D7A83F]">
                    {track.number}
                  </span>

                  <h3 className="heading-serif mt-5 text-3xl font-black leading-tight text-[#011332]">
                    {t(track.titleKey)}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-slate-600">
                    {t(track.descriptionKey)}
                  </p>

                  <div className="mt-7 grid gap-4">
                    {track.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#D7A83F]" />
                        <p className="text-sm font-bold leading-7 text-[#011332]">
                          {t(point)}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#011332] py-20 text-white sm:py-24 lg:py-28">
        <Image
          src={processImage}
          alt={t("services.imageAlt.process")}
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
                  {t("services.method.label")}
                </p>
                <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                <h2 className="heading-serif mt-7 text-4xl font-black leading-[1] tracking-tight sm:text-5xl lg:text-6xl">
                  {t("services.method.title")}
                </h2>

                <p className="mt-7 text-lg leading-9 text-white/72">
                  {t("services.method.description")}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {processSteps.map((item, index) => {
                const Icon = item.icon;

                return (
                  <ScrollReveal
                    key={item.titleKey}
                    direction="right"
                    delay={index * 90}
                  >
                    <article className="h-full rounded-[1.7rem] border border-white/10 bg-white/10 p-7 shadow-xl backdrop-blur-sm">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm font-black uppercase tracking-[0.22em] text-[#D7A83F]">
                          {item.step}
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
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <ScrollReveal direction="left">
              <div className="relative min-h-[36rem] overflow-hidden rounded-[2rem] bg-[#011332] shadow-2xl shadow-slate-950/10">
                <Image
                  src={processImage}
                  alt={t("services.imageAlt.support")}
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover object-center opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011332]/92 via-[#011332]/35 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                    {t("services.support.label")}
                  </p>
                  <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                  <h2 className="heading-serif mt-7 max-w-xl text-4xl font-black leading-[1] text-white sm:text-5xl">
                    {t("services.support.title")}
                  </h2>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120}>
              <div>
                <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                  {t("services.support.sideLabel")}
                </p>
                <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                <h2 className="heading-serif mt-7 text-4xl font-black leading-[1] tracking-tight text-[#011332] sm:text-5xl lg:text-6xl">
                  {t("services.support.sideTitle")}
                </h2>

                <p className="mt-7 text-lg leading-9 text-slate-600">
                  {t("services.support.description")}
                </p>

                <div className="mt-9 grid gap-4">
                  {advantages.map((advantage, index) => (
                    <div
                      key={advantage}
                      className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-lg shadow-slate-950/5 transition hover:border-[#D7A83F]"
                    >
                      <div className="flex gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#011332] text-sm font-black text-[#D7A83F]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="text-base font-bold leading-7 text-[#011332]">
                          {t(advantage)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#F4F6F9] py-20 sm:py-24 lg:py-28">
        <Container className="max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <ScrollReveal direction="left">
              <div>
                <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                  {t("services.domains.label")}
                </p>
                <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                <h2 className="heading-serif mt-7 text-4xl font-black leading-[1] tracking-tight text-[#011332] sm:text-5xl lg:text-6xl">
                  {t("services.domains.title")}
                </h2>

                <p className="mt-7 text-lg leading-9 text-slate-600">
                  {t("services.domains.description")}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {sectors.map((sector, index) => (
                <ScrollReveal key={sector} direction="up" delay={index * 60}>
                  <div className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-950/5 transition hover:-translate-y-1 hover:border-[#D7A83F]">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#011332] text-[#D7A83F] transition group-hover:bg-[#D7A83F] group-hover:text-[#011332]">
                        <FileText className="h-5 w-5" />
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
                    {t("services.cta.label")}
                  </p>
                  <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                  <h2 className="heading-serif mt-7 max-w-4xl text-4xl font-black leading-[1] tracking-tight sm:text-5xl lg:text-6xl">
                    {t("services.cta.title")}
                  </h2>

                  <p className="mt-7 max-w-3xl text-lg leading-9 text-white/72">
                    {t("services.cta.description")}
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  <Link
                    href="/demande-devis"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#D7A83F] px-8 text-sm font-black uppercase tracking-[0.16em] text-[#011332] transition hover:bg-[#efc661]"
                  >
                    {t("services.cta.quote")}
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-[#D7A83F] hover:text-[#D7A83F]"
                  >
                    {t("services.cta.contact")}
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