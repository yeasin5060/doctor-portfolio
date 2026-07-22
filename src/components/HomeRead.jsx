import React from 'react'
import { ArrowUpRight } from "lucide-react";

import blog1 from "../assets/checkup-one.jpg";
import blog2 from "../assets/checkup-two.jpg";
import blog3 from "../assets/checkup-three.jpg";

export const articles = [
  {
    image: blog1,
    category: "স্বাস্থ্য পরামর্শ",
    title: "নিয়মিত স্বাস্থ্য পরীক্ষা কেন অত্যন্ত গুরুত্বপূর্ণ?",
    date: "২৭ জানুয়ারি, ২০২৫",
    readTime: "৪ মিনিটে পড়ুন",
  },
  {
    image: blog2,
    category: "হৃদরোগ",
    title: "উচ্চ রক্তচাপ নিয়ন্ত্রণে রাখার কার্যকর উপায়",
    date: "২৭ জানুয়ারি, ২০২৫",
    readTime: "৫ মিনিটে পড়ুন",
  },
  {
    image: blog3,
    category: "ডায়াবেটিস",
    title: "ডায়াবেটিস নিয়ন্ত্রণে স্বাস্থ্যকর জীবনযাপনের গুরুত্ব",
    date: "২৭ জানুয়ারি, ২০২৫",
    readTime: "৬ মিনিটে পড়ুন",
  },
];

const HomeRead = () => {
    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-14">
                    <div>
                        <h2 className="text-5xl font-bold">
                        স্বাস্থ্য বিষয়ক নিবন্ধ
                        </h2>

                        <p className="text-gray-500 mt-3 text-lg">
                        সুস্থ জীবনযাপন, রোগ প্রতিরোধ এবং চিকিৎসা সম্পর্কিত গুরুত্বপূর্ণ তথ্য ও পরামর্শ।
                        </p>
                    </div>

                    <button className="mt-6 md:mt-0 bg-blue-600 text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-blue-700 transition">
                        সব নিবন্ধ দেখুন
                        <ArrowUpRight size={18} />
                    </button>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div
                        key={index}
                        className="bg-[#dfe9ff] rounded-[28px] p-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image */}
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-64 object-cover rounded-3xl"
                            />

                            {/* Category */}
                            <span className="inline-block mt-5 bg-white text-blue-600 text-sm px-4 py-1 rounded-full">
                                {article.category}
                            </span>

                            {/* Title */}
                            <h3 className="text-2xl font-semibold mt-5 leading-snug">
                                {article.title}
                            </h3>

                            {/* Footer */}
                            <div className="flex items-center gap-3 mt-8 text-gray-500 text-sm">
                                <span>{article.date}</span>
                                <span>|</span>
                                <span>{article.readTime}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HomeRead
