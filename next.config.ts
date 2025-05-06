import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Configuré pour GitHub Pages - le nom du dépôt GitHub
  basePath: process.env.NODE_ENV === 'production' ? '/test-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/public/' : '',
  images: {
    unoptimized: true, // Désactive l'optimisation des images pour l'export statique
  },
};

export default nextConfig;
