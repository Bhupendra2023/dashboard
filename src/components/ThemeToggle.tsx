'use client'
import { DARK, LIGHT, SYSTEM } from '@/constants';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === SYSTEM ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === DARK ? LIGHT : DARK)}
    >
      {currentTheme === DARK ? (
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