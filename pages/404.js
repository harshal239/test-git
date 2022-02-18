import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="px-6 pt-8 pb-11 md:pt-20 md:pb-16 text-center">
      <p className="text-2xl">Oooops....</p>
      <div className="font-extrabold header-color cont_header my-3 md:text-6xl md:mb-7 ">
        <h2 className="primary-color">Page Not found</h2>
      </div>

      <Link href="/">
        <a className="mt-7 md:mt-16 text-sm md:text-lg font-bold">
          Back to Home Page
        </a>
      </Link>
    </div>
  );
}
