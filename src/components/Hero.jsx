import React, { useEffect, useState } from "react";
import profileImg from "../assets/profilepic.jpg";
import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Typing({ strings, speed = 80 }) {
  const [index, setIndex] = useState(0);
  const [slice, setSlice] = useState("");
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const cur = strings[index];
    const id = setInterval(() => {
      setSlice((prev) => {
        if (forward) {
          if (prev.length < cur.length) return cur.slice(0, prev.length + 1);
          setForward(false);
          return prev;
        } else {
          if (prev.length > 0) return prev.slice(0, prev.length - 1);
          setForward(true);
          setIndex((i) => (i + 1) % strings.length);
          return "";
        }
      });
    }, speed);
    return () => clearInterval(id);
  }, [index, strings, forward, speed]);

  return (
    <span className="text-indigo-400 font-semibold">
      {slice}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center pt-20 pb-12 relative overflow-hidden"
      id="home"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-blue-500/10 blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* PROFILE IMAGE */}
        <img
          src={profileImg}
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-indigo-400 shadow-lg object-cover mb-6"
        />

        {/* NAME */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-300 to-blue-300">
            Md Nafiz Fuad Sharkar
          </span>
        </h1>

        {/* TAGLINE */}
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          Aspiring Software Engineer • MERN Stack • Python • Tech Enthusiast
          <br />
          <Typing
            strings={[
              "React & Node.js Developer",
              "MERN Stack Projects",
              "AI + Machine Learning Enthusiast",
            ]}
            speed={60}
          />
        </p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://drive.google.com/uc?export=download&id=13jA9Eb3XkH1kwqz0JeEu4aLTOOJ2sVmK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
          >
            <FaDownload />
            Download Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-indigo-500 text-indigo-500 rounded-xl hover:bg-indigo-500/10 transition transform hover:scale-105"
          >
            Hire Me
          </a>
        </motion.div>

        {/* SOCIAL LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex gap-6"
        >
          {[
            {
              icon: <FaGithub />,
              link: "https://github.com/nafizfuadsharkar",
              label: "GitHub",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/nafizfuadsharkar",
              label: "LinkedIn",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/nfs_ishtu/",
              label: "Instagram",
            },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="text-3xl text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition transform hover:scale-125 border-1 p-2 rounded-xl"
            >
              {item.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
