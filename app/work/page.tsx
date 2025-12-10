import ProjectCard from "@/components/ProjectCard";
import { section } from "motion/react-client";
import React from "react";

const page = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-center font-semibold text-2xl mt-10">Work</h1>
      <ProjectCard />
    </section>
  );
};

export default page;
