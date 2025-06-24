"use client";

import Image from "next/image";
import { Element } from "react-scroll";

export const education = [
  {
    title: "Solution Architect Learning Plan",
    institution: "AWS Skill Builder",
    date: "May 2025 – Present",
    image: "/skill-builder.svg",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    institution: "Amazon Web Services (AWS)",
    date: "May 2025",
    image: "/cloud-practitioner-logo.png",
  },
  {
    title:
      "Begin Your DevOps Career As a Newbie | AWS, Linux, Scripting, Jenkins, Ansible, GitOps, Docker, Kubernetes, & Terraform.",
    institution: "Udemy Academy",
    date: "Sept 2024 – Present",
    image: "/udemy-logo-small.png",
  },
  {
    title: "Bachelor’s Degree in Computer Science",
    institution: 'Central University "Marta Abreu" de Las Villas (UCLV), Cuba',
    date: "2014 – 2019",
    image: "/uclv-logo.png",
  },
];

export default function Education() {
  return (
    <Element
      name="education"
      className="w-full max-w-[1120px] mx-auto py-16 px-4 flex flex-col items-center"
    >
      <h2 className="text-white text-center mb-16">
        Education & Certifications
      </h2>

      <div className="relative border-l-2 border-[#C9F7C3]">
        {education.map((item, i) => (
          <div
            key={i}
            className={`mb-14 ml-6 relative ${
              i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } lg:flex items-start`}
          >
            {/* Circle */}
            <div className="absolute -left-3 w-6 h-6 bg-[#C9F7C3] rounded-full border-4 border-[#032012] z-10"></div>

            {/* Card */}
            <div className="bg-gradient-to-b from-[#032012] to-[#0D2E1B] p-6 rounded-[20px] shadow-lg shadow-black/20 w-full lg:w-[500px] hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-full max-w-[70px] h-[70px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[#C9F7C3] ">{item.date}</p>
                  <h3 className="text-white font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-[#D6F9E1] text-sm">{item.institution}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
}
