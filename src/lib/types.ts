export type SidebarItem = {
  id: number;
  icon: string;
  active: boolean;
};
export interface SidebarItemComponentProps {
  item: SidebarItem;
  collapsed: boolean;
  openSubMenu: string | null;
  handleSubMenuToggle: (label: string) => void;
}

export type SidebarSectionType = {
  name: string;
  icon?: string;
  href: string;
  items?: SidebarSectionType[];
};

export type SidebarDataType = {
  sections: SidebarSectionType[];
};

export type SidebarToggleProps = {
  toggleSidebar: boolean;
  handleToggleSidebar: () => void;
  theme: string | undefined;
};

export type SidebarItemIconProps = {
  iconName: string;
  library: Record<string, React.ElementType>;
  isShowMargin?: boolean
};

export type SidebarSectionProps = {
  section: SidebarSectionType;
  openSection: string | null;
  toggleSection: (sectionName: string) => void;
  pathname: string;
};

