import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/mqakpzoz', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Let's <span className="text-neon-blue">Connect</span>
            </h2>
            <p className="text-lg text-white/60 mb-12 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of these platforms.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:sainitushar51@gmail.com"
                className="flex items-center gap-6 p-6 glass rounded-3xl hover:border-neon-blue/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-neon-blue/10 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-1">Email</div>
                  <div className="text-lg font-medium break-all">sainitushar51@gmail.com</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/tusharsaini1001"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-6 p-6 glass rounded-3xl hover:border-neon-purple/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-neon-purple/10 flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-1">LinkedIn</div>
                  <div className="text-lg font-medium break-all">linkedin.com/in/tusharsaini1001</div>
                </div>
              </a>

              <a
                href="https://github.com/Tushar-1001"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-6 p-6 glass rounded-3xl hover:border-neon-pink/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-neon-pink/10 flex items-center justify-center text-neon-pink group-hover:scale-110 transition-transform">
                  <Github size={24} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-1">GitHub</div>
                  <div className="text-lg font-medium break-all">github.com/Tushar-1001</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[2.5rem]"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-white/60 mb-8">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-neon-blue font-mono text-sm uppercase tracking-widest hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-1">Name</label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-neon-blue/50 focus:outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-1">Email</label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-neon-blue/50 focus:outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-1">Subject</label>
                  <input
                    required
                    name="subject"
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-neon-blue/50 focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-1">Message</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-neon-blue/50 focus:outline-none transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-neon-blue text-dark-bg font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,242,255,0.5)] transition-all"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
