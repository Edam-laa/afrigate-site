"use client";

import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Handshake,
  Layers3,
  ShieldCheck,
  Target,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageProvider";

const heroImage = "/images/backgrounds/container-terminal.jpg";
const sideImage = "/images/backgrounds/container-port.jpg";

const keyFigures = [
  {
    value: "12+",
    labelKey: "about.stats.countries",
  },
  {
    value: "500+",
    labelKey: "about.stats.products",
  },
  {
    value: "100%",
    labelKey: "about.stats.followUp",
  },
  {
    value: "8 ans",
    labelKey: "about.stats.experience",
  },
];

const strengths = [
  "about.role.strengths.one",
  "about.role.strengths.two",
  "about.role.strengths.three",
  "about.role.strengths.four",
];

const pillars = [
  {
    icon: ShieldCheck,
    titleKey: "about.commitments.reliabilityTitle",
    descriptionKey: "about.commitments.reliabilityDescription",
  },
  {
    icon: Target,
    titleKey: "about.commitments.precisionTitle",
    descriptionKey: "about.commitments.precisionDescription",
  },
  {
    icon: Truck,
    titleKey: "about.commitments.responsivenessTitle",
    descriptionKey: "about.commitments.responsivenessDescription",
  },
  {
    icon: Handshake,
    titleKey: "about.commitments.engagementTitle",
    descriptionKey: "about.commitments.engagementDescription",
  },
];

const processSteps = [
  {
    number: "01",
    titleKey: "about.method.stepOneTitle",
    descriptionKey: "about.method.stepOneDescription",
  },
  {
    number: "02",
    titleKey: "about.method.stepTwoTitle",
    descriptionKey: "about.method.stepTwoDescription",
  },
  {
    number: "03",
    titleKey: "about.method.stepThreeTitle",
    descriptionKey: "about.method.stepThreeDescription",
  },
];

const positioning = [
  {
    icon: Globe2,
    titleKey: "about.positioning.internationalTitle",
    descriptionKey: "about.positioning.internationalDescription",
  },
  {
    icon: Layers3,
    titleKey: "about.positioning.sectorsTitle",
    descriptionKey: "about.positioning.sectorsDescription",
  },
  {
    icon: Handshake,
    titleKey: "about.positioning.trustTitle",
    descriptionKey: "about.positioning.trustDescription",
  },
];

