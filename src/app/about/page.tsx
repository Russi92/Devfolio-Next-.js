
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPhp,
  FaLaravel,
  FaDatabase,
  FaGithub,
  FaGitAlt,
  FaCogs,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiRedux, SiMui } from "react-icons/si";
import type { IconType } from "react-icons";

type TabType = "frontend" | "backend" | "technical";

export default function About() {
  const [activeTab, setActiveTab] = useState<TabType>("frontend");

  // Skills
  const frontendSkills = [
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: FaJsSquare },
    { name: "JavaScript", icon: FaJsSquare },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap 5", icon: FaBootstrap },
    { name: "Shadcn UI", icon: SiMui },
    { name: "Material UI", icon: SiMui },
    { name: "React Bits", icon: FaReact },
  ];

  const backendSkills = [
    { name: "PHP", icon: FaPhp },
    { name: "Laravel", icon: FaLaravel },
    { name: "MySQL", icon: FaDatabase },
  ];

  const technicalSkills = [
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "REST APIs", icon: FaCogs },
    { name: "Redux.js", icon: SiRedux },
    { name: "OOP", icon: FaCogs },
  ];

  // Function to render cards
  const renderCards = (skills: { name: string; icon: IconType }[]) => (
    <motion.div
      key={activeTab}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md text-center duration-300 ease-in-out 
          hover:-translate-y-2 hover:border-primary hover:shadow-lg"
        >
          <skill.icon className="h-8 w-8 text-primary mb-4 mx-auto" />
          <p className="text-secondary font-medium">{skill.name}</p>
        </div>
      ))}
    </motion.div>
  );

  // Map tabs to cards
  const cards: Record<TabType, React.ReactNode> = {
    frontend: renderCards(frontendSkills),
    backend: renderCards(backendSkills),
    technical: renderCards(technicalSkills),
  };

  return (
    <div className="container max-w-7xl mx-auto py-20">
      <h1 className="text-center text-4xl font-bold">About Me</h1>

      {/* bio section */}
      <section className="mb-16 mt-5">
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          ✨ I am a passionate Full Stack Developer by background, currently
          specializing in Frontend development with React.js and Next.js. Over
          the past 2 years, I have been building modern, scalable, and
          user-centric web applications, with a strong focus on performance and
          clean code. My goal is to deliver impactful digital experiences and
          continuously grow by embracing new technologies and best practices.
        </p>
      </section>

      {/* skills section */}
      <section className="mb-16">
        <h1 className="section-title mb-6 text-center">Skills</h1>

        {/* buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("frontend")}
            className={`px-4 py-2 rounded-lg cursor-pointer font-bold ${
              activeTab === "frontend"
                ? "bg-primary text-white"
                : "bg-gray-200 dark:bg-dark/40"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveTab("backend")}
            className={`px-4 py-2 rounded-lg cursor-pointer font-bold ${
              activeTab === "backend"
                ? "bg-primary text-white"
                : "bg-gray-200 dark:bg-dark/40"
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => setActiveTab("technical")}
            className={`px-4 py-2 rounded-lg cursor-pointer font-bold ${
              activeTab === "technical"
                ? "bg-primary text-white"
                : "bg-gray-200 dark:bg-dark/40"
            }`}
          >
            Technical Skills
          </button>
        </div>

        {/* dynamic title */}
        <h3 className="text-xl font-semibold mb-6 text-center capitalize">
          {activeTab === "frontend"
            ? "Frontend"
            : activeTab === "backend"
            ? "Backend"
            : "Programming Concepts"}
        </h3>

        {/* animated cards */}
        <AnimatePresence mode="wait">{cards[activeTab]}</AnimatePresence>
      </section>

      {/* experience section */}
            <section className="mb-16">
              <h2 className="section-title mb-6 text-center">Experience</h2>

              <div className="max-w-3xl mx-auto space-y-8">
                <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Mid-Level FrontEnd Developer</h3>
                  <p className="text-primary mb-2">Amazing.Sa - Frontend Developer (2023 - Present)</p>
                  <ul className="text-secondary space-y-2 list-disc list-inside">
                    <li>led development of multiple web applications using React and Next.js .</li>
                    <li >Tailwind CSS: Built responsive and modern UIs with utility-first approach,<br />
                      <span className="ps-6">improving development speed and consistency .</span>
                    </li>

                    <li>
                    Applied core programming concepts such as Object-Oriented Programming (OOP),<br />
                    <span className="ps-6">version control (Git/GitHub), and RESTful API integration to build scalable and maintainable</span> <span className="ps-6">applications .</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
      {/* experience section */}

      {/* education section */}
      <section className="mb-16">
              <h2 className="section-title mb-6 text-center">Education</h2>
            
              <div className="max-w-3xl mx-auto space-y-8">
                <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">EGI Academy — Bachelor's in Mass Communication (Graduated 2013)</h3>
                  <p className="text-secondary leading-relaxed">
        Although my academic background is in Mass Communication, I successfully shifted my career into 
        <span className="font-semibold"> Software Development</span>, specializing in 
        <span className="font-semibold"> Frontend Engineering with React.js and Next.js</span>. 
        Over the past years, I have built a strong technical foundation through hands-on projects, 
        self-learning, and real-world experience.
      </p>
                </div>
              </div>
            </section>
      {/* education section */}

    </div>
  );
}




