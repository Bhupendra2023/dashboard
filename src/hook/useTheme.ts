"use client";

import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState<string>(() => {
    // Check localStorage for theme preference
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark"; // Fallback to "light"
    }
    return "light";
  });

  useEffect(() => {
    // Apply the theme to the document's `data-theme` attribute
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Persist the theme in localStorage
  };

  return { theme, toggleTheme };
}
