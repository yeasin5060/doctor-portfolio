import React from 'react'
import { ChevronRight } from "lucide-react";
import doctor from "../assets/sharmin.png";

const doctorInfo = [
  "১০ বছরেরও বেশি অভিজ্ঞতার মাধ্যমে মেডিসিন বিভাগের বিভিন্ন জটিল ও সাধারণ রোগের সফল চিকিৎসা প্রদান করে আসছি।",

  "ডায়াবেটিস, উচ্চ রক্তচাপ, থাইরয়েড, হৃদরোগ, গ্যাস্ট্রিক, লিভার, কিডনি ও শ্বাসতন্ত্রের বিভিন্ন রোগ নির্ণয় ও চিকিৎসায় বিশেষ দক্ষতা রয়েছে।",

  "প্রতিটি রোগীর শারীরিক অবস্থা, রোগের ইতিহাস এবং জীবনযাত্রার ধরন বিশ্লেষণ করে ব্যক্তিকেন্দ্রিক চিকিৎসা পরিকল্পনা ও নিয়মিত ফলো-আপ নিশ্চিত করা হয়।",

  "আধুনিক চিকিৎসা পদ্ধতি, প্রমাণভিত্তিক (Evidence-Based) চিকিৎসা এবং সর্বশেষ মেডিকেল গাইডলাইন অনুসরণ করে রোগীদের সেবা প্রদান করা হয়।",

  "রোগ প্রতিরোধ, স্বাস্থ্য সচেতনতা বৃদ্ধি, সুষম খাদ্যাভ্যাস, নিয়মিত ব্যায়াম এবং স্বাস্থ্যকর জীবনযাপনের মাধ্যমে দীর্ঘমেয়াদি সুস্বাস্থ্য নিশ্চিত করার পরামর্শ প্রদান করা হয়।",

  "চেম্বারে সরাসরি পরামর্শের পাশাপাশি অনলাইন চিকিৎসা সেবা, মেডিকেল রিপোর্ট বিশ্লেষণ এবং প্রয়োজনে বিশেষজ্ঞ চিকিৎসকের কাছে রেফার করার সুবিধা প্রদান করা হয়।",

  "রোগীর ব্যক্তিগত তথ্যের সর্বোচ্চ গোপনীয়তা বজায় রেখে আন্তরিক, মানবিক এবং বিশ্বস্ত চিকিৎসা সেবা প্রদান করাই আমাদের প্রধান অঙ্গীকার।",
];

const AboutDoctore = () => {
    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-6 ">

                    {/* Left Image */}
                    <div>
                        <img
                        src={doctor}
                        alt="ডা. শারমিন"
                        className="w-full h-[520px] object-cover rounded-[28px] bg-[#dfe9ff]"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="bg-[#dfe9ff] rounded-[28px] p-10 h-full flex flex-col justify-center">

                        <h2 className="text-4xl font-bold text-center">
                            ডা. শারমিন
                        </h2>

                        <p className="text-center text-gray-500 mt-2 mb-10">
                            এমবিবিএস, এফসিপিএস (মেডিসিন) <br />
                            অভিজ্ঞ মেডিসিন বিশেষজ্ঞ ও রোগীকেন্দ্রিক স্বাস্থ্যসেবা প্রদানকারী।
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
