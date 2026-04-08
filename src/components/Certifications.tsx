import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';

const certifications = [
  {
    name: 'Salesforce Certified Platform Developer I',
    issuer: 'Salesforce',
    icon: <ShieldCheck className="text-blue-400" />,
  },
  {
    name: 'Microsoft Certified: Power Platform Fundamentals (PL-900)',
    issuer: 'Microsoft',
    icon: <Award className="text-purple-400" />,
  },
];

export default function Certifications() {
  return (
    <section className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass p-8 rounded-3xl flex items-center gap-6 group hover:border-white/20 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                {cert.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{cert.name}</h3>
                <p className="text-white/40 font-mono text-sm uppercase tracking-widest">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
