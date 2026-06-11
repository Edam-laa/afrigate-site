"use client";

import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useHomeContent } from "@/i18n/useHomeContent";

export function Hero() {
  const { hero } = useHomeContent();

  return (
    <section
      className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-[#081A33] text-white lg:min-h-[calc(100vh-4rem)]"
      id="home"
    >
      <Image
        src={hero.fallbackImage}
        alt="Logistique internationale Afrigate Partner by Infinity International Intertrade"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />

      <video
        aria-hidden="true"
        autoPlay
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
        loop
        muted
        playsInline
        poster={hero.fallbackImage}
        preload="metadata"
      >
        <source src={hero.videoSrc} type="video/mp4" />
      </video>

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061427] via-[#081A33]/92 to-[#081A33]/58" />
      <div className="absolute inset-0 -z-10 bg-[#011332]/20" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-[#081A33] to-transparent" />

      <Container className="flex min-h-[calc(100vh-5rem)] items-center py-24 sm:py-28 lg:min-h-[calc(100vh-4rem)] lg:py-32">
        <div className="max-w-5xl">
          <p className="mb-6 inline-flex max-w-full rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-black uppercase leading-5 tracking-[0.18em] text-[#D7A83F] backdrop-blur sm:text-sm sm:tracking-[0.24em]">
            {hero.eyebrow}
          </p>

          <h1 className="heading-serif max-w-5xl text-5xl font-black tracking-[-0.04em] sm:text-6xl lg:text-8xl lg:leading-[0.95]">
            {hero.titlePrefix}
            {hero.titleHighlight ? (
              <>
                {" "}
                <span className="text-[#D7A83F]">{hero.titleHighlight}</span>
              </>
            ) : null}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/82 sm:text-xl sm:leading-9">
            {hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>

            <Button href={hero.secondaryCta.href} variant="outline">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
