'use client';

import { useState } from 'react';
import { Link } from 'react-scroll';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="hidden md:flex absolute z-50 top-16 left-1/2 transform -translate-x-1/2 w-full max-w-[500px] h-[66px] rounded-[13px] bg-gradient-to-b from-[#032012] to-[#0D2E1B] justify-center items-center">
      <div className="flex gap-4 md:gap-8 text-white">
        <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:underline">
          About
        </Link>
        <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:underline">
          Projects
        </Link>
        <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:underline">
          Experience
        </Link>
         <Link to="education" smooth={true} duration={500} className="cursor-pointer hover:underline">
          Education
        </Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:underline">
          Contact
        </Link>
      </div>
    </div>
      {/* Hamburger button */}
      <div className="fixed top-8 right-8 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="text-white p-2 bg-[#032012] rounded-md"
          aria-label="Open menu"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* Overlay menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm md:hidden">
          <div className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#032012] p-6 text-white shadow-lg">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-lg font-bold">Menu</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white"
                aria-label="Close menu"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              {[
                { to: 'about', label: 'About' },
                { to: 'projects', label: 'Projects' },
                { to: 'experience', label: 'Experience' },
                { to: 'education', label: 'Education' },
                { to: 'contact', label: 'Contact' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-60}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-lg hover:text-[#C9F7C3]"
                >
                  {item.label}
                </Link>
              ))}
            <div className='flex gap-6'>   <a
            href="https://github.com/rvbasulto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="h-8 w-8 hover:text-[#C9F7C3] transition" />
          </a> 
          <a
            href="https://www.linkedin.com/in/roberto-c-vazquez/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-8 w-8 hover:text-[#C9F7C3] transition" />
          </a></div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}