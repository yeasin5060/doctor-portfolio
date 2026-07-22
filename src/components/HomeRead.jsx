import React from 'react'
import { ArrowUpRight } from "lucide-react";

import blog1 from "../assets/checkup-one.jpg";
import blog2 from "../assets/checkup-two.jpg";
import blog3 from "../assets/checkup-three.jpg";
import { Link } from 'react-router-dom';

export const articles = [
  {
    id: 1,
    slug: "regular-health-checkup-importance",
    image: blog1,
    category: "স্বাস্থ্য পরামর্শ",
    title: "নিয়মিত স্বাস্থ্য পরীক্ষা কেন অত্যন্ত গুরুত্বপূর্ণ?",
    date: "২৭ জানুয়ারি, ২০২৫",
    readTime: "৪ মিনিটে পড়ুন",
    excerpt:
      "নিয়মিত স্বাস্থ্য পরীক্ষা অনেক রোগকে প্রাথমিক পর্যায়ে শনাক্ত করতে সাহায্য করে এবং ভবিষ্যতের জটিলতা কমায়।",
    content:
      "নিয়মিত স্বাস্থ্য পরীক্ষা সুস্থ জীবনযাপনের অন্যতম গুরুত্বপূর্ণ অভ্যাস। অনেক রোগ যেমন ডায়াবেটিস, উচ্চ রক্তচাপ, কোলেস্টেরল বৃদ্ধি, কিডনি বা লিভারের সমস্যা প্রাথমিক পর্যায়ে তেমন কোনো লক্ষণ দেখায় না। সময়মতো পরীক্ষা করালে এসব রোগ দ্রুত শনাক্ত করা যায় এবং সহজে নিয়ন্ত্রণে আনা সম্ভব হয়। সাধারণত রক্তচাপ, রক্তের সুগার, কোলেস্টেরল, লিভার ও কিডনি ফাংশন এবং প্রয়োজন অনুযায়ী অন্যান্য পরীক্ষা করার পরামর্শ দেওয়া হয়। ৩০ বছরের পর বছরে অন্তত একবার স্বাস্থ্য পরীক্ষা করা বিশেষভাবে উপকারী। নিয়মিত স্বাস্থ্য পরীক্ষা শুধু রোগ শনাক্তই করে না, বরং সুস্থ জীবনধারা বজায় রাখার জন্য গুরুত্বপূর্ণ দিকনির্দেশনাও দেয়।",
  },

  {
    id: 2,
    slug: "effective-ways-to-control-high-blood-pressure",
    image: blog2,
    category: "হৃদরোগ",
    title: "উচ্চ রক্তচাপ নিয়ন্ত্রণে রাখার কার্যকর উপায়",
    date: "২৭ জানুয়ারি, ২০২৫",
    readTime: "৫ মিনিটে পড়ুন",
    excerpt:
      "লবণ কম খাওয়া, নিয়মিত ব্যায়াম ও ওষুধ সঠিকভাবে গ্রহণ উচ্চ রক্তচাপ নিয়ন্ত্রণে গুরুত্বপূর্ণ ভূমিকা রাখে।",
    content:
      "উচ্চ রক্তচাপ দীর্ঘদিন নিয়ন্ত্রণে না থাকলে হৃদরোগ, স্ট্রোক, কিডনি বিকল হওয়া এবং চোখের জটিলতার ঝুঁকি বেড়ে যায়। রক্তচাপ নিয়ন্ত্রণে প্রতিদিন অন্তত ৩০ মিনিট হাঁটা বা ব্যায়াম করা, অতিরিক্ত লবণ ও প্রক্রিয়াজাত খাবার এড়িয়ে চলা, ধূমপান ও অ্যালকোহল বর্জন, পর্যাপ্ত ঘুম এবং মানসিক চাপ কমানো অত্যন্ত গুরুত্বপূর্ণ। চিকিৎসকের পরামর্শ অনুযায়ী নিয়মিত ওষুধ গ্রহণ করতে হবে এবং নিজের ইচ্ছামতো ওষুধ বন্ধ করা যাবে না। বাড়িতে নিয়মিত রক্তচাপ মাপা এবং ফলাফল নথিভুক্ত রাখলে চিকিৎসা আরও কার্যকর হয়।",
  },

  {
    id: 3,
    slug: "healthy-lifestyle-for-diabetes-control",
    image: blog3,
    category: "ডায়াবেটিস",
    title: "ডায়াবেটিস নিয়ন্ত্রণে স্বাস্থ্যকর জীবনযাপনের গুরুত্ব",
    date: "২৭ জানুয়ারি, ২০২৫",
    readTime: "৬ মিনিটে পড়ুন",
    excerpt:
      "সুষম খাদ্য, নিয়মিত ব্যায়াম ও রক্তে সুগারের পর্যবেক্ষণ ডায়াবেটিস নিয়ন্ত্রণের মূল ভিত্তি।",
    content:
      "ডায়াবেটিস নিয়ন্ত্রণে শুধু ওষুধ নয়, স্বাস্থ্যকর জীবনযাপন সবচেয়ে গুরুত্বপূর্ণ ভূমিকা পালন করে। প্রতিদিন নির্দিষ্ট সময়ে সুষম খাদ্য গ্রহণ, চিনি ও অতিরিক্ত পরিশোধিত কার্বোহাইড্রেট কম খাওয়া, পর্যাপ্ত শাকসবজি ও আঁশযুক্ত খাবার খাওয়া এবং নিয়মিত শারীরিক কার্যক্রম বজায় রাখা রক্তে সুগারের মাত্রা নিয়ন্ত্রণে সাহায্য করে। সপ্তাহে অন্তত ১৫০ মিনিট মাঝারি মাত্রার ব্যায়াম করার পরামর্শ দেওয়া হয়। এছাড়া নিয়মিত রক্তে সুগার পরীক্ষা, HbA1c পরীক্ষা এবং চিকিৎসকের ফলো-আপ ডায়াবেটিসজনিত জটিলতা প্রতিরোধে অত্যন্ত গুরুত্বপূর্ণ।",
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
                        <Link
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth",})}  key={article.id} to={`/article/${article.slug}`}
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
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HomeRead
