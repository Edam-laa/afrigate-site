"use client";

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useHomeContent } from "@/i18n/useHomeContent";

const partners = [
  {
    name: "Partenaire 1",
    logo: "/images/partners/partner-1.jpg",
  },
  {
    name: "Partenaire 2",
    logo: "/images/partners/partner-2.png",
  },
  {
    name: "Partenaire 3",
    logo: "/images/partners/partner-3.png",
  },
  {
    name: "Partenaire 4",
    logo: "/images/partners/partner-4.png",
  },
  {
    name: "Partenaire 5",
    logo: "/images/partners/partner-5.jpg",
  },
  {
    name: "Partenaire 6",
    logo: "/images/partners/partner-6.png",
  },
];

export function PartnersMarquee() {
  const { partners: partnersContent } = useHomeContent();

  const repeatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="overflow-hidden bg-background py-20 text-foreground sm:py-24 lg:py-28">
      <Container>
        <ScrollReveal direction="up">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
              {partnersContent.label}
            </p>

            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

            <h2 className="heading-serif mx-auto mt-6 max-w-5xl text-4xl font-black tracking-[-0.03em] text-navy sm:text-5xl lg:text-6xl">
              {partnersContent.title}
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              {partnersContent.description}
            </p>
          </div>
        </ScrollReveal>
      </Container>

      <ScrollReveal direction="zoom" delay={160}>
        <div className="relative mt-16">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent sm:w-16 lg:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent sm:w-16 lg:w-24" />

          <div className="group flex w-full overflow-hidden py-4">
            <div className="flex min-w-max animate-partners-marquee items-center gap-10 pr-10 group-hover:[animation-play-state:paused]">
              {repeatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex h-32 w-72 shrink-0 items-center justify-center rounded-[2rem] border border-navy/10 bg-white p-7 shadow-[0_18px_45px_rgba(8,26,51,0.08)] transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_22px_55px_rgba(8,26,51,0.14)]"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={220}
                    height={110}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}