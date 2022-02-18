import React from "react";

export default function GetInTouch({ variant }) {
  return (
    <div
      className={`py-8 text-center md:py-24 ${
        variant === "home" ? "primary-color" : "text-white primary-bg"
      }`}
    >
      <p className={`text-sm mb-4 md:mb-6 md:text-4xl md:font-bold `}>
        Looking for Brilliance?
      </p>
      <h2 className={`sub_header font-extrabold px-6 mb-8 md:mb-16`}>
        Let's craft solutions just in time
      </h2>
      <a
        href="./pages/contact.html"
        className={`cursor-pointer text-2xl rounded-2xl font-extrabold pt-4 px-14 pb-5 border ${
          variant === "home" ? "border-[#0038ff]" : "border-white"
        }`}
      >
        Get in touch
      </a>
    </div>
  );
}
