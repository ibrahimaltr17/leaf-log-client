import React, { useEffect, useState } from 'react';
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={handleToggle}
      className="text-2xl p-2 rounded-full transition-colors duration-300 bg-gray-200 dark:bg-gray-700 text-yellow-500 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? <IoSunnyOutline /> : <FaRegMoon />}
    </button>
  );
};

export default ThemeToggle;
