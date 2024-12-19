'use client'
import { SidebarItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";



const sidebarItems: SidebarItem[] = [
  { id: 1, icon: 'FaHome', active: false },
  { id: 2, icon: 'FaImages', active: true },
  { id: 3, icon: 'FaLayerGroup', active: false },
  { id: 4, icon: 'FaThLarge', active: false },
  { id: 5, icon: 'FaUserFriends', active: false },
  { id: 6, icon: 'FaEnvelope', active: false },
  { id: 7, icon: 'FaTools', active: false },
  { id: 8, icon: 'FaChartBar', active: false },
];


import * as Icons from "react-icons/ai"; // Import all Ai icons
import * as faIcons from "react-icons/fa"; // Import all Ai icons
import Tabs from "./Tabs";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Define types for the data

interface SidebarSection {
  name: string;
  icon?: string;
  href: string;
  items?: SidebarSection[];
}

interface SidebarData {
  sections: SidebarSection[];
}

const sidebarData: SidebarData = {
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
  const renderFaIcon = (iconName: string) => {
    const Icon = (faIcons as Record<string, React.ElementType>)[iconName];
    return Icon ? <Icon className="text-lg" /> : null;
  };

  const pathname = usePathname()

  const handleToggleSidebar = () => {
    setToggleSidebar((prev) => !prev);
  };


  return (
    <aside className="bg-background shadow-lg flex">
      <div className="w-18  h-full flex  items-center flex-col ">

        <button
          className="px-4 py-6 text-black  rounded-full "
          onClick={handleToggleSidebar}
        >
          {toggleSidebar ? <faIcons.FaTimes size={24} /> : <faIcons.FaBars size={24} />}
        </button>
        <div className="flex flex-col   gap-2 py-4 ">
          {sidebarItems.map((item: any, index: any) => {
            return <div key={item.id}
              className={"flex items-center  hover:scale-[1.05] justify-center p-2 rounded-md text-heading hover:bg-secondary cursor-pointer"}
            >
              {renderFaIcon(item.icon)}
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
            className="pl-10 pr-4 py-2 rounded-lg  bg-primary outline-none"
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
                    className={cn("flex items-center px-4 py-2 hover:bg-secondary rounded", pathname === section.href && 'bg-secondary')}
                  >
                    {renderIcon(section.icon)}
                    {section.name}
                  </a>
                ) : (
                  <div>
                    <div
                      className="flex items-center justify-between px-4 py-2 hover:bg-secondary rounded cursor-pointer"
                      onClick={() => toggleSection(section.name)}
                    >
                      <div className="flex items-center">
                        {renderIcon(section.icon)}
                        {section.name}
                      </div>
                      <span className="text-xl">{openSection === section.name ? "-" : "+"}</span>
                    </div>
                    {openSection === section.name && (
                      <ul className="flex gap-3 flex-col ">
                        {section.items.map((item: any, index: number) => (
                          <li key={item.name} className=" relative">
                            <div
                              className="absolute bottom-0 left-8 top-[-8px]  z-30 transform -translate-x-1/2 w-6 h-8 border-b-2  border-gray-400 rounded-bl-md">
                            </div>
                            {section.items.length - 1 !== index && <div
                              className="absolute bottom-0 left-8 top-[6px] z-30 border-l-2 transform -translate-x-1/2 w-6 h-[69px] border-gray-400 ">
                            </div>}
                            <Link
                              href={item.href}
                              className={cn("flex items-center ml-[60px] p-4 py-2 hover:bg-secondary rounded", pathname === item.href && 'bg-secondary')}
                            >
                              {item.name}
                            </Link>
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
