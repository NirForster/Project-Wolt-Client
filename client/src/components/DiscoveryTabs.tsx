import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DiscoveryTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("/discovery");
  const navigate = useNavigate();

  const tabs = [
    { label: "חנויות", route: "/discovery/store", icon: StoresIcon },
    { label: "מסעדות", route: "/discovery/restaurants", icon: RestaurantsIcon },
    { label: "המלצות", route: "/discovery", icon: RecommendationsIcon },
  ];

  const handleTabClick = (route: string) => {
    setActiveTab(route);
    navigate(route);
  };

  return (
    <div className="w-full flex justify-center py-[1.5rem] rounded-lg">
      {tabs.map((tab) => (
        <div
          key={tab.route}
          onClick={() => handleTabClick(tab.route)}
          className={`flex justify-center items-center py-[0.5rem] px-[1rem] m-1  cursor-pointer rounded-full transition-all duration-200 ${
            activeTab === tab.route
              ? "bg-woltColors-brandBg text-woltColors-white font-bold shadow-brand"
              : "bg-bg-surface-secondary text-woltColors-textSubdued hover:bg-woltColors-bgSurfaceHovered hover:text-woltColors-textHovered"
          }`}
          role="tab"
          aria-selected={activeTab === tab.route}
        >
          <span className="text-sm pr-[0.5rem]">{tab.label}</span>
          <tab.icon className="w-5 h-5 mr-2" />
        </div>
      ))}
    </div>
  );
};

// SVG Components for Icons
const RecommendationsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    {/* SVG path for Recommendations */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.517 8.648A6.656 6.656 0 0014.87 2a1 1 0 110-2 8.658 8.658 0 018.648 8.648 1 1 0 11-2 0zM7.854 3.868c.443 0 .8.214.8.478L8.65 5.532a.25.25 0 01-.25.25H4.12a.25.25 0 01-.25-.25V4.346c0-.264.36-.478.8-.478h.346a.248.248 0 00.248-.25v-2.14a1 1 0 012 0V3.62a.25.25 0 00.25.248h.34zm.8 14.069h-4.78a.75.75 0 000 1.5h4.78a.75.75 0 000-1.5zm0-2.802a.75.75 0 00.75-.75H9.4a.75.75 0 00-.746-.75h-4.78a.75.75 0 000 1.5h4.78zm-4.78-4.302h4.78a.75.75 0 000-1.5h-4.78a.75.75 0 100 1.5zm18.42 10.678H23a1 1 0 010 2H1a1 1 0 110-2h.211a.25.25 0 00.25-.25V7.693a.98.98 0 01.979-.98h7.648a.98.98 0 01.978.98V21.26c0 .139.112.25.25.25h.912a.25.25 0 00.25-.25v-7.832c0-.263.214-.477.478-.477h2.868c.264 0 .478.214.478.477v7.832c0 .139.112.25.25.25h1.414a.249.249 0 00.248-.25v-7.832c0-.263.214-.477.478-.477h2.874c.264 0 .478.214.478.477v7.832c0 .139.112.25.25.25zM14.869 6.172a2.48 2.48 0 012.476 2.477 1 1 0 102 0 4.481 4.481 0 00-4.476-4.477 1 1 0 100 2z"
    ></path>
    <path d="M21.517 8.648A6.656 6.656 0 0014.87 2a1 1 0 110-2 8.658 8.658 0 018.648 8.648 1 1 0 11-2 0zM7.854 3.868c.443 0 .8.214.8.478L8.65 5.532a.25.25 0 01-.25.25H4.12a.25.25 0 01-.25-.25V4.346c0-.264.36-.478.8-.478h.346a.248.248 0 00.248-.25v-2.14a1 1 0 012 0V3.62a.25.25 0 00.25.248h.34z" />
  </svg>
);

const RestaurantsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    {/* SVG path for Restaurants */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 1a1 1 0 112 0v5a4.009 4.009 0 01-2.667 3.772.5.5 0 00-.333.471V23a1 1 0 11-2 0V10.243a.5.5 0 00-.333-.471A4.009 4.009 0 014 6V1a1 1 0 112 0v5c0 .522.205 1.025.571 1.398A.251.251 0 007 7.223V1a1 1 0 112 0v6.225a.251.251 0 00.429.175c.367-.374.572-.877.571-1.4V1zM20.5.75a.75.75 0 00-.75-.75C17.418 0 15.064 6.055 15 13.243v.021c.004.686.563 1.24 1.25 1.236H18a.5.5 0 01.5.5v8a1 1 0 102 0V.75z"
    ></path>
    <path d="M10 1a1 1 0 112 0v5a4.009 4.009 0 01-2.667 3.772.5.5 0 00-.333.471V23a1 1 0 11-2 0V10.243a.5.5 0 00-.333-.471A4.009 4.009 0 014 6V1a1 1 0 112 0v5c0 .522.205 1.025.571 1.398A.251.251 0 007 7.223V1a1 1 0 112 0v6.225a.251.251 0 00.429.175c.367-.374.572-.877.571-1.4V1z" />
  </svg>
);

const StoresIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    {/* SVG path for Store */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.646 0A.646.646 0 0 0 0 .646V4.5a3.5 3.5 0 0 0 6.25 2.165A3.494 3.494 0 0 0 9 8c1.116 0 2.11-.522 2.75-1.335a3.498 3.498 0 0 0 5.75-.362A3.5 3.5 0 0 0 24 4.5V.647A.646.646 0 0 0 23.354 0h-5.708a.647.647 0 0 0-.146.017.647.647 0 0 0-.146-.017H.646ZM2 2v2.5a1.5 1.5 0 1 0 3 0V2H2Zm17 0v2.5a1.5 1.5 0 0 0 3 0V2h-3Zm-6 2.5V2h3v2.5a1.5 1.5 0 0 1-3 0ZM7.5 2v2.5a1.5 1.5 0 1 0 3 0V2h-3Z"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 22V8.45a3.491 3.491 0 0 0 2 1.015V22h8V12h7.5v10H21V9.465a3.49 3.49 0 0 0 2-1.016V22a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2Zm12 0h3.5v-8H13v8Z"
    ></path>
    <path d="M5.5 12a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Z"></path>
    <path d="M1 22V8.45a3.491 3.491 0 0 0 2 1.015V22h8V12h7.5v10H21V9.465a3.49 3.49 0 0 0 2-1.016V22a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2Zm12 0h3.5v-8H13v8Z" />
  </svg>
);

export default DiscoveryTabs;
