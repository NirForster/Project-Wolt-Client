import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../src/components/MainLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const DiscoveryPage = lazy(
  () => import("./pages/discovery-pages/DiscoveryPage")
);
const DiscoveryRestaurants = lazy(
  () => import("./pages/discovery-pages/DiscoveryRestaurants")
);
const DiscoveryStorePage = lazy(
  () => import("./pages/discovery-pages/DiscoveryStorePage")
);
const AccountInfoPage = lazy(() => import("./pages/AccountInfoPage"));
const CategoryBrowse = lazy(
  () => import("./pages/browsing-pages/CategoryBrowse")
);
const RestaurantPage = lazy(() => import("./pages/RestaurantPage"));

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/discovery" element={<MainLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <DiscoveryPage />
              </Suspense>
            }
          />
          <Route
            path="restaurants"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <DiscoveryRestaurants />
              </Suspense>
            }
          />
          <Route
            path="discovery/store"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <DiscoveryStorePage />
              </Suspense>
            }
          />
          <Route
            path="account-info"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AccountInfoPage />
              </Suspense>
            }
          />
          <Route
            path="browse/:category"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <CategoryBrowse />
              </Suspense>
            }
          />
          <Route
            path="restaurant/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <RestaurantPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
