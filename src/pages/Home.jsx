import React from 'react'
import HomeHeroSection from '../components/HomeHeroSection'
import HomeWhySection from '../components/HomeWhySection'
import HomeServiceSection from '../components/HomeServiceSection'
import HomeContact from '../components/HomeContact'
import HomePricing from '../components/HomePricing'
import HomeRead from '../components/HomeRead'
import HomeQuestion from '../components/HomeQuestion'
import HomeAppointmentCTA from '../components/HomeAppointmentCTA'

const Home = () => {
  return (
    <div>
        <HomeHeroSection/>
        <HomeWhySection/>
        <HomeServiceSection/>
        <HomeContact/>
        <HomePricing/>
        <HomeRead/>
        <HomeQuestion/>
        <HomeAppointmentCTA/>
    </div>
  )
}

export default Home