"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useLanguage } from "@/i18n/LanguageProvider";
import { languages, type LanguageCode } from "@/i18n/translations";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement | null>(null);

  const currentLanguage =
    languages.find((item) => item.code === language) ?? languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        switcherRef.current &&
        !switcherRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleLanguageChange(languageCode: LanguageCode) {
    setLanguage(languageCode);
    setIsOpen(false);
  }

  return (
    <div
      ref={switcherRef}
      className="fixed bottom-6 left-4 z-[80] sm:bottom-8 sm:left-6"
    >
      <div className="relative">
        {isOpen ? (
          <div className="absolute bottom-full left-0 mb-3 w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white py-2 shadow-2xl shadow-slate-900/20">
            {languages.map((item) => {
              const isActive = item.code === language;

              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => handleLanguageChange(item.code)}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-bold transition ${
                    isActive
                      ? "bg-[#011332] text-white"
                      : "text-[#011332] hover:bg-slate-50"
                  }`}
                >
                  <span className="flex h-10 w-12 items-center justify-center rounded-md bg-slate-100 text-3xl leading-none">
                    {item.flag}
                  </span>

                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => setIsOpen((currentValue) => !currentValue)}
          aria-label="Changer la langue"
          className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-[#011332] shadow-2xl shadow-slate-900/15 transition hover:border-[#D7A83F]"
        >
          <span className="text-3xl leading-none">{currentLanguage.flag}</span>

          <span className="text-base font-black uppercase tracking-[0.08em]">
            {currentLanguage.shortLabel}
          </span>

          <ChevronDown
            aria-hidden="true"
            className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>
    </div>
  );
}