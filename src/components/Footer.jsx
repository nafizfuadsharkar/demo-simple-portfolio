import React from "react";
import { Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Md Nafiz Fuad Sharkar • Built with React
          & Tailwind
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in/nafizfuadsharkar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="https://github.com/nafizfuadsharkar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition"
          >
            <Github size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
