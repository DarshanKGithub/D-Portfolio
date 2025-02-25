import React from "react";

function Resume() {
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center bg-fixed backdrop-blur-sm">
      <a
        href="/Darshan_Kshetri_Resume.pdf"
        download
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
      >
        Download Resume
      </a>
    </div>
  );
}

export default Resume;
