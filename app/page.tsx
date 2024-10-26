// Main Page where all the components will be present

import React from "react";
import Intro from "@/components/intro";
import About from "@/components/about";
import SectionDivider from "@/components/sectiondivider";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Hobbies from "@/components/hobbies";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main 
      className="
        flex
        flex-col
        items-center
        px-4
      "
    >
      <Intro />
      <SectionDivider />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Hobbies />
      <Contact />
      <Footer />
    </main>
  );
}
