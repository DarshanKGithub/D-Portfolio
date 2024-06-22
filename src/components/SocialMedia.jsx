import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function SocialMedia() {
  return (
    <div className=" flex mx-8 justify-end mt-[-36px] space-x-5  text-white ">
      <a
        className="hover:text-red-900"
        href="https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1"
      >
        <FaInstagram />
      </a>
      <a
        className="hover:text-red-900"
        href="https://github.com/DarshanKGithub"
      >
        <FaGithub />
      </a>
      <a
        className="hover:text-red-900"
        href="https://www.linkedin.com/in/darshan-kshetri-6a1b12253/"
      >
        <FaLinkedin />
      </a>
      <a className="hover:text-red-900" href="https://x.com/DarshanKshetri3">
        <FaSquareXTwitter />
      </a>
    </div>
  );
}

export default SocialMedia;
