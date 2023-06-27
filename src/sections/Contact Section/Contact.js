import React, { useState } from "react";
import { delay, motion, spring  } from "framer-motion";
import AnimatedText from "../Home Section/AnimatedText";
import Social from "./Social";

function Contact() {
    return (
        <div
            className='h-screen flex flex-col space-evenly bg-gradient-to-b from-teal-300 to-mydarkblue'
        >
            <div>
                <motion.h3 
                    initial={{ visibility: 0, y: 100 }}
                    whileInView={{ visibility: 1, y: 0 }}
                    className="flex justify-center align-middle text-mydarkblue pt-12 py-5"
                    transition={{ duration: 1, type: "spring", bounce: 0.6 }}
                >
                    <AnimatedText
                    styling="text-2xl pr-8 md:text-4xl lg:text-6xl font-quicksand font-bold"
                    text="Let's get in touch!"/>
                </motion.h3>
                <motion.hr 
                    style={{
                        border: '4px solid #142d4c',
                        borderRadius: '5px',
                        width: '50%',
                        margin: 'auto'
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                />
            </div>

            <motion.div
                className="flex flex-col justify-evenly align-middle m-auto h-2/3 w-2/3 rounded-xl bg-gradient-to-b from-emerald-100 to-mycyan"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            >
                <Social 
                    url="https://github.com/sun-ruiheng"
                    imgSrc="github-logo.png"
                    text="Check out some of my projects on"
                    coloredText="GitHub"
                />
                <Social 
                    url="https://linkedin.com/in/sunruiheng"
                    imgSrc="linkedin-logo.png"
                    text="Connect with me on"
                    coloredText="LinkedIn"
                />
                <Social 
                    url="mailto:sunruiheng2001@gmail.com"
                    imgSrc="gmail-logo.webp"
                    text="Alternatively, reach out by"
                    coloredText="Email"
                />
                <Social 
                    url="https://sun-ruiheng.github.io/Portfolio/"
                    imgSrc="legacy-website-logo.png"
                    text="If you hated this website, maybe you'd prefer my"
                    coloredText="Legacy website"
                />
            </motion.div>
        </div>
    )
}
export default Contact;