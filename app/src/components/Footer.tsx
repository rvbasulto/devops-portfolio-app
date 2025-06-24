import Link from "next/link";
import {  FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" w-full bg-[#0D2E1B] py-8 text-white">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Roberto Vazquez. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <Link
            href="https://github.com/rvbasulto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="h-6 w-6 hover:text-[#C9F7C3] transition" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/roberto-c-vazquez/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-6 w-6 hover:text-[#C9F7C3] transition" />
          </Link>
         {/*  <Link
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="h-6 w-6 hover:text-[#C9F7C3] transition" />
          </Link> */}
        </div>
      </div>
    </footer>
  );
}