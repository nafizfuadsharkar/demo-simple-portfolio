import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaPython } from "react-icons/fa";

const skills = [
  { name: "React.js", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <FaDatabase /> },
  { name: "Python", icon: <FaPython /> },
  {
    name: "Tailwind CSS",
    icon: <span className="text-sm font-semibold">TW</span>,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <div className="max-w-5xl mx-auto" data-aos="fade-left">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skills.map((s) => (
            <div
              key={s.name}
              className="p-4 bg-white/5 dark:bg-white/3 border border-gray-800 rounded-lg text-center"
            >
              <div className="text-2xl mb-2 text-brand-300 flex items-center justify-center">
                {s.icon}
              </div>
              <div className="text-sm">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
