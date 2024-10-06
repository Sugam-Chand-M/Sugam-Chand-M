"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/app/lib/data";
import ProjectClient from "./projectClient";
import { useSectionInView } from "@/app/lib/hooks";

export default function Projects(){
    const {ref}=useSectionInView("Projects",0.5);
    return(
        <section
            ref={ref}
            id="projects"
            className="
                scroll-mt-28
            "
        >
            <SectionHeading>
                My Projects
            </SectionHeading>
            <div>
                {
                    projectsData.map((project,index)=>(
                        <React.Fragment key={index}>
                            <ProjectClient {...project}/>
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    );
};