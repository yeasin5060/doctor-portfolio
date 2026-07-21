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
    title: "সাধারণ মেডিসিন",
    description:
      "জ্বর, সর্দি-কাশি, গ্যাস্ট্রিক, সংক্রমণ, দুর্বলতা এবং অন্যান্য সাধারণ স্বাস্থ্য সমস্যার আধুনিক ও কার্যকর চিকিৎসা।",
    image: service1,
  },
  {
    title: "ডায়াবেটিস ও উচ্চ রক্তচাপ চিকিৎসা",
    description:
      "ডায়াবেটিস, উচ্চ রক্তচাপ এবং দীর্ঘমেয়াদি রোগের নিয়মিত পর্যবেক্ষণ, চিকিৎসা ও জীবনধারা বিষয়ক পরামর্শ।",
    image: service2,
  },
  {
    title: "হৃদরোগ ও স্বাস্থ্য পরামর্শ",
    description:
      "হৃদরোগের ঝুঁকি মূল্যায়ন, বুকের ব্যথা, উচ্চ কোলেস্টেরল এবং সুস্থ জীবনযাপনের জন্য বিশেষজ্ঞ পরামর্শ।",
    image: service3,
  },
  {
    title: "থাইরয়েড ও হরমোনজনিত রোগ",
    description:
      "থাইরয়েডের বিভিন্ন সমস্যা, হরমোনের ভারসাম্যহীনতা এবং সংশ্লিষ্ট রোগের নির্ণয় ও চিকিৎসা।",
    image: service4,
  },
  {
    title: "স্বাস্থ্য পরীক্ষা ও প্রতিরোধমূলক সেবা",
    description:
      "নিয়মিত স্বাস্থ্য পরীক্ষা, রোগের প্রাথমিক শনাক্তকরণ এবং ভবিষ্যৎ স্বাস্থ্যঝুঁকি প্রতিরোধে বিশেষ পরামর্শ।",
    image: service5,
  },
  {
    title: "অনলাইন চিকিৎসা পরামর্শ",
    description:
      "ভিডিও বা ফোনের মাধ্যমে ঘরে বসেই বিশেষজ্ঞ চিকিৎসকের পরামর্শ, রিপোর্ট বিশ্লেষণ এবং ফলো-আপ সেবা।",
    image: service6,
  },
];

const Services = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            আমার চিকিৎসা সেবাসমূহ
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-7">
            আধুনিক চিকিৎসা, সঠিক রোগ নির্ণয় এবং রোগীকেন্দ্রিক সেবার মাধ্যমে
            বিভিন্ন শারীরিক সমস্যার কার্যকর চিকিৎসা প্রদান করা হয়।
          </p>
        </div>
        {/* Services */}
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

                  <p className="text-gray-600 text-sm mt-3 leading-7">
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
