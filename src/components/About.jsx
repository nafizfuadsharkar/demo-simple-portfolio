import React from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className=" my-2 py-24 bg-slate-50 dark:bg-[#0b0613] relative overflow-hidden rounded-xl"
    >
      {/* Background Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-500 opacity-10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-500 opacity-10 rounded-full filter blur-3xl animate-blob"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center md:text-left z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-6 max-w-4xl leading-relaxed"
        >
          Hi! I’m <span className="font-semibold text-indigo-600 dark:text-purple-400">Md Nafiz Fuad Sharkar</span>, an aspiring
          Software Engineer specializing in <span className="font-semibold text-indigo-600 dark:text-purple-400">web development</span> using the <span className="font-semibold text-indigo-600 dark:text-purple-400">MERN stack</span>. I also work with <span className="text-indigo-600 dark:text-purple-400">Python</span> and have recently started exploring the exciting world of <span className="text-indigo-600 dark:text-purple-400">AI and Machine Learning </span> to bring intelligent features to my projects.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-6 max-w-4xl leading-relaxed"
        >
          I love working on tech-related projects that challenge me and help me grow as a developer. My focus is on creating modern, responsive, and user-friendly web applications that solve real-world problems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-6 max-w-4xl leading-relaxed"
        >
          Outside of coding, I am passionate about <span className="font-semibold">photography</span> and love capturing moments through my lens. Exploring new technologies and combining creativity with code is something I truly enjoy.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-4xl leading-relaxed"
        >
          I would describe myself as <span className="font-semibold text-indigo-500 dark:text-purple-400">curious, passionate, and driven</span>. I enjoy collaborating with others, learning new skills, and building projects that make a positive impact.
        </motion.p>
      </div>

      {/* Blob animation keyframes */}
      <style>
        {`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 8s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}
      </style>
    </section>
  );
}
