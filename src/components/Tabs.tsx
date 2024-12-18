import React, { useState } from "react";

interface TabProps {
  name: string;
  label: string;
  isActive: boolean;
  onClick: (name: string) => void;
}

const Tab: React.FC<TabProps> = ({ name, label, isActive, onClick }) => {
  return (
    <div
      className={`cursor-pointer text-sm flex-1 text-heading text-center pb-2 relative ${isActive ? "font-bold " : ""}`}
      onClick={() => onClick(name)}
    >
      <p>{label}</p>
      <div
        className={`absolute h-[2px] w-full top-full ${isActive ? "bg-gray-300" : "bg-secondary"} ${isActive && name === "myAccount" ? "left-0" : "right-0"}`}
      />
    </div>
  );
};

interface TabsProps {
  tabs: { name: string; label: string }[];
  defaultActiveTab: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultActiveTab }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  return (
    <div className="flex justify-between relative">
      {tabs.map((tab) => (
        <Tab
          key={tab.name}
          name={tab.name}
          label={tab.label}
          isActive={activeTab === tab.name}
          onClick={setActiveTab}
        />
      ))}
    </div>
  );
};

export default Tabs;
