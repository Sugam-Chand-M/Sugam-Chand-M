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
    name: "Skills",
    hash: "#skills",
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

export const educationData = [
  {
    title: "B.E/B.Tech",
    college: "Bangalore Institute of Technology",
    major: "Computer Science and Engineering",
    description:"Completed my B.E/B.Tech graduation from Bangalore Intitute of technology with a CGPA of 9.44 / 10.0 and was ranked top 2 in my batch.",
    icon: React.createElement(LuGraduationCap),
    date: "August 2019 - May 2023",
  }
];

export const experiencesData = [
  {
    title: "Associate Software Engineer",
    location: "Bangalore, India",
    company:"OpenText",
    description:
      "Currently working as an Associate Software Engineer at OpenText with expertise in handling customer issues and implementing features.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2023 - Present",
  },
  {
    title: "Software Engineer Intern",
    location: "Bangalore, India",
    company:"MicroFocus [now OpenText]",
    description:
      "Worked as an intern at MicroFocus[now OpenText] with expertise in resolving defects and features.",
    icon: React.createElement(CgWorkAlt),
    date: "February 2023 - August 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Sociopedia React Application",
    description:
      "Developed a Social Media Web Application for users to upload and share social events.",
    tags: ["React","JavaScript", "MongoDB", "Node.js", "Material-UI"],
    imageUrl: sociopediaApp,
  },
  {
    title: "My Memory Application",
    description:
      "Developed a game application themed on superheroes to test memory power and speed in card selection.",
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
  "C#",
  ".NET Framework",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "GitLab",
  "SQL",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
] as const;