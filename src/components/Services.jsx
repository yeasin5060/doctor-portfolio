import React from 'react'
import { ArrowUpRight } from "lucide-react";

import service1 from "../assets/checkup-one.jpg";
import service2 from "../assets/checkup-two.jpg";
import service3 from "../assets/checkup-three.jpg";
import service4 from "../assets/checkup-four.jpg";
import service5 from "../assets/checkup-two.jpg";
import service6 from "../assets/checkup-one.jpg";

const services = [
  {
    title: "Chronic Disease Management",
    description:
      "Long-term treatment for diabetes, hypertension, and more.",
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
  {
    title: "Respiratory Treatment",
    description:
      "Diagnosis and care for asthma, cough, and lung issues.",
    image: service4,
  },
  {
    title: "Lifestyle & Nutrition Advice",
    description:
      "Guidance for diet, exercise, and healthy living.",
    image: service5,
  },
  {
    title: "Follow-Up Consultation",
    description:
      "Continuous support for ongoing recovery and health improvement.",
    image: service6,
  },
];

const Services = () => {
  return (
     <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#dfe9ff] rounded-[28px] p-5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              {/* Top */}
              <div className="flex justify-between items-start gap-4">

                <div>
                  <h3 className="text-2xl font-bold leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-3 leading-6">
                    {service.description}
                  </p>
                </div>

                <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow hover:bg-blue-600 hover:text-white transition">
                  <ArrowUpRight size={18} />
                </button>

              </div>

              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-60 object-cover rounded-[22px] mt-6"
              />

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Services
