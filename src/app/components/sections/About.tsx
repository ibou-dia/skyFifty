"use client";

import { motion } from 'framer-motion';
import { DotGrid, FloatingCircle, Zigzag, Badge } from '../DecorativeElements';

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Éléments décoratifs */}
      <FloatingCircle 
        size="w-72 h-72" 
        color="bg-cyan-300/10" 
        className="left-[-10%] top-[20%]" 
      />
      <FloatingCircle 
        size="w-56 h-56" 
        color="bg-cyan-300/10" 
        className="right-[-5%] bottom-[20%]" 
        delay={1.5} 
      />
      <DotGrid className="top-12 right-12 z-0" />
      <Zigzag className="bottom-24 left-12 z-0" color="stroke-cyan-200" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Badge className="bg-cyan-100 text-cyan-800 mb-4">À PROPOS</Badge>
          <h2 className="text-4xl font-bold text-gray-800 mb-12 relative inline-block">
            Notre Équipe SkyFifty
            <motion.div 
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="absolute w-12 h-12 -left-6 -top-6 rounded-lg border-4 border-cyan-200 border-opacity-60" />
                <p className="text-lg text-gray-700 mb-6 bg-white p-6 rounded-lg shadow-sm">
                  Nous sommes une équipe dynamique de 5 développeurs passionnés par la création d&apos;expériences numériques innovantes et percutantes.
                </p>
                <div className="absolute w-12 h-12 -right-6 -bottom-6 rounded-lg border-4 border-cyan-200 border-opacity-60" />
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative z-10 mt-10"
              >
                <div className="p-6 bg-gradient-to-r from-cyan-50 to-cyan-50 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <motion.span 
                      className="inline-block w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full mr-2 flex items-center justify-center"
                      whileHover={{ rotate: 10 }}
                    >
                      ✨
                    </motion.span>
                    Notre philosophie
                  </h3>
                  <p className="text-lg text-gray-700">
                    Notre force réside dans notre diversité de compétences et notre capacité à travailler ensemble pour relever les défis techniques les plus complexes.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative z-10 mt-10"
              >
                <div className="p-6 bg-gradient-to-r from-cyan-50 to-cyan-50 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <motion.span 
                      className="inline-block w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full mr-2 flex items-center justify-center"
                      whileHover={{ rotate: -10 }}
                    >
                      🚀
                    </motion.span>
                    Notre objectif
                  </h3>
                  <p className="text-lg text-gray-700">
                    Participants enthousiastes à ce hackathon, nous sommes déterminés à créer une solution qui fera la différence, en combinant notre expertise technique et notre créativité.
                  </p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-cyan-200 rounded-2xl transform rotate-3 scale-105 opacity-30 blur-xl" />
              <div className="relative overflow-hidden rounded-2xl border border-gray-100 shadow-xl bg-white">
                <div className="absolute w-32 h-32 bg-gradient-to-r from-cyan-300 to-cyan-300 rounded-full -top-10 -right-10 blur-2xl opacity-50" />
                <div className="absolute w-32 h-32 bg-gradient-to-r from-cyan-300 to-cyan-300 rounded-full -bottom-10 -left-10 blur-2xl opacity-50" />
                
                <div className="relative h-80 bg-gradient-to-r from-cyan-600 to-cyan-600 flex items-center justify-center text-white p-8">
                  <div className="grid grid-cols-2 gap-6 w-full">
                    <motion.div 
                      className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h4 className="font-bold mb-2">5</h4>
                      <p className="text-sm opacity-90">Experts passionnés</p>
                    </motion.div>
                    <motion.div 
                      className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h4 className="font-bold mb-2">10+</h4>
                      <p className="text-sm opacity-90">Technologies maîtrisées</p>
                    </motion.div>
                    <motion.div 
                      className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h4 className="font-bold mb-2">15+</h4>
                      <p className="text-sm opacity-90">Projets réalisés</p>
                    </motion.div>
                    <motion.div 
                      className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h4 className="font-bold mb-2">100%</h4>
                      <p className="text-sm opacity-90">Engagement</p>
                    </motion.div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Nos valeurs
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "Innovation et créativité",
                      "Excellence technique",
                      "Collaboration et esprit d\'équipe",
                      "User-centric design",
                      "Veille technologique constante"
                    ].map((value, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-cyan-500">✓</span> {value}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
