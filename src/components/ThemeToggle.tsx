import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevents hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 border rounded"
    >
      {theme === 'light' ? <MdDarkMode color='black'  size={20}/> : <CiLight  size={20}/>}
    </button>
  );
};

export default ThemeToggle;
