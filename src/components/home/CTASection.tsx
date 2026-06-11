"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/data/site";
import { useHomeContent } from "@/i18n/useHomeContent";

const contactItems = [
  {
    label: "Téléphone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replaceAll(" ", "")}`,
    icon: Phone,
  },
  {
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: siteConfig.contact.whatsapp,
    href: siteConfig.contact.whatsappUrl,
    icon: MessageCircle,
    external: true,
  },
];

export function CTASection() {
  const { cta } = useHomeContent();

  const primaryHref = cta.primaryCta.label.toLowerCase().includes("devis")
    ? "/demande-devis"
    : cta.primaryCta.href;

  const secondaryHref = cta.secondaryCta.label.toLowerCase().includes("devis")
    ? "/demande-devis"
    : cta.secondaryCta.href;

  const secondaryIsExternal =
    secondaryHref.startsWith("http") || secondaryHref.startsWith("https");

  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28" id="contact">
      <Container className="max-w-[1500px]">
        <ScrollReveal direction="up">
          <div className="overflow-hidden rounded-[2rem] bg-[#011332] text-white shadow-2xl shadow-slate-900/15">
            <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
              <ScrollReveal direction="left" delay={120}>
                <div className="relative h-full overflow-hidden p-8 sm:p-10 lg:p-12">
                  <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

                  <div className="relative">
                    <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-gold sm:text-lg">
                      {cta.label}
                    </p>

                    <div className="mt-4 h-1 w-20 rounded-full bg-gold" />

                    <h2 className="heading-serif mt-6 max-w-3xl text-4xl font-black tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                      {cta.title}
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                      {cta.description}
                    </p>

                    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                      <Button
                        href={primaryHref}
                        className="justify-center uppercase tracking-[0.12em]"
                      >
                        {cta.primaryCta.label}
                      </Button>

                      <Button
                        href={secondaryHref}
                        target={secondaryIsExternal ? "_blank" : undefined}
                        rel={secondaryIsExternal ? "noreferrer" : undefined}
                        variant="outline"
                        className="justify-center uppercase tracking-[0.12em]"
                      >
                        {cta.secondaryCta.label}
                      </Button>
                    </div>

                    <div className="mt-10 grid gap-4">
                      {contactItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                          <ScrollReveal
                            key={item.label}
                            direction="up"
                            delay={220 + index * 90}
                          >
                            <a
                              href={item.href}
                              target={item.external ? "_blank" : undefined}
                              rel={item.external ? "noreferrer" : undefined}
                              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/8 p-4 transition hover:border-gold/50 hover:bg-white/12"
                            >
                              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold transition group-hover:bg-gold group-hover:text-navy">
                                <Icon aria-hidden="true" className="h-5 w-5" />
                              </span>

                              <span>
                                <span className="block text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                                  {item.label}
                                </span>
                                <span className="mt-1 block text-sm font-semibold text-white sm:text-base">
                                  {item.value}
                                </span>
                              </span>
                            </a>
                          </ScrollReveal>
                        );
                      })}

                      <ScrollReveal direction="up" delay={500}>
                        <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/8 p-4">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                            <MapPin aria-hidden="true" className="h-5 w-5" />
                          </span>

                          <span>
                            <span className="block text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                              Adresse
                            </span>
                            <span className="mt-1 block text-sm font-semibold leading-6 text-white sm:text-base">
                              {siteConfig.contact.address}
                            </span>
                          </span>
                        </div>
                      </ScrollReveal>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={180}>
                <div className="h-full bg-white p-6 sm:p-8 lg:p-10">
                  <form
                    action="#"
                    method="post"
                    className="h-full rounded-[1.5rem] border border-slate-200 bg-white p-6 text-navy shadow-xl shadow-slate-950/5 sm:p-8"
                  >
                    <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-gold sm:text-lg">
                      {cta.formLabel}
                    </p>

                    <div className="mt-4 h-1 w-20 rounded-full bg-gold" />

                    <h3 className="heading-serif mt-6 text-3xl font-black tracking-[-0.03em] sm:text-4xl">
                      {cta.formTitle}
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                      {cta.formDescription}
                    </p>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contactName"
                          className="mb-2 block text-sm font-semibold"
                        >
                          Nom complet
                        </label>
                        <input
                          id="contactName"
                          name="contactName"
                          type="text"
                          required
                          placeholder="Votre nom"
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-gold focus:ring-2 focus:ring-gold/20"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contactEmail"
                          className="mb-2 block text-sm font-semibold"
                        >
                          Email
                        </label>
                        <input
                          id="contactEmail"
                          name="contactEmail"
                          type="email"
                          required
                          placeholder="votre@email.com"
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-gold focus:ring-2 focus:ring-gold/20"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contactPhone"
                          className="mb-2 block text-sm font-semibold"
                        >
                          Téléphone
                        </label>
                        <input
                          id="contactPhone"
                          name="contactPhone"
                          type="tel"
                          placeholder="+216 ..."
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-gold focus:ring-2 focus:ring-gold/20"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contactSubject"
                          className="mb-2 block text-sm font-semibold"
                        >
                          Sujet
                        </label>
                        <input
                          id="contactSubject"
                          name="contactSubject"
                          type="text"
                          required
                          placeholder="Objet de votre message"
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-gold focus:ring-2 focus:ring-gold/20"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="contactMessage"
                          className="mb-2 block text-sm font-semibold"
                        >
                          Message
                        </label>
                        <textarea
                          id="contactMessage"
                          name="contactMessage"
                          required
                          rows={5}
                          placeholder="Décrivez votre besoin, votre produit ou votre projet..."
                          className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-gold focus:ring-2 focus:ring-gold/20"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-navy transition hover:-translate-y-0.5 hover:bg-[#efc661] hover:shadow-lg hover:shadow-gold/20"
                    >
                      Envoyer le message
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}