import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="que-card px-9 max-w-6xl mx-auto mb-7 cursor-pointer">
      <div
        className="py-6 items-center flex justify-between"
        onClick={() => setIsActive(!isActive)}
      >
        <p className="text-lg leading-6">{title}</p>
        <img
          className={`chevron ${isActive ? "rotate-180" : ""}`}
          src="/images/chevron.svg"
          alt=""
        />
      </div>
      {isActive && (
        <div className="transition ease-out">
          <p className="text-sm gray-text md:text-xl py-11 transition ease-out">
            {content}
          </p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
