import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar({ dark, setDark }) {
  return (
    <header className="py-6 sticky top-0 z-30 backdrop-blur bg-white/60 dark:bg-[#060117]/60 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-semibold">
            NF
          </div>
          <div>
            <div className="text-sm font-medium">Md Nafiz Fuad Sharkar</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Aspiring Software Engineer
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6 text-sm text-gray-700 dark:text-gray-300">
            <a href="#about" className="hover:text-brand-300">
              About
            </a>
            <a href="#projects" className="hover:text-brand-300">
              Projects
            </a>
            <a href="#skills" className="hover:text-brand-300">
              Skills
            </a>
            <a href="#contact" className="hover:text-brand-300">
              Contact
            </a>
          </nav>
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-md bg-gray-100 dark:bg-[#0b0613]/60"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </header>
  );
}
