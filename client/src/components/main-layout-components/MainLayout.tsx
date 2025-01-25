import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
import Footer from "./Footer";
import DiscoveryTabs from "../DiscoveryTabs";

function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <AppBar />
      <DiscoveryTabs />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
