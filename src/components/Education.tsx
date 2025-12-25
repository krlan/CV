import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const Education: React.FC = () => {
  return (
    <Section title="Education">
      <motion.div 
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-lg font-semibold text-gray-800">Bachelor of Science in Economics</h3>
        <p className="text-sm text-gray-600">Higher School of Economics (Russia's Top5) | Russia, Saint-Petersburg</p>
        <p className="text-sm text-gray-600">Graduated: 2016</p>
      </motion.div>
    </Section>
  );
};

export default Education;