import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

function Social(props) {
    const [hovering, setHovering] = useState(false);

    return (
        <motion.a
            className='h-1/6 w-5/6 lg:w-4/5 flex flex-row items-center justify-left m-auto text-m md:text-lg lg:text-2xl font-mono'
            href={props.url}
            target="_blank"
            onHoverStart={() => setHovering(!hovering)}
            onHoverEnd={() => setHovering(!hovering)}
        >
            <motion.img 
                className='h-3/4 mr-6'
                src={props.imgSrc}
                animate={hovering
                    ? { y: 0, opacity: 1 }
                    : { y: 10, opacity: 0.7 }
                }
                transition={{ type: "tween", duration: 0.1 }}
            />
            <motion.div
                animate={hovering
                    ? { y: 0, opacity: 1 }
                    : { y: -10, opacity: 0.7 }
                }
                transition={{ type: "tween", duration: 0.1 }}
            >    
                <span className="pr-4">{props.text}</span>
                <motion.span 
                    class={hovering
                        ? "un2 text-m md:text-lg lg:text-3xl"
                        : "un1 text-m md:text-lg lg:text-3xl"
                    }
                    animate={hovering
                        ? { color: "red" }
                        : { color: "inherit"}
                    }
                >
                    {props.coloredText}
                </motion.span>
            </motion.div>
            
        </motion.a>
    )
}

export default Social;