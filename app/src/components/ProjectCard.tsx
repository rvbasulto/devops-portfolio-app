"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  backgroundImage: string;
  foregroundImage: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github?: string;
};

export default function ProjectCard({
  backgroundImage,
  foregroundImage,
  title,
  description,
  technologies,
  link,
  github,
}: ProjectCardProps) {
  return (
    <div
      className=" max-w-[398px] md:max-w-[600px] h-full md:h-[618px] rounded-[23px] 
    bg-gradient-to-b from-[#032012] to-[#0D2E1B] flex flex-col justify-between items-center 
    p-6 shadow-lg shadow-black/20 gap-4"
    >
      {/* Imagen principal */}
      <div className="relative max-w-[370px] md:max-w-[552px] min-h-[218px] md:h-[330px] rounded-[14px] bg-[#152A20] overflow-hidden">
        <Image
          src={backgroundImage}
          alt="Background preview"
          width={770}
          height={377}
          className="object-cover rounded-md"
        />
        <Link
          href={link}
          className="absolute top-8 left-6 md:left-[40px] hover:scale-110 transition duration-300 ease-in-out  
        rounded-md overflow-hidden w-[289px] md:w-[450px] h-[234px] md:h-[320px] rotate-[2.63deg]"
        >
          <Image
            src={foregroundImage}
            alt="Foreground preview"
            fill
            style={{ objectFit: "cover", objectPosition: "top center" }}
            sizes="(min-width: 1024px) 90vw"
          />
        </Link>
      </div>

      {/* Texto */}
      <h3 className="text-white ">{title}</h3>
      <p className="text-[#D6F9E1] ">{description}</p>

      {/* Techs + Link */}
      <div className="flex h-full lg:max-h-[50px] w-full justify-between items-center mt-2">
        {/* Tech icons */}
        <div className="flex items-center">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`${
                index !== 0 ? "-ml-1" : ""
              } w-[34px] md:w-[50px] h-[34px] md:h-[50px] rounded-full flex justify-center items-center border border-gray-700 bg-gradient-to-r from-[#032012] to-[#0D2E1B] z-[${
                10 + index
              }]`}
            >
              <Image
                src={tech}
                alt={`tech-${index}`}
                width={26}
                height={24}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Link */}
        <div className="flex flex-row-reverse gap-4">
          {github && (
            <Link href={github} aria-label="GitHub">
              <FaGithub className="h-6 w-6 hover:text-[#C9F7C3] transition" />
            </Link>
          )}
          <Link href={link}>
            <p className="text-[#BAF9CB] font-medium flex items-center">
              Check details <ArrowUpRightIcon className="w-5 h-5 ml-1" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
