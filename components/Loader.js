import React from "react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"></div>
    </div>
  );
}
