'use client'
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { Element } from "react-scroll";

export default function Contact() {
  return (
    <Element name="contact" className="relative w-full h-[400px] md:h-[600px] flex justify-center items-center mb-20">
      <div
        style={{
          backgroundImage: "url('/contact-bg.png')",
          backgroundPosition: "bottom center",
        }}
        className="absolute bg-no-repeat bg-cover  h-[600px] md:h-[800px] w-full max-w-[1259px] mx-auto"
      ></div>
      <div className="relative z-10 flex flex-col justify-center items-center  text-center
      gap-6 max-w-[1120px] mx-auto px-4">
        <p className="body-2 uppercase  tracking-widest">
          Open to new opportunities
        </p>
        <h1 className="text-white md:text-[64px] ">
          <span className="text-[#C9F7C3] font-bold md:text-[72px] motion-safe:animate-pulse">
            DevOps{" "}
          </span>
          Engineer Seeking Impact
        </h1>

        <h6>
          I&apos;m currently exploring new career opportunities where I can
          contribute to high-impact engineering teams through automation,
          scalable infrastructure, and cloud-native technologies.
        </h6>

       <div className="flex flex-wrap gap-6 justify-center">
          {/* Get in Touch */}
          <a
            href="mailto:rvazquezbasulto@gmail.com"
            className="inline-flex shrink-0 items-center justify-center gap-2 bg-green-gradient text-white
            px-6 md:px-[40px] py-4 md:py-[22px] rounded-[12px] button-1 hover:scale-105 transition"
          >
            Get in Touch <ArrowUpRightIcon className="w-6 h-6" />
          </a>

          {/* Download Resume */}
          <a
            href="/Roberto_Vazquez_Resume.docx"
            download
            className="inline-flex shrink-0 items-center justify-center gap-2 shadow-[inset_0_0_0_1px_#C9F7C3] text-[#C9F7C3] 
            px-6 md:px-[40px] py-4 md:py-[22px] rounded-[12px] button-1 hover:scale-105 hover:bg-white/10 transition"
          >
            Download Resume <ArrowUpRightIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </Element>
  );
}
