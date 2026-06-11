import { AboutPreview } from "@/components/home/AboutPreview";
import { CTASection } from "@/components/home/CTASection";
import { Hero } from "@/components/home/Hero";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TestimonialsMarquee } from "@/components/home/TestimonialsMarquee";
import { Values } from "@/components/home/Values";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <AboutPreview />
      <ServicesPreview />
      <ProductsPreview />
      <WhyChooseUs />
      <PartnersMarquee />
      <CTASection />
      <TestimonialsMarquee />
    </>
  );
}