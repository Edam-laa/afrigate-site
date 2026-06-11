"use client";

import { Box, Globe2, Network, UserCheck } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useHomeContent } from "@/i18n/useHomeContent";

const icons = [Globe2, UserCheck, Box, Network];

export function WhyChooseUs() {
  const { differentiation } = useHomeContent();

  return (
    <section className="bg-[#F4F6F8] py-20 sm:py-28 lg:py-32">
      <Container className="max-w-[1500px]">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <ScrollReveal direction="left">
            <div className="relative min-h-[36rem] overflow-hidden rounded-[2rem] bg-[#011332] shadow-2xl shadow-slate-900/10 lg:min-h-[42rem]">
              <Image
                src={differentiation.image}
                alt="Opérations portuaires et marchés internationaux"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#011332]/95 via-[#011332]/35 to-transparent" />
              <div className="absolute inset-0 bg-[#011332]/10" />

              <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-10">
                <p className="heading-serif text-4xl font-black tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                  <span className="text-[#D7A83F]">
                    {differentiation.imageOverlay.value}
                  </span>{" "}
                  {differentiation.imageOverlay.label}
                </p>

                <p className="mt-4 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                  {differentiation.imageOverlay.description}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={120}>
            <div>
              <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                {differentiation.label}
              </p>

              <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

              <h2 className="heading-serif mt-6 max-w-3xl text-4xl font-black tracking-[-0.03em] text-navy sm:text-5xl lg:text-6xl">
                {differentiation.title}
              </h2>

              <div className="mt-11 grid gap-6">
                {differentiation.items.map((item, index) => {
                  const Icon = icons[index] ?? Globe2;

                  return (
                    <ScrollReveal
                      key={item.title}
                      direction="up"
                      delay={180 + index * 100}
                    >
                      <article className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-gold hover:shadow-lg sm:grid-cols-[4.5rem_1fr] sm:p-6">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#011332] text-[#D7A83F]">
                          <Icon aria-hidden="true" className="h-7 w-7" />
                        </div>

                        <div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm font-black text-[#B28A24]">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <h3 className="text-xl font-black text-[#011332]">
                              {item.title}
                            </h3>
                          </div>

                          <p className="mt-3 text-base leading-8 text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </article>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}