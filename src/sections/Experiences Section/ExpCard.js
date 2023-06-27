import React, { useState } from "react";
import { motion } from "framer-motion";

function ExpCard(props) {
    const [inCard, setInCard] = useState(false);
    
    return (
        <motion.div
            className="flex flex-row h-60 mt-10 rounded-2xl bg-gradient-to-br from-mydarkblue to-mydarkblue via-cyan-900 from-45% via-60% to-75%"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', duration: 0.8, bounce: 0.4 }}
            initial={{ y: 100, visibility: 0 }}
            whileInView={{ y: 0, visibility: 1 }}
            onHoverStart={ () => setInCard(!inCard) }
            onHoverEnd={ () => setInCard(!inCard) }
        >
            <motion.img
                src={props.logo}
                className="rounded-full h-full w-auto mx-3 p-5"
                animate={inCard
                    ? {
                        rotate: -30
                    } : {
                        rotate: 0
                    }}
                transition={{ type: 'spring', duration: 0.5, bounce: 0.6 }}
            />
            <motion.div
                className="flex flex-col justify-evenly text-myoffwhite font-mono p-3"
            >
                <h2
                    className='underline font-bold text-xl py-2'
                >
                    {props.title}
                </h2>
                <h3
                    className='font-normal'
                >
                    {props.description}
                </h3>
                <motion.div
                    className='flex flex-row justify-start align-middle pt-1'
                >
                    {props.children}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default ExpCard;