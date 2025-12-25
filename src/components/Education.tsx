import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const Education: React.FC = () => {
  return (
    <Section title="Education">
      <motion.div 
        className="pl-3 border-l-2 border-[#262626]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-sm font-semibold text-zinc-100">Bachelor of Science in Economics</h3>
        <p className="text-xs text-zinc-500">Higher School of Economics · Saint-Petersburg, Russia · 2016</p>
      </motion.div>
    </Section>
  );
};

export default Education;