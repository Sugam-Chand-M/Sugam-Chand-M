"use client";

import { useSectionInView } from "@/app/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { educationData } from "@/app/lib/data";

export default function Education(){
    const {ref}=useSectionInView("Education",0.5);
    return(
        <section
            ref={ref}
            id="education"
            className="
                mb-28
            "
        >
            <SectionHeading>
                My Education
            </SectionHeading>
            <VerticalTimeline
                lineColor=""
            >
                {
                    educationData.map((item,index)=>(
                        <React.Fragment 
                            key={index}
                        >
                            <VerticalTimelineElement
                                visible={true}
                                contentStyle={{
                                    background:"#f3f4f6",
                                    boxShadow:"none",
                                    border:"1px solid rgba(0,0,0,0.05)",
                                    textAlign:"left",
                                    padding:"1.3rem 2rem",
                                }}
                                contentArrowStyle={{
                                    borderRight:"0.4rem solid #9ca3af",
                                }}
                                date={item.date}
                                icon={item.icon}
                                iconStyle={{
                                    background:"white",
                                    fontSize:"1.5rem"
                                }}
                            >
                                <h3
                                    className="
                                        font-semibold
                                        capitalize
                                    "
                                >
                                    {item.title}
                                </h3>
                                <p>
                                    {item.college}
                                </p>
                                <p
                                    className="
                                        font-normal
                                        !mt-0
                                        italic
                                    "
                                >
                                    {item.major}
                                </p>
                                <p
                                    className="
                                        !mt-1
                                        !font-normal
                                        text-gray-700
                                    "
                                >
                                    {item.description}
                                </p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))
                }
            </VerticalTimeline>
        </section>
    );
};