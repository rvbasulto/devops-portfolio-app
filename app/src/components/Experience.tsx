"use client";

import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { Element } from "react-scroll";
export const experience = [
  {
    title: "Cloud & DevOps Engineer",
    company: "Self-Initiated",
    date: "2025",
    description: [
      "Re-architected a monolithic web application using AWS managed services (Elastic Beanstalk, RDS, ElastiCache, MQ), improving scalability and deployment speed.",
      "Built and deployed a CI/CD pipeline with Jenkins, integrating GitHub, Maven, SonarQube, and Nexus for automated builds, testing, static analysis, and artifact publishing.",
      "Managed Terraform-based infrastructure provisioning, creating reusable modules for EC2, security groups, AMIs, and key pairs; implemented local and remote state strategies.",
      "Configured Route 53 DNS, CloudFront CDN, and SSL for secure global delivery.",
      "Deployed Prometheus and Grafana for metrics monitoring, and managed Linux server environments using Docker and custom scripts",
    ],
    image: "/cloud-icon.png",
  },
  {
    title: "Web Administrator & Network Support",
    company: "University of Camagüey “Ignacio Agramonte Loynaz”, Cuba",
    date: "2019 - 2022",
    description: [
      "Managed five institutional websites, achieving 99.9% uptime.",
      "Collaborated with the network team to improve network efficiency, resulting in a significant reduction in downtime.",
      "Implemented remote desktop access (xrdp + VPN) during the COVID-19 pandemic, enabling secure remote work.",
      "Administered the virtual system for the university’s 2020 Tech Convention, ensuring smooth participation for over 20 national and international attendees.",
      "Provided technical support, resolving 200+ incidents related to email, connectivity, and internal services.",
    ],
    image: "/uc-logo.png",
  },
];
export default function Experience() {
  return (
    <Element
      name="experience"
      className="flex flex-col max-w-[1120px] mx-auto justify-center items-center gap-12 py-16 px-4"
    >
      <h2 className="text-center">
        <span className="text-white">My </span> work experience
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {experience.map((card, i) => (
          <div
            key={i}
            className="bg-gradient-to-b from-[#032012] to-[#0D2E1B] rounded-[23px] p-8 flex flex-col gap-6 shadow-lg shadow-black/20 hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-xl overflow-hidden">
                <Image
                  src={card.image}
                  alt="experience logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-white text-lg font-semibold">
                  {card.title}
                </h3>
                <p className="text-[#C9F7C3] text-sm">{card.company}</p>
                <p className="text-[#D6F9E1] text-xs italic">{card.date}</p>
              </div>
            </div>

            <ul className="flex flex-col gap-4 mt-4">
              {card.description.map((desc, index) => (
                <li
                  key={index}
                  className="text-[#D6F9E1] flex gap-2 items-start"
                >
                  <CheckCircleIcon className="w-5 h-5 text-[#C9F7C3] shrink-0 mt-1" />
                  <span className="text-sm leading-relaxed">{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Element>
  );
}
