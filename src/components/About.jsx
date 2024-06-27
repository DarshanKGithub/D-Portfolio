import React from "react";

function About() {
  return (
    <div className="w-full min-h-screen bg-[url('./assets/bg1.avif')] bg-cover bg-center bg-fixed backdrop-blur-lg p-8 text-white flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-red-600 border border-x-transparent border-yellow-400">About Me</h1>

      <div className="w-full max-w-4xl">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-teal-400 text-cyan-500 pb-2">
            My Skills
          </h2>
          <ul className="grid grid-cols-2 gap-4">
            <li className="hover:text-teal-400 transition-colors">JavaScript</li>
            <li className="hover:text-teal-400 transition-colors">React.js</li>
            <li className="hover:text-teal-400 transition-colors">C</li>
            <li className="hover:text-teal-400 transition-colors">HTML & CSS</li>
            <li className="hover:text-teal-400 transition-colors">C++</li>
            <li className="hover:text-teal-400 transition-colors">
              DSA (Data Structure and Algorithm)
            </li>
            <li className="hover:text-teal-400 transition-colors">Vite.js</li>
            <li className="hover:text-teal-400 transition-colors">MySQL</li>
            <li className="hover:text-teal-400 transition-colors">Frame Motion</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-teal-400 pb-2  text-cyan-500">
            Education
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="hover:text-teal-400 transition-colors">SSC - Cygnet Public School - 2018</li>
            <li className="hover:text-teal-400 transition-colors">HSC - Excellence Science Academy - 2020</li>
            <li className="hover:text-teal-400 transition-colors">
              Bachelor's Degree in Computer Science - Vidya Parithsthan's Arts,
              Commerce and Science - 2023
            </li>
            <li className="hover:text-teal-400 transition-colors">
              Master's Degree in Scientific Computing - Savitribai Phule Pune
              University - Pursuing
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-teal-400 pb-2  text-cyan-500">
            Hobbies
          </h2>
          <ul className="grid grid-cols-2 gap-4">
            <li className="hover:text-teal-400 transition-colors">Riding</li>
            <li className="hover:text-teal-400 transition-colors">Trekking</li>
            <li className="hover:text-teal-400 transition-colors">Photography</li>
            <li className="hover:text-teal-400 transition-colors">Coding</li>
            <li className="hover:text-teal-400 transition-colors">
              <a
                href="https://www.youtube.com/@darshankshetri1377"
                className="hover:text-teal-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Playing Guitar
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
