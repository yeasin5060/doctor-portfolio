import React from 'react'
import sharmin from '../assets/sharmin.png'


const HomeHeroSection = () => {
  return (
    <section className="bg-[#eaf2ff] min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full px-6 py-16">

        <div className="grid lg:grid-cols-3 items-center gap-10">

          {/* LEFT */}
          <div className="space-y-8">
            <div className="rounded-3xl p-6 shadow-lg w-[300px] bg-transparent">
              <img src={sharmin} className="w-24" alt=""/>
              <h2 className="text-5xl font-bold mt-2">10+</h2>
              <p className="text-gray-500"> Years of Experience</p>
              <p className="mt-10 text-gray-600"> Providing trusted, professional medical care since 2015.</p>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed w-72">Recommended by leading clinics  andpatients alike.</p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-blue-700 duration-300">
              Book An Appointment →
            </button>
          </div>

          {/* CENTER */}
          <div className="relative flex justify-center bg-transparent">
            <img src={sharmin} alt="" className="w-[620px] relative z-10"/>
            <div className="absolute bottom-0 w-full h-44 bg-gradient-to-t from-[#eaf2ff] to-transparent"></div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-end">
            <div className="bg-transparent rounded-3xl shadow-lg p-6 w-[320px]">
              <div className="flex items-center gap-3">
                <img src={sharmin} className="w-14" alt=""/>
                <div>
                  <h3 className="font-bold text-3xl">
                    10k+
                  </h3>
                  <p className="text-gray-500">
                    Satisfied Patients
                  </p>
                </div>
              </div>
              <img src={sharmin} className="w-24 ml-auto mt-2" alt=""/>
              <p className="text-gray-700 mt-8 text-lg leading-8">
                MBBS, FCPS (Medicine) – Dedicated to better health through trusted care.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center mt-12">
          <h1 className="text-6xl font-bold">
            Meet Dr.Sharmin
          </h1>
          <p className="text-gray-500 mt-4 text-xl">
            MBBS • FCPS (Medicine) • FRCS (UK)
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomeHeroSection