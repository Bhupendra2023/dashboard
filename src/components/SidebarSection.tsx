
'use client';
import { SidebarItemIconProps, SidebarSectionProps, } from '@/lib/types';
import { cn } from '@/lib/utils';
import * as Icons from 'react-icons/ai';
import Link from 'next/link';
import { ReactElement } from 'react';

export const SidebarItemIcon = ({ iconName, library, isShowMargin }: SidebarItemIconProps): ReactElement | null => {
    const Icon = library[iconName];
    return Icon ? <Icon className={`text-xl   ${isShowMargin ? ' mr-2 ' : ''}`} /> : null;
};

export const SidebarSection = ({ section, openSection, toggleSection, pathname }: SidebarSectionProps): ReactElement => (
    <li key={section.name} className="mb-2">
        {!section.items ? (
            <Link
                href={section.href}
                className={cn(
                    'flex items-center px-4 py-2 hover:bg-secondary rounded',
                    pathname === section.href && 'bg-secondary'
                )}
            >
                <SidebarItemIcon iconName={section.icon!} library={Icons} isShowMargin={true} />
                {section.name}
            </Link>
        ) : (
            <div>
                <div
                    className="flex items-center justify-between px-4 py-2 hover:bg-secondary rounded cursor-pointer"
                    onClick={() => toggleSection(section.name)}
                >
                    <div className="flex items-center">
                        <SidebarItemIcon iconName={section.icon!} library={Icons} isShowMargin={true} />
                        {section.name}
                    </div>
                    <span className="text-xl">{openSection === section.name ? '-' : '+'}</span>
                </div>
                {openSection === section.name && (
                    <ul className="flex gap-3 flex-col">
                        {section.items!.map((item, index) => (
                            <li key={item.name} className="relative">
                                <div className="absolute bottom-0 left-8 top-[-8px] z-30 transform -translate-x-1/2 w-6 h-8 border-b-2 border-gray-400 rounded-bl-md"></div>
                                {section.items!.length - 1 !== index && (
                                    <div className="absolute bottom-0 left-8 top-[6px] z-30 border-l-2 transform -translate-x-1/2 w-6 h-[69px] border-gray-400"></div>
                                )}
                                <Link
                                    href={item.href}
                                    className={cn(
                                        'flex items-center ml-[60px] p-4 py-2 hover:bg-secondary rounded',
                                        pathname === item.href && 'bg-secondary'
                                    )}
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
);
