"use client";

import { motion } from 'framer-motion';
import useScrollToSection from '../../hooks/useScrollToSection';
import AnimatedBackground from '../AnimatedBackground';

const Hero = () => {
  const scrollToSection = useScrollToSection();
  
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Arrière-plan avec dégradé et animations */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-800 to-blue-900" />
      <AnimatedBackground />
      
      {/* Décoration graphique */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path 
              d="M0,100 C30,90 70,90 100,100 L100,0 L0,0 Z"
              fill="#ffffff"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              transition={{ duration: 2 }}
            />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div 
          className="relative inline-block mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-md opacity-70" />
          <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full">
            Bienvenue sur notre portfolio
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
            SkyFifty
          </span>
        </motion.h1>
        
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
        
        <motion.p 
          className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Transformons vos idées en expériences numériques
          <span className="relative">
            <span className="relative z-10"> exceptionnelles</span>
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-2 bg-cyan-500/30 rounded-sm"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            onClick={() => scrollToSection('about')}
            className="relative px-8 py-3 bg-white text-cyan-900 font-medium rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 group"
          >
            <span className="relative z-10">Découvrir</span>
            <motion.span 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-200 to-white opacity-0 group-hover:opacity-100 transition-all duration-300" 
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </button>
          
          <button 
            onClick={() => scrollToSection('project')}
            className="px-8 py-3 border-2 border-white/30 text-white font-medium rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          >
            Voir notre projet
          </button>
        </motion.div>
      </div>
      
      {/* Tech stack icons en flottant */}
      <div className="absolute bottom-32 left-10 md:left-20 hidden md:block">
        <motion.div 
          className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <span className="text-3xl">⚛️</span>
        </motion.div>
      </div>
      
      <div className="absolute bottom-16 left-32 md:left-48 hidden md:block">
        <motion.div 
          className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <span className="text-2xl">🚀</span>
        </motion.div>
      </div>
      
      <div className="absolute bottom-32 right-10 md:right-20 hidden md:block">
        <motion.div 
          className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <span className="text-3xl">🎨</span>
        </motion.div>
      </div>
      
      <div className="absolute bottom-16 right-32 md:right-48 hidden md:block">
        <motion.div 
          className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <span className="text-2xl">⚙️</span>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <button 
          onClick={() => scrollToSection('about')}
          className="group"
        >
          <div className="w-8 h-12 border-2 border-white/70 rounded-full flex justify-center relative overflow-hidden">
            <motion.div 
              className="w-1.5 h-3 bg-white rounded-full absolute top-2 group-hover:bg-cyan-300 transition-colors"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
