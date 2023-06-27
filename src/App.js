import Home from './sections/Home Section/Home';
import './App.css';
import Experiences from './sections/Experiences Section/Experiences';
import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Contact from './sections/Contact Section/Contact';

function App() {
  useEffect(() => {
    document.title = 'Ruiheng Portfolio';
  }, []);
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
