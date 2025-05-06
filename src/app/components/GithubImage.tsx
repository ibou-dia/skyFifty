"use client";

import Image, { ImageProps } from 'next/image';

// Ce composant adapte les chemins d'image pour qu'ils fonctionnent à la fois
// en développement local et sur GitHub Pages
const GithubImage = (props: ImageProps) => {
  // Vérifier si props.src est une chaîne de caractères et commence par "/"
  if (typeof props.src === 'string' && props.src.startsWith('/')) {
    // Préfixer le chemin pour GitHub Pages en production
    const basePath = process.env.NODE_ENV === 'production' ? '/test-portfolio' : '';
    const adjustedSrc = `${basePath}${props.src}`;
    
    // Important : on passe tous les props (y compris alt) à Image
    return <Image {...props} src={adjustedSrc} />;
  }
  
  // Si src n'est pas une chaîne ou ne commence pas par "/", utiliser Image normalement
  return <Image {...props} />;
};

export default GithubImage;
