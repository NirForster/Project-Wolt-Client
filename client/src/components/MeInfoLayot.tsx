import { Outlet } from "react-router-dom";
import AppBar from "./main-layout-components/AppBar";
import ProfilePageHeader from "./me-section/ProfilePageHeader";
import NavigationMenu from "./me-section/NavigationMenu";
import Footer from "./main-layout-components/Footer";

function MeInfoLayout() {
  const tabs = [
    { label: "Personal info", url: "personal-info", lineLength: "14" },
    { label: "Payment methods", url: "payment", lineLength: "19" },
    { label: "Addresses", url: "addresses", lineLength: "11" },
    { label: "Order history", url: "order-history", lineLength: "15" },
    { label: "Earn Wolt credits", url: "earn-credits", lineLength: "17" },
    { label: "Redeem code", url: "redeem-code", lineLength: "15" },
    { label: "Settings", url: "settings", lineLength: "10" },
  ];

  return (
    <div className="min-h-screen flex justify-center flex-col items-start">
      <div className="w-full max-w-[1200px] flex flex-col mx-10">
        <AppBar />
        <ProfilePageHeader />
        <NavigationMenu tabs={tabs} />

        <main className="">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default MeInfoLayout;
