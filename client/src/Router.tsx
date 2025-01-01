import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DiscoveryPage from "./pages/discovery-pages/DiscoveryPage";
import DiscoveryRestaurants from "./pages/discovery-pages/DiscoveryRestaurants";
import DiscoveryStorePage from "./pages/discovery-pages/DiscoveryStorePage";
import AccountInfoPage from "./pages/AccountInfoPage";
import CategoryBrowse from "./pages/browsing-pages/CategoryBrowse";
import RestaurantPage from "./pages/RestaurantPage";
import HomePage from "./pages/HomePage";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Discovery Pages Nav */}
        <Route path="/discovery" element={<DiscoveryPage />} />
        <Route path="/" element={<HomePage />} />

        <Route
          path="/discovery/restaurants"
          element={<DiscoveryRestaurants />}
        />
        <Route path="/discovery/Store" element={<DiscoveryStorePage />} />

        {/* Other NavBar Nav */}
        <Route path="/account-info" element={<AccountInfoPage />} />

        {/* category browse */}
        <Route path="/browse/:category" element={<CategoryBrowse />} />

        {/* restaurent detailes */}
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
