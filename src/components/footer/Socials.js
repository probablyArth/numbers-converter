/* eslint-disable react/jsx-no-target-blank */
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import React from "react";

const Socials = () => {
  return (
    <div className="flex justify-center items-center h-14">
      <a
        href="https://www.instagram.com/probablyarth"
        target={"_blank"}
        className={
          "text-3xl hover:mx-[6px] duration-200 hover:text-5xl ease-in"
        }
      >
        <AiFillInstagram />
      </a>
      <a
        href="https://www.twitter.com/arthWasHere"
        target={"_blank"}
        className={
          "text-3xl hover:mx-[6px] duration-200 hover:text-5xl ease-in"
        }
      >
        <AiFillTwitterCircle />
      </a>
      <a
        href="https://www.linkedin.com/in/probablyarth/"
        target={"_blank"}
        className={
          "text-3xl hover:mx-[6px] duration-200 hover:text-5xl ease-in"
        }
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://www.github.com/probablyarth/"
        target={"_blank"}
        className={
          "text-3xl hover:mx-[6px] duration-200 hover:text-5xl ease-in"
        }
      >
        <AiFillGithub />
      </a>
    </div>
  );
};

export default Socials;
