import React from "react";

export default function ProjectCard({ project }){
  return (
    <article className="p-5 border rounded-lg hover:shadow-lg transition-shadow">
      <h3 className="font-semibold text-lg">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{project.desc}</p>
      <div className="mt-3 text-xs text-slate-700">{project.tech.join(" • ")}</div>

      <div className="mt-4 flex gap-3">
        {project.live && <a href={project.live} className="text-sm underline">Live</a>}
        {project.repo && <a href={project.repo} className="text-sm underline">Code</a>}
      </div>
    </article>
  );
}
