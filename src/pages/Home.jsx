import React from 'react'
import HomeHeroSection from '../components/HomeHeroSection'
import HomeWhySection from '../components/HomeWhySection'
import HomeServiceSection from '../components/HomeServiceSection'
import HomeContact from '../components/HomeContact'
import HomePricing from '../components/HomePricing'

const Home = () => {
  return (
    <div>
        <HomeHeroSection/>
        <HomeWhySection/>
        <HomeServiceSection/>
        <HomeContact/>
        <HomePricing/>
    </div>
  )
}

export default Home