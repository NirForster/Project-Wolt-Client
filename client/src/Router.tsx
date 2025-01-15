import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../src/components/MainLayout";
import ScrollToTop from "./services/ScrollToTop";
import MeInfoLayout from "./components/MeInfoLayot";
import MeAddress from "./components/me-section/profilePages/MeAddress";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const DiscoveryPage = lazy(
  () => import("./pages/discovery-pages/DiscoveryPage")
);
const DiscoveryRestaurants = lazy(
  () => import("./pages/discovery-pages/DiscoveryRestaurants")
);
const DiscoveryStorePage = lazy(
  () => import("./pages/discovery-pages/DiscoveryStorePage")
);
const CategoryBrowse = lazy(
  () => import("./pages/browsing-pages/CategoryBrowse")
);
const RestaurantPage = lazy(() => import("./pages/RestaurantPage"));
const Error404Page = lazy(() => import("./pages/404Page")); // Importing 404 Page

function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LandingPage />
            </Suspense>
          }
        />

        {/* Discovery Section */}
        <Route path="/en/discovery" element={<MainLayout />}>
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
            path="stores"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <DiscoveryStorePage />
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

        <Route path="en/me" element={<MeInfoLayout />}>
          <Route
            path="personal-info"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <div className="flex justify-center"></div>
              </Suspense>
            }
          />
          <Route
            path="payment"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <div className="flex justify-center"></div>
              </Suspense>
            }
          />
          <Route
            path="addresses"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <div className="flex justify-center">
                  <MeAddress />
                </div>
              </Suspense>
            }
          />
          <Route
            path="order-history"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <div className="flex justify-center"></div>
              </Suspense>
            }
          />
          <Route
            path="earn-credits"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <div className="flex justify-center"></div>
              </Suspense>
            }
          />
          <Route
            path="redeem-code"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <div className="flex justify-center"></div>
              </Suspense>
            }
          />
          <Route
            path="settings"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <div className="flex justify-center"></div>
              </Suspense>
            }
          />
        </Route>

        {/* Restaurant Details with Region and City */}
        <Route
          path="/en/:region/:city/restaurant/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <RestaurantPage />
            </Suspense>
          }
        />

        {/* Store Details with Region and City */}
        <Route
          path="/en/:region/:city/venue/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <DiscoveryStorePage />
            </Suspense>
          }
        />

        <Route
          path="/en/discovery/browse/:category"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CategoryBrowse />
            </Suspense>
          }
        />
        {/* 404 Error Page - Catch All Route
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Error404Page />
            </Suspense>
          }
        /> */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
