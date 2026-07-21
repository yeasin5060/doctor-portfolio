import React from 'react'
import { ArrowUpRight } from "lucide-react";

import service1 from "../assets/checkup-two.jpg";
import service2 from "../assets/checkup-three.jpg";
import service3 from "../assets/checkup-one.jpg";

const services = [
  {
    title: "ডায়াবেটিস ও দীর্ঘমেয়াদি রোগের চিকিৎসা",
    description:
      "ডায়াবেটিস, উচ্চ রক্তচাপ, থাইরয়েডসহ বিভিন্ন দীর্ঘমেয়াদি রোগের নিয়মিত চিকিৎসা ও ফলো-আপ সেবা।",
    image: service1,
  },
  {
    title: "সাধারণ স্বাস্থ্য পরীক্ষা",
    description:
      "সম্পূর্ণ স্বাস্থ্য মূল্যায়ন, রোগ নির্ণয়, প্রয়োজনীয় পরীক্ষা-নিরীক্ষার পরামর্শ এবং চিকিৎসা প্রদান।",
    image: service2,
  },
  {
    title: "হৃদরোগ ও উচ্চ রক্তচাপের চিকিৎসা",
    description:
      "উচ্চ রক্তচাপ, বুকের ব্যথা, হৃদরোগের ঝুঁকি মূল্যায়ন এবং প্রয়োজনীয় চিকিৎসা ও পরামর্শ।",
    image: service3,
  },
];

const HomeServiceSection = () => {
    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-14">
                    <div>
                        <h2 className="text-5xl font-bold">
                        আমার চিকিৎসা সেবা
                        </h2>

                        <p className="text-gray-500 mt-4 text-lg">
                        রোগ নির্ণয় থেকে শুরু করে দীর্ঘমেয়াদি চিকিৎসা ও স্বাস্থ্য পরামর্শ—সবকিছুই একজন অভিজ্ঞ মেডিসিন বিশেষজ্ঞের তত্ত্বাবধানে।
                        </p>
                    </div>

                    <button className="mt-6 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full flex items-center gap-2 transition">
                        সকল সেবা দেখুন
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

                                    <button className="w-14 h-14 rounded-full bg-white flex justify-center items-center shrink-0 hover:bg-blue-600 hover:text-white transition">
                                        <ArrowUpRight size={26} />
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