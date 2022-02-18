import React from "react";

export default function MailingList() {
  return (
    <div className="py-8 text-center md:py-24 primary-bg">
      <h2 className="sub_header text-white font-extrabold px-6 mb-3.5 md:mb-16">
        Sign-up to our mailing list.
      </h2>
      <div className="md:w-1/2 w-4/5 mx-auto flex flex-col">
        <form className="text-center md:text-left order-2 md:order-1">
          <div className="flex justify-center items-center mt-8 md:mt-0 flex-wrap gap-y-4 gap-x-2">
            <input
              className="py-1.5 md:py-3.5 px-2 md:px-4 font-extrabold text-white text-base bg-transparent flex-grow border outline-none rounded-lg"
              placeholder="Your Email Address"
              type="text"
            />
            <button
              type="submit"
              className="bg-white text-center cursor-pointer text-sm  font-extrabold primary-color md:leading-5 md:px-8 md:py-4 md:ml-4 md:text-base whitespace-nowrap px-4 py-2 md:mt-0 rounded-lg"
            >
              Join Now!
            </button>
          </div>
        </form>
        <p className="text-xs md:text-sm text-white md:mt-5 order-1 md:order-2">
          Join our mailing list to stay updated about our latest articles.
        </p>
      </div>
    </div>
  );
}
