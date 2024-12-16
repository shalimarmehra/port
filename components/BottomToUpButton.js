"use client";
import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

const BottomToUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`fixed bottom-4 right-4 ${isVisible ? 'block' : 'hidden'}`}>
      <button
        className="relative overflow-hidden text-white bg-black hover:bg-gray-800 font-medium rounded-lg text-sm px-3 py-3 mr-2 mb-2"
        onClick={scrollToTop}
      >
        <span className="relative z-10">
        <FaAngleUp size={20} />
        </span>
        <div className="absolute top-0 left-0 w-full h-full transform translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0"></div>
      </button>
    </div>
  );
};

export default BottomToUpButton;