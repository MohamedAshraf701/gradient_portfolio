import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-gray-300 mb-6">
              With over 8 years of experience in software development, I specialize in building
              scalable applications using modern technologies. My expertise spans across mobile
              development with Flutter, backend systems with Node.js and Python, and DevOps
              practices that ensure smooth deployment and operation of applications.
            </p>
            <p className="text-gray-300">
              I'm passionate about creating efficient, maintainable code and implementing
              robust CI/CD pipelines. My approach combines technical excellence with a deep
              understanding of business needs to deliver solutions that make a real impact.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-blue-900 opacity-20 rounded-lg"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;