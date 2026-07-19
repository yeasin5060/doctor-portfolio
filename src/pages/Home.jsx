import React from 'react'
import HomeHeroSection from '../components/HomeHeroSection'
import HomeWhySection from '../components/HomeWhySection'
import HomeServiceSection from '../components/HomeServiceSection'
import HomeContact from '../components/HomeContact'

const Home = () => {
  return (
    <div>
        <HomeHeroSection/>
        <HomeWhySection/>
        <HomeServiceSection/>
        <HomeContact/>
    </div>
  )
}

export default Home