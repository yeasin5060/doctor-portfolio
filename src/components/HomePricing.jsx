import React from 'react'
import { CheckCircle2, CircleDollarSign } from "lucide-react";

const plans = [
  {
    name: "REGULAR",
    price: 59,
    features: [
      "Monthly health consultation",
      "Basic medical advice via chat",
      "Prescription support",
      "Follow-up reminders",
    ],
  },
  {
    name: "STANDARD",
    price: 79,
    features: [
      "Bi-weekly online consultations",
      "Personalized health plan",
      "24/7 chat support",
      "Routine health reports",
    ],
  },
  {
    name: "PREMIUM",
    price: 89,
    features: [
      "Weekly consultation sessions",
      "24/7 emergency access",
      "Full medical reports & analysis",
      "Wellness & nutrition guidance",
    ],
  },
];

const HomePricing = () => {
  return (
      <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Right Care Plan for Your Health
          </h2>

          <p className="text-gray-500 mt-4">
            Flexible options designed to match your personal medical needs.
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
              <span className="inline-block border border-gray-500 rounded-full px-4 py-1 text-xs font-medium">
                {plan.name}
              </span>

              {/* Price */}
              <div className="flex items-end gap-2 mt-8">
                <span className="text-xl">$</span>

                <h3 className="text-5xl font-bold">
                  {plan.price}
                </h3>

                <span className="text-gray-500 mb-2">
                  / per month
                </span>
              </div>

              {/* Billing */}
              <div className="flex items-center gap-2 mt-5 text-gray-600">
                <CircleDollarSign size={16} />
                <span>Billed Annually</span>
              </div>

              {/* Button */}
              <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full transition">
                Choose Now
              </button>

              {/* Features */}
              <div className="mt-8 space-y-4">

                {plan.features.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3"
                  >
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
