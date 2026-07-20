import React from 'react'
import dna from '../assets/dna.png'

const AboutSectionTitle = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="relative bg-[#dfe9ff] rounded-[24px] overflow-hidden py-12">
            {/* DNA Image */}
            <img src={dna} alt="DNA" className="absolute top-0 left-0 w-24 md:w-28 opacity-90"/>
            {/* Content */}
            <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                    About Me
                </h2>
                <p className="mt-3 text-gray-500 text-sm md:text-base">
                    Committed to healing, prevention, and personalised medical attention.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutSectionTitle
