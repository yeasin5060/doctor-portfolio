import React from 'react'
import {
  GraduationCap,
  Award,
  CheckCircle2,
} from "lucide-react";

const education = [
  "MBBS, King's Medical College - 2008",
  "FCPS (Medicine) - 2014",
  "Fellowship in Diabetes Care, XYZ Institute - 2016",
  "Advanced Clinical Training in Internal Medicine - Ongoing",
  "Regular participant in Medical Conferences & CME Programs",
];

const awards = [
  {
    title: "Excellence in Internal Medicine",
    year: "2022",
  },
  {
    title: "Outstanding Patient Care Award",
    year: "2020",
  },
  {
    title: "Top Physician Award",
    year: "2018",
  },
  {
    title: "Community Health Contributor",
    year: "2016",
  },
];

const AboutAwards = () => {
    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-6">

                    {/* Education */}
                    <div className="lg:col-span-2 bg-[#dfe9ff] rounded-[28px] p-10">
                        <div className="flex items-center gap-3 mb-4">
                            <GraduationCap className="text-blue-600" size={32} />

                            <h2 className="text-3xl font-bold">
                                শিক্ষা ও পেশাগত যোগ্যতা
                            </h2>
                        </div>

                        <p className="text-gray-500 mb-8">
                            আধুনিক চিকিৎসা বিজ্ঞানের সর্বশেষ জ্ঞান ও প্রযুক্তির সাথে নিজেকে
                            নিয়মিত হালনাগাদ রাখতে বিভিন্ন প্রশিক্ষণ, কর্মশালা এবং
                            পেশাগত উন্নয়ন কার্যক্রমে অংশগ্রহণ করে থাকি।
                        </p>

                        <div className="space-y-5">
                            {education.map((item, index) => (
                                <div
                                key={index}
                                className="flex items-start gap-3"
                                >
                                    <CheckCircle2
                                        size={20}
                                        className="text-blue-600 mt-1"
                                    />

                                    <p className="text-gray-700">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Awards */}
                    <div className="bg-[#dfe9ff] rounded-[28px] p-10">
                        <div className="flex items-center gap-3 mb-4">
                            <Award
                                className="text-yellow-500"
                                size={30}
                            />

                            <h2 className="text-3xl font-bold">
                                সম্মাননা ও অর্জন
                            </h2>
                        </div>

                        <div className="space-y-7 mt-8">
                            {awards.map((award, index) => (
                                <div
                                key={index}
                                className="flex items-start gap-3"
                                >
                                    <Award
                                        size={18}
                                        className="text-yellow-500 mt-1"
                                    />

                                    <div>
                                        <h3 className="font-semibold">
                                            {award.title} - {award.year}
                                        </h3>

                                        <p className="text-gray-500 text-sm">
                                            বাংলাদেশ মেডিকেল অ্যাসোসিয়েশন
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutAwards
