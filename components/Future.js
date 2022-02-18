import React, { useState, useEffect } from "react";

export default function Future() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setActive(!active);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [active]);
  return (
    <div className="px-6 pt-8 pb-11 md:pt-20 md:pb-16 text-center">
      <div>
        <div className="font-extrabold header-color cont_header mb-3 md:text-6xl md:mb-7 overflow-hidden lg-dynamic-text">
          <h2>Crafting the Future of</h2>
          <span className={`secondary-color ${active ? "text-in" : ""}`}>
            Automotive
          </span>
          <span className={`secondary-color ${!active ? "text-in" : ""} `}>
            Sport
          </span>
        </div>
      </div>
      <div className="text-xs md:text-xl gray-text dynamic-text mx-auto overflow-hidden">
        <p className="inline-block mr-2">impacting through </p>
        <span
          className={`text-sm md:text-2xl font-bold secondary-color ${
            active ? "text-in" : ""
          }`}
        >
          Fiat Automobiles
        </span>
        <span
          className={`text-sm md:text-2xl font-bold secondary-color ${
            !active ? "text-in" : ""
          }`}
        >
          SFA Sporting Services
        </span>
      </div>
      <p className="mt-7 md:mt-16 text-sm md:text-lg">
        Providing industry-fitting solutions for clients. Creating a positive
        impact on the market.
      </p>
    </div>
  );
}
