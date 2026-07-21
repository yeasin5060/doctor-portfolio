import React from 'react'
import { CheckCircle2, CircleDollarSign } from "lucide-react";

const plans = [
  {
    name: "সাধারণ পরামর্শ",
    price: 800,
    currency: "৳",
    features: [
      "চেম্বারে সরাসরি চিকিৎসা পরামর্শ",
      "রোগের ইতিহাস বিস্তারিত মূল্যায়ন",
      "প্রয়োজনীয় শারীরিক পরীক্ষা",
      "প্রেসক্রিপশন প্রদান",
      "প্রয়োজনীয় পরীক্ষা-নিরীক্ষার পরামর্শ",
      "৭ দিনের ফ্রি ফলো-আপ",
      "স্বাস্থ্য সচেতনতা ও জীবনযাত্রা বিষয়ক পরামর্শ",
    ],
  },
  {
    name: "অনলাইন পরামর্শ",
    price: 1200,
    currency: "৳",
    features: [
      "ভিডিও বা অডিও কলে চিকিৎসা পরামর্শ",
      "ডিজিটাল প্রেসক্রিপশন",
      "ল্যাব রিপোর্ট পর্যালোচনা",
      "২৪ ঘণ্টার মধ্যে রিপোর্ট বিশ্লেষণ",
      "ওষুধ সেবনের নির্দেশনা",
      "৭ দিনের অনলাইন ফলো-আপ",
      "হোয়াটসঅ্যাপ/ইমেইলে সহায়তা",
    ],
  },
  {
    name: "সম্পূর্ণ স্বাস্থ্য সেবা",
    price: 2000,
    currency: "৳",
    features: [
      "বিস্তারিত স্বাস্থ্য মূল্যায়ন",
      "সকল মেডিকেল রিপোর্ট বিশ্লেষণ",
      "দীর্ঘমেয়াদি চিকিৎসা পরিকল্পনা",
      "খাদ্যাভ্যাস ও পুষ্টি বিষয়ক পরামর্শ",
      "জীবনযাত্রা পরিবর্তনের নির্দেশনা",
      "১৫ দিনের ফ্রি ফলো-আপ",
      "জরুরি চিকিৎসা পরামর্শে অগ্রাধিকার",
      "ব্যক্তিগত স্বাস্থ্য রেকর্ড সংরক্ষণ",
    ],
  },
];

const HomePricing = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            আপনার জন্য উপযুক্ত চিকিৎসা সেবা
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            আপনার স্বাস্থ্য ও প্রয়োজন অনুযায়ী সাশ্রয়ী ও মানসম্মত চিকিৎসা সেবা নির্বাচন করুন।
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#dfe9ff] rounded-[30px] p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >

              {/* Badge */}
              <span className="inline-block border border-gray-500 rounded-full px-4 py-1 text-sm font-medium">
                {plan.name}
              </span>

              {/* Price */}
              <div className="flex items-end gap-2 mt-8">
                <span className="text-2xl font-semibold">৳</span>

                <h3 className="text-5xl font-bold">
                  {plan.price}
                </h3>

                <span className="text-gray-500 mb-2">
                  / প্রতি ভিজিট
                </span>
              </div>

              {/* Payment */}
              <div className="flex items-center gap-2 mt-5 text-gray-600">
                <CircleDollarSign size={16} />
                <span>চেম্বারে পরিশোধযোগ্য</span>
              </div>

              {/* Button */}
              <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full transition font-semibold">
                অ্যাপয়েন্টমেন্ট বুক করুন
              </button>

              {/* Features */}
              <div className="mt-8 space-y-4">
                {plan.features.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-blue-600 mt-1"
                    />

                    <p className="text-gray-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HomePricing
