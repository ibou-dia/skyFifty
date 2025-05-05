"use client";

import { FaHeart } from 'react-icons/fa';
import useScrollToSection from '../hooks/useScrollToSection';
import GithubImage from './GithubImage';

const Footer = () => {
  const scrollToSection = useScrollToSection();
  
  return (
    <footer className="py-8 bg-gradient-to-r from-cyan-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <button onClick={() => scrollToSection('hero')} className="flex items-center">
              <GithubImage 
                src="/logo-skyfifty.jpg" 
                alt="Logo SkyFifty" 
                width={40} 
                height={40} 
                className="rounded-full transition-all duration-300 hover:opacity-80"
              />
              <span className="ml-2 font-bold">SkyFifty</span>
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-cyan-300 transition-colors">
              À propos
            </button>
            <button onClick={() => scrollToSection('team')} className="hover:text-cyan-300 transition-colors">
              Équipe
            </button>
            <button onClick={() => scrollToSection('project')} className="hover:text-cyan-300 transition-colors">
              Projet
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-300 transition-colors">
              Contact
            </button>
          </div>
        </div>
        
        <div className="border-t border-cyan-800 mt-8 pt-8 text-center text-gray-300">
          <div className="flex items-center justify-center gap-2">
            <span>Développé avec</span> 
            <FaHeart className="text-cyan-400" /> 
            <span>par</span>
            <div className="flex items-center">
              <GithubImage 
                src="/logo-skyfifty.jpg" 
                alt="Logo SkyFifty" 
                width={24} 
                height={24} 
                className="rounded-full mr-1"
              />
              <span>SkyFifty</span>
            </div>
          </div>
          <p className="mt-2 text-sm"> {new Date().getFullYear()} SkyFifty. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
