"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLaptopCode, FaCode, FaDatabase, FaPlane, FaQrcode, FaMobileAlt, FaUserShield, FaFigma } from 'react-icons/fa';
import { FloatingCircle, Zigzag, Badge, WavyBackground } from '../DecorativeElements';

const features = [
  {
    icon: <FaQrcode className="text-blue-500" />,
    title: "QR Code sécurisé",
    description: "Génération de QR codes uniques contenant toutes les informations vérifiées et validées du voyageur"
  },
  {
    icon: <FaUserShield className="text-purple-500" />,
    title: "Reconnaissance faciale",
    description: "Option biométrique permettant un passage sans contact via les e-gates automatisées"
  },
  {
    icon: <FaDatabase className="text-indigo-500" />,
    title: "Vérification IA",
    description: "Analyse et validation automatique des documents par intelligence artificielle"
  },
  {
    icon: <FaMobileAlt className="text-pink-500" />,
    title: "Pré-enregistrement",
    description: "Plateforme en ligne pour soumettre documents et informations avant l'arrivée à l'aéroport"
  }
];

const Project = () => {
  return (
    <section id="project" className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Éléments décoratifs */}
      <FloatingCircle 
        size="w-64 h-64" 
        color="bg-blue-300/10" 
        className="left-[-5%] top-[10%]" 
      />
      <FloatingCircle 
        size="w-96 h-96" 
        color="bg-purple-300/10" 
        className="right-[-10%] bottom-[5%]" 
        delay={2} 
      />
      <Zigzag className="top-24 right-24 z-0" color="stroke-blue-200" />
      <WavyBackground className="opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">NOTRE PROJET</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              <span className="inline-flex items-center">
                <span className="mr-2">✈️</span> 
                AeroFlow
              </span>
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Solution de fluidification du passage à l&apos;aéroport : Check-in numérique, QR Code sécurisé et reconnaissance faciale
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-8 text-white relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16 blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full transform -translate-x-16 translate-y-16 blur-xl"></div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <h3 className="text-2xl font-bold mb-2">À propos du projet</h3>
                <p className="text-white/90 max-w-3xl leading-relaxed">
                  Pour réduire les files d&apos;attente aux aéroports et simplifier les procédures d&apos;identification, 
                  nous proposons une plateforme de pré-enregistrement en ligne permettant aux passagers de soumettre 
                  à l&apos;avance leurs documents de voyage (passeport, billet d&apos;avion, visa).
                </p>
                <p className="text-white/90 max-w-3xl mt-3 leading-relaxed">
                  Une fois les documents vérifiés automatiquement par le système (via des outils d&apos;intelligence artificielle 
                  et des connexions sécurisées aux bases de données des compagnies aériennes et autorités d&apos;immigration), 
                  un QR code unique et sécurisé est généré.
                </p>
              </motion.div>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <FaLaptopCode className="text-blue-600" />
                    </span>
                    Comment ça fonctionne à l&apos;aéroport
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    {[
                      "Le QR code est scanné au niveau des bornes ou par les agents à l&apos;entrée du terminal",
                      "Il contient toutes les informations validées et affiche à l&apos;agent un résumé complet du voyageur",
                      "Si la reconnaissance faciale a été activée, le passager peut accéder directement aux e-gates",
                      "Le visage est scanné et comparé avec les photos fournies via notre système d&apos;IA",
                      "Si la correspondance est validée, le passager passe sans intervention humaine"
                    ].map((feature, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                      <FaCode className="text-purple-600" />
                    </span>
                    Technologies utilisées
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {['React', 'Django', 'TensorFlow', 'TypeScript', 'Flutter', 'OpenCV'].map((tech, index) => (
                      <motion.div
                        key={tech}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 flex items-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * index, duration: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      >
                        <span className="font-medium text-gray-800">{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              <div className="border-t border-gray-100 pt-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center">Les points forts de notre solution</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mb-3">
                        {feature.icon}
                      </div>
                      <h5 className="font-semibold text-gray-800 mb-2">{feature.title}</h5>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="mt-12">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <FaPlane className="text-blue-600" />
                    </span>
                    Avantages de notre solution
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <h5 className="font-medium text-gray-800 mb-2">Pour les voyageurs</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Réduction significative du temps d&apos;attente</li>
                        <li>• Expérience utilisateur fluide et sans friction</li>
                        <li>• Option 100% sans contact via reconnaissance faciale</li>
                        <li>• Sécurité renforcée des informations personnelles</li>
                      </ul>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <h5 className="font-medium text-gray-800 mb-2">Pour les aéroports</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Optimisation des flux de passagers</li>
                        <li>• Réduction des besoins en personnel</li>
                        <li>• Amélioration de la sécurité globale</li>
                        <li>• Modernisation de l&apos;infrastructure existante</li>
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Link 
                  href="https://www.figma.com/design/EQLB41iG5osxdOT0laPzaY/Untitled?node-id=0-1&t=htOHAtwo9yvsfrC3-1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <FaFigma className="text-xl" />
                  <span>Voir la maquette sur Figma</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <motion.div
              className="bg-white rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">⏱️</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Gain de temps</h4>
              <p className="text-gray-600">
                Réduction du temps d&apos;attente de 70% grâce à la vérification automatisée des documents
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🔒</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Sécurité renforcée</h4>
              <p className="text-gray-600">
                Vérification biométrique et cryptage avancé pour une protection optimale des données
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🌐</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Intégration mondiale</h4>
              <p className="text-gray-600">
                Compatible avec les systèmes de plus de 190 pays et 500 compagnies aériennes
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