export default function AboutPage() {
  const { t, language } = useLanguage();

  const experienceValue = language === "en" ? "8 years" : language === "ar" ? "8 سنوات" : "8 ans";

  return (
    <main className="bg-[#F4F6F9]">
      <section className="relative isolate min-h-[calc(100vh-6rem)] overflow-hidden bg-[#011332] py-24 text-white sm:py-28 lg:py-32">
        <Image
          src={heroImage}
          alt={t("about.imageAlt.hero")}
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
                  {t("about.hero.label")}
                </span>
              </div>

              <h1 className="heading-serif mt-8 max-w-5xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {t("about.hero.title")}
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-9 text-white/78">
                {t("about.hero.description")}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/services"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#D7A83F] px-8 text-sm font-black uppercase tracking-[0.16em] text-[#011332] transition hover:bg-[#efc661]"
                >
                  {t("about.hero.primaryCta")}
                </Link>

                <Link
                  href="/demande-devis"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-[#D7A83F] hover:text-[#D7A83F]"
                >
                  {t("about.hero.secondaryCta")}
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
                    {item.labelKey === "about.stats.experience"
                      ? experienceValue
                      : item.value}
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
              <div className="relative">
                <div className="relative min-h-[34rem] overflow-hidden rounded-[2rem] bg-slate-200 shadow-2xl shadow-slate-950/10">
                  <Image
                    src={sideImage}
                    alt={t("about.imageAlt.side")}
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#011332]/80 via-[#011332]/20 to-transparent" />

                  <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/15 bg-[#011332]/88 p-7 text-white shadow-2xl backdrop-blur-sm">
                    <p className="heading-serif text-5xl font-black text-[#D7A83F]">
                      8+
                    </p>
                    <p className="mt-2 text-xs font-black uppercase tracking-[0.28em] text-white">
                      {t("about.role.badge")}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-white/72">
                      {t("about.role.badgeDescription")}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120}>
              <div>
                <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                  {t("about.role.label")}
                </p>
                <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                <h2 className="heading-serif mt-7 text-4xl font-black leading-[1] tracking-tight text-[#011332] sm:text-5xl lg:text-6xl">
                  {t("about.role.title")}
                </h2>

                <p className="mt-7 text-lg leading-9 text-slate-600">
                  {t("about.role.description")}
                </p>

                <div className="mt-9 grid gap-4">
                  {strengths.map((item) => (
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
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#011332] px-8 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#D7A83F] hover:text-[#011332]"
                  >
                    {t("about.role.cta")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#F4F6F9] py-20 sm:py-24 lg:py-28">
        <Container className="max-w-[1500px]">
          <ScrollReveal direction="up">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                {t("about.missionVision.label")}
              </p>
              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

              <h2 className="heading-serif mt-7 text-4xl font-black leading-[1] tracking-tight text-[#011332] sm:text-5xl lg:text-6xl">
                {t("about.missionVision.title")}
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="h-full rounded-[2rem] bg-[#011332] p-8 text-white shadow-xl shadow-slate-950/10 sm:p-10">
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#D7A83F]">
                  {t("about.missionVision.missionLabel")}
                </p>

                <h3 className="heading-serif mt-5 text-3xl font-black leading-tight sm:text-4xl">
                  {t("about.missionVision.missionTitle")}
                </h3>

                <p className="mt-6 text-base leading-8 text-white/72">
                  {t("about.missionVision.missionDescription")}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120}>
              <div className="h-full rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-950/5 sm:p-10">
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#D7A83F]">
                  {t("about.missionVision.visionLabel")}
                </p>

                <h3 className="heading-serif mt-5 text-3xl font-black leading-tight text-[#011332] sm:text-4xl">
                  {t("about.missionVision.visionTitle")}
                </h3>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  {t("about.missionVision.visionDescription")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#011332] py-20 text-white sm:py-24 lg:py-28">
        <Container className="max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <ScrollReveal direction="left">
              <div>
                <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                  {t("about.commitments.label")}
                </p>
                <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                <h2 className="heading-serif mt-7 text-4xl font-black leading-[1] tracking-tight sm:text-5xl lg:text-6xl">
                  {t("about.commitments.title")}
                </h2>

                <p className="mt-7 text-lg leading-9 text-white/70">
                  {t("about.commitments.description")}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;

                return (
                  <ScrollReveal
                    key={pillar.titleKey}
                    direction="up"
                    delay={index * 80}
                  >
                    <div
                      className={`h-full rounded-[2rem] p-8 shadow-xl transition hover:-translate-y-1 ${
                        index === 1
                          ? "bg-[#D7A83F] text-[#011332]"
                          : "border border-white/10 bg-white/8 text-white"
                      }`}
                    >
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                          index === 1
                            ? "bg-[#011332] text-[#D7A83F]"
                            : "bg-white/10 text-[#D7A83F]"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="heading-serif mt-8 text-3xl font-black">
                        {t(pillar.titleKey)}
                      </h3>

                      <p
                        className={`mt-5 text-sm leading-7 ${
                          index === 1 ? "text-[#011332]/75" : "text-white/70"
                        }`}
                      >
                        {t(pillar.descriptionKey)}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container className="max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <ScrollReveal direction="left">
              <div>
                <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                  {t("about.method.label")}
                </p>
                <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                <h2 className="heading-serif mt-7 text-4xl font-black leading-[1] tracking-tight text-[#011332] sm:text-5xl lg:text-6xl">
                  {t("about.method.title")}
                </h2>

                <p className="mt-7 text-lg leading-9 text-slate-600">
                  {t("about.method.description")}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-5">
              {processSteps.map((step, index) => (
                <ScrollReveal
                  key={step.titleKey}
                  direction="right"
                  delay={index * 100}
                >
                  <div className="rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-lg shadow-slate-950/5 transition hover:border-[#D7A83F]">
                    <div className="flex flex-col gap-5 sm:flex-row">
                      <span className="text-sm font-black uppercase tracking-[0.22em] text-[#D7A83F]">
                        {step.number}
                      </span>

                      <div>
                        <h3 className="text-xl font-black text-[#011332]">
                          {t(step.titleKey)}
                        </h3>
                        <p className="mt-3 text-base leading-8 text-slate-600">
                          {t(step.descriptionKey)}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#011332] py-20 text-white sm:py-24 lg:py-28">
        <Image
          src={heroImage}
          alt={t("about.imageAlt.position")}
          fill
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-[#011332]/82" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#011332] via-[#011332]/92 to-[#011332]/60" />

        <Container className="relative max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                  {t("about.positioning.label")}
                </p>
                <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                <h2 className="heading-serif mt-7 text-4xl font-black leading-[1] tracking-tight sm:text-5xl lg:text-6xl">
                  {t("about.positioning.title")}
                </h2>

                <p className="mt-7 text-lg leading-9 text-white/72">
                  {t("about.positioning.description")}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-5">
              {positioning.map((item, index) => {
                const Icon = item.icon;

                return (
                  <ScrollReveal
                    key={item.titleKey}
                    direction="right"
                    delay={index * 100}
                  >
                    <div className="rounded-[1.7rem] border border-white/10 bg-white/10 p-7 shadow-xl backdrop-blur-sm">
                      <div className="flex flex-col gap-5 sm:flex-row">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#D7A83F] text-[#011332]">
                          <Icon className="h-6 w-6" />
                        </div>

                        <div>
                          <h3 className="text-xl font-black text-white">
                            {t(item.titleKey)}
                          </h3>
                          <p className="mt-3 text-base leading-8 text-white/70">
                            {t(item.descriptionKey)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F4F6F9] py-20 sm:py-24 lg:py-28">
        <Container className="max-w-[1500px]">
          <ScrollReveal direction="zoom">
            <div className="overflow-hidden rounded-[2.2rem] bg-[#011332] p-8 text-white shadow-2xl shadow-slate-950/10 sm:p-10 lg:p-14">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                    {t("about.cta.label")}
                  </p>
                  <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                  <h2 className="heading-serif mt-7 max-w-4xl text-4xl font-black leading-[1] tracking-tight sm:text-5xl lg:text-6xl">
                    {t("about.cta.title")}
                  </h2>

                  <p className="mt-7 max-w-3xl text-lg leading-9 text-white/72">
                    {t("about.cta.description")}
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  <Link
                    href="/demande-devis"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#D7A83F] px-8 text-sm font-black uppercase tracking-[0.16em] text-[#011332] transition hover:bg-[#efc661]"
                  >
                    {t("about.cta.quote")}
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-[#D7A83F] hover:text-[#D7A83F]"
                  >
                    {t("about.cta.contact")}
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