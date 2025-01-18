import { Outlet } from "react-router-dom";
import AppBar from "../components/main-layout-components/appBar/AppBar";
import ProfilePageHeader from "./me-section/ProfilePageHeader";
import NavigationMenu from "./me-section/NavigationMenu";

function MeInfoLayout() {
  const tabs = [
    { label: "Personal info", url: "personal-info" },
    { label: "Payment methods", url: "payment" },
    { label: "Addresses", url: "addresses" },
    { label: "Order history", url: "order-history" },
    { label: "Earn Wolt credits", url: "earn-credits" },
    { label: "Redeem code", url: "redeem-code" },
    { label: "Settings", url: "settings" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <AppBar />
      <ProfilePageHeader />
      <NavigationMenu tabs={tabs} />

      <main className="">
        <Outlet />
      </main>
    </div>
  );
}

export default MeInfoLayout;
