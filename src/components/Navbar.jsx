import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Navbar() {
  return (
    <nav className="flex h-20 items-center justify-between px-2 md:px-4 text-sm text-slate-100">

      <div className="flex items-center gap-6">
        <span className="text-lg font-semibold tracking-tight text-slate-50">
          Suga<span className="text-purple-400">.</span>
        </span>

        <div className="flex items-center gap-6">
          <a
            href="#home"
            className="text-slate-200 hover:text-emerald-300 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-slate-200 hover:text-emerald-300 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-slate-200 hover:text-emerald-300 transition-colors"
          >
            Projects
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4 text-lg">
        <a
          href="mailto:sugashinisudalaimuthu@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-slate-200 hover:text-emerald-300 transition-colors"
        >
          <HiOutlineMail />
        </a>
        <a
          href="https://github.com/Sugashinii"
          target="_blank"
          rel="noreferrer"
          className="text-slate-200 hover:text-emerald-300 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/suga-shini"
          target="_blank"
          rel="noreferrer"
          className="text-slate-200 hover:text-emerald-300 transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}
