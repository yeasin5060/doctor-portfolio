import React from 'react'
import {
  HeartPulse,
  HeartHandshake,
  Shield,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: <HeartPulse size={28} />,
    title: "Expert Medical Care",
    description:
      "Over a decade of experience in diagnosing and managing complex health conditions.",
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Caring Approach",
    description:
      "Every patient is treated with empathy, respect, and genuine care.",
  },
  {
    icon: <Shield size={28} />,
    title: "Personal Care",
    description:
      "Tailored care designed around each patient's unique medical needs.",
  },
  {
    icon: <BadgeCheck size={28} />,
    title: "Trusted Care",
    description:
      "3,000+ patients served with consistency, transparency, and trust.",
  },
];
const HomeWhySection = () => {
  return (
     <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-16">
          Why Me?
        </h2>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#dfeaff] rounded-[28px] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                {item.icon}
              </div>
              {/* Title */}
              <h3 className="text-3xl font-semibold mt-8">
                {item.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 leading-7 mt-4 text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeWhySection