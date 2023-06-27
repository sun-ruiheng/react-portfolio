import MyFace from "./MyFace";
import MyIntro from "./MyIntro";
import React, { useState } from "react";
import { delay, motion, spring, useAnimationControls } from "framer-motion";

function Home() {
    const [lightMode, setLightMode] = useState(true);
    const [pull, setPull] = useState(true);

    return (
        <div className="h-full">

            <motion.img 
                className="absolute mx-auto left-0 right-0 text-center w-14 lg:w-16 cursor-pointer"
                src={require(lightMode
                    ? "../../images/pull-black.png"
                    : "../../images/pull-white.png")}
                onClick={ () => 
                    {
                        setPull(!pull);
                        setTimeout(() => setLightMode(!lightMode), 200);
                    }}
                animate={ pull 
                    ? {y: [0, -25, 0]}
                    : {y: [-25, 0, -25]} }
                transition={{ duration: 0.2 }}
            />
            
            <div 
                style={lightMode
                    ? { 
                        backgroundImage: 'url(light-bg.png)',
                        backgroundSize: 'cover'
                    }
                    : {
                        backgroundImage: 'url(dark-bg.png)',
                        backgroundSize: 'cover'
                    }
                }
                className="flex-col-reverse justify-center lg:flex-row flex h-screen lg:place-items-center"
            >

                <motion.div className='h-1/2 lg:basis-1/2 lg:h-auto align-top flex justify-center content-center'>
                    <MyFace/>
                </motion.div>

                <motion.div className='h-1/2 lg:basis-1/2 flex flex-col justify-end lg:justify-center lg:content-center'>
                    <MyIntro
                        lightMode={lightMode}
                        tagline="Welcome to the portfolio of a cool student developer, math enjoyer, and writer."/>
                </motion.div>
            </div>
            
        </div>
    );
}

export default Home;