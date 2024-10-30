"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import profilePic from "@/public/SugamsPic.jpeg";
import {motion} from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/app/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro(){
    const {ref}=useSectionInView("Home",0.5);
    const {activeSection, setActiveSection,setTimeOfLastClick}=useActiveSectionContext();
    return (
        <section
            ref={ref}
            id="home"
            className="
                mt-28
                mb-28
                max-w-[50rem]
                text-center
                sm:mb-0
                scroll-mt-[100rem]
            "
        >
            {/* The below code is for the image/profile pic section. Will be commenting as no plans to implement yet*/}
            {/*<div 
                className="
                    flex
                    items-center
                    justify-center
                "
            >
                <div
                    className="
                        relative
                    "
                >
                    <motion.div
                        initial={{opacity:0,scale:0}}
                        animate={{opacity:1,scale:1}}
                        transition={{
                            type:"tween",
                            duration:0.2
                        }}
                    >
                    <Image 
                        src={profilePic}
                        alt="Sugam Chand M"
                        width="192"
                        height="192"
                        quality="95"
                        priority={true}
                        className="
                            h-24
                            w-24
                            rounded-full
                            object-cover
                            border-[0.35em]
                            border-white
                            shadow-xl
                        "
                    />
                    </motion.div>
                    <motion.span 
                        className="
                            absolute
                            bottom-0
                            right-0
                            text-4xl
                        "
                        initial={{opacity:0,scale:0}}
                        animate={{opacity:1,scale:1}}
                        transition={{
                            type:"spring",
                            stiffness:125,
                            delay:0.1,
                            duration:0.7
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>*/}

            {/* https://stackoverflow.com/questions/68151877/use-ityped-init-with-useref-and-useeffect-in-react-with-typescript - for Programmer, Gamer, Movie Lover...., blah blah blah */}
            <motion.p
                className="
                    mb-5
                    mt-4
                    px-4
                    text-2xl
                    font-medium
                    !leading-[1.5]
                    sm:text-4xl
                "
                initial={{opacity:0,y:100}}
                animate={{opacity:1,y:0}}
            >
                <span
                    className="
                        font-bold
                    "
                >
                    Hello, I'm Sugam Chand M
                </span>
            </motion.p>
            <motion.span
                className="
                mb-5
                mt-4
                px-4
                text-2xl
                font-medium
                !leading-[1.5]
                sm:text-4xl
            "
            initial={{opacity:0,y:100}}
            animate={{opacity:1,y:0}}
            >
                    I'm a <span
                            className="
                                inline-flex
                            "
                        >
                            <Typewriter 
                                options={{ 
                                    strings:["Software Engineer", "Programmer", "Binge Watcher"],
                                    autoStart:true,
                                    delay:100,
                                    loop:true,
                                }}
                            /> 
                    </span>
            </motion.span>

            <motion.div
                className="
                    mt-5
                    flex
                    flex-col
                    sm:flex-row
                    items-center
                    justify-center
                    gap-2
                    px-4
                    text-lg
                    font-medium
                "
                initial={{opacity:0,y:100}}
                animate={{opacity:1,y:0}}
                transition={{
                    delay:0.1,
                }}
            >
                <Link
                    href="#contact"
                    className="
                        group
                        bg-gray-900
                        text-white
                        px-7
                        py-3
                        flex
                        items-center
                        gap-2
                        rounded-full
                        outline-none
                        focus:scale-110
                        hover:scale-110
                        hover:bg-gray-950
                        active:scale-105
                        transition
                    "
                    onClick={()=>{
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact Me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
                </Link>
                <Link
                    href="https://drive.google.com/file/d/1ML4N0dWFRhj8Ro4ZzDDzMkqnh3hTwaSe/view?usp=sharing"
                    target="_blank"
                    className="
                        group
                       bg-white
                       text-black
                       px-7
                       py-3
                       flex
                       items-center
                       gap-2
                       rounded-full
                       outline-none
                       focus:scale-110
                       hover:scale-110
                       active:scale-105
                       transition
                       cursor-pointer
                       dark:bg-white/10
                       dark:text-white/60
                    "
                >
                    Download Resume <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
                </Link>
                <a
                    href="https://www.linkedin.com/in/sugam-chand-m-2434a81a6/"
                    target="_blank"
                    className="
                        group
                       bg-white
                       text-gray-700
                       p-4
                       flex
                       items-center
                       gap-2
                       rounded-full
                       outline-none
                       focus:scale-[1.15]
                       hover:scale-[1.15]
                       hover:text-blue-500
                       active:scale-105
                       transition
                       cursor-pointer
                       borderBlack
                       dark:bg-white/10
                       dark:text-white/60
                       dark:hover:text-blue-500
                    "
                >
                    <BsLinkedin />
                </a>
                <a
                    href="https://github.com/Sugam-Chand-M"
                    target="_blank"
                    className="
                        group
                       bg-white
                       text-gray-700
                       p-4
                       flex
                       items-center
                       gap-2
                       rounded-full
                       outline-none
                       focus:scale-[1.15]
                       hover:scale-[1.15]
                       hover:text-gray-950
                       active:scale-105
                       transition
                       cursor-pointer
                       borderBlack
                       dark:bg-white/10
                       dark:text-white/60
                       dark:hover:text-gray-950
                    "
                >
                    <BsGithub />
                </a>
            </motion.div>
        </section>
    );
};