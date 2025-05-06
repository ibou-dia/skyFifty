import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Déterminer le préfixe de chemin en fonction de l'environnement
const basePath = process.env.NODE_ENV === 'production' ? '/skyFifty' : '';

export const metadata: Metadata = {
  title: "Equipe SkyFifty",
  description: "Présentation de notre équipe et de notre projet AeroFlow, une solution innovante pour fluidifier le passage à l'aéroport combinant check-in numérique, QR code sécurisé et reconnaissance faciale.",
  icons: {
    icon: `${basePath}/logo-skyfifty.jpg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Ajout de liens favicon alternatifs pour assurer la compatibilité */}
        <link rel="icon" href={`${basePath}/logo-skyfifty.png`} />
        <link rel="apple-touch-icon" href={`${basePath}/logo-skyfifty.png`} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
