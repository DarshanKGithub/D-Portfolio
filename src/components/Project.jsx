import React from "react";
import image1 from "../assets/E-localhood.png"

// Example project data array
const projects = [
  {
    id: 1,
    title: "E-Localhood - Your Business Our Priority",
    description:
      "E-Localhood is the e-commerce website containing Customer, Seller & Service Provider. The main motive of working on this is to give small business a platform to grow there business. The Main motive of this is to help small business and local shops to grow their RR (Reach and Revenue) with the help of this website.",
    technology: "Technology: React, JavaScript, HTML, CSS, Axios, Figma",
    image: image1,
    github:"https://github.com/DarshanKGithub/E-Localhood---Customer-Module"
  },
  
  
  // Add more projects as needed
];

function Project() {
  return (
    <div className="bg-slate-900 min-h-screen p-5">
      <div className=" flex justify-center  h-2 w-full">
        <h1 className="text-white font-semibold text-3xl mt-2 hover:text-purple-300">
          Projects
        </h1>
      </div>
      <div className="mt-20 space-y-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-center md:flex-row md:items-start md:space-x-10 bg-gray-800 p-5 rounded-lg shadow-md"
          >
            <img
              src={project.image}
              className="w-full md:w-4/6 h-auto rounded-lg"
            />
            <div className="text-white mt-5 md:mt-0">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p className="mt-4">{project.description}</p>
              <p className="mt-2">{project.technology }</p>
              <a className="text-blue-800/75 underline" href="https://github.com/DarshanKGithub/E-Localhood---Customer-Module">https://github.com/DarshanKGithub/E-Localhood---Customer-Module</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
