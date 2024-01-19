"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Write = () => {
  return (
    <div>
      {" "}
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Web Developer",
          1000,
          "Mobile Developer",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "UI/UX Designer",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default Write;
