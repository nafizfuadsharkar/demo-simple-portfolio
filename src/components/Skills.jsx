import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
  SiPostman,
  SiVisualstudiocode,
  SiC,
  SiNextdotjs,
} from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";

const skills = [
  // Programming Languages
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "C", icon: <SiC /> },

  // Frontend
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS (Tailwind)", icon: <TbBrandTailwind /> },
  { name: "React.js", icon: <FaReact /> },

  // Backend
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },

  // Database
  { name: "MongoDB (Atlas)", icon: <SiMongodb /> },

  // Authentication
  { name: "Firebase Auth", icon: <SiFirebase /> },
  { name: "JWT", icon: <SiJsonwebtokens /> },

  // Tools
  { name: "Git/GitHub", icon: <FaGitAlt /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "VS Code", icon: <SiVisualstudiocode /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-14">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {skills.map((s) => (
            <div
              key={s.name}
              className="p-5 bg-white/5 dark:bg-white/10 border border-gray-700/40 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.03] transition cursor-pointer text-center"
            >
              <div className="text-3xl mb-3 text-blue-400 flex items-center justify-center">
                {s.icon}
              </div>
              <div className="text-sm font-medium dark:text-gray-200">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
