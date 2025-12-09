import React, { useEffect, useState } from "react";
import profileImg from "../assets/profilepic.jpg"

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
    <section className="min-h-screen flex items-center pt-20 pb-12 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-blue-500/10 blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">

        {/* PROFILE IMAGE */}
        <img
          src= {profileImg || "https://avatars.githubusercontent.com/u/000000?v=4"}
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
          Aspiring Software Engineer • MERN Stack • Python • Tech Enthusiast <br />
          <Typing
            strings={[
              "React & Node.js Developer",
              "MERN Stack Projects",
              "AI + Machine Learning Enthusiast",
            ]}
            speed={60}
          />
        </p>

        {/* BUTTONS */}
        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
