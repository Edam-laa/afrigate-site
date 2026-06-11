"use client";

import { Handshake, ShieldCheck, Star } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useHomeContent } from "@/i18n/useHomeContent";

const icons = [ShieldCheck, Star, Handshake];

export function Values() {
  const homeContent = useHomeContent();

  return (
    <section className="bg-[#081A33] py-20 text-white sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <ScrollReveal direction="left">
            <div>
              <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                {homeContent.valuesSection.label}
              </p>

              <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

              <h2 className="heading-serif mt-6 max-w-3xl text-4xl font-black tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                {homeContent.valuesSection.title}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={120}>
            <p className="max-w-2xl text-base leading-8 text-white/72 lg:ml-auto">
              {homeContent.valuesSection.description}
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid gap-8 border-y border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {homeContent.stats.map((stat, index) => (
            <ScrollReveal key={stat.label} direction="up" delay={index * 80}>
              <div>
                <p className="heading-serif text-5xl font-black tracking-[-0.04em] text-[#D7A83F] sm:text-6xl">
                  {stat.value}
                </p>

                <p className="mt-3 max-w-[14rem] text-xs font-black uppercase leading-6 tracking-[0.22em] text-white/70">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/10 md:grid-cols-3">
          {homeContent.values.map((value, index) => {
            const Icon = icons[index] ?? ShieldCheck;

            return (
              <ScrollReveal
                key={value.title}
                direction="up"
                delay={index * 100}
              >
                <article
                  className={
                    value.featured
                      ? "h-full bg-[#D7A83F] p-8 text-[#061D3B] sm:p-10 lg:p-12"
                      : "h-full bg-[#123057] p-8 text-white sm:p-10 lg:p-12"
                  }
                >
                  <span
                    className={
                      value.featured
                        ? "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#061D3B] text-[#D7A83F]"
                        : "flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#D7A83F]"
                    }
                  >
                    <Icon aria-hidden="true" className="h-7 w-7" />
                  </span>

                  <h3 className="heading-serif mt-10 text-3xl font-black tracking-[-0.02em] sm:text-4xl">
                    {value.title}
                  </h3>

                  <p
                    className={
                      value.featured
                        ? "mt-5 text-base leading-8 text-[#061D3B]/76"
                        : "mt-5 text-base leading-8 text-white/72"
                    }
                  >
                    {value.description}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}