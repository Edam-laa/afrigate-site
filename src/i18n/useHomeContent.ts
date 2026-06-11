"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { homeTranslations } from "@/i18n/homeTranslations";

export function useHomeContent() {
  const { language } = useLanguage();

  return homeTranslations[language];
}