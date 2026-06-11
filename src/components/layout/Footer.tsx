"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

const navigationLinks = [
  {
    key: "home",
    href: "/",
  },
  {
    key: "about",
    href: "/a-propos",
  },
  {
    key: "services",
    href: "/services",
  },
  {
    key: "products",
    href: "/produits",
  },
  {
    key: "contact",
    href: "/contact",
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const footerLogo = siteConfig.assets.footerLogo;
  const headerLogo = siteConfig.assets.logo;
  const linkedInUrl =
    "https://www.linkedin.com/in/edam-laadhar/?skipRedirect=true";

  return (
    <footer className="bg-[#011332] text-white">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.75fr_1fr]">
          <div>
            <Link
              href="/#home"
              className="inline-flex items-center gap-6"
              aria-label="Afrigate Partner by Infinity International Intertrade"
            >
              <span className="relative h-32 w-32 shrink-0 overflow-hidden bg-[#011332]">
                <Image
                  src={footerLogo}
                  alt="Logo Afrigate Partner by Infinity International Intertrade"
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </span>

              <span className="flex max-w-xl flex-col">
                <span className="heading-serif text-4xl font-black leading-none text-white sm:text-5xl">
                  Afrigate Partner
                </span>

                <span className="mt-2 text-xs font-bold uppercase tracking-[0.24em] text-[#D7A83F] sm:text-sm">
                  by Infinity International Intertrade
                </span>

                <span className="mt-3 text-xs font-bold uppercase tracking-[0.32em] text-[#D7A83F]">
                  {t("footer.baseline")}
                </span>
              </span>
            </Link>

            <p className="mt-7 max-w-lg text-sm leading-7 text-white/72">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#D7A83F]">
              {t("footer.quickLinks")}
            </h2>

            <nav className="mt-6 grid gap-3" aria-label="Navigation footer">
              {navigationLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/72 transition hover:text-[#D7A83F]"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}

              <Link
                href="/demande-devis"
                className="text-sm font-semibold text-white/90 transition hover:text-[#D7A83F]"
              >
                {t("nav.quote")}
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#D7A83F]">
              {t("footer.contact")}
            </h2>

            <div className="mt-6 grid gap-5 text-sm text-white/72">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex gap-3 transition hover:text-white"
              >
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#D7A83F]" />
                <span>{siteConfig.contact.email}</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone.replaceAll(" ", "")}`}
                className="flex gap-3 transition hover:text-white"
              >
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#D7A83F]" />
                <span>{siteConfig.contact.phone}</span>
              </a>

              <p className="flex gap-3 leading-7">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#D7A83F]" />
                <span>{siteConfig.contact.address}</span>
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-white py-5 text-[#011332]">
        <Container>
          <div className="grid items-center gap-4 text-center md:grid-cols-[auto_1fr_auto]">
            <Link
              href="/#home"
              aria-label="Afrigate Partner by Infinity International Intertrade"
              className="justify-self-center md:justify-self-start"
            >
              <span className="relative block h-14 w-28">
                <Image
                  src={headerLogo}
                  alt="Logo Afrigate Partner by Infinity International Intertrade"
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </span>
            </Link>

            <p className="text-sm font-bold text-[#011332] sm:text-base">
              © {currentYear}, {t("footer.signature")}{" "}
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#D7A83F]"
              >
                Edam Laadhar
              </a>{" "}
              — {t("footer.creation")}
            </p>

            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Edam Laadhar"
              className="justify-self-center text-[#011332] transition hover:text-[#D7A83F] md:justify-self-end"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#011332] text-xs font-black text-white transition hover:bg-[#D7A83F] hover:text-[#011332]">
                in
              </span>
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
