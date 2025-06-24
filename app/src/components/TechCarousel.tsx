
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { tech } from "../constants";

type TechCarouselProps = {
  direction?: "left" | "right";
};

export default function TechCarousel({ direction = "left" }: TechCarouselProps) {
  const duplicatedTechs = [...tech, ...tech];
  const moveFrom = direction === "left" ? "0%" : "-50%";
  const moveTo = direction === "left" ? "-50%" : "0%";

  return (
    <div className="overflow-hidden py-6 lg:py-8 px-4 lg:px-16 w-full">
      <motion.div
        className="flex gap-4 lg:gap-16 w-max"
        animate={{ x: [moveFrom, moveTo] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        }}
      >
        {duplicatedTechs.map((item, index) => (
         <div 
            key={index}
            className="flex gap-2 justify-center items-center">
           <div
            className="relative min-w-[30px] lg:min-w-[50px] h-[30px] lg:h-[50px]"
          >
            <Image
              src={item.src}
              alt={`tech-${index}`}
              fill
              sizes="(min-width: 1024px) 10vw, 10vw"
              style={{ objectFit: "contain" }}
            />
          </div>
          <h3 className="text-white">{item.name}</h3>
         </div>
        ))}
      </motion.div>
    </div>
  );
}