import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "./components/main-layout-components/MainLayout";
import ScrollToTop from "./utils/ScrollToTop";
import MeInfoLayout from "./components/MeInfoLayot";
import MeAddress from "./components/me-section/profilePages/MeAddress";
import UserDetails from "./components/me-section/profilePages/personal-info/UserDetails";
import MePersonalInfo from "./components/me-section/profilePages/personal-info/MePersonalInfo";
import MePayment from "./components/me-section/profilePages/MePayment";
import MeEarnCredits from "./components/me-section/profilePages/MeEarnCredits";
import MeRedeemCode from "./components/me-section/profilePages/MeRedeemCode";
import MeProfileSettings from "./components/me-section/profilePages/meSettings/MeSettings";
import MeOrderHistory from "./components/me-section/profilePages/MeReturnOrder";

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
// const CategoryBrowse = lazy(
//   () => import("./pages/browsing-pages/CategoryBrowse")
// );
const SingleRestaurantPage = lazy(() => import("./pages/SingleRestaurantPage"));
const SingleStorePage = lazy(() => import("./pages/SingleStorePage"));
const Error404Page = lazy(() => import("./pages/404Page"));
const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
);

function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <SuspenseWrapper>
              <LandingPage />
            </SuspenseWrapper>
          }
        />

        {/* Discovery Section */}
        <Route path="/en/discovery/:city" element={<MainLayout />}>
          <Route
            index
            element={
              <SuspenseWrapper>
                <DiscoveryPage />
              </SuspenseWrapper>
            }
          />
          <Route
            path="restaurants"
            element={
              <SuspenseWrapper>
                <DiscoveryRestaurants />
              </SuspenseWrapper>
            }
          />
          <Route
            path="stores"
            element={
              <SuspenseWrapper>
                <DiscoveryStorePage />
              </SuspenseWrapper>
            }
          />
          {/* <Route
            path="browse/:category"
            element={
              <SuspenseWrapper>
                <CategoryBrowse />
              </SuspenseWrapper>
            }
          /> */}
        </Route>

        <Route path="en/me" element={<MeInfoLayout />}>
          {[
            { path: "personal-info", components: <MePersonalInfo /> },
            { path: "payment", components: <MePayment /> },
            { path: "addresses", components: <MeAddress /> },
            { path: "order-history", components: <MeOrderHistory /> },
            { path: "earn-credits", components: <MeEarnCredits /> },
            { path: "redeem-code", components: <MeRedeemCode /> },
            { path: "settings", components: <MeProfileSettings /> },
          ].map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={
                <SuspenseWrapper>
                  <div className="flex justify-center">{page.components}</div>
                </SuspenseWrapper>
              }
            />
          ))}
        </Route>

        {/* Restaurant and Store Details */}
        <Route path="/en/isr/:city" element={<MainLayout />}>
          <Route
            path="restaurant/:id"
            element={
              <SuspenseWrapper>
                <SingleRestaurantPage />
              </SuspenseWrapper>
            }
          />
          <Route
            path="venue/:id"
            element={
              <SuspenseWrapper>
                <SingleStorePage />
              </SuspenseWrapper>
            }
          />
        </Route>

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <SuspenseWrapper>
              <Error404Page />
            </SuspenseWrapper>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
