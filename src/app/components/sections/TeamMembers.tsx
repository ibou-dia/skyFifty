"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FloatingCircle, WavyBackground } from '../DecorativeElements';
import Image from 'next/image';

// Données des membres de l'équipe
const teamMembers = [
  {
    id: 1,
    name: 'Abdou Fatah Gaye',
    role: 'UX Designer & Front End Developer',
    bio: 'Passionné par l\'expérience utilisateur et l\'interface, je crée des designs intuitifs et élégants tout en développant des solutions front-end performantes.',
    color: 'from-pink-500 to-rose-500',
    gradientText: 'bg-gradient-to-r from-pink-600 to-rose-500',
    skills: ['UI/UX Design', 'Figma', 'React', 'HTML/CSS', 'JavaScript', 'Responsive Design'],
    projects: ['Dossier patient unique', 'Site de réservation d\'hotel', 'Système de reconnaissance de la langue des signes'],
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/in/',
    colorClass: 'bg-gradient-to-br from-pink-500 to-rose-500',
    image: '/team/Fatah.jpg'
  },
  {
    id: 2,
    name: 'Mamadou Falilou Diaw',
    role: 'Front End Developer',
    bio: 'Développeur front-end spécialisé dans la création d\'interfaces réactives et performantes. J\'aime transformer des concepts en code et créer des expériences utilisateur exceptionnelles.',
    color: 'from-blue-500 to-indigo-500',
    gradientText: 'bg-gradient-to-r from-blue-600 to-indigo-500',
    skills: ['Angular', 'Javascript', 'TypeScript', 'Tailwind CSS', 'Flutter'],
    projects: ['Gestion consommation d’énergie dans les ménages', 'Modernisation des services du CROUST', 'Plateforme d’apprentissage en sécurité informatique'],
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/in/',
    colorClass: 'bg-gradient-to-br from-blue-500 to-indigo-500',
    image: '/team/Falilou.jpg'
  },
  {
    id: 3,
    name: 'Amath Thiam',
    role: 'Backend Developer',
    bio: 'Expert en développement backend, je construis des API robustes et des architectures serveur évolutives qui alimentent des applications performantes.',
    color: 'from-green-500 to-teal-500',
    gradientText: 'bg-gradient-to-r from-green-600 to-teal-500',
    skills: ['Django', 'MongoDB', 'REST API', 'GraphQL', 'Microservices'],
    projects: ['Cartographie des établissements d\'enseignement superieurs', 'App mobile pour les voyageurs du TER', 'Plateforme de mise en relation des entreprises'],
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/in/',
    colorClass: 'bg-gradient-to-br from-green-500 to-teal-500',
    image: '/team/amath.jpg'
  },
  {
    id: 4,
    name: 'Cheikh Tidiane Touré',
    role: 'Backend Developer',
    bio: 'Développeur backend passionné par la création de systèmes solides et évolutifs. Spécialisé dans la conception d\'architectures de données et d\'API efficaces.',
    color: 'from-amber-500 to-orange-500',
    gradientText: 'bg-gradient-to-r from-amber-600 to-orange-500',
    skills: ['Java', 'Spring Boot', 'SQL', 'NoSQL', 'API Design'],
    projects: ['Site de E-commerce', 'Système de Réservation', 'Application de dossier patient unique'],
    github: 'https://github.com/cheikhidiane',
    linkedin: 'https://www.linkedin.com/in/cheikh-tidiane-toure-243528319/',
    colorClass: 'bg-gradient-to-br from-amber-500 to-orange-500',
    image: '/team/Cheikh.jpg'
  },
  {
    id: 5,
    name: 'Ibrahima DIA',
    role: 'Machine Learning Engineer',
    bio: 'Expert en Machine Learning spécialisé dans le développement d\'algorithmes intelligents et l\'analyse de données pour créer des solutions innovantes basées sur l\'IA.',
    color: 'from-purple-500 to-violet-500',
    gradientText: 'bg-gradient-to-r from-purple-600 to-violet-500',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Deep Learning', 'Computer Vision', 'NLP'],
    projects: ['Système de detection de fraude', 'Assistant vocal interactif', 'Traitement d\'Image IA'],
    github: 'https://github.com/ibou-dia/',
    linkedin: 'https://www.linkedin.com/in/ibrahima-dia-1b6992294/',
    colorClass: 'bg-gradient-to-br from-purple-500 to-violet-500',
    image: '/team/Ibrahima.jpg'
  }
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8 } }
};

