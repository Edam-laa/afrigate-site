"use client";

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useHomeContent } from "@/i18n/useHomeContent";

const testimonials = [
  {
    name: "Client B2B",
    category: "Matériaux de construction",
    image: "/images/testimonials/testimonial-1.jpg",
    rating: "4/5",
    ratingValue: 4,
    imagePosition: "object-[50%_18%]",
  },
  {
    name: "Partenaire professionnel",
    category: "Électricité",
    image: "/images/testimonials/testimonial-2.jpg",
    rating: "5/5",
    ratingValue: 5,
    imagePosition: "object-[50%_30%]",
  },
  {
    name: "Acheteur entreprise",
    category: "Produits alimentaires",
    image: "/images/testimonials/testimonial-3.jpg",
    rating: "3/5",
    ratingValue: 3,
    imagePosition: "object-[50%_22%]",
  },
  {
    name: "Client international",
    category: "Produits cosmétiques",
    image: "/images/testimonials/testimonial-4.jpg",
    rating: "5/5",
    ratingValue: 5,
    imagePosition: "object-[60%_8%]",
  },
  {
    name: "Responsable achat",
    category: "Industrie",
    image: "/images/testimonials/testimonial-5.jpg",
    rating: "4/5",
    ratingValue: 4,
    imagePosition: "object-[50%_10%]",
  },
  {
    name: "Distributeur partenaire",
    category: "Commerce international",
    image: "/images/testimonials/testimonial-6.jpg",
    rating: "4/5",
    ratingValue: 4,
    imagePosition: "object-[50%_35%]",
  },
];

function RatingStars({ value }: { value: number }) {
  const roundedValue = Math.round(value);

  return (
    <div className="mt-5 flex items-center gap-1" aria-label={`Note ${value}/5`}>
      {Array.from({ length: 5 }, (_, index) => {
        const isActive = index < roundedValue;

        return (
          <span
            key={index}
            className={
              isActive
                ? "text-2xl leading-none text-gold"
                : "text-2xl leading-none text-slate-300"
            }
          >
            ★
          </span>
        );
      })}
    </div>
  );
}

export function TestimonialsMarquee() {
  const { testimonials: testimonialsContent } = useHomeContent();

  const translatedTestimonials = testimonials.map((testimonial, index) => ({
    ...testimonial,
    quote:
      testimonialsContent.quotes[index] ??
      testimonialsContent.quotes[0] ??
      "",
  }));

  const repeatedTestimonials = [
    ...translatedTestimonials,
    ...translatedTestimonials,
    ...translatedTestimonials,
  ];

  return (
    <section className="overflow-hidden bg-background pb-24 pt-20 text-foreground sm:pb-28 sm:pt-24 lg:pb-32 lg:pt-28">
      <Container>
        <ScrollReveal direction="up">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-gold sm:text-lg">
              {testimonialsContent.label}
            </p>

            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gold" />

            <h2 className="heading-serif mx-auto mt-6 max-w-5xl text-4xl font-black tracking-[-0.03em] text-navy sm:text-5xl lg:text-6xl">
              {testimonialsContent.title}
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              {testimonialsContent.description}
            </p>
          </div>
        </ScrollReveal>
      </Container>

      <ScrollReveal direction="zoom" delay={160}>
        <div className="relative mt-16">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent sm:w-16 lg:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent sm:w-16 lg:w-24" />

          <div className="group flex w-full overflow-hidden py-4">
            <div className="flex min-w-max animate-partners-marquee items-stretch gap-10 pr-10 group-hover:[animation-play-state:paused]">
              {repeatedTestimonials.map((testimonial, index) => (
                <article
                  key={`${testimonial.name}-${index}`}
                  className="flex w-[360px] shrink-0 flex-col overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-[0_18px_45px_rgba(8,26,51,0.08)] transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_22px_55px_rgba(8,26,51,0.14)] sm:w-[420px]"
                >
                  <div className="relative h-64 w-full overflow-hidden bg-slate-100 sm:h-72">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="(max-width: 640px) 360px, 420px"
                      className={`object-cover ${testimonial.imagePosition} transition duration-500 hover:scale-105`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#011332]/18 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-black leading-tight text-navy">
                          {testimonial.name}
                        </h3>

                        <p className="mt-2 text-sm font-bold text-muted">
                          {testimonial.category}
                        </p>
                      </div>

                      <span className="shrink-0 rounded-full bg-gold/15 px-4 py-1.5 text-sm font-black text-navy">
                        {testimonial.rating}
                      </span>
                    </div>

                    <RatingStars value={testimonial.ratingValue} />

                    <p className="mt-5 flex-1 text-sm leading-7 text-muted">
                      “{testimonial.quote}”
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}