"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/app/lib/hooks";
import {motion} from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FaSquareLetterboxd } from "react-icons/fa6";

export default function Hobbies(){
    const {ref}=useSectionInView("Hobbies",0.5);
    return (
        <section
            ref={ref}
            id="skills"
            className="
                mt-28
                mb-28
                max-w-[53rem]
                scroll-mt-28
                text-center
                sm:mb-40
            "
        >
            <SectionHeading>
                My Hobbies
            </SectionHeading>
            <p
                className="
                    mb-3
                "
            >
                In my free time, I enjoy watching Movies 🎬, Series 📺, and Anime 🎥, and I love diving into a good Novel 📚. I'm also passionate about playing Football ⚽ whenever I get the chance. Additionally, I post reviews of the films I watch on Letterboxd, sharing my thoughts and opinions with other movie enthusiasts! ✍️
            </p>
            <br />
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
                <p
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
                        transition
                    "
                >
                    Follow Me on LetterBoxd <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
                </p>
                <a
                    href="https://boxd.it/7xphV"
                    target="_blank"
                    className="
                        group
                       bg-white
                       text-gray-700
                       p-5
                       flex
                       items-center
                       gap-2
                       rounded-full
                       outline-none
                       focus:scale-[1.15]
                       hover:scale-[1.15]
                       hover:text-gray-800
                       active:scale-105
                       transition
                       cursor-pointer
                       border
                       border-black/20
                    "
                >
                    <FaSquareLetterboxd />
                </a>
            </motion.div>
        </section>
    );
};