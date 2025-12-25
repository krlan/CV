import React from 'react';
import Header from './components/Header';
import Highlights from './components/Highlights';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 lg:p-12 max-w-4xl mx-auto"
      >
        <Header />
        <Highlights />
        <Summary />
        <Experience />
        <Education />
        <Skills />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;