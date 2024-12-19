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


export interface SidebarItem {
  id: number;
  icon?: string;
  active: boolean;
}