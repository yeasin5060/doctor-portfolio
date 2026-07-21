import React from 'react'
import {
  ArrowUp,
  ArrowUpRight,
} from "lucide-react";

import doctor from "../assets/sharmin.png";
import dna from "../assets/dna.png";

const Footer = () => {
    return (
        <footer className="bg-[#dfe9ff] mt-14">

            {/* Top */}
            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

                <div>
                    <h2 className="text-5xl font-bold">
                        সুস্থ জীবনের জন্য আজই যোগাযোগ করুন
                    </h2>

                    <p className="text-gray-600 mt-4">
                        স্বাস্থ্য বিষয়ক পরামর্শ, অ্যাপয়েন্টমেন্ট এবং অন্যান্য তথ্যের জন্য আপনার ইমেইল প্রদান করুন।
                    </p>
                </div>

                <div className="flex w-full lg:w-auto bg-white rounded-full p-1 shadow-md">
                    <input
                    type="email"
                    placeholder="আপনার ইমেইল লিখুন"
                    className="flex-1 px-5 py-3 outline-none rounded-full"
                    />

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-full flex items-center gap-2 transition">
                        সাবস্ক্রাইব
                    <ArrowUpRight size={18} />
                    </button>
                </div>

                </div>
            </div>

            <hr className="border-gray-300" />

            {/* Middle */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-5 gap-10">

                {/* Services */}
                <div>
                    <h3 className="font-bold mb-5">
                    চিকিৎসা সেবা
                    </h3>

                    <ul className="space-y-3 text-gray-600">
                    <li>সাধারণ চিকিৎসা</li>
                    <li>ডায়াবেটিস চিকিৎসা</li>
                    <li>উচ্চ রক্তচাপ</li>
                    <li>স্বাস্থ্য পরামর্শ</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-bold mb-5">
                        গুরুত্বপূর্ণ লিংক
                    </h3>

                    <ul className="space-y-3 text-gray-600">
                        <li>হোম</li>
                        <li>আমার সম্পর্কে</li>
                        <li>চিকিৎসা সেবা</li>
                        <li>স্বাস্থ্য নিবন্ধ</li>
                        <li>যোগাযোগ</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-bold mb-5">
                    যোগাযোগ
                    </h3>

                    <ul className="space-y-3 text-gray-600">
                    <li>📞 +৮৮০ ১৭১২-৩৪৫৬৭৮</li>
                    <li>📧 dr.sharmin@gmail.com</li>
                    <li>🏥 ধানমন্ডি, ঢাকা</li>
                    </ul>
                </div>

                {/* Doctor */}
                <div className="w-60">
                    <div className="flex items-center gap-4">
                        <img
                            src={doctor}
                            alt="ডা. শারমিন"
                            className="w-16 h-16 rounded-full object-cover"
                        />

                        <div>
                            <h3 className="text-2xl font-bold">
                                ডা. শারমিন
                            </h3>

                            <p className="text-gray-600">
                                এমবিবিএস, এফসিপিএস (মেডিসিন)
                            </p>
                        </div>
                    </div>
                </div>

                {/* Back To Top */}
                <div className="relative">
                    <img
                    src={dna}
                    alt=""
                    className="w-full max-w-[220px] ml-auto"
                    />

                    <button className="absolute top-0 right-0 w-10 h-10 rounded-lg bg-white shadow flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                        <ArrowUp size={18} />
                    </button>

                    <p className="absolute right-[-20px] top-20 rotate-90 text-sm text-gray-600">
                        উপরে যান
                    </p>
                </div>

                </div>
            </div>

            <hr className="border-gray-300" />

            {/* Bottom */}
            <div className="text-center py-6 text-gray-600 text-sm">
                © ২০২৫ ডা. শারমিন। সর্বস্বত্ব সংরক্ষিত।
            </div>

        </footer>
    )
}

export default Footer
