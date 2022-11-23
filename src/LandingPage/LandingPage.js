import React from "react";
import AboutUsSection from "./AboutUsSection";
import Brands from "./Brands";
import Contact from "./Contact";
import FAQ from "./FAQ";
import FavCoffee from "./FavCoffee";
import Footer from "./Footer";
import NavBarSection from "./NavBarSection";
import ServiceSection from "./ServiceSection";
import TopBannerSection from "./TopBannerSection";

const LandingPage = () => {
  return (
    <main className="bg-landingbg xl:px-60">
    
        <NavBarSection />
        <TopBannerSection />
        <ServiceSection />
        <AboutUsSection />
        <FavCoffee />
        <FAQ />
        <Contact />
        <Brands />
        <Footer />
    </main>
  );
};

export default LandingPage;
