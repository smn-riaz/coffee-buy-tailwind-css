import React from 'react'
import AboutUsSection from './AboutUsSection'
import CoffeeTypes from './CoffeeTypes'
import Contact from './Contact'
import FavCoffee from './FavCoffee'
import Footer from './Footer'
import NavBarSection from './NavBarSection'
import ServiceSection from './ServiceSection'
import TopBannerSection from './TopBannerSection'

const LandingPage = () => {
  return (
    <main className='bg-landingbg overflow-hidden'>
       <NavBarSection />
       <TopBannerSection />
        <ServiceSection /> 
       <AboutUsSection />
       <FavCoffee />
       {/* <Contact /> */}
       <CoffeeTypes />
       <Footer />
    </main>
  )
}

export default LandingPage