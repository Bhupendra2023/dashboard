"use client";

import { FiSearch } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-background  shadow-lg">
      <h1 className="text-lg font-bold text-heading">Overview</h1>
      <ThemeToggle />
    </nav>
  );
}
