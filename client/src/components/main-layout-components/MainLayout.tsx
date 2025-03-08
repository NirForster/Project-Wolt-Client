import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
import Footer from "./Footer";
import DiscoveryTabs from "../DiscoveryTabs";

function MainLayout() {
  return (
    <div className="min-h-screen">
      <AppBar />
      <DiscoveryTabs />
      <div className="flex items-center justify-center">
        <main className="max-w-[1550px]">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
