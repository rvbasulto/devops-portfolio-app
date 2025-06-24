'use client'
import { Element } from "react-scroll";
import ProjectCard from "./ProjectCard";
import { devopsProjects } from "../constants";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

export default function ProjectsSection() {
  return (
    <Element name="projects" className="flex flex-col max-w-[1440px] mx-auto justify-center items-center gap-8 py-8 lg:py-16 ">
      <h2 className="text-center px-4 ">
        <span className="text-white">My most</span> recent projects
      </h2>
      <div className="flex flex-wrap gap-[30px] justify-center items-center px-4">
        {devopsProjects.map((card, i) => (
          <ProjectCard key={i} {...card} />
        ))}
      </div>
      <Link href="/projects" className="text-[16px] md:text-[24px] text-soft flex items-center hover:underline">{`See all projects`} <ArrowUpRightIcon className="w-8 h-8 ml-1"/></Link>
    </Element>
  );
}
