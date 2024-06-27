import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 50 },
  { name: "React.js", level: 85 },
  { name: "C", level: 75 },
  { name: "HTML & CSS", level: 95 },
  { name: "C++", level: 50 },
  { name: "DSA (Data Structure and Algorithm)", level:  30},
  { name: "Vite.js", level: 60 },
  { name: "MySQL", level: 65 },
  { name: "Framer Motion", level: 50 },
];

function About() {
  return (
    <div className="w-full min-h-screen bg-cover bg-center bg-fixed backdrop-blur-sm p-4 md:p-8 text-white flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold mb-8 text-red-600 border border-x-transparent border-yellow-400"
      >
        About Me
      </motion.h1>

      <div className="w-full max-w-4xl">
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 border-b-2 border-teal-400 text-cyan-500 pb-2">
            My Skills
          </h2>
          <ul className="space-y-4">
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, color: "#2dd4bf" }}
                className="transition-transform"
              >
                <div className="flex justify-between items-center mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.5 }}
                    className="h-2.5 rounded-full bg-teal-400"
                  ></motion.div>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 border-b-2 border-teal-400 pb-2 text-cyan-500">
            Education
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {[
              "SSC - Cygnet Public School - 2018",
              "HSC - Excellence Science Academy - 2020",
              "Bachelor's Degree in Computer Science - Vidya Parithsthan's Arts, Commerce and Science - 2023",
              "Master's Degree in Scientific Computing - Savitribai Phule Pune University - Pursuing",
            ].map((education, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, color: "#2dd4bf" }}
                className="transition-transform"
              >
                {education}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 border-b-2 border-teal-400 pb-2 text-cyan-500">
            Hobbies
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {["Riding", "Trekking", "Photography", "Coding"].map(
              (hobby, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1, color: "#2dd4bf" }}
                  className="transition-transform"
                >
                  {hobby}
                </motion.li>
              )
            )}
            <motion.li
              whileHover={{ scale: 1.1, color: "#2dd4bf" }}
              className="transition-transform"
            >
              <a
                href="https://www.youtube.com/@darshankshetri1377"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-colors"
              >
                Playing Guitar
              </a>
            </motion.li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
}

export default About;
