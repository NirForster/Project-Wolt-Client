import AppBarHomePage from "@/components/main-layout-components/appBar/AppBarHomePage";
import RotatingQuoteHero from "@/components/landing-page-section-components/RotatingQuoteHero";
import ExploreCitiesSection from "@/components/landing-page-section-components/ExploreCitiesSection";
import WhatIsWoltSection from "@/components/landing-page-section-components/WhatIsWoltSection";

const LandingPage = () => {
  return (
    <div>
      <AppBarHomePage />
      <RotatingQuoteHero />
      <ExploreCitiesSection />
      <WhatIsWoltSection />
    </div>
  );
};

export default LandingPage;
