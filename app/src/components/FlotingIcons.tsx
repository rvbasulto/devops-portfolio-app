import Link from "next/link";
import {  FaGithub, FaLinkedin } from "react-icons/fa";

export default function FloatingIcons() {
  return (
    <div className="hidden flex flex-row gap-6 md:absolute right-10 top-20">
           <Link
            href="https://github.com/rvbasulto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="h-8 w-8 hover:text-[#C9F7C3] transition" />
          </Link> 
          <Link
            href="https://www.linkedin.com/in/roberto-c-vazquez/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-8 w-8 hover:text-[#C9F7C3] transition" />
          </Link>
    </div>
  );
}