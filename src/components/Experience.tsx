import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Software Engineer – Adtech',
    period: 'May 2022 – Present',
    highlights: [
      'Built scalable APIs for high-volume ad data processing',
      'Implemented advanced performance optimization and multi-level caching',
      'Integrated multiple third-party advertising platforms and data providers',
      'Developed automated monitoring and reporting systems',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work <span className="text-neon-purple">Experience</span></h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-neon-purple/30"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neon-purple shadow-[0_0_10px_rgba(188,19,254,0.8)]" />
              
              <div className="glass p-8 rounded-3xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                    <div className="flex items-center gap-2 text-neon-blue mt-1">
                      <Briefcase size={16} />
                      <span className="text-sm font-medium">Full-time</span>
                    </div>
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/50">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-4">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-white/60 leading-relaxed">
                      <span className="text-neon-purple mt-1.5">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
