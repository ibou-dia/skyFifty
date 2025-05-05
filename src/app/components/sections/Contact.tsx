"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPaperPlane, FaCheck } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// Configuration d'EmailJS - À remplacer par vos propres identifiants de service EmailJS
const EMAILJS_SERVICE_ID = "service_n104mg7"; // Remplacer par votre Service ID EmailJS
const EMAILJS_TEMPLATE_ID = "template_l4mlgql"; // Remplacer par votre Template ID EmailJS
const EMAILJS_PUBLIC_KEY = "CkizpCmouQe2M_oqG"; // Remplacer par votre Public Key EmailJS

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Effacer l'erreur lorsque l'utilisateur commence à taper
    if (errors[id as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
    
    // Effacer les erreurs globales si elles existent
    if (submitError) {
      setSubmitError('');
    }
  };
  
  const validate = () => {
    let isValid = true;
    const newErrors = { ...errors };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "L&apos;email est requis";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Veuillez entrer un email valide';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Option 1: En utilisant EmailJS pour envoyer directement depuis le front-end
      // Note: Cette solution est facile à mettre en place mais expose votre clé publique EmailJS
      
      // Préparation des paramètres pour l'envoi d'email
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'ibrahimadia800@gmail.com',
        project_name: 'AeroFlow - SkyFifty',
      };
      
      // Envoi de l'email avec EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      // Réinitialiser le formulaire et afficher le message de succès
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(true);
      
      // Masquer le message de succès après 5 secondes
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error("Erreur lors de l&apos;envoi du message:", error);
      setSubmitError("Une erreur est survenue lors de l&apos;envoi du message. Veuillez réessayer plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4 relative inline-block mx-auto w-full">
            Contactez-nous
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-32"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Vous souhaitez en savoir plus sur notre projet AeroFlow ou discuter d&apos;une potentielle collaboration ?
          </p>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center mr-3">
                  <FaEnvelope className="text-cyan-600" />
                </span>
                Contactez notre équipe
              </h3>
              <p className="text-gray-600 mb-8">
                Notre équipe est disponible pour répondre à toutes vos questions concernant notre solution 
                de fluidification du passage à l&apos;aéroport.
              </p>
              
              <div className="space-y-4 bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800">Pour toute demande d&apos;information :</h4>
                <p className="text-gray-700 mb-4">
                  Remplissez le formulaire ci-contre et nous vous répondrons dans les plus brefs délais.
                </p>
                <div className="text-sm text-gray-600">
                  <p>Votre message sera envoyé à notre équipe et nous vous contacterons dès que possible.</p>
                </div>
              </div>
            </div>
            
            <div>
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-8 rounded-xl shadow-md space-y-4 h-full flex flex-col items-center justify-center text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <FaCheck className="text-green-600 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Message envoyé !</h3>
                  <p className="text-gray-600">
                    Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
                  </p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-4">
                  {submitError && (
                    <div className="p-3 bg-red-50 text-red-700 rounded-lg mb-4">
                      {submitError}
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-1">Nom</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-400'} rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-gray-900 bg-white font-medium shadow-sm`}
                      placeholder="Entrez votre nom"
                      style={{ caretColor: '#0396c1' }}
                    />
                    {errors.name && <p className="text-red-600 text-sm mt-1 font-medium">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-400'} rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-gray-900 bg-white font-medium shadow-sm`}
                      placeholder="Entrez votre email"
                      style={{ caretColor: '#0396c1' }}
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1 font-medium">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-400'} rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-gray-900 bg-white font-medium shadow-sm`}
                      placeholder="Entrez votre message ici..."
                      style={{ caretColor: '#0396c1' }}
                    ></textarea>
                    {errors.message && <p className="text-red-600 text-sm mt-1 font-medium">{errors.message}</p>}
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-5 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 ${!isSubmitting ? 'hover:from-cyan-700 hover:to-blue-700' : 'opacity-80 cursor-not-allowed'} text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        <span>Envoyer</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
