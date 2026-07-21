import React from 'react'
import sharmin from '../assets/sharmin.png'
import dna from '../assets/dna.png'


const HomeHeroSection = () => {
    return (
        <section className="bg-[#eaf2ff] min-h-screen flex items-center justify-center">
            <div className="max-w-7xl w-full px-6 py-16">
                <div className="grid lg:grid-cols-3 items-center gap-10">
                
                    {/* LEFT */}
                    <div className="space-y-8">
                        <div className="rounded-3xl p-6 shadow-lg w-[300px] bg-transparent">
                            <img src={dna} className="w-24" alt="" />

                            <h2 className="text-5xl font-bold mt-2">১০+</h2>

                            <p className="text-gray-500">
                                বছরের অভিজ্ঞতা
                            </p>

                            <p className="mt-10 text-gray-600">
                                ২০১৫ সাল থেকে বিশ্বস্ত ও পেশাদার চিকিৎসা সেবা প্রদান করে আসছি।
                            </p>
                        </div>

                        <p className="text-xl text-gray-700 leading-relaxed w-72">
                        দেশের শীর্ষস্থানীয় ক্লিনিক ও হাজারো রোগীর আস্থার প্রতীক।
                        </p>
                    </div>

                    {/* CENTER */}
                    <div className="relative flex justify-center bg-transparent">
                        <img src={sharmin} alt="" className="w-[620px] relative z-10" />
                        <div className="absolute bottom-0 w-full h-44 bg-gradient-to-t from-[#eaf2ff] to-transparent"></div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex justify-end">
                        <div className="bg-transparent rounded-3xl shadow-lg p-6 w-[320px]">
                            <div className="flex items-center gap-3">
                                    <img src={sharmin} className="w-14" alt="" />

                                    <div>
                                    <h3 className="font-bold text-3xl">
                                        ১০,০০০+
                                    </h3>

                                    <p className="text-gray-500">
                                        সন্তুষ্ট রোগী
                                    </p>
                                </div>
                            </div>

                            <img src={dna} className="w-24 ml-auto mt-2" alt="" />

                            <p className="text-gray-700 mt-8 text-lg leading-8">
                                এমবিবিএস, এফসিপিএস (মেডিসিন) – বিশ্বস্ত চিকিৎসা ও আন্তরিক সেবার মাধ্যমে সুস্থ জীবনের অঙ্গীকার।
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="text-center mt-12">
                    <h1 className="text-6xl font-bold">
                        ডা. শারমিনের
                    </h1>

                    <p className="text-gray-500 mt-4 text-xl">
                        এমবিবিএস • এফসিপিএস (মেডিসিন) • এফআরসিএস (বাংলাদেশ)
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HomeHeroSection