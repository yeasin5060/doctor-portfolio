import React from 'react'
import sharmin from '../assets/sharmin.png'
import dna from '../assets/dna.png'


const HomeHeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#eef5ff] via-[#f8fbff] to-[#e8f2ff] min-h-screen flex items-center">

            {/* Background Blur */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"/>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"/>

            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">


                <div className="grid lg:grid-cols-3 gap-12 items-center">

                    {/* LEFT */}
                    <div className="space-y-8">

                        <div className="bg-white/70 backdrop-blur-xl rounded-[32px] shadow-xl p-8 border border-white">

                            <img
                                src={dna}
                                alt=""
                                className="w-20 mb-5"
                            />

                            <h2 className="text-6xl font-bold text-[#0B63E5]">
                                ১০+
                            </h2>

                            <p className="text-gray-500 text-lg mt-2">
                                বছরের অভিজ্ঞতা
                            </p>

                            <div className="w-16 h-1 rounded-full bg-blue-500 my-6"></div>

                            <p className="leading-8 text-gray-600">
                                ২০১৫ সাল থেকে হাজারো রোগীকে আধুনিক চিকিৎসা ও
                                আন্তরিক সেবার মাধ্যমে সুস্থ জীবনের নিশ্চয়তা দিয়ে
                                আসছি।
                            </p>

                        </div>

                        <p className="text-xl leading-9 text-gray-700 max-w-sm">
                            দেশের অন্যতম বিশ্বস্ত মেডিসিন বিশেষজ্ঞ,
                            যিনি দীর্ঘদিন ধরে সফলভাবে রোগীদের চিকিৎসা প্রদান করে
                            আসছেন।
                        </p>

                    </div>

                    {/* CENTER */}

                    <div className="relative flex justify-center">

                        <div className="absolute w-[420px] h-[420px] bg-blue-100 rounded-full blur-2xl"></div>

                        <img
                            src={sharmin}
                            alt=""
                            className="relative z-10 w-[700px] drop-shadow-2xl"
                        />

                        <div className="absolute bottom-0 w-full h-44 bg-gradient-to-t from-[#eef5ff] to-transparent"></div>

                    </div>

                    {/* RIGHT */}

                    <div className="flex justify-end">

                        <div className="bg-white/70 backdrop-blur-xl rounded-[32px] shadow-xl border border-white p-8 max-w-sm">

                            <div className="flex items-center gap-4">

                                <img
                                    src={sharmin}
                                    className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover"
                                    alt=""
                                />

                                <div>

                                    <h3 className="text-4xl font-bold text-[#0B63E5]">
                                        ১০,০০০+
                                    </h3>

                                    <p className="text-gray-500">
                                        সন্তুষ্ট রোগী
                                    </p>

                                </div>

                            </div>

                            <img
                                src={dna}
                                className="w-20 ml-auto my-6 opacity-70"
                                alt=""
                            />

                            <p className="text-gray-700 leading-9">
                                এমবিবিএস, এফসিপিএস (মেডিসিন) ডিগ্রিধারী
                                অভিজ্ঞ চিকিৎসক। প্রতিটি রোগীর জন্য
                                আধুনিক, নির্ভুল ও মানবিক চিকিৎসা নিশ্চিত করাই
                                আমাদের অঙ্গীকার।
                            </p>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="text-center mt-20">

                    <span className="inline-block px-6 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-5">
                        Medicine Specialist
                    </span>

                    <h1 className="text-5xl md:text-5xl font-extrabold text-gray-900">
                        ডা. শারমিন
                    </h1>

                    <p className="mt-6 text-xl text-gray-500">
                        এমবিবিএস • এফসিপিএস (মেডিসিন) • এফআরসিএস (বাংলাদেশ)
                    </p>

                </div>

            </div>

        </section>
    )
}

export default HomeHeroSection