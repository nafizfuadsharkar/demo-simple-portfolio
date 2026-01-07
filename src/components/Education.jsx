import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "BRAC University, Bangladesh",
    duration: "2021 - Present",
  },
  {
    degree: "Higher Secondary Certificate (HSC) – Science",
    institution: "Milestone College, Dhaka",
    duration: "2017 - 2019",
  },
  {
    degree: "Secondary School Certificate (SSC) – Science",
    institution: "Shankuchail High School, Cumilla",
    duration: "2015 - 2017",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 mt-10 bg-slate-50 dark:bg-[#0b0613] rounded-xl">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

        <div className="relative border-l-2 border-indigo-500 dark:border-indigo-400 ml-4">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-10 ml-6 relative"
            >
              {/* Dot */}
              <span className="absolute -left-5 top-0 w-4 h-4 rounded-full bg-indigo-500 dark:bg-indigo-400 border-2 border-white dark:border-gray-900"></span>

              {/* Content */}
              <div className="p-4 bg-white dark:bg-[#1c0c3c] rounded-xl shadow-md hover:shadow-xl transition">
                <div className="flex items-center gap-3 mb-1 text-indigo-500 dark:text-indigo-400">
                  <FaGraduationCap />
                  <h3 className="font-semibold text-lg">{edu.degree}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {edu.institution}
                </p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {edu.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
