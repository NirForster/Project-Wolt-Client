import { Outlet } from "react-router-dom";
import NavBar from "./navbar-components/NavBar";
import Footer from "./Footer";
import DiscoveryTabs from "./DiscoveryTabs";

function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <DiscoveryTabs />
      <main className="p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
