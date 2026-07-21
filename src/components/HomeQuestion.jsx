import React from 'react'
import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";
import faqImage from "../assets/checkup-three.jpg";

const faqs = [
  {
    question: "প্রথমবার চেম্বারে আসার সময় কী কী সঙ্গে আনতে হবে?",
    answer:
      "পূর্বের প্রেসক্রিপশন, মেডিকেল রিপোর্ট, পরীক্ষার ফলাফল এবং বর্তমানে সেবন করা ওষুধের তালিকা সঙ্গে নিয়ে আসুন।",
  },
  {
    question: "একটি চিকিৎসা পরামর্শে সাধারণত কত সময় লাগে?",
    answer:
      "রোগীর শারীরিক অবস্থা ও সমস্যার ধরন অনুযায়ী সাধারণত ২০ থেকে ৩০ মিনিট সময় লাগে।",
  },
  {
    question: "আগে থেকে অ্যাপয়েন্টমেন্ট ছাড়া কি দেখা করা যাবে?",
    answer:
      "হ্যাঁ, রোগী দেখা হয়। তবে সিরিয়াল ও সময় নিশ্চিত করতে আগে থেকে অ্যাপয়েন্টমেন্ট নেওয়ার পরামর্শ দেওয়া হয়।",
  },
  {
    question: "অনলাইনে চিকিৎসা পরামর্শ নেওয়া যাবে কি?",
    answer:
      "হ্যাঁ। ভিডিও কল বা অনলাইন প্ল্যাটফর্মের মাধ্যমে চিকিৎসা পরামর্শ নেওয়া যাবে। ওয়েবসাইট থেকে সহজেই অ্যাপয়েন্টমেন্ট বুক করতে পারবেন।",
  },
  {
    question: "কোন কোন সময়ে চেম্বারে রোগী দেখা হয়?",
    answer:
      "চেম্বারের নির্ধারিত সময় অনুযায়ী রোগী দেখা হয়। সঠিক সময় জানতে ওয়েবসাইট বা ফোনের মাধ্যমে যোগাযোগ করুন।",
  },
  {
    question: "জরুরি অবস্থায় কীভাবে যোগাযোগ করব?",
    answer:
      "জরুরি প্রয়োজনে প্রদত্ত মোবাইল নম্বরে যোগাযোগ করুন অথবা নিকটস্থ হাসপাতালের জরুরি বিভাগে যান।",
  },
  {
    question: "ফলো-আপ ভিজিট কি প্রয়োজন?",
    answer:
      "রোগের ধরন অনুযায়ী ফলো-আপ ভিজিট প্রয়োজন হতে পারে। চিকিৎসক পরবর্তী সাক্ষাতের সময় নির্ধারণ করে দেবেন।",
  },
  {
    question: "কোন কোন রোগের চিকিৎসা প্রদান করা হয়?",
    answer:
      "মেডিসিন-সংক্রান্ত বিভিন্ন রোগ, ডায়াবেটিস, উচ্চ রক্তচাপ, জ্বর, শ্বাসকষ্ট, গ্যাস্ট্রিক, থাইরয়েডসহ বিভিন্ন সাধারণ ও দীর্ঘমেয়াদি রোগের চিকিৎসা প্রদান করা হয়।",
  },
];


const HomeQuestion = () => {
    const [active, setActive] = useState(0);
    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-5xl font-bold">
                        প্রায়শই জিজ্ঞাসিত প্রশ্ন
                    </h2>

                    <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-full flex items-center gap-2">
                        সব প্রশ্ন দেখুন
                        <ArrowUpRight size={18} />
                    </button>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">

                    {/* Left Image */}
                    <img
                        src={faqImage}
                        alt="প্রায়শই জিজ্ঞাসিত প্রশ্ন"
                        className="w-full h-[420px] object-cover rounded-[30px]"
                    />

                    {/* FAQ */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`rounded-[22px] transition-all duration-300 ${
                                active === index
                                    ? "bg-[#dfe9ff] p-6"
                                    : "border-b border-gray-200 pb-4"
                                }`}
                            >
                                <button
                                onClick={() => setActive(active === index ? -1 : index)}
                                className="w-full flex justify-between items-center text-left"
                                >
                                <h3 className="text-lg font-semibold">
                                    {faq.question}
                                </h3>

                                {active === index ? (
                                    <ChevronUp size={20} />
                                ) : (
                                    <ChevronDown size={20} />
                                )}
                                </button>

                                {active === index && (
                                <p className="text-gray-600 mt-4 leading-7">
                                    {faq.answer}
                                </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeQuestion
