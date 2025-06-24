"use client";

import FloatingHomeButton from "@/components/FloatingHomeButton";
import { devopsProjects } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-white hover:text-[#C9F7C3] transition"
      >
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold text-center text-white mb-12">
        My DevOps Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {devopsProjects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            className="group bg-gradient-to-b from-[#032012] to-[#0D2E1B] rounded-[23px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-[220px]">
              <Image
                src={project.foregroundImage}
                alt={project.title}
                fill
                className="object-contain object-center group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-[#D6F9E1] text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Image
                    key={i}
                    src={tech}
                    alt="tech"
                    width={30}
                    height={30}
                    className="rounded"
                  />
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <FloatingHomeButton />
    </div>
  );
}
