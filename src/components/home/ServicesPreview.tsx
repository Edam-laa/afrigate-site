"use client";

import { ArrowRight, Boxes, ClipboardCheck, Search, Truck } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useHomeContent } from "@/i18n/useHomeContent";

const icons = [Boxes, Search, Truck, ClipboardCheck];

const revealDirections = ["left", "up", "up", "right"] as const;

export function ServicesPreview() {
  const { services } = useHomeContent();

  return (
    <section className="bg-[#F4F6F8] py-20 sm:py-28 lg:py-32" id="services">
      <Container className="max-w-[1500px]">
        <ScrollReveal direction="up">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
              {services.label}
            </p>

            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

            <h2 className="heading-serif mx-auto mt-6 max-w-5xl text-4xl font-black tracking-[-0.03em] text-navy sm:text-5xl lg:text-6xl">
              {services.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.items.map((service, index) => {
            const Icon = icons[index] ?? Boxes;
            const direction = revealDirections[index] ?? "up";

            return (
              <ScrollReveal
                key={service.title}
                direction={direction}
                delay={120 + index * 120}
              >
                <article className="group flex h-full min-h-[36rem] flex-col overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-900/10 ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/15">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-center transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D7A83F] text-[#061D3B] shadow-lg shadow-slate-950/15">
                      <Icon aria-hidden="true" className="h-7 w-7" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="heading-serif text-2xl font-black leading-tight tracking-[-0.02em] text-[#061D3B] sm:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-5 text-base leading-8 text-slate-600">
                      {service.description}
                    </p>

                    <a
                      className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-black uppercase tracking-[0.12em] text-[#B28A24] transition hover:text-[#061D3B]"
                      href={service.href}
                    >
                      {services.buttonLabel ?? "En savoir plus"}
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}