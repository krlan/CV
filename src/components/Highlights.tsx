import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, DollarSign, Code, Globe } from 'lucide-react';

const highlights = [
  { icon: Rocket, text: "Building AI agents: voice, email, translation & recruiting automation" },
  { icon: DollarSign, text: "Generated $50k+ in first week launching NFT collection" },
  { icon: Code, text: "Shipped 5+ products from concept to production" },
  { icon: Globe, text: "8+ years remote work across US, EU, APAC timezones" }
];

const Highlights: React.FC = () => {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 * index }}
            className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg px-4 py-3"
          >
            <item.icon size={20} className="text-blue-600 flex-shrink-0" />
            <span className="text-sm font-medium text-gray-700">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Highlights;
