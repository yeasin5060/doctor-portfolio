import React from 'react'
import sharmin from "../assets/checkup-four.jpg";
import {
  MapPin,
  Clock3,
  Mail,
  Phone,
  ChevronDown,
} from "lucide-react";

const ServiceContact = () => {
  return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="lg:col-span-3 flex flex-col gap-8">
                    {/* Doctor Image */}
                    <img
                        src={sharmin}
                        alt="ডা. শারমিন"
                        className="rounded-[30px] h-[470px] object-cover"
                    />

                    {/* Info Card */}
                    <div className="bg-[#dfe9ff] rounded-[30px] p-10">
                        <div className="grid md:grid-cols-3 gap-8">

                            {/* Location */}
                            <div>
                                <MapPin size={22} className="text-blue-600 mb-4" />

                                <h3 className="font-semibold text-lg">
                                চেম্বারের ঠিকানা
                                </h3>

                                <p className="text-gray-600 mt-2">
                                পপুলার ডায়াগনস্টিক সেন্টার
                                <br />
                                ধানমন্ডি, ঢাকা-১২০৫
                                </p>
                            </div>

                            {/* Work Hours */}
                            <div>
                                <Clock3 size={22} className="text-blue-600 mb-4" />
                                <h3 className="font-semibold text-lg">
                                    চেম্বারের সময়সূচি
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    শনিবার – বৃহস্পতিবার
                                <br />
                                <strong>বিকাল ৫:০০ – রাত ৯:০০</strong>
                                </p>
                                <p className="text-gray-600 mt-5">
                                    শুক্রবার
                                <br />
                                <strong>বন্ধ</strong>
                                </p>
                            </div>

                            {/* Contact */}
                            <div>
                                <Mail size={22} className="text-blue-600 mb-4" />

                                <h3 className="font-semibold text-lg">
                                    যোগাযোগ
                                </h3>

                                <p className="text-gray-600 mt-2">
                                    📧 dr.sharmin@gmail.com
                                </p>

                                <p className="text-gray-600 mt-2">
                                    📞 +৮৮০ ১৭১২-৩৪৫৬৭৮
                                </p>

                                <p className="text-gray-600 mt-2">
                                    🌐 www.drsharmin.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ServiceContact
