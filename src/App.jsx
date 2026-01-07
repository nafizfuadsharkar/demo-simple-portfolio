import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import HireMe from "./components/HireMe";
import SectionWrapper from "./components/SectionWrapper";

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("dark");
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-[#05010b] dark:to-[#07030b] transition-colors duration-500">
      <Navbar dark={dark} setDark={setDark} />

      <main className="max-w-6xl mx-auto px-6 md:px-8">
        {/* 1. Hero */}
        <Hero />

        {/* 2. About */}
        <SectionWrapper>
          <About />
        </SectionWrapper>

        {/* 3. Skills */}
        <SectionWrapper delay={0.1}>
          <Skills />
        </SectionWrapper>

        {/* 4. Projects */}
        <SectionWrapper delay={0.15}>
          <Projects />
        </SectionWrapper>

        {/* 5. Education */}
        <SectionWrapper delay={0.2}>
          <Education />
        </SectionWrapper>

        {/* 6. Hire Me (Resume CTA) */}
        <SectionWrapper delay={0.25}>
          <HireMe />
        </SectionWrapper>

        {/* 7. Contact */}
        <SectionWrapper delay={0.3}>
          <Contact />
        </SectionWrapper>
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
