import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavigationMenuProps {
  tabs: { label: string; url: string }[];
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ tabs }) => {
  const location = useLocation();

  let currentPath = location.pathname.split("/me/")[1];
  if (!currentPath) currentPath = "personal-info";
  const findTabIndex = (
    tabs: { label: string; url: string }[],
    searchUrl: string
  ): number => {
    return tabs.findIndex((tab) => tab.url === searchUrl);
  };
  const index = findTabIndex(tabs, currentPath);

  const [activeTab, setActiveTab] = useState<string>(tabs[index].label);

  return (
    <div className="flex flex-col items-center border-b border-gray-300 mt-4">
      {/* Tabs */}
      <div className="flex w-full max-w-4xl justify-around">
        {tabs.map((tab) => (
          <Link
            to={`/en/me/${tab.url}`}
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`py-2 text-lg text-gray-700 ${
              activeTab === tab.label ? "font-bold" : "font-normal"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      {/* Underline Indicator */}
      <div className="relative w-full max-w-4xl h-[2px] bg-gray-200">
        <div
          className="absolute bottom-0 h-[2px] bg-black transition-all duration-300"
          style={{
            width: `${100 / tabs.length}%`,
            left: `${
              tabs.findIndex((tab) => tab.label === activeTab) *
              (100 / tabs.length)
            }%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default NavigationMenu;
