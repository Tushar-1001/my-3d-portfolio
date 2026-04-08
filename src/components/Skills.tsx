import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'Apex', 'SQL'],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Technologies',
    skills: ['Node.js', 'React.js', 'Selenium', 'Pandas', 'Power Apps', 'Power Automate'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Tools',
    skills: ['Git', 'Postman', 'Docker', 'AWS'],
    color: 'from-orange-500 to-yellow-500',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-neon-blue">Skills</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">A comprehensive toolkit for building modern, scalable applications and data solutions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`} />
              <h3 className="text-2xl font-bold mb-8 flex items-center justify-between">
                {category.title}
                <span className="text-xs font-mono text-white/20">0{idx + 1}</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
