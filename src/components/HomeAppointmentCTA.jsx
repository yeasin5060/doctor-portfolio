import React from 'react'
import { ArrowUpRight } from "lucide-react";
import doctorMeeting from "../assets/sharmin.png";


const HomeAppointmentCTA = () => {
  return (
   <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-[#dfe9ff] rounded-[36px] overflow-hidden">

          <div className="grid lg:grid-cols-2 items-center gap-12 p-6 lg:p-10">

            {/* Left */}

            <div className="space-y-8">

              <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-md">
                Get in touch with me
                <br />
                for Appointment
              </h2>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                Contact Me
                <ArrowUpRight size={18} />
              </button>

            </div>

            {/* Right */}

            <div>

              <img
                src={doctorMeeting}
                alt="Appointment"
                className="w-full h-[380px] object-cover rounded-[28px]"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default HomeAppointmentCTA
