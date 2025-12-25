import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Twitter, Globe } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <motion.header 
      className="text-center mb-4"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-1">Igor Trefilov</h1>
      <div className="text-xs text-gray-600 flex flex-wrap justify-center gap-2 sm:gap-3">
        <div className="flex items-center">
          <MapPin size={16} className="mr-1" />
          <span>Remote</span>
        </div>
        
        
        
        <div className="flex items-center">
          <Mail size={16} className="mr-1" />
          <a href="mailto:igor@sigma.club">igor@sigma.club</a>
        </div>
        
        <div className="flex items-center">
          <Twitter size={16} className="mr-1" />
          <a href="https://x.com/trefeelove" target="_blank" rel="noopener noreferrer">@trefeelove</a>
        </div>
        
        <div className="flex items-center">
          <Globe size={16} className="mr-1" />
          <a href="https://sigma.club" target="_blank" rel="noopener noreferrer">sigma.club</a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;