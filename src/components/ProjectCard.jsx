import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProjectCard({ p }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="p-6 rounded-2xl bg-gradient-to-br from-[#0b0613] to-[#0b0716] border border-gray-800"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <div className="text-xs text-gray-400">{p.tech.join(" • ")}</div>
      </div>
      <p className="mt-3 text-sm text-gray-300">{p.desc}</p>
      <div className="mt-4 flex gap-3">
        <a
          className="text-sm flex items-center gap-2 hover:underline"
          href={p.live}
          target="_blank"
          rel="noreferrer"
        >
          <FaExternalLinkAlt /> Live
        </a>
        <a
          className="text-sm flex items-center gap-2 hover:underline"
          href={p.repo}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> Repo
        </a>
      </div>
    </motion.div>
  );
}
