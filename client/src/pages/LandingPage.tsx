// import AppBarHomePage from "@/components/main-layout-components/appBar/AppBarHomePage";
import RotatingQuoteHero from "@/components/landing-page-section-components/RotatingQuoteHero";
import ExploreCitiesSection from "@/components/landing-page-section-components/ExploreCitiesSection";
import WhatIsWoltSection from "@/components/landing-page-section-components/WhatIsWoltSection";
import DownloadWoltSectionMobile from "@/components/landing-page-section-components/DownloadWoltSectionMobile";
import DownloadWoltSectionDesktop from "@/components/landing-page-section-components/DownloadWoltSectionDesktop";
import AppBar from "@/components/main-layout-components/appBar/AppBar";

const LandingPage = () => {
  return (
    <div>
      {/* <AppBarHomePage /> */}
      <AppBar />
      <RotatingQuoteHero />
      <ExploreCitiesSection />
      <WhatIsWoltSection />
      <DownloadWoltSectionMobile />
      <DownloadWoltSectionDesktop />
    </div>
  );
};

export default LandingPage;
