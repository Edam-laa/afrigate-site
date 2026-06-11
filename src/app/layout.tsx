import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afrigate Partner by Infinity International Intertrade | Export de produits de bâtiment",
  description:
    "Afrigate Partner by Infinity International Intertrade accompagne les professionnels dans le sourcing, la fourniture et l'exportation de matériaux et équipements de bâtiment vers l'Afrique et l'international.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full scroll-smooth antialiased">
      <body className="min-h-full">
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <LanguageSwitcher />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}