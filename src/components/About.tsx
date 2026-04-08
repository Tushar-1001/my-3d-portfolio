import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Terminal } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Completed', value: '15+' },
  { label: 'Technologies', value: '10+' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About <span className="text-neon-purple">Me</span>
            </h2>
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                I am a passionate Software Developer with over <span className="text-white font-medium">3 years of experience</span> in building robust backend systems and efficient data pipelines.
              </p>
              <p>
                My expertise lies in <span className="text-neon-blue">Backend Development</span> and <span className="text-neon-blue">Data Engineering</span>, where I focus on creating scalable APIs, complex web scraping solutions, and automation workflows that solve real-world problems.
              </p>
              <p>
                I thrive on optimizing performance and handling high-volume data, ensuring that every solution I build is not just functional but also highly performant and maintainable.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs font-mono uppercase tracking-wider text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="glass p-8 rounded-3xl space-y-4 hover:border-neon-blue/50 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-neon-blue/10 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform">
                <Terminal size={24} />
              </div>
              <h3 className="text-xl font-bold">Backend Focus</h3>
              <p className="text-sm text-white/50">Expertise in Python, Node.js, and building high-performance APIs.</p>
            </div>
            
            <div className="glass p-8 rounded-3xl space-y-4 translate-y-6 hover:border-neon-purple/50 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-neon-purple/10 flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold">Data Engineering</h3>
              <p className="text-sm text-white/50">Building pipelines, scraping data, and normalization at scale.</p>
            </div>

            <div className="glass p-8 rounded-3xl space-y-4 hover:border-neon-pink/50 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-neon-pink/10 flex items-center justify-center text-neon-pink group-hover:scale-110 transition-transform">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-bold">Automation</h3>
              <p className="text-sm text-white/50">Streamlining workflows using Selenium, Power Automate, and custom scripts.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
