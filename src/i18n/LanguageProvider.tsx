"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { languages, translations, type LanguageCode } from "./translations";

type TranslationTree = Record<string, unknown>;

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  languages: typeof languages;
  t: (key: string) => string;
};

const STORAGE_KEY = "afrigate-language";
const defaultLanguage: LanguageCode = "fr";

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

function isLanguageCode(value: string | null): value is LanguageCode {
  return languages.some((language) => language.code === value);
}

function getInitialLanguage(): LanguageCode {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY);

  return isLanguageCode(storedLanguage) ? storedLanguage : defaultLanguage;
}

function resolveTranslation(source: TranslationTree, key: string): string | undefined {
  let current: unknown = source;

  for (const part of key.split(".")) {
    if (
      typeof current !== "object" ||
      current === null ||
      !Object.prototype.hasOwnProperty.call(current, part)
    ) {
      return undefined;
    }

    current = (current as Record<string, unknown>)[part];
  }

  return typeof current === "string" ? current : undefined;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(
    getInitialLanguage,
  );

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;

    /**
     * Important :
     * On ne met pas document.documentElement.dir = "rtl".
     * L'arabe change uniquement les textes.
     * La structure visuelle du site reste stable.
     */
  }, [language]);

  const t = useMemo(() => {
    return (key: string) => {
      const currentTranslation = resolveTranslation(
        translations[language],
        key,
      );

      const fallbackTranslation = resolveTranslation(
        translations[defaultLanguage],
        key,
      );

      return currentTranslation ?? fallbackTranslation ?? key;
    };
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: setLanguageState,
      languages,
      t,
    }),
    [language, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside a LanguageProvider");
  }

  return context;
}