import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function HireMe() {
  return (
    <section className="py-24 bg-white dark:bg-[#0b0613] relative overflow-hidden rounded-xl">
      {/* Background Glow */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 opacity-20 rounded-full filter blur-3xl animate-blob animation-delay-1500"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 opacity-20 rounded-full filter blur-3xl animate-blob"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Let’s Work Together!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-8 max-w-3xl"
        >
          I’m actively looking for exciting projects and opportunities to
          collaborate. Whether you need a Full Stack Developer, MERN Stack
          projects, or Python-based solutions, I’m ready to bring your ideas to
          life. Let’s create something amazing together!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-center md:justify-start gap-4"
        >
          {/* Resume Button */}
          <a
            href="https://drive.google.com/uc?export=download&id=13jA9Eb3XkH1kwqz0JeEu4aLTOOJ2sVmK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
          >
            <FaDownload />
            Download Resume
          </a>

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-indigo-500 text-indigo-500 rounded-xl hover:bg-indigo-500/10 transition transform hover:scale-105"
          >
            Hire Me
          </a>
        </motion.div>
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
          .animation-delay-1500 {
            animation-delay: 1.5s;
          }
        `}
      </style>
    </section>
  );
}
