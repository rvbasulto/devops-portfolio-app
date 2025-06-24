"use client";
import Image from "next/image";
import ToolChainCarousel from "./ToolChainCarousel";
import { Element } from "react-scroll";

export default function DevOpsSection() {
  return (
    <Element name="about" className="w-full relative">
      <div
        style={{
          backgroundImage: "url('/grid-pattern.png')",
          backgroundPosition: "top center",
        }}
        className="absolute bg-no-repeat bg-cover h-[900px] w-full "
      ></div>
      <div className=" flex flex-col max-w-[1240px] lg:h-[970px] gap-6 lg:gap-[39px] mx-auto px-4 pb-8 lg:pb-16 ">
        {/* First Row */}
        <div className="flex flex-col  lg:flex-row  gap-6 lg:gap-[30px]">
          {/* Left */}
          <div className="hover:scale-103 transition-transform duration-100 ease-in-out shadow-lg shadow-black/20 lg:flex-1 max-w-[398px] lg:max-w-[689px] h-[312px] lg:h-[541px] self-center rounded-[23px] bg-gradient-to-b from-[#032012] to-[#0D2E1B] p-6 flex flex-col justify-end relative overflow-hidden">
            <Image
              src="/devops-laptop.png"
              alt="Automating Infrastructure"
              fill
              className="object-cover opacity-80 absolute"
            />
            <div className="relative z-10 max-w-[450px]">
              <h3 className="text-white ">
                Measuring what matters: latency, uptime, and health
              </h3>
            </div>
          </div>

          {/* Right */}
          <div className=" flex flex-col lg:flex-1 max-w-[398px] lg:max-w-[521px]  lg:h-[541px] self-center gap-6 lg:gap-[30px]">
            <div className="hover:scale-103 transition-transform duration-100 shadow-lg shadow-black/20 relative overflow-hidden w-full h-[195px] lg:h-[255.5px] rounded-[23px] bg-gradient-to-b from-[#032012] to-[#0D2E1B] p-6">
              <Image
                src="/timezones.png"
                alt="Automating Infrastructure"
                fill
                className="object-cover opacity-80 absolute"
              />
              <h3 className="text-white  mb-4 z-10 relative max-w-[300px] text-center mx-auto">
                Working remotely across the U.S.
              </h3>
            </div>

            <div className="shadow-lg shadow-black/20 w-full h-[195px] lg:h-[255.5px] rounded-[23px] bg-gradient-to-b from-[#032012] to-[#0D2E1B] p-6 flex items-center justify-center z-10">
              <h3 className="text-white">My Toolchain</h3>
              <ToolChainCarousel direction="top" />
              <ToolChainCarousel direction="bottom" />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col  lg:flex-row gap-6 lg:gap-[30px]">
          {/* Left */}
          <div className="flex flex-col lg:flex-1 w-full max-w-[398px] lg:w-[351px]  lg:h-[390px] self-center gap-6 lg:gap-[30px]">
            <div className="hover:scale-103 transition-transform duration-100 shadow-lg shadow-black/20 relative w-full h-[142px] lg:h-[180px]  rounded-[23px] overflow-hidden bg-gradient-to-b from-[#032012] to-[#0D2E1B] p-6">
              <h5 className="text-white relative z-10">
                With a Background in Computer Science
              </h5>

              <Image
                src="/box.png"
                alt="background"
                fill
                className="object-cover opacity-80 absolute "
              />
            </div>

            <div className="motion-safe:animate-pulse shadow-lg shadow-black/20 w-full h-[142px] lg:h-[180px] rounded-[23px] bg-gradient-to-b from-[#032012] to-[#0D2E1B] p-6 flex flex-col justify-center items-center">
              <h5 className="text-white text-center">
                Want to learn more about my experience?
              </h5>
              {/* Download Resume */}
              <a
                href="/Roberto_Vazquez_Resume.docx"
                download
                className="bg-green-gradient text-white w-fit px-4 py-2 rounded-[7px] mt-4"
              >
                📄 Download Resume
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="hover:scale-103 transition-transform duration-100 shadow-lg shadow-black/20 relative lg:flex-1 max-w-[398px] lg:max-w-[859px] h-[180px] lg:h-[390px] self-center rounded-[23px] bg-gradient-to-b from-[#032012] to-[#0D2E1B] p-6 flex items-center">
            <Image
              src="/Background.png"
              alt="background"
              fill
              className="object-cover absolute "
            />
            <Image
              src="/devops-code.png"
              alt="background"
              fill
              className="object-contain object-right opacity-40 absolute "
            />
            <h4 className="text-white relative z-10  max-w-[450px] ">
              Infrastructure as Code: Consistency from dev to prod
            </h4>
          </div>
        </div>
      </div>
    </Element>
  );
}
