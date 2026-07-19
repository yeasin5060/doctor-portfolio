import React from 'react'
import { ArrowUpRight } from "lucide-react";

import service1 from "../assets/sharmin.png";
import service2 from "../assets/sharmin.png";
import service3 from "../assets/sharmin.png";

const services = [
  {
    title: "Chronic Disease Management",
    description:
      "Long-term treatment plans for diabetes, hypertension, and more.",
    image: service1,
  },
  {
    title: "General Health Checkup",
    description:
      "Comprehensive health assessment for overall wellbeing.",
    image: service2,
  },
  {
    title: "Cardiac & Blood Pressure Care",
    description:
      "Expert management for heart and BP-related conditions.",
    image: service3,
  },
];

const HomeServiceSection = () => {
  return (
       <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-14">

          <h2 className="text-5xl font-bold">
            My Services
          </h2>

          <button className="mt-6 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full flex items-center gap-2 transition">
            More Services
            <ArrowUpRight size={20} />
          </button>

        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#dfe9ff] rounded-[28px] overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Top */}
              <div className="p-7">

                <div className="flex justify-between items-start gap-4">

                  <div>

                    <h3 className="text-3xl font-semibold leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mt-5 leading-7">
                      {service.description}
                    </p>

                  </div>

                  <button className="w-14 h-14 rounded-full bg-white flex justify-center items-center shrink-0">
                    <ArrowUpRight
                      className="text-blue-600"
                      size={26}
                    />
                  </button>

                </div>

              </div>

              {/* Image */}

              <div className="px-3 pb-3">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[320px] object-cover rounded-[24px]"
                />
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default HomeServiceSection