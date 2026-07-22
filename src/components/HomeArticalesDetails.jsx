import React from 'react'
import { articles } from './HomeRead';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';


const HomeArticalesDetails = () => {
    const { slug } = useParams();
    const article = articles.find((a) => a.slug === slug);

    if (!article) return <h2>Article not found</h2>;
    return (
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-10">
            <img src={article.image} alt={article.title} className="w-full rounded-3xl" />
            <p className="text-blue-600 mt-6">{article.category}</p>
            <h1 className="text-4xl font-bold mt-2">{article.title}</h1>
            <p className="text-gray-500 mt-2">
                {article.date} • {article.readTime}
            </p>
            <p className="text-gray-700 leading-8 mt-8">
                {article.content}
            </p>

            <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/"
                className="group inline-flex items-center gap-3  px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 hover:bg-slate-600 hover:text-white transition-all duration-300 shadow-lg mt-10"
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

export default HomeArticalesDetails
