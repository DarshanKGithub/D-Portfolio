import React from "react";
import { motion } from "framer-motion";
// import image from "../assets/image.png";

function Heading() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-fixed backdrop-blur-sm">
      <motion.div
        className="absolute top-1/4 left-4 md:left-10 text-white text-center md:text-left"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl  font-bold">
          <span className="absolute text-6xl left-0">Hey, I'm</span> <br />
          <span className="relative text-red-500">Darshan</span> Kshetri
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-purple-400/100 hover:text-pink-300 cursor-none">
          Software Developer / Frontend Developer
        </p>
      </motion.div>
      <motion.div
        className="absolute left-5 md:left-10 w-11/12 md:w-3/4 lg:w-1/2 text-white text-xs md:text-sm lg:text-base text-start"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="relative font-semibold -mt-28 md:mt-28 lg:mt-28 hover:text-emerald-600">
          Aspiring web developer with a strong foundation in front-end
          technologies, seeking
          <br className="hidden md:block" /> to leverage my skills in HTML, CSS,
          JavaScript, and React.js to contribute to dynamic
          <br className="hidden md:block" /> web development projects. Eager to
          learn and grow in a collaborative environment
          <br className="hidden md:block" /> while delivering high-quality web
          solutions.
        </p>
      </motion.div>
      {/* <motion.div
        className="absolute h-72 bottom-48 md:top-1/2 md:right-10 transform md:-translate-y-1/2 drop-shadow-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <img
          src={image}
          alt="Darshan Kshetri"
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-52 md:h-56 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover rounded-full"
        />
      </motion.div> */}
    </div>
  );
}

export default Heading;
