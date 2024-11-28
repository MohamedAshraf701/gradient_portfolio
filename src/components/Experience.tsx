import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    period: '2020 - Present',
    role: 'Senior Full Stack Developer',
    company: 'Tech Innovators Inc.',
    description: 'Leading development of enterprise-scale applications using Flutter and Node.js. Implementing DevOps practices and managing cloud infrastructure.',
  },
  {
    period: '2018 - 2020',
    role: 'DevOps Engineer',
    company: 'Cloud Solutions Ltd.',
    description: 'Designed and maintained CI/CD pipelines, managed Kubernetes clusters, and implemented monitoring solutions.',
  },
  {
    period: '2016 - 2018',
    role: 'Python Developer',
    company: 'Data Analytics Co.',
    description: 'Developed data processing pipelines and machine learning models for predictive analytics.',
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-blue-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Professional Experience
        </motion.h2>

        <div ref={ref} className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-[200px_1fr] gap-8">
                <div className="text-blue-300 font-medium mb-2 md:mb-0">
                  {exp.period}
                </div>
                <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                  <div className="text-blue-200 mb-4">{exp.company}</div>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;