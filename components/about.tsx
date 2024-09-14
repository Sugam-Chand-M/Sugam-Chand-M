"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {motion} from "framer-motion";

export default function About(){
    return (
        <motion.section
            className="
                mb-28
                max-w-[45rem]
                text-center
                leading-8
                sm:mb-40
            "
            initial={{opacity:0,y:100}}
            animate={{opacity:1,y:0}}
            transition={{
                delay:0.175
            }}
        >
            <SectionHeading>
                About Me
            </SectionHeading>
            <p
                className="
                    mb-3
                "
            >
            👨‍💻 Associate Software Engineer at OpenText with 1+ years of experience in the tech industry and a passion for problem-solving. I hold a degree in Computer Science, where I ranked as one of the top scorers in my batch. I'm always eager for new and exciting opportunities that challenge me to grow professionally.
            <br />
            Outside of work, I enjoy watching Movies, Series, and Anime! 🎬
            </p>
        </motion.section>
    );
};