import React from 'react'
import AboutSectionTitle from '../components/AboutSectionTitle'
import AboutDoctore from '../components/AboutDoctore'
import AboutAwards from '../components/AboutAwards'
import AboutAppointmentCTA from '../components/AboutAppointmentCTA'

const About = () => {
  return (
    <div>
        <AboutSectionTitle/>
        <AboutDoctore/>
        <AboutAwards/>
        <AboutAppointmentCTA/>
    </div>
  )
}

export default About