import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";

function Skill(props) {
    const [hover, setHover] = useState(false);

    return (
        <motion.div
            className="w-10 h-10 md:h-16 md:w-16 flex flex-col justify-normal align-middle mx-3"
            onHoverStart={() => {
                setHover(!hover);
            }}
            onHoverEnd={() => {
                setHover(!hover);
            }}
        >
            <motion.img 
                src={props.imagePath}
                className='w-4/5 h-auto m-auto'
                initial={{ opacity: 0.5 }}
                animate={ hover
                    ? { opacity: 1 }
                    : { opacity: 0.5 }
                }
                transition={{ type: 'tween', duration: 0.15 }}
            />
            <motion.span 
                className='font-mono font-normal text-[0.5rem] md:text-xs m-auto' 
                initial={{ opacity: 0 }}
                animate={ hover
                    ? { opacity: 1 }
                    : { opacity: 0 }
                }
                transition={{ type: 'tween', duration: 0.2 }}
            >
                {props.name}
            </motion.span>
        </motion.div>

    )
}

export default Skill;