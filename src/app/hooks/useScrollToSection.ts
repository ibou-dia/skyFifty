"use client";

import { useCallback } from 'react';

export const useScrollToSection = () => {
  const scrollToSection = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    
    if (element) {
      // Calcul de l'offset pour tenir compte de la barre de navigation
      const offset = 80; // Hauteur approximative de la navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return scrollToSection;
};

export default useScrollToSection;