// Composant pour les compétences
const SkillBar = ({ skill, index }: { skill: string, index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.05 * index }}
      viewport={{ once: true }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="inline-block"
    >
      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium m-1">
        {skill}
      </span>
    </motion.div>
  );
};

// Composant pour les projets
const ProjectCard = ({ project }: { project: string }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg p-3 shadow-md text-center border border-gray-100 h-full flex items-center justify-center"
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        background: "linear-gradient(to right, rgb(238, 242, 255), rgb(240, 231, 255))",
        borderColor: "rgb(224, 231, 255)"
      }}
      transition={{ duration: 0.2 }}
    >
      <h4 className="font-medium text-gray-800">{project}</h4>
    </motion.div>
  );
};

// Composant principal pour la section des membres de l'équipe
const TeamMembers = () => {
  return (
    <section id="team" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Éléments décoratifs */}
      <FloatingCircle 
        size="w-64 h-64" 
        color="bg-purple-300/10" 
        className="left-[-10%] top-[15%]" 
      />
      <FloatingCircle 
        size="w-80 h-80" 
        color="bg-blue-300/10" 
        className="right-[-5%] bottom-[20%]" 
        delay={1} 
      />
      <WavyBackground className="opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4 relative inline-block">
            Notre Équipe SkyFifty
            <motion.div 
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une équipe talentueuse et passionnée, prête à relever tous les défis
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24"
        >
          {teamMembers.map((member) => (
            <motion.div 
              key={member.id}
              variants={item}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
            >
              <div className="flex flex-col md:grid md:grid-cols-3 gap-0">
                <div className={`relative h-80 md:h-auto bg-gradient-to-br ${member.color} flex items-center justify-center overflow-hidden`}>
                  {/* Cercles décoratifs */}
                  <div className="absolute w-40 h-40 rounded-full bg-white/10 -top-10 -left-10 blur-md"></div>
                  <div className="absolute w-32 h-32 rounded-full bg-white/10 bottom-10 right-5 blur-md"></div>
                  
                  {/* Lignes décoratives */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-[20%] left-0 w-full h-px bg-white"></div>
                    <div className="absolute top-[40%] left-0 w-full h-px bg-white"></div>
                    <div className="absolute top-[60%] left-0 w-full h-px bg-white"></div>
                    <div className="absolute top-[80%] left-0 w-full h-px bg-white"></div>
                    
                    <div className="absolute top-0 left-[25%] w-px h-full bg-white"></div>
                    <div className="absolute top-0 left-[50%] w-px h-full bg-white"></div>
                    <div className="absolute top-0 left-[75%] w-px h-full bg-white"></div>
                  </div>
                  
                  {/* Photo du membre */}
                  <motion.div
                    className="relative z-10"
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <div className={`w-40 h-40 md:w-56 md:h-56 rounded-lg shadow-lg overflow-hidden border-2 border-white/20`}>
                      <Image 
                        src={member.image}
                        alt={`Photo de ${member.name}`}
                        width={224}
                        height={224}
                        className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
                      />
                    </div>
                  </motion.div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden">
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-white/90">{member.role}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 col-span-2 border-t-4 border-t-transparent" style={{ borderTopColor: `var(--tw-gradient-stops)`.split(',')[0].replace('--tw-gradient-from:', '') }}>
                  <div className="md:flex justify-between items-start mb-6">
                    <div className="hidden md:block">
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">{member.name}</h3>
                      <p className={`text-transparent bg-clip-text ${member.gradientText} font-medium`}>{member.role}</p>
                    </div>
                    
                    <div className="flex space-x-2 mt-4 md:mt-0 justify-center md:justify-end">
                      <motion.a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                        whileHover={{ y: -3, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <FaGithub className="text-gray-700 text-xl" />
                      </motion.a>
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                        whileHover={{ y: -3, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <FaLinkedin className="text-gray-700 text-xl" />
                      </motion.a>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed">{member.bio}</p>
                  
                  <div className="mb-6 md:mb-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="w-4 h-4 bg-purple-200 rounded-full mr-2"></span>
                      Compétences
                    </h4>
                    <div className="flex flex-wrap -m-1">
                      {member.skills.map((skill, index) => (
                        <SkillBar key={skill} skill={skill} index={index} />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="w-4 h-4 bg-green-200 rounded-full mr-2"></span>
                      Projets
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {member.projects.map((project) => (
                        <ProjectCard key={project} project={project} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamMembers;
