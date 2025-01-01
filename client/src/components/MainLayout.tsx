import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <main className="p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
