'use client'
import { SidebarItem } from "@/lib/types";
import {
  FaHome,
  FaImages,
  FaLayerGroup,
  FaThLarge,
  FaUserFriends,
  FaEnvelope,
  FaTools,
  FaChartBar,
  FaInfinity,
} from "react-icons/fa";
import { IconType } from "react-icons";

import { cn } from "@/lib/utils";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";



const sidebarItems: SidebarItem[] = [
  { id: 1, icon: FaHome, active: false },
  { id: 2, icon: FaImages, active: true },
  { id: 3, icon: FaLayerGroup, active: false },
  { id: 4, icon: FaThLarge, active: false },
  { id: 5, icon: FaUserFriends, active: false },
  { id: 6, icon: FaEnvelope, active: false },
  { id: 7, icon: FaTools, active: false },
  { id: 8, icon: FaChartBar, active: false },
  { id: 9, icon: FaInfinity, active: false },
];


import * as Icons from "react-icons/ai"; // Import all Ai icons
import Tabs from "./Tabs";

// Define types for the data

interface SidebarSection {
  name: string;
  icon?: string;
  href: string;
  items?: SidebarItem[];
}

interface SidebarData {
  sections: SidebarSection[];
}

const sidebarData: any = {
  sections: [
    { name: "Home", icon: "AiOutlineHome", href: "/home" },
    { name: "Dashboard", icon: "AiOutlineDashboard", href: "/dashboard" },
    { name: "Projects", icon: "AiOutlineFolder", href: "/projects" },
    { name: "Tasks", icon: "AiOutlineCheckSquare", href: "/tasks" },
    {
      name: "Settings",
      icon: "AiOutlineSetting",
      href: "/settings",
      items: [
        { name: "My details", icon: "AiOutlineUser", href: "/settings/my-details" },
        { name: "My profile", icon: "AiOutlineUserSwitch", href: "/settings/my-profile" },
        { name: "Security", icon: "AiOutlineLock", href: "/settings/security" },
        { name: "Integrations", icon: "AiOutlineAppstore", href: "/settings/integrations" },
        { name: "Billing", icon: "AiOutlineCreditCard", href: "/settings/billing" },
      ],
    },
  ],
};

export default function Sidebar() {

  const [openSection, setOpenSection] = useState<string | null>(null);

  const [toggleSidebar, setToggleSidebar] = useState(false)

  const toggleSection = (sectionName: string) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  const renderIcon = (iconName: string) => {
    const Icon = (Icons as Record<string, React.ElementType>)[iconName];
    return Icon ? <Icon className="text-lg mr-2" /> : null;
  };

  return (
    <aside className="bg-background shadow-lg flex  gap-3 ">
      <div className="w-20 border-[#333] border-r-[1px] h-full">
        <div className="px-4 py-6" onClick={() => setToggleSidebar((prev) => prev = !prev)}>Icon</div>
        <div className="flex gap-2 flex-col  px-4 py-4">
          {sidebarItems.map((item: any, index: any) => {
            return <div key={item.id}
              className={cn("flex items-center  p-2 rounded-md text-heading hover:bg-gray-200 cursor-pointer")}
            >
              <item.icon className="h-6 w-6 cursor-pointer hover:bg-gray-400 rounded-sm" />
            </div>
          })}
        </div>
      </div>


      <div className={cn(
        "shadow-lg",
        toggleSidebar ? "hidden w-0" : "w-80",
        "transition-all duration-500 py-6 px-4"
      )}>
        <h2 className="text-heading">OverView</h2>
        <div className="relative w-52 my-6">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-lg  outline-none"
          />
          <FiSearch className="absolute left-3 top-3 text-heading" />
        </div>

        <Tabs
          defaultActiveTab="myAccount"
          tabs={[
            { name: "myAccount", label: "My account" },
            { name: "sharedWithMe", label: "Shared with me" },
          ]}
        />

        <div className="mt-4 text-heading">
          <ul>
            {sidebarData.sections.map((section: any) => (
              <li key={section.name} className="mb-2">
                {!section.items ? (
                  <a
                    href={section.href}
                    className="flex items-center px-4 py-2 hover:bg-primary rounded"
                  >
                    {renderIcon(section.icon)}
                    {section.name}
                  </a>
                ) : (
                  <div>
                    <div
                      className="flex items-center justify-between px-4 py-2 hover:bg-primary rounded cursor-pointer"
                      onClick={() => toggleSection(section.name)}
                    >
                      <div className="flex items-center">
                        {renderIcon(section.icon)}
                        {section.name}
                      </div>
                      <span className="text-xl">{openSection === section.name ? "-" : "+"}</span>
                    </div>
                    {openSection === section.name && (
                      <ul className="ml-4 mt-2 ">
                        {section.items.map((item: any) => (
                          <li key={item.name} className="border-l  relative">
                            <div
                              className="absolute bottom-0 left-3 top-[-4px] transform -translate-x-1/2 w-6 h-6 border-b-2  border-gray-400 rounded-bl-md">
                            </div>
                            <a
                              href={item.href}
                              className="flex items-center pl-10 pr-4 py-2 hover:bg-gray-700 rounded"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
