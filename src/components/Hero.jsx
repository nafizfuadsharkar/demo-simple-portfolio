import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    <span className="text-brand-300 font-semibold">
      {slice}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="pt-14 pb-12 hero-glow">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          Hi, I’m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-200 to-blue-300">
            Md Nafiz Fuad Sharkar
          </span>
        </motion.h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          An Aspiring Software Engineer. I build polished web experiences from UI to APIs. <br />
          <Typing
            strings={["React & Node.js", "MERN stack", "Python & Machine Learning"]}
            speed={60}
          />
        </p>
      </div>
    </section>
  );
}
