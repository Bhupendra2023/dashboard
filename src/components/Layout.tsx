'use client'
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { SYSTEM } from "@/constants";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    if (theme === SYSTEM) {
      setTheme(systemTheme || 'light'); 
    }
  }, [theme, systemTheme, setTheme]);

  return (
    <div className="flex bg-background min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
