"use client";
import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position and update isVisible state
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollThreshold = 300; // Adjust the threshold as needed

    if (scrollY > scrollThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add event listener for scroll and cleanup on component unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top-button">
          <img src="/assets/icons/arrow-up-solid.svg" alt="go up" />
        </button>
      )}
      {/* The rest of your component */}
    </div>
  );
};

export default ScrollToTopButton;
