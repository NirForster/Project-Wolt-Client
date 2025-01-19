import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface Tab {
  label: string;
  url: string;
  lineLength: string;
}

interface NavigationMenuProps {
  tabs: Tab[];
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ tabs }) => {
  const location = useLocation();

  let currentPath = location.pathname.split("/me/")[1];
  if (!currentPath) currentPath = "personal-info";

  const findTabIndex = (tabs: Tab[], searchUrl: string): number => {
    return tabs.findIndex((tab) => tab.url === searchUrl);
  };

  const index = findTabIndex(tabs, currentPath);
  const [activeTab, setActiveTab] = useState<string>(tabs[index].label);

  // Calculate the left position and width for the underline
  const calculateUnderlinePosition = (tabs: Tab[], activeLabel: string) => {
    let left = 0;

    for (const tab of tabs) {
      if (tab.label === activeLabel) break;
      left += parseInt(tab.lineLength, 10);
    }

    const activeTab = tabs.find((tab) => tab.label === activeLabel);
    const width = activeTab ? parseInt(activeTab.lineLength, 10) : 0;

    return { left, width };
  };

  const { left, width } = calculateUnderlinePosition(tabs, activeTab);

  return (
    <div className="flex flex-col items-center border-b border-gray-300 mt-4">
      {/* Desktop Tabs */}
      <div className="hidden lg:flex w-full max-w-4xl justify-around">
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

      {/* Underline Indicator for Desktop */}
      <div className="hidden lg:relative lg:w-full lg:max-w-4xl lg:h-[2px] lg:bg-gray-200">
        <div
          className="absolute bottom-0 h-[2px] bg-black transition-all duration-300"
          style={{
            width: `${width + 1}%`,
            left: `${left - 1}%`,
          }}
        ></div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex flex-col w-full">
        <div className="flex flex-col  border-gray-300">
          {tabs.map((tab) => (
            <Link
              to={`/en/me/${tab.url}`}
              key={tab.label}
              onClick={() => {
                setActiveTab(tab.label);
              }}
              className={`py-4 px-4 text-lg border-t ${
                activeTab === tab.label
                  ? "font-bold text-black"
                  : "font-normal  text-gray-700s"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
