import RotatingQuoteHero from "@/components/landing-page-section-components/RotatingQuoteHero";
import ExploreCitiesSection from "@/components/landing-page-section-components/ExploreCitiesSection";
import WhatIsWoltSection from "@/components/landing-page-section-components/WhatIsWoltSection";
import DownloadWoltSectionMobile from "@/components/landing-page-section-components/DownloadWoltSectionMobile";
import AppBar from "@/components/main-layout-components/AppBar";

const LandingPage = () => {
  return (
    <div>
      <AppBar />
      <RotatingQuoteHero />
      <ExploreCitiesSection />
      <WhatIsWoltSection />
      <DownloadWoltSectionMobile />
    </div>
  );
};

export default LandingPage;
