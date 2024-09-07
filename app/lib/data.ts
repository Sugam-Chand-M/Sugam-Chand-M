import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import sociopediaApp from "@/public/sociopedia.png";
import myMemoryApp from "@/public/myMemoryApp.jpg";
import { title } from "process";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Open Source Contribution",
  //   hash: "#opensource", 
  // },
  {
    name: "Hobbies",
    hash: "#hobbies",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const education = [
  {
    title: "B.E/B.Tech",
    college: "Bangalore Instituite of Technology",
    major:"Computer Science and Engineering",
    cgpa: "9.44/10.0",
    icon: React.createElement(LuGraduationCap),
    date: "August 2019 - May 2023",
  }
];

export const experiencesData = [
  {
    title: "Software Engineer Intern",
    location: "Bangalore, India",
    description:
      "",
    icon: React.createElement(CgWorkAlt),
    date: "February 2023 - August 2023",
  },
  {
    title: "Associate Software Engineer",
    location: "Bangalore, India",
    description:
      "",
    icon: React.createElement(CgWorkAlt),
    date: "September 2023 - Present",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "Sociopedia React Application",
    description:
      "",
    tags: ["React","JavaScript", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: sociopediaApp,
  },
  {
    title: "My Memory Application",
    description:
      "",
    tags: ["Kotlin", "App Development"],
    imageUrl: myMemoryApp,
  },
] as const;

// export const openSourceData=[

// ];

export const skillsData = [
  "C++",
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "GitLab",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Framer Motion",
] as const;