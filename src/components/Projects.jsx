import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Sugar Cosmetics · UI & Admin",
    description:
      "Multi‑page e‑commerce UI with product catalog, cart, and an admin panel with CRUD workflows; extending with full‑stack features.",
    tech: "React · Vite · Tailwind · shadcn/ui · React Router",
    live: "https://sugar-cosmetics-amyw.vercel.app/",
    code: "https://github.com/Sugashinii/sugar-cosmetics",
  },
  {
    title: "Mini JavaScript Apps",
    description:
      "Todo, email verification, calculator, and palindrome checker showcasing DOM work, validation, and problem‑solving.",
    tech: "HTML · CSS · JavaScript",
    live: "",
    code: "https://github.com/Sugashinii/Web-development",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="space-y-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
    >
      <h2 className="text-2xl font-semibold text-slate-50">Projects</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="flex flex-col justify-between rounded-2xl border border-slate-700 bg-[#0b1e34] p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition"
          >
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-slate-50">
                {p.title}
              </h3>
              <p className="text-base text-slate-200">{p.description}</p>
              <p className="mt-1 text-xs font-medium text-slate-400">
                {p.tech}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-300 font-medium hover:underline"
                >
                  Live
                </a>
              )}
              {p.code && (
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-200 hover:underline"
                >
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
