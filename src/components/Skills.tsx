import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, staggerChildren } from '../utils/animations';

const skills = [
  {
    category: 'Frontend',
    items: ['Flutter', 'React', 'TypeScript'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'FastAPI'],
  },
  {
    category: 'DevOps',
    items: ['Docker', 'Kubernetes', 'CI/CD'],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          ref={ref}
          variants={staggerChildren}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={fadeInUp}
              className="bg-blue-900 bg-opacity-20 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6">{category.category}</h3>
              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-gray-300">{skill}</span>
                    </div>
                    <div className="mt-2 h-1 bg-blue-900 bg-opacity-30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: "100%" } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="h-full bg-blue-400 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;