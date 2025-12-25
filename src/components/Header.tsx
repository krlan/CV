import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Twitter, Globe } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <motion.header 
      className="mb-5"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-baseline gap-3 mb-2">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Igor Trefilov</h1>
        <span className="font-mono text-xs text-green-500 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          available for hire
        </span>
      </div>
      <div className="font-mono text-xs text-zinc-500 flex flex-wrap gap-4">
        <span>remote</span>
        <span className="text-zinc-700">·</span>
        <a href="mailto:igor@sigma.club" className="hover:text-cyan-400 transition-colors">igor@sigma.club</a>
        <span className="text-zinc-700">·</span>
        <a href="https://x.com/trefeelove" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">x.com/trefeelove</a>
        <span className="text-zinc-700">·</span>
        <a href="https://sigma.club" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">sigma.club</a>
      </div>
    </motion.header>
  );
};

export default Header;