import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary w-full text-white text-center py-4">
      <p className="text-sm">
        © {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
