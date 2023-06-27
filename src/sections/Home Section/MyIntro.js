import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

function MyIntro(props) {
  return (
    <motion.div 
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", bounce: 0.5 }}
      className="h-1/2 font-mono flex flex-col justify-center text-left"
    >
      <motion.h1 
        className={props.lightMode
          ? "text-black text-5xl flex flex-row justify-left font-bold pr-3 pb-3"
          : "text-white text-5xl flex flex-row justify-left font-bold pr-3 pb-3"
        }
        animate={{ y: [-15, 0, 0, -15] }}
        transition={{ repeat: Infinity, duration: 2, delay: 2 }}
      >
        <text>Howdy!</text>
        <text className="px-4">I'm</text>
        <text className="text-red-600">Ruiheng</text>
        <text>.</text>
      </motion.h1> 

      <motion.hr 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ type: 'tween', duration: 0.5 }}
        style={ props.lightMode
          ? {
          border: '4px solid #142d4c',
          borderRadius: '5px',
          transformOrigin: 'left'
          } : {
            border: '4px solid #9fd3c7',
            borderRadius: '5px'
          }}
      />
      <motion.h3 
        animate={{ y: [15, 0, 0, 15] }}
        transition={{ repeat: Infinity, duration: 2, delay: 3 }}
        className="pt-3"
      >
        <AnimatedText
          styling={props.lightMode
            ? "text-2xl text-gray-700 pr-8"
            : "text-2xl text-gray-300 pr-8"}
          text = {props.tagline}/>
      </motion.h3>
    </motion.div>      
  );
}

export default MyIntro;