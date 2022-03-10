import React from "react";

const Heading = ({ children }) => {
  return (
    <h1
      className={
        "text-2xl md:text-4xl py-6 duration-300 ease-in text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
      }
    >
      {children}
    </h1>
  );
};

export default Heading;
