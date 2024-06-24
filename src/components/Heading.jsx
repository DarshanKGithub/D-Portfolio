import React from "react";
import image from "../assets/image.png";

function Heading() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <div className="absolute top-1/4 left-4 md:left-10 text-white text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="absolute text-6xl left-0">I'm</span> <br />
          <span className="relative text-red-500">Darshan</span> Kshetri
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-purple-400/100 hover:text-pink-300 cursor-none">
          Software Developer / Frontend Developer
        </p>
      </div>
      <div className="absolute left-5 md:left-10 w-11/12 md:w-3/4 lg:w-1/2 text-white text-xs md:text-sm lg:text-base text-start">
        <p className="relative font-semibold mt-24 md:mt-16 lg:mt-24 hover:text-emerald-600">
          Aspiring web developer with a strong foundation in front-end
          technologies, seeking
          <br className="hidden md:block" /> to leverage my skills in HTML, CSS,
          JavaScript, and React.js to contribute to dynamic
          <br className="hidden md:block" /> web development projects. Eager to
          learn and grow in a collaborative environment
          <br className="hidden md:block" /> while delivering high-quality web
          solutions.
        </p>
      </div>
      <div className="absolute bottom-2 md:top-1/2 md:right-10 transform md:-translate-y-1/2 drop-shadow-2xl">
        <img
          src={image}
          alt="Darshan KShetri"
          className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover rounded-full"
        />
      </div>
    </div>
  );
}

export default Heading;
