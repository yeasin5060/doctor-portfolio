import React from 'react'
import { services } from './HomeServiceSection';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const HomeServiceDetails = () => {
    const { slug } = useParams();

    const service = services.find((item) => item.slug === slug);

    if (!service) {
        return <h2>Service Not Found</h2>;
    }
    return (
        <div className="max-w-4xl mx-auto pt-20 pb-10 px-6">
            <img
                src={service.image}
                alt={service.title}
                className="w-full h-[500px] object-cover rounded-3xl"
            />
            <h1 className="text-5xl font-bold mt-10">
                {service.title}
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-8">
                {service.longDescription}
            </p>
            <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth",})}
                to="/"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 hover:bg-green-600 hover:text-white transition-all duration-300 shadow-lg mt-10"
                >
                <ArrowLeft
                    size={20}
                    className="group-hover:-translate-x-1 transition-transform"
                />
                <span className="font-semibold">Back to Home</span>
            </Link>
        </div>
    )
}

export default HomeServiceDetails
