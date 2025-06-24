"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const tech = [
  "Terraform",
  "Ansible",
  "Vagrant",
  "AWS",
  "Jenkins",
  "GitHub Actions",
  "Docker",
  "Kubernetes",
  "CloudWatch",
  "Prometheus",
  "Linux",
  "Bash",
  "Java",
  "Python",
  "SQL",
  "YAML",
];

type ToolChainCarouselProps = {
  direction?: "top" | "bottom";
};

export default function ToolChainCarousel({
  direction = "top",
}: ToolChainCarouselProps) {
  const duplicatedTechs = [...tech, ...tech];

  const [itemHeight, setItemHeight] = useState(84); // default desktop: 72 + 12

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setItemHeight(62); // mobile: 50 + 12
      } else {
        setItemHeight(84); // desktop: 72 + 12
      }
    };

    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollDistance = itemHeight * tech.length;

  return (
    <div className="h-[195px] lg:h-[255.5px] overflow-hidden w-full flex justify-center items-center">
      <motion.div
        className="flex flex-col gap-[12px]"
        initial={{ y: 0 }}
        animate={{
          y:
            direction === "bottom" ? [0, scrollDistance] : [0, -scrollDistance],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        }}
      >
        {duplicatedTechs.map((item, index) => (
          <div
            key={index}
            className="w-[100px] lg:w-[140px] h-[50px] lg:h-[72px] bg-[#142D1F] rounded-[6px] flex justify-center items-center"
          >
            <span className="text-white text-center">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
