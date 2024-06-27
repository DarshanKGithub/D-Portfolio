import React from "react";
import { motion } from "framer-motion";

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
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "JavaScript",
              "React.js",
              "C",
              "HTML & CSS",
              "C++",
              "DSA (Data Structure and Algorithm)",
              "Vite.js",
              "MySQL",
              "Framer Motion",
            ].map((skill, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, color: "#2dd4bf" }}
                className="transition-transform"
              >
                {skill}
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
