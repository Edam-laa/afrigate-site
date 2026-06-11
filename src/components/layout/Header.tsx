"use client";

import { Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61580003318107",
    text: "f",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/posts/infinity-international-intertrade_activity-7465323026675392512-hKdr?utm_source=share&utm_medium=member_android&rcm=ACoAACVGZhsBTUCatakBnad_QwjWQ6H6jm-ODDU",
    text: "in",
  },
];

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

function Brand() {
  return (
    <Link
      className="flex shrink-0 items-center gap-4"
      href="/"
      aria-label="Afrigate Partner by Infinity International Intertrade"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-white/25">
        <Image
          src={siteConfig.assets.logo}
          alt="Logo Afrigate Partner by Infinity International Intertrade"
          fill
          sizes="80px"
          className="object-contain p-1"
          priority
        />
      </span>

      <span className="flex max-w-[13rem] flex-col leading-none sm:max-w-[17rem]">
        <span className="heading-serif text-3xl font-black tracking-tight text-white sm:text-4xl">
          Afrigate Partner
        </span>
        <span className="mt-1.5 text-[0.58rem] font-bold uppercase leading-4 tracking-[0.18em] text-[#D7A83F] sm:text-[0.68rem]">
          by Infinity International Intertrade
        </span>
      </span>
    </Link>
  );
}

function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <form
      action="/produits"
      method="get"
      className="hidden w-52 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-white transition focus-within:border-[#D7A83F] focus-within:bg-white/15 2xl:flex"
    >
      <Search aria-hidden="true" className="h-4 w-4 shrink-0 text-[#D7A83F]" />
      <input
        type="search"
        name="q"
        placeholder={placeholder}
        className="w-full bg-transparent text-sm font-medium text-white outline-none placeholder:text-white/55"
      />
    </form>
  );
}

function SocialLinks() {
  return (
    <div className="hidden items-center gap-2 2xl:flex">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          target="_blank"
          rel="noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-black text-white transition hover:border-[#D7A83F] hover:bg-[#D7A83F] hover:text-[#011332]"
        >
          {social.text}
        </a>
      ))}
    </div>
  );
}

export function Header() {
  const { t, language } = useLanguage();

  const searchPlaceholder =
    language === "fr"
      ? "Rechercher..."
      : language === "en"
        ? "Search..."
        : "بحث...";

  const menuLabel =
    language === "fr"
      ? "Ouvrir le menu mobile"
      : language === "en"
        ? "Open mobile menu"
        : "فتح القائمة";

  return (
    <header className="sticky top-0 z-50 bg-[#011332] text-white shadow-xl shadow-slate-950/10">
      <Container className="flex min-h-24 max-w-none items-center justify-between gap-8 px-6 py-3 lg:px-10">
        <Brand />

        <nav
          aria-label="Navigation principale"
          className="hidden flex-1 items-center justify-center gap-9 xl:flex"
        >
          {navigationLinks.map((item) => (
            <Link
              className="text-base font-black text-white/90 transition hover:text-[#D7A83F]"
              href={item.href}
              key={item.href}
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 xl:flex">
          <SearchBar placeholder={searchPlaceholder} />
          <SocialLinks />

          <Button
            href="/demande-devis"
            className="min-h-12 px-8 uppercase tracking-[0.16em]"
          >
            {t("nav.quote")}
          </Button>
        </div>

        <details className="group relative xl:hidden">
          <summary
            aria-label={menuLabel}
            className="flex h-12 w-12 cursor-pointer list-none items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm transition hover:border-[#D7A83F]"
          >
            <Menu aria-hidden="true" className="h-5 w-5" />
          </summary>

          <div className="absolute right-0 top-16 w-[min(88vw,24rem)] rounded-3xl border border-white/10 bg-[#011332] p-4 shadow-2xl shadow-slate-950/30">
            <nav className="grid gap-1" aria-label="Navigation mobile">
              {navigationLinks.map((item) => (
                <Link
                  className="rounded-2xl px-4 py-3 text-base font-bold text-white/85 transition hover:bg-white/10 hover:text-white"
                  href={item.href}
                  key={item.href}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </nav>

            <div className="mt-4 border-t border-white/10 pt-4">
              <form
                action="/produits"
                method="get"
                className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white"
              >
                <Search
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-[#D7A83F]"
                />
                <input
                  type="search"
                  name="q"
                  placeholder={searchPlaceholder}
                  className="w-full bg-transparent text-sm font-medium text-white outline-none placeholder:text-white/55"
                />
              </form>

              <div className="mt-4 flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-black text-white transition hover:border-[#D7A83F] hover:bg-[#D7A83F] hover:text-[#011332]"
                  >
                    {social.text}
                  </a>
                ))}
              </div>

              <div className="mt-4 grid gap-3">
                <Button
                  href="/demande-devis"
                  className="uppercase tracking-[0.12em]"
                >
                  {t("nav.quote")}
                </Button>
              </div>
            </div>
          </div>
        </details>
      </Container>
    </header>
  );
}
