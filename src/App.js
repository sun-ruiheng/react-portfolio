import Home from './sections/Home Section/Home';
import './App.css';
import Experiences from './sections/Experiences Section/Experiences';
import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Contact from './sections/Contact Section/Contact';

function App() {
  const [expanded, setExpanded] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });
  return (
    <div className="h-full">
      <motion.div 
        style={{ scaleX }}
        className='progress-bar z-10'
      />
      <Home/>
      <Experiences/>
      <Contact/>
    </div>
  );
}

export default App;
