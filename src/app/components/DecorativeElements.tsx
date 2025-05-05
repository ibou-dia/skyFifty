"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// Composant pour créer une grille de points décorative
export const DotGrid = ({ className = '' }) => {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <div className="grid grid-cols-6 gap-4">
        {Array.from({ length: 48 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-gray-400/30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.05 * (i % 12),
              repeat: 0,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Composant pour un cercle décoratif qui flotte avec animation
export const FloatingCircle = ({ size = 'w-24 h-24', color = 'bg-purple-500/10', className = '', delay = 0 }) => {
  return (
    <motion.div
      className={`absolute rounded-full blur-xl ${size} ${color} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 0.6,
        y: [0, -15, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        repeatType: "mirror",
      }}
    />
  );
};

// Composant pour un élément décoratif zigzag
export const Zigzag = ({ className = '', color = 'stroke-gray-300' }) => {
  return (
    <svg 
      width="150" 
      height="24" 
      viewBox="0 0 150 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${className}`}
    >
      <motion.path 
        d="M0 22L7.5 2L15 22L22.5 2L30 22L37.5 2L45 22L52.5 2L60 22L67.5 2L75 22L82.5 2L90 22L97.5 2L105 22L112.5 2L120 22L127.5 2L135 22L142.5 2L150 22" 
        className={`${color} opacity-50`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
    </svg>
  );
};

// Composant pour une section de fond ondulé
export const WavyBackground = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="absolute bottom-0 left-0 w-full"
        height="120"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0,0 C150,90 350,0 500,100 C650,200 750,20 900,80 C1050,140 1150,40 1200,100 L1200,0 L0,0 Z"
          className="fill-current text-white opacity-20"
          initial={{ y: 120 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5 }}
        />
        <motion.path
          d="M0,0 C150,20 350,60 500,30 C650,0 750,100 900,60 C1050,20 1150,80 1200,20 L1200,0 L0,0 Z"
          className="fill-current text-white opacity-10"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.8, delay: 0.2 }}
        />
      </svg>
    </div>
  );
};

// Composant pour un badge décoratif
export const Badge = ({ children, className = '' }: { children: ReactNode, className?: string }) => {
  return (
    <motion.div
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
