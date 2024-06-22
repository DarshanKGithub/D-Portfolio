import React from "react";
import image from "../assets/image.png";

function Heading() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <div className="absolute top-1/4 left-4 md:left-10 text-white text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="absolute text-6xl  left-0">I'm</span> <br />
          <span className="relative text-red-500">Darshan</span> Kshetri
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-purple-400/100 hover:text-pink-300 cursor-none">
          Software Developer / Frontend Developer
        </p>
      </div>
      <div className="absolute left-5 md:left-10 w-11/12 md:w-3/4 lg:w-1/2 text-white text-xs md:text-sm lg:text-base text-start">
        <p className="relative font-semibold mt-24 hover:text-emerald-600">
          Aspiring web developer with a strong foundation in front-end
          technologies, seeking
          <br /> to leverage my skills in HTML, CSS, JavaScript, and React.js to
          contribute to dynamic
          <br /> web development projects. Eager to learn and grow in a
          collaborative environment
          <br /> while delivering high-quality web solutions.
        </p>
      </div>
      <div className="absolute bottom-2 md:top-2/2 md:right-10 transform md:-translate-y-1/2 drop-shadow-2xl">
        <img
          src={image}
          alt="Darshan KShetri"
          className="w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-72 lg:h-72 object-cover rounded-full"
        />
      </div>
    </div>
  );
}

export default Heading;
