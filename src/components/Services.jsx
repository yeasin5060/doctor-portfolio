import React from 'react'
import { ArrowUpRight } from "lucide-react";

import service1 from "../assets/checkup-one.jpg";
import service2 from "../assets/checkup-two.jpg";
import service3 from "../assets/checkup-three.jpg";
import service4 from "../assets/checkup-four.jpg";
import service5 from "../assets/checkup-two.jpg";
import service6 from "../assets/checkup-one.jpg";
import { Link } from 'react-router-dom';

export const services = [
  {
    id: 1,
    slug: "general-medicine",
    title: "সাধারণ মেডিসিন",
    description:
      "জ্বর, সর্দি-কাশি, গ্যাস্ট্রিক, সংক্রমণ, দুর্বলতা এবং অন্যান্য সাধারণ স্বাস্থ্য সমস্যার আধুনিক ও কার্যকর চিকিৎসা।",

    longDescription:
      "সাধারণ মেডিসিন বিভাগে বিভিন্ন ধরনের দৈনন্দিন স্বাস্থ্য সমস্যার সঠিক রোগ নির্ণয় ও আধুনিক চিকিৎসা প্রদান করা হয়। জ্বর, সর্দি-কাশি, গ্যাস্ট্রিক, সংক্রমণ, মাথাব্যথা, দুর্বলতা, শারীরিক ব্যথা, অ্যালার্জি এবং অন্যান্য সাধারণ রোগের জন্য অভিজ্ঞ চিকিৎসকের পরামর্শ ও চিকিৎসা পাওয়া যায়। রোগীর শারীরিক অবস্থা মূল্যায়ন করে প্রয়োজনীয় পরীক্ষা-নিরীক্ষা এবং ব্যক্তিগত চিকিৎসা পরিকল্পনা তৈরি করা হয়।",

    details:
      "দ্রুত রোগ নির্ণয়, সঠিক চিকিৎসা এবং নিয়মিত ফলো-আপের মাধ্যমে রোগীর দ্রুত সুস্থতা নিশ্চিত করা হয়।",

    image: service1,
  },

  {
    id: 2,
    slug: "diabetes-and-hypertension",
    title: "ডায়াবেটিস ও উচ্চ রক্তচাপ চিকিৎসা",
    description:
      "ডায়াবেটিস, উচ্চ রক্তচাপ এবং দীর্ঘমেয়াদি রোগের নিয়মিত পর্যবেক্ষণ, চিকিৎসা ও জীবনধারা বিষয়ক পরামর্শ।",

    longDescription:
      "ডায়াবেটিস এবং উচ্চ রক্তচাপ দীর্ঘমেয়াদি রোগ হওয়ায় নিয়মিত পর্যবেক্ষণ ও সঠিক চিকিৎসা অত্যন্ত গুরুত্বপূর্ণ। আমরা রোগীর স্বাস্থ্য পরিস্থিতি বিশ্লেষণ করে ওষুধ ব্যবস্থাপনা, খাদ্যাভ্যাস, ব্যায়াম এবং জীবনধারা পরিবর্তনের বিষয়ে বিস্তারিত পরামর্শ প্রদান করি। নিয়মিত ফলো-আপের মাধ্যমে রোগ নিয়ন্ত্রণে রাখা এবং ভবিষ্যৎ জটিলতা প্রতিরোধে সহায়তা করা হয়।",

    details:
      "HbA1c, রক্তচাপ পর্যবেক্ষণ, খাদ্য পরিকল্পনা এবং নিয়মিত ফলো-আপ সেবা প্রদান করা হয়।",

    image: service2,
  },

  {
    id: 3,
    slug: "heart-disease-consultation",
    title: "হৃদরোগ ও স্বাস্থ্য পরামর্শ",
    description:
      "হৃদরোগের ঝুঁকি মূল্যায়ন, বুকের ব্যথা, উচ্চ কোলেস্টেরল এবং সুস্থ জীবনযাপনের জন্য বিশেষজ্ঞ পরামর্শ।",

    longDescription:
      "হৃদরোগ প্রতিরোধ এবং নিয়ন্ত্রণের জন্য সময়মতো চিকিৎসা অত্যন্ত জরুরি। বুকের ব্যথা, শ্বাসকষ্ট, উচ্চ কোলেস্টেরল, উচ্চ রক্তচাপ এবং হৃদরোগের অন্যান্য লক্ষণের জন্য বিশেষজ্ঞ পরামর্শ প্রদান করা হয়। প্রয়োজনে ইসিজি, রক্ত পরীক্ষা এবং অন্যান্য প্রয়োজনীয় পরীক্ষা-নিরীক্ষার পরামর্শ দেওয়া হয়।",

    details:
      "হৃদরোগের ঝুঁকি মূল্যায়ন, চিকিৎসা পরিকল্পনা এবং জীবনধারা পরিবর্তনের পরামর্শ প্রদান করা হয়।",

    image: service3,
  },

  {
    id: 4,
    slug: "thyroid-and-hormonal-disorders",
    title: "থাইরয়েড ও হরমোনজনিত রোগ",
    description:
      "থাইরয়েডের বিভিন্ন সমস্যা, হরমোনের ভারসাম্যহীনতা এবং সংশ্লিষ্ট রোগের নির্ণয় ও চিকিৎসা।",

    longDescription:
      "থাইরয়েড ও হরমোনজনিত রোগ শরীরের বিভিন্ন কার্যক্রমে প্রভাব ফেলে। ওজন বৃদ্ধি বা হ্রাস, ক্লান্তি, হরমোনের ভারসাম্যহীনতা এবং অন্যান্য উপসর্গের জন্য সঠিক পরীক্ষা-নিরীক্ষা ও চিকিৎসা প্রদান করা হয়। রোগীর অবস্থা অনুযায়ী দীর্ঘমেয়াদি চিকিৎসা ও ফলো-আপ নিশ্চিত করা হয়।",

    details:
      "থাইরয়েড ফাংশন টেস্ট, চিকিৎসা পরিকল্পনা এবং নিয়মিত পর্যবেক্ষণ করা হয়।",

    image: service4,
  },

  {
    id: 5,
    slug: "preventive-health-checkup",
    title: "স্বাস্থ্য পরীক্ষা ও প্রতিরোধমূলক সেবা",
    description:
      "নিয়মিত স্বাস্থ্য পরীক্ষা, রোগের প্রাথমিক শনাক্তকরণ এবং ভবিষ্যৎ স্বাস্থ্যঝুঁকি প্রতিরোধে বিশেষ পরামর্শ।",

    longDescription:
      "নিয়মিত স্বাস্থ্য পরীক্ষা ভবিষ্যতের বড় রোগ প্রতিরোধে গুরুত্বপূর্ণ ভূমিকা রাখে। বিভিন্ন ল্যাব টেস্ট, রক্তচাপ, সুগার, কোলেস্টেরল, লিভার ও কিডনি পরীক্ষা এবং অন্যান্য স্বাস্থ্য মূল্যায়নের মাধ্যমে রোগের প্রাথমিক পর্যায়েই শনাক্ত করা সম্ভব হয়।",

    details:
      "বার্ষিক স্বাস্থ্য পরীক্ষা, স্বাস্থ্য রিপোর্ট বিশ্লেষণ এবং ব্যক্তিগত স্বাস্থ্য পরিকল্পনা প্রদান করা হয়।",

    image: service5,
  },

  {
    id: 6,
    slug: "online-medical-consultation",
    title: "অনলাইন চিকিৎসা পরামর্শ",
    description:
      "ভিডিও বা ফোনের মাধ্যমে ঘরে বসেই বিশেষজ্ঞ চিকিৎসকের পরামর্শ, রিপোর্ট বিশ্লেষণ এবং ফলো-আপ সেবা।",

    longDescription:
      "ব্যস্ত জীবন বা দূরবর্তী অবস্থানের কারণে যারা সরাসরি হাসপাতালে যেতে পারেন না, তাদের জন্য অনলাইন চিকিৎসা সেবা একটি সহজ ও নিরাপদ সমাধান। ভিডিও কল বা ফোনের মাধ্যমে চিকিৎসকের পরামর্শ, পূর্বের রিপোর্ট বিশ্লেষণ, ওষুধের পরামর্শ এবং নিয়মিত ফলো-আপ সেবা প্রদান করা হয়।",

    details:
      "ভিডিও কনসালটেশন, রিপোর্ট রিভিউ, প্রেসক্রিপশন পরামর্শ এবং অনলাইন ফলো-আপ সুবিধা উপলব্ধ।",

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
            <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth",})}  key={service.id} to={`/services/service/${service.slug}`} className="bg-[#dfe9ff] rounded-[28px] p-5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
