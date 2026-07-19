import React from 'react'
import {
  ArrowUp,
  ArrowUpRight,
} from "lucide-react";

import doctor from "../assets/sharmin.png";
import dna from "../assets/dna.png";

const Footer = () => {
  return (
    <footer className="bg-[#dfe9ff] mt-24">
        {/* Top */}
        <div className="max-w-7xl mx-auto px-6 py-14">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                <h2 className="text-5xl font-bold">
                    Let's Connect With Me
                </h2>
                <div className="flex w-full lg:w-auto bg-white rounded-full p-1 shadow-md">
                    <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3 outline-none rounded-full"
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-full flex items-center gap-2 transition">
                    Get Started
                    <ArrowUpRight size={18} />
                    </button>
                </div>
            </div>
        </div>
        <hr className="border-gray-300" />
        {/* Middle */}
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid lg:grid-cols-5 gap-10">
                {/* Explore */}
                <div>
                    <h3 className="font-bold mb-5">
                    Explore
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                    <li>Case Studies</li>
                    <li>Blog & Insights</li>
                    <li>Resources</li>
                    <li>FAQs</li>
                    </ul>
                </div>
                {/* Quick Links */}
                <div>
                    <h3 className="font-bold mb-5">
                    Quick Links
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Testimonials</li>
                    <li>Pricing</li>
                    </ul>
                </div>
                {/* Legal */}
                <div>
                    <h3 className="font-bold mb-5">
                    Legal Links
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                    <li>Privacy Policy</li>
                    </ul>
                </div>
                {/* Doctor */}
                <div className='w-60'>
                    <div className="flex items-center gap-4">
                        <img src={doctor} alt="" className="w-16 h-16 rounded-full object-cover"/>
                        <div>
                            <h3 className="text-3xl font-bold">
                            Dr. William
                            </h3>
                            <p className="text-gray-600">
                            Medicine Specialist
                            </p>
                        </div>
                    </div>
                {
                    /*
                    <div className="flex gap-4 mt-8">

                    {[Twitter, Facebook, Instagram, Linkedin].map((Icon, index) => (
                        <button
                        key={index}
                        className="w-11 h-11 rounded-full bg-white flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
                        >
                        <Icon size={18} />
                        </button>
                    ))}

                    </div>
                    */
                }
                </div>
                {/* DNA */}
                <div className="relative">
                    <img src={dna} alt="" className="w-full max-w-[220px] bg-transparent ml-auto"/>
                    <button className="absolute top-0 right-0 w-10 h-10 rounded-lg bg-white shadow flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                    <ArrowUp size={18} />
                    </button>
                    <p className="absolute right-[-20px] top-20 rotate-90 text-sm text-gray-600">
                    Back to top
                    </p>
                </div>
            </div>
        </div>
        <hr className="border-gray-300" />
        {/* Bottom */}
        <div className="text-center py-6 text-gray-600 text-sm">
            Copyright © 2025 Dr. William. All Rights Reserved.
        </div>
    </footer>
  )
}

export default Footer
