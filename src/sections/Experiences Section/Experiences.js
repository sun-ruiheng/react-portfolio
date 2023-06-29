import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import ExpCard from "./ExpCard";
import AnimatedText from "../Home Section/AnimatedText";
import Skill from "./Skill";

function Experiences() {
    
    return (
        <motion.div
            className="bg-gradient-to-b from-myoffwhite to-teal-300"
        >
            <motion.h3 
                initial={{ visibility: 0, y: 100 }}
                whileInView={{ visibility: 1, y: 0 }}
                className="flex justify-center align-middle text-mydarkblue py-5"
                transition={{ duration: 1, type: "spring", bounce: 0.6 }}
            >
                <AnimatedText
                styling="pr-8 font-quicksand font-bold text-2xl md:text-4xl lg:text-6xl"
                text='Experiences and Skills'/>
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

            <div className="w-5/6 lg:w-2/3 m-auto pb-10">
                <ExpCard
                    title="Tech Assoc. & Internal Lead (Vice-President), GDSC NUS, 2022 - 2024"
                    logo="gdsc-logo.png"
                    description="Club website building & management, teaching of technical workshops"
                >
                    <Skill
                        imagePath="logo192.png"
                        name="React"
                    />
                    <Skill
                        imagePath="js-logo.webp"
                        name="JavaScript"
                    />
                    <Skill
                        imagePath="typescript-logo.png"
                        name="TypeScript"
                    />
                    <Skill
                        imagePath="tailwind-logo.png"
                        name="Tailwind"
                    />
                    <Skill
                        imagePath="plasmic-logo.avif"
                        name="Plasmic"
                    />
                </ExpCard>

                <ExpCard
                    title="Automated Testing Internship, SecureAge Technology, Summer 2023"
                    logo="secureage-logo.jpeg"
                    description="Design and automation of rigorous tests on Windows OS encryption products"
                >
                    <Skill
                        imagePath="java-logo.png"
                        name="Java"
                    />
                    <Skill
                        imagePath="katalon-logo.png"
                        name="Katalon"
                    />
                    <Skill
                        imagePath="powershell-logo.png"
                        name="PowerShell"
                    />
                    <Skill
                        imagePath="vmware-logo.png"
                        name="VMWare"
                    />
                </ExpCard>

                <ExpCard
                    title="Machine Learning Research Internship, A*STAR, Early 2022"
                    logo="i2r.png"
                    description="Mass data collection and pipelining, for reconditioning of Machine Translation model"
                >
                    <Skill
                        imagePath="python-logo.png"
                        name="Python"
                    />
                    <Skill
                        imagePath="scrapy-logo.webp"
                        name="Scrapy"
                    />
                    <Skill
                        imagePath="selenium-logo.png"
                        name="Selenium"
                    />
                    <Skill
                        imagePath="whoosh-logo.png"
                        name="Whoosh"
                    />
                    <Skill
                        imagePath="json-logo.png"
                        name="JSON"
                    />
                </ExpCard>

                <ExpCard
                    title="Project Management Internship, DSTA, Early 2020"
                    logo="dsta-logo.jpeg"
                    description="Prototyping and development of mobile app, with Design Innovation approach"
                >
                    <Skill
                        imagePath="java-logo.png"
                        name="Java"
                    />
                    <Skill
                        imagePath="swift-logo.png"
                        name="Swift"
                    />
                    <Skill
                        imagePath="adobexd-logo.avif"
                        name="Adobe XD"
                    />
                    <Skill
                        imagePath="androidstudio-logo.png"
                        name="Android"
                    />
                </ExpCard>

                <ExpCard
                    title="Independent"
                    logo="programmer-pic.webp"
                    description="Some other frameworks and libraries I've worked with"
                >
                    <Skill
                        imagePath="nodejs-logo.png"
                        name="Node.JS"
                    />
                    <Skill
                        imagePath="expressjs-logo.png"
                        name="Express.JS"
                    />
                    <Skill
                        imagePath="phaser-logo.png"
                        name="Phaser.JS"
                    />
                    <Skill
                        imagePath="pygame-logo.png"
                        name="Pygame"
                    />
                </ExpCard>
            </div>
            
        </motion.div>
    );
}

export default Experiences;

