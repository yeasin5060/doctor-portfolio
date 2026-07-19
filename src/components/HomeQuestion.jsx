import React from 'react'
import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";
import faqImage from "../assets/sharmin.png";

const faqs = [
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Bring your previous medical records, current prescriptions, and any recent test reports.",
  },
  {
    question: "How long does a consultation usually take?",
    answer:
      "A consultation usually takes between 20–30 minutes depending on your medical needs.",
  },
  {
    question: "Do you accept walk-in patients?",
    answer:
      "Yes, walk-in patients are welcome based on availability. We recommend booking in advance.",
  },
  {
    question: "Can I book an online consultation?",
    answer:
      "Yes. You can easily book a video consultation through our appointment form.",
  },
];


const HomeQuestion = () => {
    const [active, setActive] = useState(0);
  return (
     <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-5xl font-bold">
            Any Question?
          </h2>

          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-full flex items-center gap-2">
            See All
            <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Left Image */}

          <img
            src={faqImage}
            alt="FAQ"
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
                  onClick={() =>
                    setActive(active === index ? -1 : index)
                  }
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
