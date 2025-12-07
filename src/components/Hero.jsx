import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/portfolioprofile.jpg";

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="pt-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)] items-center">
    
        <div className="space-y-5 max-w-xl">
          <p className="text-base font-semibold text-purple-300">
            Sugashini— Frontend dev
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-slate-50">
            Turning messy ideas into polished web apps.
          </h1>

       

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full border border-slate-500 px-5 py-2 text-sm font-medium text-slate-100 bg-transparent hover:bg-slate-800 transition"
            >
              View projects
            </a>

           
            <a
              href="/resume.pdf"
              download="Sugashini-S-Frontend-CV.pdf"
              className="inline-flex items-center rounded-full border border-slate-500 px-5 py-2 text-sm font-medium text-slate-100 bg-transparent hover:bg-slate-800 transition"
            >
              Download CV
            </a>
          </div>
        </div>

        <aside className="hidden md:flex justify-end">
          <div className="overflow-hidden rounded-3xl bg-[#0b1e34] shadow-2xl shadow-black/40 p-2">
            <img
              src={profileImg}
              alt="Sugashini"
              className="h-72 w-56 md:h-80 md:w-64 rounded-2xl object-cover"
            />
          </div>
        </aside>
      </div>
    </motion.section>
  );
}
