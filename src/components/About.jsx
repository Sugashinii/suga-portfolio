import React from "react";
import { motion } from "framer-motion";

const skillLinks = {
  React: "https://react.dev/",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "Tailwind CSS": "https://tailwindcss.com/",
  HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  Git: "https://git-scm.com/",
  "Node.js (basics)": "https://nodejs.org/",
  "TypeScript (learning)": "https://www.typescriptlang.org/",
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="space-y-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
    >
      <h2 className="text-2xl font-semibold text-slate-50">About me</h2>

      <div className="grid gap-10 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)] items-start">

        <div className="space-y-4 text-base leading-relaxed text-slate-300">
          <p>
            Final‑year Computer Science Engineering student from Tamil Nadu with
            a strong focus on frontend development using React and Tailwind. I
            enjoy turning ideas into fast, accessible interfaces that feel good
            to use.
          </p>

          <p className="text-slate-300">
            Recently, I built an e‑commerce experience for Sugar Cosmetics,
            including a customer storefront and an admin panel. I am currently a
            full‑stack intern at{" "}
            <a
              href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A31139959&keywords=digisailor&origin=RICH_QUERY_TYPEAHEAD_HISTORY"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              DIGISAILOR
            </a>
            , and pursuing B.E. CSE at{" "}
            <a
              href="https://www.linkedin.com/school/psn-college-of-engineering-and-technology/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-emerald-300 hover:text-emerald-200"
            >
              PSN College of Engineering and Technology
            </a>
            .
          </p>

          <div className="pt-2">
            <h3 className="text-sm font-semibold text-slate-100 mb-2">
              Core skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "JavaScript",
                "Tailwind CSS",
                "HTML",
                "CSS",
                "Git",
                "Node.js (basics)",
                "TypeScript (learning)",
              ].map((s) => (
                <a
                  key={s}
                  href={skillLinks[s]}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs px-3 py-1 rounded-full border border-slate-600 bg-[#0a192f] text-slate-100 hover:text-emerald-300 hover:border-emerald-300 transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

    
        <aside className="hidden md:block">
          <div className="rounded-2xl border border-slate-700 bg-[#0b1e34] px-5 py-4 shadow-xl shadow-black/40 text-sm text-slate-200">
            <div className="mb-3 border-b border-slate-700 pb-2">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Status
              </p>
              <p className="mt-1 font-medium text-slate-50">
                Final‑year CSE · Open to frontend roles
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold text-slate-400">
                  Now learning
                </p>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-slate-100">
                    TypeScript
                  </span>
                  <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-slate-100">
                    Node.js
                  </span>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-400">
                  Currently building
                </p>
                <p className="mt-1 text-xs text-slate-200">
                  Sugar Cosmetics e‑commerce UI & admin panel.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-400">
                  Open to
                </p>
                <p className="mt-1 text-xs text-slate-200">
                  Frontend / React developer roles · 2026 graduate.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}
