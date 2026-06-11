"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useHomeContent } from "@/i18n/useHomeContent";

export function AboutPreview() {
  const { about } = useHomeContent();

  return (
    <section className="bg-white py-20 sm:py-28 lg:py-32" id="about">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1fr] lg:gap-20">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] border border-[#D7A83F]/60 bg-[#061D3B] shadow-2xl shadow-slate-900/10 sm:min-h-[32rem]">
                <Image
                  src={about.image}
                  alt="Projet bâtiment accompagné par Afrigate Partner by Infinity International Intertrade"
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061D3B]/30 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-8 right-6 rounded-2xl bg-[#0B2B5A] px-10 py-7 text-center text-white shadow-2xl shadow-slate-950/25 sm:right-10">
                <p className="heading-serif text-5xl font-black tracking-[-0.04em] text-[#D7A83F]">
                  {about.badge.value}
                </p>

                <p className="mt-2 text-xs font-black uppercase leading-5 tracking-[0.22em] text-white/80">
                  {about.badge.label}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={120}>
            <div className="pt-10 lg:pt-0">
              <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                {about.label}
              </p>

              <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

              <h2 className="heading-serif mt-6 max-w-3xl text-4xl font-black tracking-[-0.03em] text-navy sm:text-5xl lg:text-6xl">
                {about.title}
              </h2>

              <p className="mt-7 max-w-3xl text-lg leading-9 text-slate-600">
                {about.description}
              </p>

              <div className="mt-9 grid gap-5">
                {about.points.map((point, index) => (
                  <ScrollReveal
                    key={point}
                    direction="up"
                    delay={180 + index * 90}
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#D7A83F]/50 bg-[#D7A83F]/10">
                        <CheckCircle2
                          aria-hidden="true"
                          className="h-4 w-4 text-[#D7A83F]"
                        />
                      </span>

                      <p className="text-base font-bold leading-7 text-[#061D3B]">
                        {point}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <Button
                href={about.cta.href}
                variant="secondary"
                className="mt-10 uppercase tracking-[0.12em]"
              >
                {about.cta.label}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}