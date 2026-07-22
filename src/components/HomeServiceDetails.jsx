import React from 'react'
import { services } from './HomeServiceSection';
import { useParams } from 'react-router-dom';

const HomeServiceDetails = () => {
    const { slug } = useParams();

    const service = services.find((item) => item.slug === slug);

    if (!service) {
        return <h2>Service Not Found</h2>;
    }
    return (
        <div className="max-w-7xl mx-auto py-20 px-6">
            <img
                src={service.image}
                alt={service.title}
                className="w-full h-[550px] object-cover rounded-3xl"
            />
            <h1 className="text-5xl font-bold mt-10">
                {service.title}
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-8">
                {service.longDescription}
            </p>
        </div>
    )
}

export default HomeServiceDetails
