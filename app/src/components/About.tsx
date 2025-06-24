"use client";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

export default function About() {

 

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
    <div className="relative flex flex-col justify-center items-center overflow-hidden w-full pt-20 md:pt-[150px] pb-16 px-4 bg-no-repeat bg-cover min-h-[800px]"
      style={{
        backgroundImage: "url('/grid-pattern.png')",
        backgroundPosition: "top center",
      }}
    >
      <Image
        src="/light.png"
        alt="Light flare"
        width={800}
        height={800}
        className="absolute -left-10 top-0 opacity-40 pointer-events-none"
      />
      <Image
        src="/light.png"
        alt="Light flare right"
        width={800}
        height={800}
        className="absolute top-0 -right-10 -scale-x-100 opacity-40 pointer-events-none"
      />

      <div className="z-10 flex flex-col lg:flex-row justify-center items-center lg:items-start max-w-[1400px] mx-auto gap-8">
        <div className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-[#0D2E1B] shrink-0">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-6">
          <p className="body-2 uppercase  tracking-widest">
            Scalable Infrastructure. Automated Delivery.
          </p>
           <h1 className="text-white md:text-[64px] font-bold">
            <span className="text-[#C9F7C3]">
              <Typewriter
                words={["DevOps Engineer"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
                 onLoopDone={handleDone}
              />
            </span>
          </h1>

          <h6>
            Hi! I’m Roberto Vazquez, a DevOps Engineer based in Florida, focused
            on automation, observability, and cloud-native solutions.
          </h6>
          <div className="flex flex-wrap gap-6 justify-center">
          {/* Get in Touch */}
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="inline-flex shrink-0 items-center justify-center gap-2 bg-green-gradient text-white
            px-6 md:px-[40px] py-4 md:py-[22px] rounded-[12px] button-1 hover:scale-105 transition"
          >
            See my work <ArrowUpRightIcon className="w-6 h-6" />
          </Link>

          {/* Download Resume */}
          <a
            href="/Roberto_Vazquez_Resume.docx"
            download
            className="inline-flex shrink-0 items-center justify-center gap-2 shadow-[inset_0_0_0_1px_#C9F7C3] text-[#C9F7C3] px-6 md:px-[40px] py-4 md:py-[22px] rounded-[12px] button-1 hover:scale-105 hover:bg-white/10 transition"
          >
            Download Resume <ArrowUpRightIcon className="w-6 h-6" />
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}
