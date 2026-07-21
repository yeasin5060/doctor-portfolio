import React from 'react'
import dna from '../assets/dna.png'

const AboutSectionTitle = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="relative bg-[#dfe9ff] rounded-[24px] overflow-hidden pt-12 pb-6">
                {/* DNA Image */}
                <img src={dna} alt="DNA" className="absolute top-0 left-0 w-24 md:w-28 opacity-90"/>
                {/* Content */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        আমার সম্পর্কে জানুন
                    </h2>
                    <p className="mt-3 text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-7">
                        আমি একজন অভিজ্ঞ মেডিসিন বিশেষজ্ঞ। আধুনিক চিকিৎসা, সঠিক রোগ নির্ণয় এবং
                        রোগীকেন্দ্রিক সেবার মাধ্যমে প্রতিটি রোগীর সুস্বাস্থ্য নিশ্চিত করতে
                        প্রতিশ্রুতিবদ্ধ।
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutSectionTitle
