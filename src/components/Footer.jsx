import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center py-4">
      <p className="text-sm">
        © {new Date().getFullYear()} All Rights Reserved | Developed by{" "}
        <span className="text-red-500 font-semibold">Dipak Kumar Sinha</span>
      </p>
    </footer>
  );
};

export default Footer;
