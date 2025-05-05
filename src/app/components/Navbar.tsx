"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import useScrollToSection from '../hooks/useScrollToSection';
import GithubImage from './GithubImage';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center"
          >
            <GithubImage 
              src="/logo-skyfifty.jpg" 
              alt="Logo SkyFifty" 
              width={50} 
              height={50} 
              className="rounded-full transition-all duration-300 border-2 border-transparent hover:border-cyan-400"
            />
          </button>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            {[
              { id: 'about', text: 'À propos' },
              { id: 'team', text: 'Équipe' },
              { id: 'project', text: 'Projet' },
              { id: 'contact', text: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${
                  isScrolled ? 'text-gray-700 hover:text-cyan-600' : 'text-white hover:text-cyan-200'
                } transition-colors capitalize`}
              >
                {item.text}
              </button>
            ))}
          </nav>

          {/* Menu Button Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-6 py-4">
              <nav className="flex flex-col space-y-4">
                {[
                  { id: 'about', text: 'À propos' },
                  { id: 'team', text: 'Équipe' },
                  { id: 'project', text: 'Projet' },
                  { id: 'contact', text: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setIsMenuOpen(false);
                      // Ajouter un petit délai pour permettre à l'animation de fermeture du menu de commencer
                      setTimeout(() => {
                        scrollToSection(item.id);
                      }, 100);
                    }}
                    className="text-gray-700 hover:text-cyan-600 transition-colors capitalize text-left"
                  >
                    {item.text}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
