import React from 'react'
import ServiceBanner from '../components/ServiceBanner'
import Services from '../components/Services'
import ServiceContact from '../components/ServiceContact'
import ServiceAppointmentCTA from '../components/ServiceAppointmentCTA'

const Service = () => {
  return (
    <div>
        <ServiceBanner/>
        <Services/>
        <ServiceContact/>
        <ServiceAppointmentCTA/>
    </div>
  )
}

export default Service