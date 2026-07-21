import React from 'react'
import { ArrowUpRight } from "lucide-react";
import doctorMeeting from "../assets/checkup-three.jpg";


const HomeAppointmentCTA = () => {
    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-[#dfe9ff] rounded-[36px] overflow-hidden">
                    <div className="grid lg:grid-cols-2 items-center gap-8 p-6 lg:p-10">

                        {/* Left */}
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-[520px]">
                                আপনার সুস্বাস্থ্যের জন্য আজই অ্যাপয়েন্টমেন্ট নিন
                            </h2>

                            <p className="text-lg text-gray-600 leading-8 max-w-[500px]">
                                অভিজ্ঞ মেডিসিন বিশেষজ্ঞের পরামর্শ, সঠিক রোগ নির্ণয় এবং আধুনিক চিকিৎসা সেবা পেতে এখনই আমাদের সাথে যোগাযোগ করুন।
                            </p>
                        </div>

                        {/* Right */}
                        <div>
                            <img
                                src={doctorMeeting}
                                alt="ডাক্তারের সাথে অ্যাপয়েন্টমেন্ট"
                                className="w-full h-[380px] object-cover rounded-[28px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeAppointmentCTA
