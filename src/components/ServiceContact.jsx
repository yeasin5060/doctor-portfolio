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
     <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-8">
                {/* Left Form */}
                <div className="lg:col-span-2 bg-[#dfe9ff] rounded-[30px] p-10">
                    <h2 className="text-5xl font-bold">
                        Contact Info
                    </h2>
                    <p className="text-gray-500 mt-3 mb-8">
                        Questions? Comments? We're just a message away.
                    </p>
                    <form className="space-y-7">
                        <div>
                            <label className="text-sm font-medium">
                                Name
                            </label>
                            <input type="text" placeholder="Jason Dawson*" className="w-full bg-transparent border-b border-gray-300 py-3 outline-none placeholder:text-gray-400"/>
                        </div>
                        <div>
                            <label className="text-sm font-medium"> E-mail </label>
                            <input type="email"
                            placeholder="hello@drwillium.com"
                            className="w-full bg-transparent border-b border-gray-300 py-3 outline-none placeholder:text-gray-400"/>
                        </div>
                        <div>
                            <label className="text-sm font-medium">
                            Services
                            </label>
                            <div className="flex items-center border-b border-gray-300 py-3">
                                <select className="w-full bg-transparent outline-none appearance-none text-gray-400">
                                    <option>Select Service</option>
                                    <option>General Checkup</option>
                                    <option>Cardiology</option>
                                    <option>Diabetes Care</option>
                                </select>
                                <ChevronDown size={18} />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium">
                                Message
                            </label>
                            <textarea
                            rows="2"
                            placeholder="I'd love to learn more about your services here!"
                            className="w-full bg-transparent border-b border-gray-300 py-3 outline-none resize-none placeholder:text-gray-400"
                            />
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-full">
                            Book an Appointment
                        </button>
                    </form>
                </div>
                {/* Right */}
                <div className="lg:col-span-3 flex flex-col gap-8">
                    {/* Image */}
                    <img src={sharmin} alt="" className="rounded-[30px] h-[470px] object-cover"/>
                    {/* Info Card */}
                    <div className="bg-[#dfe9ff] rounded-[30px] p-10">
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Location */}
                            <div>
                                <MapPin size={22} className="text-blue-600 mb-4"/>
                                <h3 className="font-semibold text-lg">
                                    Location
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    123 Maple Street,
                                    <br />
                                    Springfield
                                </p>
                            </div>
                            {/* Hours */}
                            <div>
                                <Clock3 size={22} className="text-blue-600 mb-4"/>
                                <h3 className="font-semibold text-lg">
                                    Work Hours
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Monday–Friday
                                    <br />
                                    <strong>11AM–7PM</strong>
                                </p>
                                <p className="text-gray-600 mt-5">
                                    Sunday
                                    <br />
                                    <strong>11AM–7PM</strong>
                                </p>
                            </div>
                            {/* Support */}
                            <div>
                                <Mail size={22} className="text-blue-600 mb-4"/>
                                <h3 className="font-semibold text-lg">
                                    Support
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    hello@drwillium.com
                                </p>
                                <p className="text-gray-600">
                                    +623 151 211
                                </p>
                                {
                                    /*<div className="flex gap-4 mt-6">
                                    <Twitter size={20} className="cursor-pointer hover:text-blue-600"/>
                                    <FanIcon size={20} className="cursor-pointer hover:text-blue-600"/>
                                    <Instagram size={20} className="cursor-pointer hover:text-blue-600"/>
                                    <Youtube size={20} className="cursor-pointer hover:text-blue-600"/>
                                </div>*/
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServiceContact
