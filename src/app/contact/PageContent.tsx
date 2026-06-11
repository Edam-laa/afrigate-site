"use client";

import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

const heroImage = "/images/backgrounds/container-port.jpg";

const mapLocation =
  "Avenue Ahmed Sekelli IMMB Souhir Bureau 105, Sfax, Tunisie";
const mapQuery = encodeURIComponent(mapLocation);
const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
const mapOpenUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

const responseSteps = [
  {
    number: "01",
    titleKey: "contactPage.steps.oneTitle",
    descriptionKey: "contactPage.steps.oneDescription",
  },
  {
    number: "02",
    titleKey: "contactPage.steps.twoTitle",
    descriptionKey: "contactPage.steps.twoDescription",
  },
  {
    number: "03",
    titleKey: "contactPage.steps.threeTitle",
    descriptionKey: "contactPage.steps.threeDescription",
  },
];

const contactReasons = [
  "contactPage.coordinates.reasonOne",
  "contactPage.coordinates.reasonTwo",
  "contactPage.coordinates.reasonThree",
  "contactPage.coordinates.reasonFour",
];

export default function ContactPage() {
  const { t } = useLanguage();

  const contactItems = [
    {
      label: t("contactPage.coordinates.phone"),
      value: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phone.replaceAll(" ", "")}`,
      icon: Phone,
    },
    {
      label: t("contactPage.coordinates.whatsapp"),
      value: siteConfig.contact.whatsapp,
      href: siteConfig.contact.whatsappUrl,
      icon: MessageCircle,
      external: true,
    },
    {
      label: t("contactPage.coordinates.email"),
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      icon: Mail,
    },
  ];

  return (
    <main className="bg-[#F4F6F9]">
      <section className="relative isolate min-h-[calc(100vh-6rem)] overflow-hidden bg-[#011332] py-24 text-white sm:py-28 lg:py-32">
        <Image
          src={heroImage}
          alt={t("contactPage.imageAlt.hero")}
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
                  {t("contactPage.hero.label")}
                </span>
              </div>

              <h1 className="heading-serif mt-8 max-w-6xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {t("contactPage.hero.title")}
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-9 text-white/78">
                {t("contactPage.hero.description")}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#formulaire-contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#D7A83F] px-8 text-sm font-black uppercase tracking-[0.16em] text-[#011332] transition hover:bg-[#efc661]"
                >
                  {t("contactPage.hero.primaryCta")}
                </a>

                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-[#D7A83F] hover:text-[#D7A83F]"
                >
                  {t("contactPage.hero.secondaryCta")}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-[#011332] pb-20 text-white sm:pb-24">
        <Container className="max-w-[1500px]">
          <ScrollReveal direction="up">
            <div className="grid gap-8 border-y border-white/10 py-10 sm:grid-cols-2 lg:grid-cols-3">
              {responseSteps.map((step) => (
                <div key={step.titleKey}>
                  <p className="heading-serif text-5xl font-black leading-none text-[#D7A83F] sm:text-6xl">
                    {step.number}
                  </p>

                  <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-white/72">
                    {t(step.titleKey)}
                  </p>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
                    {t(step.descriptionKey)}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container className="max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <ScrollReveal direction="left">
              <div>
                <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                  {t("contactPage.coordinates.label")}
                </p>
                <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                <h2 className="heading-serif mt-7 text-4xl font-black leading-[1] tracking-tight text-[#011332] sm:text-5xl lg:text-6xl">
                  {t("contactPage.coordinates.title")}
                </h2>

                <p className="mt-7 text-lg leading-9 text-slate-600">
                  {t("contactPage.coordinates.description")}
                </p>

                <div className="mt-9 grid gap-4">
                  {contactReasons.map((reason) => (
                    <div key={reason} className="flex items-start gap-4">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#D7A83F]" />
                      <p className="text-base font-bold leading-7 text-[#011332]">
                        {t(reason)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120}>
              <div className="grid gap-5">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className="group rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-950/5 transition hover:-translate-y-1 hover:border-[#D7A83F]"
                    >
                      <div className="flex gap-5">
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#011332] text-[#D7A83F] transition group-hover:bg-[#D7A83F] group-hover:text-[#011332]">
                          <Icon className="h-6 w-6" />
                        </span>

                        <span>
                          <span className="block text-xs font-black uppercase tracking-[0.24em] text-[#D7A83F]">
                            {item.label}
                          </span>
                          <span className="mt-2 block text-lg font-black text-[#011332]">
                            {item.value}
                          </span>
                        </span>
                      </div>
                    </a>
                  );
                })}

                <a
                  href={mapOpenUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-950/5 transition hover:-translate-y-1 hover:border-[#D7A83F]"
                >
                  <div className="flex gap-5">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#011332] text-[#D7A83F] transition group-hover:bg-[#D7A83F] group-hover:text-[#011332]">
                      <MapPin className="h-6 w-6" />
                    </span>

                    <span>
                      <span className="block text-xs font-black uppercase tracking-[0.24em] text-[#D7A83F]">
                        {t("contactPage.coordinates.location")}
                      </span>
                      <span className="mt-2 block text-lg font-black leading-7 text-[#011332]">
                        {mapLocation}
                      </span>
                    </span>
                  </div>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="relative bg-[#F4F6F9]">
        <Container className="max-w-[1500px]">
          <ScrollReveal direction="up">
            <div className="mb-12 text-center">
              <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                {t("contactPage.map.label")}
              </p>
              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

              <h2 className="heading-serif mx-auto mt-7 max-w-4xl text-4xl font-black leading-[1] tracking-tight text-[#011332] sm:text-5xl lg:text-6xl">
                {t("contactPage.map.title")}
              </h2>

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-slate-600">
                {t("contactPage.map.description")}
              </p>
            </div>
          </ScrollReveal>
        </Container>

        <div className="relative h-[430px] overflow-hidden border-y border-slate-200 bg-slate-200 sm:h-[520px] lg:h-[600px]">
          <iframe
            title={t("contactPage.map.titleAttr")}
            src={mapEmbedUrl}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#F4F6F9] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F4F6F9] to-transparent" />

          <a
            href={mapOpenUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-6 left-1/2 inline-flex -translate-x-1/2 items-center justify-center gap-3 rounded-full bg-[#011332] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-2xl transition hover:bg-[#D7A83F] hover:text-[#011332]"
          >
            {t("contactPage.map.open")}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section
        id="formulaire-contact"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <Container className="max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <ScrollReveal direction="left">
              <aside className="rounded-[2rem] bg-[#011332] p-8 text-white shadow-2xl sm:p-10">
                <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                  {t("contactPage.contactForm.asideLabel")}
                </p>
                <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                <h2 className="heading-serif mt-7 text-4xl font-black leading-[1] sm:text-5xl">
                  {t("contactPage.contactForm.asideTitle")}
                </h2>

                <p className="mt-6 text-base leading-8 text-white/72">
                  {t("contactPage.contactForm.asideDescription")}
                </p>

                <div className="mt-8 grid gap-5">
                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <Clock className="mt-1 h-5 w-5 shrink-0 text-[#D7A83F]" />
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#D7A83F]">
                        {t("contactPage.contactForm.responseTime")}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/75">
                        {t("contactPage.contactForm.responseDescription")}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-[#D7A83F]" />
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#D7A83F]">
                        {t("contactPage.contactForm.directChannel")}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/75">
                        {t("contactPage.contactForm.directDescription")}
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120}>
              <form
                action="/api/contact"
                method="post"
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-950/10 sm:p-10"
              >
                <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                  {t("contactPage.contactForm.formLabel")}
                </p>
                <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                <h2 className="heading-serif mt-7 text-4xl font-black leading-[1] tracking-tight text-[#011332] sm:text-5xl">
                  {t("contactPage.contactForm.formTitle")}
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  {t("contactPage.contactForm.formDescription")}
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold text-[#011332]"
                    >
                      {t("contactPage.contactForm.name")}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder={t("contactPage.contactForm.namePlaceholder")}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[#011332] outline-none transition focus:border-[#D7A83F] focus:ring-2 focus:ring-[#D7A83F]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-bold text-[#011332]"
                    >
                      {t("contactPage.contactForm.company")}
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder={t(
                        "contactPage.contactForm.companyPlaceholder",
                      )}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[#011332] outline-none transition focus:border-[#D7A83F] focus:ring-2 focus:ring-[#D7A83F]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-[#011332]"
                    >
                      {t("contactPage.contactForm.email")}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder={t("contactPage.contactForm.emailPlaceholder")}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[#011332] outline-none transition focus:border-[#D7A83F] focus:ring-2 focus:ring-[#D7A83F]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-[#011332]"
                    >
                      {t("contactPage.contactForm.phone")}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      placeholder={t("contactPage.contactForm.phonePlaceholder")}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[#011332] outline-none transition focus:border-[#D7A83F] focus:ring-2 focus:ring-[#D7A83F]/20"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-bold text-[#011332]"
                    >
                      {t("contactPage.contactForm.subject")}
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder={t(
                        "contactPage.contactForm.subjectPlaceholder",
                      )}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[#011332] outline-none transition focus:border-[#D7A83F] focus:ring-2 focus:ring-[#D7A83F]/20"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-bold text-[#011332]"
                    >
                      {t("contactPage.contactForm.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={7}
                      required
                      placeholder={t(
                        "contactPage.contactForm.messagePlaceholder",
                      )}
                      className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-[#011332] outline-none transition focus:border-[#D7A83F] focus:ring-2 focus:ring-[#D7A83F]/20"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D7A83F] px-8 text-sm font-black uppercase tracking-[0.16em] text-[#011332] transition hover:-translate-y-0.5 hover:bg-[#efc661] hover:shadow-lg hover:shadow-[#D7A83F]/25"
                >
                  {t("contactPage.contactForm.submit")}
                  <Send className="h-4 w-4" />
                </button>
              </form>
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
                    {t("contactPage.cta.label")}
                  </p>
                  <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                  <h2 className="heading-serif mt-7 max-w-4xl text-4xl font-black leading-[1] tracking-tight sm:text-5xl lg:text-6xl">
                    {t("contactPage.cta.title")}
                  </h2>

                  <p className="mt-7 max-w-3xl text-lg leading-9 text-white/72">
                    {t("contactPage.cta.description")}
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  <Link
                    href="/demande-devis"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#D7A83F] px-8 text-sm font-black uppercase tracking-[0.16em] text-[#011332] transition hover:bg-[#efc661]"
                  >
                    {t("contactPage.cta.quote")}
                  </Link>

                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-[#D7A83F] hover:text-[#D7A83F]"
                  >
                    {t("contactPage.cta.whatsapp")}
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
