import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-xl font-display font-bold tracking-tighter">
            <span className="text-neon-blue">TS</span> Tushar Saini
          </div>
          <p className="text-sm text-white/30">© 2026 All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/Tushar-1001" target="_blank" rel="noreferrer" className="text-white/30 hover:text-neon-blue transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/tusharsaini1001" target="_blank" rel="noreferrer" className="text-white/30 hover:text-neon-blue transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:sainitushar51@gmail.com" className="text-white/30 hover:text-neon-blue transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-sm text-white/30 flex items-center gap-1.5">
          Made with <Heart size={14} className="text-neon-pink fill-neon-pink" /> using React & Three.js
        </div>
      </div>
    </footer>
  );
}
