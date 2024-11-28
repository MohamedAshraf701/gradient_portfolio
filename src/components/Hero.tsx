import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { fadeInUp, scaleIn, staggerChildren } from '../utils/animations';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-blue-900 to-black flex items-center justify-center overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="absolute inset-0"
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{
              duration: 4,
              delay: i * 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,255,0.1)_0%,rgba(0,0,0,0.3)_100%)]"
            style={{
              transform: `scale(${1 + i * 0.2})`,
            }}
          />
        ))}
      </motion.div>
      
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4"
      >
        <motion.h1 
          variants={scaleIn}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          John Doe
        </motion.h1>
        <motion.h2 
          variants={fadeInUp}
          className="text-2xl md:text-3xl text-blue-300 mb-8"
        >
          Full Stack Developer & DevOps Engineer
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Crafting elegant solutions with Flutter, Node.js, Python, and modern DevOps practices
        </motion.p>
        
        <motion.div 
          variants={staggerChildren}
          className="flex justify-center space-x-6"
        >
          {[
            { icon: Github, href: 'https://github.com' },
            { icon: Linkedin, href: 'https://linkedin.com' },
            { icon: Mail, href: 'mailto:contact@example.com' }
          ].map((item, index) => (
            <motion.a
              key={index}
              variants={fadeInUp}
              href={item.href}
              className="text-white hover:text-blue-400 transition-colors transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon size={28} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-white opacity-50"
        >
          ↓ Scroll to explore
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;