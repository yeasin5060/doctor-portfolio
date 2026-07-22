import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { services } from './Services';
import { ArrowLeft } from 'lucide-react';

const ServiceDetails = () => {
    const { slug } = useParams();

    const service = services.find((item) => item.slug === slug);

    if (!service) {
        return <h2>Service Not Found</h2>;
    }
    return (
        <div className="max-w-7xl mx-auto pt-20 pb-10 px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Image */}
                <div>
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[500px] object-cover rounded-3xl shadow-lg"
                    />
                </div>

                {/* Details */}
                <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                        {service.title}
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 leading-8">
                        {service.description}
                    </p>

                    <p className="mt-6 text-gray-700 leading-8 text-justify">
                        {service.longDescription}
                    </p>
                    <Link
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth",})}
                        to="/"
                        className="group inline-flex items-center gap-3 mb-12 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg mt-5"
                        >
                        <ArrowLeft
                            size={20}
                            className="group-hover:-translate-x-1 transition-transform"
                        />
                        <span className="font-semibold">Back to Home</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetails
