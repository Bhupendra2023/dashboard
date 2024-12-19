import { SidebarDataType, SidebarItem } from "@/lib/types";

export const sidebarItems: SidebarItem[] = [
  { id: 1, icon: 'FaHome', active: false },
  { id: 2, icon: 'FaImages', active: true },
  { id: 3, icon: 'FaLayerGroup', active: false },
  { id: 4, icon: 'FaThLarge', active: false },
  { id: 5, icon: 'FaUserFriends', active: false },
  { id: 6, icon: 'FaEnvelope', active: false },
  { id: 7, icon: 'FaTools', active: false },
  { id: 8, icon: 'FaChartBar', active: false },
];

export const sidebarData: SidebarDataType = {
  sections: [
    { name: 'Home', icon: 'AiOutlineHome', href: '/home' },
    { name: 'Dashboard', icon: 'AiOutlineDashboard', href: '/dashboard' },
    { name: 'Projects', icon: 'AiOutlineFolder', href: '/projects' },
    { name: 'Tasks', icon: 'AiOutlineCheckSquare', href: '/tasks' },
    {
      name: 'Settings',
      icon: 'AiOutlineSetting',
      href: '/settings',
      items: [
        { name: 'My details', icon: 'AiOutlineUser', href: '/settings/my-details' },
        { name: 'My profile', icon: 'AiOutlineUserSwitch', href: '/settings/my-profile' },
        { name: 'Security', icon: 'AiOutlineLock', href: '/settings/security' },
        { name: 'Integrations', icon: 'AiOutlineAppstore', href: '/settings/integrations' },
        { name: 'Billing', icon: 'AiOutlineCreditCard', href: '/settings/billing' },
      ],
    },
  ],
};


export const DARK = 'dark'
export const LIGHT = 'light'
export const SYSTEM = 'system'