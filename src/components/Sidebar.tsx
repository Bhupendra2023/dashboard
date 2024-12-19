'use client';
import { SidebarToggleProps } from '@/lib/types';
import { cn } from '@/lib/utils';
import { FiSearch } from 'react-icons/fi';
import { useState, ReactElement } from 'react';
import * as faIcons from 'react-icons/fa';
import { BsSnapchat } from "react-icons/bs";
import { BsChat } from "react-icons/bs";
import Tabs from './Tabs';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import clsx from 'clsx';
import { DARK, sidebarData, sidebarItems } from '@/constants';
import { SidebarItemIcon, SidebarSection } from './SidebarSection';
import Image from 'next/image';


const SidebarToggle = ({ toggleSidebar, handleToggleSidebar, theme }: SidebarToggleProps): ReactElement => (
  <button
    className={clsx(
      'px-4 py-6 rounded-full transition-all',
      theme === DARK ? 'text-white' : 'text-black'
    )}
    onClick={handleToggleSidebar}
  >
    {toggleSidebar ? <faIcons.FaTimes size={24} /> : <faIcons.FaBars size={24} />}
  </button>
);

export default function Sidebar(): ReactElement {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const toggleSection = (sectionName: string): void => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  const pathname = usePathname();
  const { theme } = useTheme();

  const handleToggleSidebar = (): void => {
    setToggleSidebar((prev) => !prev);
  };

  return (
    <aside className="bg-background shadow-lg flex">
      <div className="w-18 h-full flex items-center flex-col">
        <SidebarToggle toggleSidebar={toggleSidebar} handleToggleSidebar={handleToggleSidebar} theme={theme} />
        <div className='flex flex-col justify-between '>
          <div className="flex flex-col gap-2 py-4">
            {sidebarItems.map((item: any) => (
              <div
                key={item.id}
                className="flex items-center hover:scale-[1.05] justify-center p-2 rounded-md text-heading hover:bg-secondary cursor-pointer"
              >
                <SidebarItemIcon iconName={item.icon} library={faIcons} isShowMargin={false} />
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col items-center justify-between gap-5  mt-20'>
          <BsChat size={22} color='black' />
          <BsSnapchat size={22} color='black' />
          <div className='relative w-[40px] h-[40px]'>
            <Image className='rounded-full' src='https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
              fill alt="avatar" />
              <div className='w-3 h-3 bg-green-400 absolute bottom-1 right-0 rounded-full z-3'>{'e '}</div>
          </div>
        </div>

      </div>

      <div
        className={cn(
          'shadow-lg',
          toggleSidebar ? 'hidden w-0' : 'w-80',
          'transition-all duration-500 py-6 px-4'
        )}
      >
        <h2 className="text-heading">Overview</h2>
        <div className="relative w-52 my-6">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-lg bg-secondary text-heading outline-none"
          />
          <FiSearch className="absolute left-3 top-3 text-heading" />
        </div>

        <Tabs
          defaultActiveTab="myAccount"
          tabs={[
            { name: 'myAccount', label: 'My account' },
            { name: 'sharedWithMe', label: 'Shared with me' },
          ]}
        />

        <div className="mt-4 text-heading">
          <ul>
            {sidebarData.sections.map((section) => (
              <SidebarSection
                key={section.name}
                section={section}
                openSection={openSection}
                toggleSection={toggleSection}
                pathname={pathname}
              />
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
