import React from "react";

export default function Loader() {
  return (
    <div className="flex absolute top-0 right-0 justify-center items-center w-full h-screen ">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
