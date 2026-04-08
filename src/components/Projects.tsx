import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'NSE Stock Data Tracker',
    description: 'End-to-end NSE data scraping and pipeline for real-time market analysis.',
    github: 'https://github.com/Tushar-1001/nse-stock-tracker',
    tags: ['Python', 'Selenium', 'Pandas', 'Data Pipeline'],
    features: ['Real-time scraping', 'Data cleaning', 'Normalization', 'Dashboard'],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'SyncPad',
    description: 'Real-time collaboration tool for multi-user document editing and sync.',
    github: 'https://github.com/Tushar-1001/syncpad',
    tags: ['Node.js', 'Socket.io', 'React', 'Redis'],
    features: ['Real-time sync', 'Multi-user collab', 'Rich text editing'],
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Employee Activity Tracking',
    description: 'Comprehensive tracking system for Daikin with advanced reporting.',
    tags: ['React.js', 'Node.js', 'SQL', 'D3.js'],
    features: ['Dashboards', 'UI components', 'Automated reporting'],
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'Nintex to Power Platform',
    description: 'Large-scale migration of legacy workflows to modern Power Platform.',
    tags: ['Power Apps', 'Power Automate', 'SharePoint'],
    features: ['Workflow automation', 'Process optimization'],
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Alyte – Cab Service',
    description: 'Backend infrastructure for a large-scale cab service platform.',
    tags: ['Python', 'Django', 'PostgreSQL', 'Redis'],
    features: ['Backend APIs', 'Performance optimization', 'Scaling'],
    color: 'from-indigo-500/20 to-blue-500/20',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-neon-blue">Projects</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">A selection of my recent work in full-stack development and data engineering.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="glass p-8 rounded-3xl h-full flex flex-col relative z-10 hover:border-white/20 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 text-neon-blue">
                    <Code size={24} />
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-all">
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-neon-blue transition-colors">{project.title}</h3>
                <p className="text-white/60 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md bg-white/5 text-white/40 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-white/5">
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map(feature => (
                        <li key={feature} className="text-[11px] text-white/30 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-neon-blue/50" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
