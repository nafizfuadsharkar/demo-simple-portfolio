import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "ToyTopia (ToyKids)",
    desc: "Local toy marketplace with Firebase auth, protected routes, and responsive UI.",
    tech: ["React", "Firebase", "Tailwind", "Swiper"],
    live: "https://toykids-react-firebase.web.app/",
    repo: "https://github.com/nafizfuadsharkar/ToyKids-using-React-and-Firebase",
  },
  {
    title: "IMEX — Import & Export",
    desc: "Import-Export management system with product tracking, imports/exports flow and authentication.",
    tech: ["React", "Node", "MongoDB", "Tailwind"],
    live: "https://imex-port-nafiz.netlify.app/",
    repo: "https://github.com/nafizfuadsharkar/import-export-client",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="max-w-6xl mx-auto" data-aos="zoom-in">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
