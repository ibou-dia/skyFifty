"use client";

import { motion } from 'framer-motion';

interface AvatarProps {
  name: string;
  gradientClass: string;
  size?: string;
  className?: string;
}

/**
 * Un composant qui crée un avatar stylisé basé sur les initiales du nom
 */
const Avatar = ({ name, gradientClass, size = "w-32 h-32", className = "" }: AvatarProps) => {
  // Obtenir les initiales à partir du nom
  const getInitials = (name: string) => {
    const nameParts = name.split(' ');
    if (nameParts.length >= 2) {
      return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const initials = getInitials(name);

  return (
    <motion.div 
      className={`relative ${size} ${className} overflow-hidden`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {/* Cercles décoratifs */}
      <div className="absolute w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full transform translate-x-6 -translate-y-6 blur-md"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/10 rounded-full transform -translate-x-4 translate-y-4 blur-md"></div>
      
      {/* Grille décorative */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div 
            key={`h-${i}`}
            className="absolute w-full h-px bg-white" 
            style={{ top: `${(i + 1) * 100 / 7}%` }}
          ></div>
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <div 
            key={`v-${i}`} 
            className="absolute h-full w-px bg-white" 
            style={{ left: `${(i + 1) * 100 / 7}%` }}
          ></div>
        ))}
      </div>
      
      {/* Fond avec gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} z-0`}></div>
      
      {/* Initiales */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <span className="text-white font-bold text-3xl">{initials}</span>
      </div>
    </motion.div>
  );
};

export default Avatar;
