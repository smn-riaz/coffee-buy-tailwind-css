import React from "react";
import AboutUsSection from "./AboutUsSection";
import Brands from "./Brands";
import Contact from "./Contact";
import FavCoffee from "./FavCoffee";
import Footer from "./Footer";
import NavBarSection from "./NavBarSection";
import ServiceSection from "./ServiceSection";
import TopBannerSection from "./TopBannerSection";

const LandingPage = () => {
  return (
    <main className="bg-landingbg overflow-hidden flex justify-around xl:px-60">
      <div>
        <NavBarSection />
        <TopBannerSection />
        <ServiceSection />
        <AboutUsSection />
        <FavCoffee />
        <Contact />
        <Brands />
        <Footer />
      </div>
    </main>
  );
};

export default LandingPage;
