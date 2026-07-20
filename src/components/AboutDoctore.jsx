import React from 'react'
import { ChevronRight } from "lucide-react";
import doctor from "../assets/sharmin.png";

const doctorInfo = [
  "10+ years of clinical experience in Internal Medicine.",
  "Expert in chronic disease management – diabetes, hypertension & heart care.",
  "Focus on early detection, lifestyle changes & patient education.",
  "Evidence-based treatment tailored to each patient's needs.",
  "Practices at CityCare Clinic and several outreach programs.",
  "Regularly attends medical workshops & health awareness events.",
];

const AboutDoctore = () => {
  return (
     <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-6 items-center">

                {/* Left Image */}
                <div>
                    <img
                    src={doctor}
                    alt="Dr. William"
                    className="w-full h-[520px] object-cover rounded-[28px] bg-[#dfe9ff]"
                    />
                </div>
                {/* Right Content */}
                <div className="bg-[#dfe9ff] rounded-[28px] p-10 h-full flex flex-col justify-center">

                    <h2 className="text-4xl font-bold text-center">
                        Dr. Sharmin
                    </h2>

                    <p className="text-center text-gray-500 mt-2 mb-10">
                        MBBS, FCPS (Medicine) • Dedicated to better
                        health through trusted care.
                    </p>

                    <div className="space-y-5">
                        {doctorInfo.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <ChevronRight
                                    size={20}
                                    className="text-blue-600 mt-1 flex-shrink-0"
                                />
                                <p className="text-gray-700 leading-7">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutDoctore
