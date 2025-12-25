import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const Summary: React.FC = () => {
  return (
    <Section title="Summary">
      <motion.p 
        className="text-zinc-400 leading-relaxed text-sm pl-3 border-l-2 border-[#262626]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        AI & Blockchain entrepreneur who has built and shipped 5+ products, generating $50k+ revenue from zero. Self-taught engineer (TypeScript, React, Solidity, Python) with 6+ years in crypto/DeFi and deep expertise in AI automation — voice AI, intelligent email systems, and workflow orchestration. Combines technical execution speed with product vision, consistently delivering from concept to production in weeks, not months.
      </motion.p>
    </Section>
  );
};

export default Summary;