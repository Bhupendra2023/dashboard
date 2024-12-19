'use client'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
    >
      {currentTheme === 'dark' ? (
        <CiLight
          size={20}
          color='white'
          className="  hover:scale-125 duration-500"
        />
      ) : (
        <MdDarkMode
          size={18}
          color='black'
          className=" fill-textPrimary stroke-textPrimary hover:scale-125 duration-500"
        />
      )}
    </button>
  );
};

export default ThemeToggle;