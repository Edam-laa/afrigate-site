"use client";

import { CheckCircle, Mail, MessageCircle, Phone, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getLocalizedProductCategories } from "@/data/productCategories";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

type QuoteRequestContentProps = {
  selectedCategory: string;
  selectedProduct: string;
  status?: "error" | "success";
};

const heroImage = "/images/backgrounds/container-terminal.jpg";

const processSteps = [
  {
    titleKey: "quotePage.steps.oneTitle",
    descriptionKey: "quotePage.steps.oneDescription",
  },
  {
    titleKey: "quotePage.steps.twoTitle",
    descriptionKey: "quotePage.steps.twoDescription",
  },
  {
    titleKey: "quotePage.steps.threeTitle",
    descriptionKey: "quotePage.steps.threeDescription",
  },
];

const requestTips = [
  "quotePage.sidebar.tipOne",
  "quotePage.sidebar.tipTwo",
  "quotePage.sidebar.tipThree",
  "quotePage.sidebar.tipFour",
  "quotePage.sidebar.tipFive",
];

export function QuoteRequestContent({
  selectedCategory,
  selectedProduct,
  status,
}: QuoteRequestContentProps) {
  const { t, language } = useLanguage();
  const localizedProductCategories = getLocalizedProductCategories(language);

  const hasPreselectedProduct = Boolean(selectedCategory || selectedProduct);

  const defaultMessage = hasPreselectedProduct
    ? `${t("quotePage.defaultMessage.intro")}

${t("quotePage.defaultMessage.category")} : ${
        selectedCategory || t("quotePage.form.notSpecifiedFeminine")
      }
${t("quotePage.defaultMessage.product")} : ${
        selectedProduct || t("quotePage.form.notSpecified")
      }

${t("quotePage.defaultMessage.outro")}`
    : "";

  return (
    <main className="bg-[#F4F6F9]">
      <section className="relative isolate min-h-[calc(100vh-6rem)] overflow-hidden bg-[#011332] py-24 text-white sm:py-28 lg:py-32">
        <Image
          src={heroImage}
          alt={t("quotePage.imageAlt.hero")}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-[#011332]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#011332] via-[#011332]/88 to-[#011332]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#011332] via-transparent to-[#011332]/15" />

        <Container className="relative flex min-h-[calc(100vh-15rem)] max-w-[1500px] items-center">
          <ScrollReveal direction="up">
            <div className="max-w-5xl">
              <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-sm">
                <span className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                  {t("quotePage.hero.label")}
                </span>
              </div>

              <h1 className="heading-serif mt-8 max-w-6xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {t("quotePage.hero.title")}
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-9 text-white/78">
                {t("quotePage.hero.description")}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#formulaire-devis"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#D7A83F] px-8 text-sm font-black uppercase tracking-[0.16em] text-[#011332] transition hover:bg-[#efc661]"
                >
                  {t("quotePage.hero.primaryCta")}
                </a>

                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-[#D7A83F] hover:text-[#D7A83F]"
                >
                  {t("quotePage.hero.secondaryCta")}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-[#011332] pb-20 text-white sm:pb-24">
        <Container className="max-w-[1500px]">
          <ScrollReveal direction="up">
            <div className="grid gap-8 border-y border-white/10 py-10 sm:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <div key={step.titleKey}>
                  <p className="heading-serif text-5xl font-black leading-none text-[#D7A83F] sm:text-6xl">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-white/72">
                    {t(step.titleKey)}
                  </p>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
                    {t(step.descriptionKey)}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section
        id="formulaire-devis"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <Container className="max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <ScrollReveal direction="left">
              <form
                action="/api/demande-devis"
                method="post"
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-950/10 sm:p-10"
              >
                <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                  {t("quotePage.form.label")}
                </p>
                <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                <h2 className="heading-serif mt-7 text-4xl font-black leading-[1] tracking-tight text-[#011332] sm:text-5xl">
                  {t("quotePage.form.title")}
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  {t("quotePage.form.description")}
                </p>

                {status ? (
                  <div
                    aria-live="polite"
                    className={`mt-8 rounded-[1.5rem] border p-5 text-sm leading-7 ${
                      status === "success"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                        : "border-rose-200 bg-rose-50 text-rose-900"
                    }`}
                  >
                    <p className="font-black uppercase tracking-[0.18em]">
                      {status === "success"
                        ? language === "en"
                          ? "Request received"
                          : language === "ar"
                            ? "تم استلام الطلب"
                            : "Demande recue"
                        : language === "en"
                          ? "Sending failed"
                          : language === "ar"
                            ? "تعذر الارسال"
                            : "Envoi impossible"}
                    </p>
                    <p className="mt-2">
                      {status === "success"
                        ? language === "en"
                          ? "Your quote request has been recorded. Our team will review it and contact you using the details provided."
                          : language === "ar"
                            ? "تم تسجيل طلب عرض السعر. سيقوم فريقنا بمراجعته والتواصل معكم عبر المعطيات المدخلة."
                            : "Votre demande de devis a bien ete enregistree. Notre equipe reviendra vers vous a partir des coordonnees renseignees."
                        : language === "en"
                          ? "An issue occurred while sending your request. Please try again or contact Afrigate Partner by Infinity International Intertrade directly."
                          : language === "ar"
                            ? "حدثت مشكلة اثناء ارسال الطلب. يمكنكم اعادة المحاولة او التواصل مباشرة مع Afrigate Partner by Infinity International Intertrade."
                            : "Un probleme est survenu pendant l'envoi. Vous pouvez reessayer ou contacter Afrigate Partner by Infinity International Intertrade directement."}
                    </p>
                  </div>
                ) : null}

                {hasPreselectedProduct ? (
                  <div className="mt-8 rounded-[1.5rem] border border-[#D7A83F]/40 bg-[#D7A83F]/10 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-[#D7A83F]">
                      {t("quotePage.form.selectedProduct")}
                    </p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                          {t("quotePage.form.category")}
                        </p>
                        <p className="mt-1 text-base font-black text-[#011332]">
                          {selectedCategory ||
                            t("quotePage.form.notSpecifiedFeminine")}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                          {t("quotePage.form.productReference")}
                        </p>
                        <p className="mt-1 text-base font-black text-[#011332]">
                          {selectedProduct || t("quotePage.form.notSpecified")}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold text-[#011332]"
                    >
                      {t("quotePage.form.name")}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder={t("quotePage.form.namePlaceholder")}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[#011332] outline-none transition focus:border-[#D7A83F] focus:ring-2 focus:ring-[#D7A83F]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-bold text-[#011332]"
                    >
                      {t("quotePage.form.company")}
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder={t("quotePage.form.companyPlaceholder")}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[#011332] outline-none transition focus:border-[#D7A83F] focus:ring-2 focus:ring-[#D7A83F]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-[#011332]"
                    >
                      {t("quotePage.form.email")}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder={t("quotePage.form.emailPlaceholder")}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[#011332] outline-none transition focus:border-[#D7A83F] focus:ring-2 focus:ring-[#D7A83F]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-[#011332]"
                    >
                      {t("quotePage.form.phone")}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      placeholder={t("quotePage.form.phonePlaceholder")}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[#011332] outline-none transition focus:border-[#D7A83F] focus:ring-2 focus:ring-[#D7A83F]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="mb-2 block text-sm font-bold text-[#011332]"
                    >
                      {t("quotePage.form.location")}
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      autoComplete="address-level2"
                      placeholder={t("quotePage.form.locationPlaceholder")}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[#011332] outline-none transition focus:border-[#D7A83F] focus:ring-2 focus:ring-[#D7A83F]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="category"
                      className="mb-2 block text-sm font-bold text-[#011332]"
                    >
                      {t("quotePage.form.productCategory")}
                    </label>
                    <select
                      key={`category-${language}-${selectedCategory}`}
                      id="category"
                      name="category"
                      defaultValue={selectedCategory}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[#011332] outline-none transition focus:border-[#D7A83F] focus:ring-2 focus:ring-[#D7A83F]/20"
                    >
                      <option value="" disabled>
                        {t("quotePage.form.categoryPlaceholder")}
                      </option>

                      {localizedProductCategories.map((category) => (
                        <option key={category.slug} value={category.title}>
                          {category.title}
                        </option>
                      ))}

                      <option value="Autre demande">
                        {t("quotePage.form.otherRequest")}
                      </option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="product"
                      className="mb-2 block text-sm font-bold text-[#011332]"
                    >
                      {t("quotePage.form.product")}
                    </label>
                    <input
                      key={`product-${language}-${selectedProduct}`}
                      id="product"
                      name="product"
                      type="text"
                      defaultValue={selectedProduct}
                      placeholder={t("quotePage.form.productPlaceholder")}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[#011332] outline-none transition focus:border-[#D7A83F] focus:ring-2 focus:ring-[#D7A83F]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quantity"
                      className="mb-2 block text-sm font-bold text-[#011332]"
                    >
                      {t("quotePage.form.quantity")}
                    </label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      placeholder={t("quotePage.form.quantityPlaceholder")}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[#011332] outline-none transition focus:border-[#D7A83F] focus:ring-2 focus:ring-[#D7A83F]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="destination"
                      className="mb-2 block text-sm font-bold text-[#011332]"
                    >
                      {t("quotePage.form.destination")}
                    </label>
                    <input
                      id="destination"
                      name="destination"
                      type="text"
                      placeholder={t("quotePage.form.destinationPlaceholder")}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[#011332] outline-none transition focus:border-[#D7A83F] focus:ring-2 focus:ring-[#D7A83F]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="deadline"
                      className="mb-2 block text-sm font-bold text-[#011332]"
                    >
                      {t("quotePage.form.deadline")}
                    </label>
                    <input
                      id="deadline"
                      name="deadline"
                      type="text"
                      placeholder={t("quotePage.form.deadlinePlaceholder")}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[#011332] outline-none transition focus:border-[#D7A83F] focus:ring-2 focus:ring-[#D7A83F]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-sm font-bold text-[#011332]"
                    >
                      {t("quotePage.form.budget")}{" "}
                      <span className="font-normal text-slate-500">
                        {t("quotePage.form.optional")}
                      </span>
                    </label>
                    <input
                      id="budget"
                      name="budget"
                      type="text"
                      placeholder={t("quotePage.form.budgetPlaceholder")}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[#011332] outline-none transition focus:border-[#D7A83F] focus:ring-2 focus:ring-[#D7A83F]/20"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-bold text-[#011332]"
                    >
                      {t("quotePage.form.message")}
                    </label>
                    <textarea
                      key={`message-${language}-${selectedCategory}-${selectedProduct}`}
                      id="message"
                      name="message"
                      rows={7}
                      required
                      defaultValue={defaultMessage}
                      placeholder={t("quotePage.form.messagePlaceholder")}
                      className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-[#011332] outline-none transition focus:border-[#D7A83F] focus:ring-2 focus:ring-[#D7A83F]/20"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D7A83F] px-8 text-sm font-black uppercase tracking-[0.16em] text-[#011332] transition hover:-translate-y-0.5 hover:bg-[#efc661] hover:shadow-lg hover:shadow-[#D7A83F]/25"
                >
                  {t("quotePage.form.submit")}
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120}>
              <aside className="sticky top-28 space-y-6">
                <div className="rounded-[2rem] bg-[#011332] p-8 text-white shadow-xl sm:p-10">
                  <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                    {t("quotePage.sidebar.label")}
                  </p>
                  <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                  <h2 className="heading-serif mt-7 text-3xl font-black leading-tight sm:text-4xl">
                    {t("quotePage.sidebar.title")}
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-white/75">
                    {t("quotePage.sidebar.description")}
                  </p>

                  <div className="mt-7 grid gap-4">
                    {requestTips.map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#D7A83F]" />
                        <p className="text-sm leading-7 text-white/82">
                          {t(item)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
                  <p className="text-sm font-black uppercase tracking-[0.28em] text-[#D7A83F]">
                    {t("quotePage.sidebar.quickContact")}
                  </p>

                  <div className="mt-6 grid gap-4">
                    <a
                      href={`tel:${siteConfig.contact.phone.replaceAll(" ", "")}`}
                      className="flex items-center gap-4 rounded-2xl bg-white p-4 text-[#011332] shadow-sm transition hover:text-[#D7A83F]"
                    >
                      <Phone className="h-5 w-5 shrink-0" />
                      <span className="text-sm font-bold">
                        {siteConfig.contact.phone}
                      </span>
                    </a>

                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="flex items-center gap-4 rounded-2xl bg-white p-4 text-[#011332] shadow-sm transition hover:text-[#D7A83F]"
                    >
                      <Mail className="h-5 w-5 shrink-0" />
                      <span className="text-sm font-bold">
                        {siteConfig.contact.email}
                      </span>
                    </a>

                    <Link
                      href="/contact"
                      className="flex items-center gap-4 rounded-2xl bg-white p-4 text-[#011332] shadow-sm transition hover:text-[#D7A83F]"
                    >
                      <MessageCircle className="h-5 w-5 shrink-0" />
                      <span className="text-sm font-bold">
                        {t("quotePage.sidebar.contactPage")}
                      </span>
                    </Link>
                  </div>
                </div>
              </aside>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#F4F6F9] pb-20 sm:pb-24 lg:pb-28">
        <Container className="max-w-[1500px]">
          <ScrollReveal direction="zoom">
            <div className="overflow-hidden rounded-[2.2rem] bg-[#011332] p-8 text-white shadow-2xl shadow-slate-950/10 sm:p-10 lg:p-14">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-base font-black uppercase leading-6 tracking-[0.32em] text-[#D7A83F] sm:text-lg">
                    {t("quotePage.cta.label")}
                  </p>
                  <div className="mt-4 h-1 w-20 rounded-full bg-[#D7A83F]" />

                  <h2 className="heading-serif mt-7 max-w-4xl text-4xl font-black leading-[1] tracking-tight sm:text-5xl lg:text-6xl">
                    {t("quotePage.cta.title")}
                  </h2>

                  <p className="mt-7 max-w-3xl text-lg leading-9 text-white/72">
                    {t("quotePage.cta.description")}
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#D7A83F] px-8 text-sm font-black uppercase tracking-[0.16em] text-[#011332] transition hover:bg-[#efc661]"
                  >
                    {t("quotePage.cta.contact")}
                  </Link>

                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-[#D7A83F] hover:text-[#D7A83F]"
                  >
                    {t("quotePage.cta.email")}
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
