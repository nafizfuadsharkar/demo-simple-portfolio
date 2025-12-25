import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProjectCard({ p }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="
        group rounded-2xl overflow-hidden
        bg-white/80 dark:bg-[#0b0613]
        border border-gray-200 dark:border-gray-800
        shadow-md hover:shadow-xl
        transition
      "
    >
      {/* IMAGE */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={p.photoURL}
          alt={p.title}
          className="
            w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-110
          "
        />

        {/* IMAGE OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-black/70 via-black/20 to-transparent
            opacity-0 group-hover:opacity-100
            transition
          "
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {p.title}
          </h3>

          <span className="text-xs text-gray-500 dark:text-gray-400">
            {p.tech.join(" • ")}
          </span>
        </div>

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
          {p.desc}
        </p>

        {/* ACTIONS */}
        <div className="mt-5 flex gap-4">
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2 text-sm font-medium
              text-indigo-600 dark:text-indigo-400
              hover:underline
            "
          >
            <FaExternalLinkAlt />
            Live
          </a>

          <a
            href={p.repo}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2 text-sm font-medium
              text-gray-700 dark:text-gray-300
              hover:underline
            "
          >
            <FaGithub />
            Repo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
