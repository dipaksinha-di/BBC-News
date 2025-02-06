import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // React Icons for the scroll-to-top button

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  // Show button when scroll position is greater than 300px
  const checkScrollTop = () => {
    if (!showButton && window.pageYOffset > 300) {
      setShowButton(true);
    } else if (showButton && window.pageYOffset <= 300) {
      setShowButton(false);
    }
  };

  // Scroll the page to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add event listener to monitor scroll position
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showButton]);

  return (
    <div>
      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-15 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-100 transition duration-300"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
