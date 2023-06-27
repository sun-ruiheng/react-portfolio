import { motion } from "framer-motion";
import { useState } from "react";
import { useScroll } from "framer-motion";

function MyFace(props) {
  const { scrollYProgress } = useScroll();
  return (
    <motion.img 
      src={require('../../images/myface.jpg')} 
      className="rounded-full h-1/2 lg:w-1/2 lg:h-auto"
      whileHover={{ scale: 1.1, rotate: 30 }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
    />  
  );
}

export default MyFace;