import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col items-start justify-between gap-3 text-xs text-slate-400 sm:flex-row">
      <p>© {new Date().getFullYear()} Sugashini S · Frontend Developer</p>

      <div className="flex flex-wrap gap-4">
        <a
          href="mailto:sugashinisudalaimuthu@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-slate-200"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/suga-shini"
          target="_blank"
          rel="noreferrer"
          className="hover:text-slate-200"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Sugashinii"
          target="_blank"
          rel="noreferrer"
          className="hover:text-slate-200"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
