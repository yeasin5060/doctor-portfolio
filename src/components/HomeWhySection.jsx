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
    title: "অভিজ্ঞ চিকিৎসা সেবা",
    description:
      "১০ বছরেরও বেশি অভিজ্ঞতার মাধ্যমে বিভিন্ন জটিল ও সাধারণ রোগের সঠিক রোগ নির্ণয় ও আধুনিক চিকিৎসা প্রদান।",
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "রোগীকেন্দ্রিক সেবা",
    description:
      "প্রতিটি রোগীর প্রতি আন্তরিকতা, সম্মান ও সহানুভূতির সঙ্গে ব্যক্তিগতভাবে চিকিৎসা সেবা প্রদান করা হয়।",
  },
  {
    icon: <Shield size={28} />,
    title: "ব্যক্তিগত চিকিৎসা পরিকল্পনা",
    description:
      "প্রতিটি রোগীর শারীরিক অবস্থা ও প্রয়োজন অনুযায়ী ব্যক্তিগত চিকিৎসা পরিকল্পনা ও নিয়মিত ফলো-আপ নিশ্চিত করা হয়।",
  },
  {
    icon: <BadgeCheck size={28} />,
    title: "বিশ্বস্ত ও নির্ভরযোগ্য সেবা",
    description:
      "হাজারো রোগীর আস্থা অর্জন করে সততা, স্বচ্ছতা ও পেশাদারিত্বের সঙ্গে চিকিৎসা সেবা প্রদান করে আসছি।",
  },
];
const HomeWhySection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            WHY CHOOSE ME
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            কেন আমাকে বেছে নেবেন?
          </h2>

          <p className="text-gray-500 mt-5 max-w-3xl mx-auto text-lg leading-8">
            অভিজ্ঞতা, আধুনিক চিকিৎসা পদ্ধতি এবং রোগীকেন্দ্রিক সেবার মাধ্যমে
            প্রতিটি রোগীর সর্বোচ্চ মানের চিকিৎসা নিশ্চিত করতে আমি প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>

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