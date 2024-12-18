// export type SidebarItem = {
//   label: string;
//   icon: React.ReactNode;
//   href?: string;
//   subItems?: SidebarItem[];
// };

export interface SidebarItemComponentProps {
  item: SidebarItem;
  collapsed: boolean;
  openSubMenu: string | null;
  handleSubMenuToggle: (label: string) => void;
}

import { IconType } from "react-icons";

export interface SidebarItem {
  id: number;
  icon?: IconType;
  active: boolean;
}