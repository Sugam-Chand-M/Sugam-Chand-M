// Main Page where all the components will be present

import React from "react";
import Intro from "@/components/intro";
import About from "@/components/about";
import SectionDivider from "@/components/sectiondivider";
import Projects from "@/components/projects";

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

      <Projects />
    </main>
  );
}
