import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/E-localhood.png";
import image2 from "../assets/Bg3.png";
import Hotel from "../assets/Hotel.png";

// Example project data array
const projects = [
  {
    id: 1,
    title: "E-Localhood - Your Business Our Priority",
    description:
      "E-Localhood is the e-commerce website containing Customer, Seller & Service Provider. The main motive of working on this is to give small business a platform to grow there business. The Main motive of this is to help small business and local shops to grow their RR (Reach and Revenue) with the help of this website.",
    technology: "Technology: React, JavaScript, HTML, CSS, Axios, Figma",
    image: image1,
    github: "https://github.com/DarshanKGithub/E-Localhood---Customer-Module",
  },
  {
    id: 2,
    title: "D-Portfolio",
    description:
      "A portfolio is a compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences. It provides insight into your personality and work ethic.",
    technology:
      "Technology: Reactjs, Vite.js, TailwindCss, JavaScript, HTML, CSS,",
    image: image2,
    github: "https://github.com/DarshanKGithub/D-Portfolio",
  },
  {
    id:3,
    title:"Hotel-Management-System",
    description:"I've built a fully responsive Hotel Management website using Vite.js, React.js, Tailwind CSS, and Node.js. The project features a seamless user experience across devices, with fast performance and dynamic functionality. Check it out! #WebDevelopment #ReactJS #TailwindCSS #NodeJS",
    technology:"Technology: ViteJs, ReactJs, Javascipt, HTML, Tailwind, NodeJs",
    image:Hotel,
    github:"https://github.com/DarshanKGithub/HotelManagement-iConsile"
  }

  // Add more projects as needed
];

function Projects() {
  return (
    <div className="w-full min-h-screen bg-[url('../assets/bg1.avif')] bg-cover bg-center bg-fixed backdrop-blur-lg p-5">
      <div className="flex justify-center h-2 w-full">
        <h1 className="font-semibold text-3xl mt-2 hover:text-purple-300 text-red-600 underline underline-offset-5">
          Projects
        </h1>
      </div>
      <div className="mt-20 space-y-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="flex flex-col items-center md:flex-row md:items-start md:space-x-10 bg-gray-800/75 p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full md:w-4/6 h-auto rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="text-white mt-5 md:mt-0">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p className="mt-4">{project.description}</p>
              <p className="mt-2">{project.technology}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800/75 underline hover:text-blue-400"
              >
                <p>{project.github}</p>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
