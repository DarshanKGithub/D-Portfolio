import React from "react";

function Resume() {
  return (
    <div className="flex justify-center items-center h-screen">
      <a
        href="/Darshan_Kshetri.pdf"
        download
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
      >
        Download Resume
      </a>
    </div>
  );
}

export default Resume;
